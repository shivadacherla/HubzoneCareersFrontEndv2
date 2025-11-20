"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Briefcase, DollarSign, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function AIRecoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    industries: [] as string[],
    jobRoles: [] as string[],
    workType: [] as string[],
    salaryRange: "",
    locations: [] as string[],
    remotePreference: false,
  });

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Government",
    "Manufacturing",
    "Retail",
    "Consulting",
  ];

  const jobRoles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "Marketing Manager",
    "Sales Representative",
    "Operations Manager",
    "Business Analyst",
  ];

  const workTypes = ["Remote", "Hybrid", "On-site"];

  const toggleArrayItem = (array: string[], item: string, setter: (arr: string[]) => void) => {
    if (array.includes(item)) {
      setter(array.filter((i) => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  const handleSubmit = () => {
    // Save preferences (in real app, this would be an API call)
    // Then redirect to dashboard where ideal jobs/companies will be shown
    router.push("/applicant/dashboard?recommendations=true");
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-8 w-8 text-primary" />
          </motion.div>
        </div>
        <TypingText
          text="Let AI personalize your job search"
          className="text-3xl font-semibold"
          speed={50}
        />
        <p className="text-muted-foreground">
          Tell us your preferences and we'll recommend the perfect opportunities
        </p>
      </motion.div>

      <Card className="p-6 space-y-6">
        {/* Industries */}
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Building2 className="h-4 w-4 text-primary" />
            Preferred Industries
          </label>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <motion.button
                key={industry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  toggleArrayItem(
                    formData.industries,
                    industry,
                    (arr) => setFormData({ ...formData, industries: arr })
                  )
                }
                className={`
                  rounded-full px-4 py-2 text-sm font-medium transition-colors
                  ${
                    formData.industries.includes(industry)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }
                `}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Job Roles */}
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Briefcase className="h-4 w-4 text-primary" />
            Job Roles
          </label>
          <div className="flex flex-wrap gap-2">
            {jobRoles.map((role) => (
              <motion.button
                key={role}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  toggleArrayItem(
                    formData.jobRoles,
                    role,
                    (arr) => setFormData({ ...formData, jobRoles: arr })
                  )
                }
                className={`
                  rounded-full px-4 py-2 text-sm font-medium transition-colors
                  ${
                    formData.jobRoles.includes(role)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }
                `}
              >
                {role}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Work Type */}
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Briefcase className="h-4 w-4 text-primary" />
            Work Type Preference
          </label>
          <div className="flex flex-wrap gap-2">
            {workTypes.map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  toggleArrayItem(
                    formData.workType,
                    type,
                    (arr) => setFormData({ ...formData, workType: arr })
                  )
                }
                className={`
                  rounded-full px-4 py-2 text-sm font-medium transition-colors
                  ${
                    formData.workType.includes(type)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }
                `}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Salary Range */}
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <DollarSign className="h-4 w-4 text-primary" />
            Salary Range (Optional)
          </label>
          <Select
            value={formData.salaryRange}
            onValueChange={(value) =>
              setFormData({ ...formData, salaryRange: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select salary range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50k">$0 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
              <SelectItem value="150k-200k">$150,000 - $200,000</SelectItem>
              <SelectItem value="200k+">$200,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Locations */}
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <MapPin className="h-4 w-4 text-primary" />
            Preferred Locations
          </label>
          <Input
            placeholder="Enter cities (e.g., San Francisco, New York, Remote)"
            value={formData.locations.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                locations: e.target.value.split(",").map((s) => s.trim()),
              })
            }
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Separate multiple locations with commas
          </p>
        </div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-lg bg-primary/5 p-4"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">AI Recommendation</p>
              <p className="text-xs text-muted-foreground">
                Based on your profile, we recommend focusing on Remote and Hybrid
                opportunities in Technology and Finance industries. Your skills match
                well with Software Engineer and Data Scientist roles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Submit */}
        <Button onClick={handleSubmit} className="w-full" size="lg">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Save Preferences & Continue to Dashboard
        </Button>
      </Card>
    </div>
  );
}

