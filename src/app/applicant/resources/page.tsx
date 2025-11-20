"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  FileText,
  MessageSquare,
  TrendingUp,
  DollarSign,
  BookOpen,
  Download,
  ExternalLink,
  Clock,
  Award,
  Target,
  MapPin,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  comingSoon?: boolean;
  aiFeature?: boolean;
  content?: string;
};

const resourceCategories = [
  { id: "all", label: "All Resources", icon: BookOpen },
  { id: "resume", label: "Resume & Cover Letter", icon: FileText },
  { id: "interview", label: "Interview Prep", icon: MessageSquare },
  { id: "career", label: "Career Development", icon: TrendingUp },
  { id: "salary", label: "Salary & Benefits", icon: DollarSign },
  { id: "hubzone", label: "HUBZone Info", icon: Target },
  { id: "tools", label: "Tools & Templates", icon: Download },
];

const resources: Resource[] = [
  // Resume & Cover Letter
  {
    id: "resume-guide",
    title: "Complete Resume Writing Guide",
    description: "Step-by-step guide to creating a professional resume that stands out to HUBZone employers",
    category: "resume",
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    comingSoon: true,
    content:
      "Learn how to craft a compelling resume that highlights your skills and HUBZone eligibility. This comprehensive guide covers formatting, keywords, and best practices for federal contracting positions. Coming soon: AI-powered resume optimization tool that will analyze your resume and provide real-time suggestions.",
  },
  {
    id: "cover-letter-template",
    title: "Cover Letter Templates",
    description: "Professional templates tailored for HUBZone employer applications",
    category: "resume",
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Access professionally designed cover letter templates specifically created for HUBZone job applications. Coming soon: AI cover letter generator that will create personalized cover letters based on your profile and the job description.",
  },
  {
    id: "resume-optimizer",
    title: "AI Resume Optimizer",
    description: "Get AI-powered suggestions to optimize your resume for specific job postings",
    category: "resume",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Our AI Resume Optimizer analyzes your resume against job descriptions and provides personalized recommendations. Features include keyword optimization, skills gap analysis, and formatting suggestions. This AI-powered tool is currently in development and will be available soon.",
  },
  // Interview Prep
  {
    id: "interview-guide",
    title: "Interview Preparation Guide",
    description: "Comprehensive guide to acing interviews with HUBZone-certified employers",
    category: "interview",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    comingSoon: true,
    content:
      "Master the art of interviewing with our detailed guide covering common questions, best practices, and tips specific to federal contracting and HUBZone employers. Coming soon: AI interview coach that will provide personalized practice sessions and feedback.",
  },
  {
    id: "interview-questions",
    title: "Common Interview Questions Database",
    description: "Extensive collection of interview questions by role and industry",
    category: "interview",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    comingSoon: true,
    content:
      "Access hundreds of interview questions organized by job role, industry, and company type. Perfect for preparing for your next interview. Coming soon: AI-powered interview question generator that creates personalized questions based on the job description and your background.",
  },
  {
    id: "ai-interview-coach",
    title: "AI Interview Coach",
    description: "Practice interviews with AI-powered feedback and personalized coaching",
    category: "interview",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Practice your interview skills with our AI Interview Coach. Get real-time feedback on your answers, body language, and communication style. This advanced AI feature is currently in beta development and will be launching soon.",
  },
  // Career Development
  {
    id: "career-path",
    title: "Career Path Planning",
    description: "Guidance on building your career within the HUBZone ecosystem",
    category: "career",
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    comingSoon: true,
    content:
      "Explore career growth opportunities and pathways within HUBZone-certified companies. Learn about skill development, certifications, and advancement strategies. Coming soon: AI career path advisor that will analyze your profile and suggest personalized career trajectories.",
  },
  {
    id: "skills-development",
    title: "Skills Development Resources",
    description: "Resources to develop in-demand skills for HUBZone employers",
    category: "career",
    icon: Award,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    comingSoon: true,
    content:
      "Discover which skills are most valuable to HUBZone employers and access resources to develop them. Includes training programs, certifications, and learning paths. Coming soon: AI skills gap analyzer that identifies skills you need to develop for your target roles.",
  },
  {
    id: "ai-career-advisor",
    title: "AI Career Advisor",
    description: "Get personalized career advice based on your profile and goals",
    category: "career",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Our AI Career Advisor analyzes your profile, experience, and goals to provide personalized career recommendations. Get insights on growth opportunities, skill development, and career transitions. This AI feature is in development and coming soon.",
  },
  // Salary & Benefits
  {
    id: "salary-guide",
    title: "HUBZone Salary Guide",
    description: "Comprehensive salary information for HUBZone positions by role and location",
    category: "salary",
    icon: DollarSign,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    comingSoon: true,
    content:
      "Access detailed salary data for positions in HUBZone-certified companies. Includes information by role, experience level, and geographic location. Coming soon: AI salary negotiator that will help you determine fair compensation and negotiate effectively.",
  },
  {
    id: "benefits-guide",
    title: "Benefits & Compensation Guide",
    description: "Understanding benefits packages in federal contracting and HUBZone companies",
    category: "salary",
    icon: DollarSign,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    comingSoon: true,
    content:
      "Learn about typical benefits packages, compensation structures, and what to expect from HUBZone employers. Includes information on federal benefits, retirement plans, and professional development opportunities.",
  },
  // HUBZone Info
  {
    id: "hubzone-eligibility",
    title: "HUBZone Eligibility Guide",
    description: "Complete guide to understanding HUBZone eligibility requirements",
    category: "hubzone",
    icon: Target,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    comingSoon: true,
    content:
      "Learn everything you need to know about HUBZone eligibility, including address verification, certification requirements, and how to prove your HUBZone status to employers. This guide helps you understand if you qualify and how to leverage your HUBZone status in your job search.",
  },
  {
    id: "hubzone-map",
    title: "HUBZone Area Locator",
    description: "Interactive tool to check if your address is in a HUBZone",
    category: "hubzone",
    icon: MapPin,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    comingSoon: true,
    content:
      "Use our interactive HUBZone locator to check if your address qualifies as a HUBZone. Simply enter your address and get instant verification. This tool is currently in development and will be available soon.",
  },
  {
    id: "federal-contracting",
    title: "Federal Contracting Opportunities",
    description: "Guide to finding and applying for federal contracting positions",
    category: "hubzone",
    icon: Briefcase,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    comingSoon: true,
    content:
      "Discover how to find and apply for federal contracting opportunities available to HUBZone residents. Learn about the application process, required documentation, and tips for success in federal contracting roles.",
  },
  // Tools & Templates
  {
    id: "resume-templates",
    title: "Resume Templates Library",
    description: "Download professional resume templates in various formats",
    category: "tools",
    icon: Download,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    comingSoon: true,
    content:
      "Access a library of professionally designed resume templates. Choose from various styles and formats optimized for ATS (Applicant Tracking Systems) and HUBZone employer preferences. All templates are free to download and customize.",
  },
  {
    id: "job-tracker",
    title: "Application Tracker Template",
    description: "Excel template to track your job applications and follow-ups",
    category: "tools",
    icon: Download,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    comingSoon: true,
    content:
      "Download our free application tracker template to organize your job search. Track applications, interviews, follow-ups, and outcomes all in one place. Coming soon: AI-powered application tracker that automatically organizes and reminds you of follow-ups.",
  },
  {
    id: "ai-job-matcher",
    title: "AI Job Matcher Tool",
    description: "AI-powered tool to find jobs that match your profile perfectly",
    category: "tools",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Our AI Job Matcher analyzes your profile, skills, and preferences to find the perfect job matches. Get personalized job recommendations with match scores and detailed insights. This advanced AI feature is in development and coming soon.",
  },
];

