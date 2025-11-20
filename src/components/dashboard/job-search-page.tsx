"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Sparkles, Briefcase, Building2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";
import {
  searchJobPostings,
  type JobPostingDTO,
  type JobSearchResponse,
} from "@/lib/api/employer-api";

export function JobSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState<JobPostingDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pick<JobSearchResponse, "currentPage" | "totalPages">>({
    currentPage: 1,
    totalPages: 1,
  });

  const fetchJobs = async (page = 1) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await searchJobPostings({
        jobTitle: searchQuery || undefined,
        city: location || undefined,
        state: undefined,
        page,
      });
      setJobs(response.content);
      setPagination({
        currentPage: response.currentPage,
        totalPages: response.totalPages,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load job postings. Please try again later.",
      );
      setJobs([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    fetchJobs(1);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <TypingText
            text="AI-Powered Job Search"
            className="text-3xl font-semibold"
            speed={50}
          />
        </div>
        <p className="text-muted-foreground">
          Find your perfect job match using AI recommendations
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Job title, keywords, or company"
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location or Remote"
                  className="pl-10"
                />
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={handleSearch} disabled={isLoading}>
              <Sparkles className="mr-2 h-4 w-4" />
              {isLoading ? "Searching..." : "Search with AI"}
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* AI Recommendations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="rounded-lg bg-primary/5 p-4"
      >
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">AI Search Suggestions</p>
            <p className="text-xs text-muted-foreground">
              Based on your profile, we found 24 jobs matching your skills. Try searching
              for "React Developer" or "Full Stack Engineer" for more results.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Job Listings */}
      <div className="space-y-4">
        {error && (
          <Card className="p-6 border-red-200 bg-red-50 dark:border-red-900/40 dark:bg-red-950/20">
            <p className="text-sm text-red-600 dark:text-red-300">{error}</p>
          </Card>
        )}

        {!error && jobs.length === 0 && !isLoading && (
          <Card className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              No jobs found. Try adjusting your filters.
            </p>
          </Card>
        )}

        {jobs.map((job, index) => {
          const jobId =
            job.jobPostingId ??
            (job as { jobPostingID?: number }).jobPostingID ??
            job.jobTitle ??
            index;
          const locationParts = [job.city, job.state].filter(Boolean).join(", ");
          const postedDate = job.entryDate ? new Date(job.entryDate).toLocaleDateString() : null;

          return (
            <motion.div
              key={jobId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div>
                          <h3 className="font-semibold text-lg">{job.jobTitle || "Untitled role"}</h3>
                          <p className="text-muted-foreground text-sm">
                            {job.industry || "Industry not specified"}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          {locationParts && (
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {locationParts}
                            </div>
                          )}
                          {job.jobType && (
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.jobType}
                            </div>
                          )}
                          {postedDate && <span>Posted {postedDate}</span>}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {job.jobDescription || "No description provided yet."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button className="flex-1">View Details</Button>
                  <Button variant="outline">Quick Apply</Button>
                </div>
              </Card>
            </motion.div>
          );
        })}

        {jobs.length > 0 && (
          <div className="flex items-center justify-between pt-4">
            <Button
              variant="outline"
              disabled={pagination.currentPage <= 1 || isLoading}
              onClick={() => fetchJobs(pagination.currentPage - 1)}
            >
              Previous
            </Button>
            <p className="text-sm text-muted-foreground">
              Page {pagination.currentPage} of {pagination.totalPages}
            </p>
            <Button
              variant="outline"
              disabled={pagination.currentPage >= pagination.totalPages || isLoading}
              onClick={() => fetchJobs(pagination.currentPage + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

