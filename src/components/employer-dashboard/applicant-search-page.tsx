"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MapPin, Briefcase, GraduationCap, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function ApplicantSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    skills: "",
    experience: "",
    clearance: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  // Mock applicants data
  const applicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      location: "Reston, VA",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      experience: "5+ years",
      clearance: "Active",
      matchScore: 95,
      avatar: null,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Full Stack Developer",
      location: "Arlington, VA",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      experience: "3+ years",
      clearance: "Eligible",
      matchScore: 88,
      avatar: null,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "DevOps Engineer",
      location: "Alexandria, VA",
      skills: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
      experience: "4+ years",
      clearance: "Active",
      matchScore: 92,
      avatar: null,
    },
  ];

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <TypingText
          text="Find Qualified Applicants"
          className="text-3xl font-semibold mb-2"
          speed={50}
        />
        <p className="text-muted-foreground">
          Search and discover HUBZone candidates with the skills you need
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, title, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="gap-2">
            <Sparkles className="h-4 w-4" />
            AI Match
          </Button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 grid gap-4 pt-4 border-t border-border/60 md:grid-cols-4"
            >
              <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reston">Reston, VA</SelectItem>
                  <SelectItem value="arlington">Arlington, VA</SelectItem>
                  <SelectItem value="alexandria">Alexandria, VA</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filters.skills} onValueChange={(value) => setFilters({ ...filters, skills: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Skills" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="node">Node.js</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filters.experience} onValueChange={(value) => setFilters({ ...filters, experience: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">0-2 years</SelectItem>
                  <SelectItem value="mid">3-5 years</SelectItem>
                  <SelectItem value="senior">5+ years</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filters.clearance} onValueChange={(value) => setFilters({ ...filters, clearance: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Clearance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="eligible">Eligible</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Found {filteredApplicants.length} applicants
          </p>
        </div>

        <AnimatePresence>
          {filteredApplicants.map((applicant, index) => (
            <motion.div
              key={applicant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    {applicant.avatar ? (
                      <AvatarImage src={applicant.avatar} alt={applicant.name} />
                    ) : (
                      <AvatarFallback className="bg-primary/20 text-primary text-xl font-semibold">
                        {applicant.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{applicant.name}</h3>
                        <p className="text-muted-foreground">{applicant.title}</p>
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <Sparkles className="h-3 w-3" />
                        {applicant.matchScore}% Match
                      </Badge>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {applicant.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {applicant.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" />
                        {applicant.clearance} Clearance
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {applicant.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button size="sm" asChild>
                        <Link href={`/employer/dashboard/applicants/${applicant.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

