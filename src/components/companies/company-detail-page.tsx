"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Calendar,
  ArrowLeft,
  Briefcase,
  Award,
  Sparkles,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { RichTextDisplay } from "@/components/ui/rich-text-display";
import Link from "next/link";
import {
  getOrganizationById,
  getOrganizationJobs,
  type JobPostingDTO,
} from "@/lib/api/employer-api";
import {
  CompanyProfile,
  mapOrganizationToCompanyProfile,
} from "@/components/companies/organization-utils";

export function CompanyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const companyId = params?.id as string | undefined;
  const [activeTab, setActiveTab] = useState("overview");
  const [company, setCompany] = useState<CompanyProfile | null>(null);
  const [isLoadingCompany, setIsLoadingCompany] = useState(true);
  const [companyError, setCompanyError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<JobPostingDTO[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);
  const [jobsError, setJobsError] = useState<string | null>(null);

  useEffect(() => {
    if (!companyId) {
      setCompanyError("Company not specified.");
      setIsLoadingCompany(false);
      return;
    }

    let isMounted = true;

    const fetchCompany = async () => {
      setIsLoadingCompany(true);
      setCompanyError(null);
      try {
        const organization = await getOrganizationById(companyId);
        if (!organization) {
          throw new Error("Company not found.");
        }
        if (isMounted) {
          setCompany(mapOrganizationToCompanyProfile(organization));
        }
      } catch (error) {
        if (isMounted) {
          setCompanyError(
            error instanceof Error
              ? error.message
              : "Failed to load company details. Please try again later.",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoadingCompany(false);
        }
      }
    };

    fetchCompany();

    return () => {
      isMounted = false;
    };
  }, [companyId]);

  useEffect(() => {
    if (!company?.numericId) {
      setJobs([]);
      return;
    }

    let isMounted = true;

    const fetchJobs = async () => {
      setIsLoadingJobs(true);
      setJobsError(null);
      try {
        const organizationJobs = await getOrganizationJobs(company.numericId as number);
        if (isMounted) {
          setJobs(organizationJobs);
          // Update activeJobs count - count only jobs where active === true
          const activeJobsCount = organizationJobs.filter((job) => job.active === true).length;
          setCompany((prev) => {
            if (!prev) return prev;
            return { ...prev, activeJobs: activeJobsCount };
          });
        }
      } catch (error) {
        if (isMounted) {
          setJobsError(
            error instanceof Error
              ? error.message
              : "Failed to load organization jobs. Please try again later.",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoadingJobs(false);
        }
      }
    };

    fetchJobs();

    return () => {
      isMounted = false;
    };
  }, [company?.numericId]);

  const tabs = [
    { id: "overview", label: "Overview", icon: Building2 },
    { id: "about", label: "About", icon: Globe },
    { id: "industries", label: "Industries & Tech", icon: Briefcase },
    { id: "benefits", label: "Benefits", icon: Award },
    { id: "jobs", label: "Open Jobs", icon: Briefcase },
  ];

  if (isLoadingCompany) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Loading company details...</p>
      </div>
    );
  }

  if (companyError || !company) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-lg font-semibold mb-2">
          {companyError || "Company not found."}
        </p>
        <p className="text-muted-foreground mb-6">
          Please try again later or return to the companies list.
        </p>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Button variant="ghost" onClick={() => router.back()} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Companies
        </Button>
      </motion.div>

      {/* Company Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Card className="p-8 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="flex items-start gap-6">
            <div className="h-20 w-20 rounded-xl bg-primary/10 flex items-center justify-center border-2 border-primary/20">
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-full rounded-xl object-cover"
                />
              ) : (
                <Building2 className="h-10 w-10 text-primary" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
              <TypingText
                text={company.name}
                className="text-3xl font-semibold mb-2"
                speed={50}
              />
              <p className="text-muted-foreground text-lg">{company.industry}</p>
                </div>
                <Badge variant="secondary" className="gap-1 text-base px-3 py-1">
                  <Sparkles className="h-4 w-4" />
                  {company.matchScore}% Match
                </Badge>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{company.employees} employees</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Founded {company.founded}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>{company.activeJobs} open jobs</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex flex-wrap gap-2 border-b border-border/60 pb-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && <OverviewTab company={company} />}
          {activeTab === "about" && <AboutTab company={company} />}
          {activeTab === "industries" && <IndustriesTab company={company} />}
          {activeTab === "benefits" && <BenefitsTab company={company} />}
          {activeTab === "jobs" && (
            <JobsTab
              company={company}
              jobs={jobs}
              isLoading={isLoadingJobs}
              error={jobsError}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* AI Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <Card className="p-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">AI Recommendation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your profile, this company has a {company.matchScore}% match with your
                skills and preferences. We recommend exploring their open positions.
              </p>
              <Button asChild>
                <Link href={`/applicant/careers?company=${company.id}`}>
                  View Open Positions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

// Overview Tab
function OverviewTab({ company }: { company: CompanyProfile }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            {company.email ? (
              <a
                href={`mailto:${company.email}`}
                className="text-foreground hover:text-primary"
              >
                {company.email}
              </a>
            ) : (
              <span className="text-muted-foreground">Email not provided</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>{company.phone || "Phone not provided"}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-muted-foreground" />
            {company.website ? (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                {company.website}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-muted-foreground">Website not provided</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            {company.addressLine1 || company.city || company.state ? (
              <span>
                {company.addressLine1}
                {company.addressLine2 && `, ${company.addressLine2}`}
                {(company.city || company.state || company.zipCode) && (
                  <>
                    <br />
                    {[company.city, company.state, company.zipCode]
                      .filter(Boolean)
                      .join(", ")}
                  </>
                )}
              </span>
            ) : (
              <span className="text-muted-foreground">Address not provided</span>
            )}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Company Stats</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">Headquarters</label>
            <p className="font-medium">{company.headquarters}</p>
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Office Policy</label>
            <p className="font-medium">{company.officePolicy}</p>
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Employees</label>
            <p className="font-medium">{company.employees}</p>
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Founded</label>
            <p className="font-medium">{company.founded}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 md:col-span-2">
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <div className="flex gap-4 flex-wrap">
          {company.social.linkedin && (
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          )}
          {company.social.twitter && (
            <a
              href={company.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
          )}
          {company.social.facebook && (
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          )}
          {company.social.instagram && (
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          )}
          {!company.social.linkedin &&
            !company.social.twitter &&
            !company.social.facebook &&
            !company.social.instagram && (
              <p className="text-sm text-muted-foreground">
                No social links provided.
              </p>
            )}
        </div>
      </Card>
    </div>
  );
}

// About Tab
function AboutTab({ company }: { company: CompanyProfile }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">About the Company</h3>
      {company.about ? (
        <RichTextDisplay content={company.about} />
      ) : (
        <p className="text-sm text-muted-foreground">
          This company has not provided additional information yet.
        </p>
      )}
    </Card>
  );
}

// Industries Tab
function IndustriesTab({ company }: { company: CompanyProfile }) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Industries</h3>
        {company.industries.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {company.industries.map((industry) => (
              <Badge key={industry} variant="secondary" className="text-sm py-1.5 px-3">
                {industry}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No industries listed.</p>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Tech Stacks</h3>
        {company.techStacks.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {company.techStacks.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-1.5 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No technologies listed.</p>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Job Roles</h3>
        {company.jobRoles.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {company.jobRoles.map((role) => (
              <Badge key={role} variant="outline" className="text-sm py-1.5 px-3">
                {role}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No job roles specified.</p>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Job Types</h3>
        {company.jobTypes.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {company.jobTypes.map((type) => (
              <Badge key={type} variant="outline" className="text-sm py-1.5 px-3">
                {type}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No job types specified.</p>
        )}
      </Card>
    </div>
  );
}

// Benefits Tab
function BenefitsTab({ company }: { company: CompanyProfile }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Employee Benefits</h3>
      {company.benefits.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {company.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Benefits information is not available at the moment.
        </p>
      )}
    </Card>
  );
}

type JobsTabProps = {
  company: CompanyProfile;
  jobs: JobPostingDTO[];
  isLoading: boolean;
  error: string | null;
};

function JobsTab({ company, jobs, isLoading, error }: JobsTabProps) {
  if (isLoading) {
    return (
      <Card className="p-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4" />
        <p className="text-sm text-muted-foreground">
          Loading open positions...
        </p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6 border-red-200 bg-red-50 dark:border-red-900/40 dark:bg-red-950/20">
        <p className="text-sm text-red-600 dark:text-red-300">{error}</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Open Positions</h3>
        <Button asChild variant="outline">
          <Link href={`/applicant/careers?company=${company.id}`}>
            View All Jobs
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {jobs.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-sm text-muted-foreground">
            This organization hasn&apos;t posted any jobs yet. Check back soon!
          </p>
        </Card>
      ) : (
        jobs.map((job, index) => {
          const jobId =
            job.jobPostingId ??
            (job as { jobPostingID?: number }).jobPostingID ??
            index;
          const location = [job.city, job.state]
            .filter(Boolean)
            .join(", ")
            .trim();
          const deadline = job.applicationDeadlineDate
            ? new Date(job.applicationDeadlineDate).toLocaleDateString()
            : null;

          return (
            <motion.div
              key={jobId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">
                        {job.jobTitle || "Untitled Role"}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {job.jobDescription ||
                          "No description provided for this role yet."}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      {job.jobType && (
                        <Badge variant="outline" className="text-xs">
                          {job.jobType}
                        </Badge>
                      )}
                      {location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {location}
                        </span>
                      )}
                      {job.experienceLevel && <span>{job.experienceLevel}</span>}
                      {deadline && (
                        <span className="text-foreground font-medium">
                          Apply by {deadline}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/applicant/careers/${jobId}`}>Apply</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })
      )}
    </div>
  );
}