export default function ApplicantResources() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredResources =
    selectedCategory === "all"
      ? resources
      : resources.filter((r) => r.category === selectedCategory);

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

      <div className="relative">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
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
                  className="inline-block mb-4"
                >
                  <Badge
                    variant="outline"
                    className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
                  >
                    <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                    Career Resources
                  </Badge>
                </motion.div>
              )}
              {!mounted && (
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm mb-4"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  Career Resources
                </Badge>
              )}
            </motion.div>
            <TypingText
              text="Career Resources & Tools"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              speed={50}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Access comprehensive guides, templates, and AI-powered tools to accelerate your job
              search and career growth in the HUBZone ecosystem.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {resourceCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="p-6 h-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 group">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`${resource.bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}>
                            <resource.icon className={`h-6 w-6 ${resource.color}`} />
                          </div>
                          <div className="flex gap-2">
                            {resource.comingSoon && (
                              <Badge variant="secondary" className="text-xs">
                                Coming Soon
                              </Badge>
                            )}
                            {resource.aiFeature && (
                              <Badge variant="outline" className="text-xs border-primary/40">
                                <Sparkles className="mr-1 h-3 w-3 text-primary" />
                                AI
                              </Badge>
                            )}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                          Learn More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`${resource.bgColor} w-10 h-10 rounded-lg flex items-center justify-center`}>
                            <resource.icon className={`h-5 w-5 ${resource.color}`} />
                          </div>
                          <DialogTitle className="text-2xl">{resource.title}</DialogTitle>
                        </div>
                        <div className="flex gap-2 mb-4">
                          {resource.comingSoon && (
                            <Badge variant="secondary">Coming Soon</Badge>
                          )}
                          {resource.aiFeature && (
                            <Badge variant="outline" className="border-primary/40">
                              <Sparkles className="mr-1 h-3 w-3 text-primary" />
                              AI-Powered
                            </Badge>
                          )}
                        </div>
                        <DialogDescription className="text-base">
                          {resource.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {resource.content || resource.description}
                        </p>
                        {resource.comingSoon && (
                          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <div className="flex items-start gap-3">
                              <Clock className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-semibold text-sm mb-1">Coming Soon</p>
                                <p className="text-sm text-muted-foreground">
                                  This {resource.aiFeature ? "AI-powered " : ""}feature is currently in
                                  development. We're working hard to bring you the best experience
                                  possible. Stay tuned for updates!
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {!resource.comingSoon && (
                          <div className="flex gap-3 pt-4">
                            <Button asChild>
                              <Link href="/applicant/dashboard">
                                Access Resource
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="outline" asChild>
                              <Link href="/applicant/contact">Get Notified</Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block mb-6"
              >
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Help?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/applicant/contact">
                    Contact Support
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/applicant/faq">View FAQ</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
