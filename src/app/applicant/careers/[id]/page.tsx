"use client";

import { useState, useEffect, useCallback, use } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Building2,
  Calendar,
  DollarSign,
  Briefcase,
  Star,
  Share2,
  Shield,
  TrendingUp,
  FileText,
  ExternalLink,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RichTextDisplay } from "@/components/ui/rich-text-display";
import Link from "next/link";
import {
  searchJobPostings,
  getOrganizationById,
  type JobPostingDTO,
  type OrganizationDTO,
} from "@/lib/api/employer-api";

type JobDetail = {
  id: string | number;
  title: string;
  company: string;
  location: string;
  jobType: string[];
  salaryMin?: number;
  salaryMax?: number;
  datePosted?: string;
  industry: string;
  description: string;
  requirements?: string;
  benefits?: string;
  clearanceRequired: boolean;
  experienceLevel?: string;
  education?: string;
  applicationDeadline?: string;
  applyUrl?: string;
  companyAbout?: string;
  companyWebsite?: string;
};

const mapPostingToJobDetail = (
  posting: JobPostingDTO,
  organization?: OrganizationDTO | null,
): JobDetail => {
  const city = posting.city || "";
  const state = posting.state || "";
  const zip = posting.zipCode || (posting as { zipcode?: string }).zipcode || "";
  const jobTypeArray = posting.jobType
    ? posting.jobType
        .split(/[,/|]/)
        .map((item) => item.trim())
        .filter(Boolean)
    : ["Full-time"];
  const entryDate =
    typeof posting.entryDate === "string"
      ? posting.entryDate
      : posting.entryDate instanceof Date
        ? posting.entryDate.toISOString()
        : undefined;

  const applicationDeadline =
    posting.applicationDeadlineDate instanceof Date
      ? posting.applicationDeadlineDate.toISOString()
      : typeof posting.applicationDeadlineDate === "string"
        ? posting.applicationDeadlineDate
        : undefined;

  return {
    id:
      posting.jobPostingId ??
      (posting as { jobPostingID?: number }).jobPostingID ??
      `${posting.jobTitle ?? "job"}-${Math.random().toString(36).slice(2, 9)}`,
    title: posting.jobTitle || "Untitled role",
    company: organization?.organizationName || posting.industry || "HUBZone Employer",
    location: [city, state, zip].filter(Boolean).join(", ") || "Location not specified",
    jobType: jobTypeArray,
    salaryMin: posting.salaryMin ?? undefined,
    salaryMax: posting.salaryMax ?? undefined,
    datePosted: entryDate,
    industry: posting.industry || "Not specified",
    description: posting.jobDescription || "No description provided yet.",
    requirements: posting.requirements && posting.requirements.trim() ? posting.requirements : undefined,
    benefits: posting.benefits && posting.benefits.trim() ? posting.benefits : undefined,
    clearanceRequired: Boolean(posting.clearanceRequired),
    experienceLevel: posting.experienceLevel && posting.experienceLevel.trim() ? posting.experienceLevel : undefined,
    education: posting.education && posting.education.trim() ? posting.education : undefined,
    applicationDeadline: applicationDeadline || undefined,
    applyUrl: posting.employerExternalJobApplyUrl || undefined,
    companyAbout: organization?.about || organization?.description || undefined,
    companyWebsite: organization?.website || undefined,
  };
};

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const jobId = id;
  const [mounted, setMounted] = useState(false);
  const [job, setJob] = useState<JobDetail | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadJobFromApi = useCallback(async (id: string) => {
    try {
      const jobIdNum = Number.parseInt(id, 10);
      if (Number.isNaN(jobIdNum)) {
        throw new Error("Invalid job ID");
      }
      
      // Search through job postings to find the job by ID
      // All job details are present in the search results
      let posting: JobPostingDTO | null = null;
      const maxPagesToScan = 20; // Scan up to 20 pages to find the job
      
      for (let page = 1; page <= maxPagesToScan; page++) {
        try {
          const response = await searchJobPostings({ page, pageSize: 50 });
          
          // Find the job in the current page
          const found = response.content.find((job) => {
            const postingId = job.jobPostingId ?? (job as { jobPostingID?: number }).jobPostingID;
            return postingId?.toString() === id || postingId === jobIdNum;
          });
          
          if (found) {
            posting = found;
            break;
          }
          
          // If we've reached the last page, stop searching
          if (page >= response.totalPages) {
            break;
          }
        } catch (pageError) {
          // Continue to next page
        }
      }

      if (!posting) {
        return { posting: null, organization: null };
      }

      // Fetch organization details if organizationId is available
      let organization: OrganizationDTO | null = null;
      if (posting.organizationId) {
        try {
          organization = await getOrganizationById(posting.organizationId);
        } catch (orgError) {
          // Continue without organization data
        }
      }

      return { posting, organization };
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    const loadJob = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let jobData: JobDetail | null = null;
        if (typeof window !== "undefined") {
          const cached = sessionStorage.getItem(`job-detail-${jobId}`);
          if (cached) {
            jobData = JSON.parse(cached) as JobDetail;
          }
        }

        if (!jobData) {
          const result = await loadJobFromApi(jobId);
          if (result.posting) {
            jobData = mapPostingToJobDetail(result.posting, result.organization);
            if (typeof window !== "undefined") {
              sessionStorage.setItem(`job-detail-${jobId}`, JSON.stringify(jobData));
            }
          }
        }

        if (!jobData) {
          setError("Job not found or is no longer available.");
          setJob(null);
        } else {
          setJob(jobData);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load job details. Please try again later.",
        );
        setJob(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadJob();
  }, [jobId, loadJobFromApi]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Job Details Unavailable</h2>
          <p className="text-muted-foreground mb-4">
            {error || "The job you're looking for doesn't exist or is no longer available."}
          </p>
          <Button onClick={() => router.push("/applicant/careers")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return "Not specified";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatSalary = (min?: number, max?: number) => {
    if (min == null || max == null) return "Not provided";
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className="relative mx-auto max-w-5xl px-6 py-8 md:px-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button variant="ghost" onClick={() => router.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
          </Button>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Job Header */}
            <Card className="p-6 border-2">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h1 className="text-3xl font-bold">{job.title}</h1>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.jobType.map((type) => (
                      <Badge key={type} variant="outline" className="text-sm">
                        {type}
                      </Badge>
                    ))}
                    {job.clearanceRequired && (
                      <Badge variant="outline" className="text-sm">
                        <Shield className="mr-1 h-3 w-3" />
                        Clearance Required
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Salary</div>
                  <div className="flex items-center gap-1 font-semibold">
                    <DollarSign className="h-4 w-4 text-primary" />
                    {formatSalary(job.salaryMin, job.salaryMax)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Experience</div>
                  <div className="flex items-center gap-1 font-semibold">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    {job.experienceLevel}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Posted</div>
                  <div className="flex items-center gap-1 font-semibold">
                    <Calendar className="h-4 w-4 text-primary" />
                    {formatDate(job.datePosted)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Industry</div>
                  <div className="flex items-center gap-1 font-semibold">
                    <Briefcase className="h-4 w-4 text-primary" />
                    {job.industry}
                  </div>
                </div>
              </div>
            </Card>

            {/* Job Description */}
            <Card className="p-6 border-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Job Description
              </h2>
              <RichTextDisplay content={job.description} />
            </Card>

            {/* Requirements */}
            <Card className="p-6 border-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Requirements
              </h2>
              {job.requirements && job.requirements.trim() ? (
                <RichTextDisplay content={job.requirements} />
              ) : (
                <p className="text-muted-foreground">Requirements will be shared soon.</p>
              )}
            </Card>

            {/* Benefits */}
            <Card className="p-6 border-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Benefits
              </h2>
              {job.benefits && job.benefits.trim() ? (
                <RichTextDisplay content={job.benefits} />
              ) : (
                <p className="text-muted-foreground">Benefits information is not available.</p>
              )}
            </Card>

            {/* Company Info */}
            <Card className="p-6 border-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                About {job.company}
              </h2>
              {job.companyAbout && job.companyAbout.trim() ? (
                <RichTextDisplay content={job.companyAbout} />
              ) : (
                <p className="text-muted-foreground">
                  Additional company information will be provided when available.
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {job.companyWebsite && (
                  <Button variant="outline" asChild>
                    <Link href={job.companyWebsite} target="_blank" rel="noopener noreferrer">
                      Visit Company Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {job.applyUrl && (
                  <Button variant="outline" asChild>
                    <Link href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                      Visit Application Page
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Actions */}
            <Card className="p-6 border-2 sticky top-6">
              <div className="space-y-4">
                {job.applyUrl ? (
                  <Button className="w-full" size="lg" asChild>
                    <Link href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                      <Send className="mr-2 h-4 w-4" />
                      Apply Now
                    </Link>
                  </Button>
                ) : (
                  <Button className="w-full" size="lg" disabled>
                    <Send className="mr-2 h-4 w-4" />
                    Application Link Unavailable
                  </Button>
                )}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    <Star className={`mr-2 h-4 w-4 ${isSaved ? "fill-yellow-400" : ""}`} />
                    {isSaved ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Separator />
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">Application Deadline</div>
                    <div className="font-semibold">
                      {job.applicationDeadline ? formatDate(job.applicationDeadline) : "Not specified"}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Education Required</div>
                    <div className="font-semibold">
                      {job.education && job.education.trim() ? job.education : "Not specified"}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Experience Level</div>
                    <div className="font-semibold">
                      {job.experienceLevel && job.experienceLevel.trim() ? job.experienceLevel : "Not specified"}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Job ID</div>
                    <div className="font-semibold">#{job.id.toString().padStart(6, "0")}</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

