"use client";

import { motion } from "framer-motion";
import { Bookmark, Building2, MapPin, Briefcase, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";

export function SavedJobsPage() {
  const savedJobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      savedDate: "2 days ago",
    },
    {
      id: 2,
      title: "React Developer",
      company: "StartupXYZ",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      savedDate: "1 week ago",
    },
  ];

  if (savedJobs.length === 0) {
    return (
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <Bookmark className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <TypingText
            text="No saved jobs yet"
            className="text-2xl font-semibold mb-2"
            speed={50}
          />
          <p className="text-muted-foreground mb-6">
            Start saving jobs you're interested in to view them here
          </p>
          <Button>
            <Sparkles className="mr-2 h-4 w-4" />
            Browse Jobs
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2">
          <Bookmark className="h-6 w-6 text-primary" />
          <TypingText
            text="Saved Jobs"
            className="text-3xl font-semibold"
            speed={50}
          />
        </div>
        <p className="text-muted-foreground">
          {savedJobs.length} job{savedJobs.length !== 1 ? "s" : ""} saved
        </p>
      </motion.div>

      <div className="space-y-4">
        {savedJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                      <p className="text-muted-foreground mb-2">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.type}
                        </div>
                        <span>Saved {job.savedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 flex gap-2">
                <Button className="flex-1">View Details</Button>
                <Button variant="outline">Apply Now</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

