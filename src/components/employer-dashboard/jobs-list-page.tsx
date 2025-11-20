"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { getEmployerJobPostings, JobPostingDTO, toggleJobActiveStatus } from "@/lib/api/employer-api";
import {
  Briefcase,
  Plus,
  Search,
  Filter,
  Users,
  Calendar,
  MapPin,
  DollarSign,
  Eye,
  Edit,
  FileText,
  Sparkles,
  CheckCircle2,
  X,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";

export function JobsListPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [jobs, setJobs] = useState<JobPostingDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [togglingJobId, setTogglingJobId] = useState<number | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const jobPostings = await getEmployerJobPostings();
        setJobs(jobPostings);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load job postings";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.industry?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.city?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatSalary = (min?: number, max?: number) => {
    if (!min && !max) return "Not specified";
    if (min && max) return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    if (min) return `$${min.toLocaleString()}+`;
    if (max) return `Up to $${max.toLocaleString()}`;
    return "Not specified";
  };

  const formatDate = (dateValue?: string | Date) => {
    if (!dateValue) return "N/A";
    try {
      const date = typeof dateValue === "string" ? new Date(dateValue) : dateValue;
      if (isNaN(date.getTime())) return "N/A";
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "N/A";
    }
  };

  const getLocation = (job: JobPostingDTO) => {
    if (job.jobPreference?.includes("Remote")) return "Remote";
    const parts: string[] = [];
    if (job.city) parts.push(job.city);
    if (job.state) parts.push(job.state);
    if (job.zipCode) parts.push(job.zipCode);
    return parts.length > 0 ? parts.join(", ") : "Location not specified";
  };

  const handleToggleActive = async (jobId: number, currentStatus: boolean) => {
    setTogglingJobId(jobId);
    try {
      await toggleJobActiveStatus(jobId, !currentStatus);
      // Refresh the entire jobs list to get updated data from backend
      const jobPostings = await getEmployerJobPostings();
      setJobs(jobPostings);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update job status";
      setError(errorMessage);
      setTimeout(() => setError(null), 5000);
    } finally {
      setTogglingJobId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <TypingText
            text="Job Postings"
            className="text-3xl font-semibold mb-2"
            speed={50}
          />
          <p className="text-muted-foreground">
            Manage your job postings and review applications
          </p>
        </div>
        <Button asChild>
          <Link href="/employer/dashboard/jobs/new">
            <Plus className="mr-2 h-4 w-4" />
            Post New Job
          </Link>
        </Button>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading job postings...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <Card className="p-6">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </div>
        </Card>
      )}

      {/* Jobs List */}
      {!isLoading && !error && (
        <div className="grid gap-4">
          {filteredJobs.length === 0 ? (
            <Card className="p-12 text-center">
              <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No job postings found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery
                  ? "No jobs match your search criteria."
                  : "You haven't posted any jobs yet."}
              </p>
              {!searchQuery && (
                <Button asChild>
                  <Link href="/employer/dashboard/jobs/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Post Your First Job
                  </Link>
                </Button>
              )}
            </Card>
          ) : (
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.jobPostingId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Briefcase className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">{job.jobTitle || "Untitled Job"}</h3>
                              <Badge variant={job.active !== false ? "default" : "secondary"}>
                                {job.active !== false ? "Active" : "Inactive"}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {getLocation(job)}
                              </div>
                              {job.jobType && (
                                <div className="flex items-center gap-1">
                                  <Briefcase className="h-4 w-4" />
                                  {job.jobType}
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                {formatSalary(job.salaryMin, job.salaryMax)}
                              </div>
                              {job.industry && (
                                <div className="flex items-center gap-1">
                                  <FileText className="h-4 w-4" />
                                  {job.industry}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              {job.entryDate && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  Posted: {formatDate(job.entryDate)}
                                </span>
                              )}
                              {job.applicationDeadlineDate && (
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  Deadline: {formatDate(job.applicationDeadlineDate)}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Applicants Preview */}
                        {selectedJob === job.jobPostingId && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-border/60"
                          >
                            <ApplicantsList jobId={job.jobPostingId!} />
                          </motion.div>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <Button
                          variant={job.active !== false ? "destructive" : "default"}
                          size="sm"
                          onClick={() => handleToggleActive(job.jobPostingId!, job.active !== false)}
                          disabled={togglingJobId === job.jobPostingId}
                        >
                          {togglingJobId === job.jobPostingId ? (
                            <>
                              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-current mr-2"></div>
                              Updating...
                            </>
                          ) : job.active !== false ? (
                            <>
                              <X className="mr-2 h-4 w-4" />
                              Deactivate
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="mr-2 h-4 w-4" />
                              Activate
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedJob(selectedJob === job.jobPostingId ? null : job.jobPostingId!)}
                        >
                          {selectedJob === job.jobPostingId ? (
                            <>
                              <X className="mr-2 h-4 w-4" />
                              Hide
                            </>
                          ) : (
                            <>
                              <Users className="mr-2 h-4 w-4" />
                              View Applicants
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/employer/dashboard/jobs/${job.jobPostingId}`}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/employer/dashboard/jobs/${job.jobPostingId}/screen`}>
                            <FileText className="mr-2 h-4 w-4" />
                            Screen Resumes
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
}

// Applicants List Component
function ApplicantsList({ jobId }: { jobId: number }) {
  // Mock applicants data
  const applicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      status: "pending",
      appliedDate: "2024-01-16",
      matchScore: 95,
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      status: "reviewed",
      appliedDate: "2024-01-17",
      matchScore: 88,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      status: "shortlisted",
      appliedDate: "2024-01-18",
      matchScore: 92,
    },
  ];

  return (
    <div className="space-y-3">
      <h4 className="font-semibold mb-3">Applicants ({applicants.length})</h4>
      {applicants.map((applicant) => (
        <motion.div
          key={applicant.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between p-3 rounded-lg border border-border/60 bg-muted/20"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">
                {applicant.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium">{applicant.name}</p>
              <p className="text-xs text-muted-foreground">{applicant.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="h-3 w-3" />
              {applicant.matchScore}% Match
            </Badge>
            <Badge
              variant={
                applicant.status === "shortlisted"
                  ? "default"
                  : applicant.status === "reviewed"
                    ? "secondary"
                    : "outline"
              }
            >
              {applicant.status}
            </Badge>
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/employer/dashboard/applicants/${applicant.id}`}>
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

