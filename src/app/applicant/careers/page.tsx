"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  Calendar,
  Filter,
  Sparkles,
  X,
  Clock,
  DollarSign,
  Building2,
  TrendingUp,
  Star,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  searchJobPostings,
  type JobPostingDTO,
  type JobSearchResponse,
} from "@/lib/api/employer-api";

const industries = [
  "Healthcare",
  "Technology",
  "Education",
  "Finance",
  "Construction / Skilled Trades",
  "Retail / Hospitality",
  "Manufacturing",
  "Creative / Design",
  "Administrative",
  "Transportation / Logistics",
];

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Temporary",
  "Remote",
  "Hybrid",
  "On-site",
];

const datePostedOptions = [
  "Any time",
  "Last 24 hours",
  "Last 3 days",
  "Last week",
  "Last 2 weeks",
  "Last month",
];

const experienceLevels = [
  "Entry Level",
  "Mid-level",
  "Senior",
  "Executive",
];

const salaryRanges = [
  "Any",
  "$30k - $50k",
  "$50k - $75k",
  "$75k - $100k",
  "$100k - $125k",
  "$125k - $150k",
  "$150k+",
];

type Job = {
  id: string | number;
  title: string;
  company: string;
  location: string;
  city: string;
  state: string;
  zipcode: string;
  jobType: string[];
  salaryMin?: number;
  salaryMax?: number;
  datePosted?: string;
  industry: string;
  description: string;
  clearanceRequired: boolean;
  experienceLevel?: string;
};

