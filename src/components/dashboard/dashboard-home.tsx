"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Sparkles, MapPin, Briefcase, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";
import { IdealJobsSection } from "@/components/dashboard/ideal-jobs-section";
import { getApplicantProfile } from "@/lib/api/applicant-api";
import { authStorage } from "@/lib/auth/cookie-storage";

export function DashboardHome() {
  const [userName, setUserName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!authStorage.isAuthenticated()) {
        setIsLoading(false);
        return;
      }

      try {
        const profile = await getApplicantProfile();
        if (profile) {
          const firstName = profile.firstName || "";
          const lastName = profile.lastName || "";
          const fullName = `${firstName} ${lastName}`.trim() || "there";
          setUserName(fullName);
        } else {
          setUserName("there");
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        setUserName("there");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
    
    // Listen for auth changes
    const handleAuthChange = () => {
      fetchUserProfile();
    };
    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section with Typing Effect */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        {!isLoading && (
          <TypingText
            text={`Welcome back, ${userName}! 👋`}
            className="text-3xl font-semibold"
            speed={50}
          />
        )}
        <p className="text-muted-foreground">
          Your AI-powered job search assistant is ready to help you find your next opportunity.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Saved Jobs", value: "12", icon: Briefcase, color: "text-blue-500" },
          { label: "Applications", value: "8", icon: TrendingUp, color: "text-green-500" },
          { label: "AI Matches", value: "24", icon: Sparkles, color: "text-purple-500" },
          { label: "Profile Views", value: "156", icon: Building2, color: "text-orange-500" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AI Recommended Companies */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">AI Recommended Companies</h2>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {95 + i}% Match
                  </span>
                </div>
                <h3 className="font-semibold mb-2">Company {i}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>Remote / Hybrid</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  AI matched based on your skills and preferences
                </p>
                <Button className="w-full" size="sm">
                  View Jobs
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ideal Jobs Section - Show if preferences are set */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <IdealJobsSection
          idealJobs={["Full Stack Developer", "Senior React Developer"]}
          idealCompanies={["Google", "Microsoft", "Meta"]}
        />
      </motion.div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Card className="p-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">AI Insights for You</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Your profile matches 24 jobs in your preferred locations</li>
                <li>• Companies are actively hiring for your skills (React, TypeScript)</li>
                <li>• Consider adding 2 more certifications to increase match rate by 15%</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

