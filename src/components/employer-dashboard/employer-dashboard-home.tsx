"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Briefcase, TrendingUp, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";
import { getEmployerProfile } from "@/lib/api/employer-api";
import { authStorage } from "@/lib/auth/cookie-storage";

export function EmployerDashboardHome() {
  const [employerName, setEmployerName] = useState("there");
  const [organizationName, setOrganizationName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!authStorage.isAuthenticated()) {
        setIsLoading(false);
        return;
      }

      try {
        const profile = await getEmployerProfile();
        if (profile) {
          const firstName = profile.firstName || "";
          const lastName = profile.lastName || "";
          const fullName = `${firstName} ${lastName}`.trim() || firstName || "there";
          setEmployerName(fullName || "there");
          
          // Get organization name if available
          if (profile.organization?.organizationName) {
            setOrganizationName(profile.organization.organizationName);
          }
        }
      } catch (error) {
        console.error("Failed to fetch employer profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();

    // Listen for auth changes
    const handleAuthChange = () => {
      fetchProfile();
    };

    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <TypingText
          text={isLoading ? "Welcome back! 👋" : `Welcome back, ${employerName.split(" ")[0] || "there"}! 👋`}
          className="text-3xl font-semibold"
          speed={50}
        />
        <p className="text-muted-foreground">
          {organizationName 
            ? `Manage ${organizationName}, post jobs, and find qualified HUBZone candidates.`
            : "Manage your organization, post jobs, and find qualified HUBZone candidates."
          }
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Active Jobs", value: "12", icon: Briefcase, color: "text-blue-500", change: "+3 this month" },
          { label: "Applications", value: "48", icon: FileText, color: "text-green-500", change: "+12 today" },
          { label: "Team Members", value: "8", icon: Users, color: "text-purple-500", change: "2 admins" },
          { label: "AI Matches", value: "156", icon: Sparkles, color: "text-orange-500", change: "24 new" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid gap-4 md:grid-cols-2"
      >
        <Card className="p-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Post a New Job</h3>
              <p className="text-sm text-muted-foreground">
                Create a job posting with AI assistance to attract qualified candidates.
              </p>
            </div>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <Button asChild className="w-full">
            <Link href="/employer/dashboard/jobs/new">
              Post Job
            </Link>
          </Button>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Find Applicants</h3>
              <p className="text-sm text-muted-foreground">
                Search and discover qualified HUBZone candidates for your roles.
              </p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
          <Button asChild variant="outline" className="w-full">
            <Link href="/employer/dashboard/applicants">
              Search Candidates
            </Link>
          </Button>
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {[
              { action: "New application received", job: "Senior Software Engineer", time: "2 hours ago", icon: FileText },
              { action: "Job posted", job: "Full Stack Developer", time: "5 hours ago", icon: Briefcase },
              { action: "Candidate screened", job: "React Developer", time: "1 day ago", icon: CheckCircle2 },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <activity.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.job}</p>
                </div>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </motion.div>
            ))}
          </div>
        </Card>
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
              <h3 className="font-semibold mb-2">AI Insights for Your Organization</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Your job postings have a 95% match rate with HUBZone candidates</li>
                <li>• Consider adding remote options to increase applicant pool by 40%</li>
                <li>• 12 candidates match your ideal profile for Senior Software Engineer</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