const mapJobPostingToJob = (posting: JobPostingDTO): Job => {
  const city = posting.city || "";
  const state = posting.state || "";
  const zipcode = posting.zipCode || (posting as { zipcode?: string }).zipcode || "";
  const jobTypeArray = posting.jobType
    ? posting.jobType
        .split(/[,/|]/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
  const entryDate =
    typeof posting.entryDate === "string"
      ? posting.entryDate
      : posting.entryDate instanceof Date
        ? posting.entryDate.toISOString()
        : undefined;

  return {
    id:
      posting.jobPostingId ??
      (posting as { jobPostingID?: number }).jobPostingID ??
      `${posting.jobTitle ?? "job"}-${Math.random().toString(36).slice(2, 9)}`,
    title: posting.jobTitle || "Untitled role",
    company: posting.industry || "HUBZone Employer",
    location: [city, state, zipcode].filter(Boolean).join(", ") || "Location not specified",
    city,
    state,
    zipcode,
    jobType: jobTypeArray.length > 0 ? jobTypeArray : ["Full-time"],
    salaryMin: posting.salaryMin,
    salaryMax: posting.salaryMax,
    datePosted: entryDate,
    industry: posting.industry || "Not specified",
    description: posting.jobDescription || "No description provided yet.",
    clearanceRequired: Boolean(posting.clearanceRequired),
    experienceLevel: posting.experienceLevel,
  };
};

type Filters = {
  search: string;
  location: string; // Combined location field
  jobType: string[];
  datePosted: string;
  industry: string[];
  experienceLevel: string[];
  salaryRange: string;
  clearanceRequired: boolean | null;
  hubZoneOnly: boolean;
};

export default function ApplicantCareers() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);
  const [jobsError, setJobsError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pick<JobSearchResponse, "currentPage" | "totalPages">>({
    currentPage: 1,
    totalPages: 1,
  });
  const [filters, setFilters] = useState<Filters>({
    search: "",
    location: "",
    jobType: [],
    datePosted: "",
    industry: [],
    experienceLevel: [],
    salaryRange: "",
    clearanceRequired: null,
    hubZoneOnly: false,
  });

  const fetchJobs = useCallback(
    async (page = 1) => {
      setIsLoadingJobs(true);
      setJobsError(null);
      try {
        const response = await searchJobPostings({
          jobTitle: filters.search || undefined,
          city: filters.location || undefined,
          jobType: filters.jobType[0],
          industry: filters.industry[0],
          datePosted: filters.datePosted || undefined,
          page,
        });
        setJobs(response.content.map(mapJobPostingToJob));
        setPagination({
          currentPage: response.currentPage,
          totalPages: response.totalPages,
        });
      } catch (error) {
        setJobs([]);
        setJobsError(
          error instanceof Error ? error.message : "Failed to load job postings. Please try again.",
        );
      } finally {
        setIsLoadingJobs(false);
      }
    },
    [filters],
  );

  useEffect(() => {
    setMounted(true);
    fetchJobs(1);
  }, [fetchJobs]);

  const handleSearch = () => {
    fetchJobs(1);
  };

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > pagination.totalPages) return;
    fetchJobs(nextPage);
  };

  const handleViewDetails = (job: Job) => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(`job-detail-${job.id}`, JSON.stringify(job));
      } catch {
        // ignore storage errors
      }
    }
    router.push(`/applicant/careers/${job.id}`);
  };

  const handleFilterChange = (
    key: keyof Filters,
    value: string | string[] | boolean | null,
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value as Filters[typeof key] }));
  };

  const toggleArrayFilter = (
    key: "jobType" | "industry" | "experienceLevel",
    value: string
  ) => {
    setFilters((prev) => {
      const current = prev[key] as string[];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      location: "",
      jobType: [],
      datePosted: "",
      industry: [],
      experienceLevel: [],
      salaryRange: "",
      clearanceRequired: null,
      hubZoneOnly: false,
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.location ||
    filters.jobType.length > 0 ||
    filters.datePosted ||
    filters.industry.length > 0 ||
    filters.experienceLevel.length > 0 ||
    filters.salaryRange ||
    filters.clearanceRequired !== null ||
    filters.hubZoneOnly;

  const totalActiveFilters =
    (filters.search ? 1 : 0) +
    (filters.location ? 1 : 0) +
    filters.jobType.length +
    (filters.datePosted ? 1 : 0) +
    filters.industry.length +
    filters.experienceLevel.length +
    (filters.salaryRange ? 1 : 0) +
    (filters.clearanceRequired !== null ? 1 : 0) +
    (filters.hubZoneOnly ? 1 : 0);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      !filters.search ||
      job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.description.toLowerCase().includes(filters.search.toLowerCase());

    const matchesLocation =
      !filters.location ||
      job.location.toLowerCase().includes(filters.location.toLowerCase()) ||
      job.city.toLowerCase().includes(filters.location.toLowerCase()) ||
      job.state.toLowerCase().includes(filters.location.toLowerCase()) ||
      job.zipcode.includes(filters.location);

    const matchesJobType =
      filters.jobType.length === 0 ||
      filters.jobType.some((type) => job.jobType.includes(type));

    const matchesIndustry =
      filters.industry.length === 0 || filters.industry.includes(job.industry);

    const matchesExperienceLevel =
      filters.experienceLevel.length === 0 ||
      (job.experienceLevel ? filters.experienceLevel.includes(job.experienceLevel) : false);

    const matchesSalaryRange = (() => {
      if (!filters.salaryRange || filters.salaryRange === "Any") return true;
      if (job.salaryMin == null || job.salaryMax == null) return false;
      if (filters.salaryRange.includes("+")) {
        const minVal = parseInt(filters.salaryRange.replace(/[^0-9]/g, "")) * 1000;
        return job.salaryMin >= minVal;
      }
      const [minLabel, maxLabel] = filters.salaryRange.split(" - ");
      const min = parseInt(minLabel.replace(/[^0-9]/g, "")) * 1000;
      const max = parseInt(maxLabel.replace(/[^0-9]/g, "")) * 1000;
      return job.salaryMin >= min && job.salaryMax <= max;
    })();

    const matchesClearance =
      filters.clearanceRequired === null || job.clearanceRequired === filters.clearanceRequired;

    const matchesHubZone =
      !filters.hubZoneOnly ||
      job.industry.toLowerCase().includes("hubzone") ||
      job.company.toLowerCase().includes("hubzone");

    const matchesDatePosted = (() => {
      if (!filters.datePosted || filters.datePosted === "Any time" || !job.datePosted) return true;
      const jobDate = new Date(job.datePosted);
      const now = new Date();
      const diffDays = Math.floor((now.getTime() - jobDate.getTime()) / (1000 * 60 * 60 * 24));

      switch (filters.datePosted) {
        case "Last 24 hours":
          return diffDays <= 1;
        case "Last 3 days":
          return diffDays <= 3;
        case "Last week":
          return diffDays <= 7;
        case "Last 2 weeks":
          return diffDays <= 14;
        case "Last month":
          return diffDays <= 30;
        default:
          return true;
      }
    })();

    return (
      matchesSearch &&
      matchesLocation &&
      matchesJobType &&
      matchesIndustry &&
      matchesExperienceLevel &&
      matchesSalaryRange &&
      matchesClearance &&
      matchesHubZone &&
      matchesDatePosted
    );
  });

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Recently posted";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return "Recently posted";
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const formatSalary = (min?: number, max?: number) => {
    if (min == null || max == null) {
      return "Salary not provided";
    }
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
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

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <TypingText
                text="Find Your Dream Job"
                className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
                speed={50}
              />
              <p className="text-lg text-muted-foreground">
                {isLoadingJobs
                  ? "Loading jobs..."
                  : `${filteredJobs.length} ${filteredJobs.length === 1 ? "job" : "jobs"} available`}
              </p>
            </div>
            {mounted && (
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  AI-Powered Matching
                </Badge>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <Card className="p-4 border-2 border-border/60 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search jobs by title, company, or keywords..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="City, State, or Zip Code"
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="h-12 gap-2" size="lg">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                      {totalActiveFilters > 0 && (
                        <Badge variant="secondary" className="ml-1">
                          {totalActiveFilters}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto border-l-2 border-border/60">
                    <div className="flex flex-col h-full">
                      <SheetHeader className="border-b border-border/60 pb-6 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <SheetTitle className="text-2xl font-semibold flex items-center gap-2">
                              <Filter className="h-5 w-5 text-primary" />
                              Job Filters
                            </SheetTitle>
                            <SheetDescription className="mt-2">
                              {hasActiveFilters
                                ? `${totalActiveFilters} filter${totalActiveFilters > 1 ? "s" : ""} active`
                                : "Refine your job search with multiple filters"}
                            </SheetDescription>
                          </div>
                          {hasActiveFilters && (
                            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
                              <X className="h-4 w-4" />
                              Clear All
                            </Button>
                          )}
                        </div>
                      </SheetHeader>

                      <div className="flex-1 overflow-y-auto py-6">
                        <div className="space-y-8 px-6">
                          {/* Job Type Filter */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4"
                          >
                            <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                              <Briefcase className="h-4 w-4 text-primary" />
                              Job Type
                            </Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                              {jobTypes.map((type, index) => (
                                <motion.label
                                  key={type}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.1 + index * 0.02 }}
                                  className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                                >
                                  <Checkbox
                                    checked={filters.jobType.includes(type)}
                                    onCheckedChange={() => toggleArrayFilter("jobType", type)}
                                  />
                                  <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                                    {type}
                                  </span>
                                  {filters.jobType.includes(type) && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                                    />
                                  )}
                                </motion.label>
                              ))}
                            </div>
                          </motion.div>

                          {/* Date Posted Filter */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                          >
                            <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                              <Calendar className="h-4 w-4 text-primary" />
                              Date Posted
                            </Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                              {datePostedOptions.map((option, index) => (
                                <motion.label
                                  key={option}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2 + index * 0.02 }}
                                  className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                                >
                                  <input
                                    type="radio"
                                    name="datePosted"
                                    checked={filters.datePosted === option}
                                    onChange={() => handleFilterChange("datePosted", option)}
                                    className="h-4 w-4 text-primary flex-shrink-0"
                                  />
                                  <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                                    {option}
                                  </span>
                                  {filters.datePosted === option && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                                    />
                                  )}
                                </motion.label>
                              ))}
                            </div>
                          </motion.div>

                          {/* Industry Filter */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                          >
                            <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                              <Building2 className="h-4 w-4 text-primary" />
                              Industry
                            </Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                              {industries.map((industry, index) => (
                                <motion.label
                                  key={industry}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3 + index * 0.02 }}
                                  className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                                >
                                  <Checkbox
                                    checked={filters.industry.includes(industry)}
                                    onCheckedChange={() => toggleArrayFilter("industry", industry)}
                                  />
                                  <span className="text-sm flex-1 group-hover:text-foreground transition-colors line-clamp-1">
                                    {industry}
                                  </span>
                                  {filters.industry.includes(industry) && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                                    />
                                  )}
                                </motion.label>
                              ))}
                            </div>
                          </motion.div>

                          {/* Experience Level Filter */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                          >
                            <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                              <TrendingUp className="h-4 w-4 text-primary" />
                              Experience Level
                            </Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                              {experienceLevels.map((level, index) => (
                                <motion.label
                                  key={level}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.4 + index * 0.02 }}
                                  className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                                >
                                  <Checkbox
                                    checked={filters.experienceLevel.includes(level)}
                                    onCheckedChange={() => toggleArrayFilter("experienceLevel", level)}
                                  />
                                  <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                                    {level}
                                  </span>
                                  {filters.experienceLevel.includes(level) && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                                    />
                                  )}
                                </motion.label>
                              ))}
                            </div>
                          </motion.div>

                          {/* Salary Range Filter */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-4"
                          >
                            <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                              <DollarSign className="h-4 w-4 text-primary" />
                              Salary Range
                            </Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                              {salaryRanges.map((range, index) => (
                                <motion.label
                                  key={range}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.5 + index * 0.02 }}
                                  className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                                >
                                  <input
                                    type="radio"
                                    name="salaryRange"
                                    checked={filters.salaryRange === range}
                                    onChange={() => handleFilterChange("salaryRange", range)}
                                    className="h-4 w-4 text-primary flex-shrink-0"
                                  />
                                  <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                                    {range}
                                  </span>
                                  {filters.salaryRange === range && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                                    />
                                  )}
                                </motion.label>
                              ))}
                            </div>
                          </motion.div>

                          {/* Additional Filters */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="space-y-4"
                          >
                            <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                              <Zap className="h-4 w-4 text-primary" />
                              Additional Filters
                            </Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <motion.label
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                              >
                                <Checkbox
                                  checked={filters.hubZoneOnly}
                                  onCheckedChange={(checked) =>
                                    handleFilterChange("hubZoneOnly", checked as boolean)
                                  }
                                />
                                <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                                  HUBZone Jobs Only
                                </span>
                                {filters.hubZoneOnly && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                                  />
                                )}
                              </motion.label>
                              <motion.label
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.62 }}
                                className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                              >
                                <Checkbox
                                  checked={filters.clearanceRequired === true}
                                  onCheckedChange={(checked) =>
                                    handleFilterChange("clearanceRequired", checked ? true : null)
                                  }
                                />
                                <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                                  Clearance Required
                                </span>
                                {filters.clearanceRequired === true && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                                  />
                                )}
                              </motion.label>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              <Button className="h-12 min-w-[140px]" onClick={handleSearch} disabled={isLoadingJobs}>
                {isLoadingJobs ? "Searching..." : "Search"}
              </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-6"
          >
            <Card className="p-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
                {filters.search && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {filters.search}
                    <button
                      onClick={() => handleFilterChange("search", "")}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {filters.location && (
                  <Badge variant="secondary" className="gap-1">
                    Location: {filters.location}
                    <button
                      onClick={() => handleFilterChange("location", "")}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {filters.jobType.map((type) => (
                  <Badge key={type} variant="secondary" className="gap-1">
                    {type}
                    <button
                      onClick={() => toggleArrayFilter("jobType", type)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.datePosted && (
                  <Badge variant="secondary" className="gap-1">
                    {filters.datePosted}
                    <button
                      onClick={() => handleFilterChange("datePosted", "")}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {filters.industry.map((ind) => (
                  <Badge key={ind} variant="secondary" className="gap-1">
                    {ind}
                    <button
                      onClick={() => toggleArrayFilter("industry", ind)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.experienceLevel.map((level) => (
                  <Badge key={level} variant="secondary" className="gap-1">
                    {level}
                    <button
                      onClick={() => toggleArrayFilter("experienceLevel", level)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.salaryRange && (
                  <Badge variant="secondary" className="gap-1">
                    Salary: {filters.salaryRange}
                    <button
                      onClick={() => handleFilterChange("salaryRange", "")}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {filters.clearanceRequired !== null && (
                  <Badge variant="secondary" className="gap-1">
                    Clearance Required
                    <button
                      onClick={() => handleFilterChange("clearanceRequired", null)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {filters.hubZoneOnly && (
                  <Badge variant="secondary" className="gap-1">
                    HUBZone Only
                    <button
                      onClick={() => handleFilterChange("hubZoneOnly", false)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto gap-2">
                  <X className="h-4 w-4" />
                  Clear All
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Job Listings */}
        <div className="space-y-4">
          {jobsError && (
            <Card className="p-6 border-red-200 bg-red-50 dark:border-red-900/40 dark:bg-red-950/20 text-center">
              <p className="text-sm text-red-600 dark:text-red-300">{jobsError}</p>
            </Card>
          )}

          {isLoadingJobs && (
            <Card className="p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Loading job postings...</p>
            </Card>
          )}

          <AnimatePresence mode="wait">
            {!isLoadingJobs && !jobsError && filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters to find more opportunities.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </motion.div>
            ) : (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 border-2 group">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left: Job Info */}
                      <div
                        className="flex-1 space-y-4 cursor-pointer"
                        onClick={() => handleViewDetails(job)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                                {job.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Building2 className="h-4 w-4" />
                                <span className="font-medium">{job.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.jobType.map((type) => (
                            <Badge key={type} variant="outline" className="text-xs">
                              {type}
                            </Badge>
                          ))}
                          {job.clearanceRequired && (
                            <Badge variant="outline" className="text-xs">
                              <Shield className="mr-1 h-3 w-3" />
                              Clearance Required
                            </Badge>
                          )}
                        </div>

                        <p className="text-muted-foreground line-clamp-2">{job.description}</p>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            <span>{formatSalary(job.salaryMin, job.salaryMax)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{formatDate(job.datePosted)}</span>
                          </div>
                          {job.experienceLevel && (
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              <span>{job.experienceLevel}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right: Quick Actions */}
                      <div className="flex md:flex-col gap-2 md:items-end">
                        <Button
                          className="w-full md:w-auto"
                          onClick={() => handleViewDetails(job)}
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full md:w-auto"
                          onClick={(e) => {
                            e.stopPropagation();
                            // TODO: Implement save functionality
                          }}
                        >
                          <Star className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </AnimatePresence>

          {!jobsError && filteredJobs.length > 0 && pagination.totalPages > 1 && (
            <div className="flex items-center justify-between pt-4">
              <Button
                variant="outline"
                disabled={pagination.currentPage <= 1 || isLoadingJobs}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
              >
                Previous
              </Button>
              <p className="text-sm text-muted-foreground">
                Page {pagination.currentPage} of {pagination.totalPages}
              </p>
              <Button
                variant="outline"
                disabled={pagination.currentPage >= pagination.totalPages || isLoadingJobs}
                onClick={() => handlePageChange(pagination.currentPage + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
