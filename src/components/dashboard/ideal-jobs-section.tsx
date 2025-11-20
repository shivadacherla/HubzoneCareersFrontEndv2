"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Briefcase, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";

interface JobOpening {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  match: number;
  posted: string;
  salary?: string;
}

interface IdealJobsSectionProps {
  idealJobs: string[];
  idealCompanies: string[];
}

export function IdealJobsSection({
  idealJobs,
  idealCompanies,
}: IdealJobsSectionProps) {
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI fetching jobs based on ideal jobs and companies
    setTimeout(() => {
      const mockJobs: JobOpening[] = [];
      
      // Generate jobs for ideal companies
      idealCompanies.forEach((company, index) => {
        idealJobs.forEach((job, jobIndex) => {
          mockJobs.push({
            id: index * 10 + jobIndex,
            title: job,
            company: company,
            location: "San Francisco, CA (Remote)",
            type: "Full-time",
            match: 90 + Math.floor(Math.random() * 10),
            posted: `${Math.floor(Math.random() * 7)} days ago`,
            salary: "$120k - $180k",
          });
        });
      });

      // Add some additional matched jobs
      idealJobs.slice(0, 2).forEach((job, index) => {
        mockJobs.push({
          id: 100 + index,
          title: job,
          company: `Tech Company ${index + 1}`,
          location: "Remote",
          type: "Full-time",
          match: 85 + Math.floor(Math.random() * 10),
          posted: `${Math.floor(Math.random() * 7)} days ago`,
          salary: "$100k - $160k",
        });
      });

      setJobOpenings(mockJobs.slice(0, 6)); // Show top 6
      setIsLoading(false);
    }, 1000);
  }, [idealJobs, idealCompanies]);

  if (idealJobs.length === 0 && idealCompanies.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center py-8">
          <Sparkles className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">
            Set your ideal jobs and companies in Preferences to see AI-matched openings
          </p>
          <Button variant="outline">Go to Preferences</Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <TypingText
            text="AI-Matched Job Openings"
            className="text-xl font-semibold"
            speed={50}
          />
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4 animate-pulse">
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-3 bg-muted rounded w-1/2" />
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    {job.match}% Match
                  </div>
                </div>
                <h4 className="font-semibold mb-1">{job.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Briefcase className="h-3 w-3" />
                    {job.type}
                  </div>
                  {job.salary && (
                    <div className="text-xs text-muted-foreground">
                      💰 {job.salary}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* AI Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="rounded-lg bg-primary/5 p-4"
      >
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">AI Insight</p>
            <p className="text-xs text-muted-foreground">
              Based on your ideal jobs ({idealJobs.join(", ")}) and companies (
              {idealCompanies.join(", ")}), we found {jobOpenings.length} matching
              openings. These positions align with your skills and preferences.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

