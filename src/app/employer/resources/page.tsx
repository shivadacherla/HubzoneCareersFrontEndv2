"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  FileText,
  Users,
  Shield,
  TrendingUp,
  BarChart3,
  Download,
  ExternalLink,
  Clock,
  Award,
  Target,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Building2,
  Filter,
  MessageSquare,
  BookOpen,
  Zap,
  DollarSign,
  Globe,
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
  { id: "hiring", label: "Hiring Guides", icon: Users },
  { id: "compliance", label: "Compliance", icon: Shield },
  { id: "best-practices", label: "Best Practices", icon: Award },
  { id: "templates", label: "Templates", icon: FileText },
  { id: "tools", label: "Tools & Calculators", icon: BarChart3 },
  { id: "hubzone", label: "HUBZone Resources", icon: Target },
];

const resources: Resource[] = [
  // Hiring Guides
  {
    id: "hiring-playbook",
    title: "Complete Hiring Playbook",
    description: "Comprehensive guide to hiring HUBZone talent effectively",
    category: "hiring",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    comingSoon: true,
    content:
      "Master the art of hiring HUBZone talent with our comprehensive playbook. Learn best practices for job posting, candidate screening, interviewing, and onboarding. Includes templates, checklists, and proven strategies. Coming soon: AI-powered hiring workflow optimizer that will suggest the best hiring process for your organization.",
  },
  {
    id: "job-description-guide",
    title: "Job Description Writing Guide",
    description: "Create compelling job descriptions that attract top HUBZone talent",
    category: "hiring",
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    comingSoon: true,
    content:
      "Learn how to write job descriptions that attract qualified HUBZone candidates. Includes templates, best practices, and examples for various roles. Coming soon: AI job description generator that creates optimized job postings based on your requirements.",
  },
  {
    id: "ai-job-description",
    title: "AI Job Description Generator",
    description: "Generate optimized job descriptions instantly with AI",
    category: "hiring",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Our AI Job Description Generator creates compelling, optimized job descriptions in seconds. Simply input your requirements, and AI will generate professional job postings tailored for HUBZone talent. This AI-powered tool is currently in development and will be available soon.",
  },
  {
    id: "interview-guide",
    title: "Interview Best Practices Guide",
    description: "Effective interviewing strategies for HUBZone candidates",
    category: "hiring",
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    comingSoon: true,
    content:
      "Discover proven interviewing techniques specifically designed for HUBZone hiring. Learn how to assess candidates effectively, ask the right questions, and make informed hiring decisions. Coming soon: AI interview question generator that creates personalized questions for each candidate.",
  },
  {
    id: "ai-interview-questions",
    title: "AI Interview Question Generator",
    description: "Generate personalized interview questions based on candidate profiles",
    category: "hiring",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Generate tailored interview questions instantly with our AI tool. Input the job requirements and candidate profile, and get personalized questions that help you assess fit effectively. This AI feature is in development and coming soon.",
  },
  // Compliance
  {
    id: "hubzone-compliance",
    title: "HUBZone Compliance Guide",
    description: "Complete guide to HUBZone compliance requirements and verification",
    category: "compliance",
    icon: Shield,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    comingSoon: true,
    content:
      "Ensure your hiring practices meet all HUBZone compliance requirements. This comprehensive guide covers verification processes, documentation, and best practices for maintaining compliance. Essential for federal contractors.",
  },
  {
    id: "compliance-checker",
    title: "AI Compliance Checker",
    description: "Automatically verify candidate HUBZone eligibility and compliance",
    category: "compliance",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Our AI Compliance Checker automatically verifies candidate HUBZone eligibility, checks addresses against SBA databases, and ensures all compliance requirements are met. This AI-powered tool is currently in development and will save you hours of manual verification.",
  },
  {
    id: "federal-contracting",
    title: "Federal Contracting Requirements",
    description: "Understanding federal contracting requirements for HUBZone hiring",
    category: "compliance",
    icon: Shield,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    comingSoon: true,
    content:
      "Learn about federal contracting requirements, set-aside programs, and how to meet HUBZone hiring obligations. Includes regulatory information, reporting requirements, and compliance best practices.",
  },
  {
    id: "documentation-guide",
    title: "Compliance Documentation Guide",
    description: "Templates and guides for maintaining compliance documentation",
    category: "compliance",
    icon: FileText,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    comingSoon: true,
    content:
      "Access templates and guides for maintaining proper compliance documentation. Includes verification forms, reporting templates, and audit preparation checklists. Coming soon: AI-powered documentation assistant that helps organize and maintain compliance records.",
  },
  // Best Practices
  {
    id: "recruitment-strategies",
    title: "Recruitment Strategies for HUBZone Talent",
    description: "Proven strategies to attract and retain HUBZone talent",
    category: "best-practices",
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    comingSoon: true,
    content:
      "Discover effective recruitment strategies specifically designed for attracting HUBZone talent. Learn about employer branding, candidate engagement, and retention strategies that work in the HUBZone ecosystem.",
  },
  {
    id: "onboarding-guide",
    title: "Onboarding Best Practices",
    description: "Create effective onboarding programs for HUBZone hires",
    category: "best-practices",
    icon: Users,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    comingSoon: true,
    content:
      "Learn how to create effective onboarding programs that help HUBZone hires succeed. Includes checklists, templates, and best practices for integrating new employees into your organization.",
  },
  {
    id: "retention-strategies",
    title: "Employee Retention Strategies",
    description: "Keep your HUBZone talent engaged and retained",
    category: "best-practices",
    icon: Award,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    comingSoon: true,
    content:
      "Explore proven strategies for retaining HUBZone talent. Learn about engagement techniques, career development programs, and creating a positive workplace culture that supports long-term retention.",
  },
  // Templates
  {
    id: "job-posting-templates",
    title: "Job Posting Templates",
    description: "Professional job posting templates optimized for HUBZone talent",
    category: "templates",
    icon: FileText,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    comingSoon: true,
    content:
      "Access a library of professionally designed job posting templates. All templates are optimized for HUBZone talent and include best practices for federal contracting positions. Download and customize for your needs.",
  },
  {
    id: "offer-letter-templates",
    title: "Offer Letter Templates",
    description: "Professional offer letter templates with compliance considerations",
    category: "templates",
    icon: FileText,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    comingSoon: true,
    content:
      "Download professional offer letter templates that include HUBZone compliance language and federal contracting considerations. All templates are legally reviewed and ready to customize.",
  },
  {
    id: "interview-scorecard",
    title: "Interview Scorecard Template",
    description: "Structured interview evaluation templates",
    category: "templates",
    icon: FileText,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    comingSoon: true,
    content:
      "Use our interview scorecard templates to evaluate candidates consistently and fairly. Includes evaluation criteria, scoring rubrics, and feedback sections. Coming soon: AI-powered interview analysis that provides insights from interview notes.",
  },
  // Tools & Calculators
  {
    id: "roi-calculator",
    title: "Hiring ROI Calculator",
    description: "Calculate the ROI of your HUBZone hiring initiatives",
    category: "tools",
    icon: BarChart3,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    comingSoon: true,
    content:
      "Measure the return on investment of your HUBZone hiring programs. Calculate cost savings, time-to-hire improvements, and compliance benefits. This calculator is currently in development and will be available soon.",
  },
  {
    id: "time-to-hire-tracker",
    title: "Time-to-Hire Tracker",
    description: "Track and optimize your hiring timeline",
    category: "tools",
    icon: Clock,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    comingSoon: true,
    content:
      "Monitor your hiring timeline and identify bottlenecks in your process. Includes templates and dashboards to track metrics. Coming soon: AI-powered hiring timeline optimizer that suggests improvements.",
  },
  {
    id: "ai-candidate-matcher",
    title: "AI Candidate Matching Tool",
    description: "AI-powered tool to find the best candidates for your roles",
    category: "tools",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Our AI Candidate Matcher analyzes job requirements and candidate profiles to find the best matches. Get match scores, skill gap analysis, and personalized recommendations. This advanced AI feature is in development and coming soon.",
  },
  {
    id: "hiring-analytics",
    title: "Hiring Analytics Dashboard",
    description: "Comprehensive analytics for your hiring process",
    category: "tools",
    icon: BarChart3,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    comingSoon: true,
    aiFeature: true,
    content:
      "Get insights into your hiring process with AI-powered analytics. Track metrics, identify trends, and get recommendations for improvement. This AI analytics dashboard is currently in development.",
  },
  // HUBZone Resources
  {
    id: "hubzone-map",
    title: "HUBZone Area Map",
    description: "Interactive map showing all HUBZone areas across the USA",
    category: "hubzone",
    icon: Globe,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    comingSoon: true,
    content:
      "Explore all 7,461+ HUBZone areas across the United States with our interactive map. Search by location, view statistics, and identify talent pools. This tool is currently in development and will be available soon.",
  },
  {
    id: "hubzone-statistics",
    title: "HUBZone Statistics & Insights",
    description: "Data and insights about HUBZone areas and talent pools",
    category: "hubzone",
    icon: BarChart3,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    comingSoon: true,
    content:
      "Access comprehensive statistics and insights about HUBZone areas, talent availability, and hiring trends. Use this data to inform your hiring strategy and identify opportunities. Coming soon: AI-powered insights that predict talent availability and hiring trends.",
  },
  {
    id: "sba-resources",
    title: "SBA Resources & Links",
    description: "Essential SBA resources and links for HUBZone employers",
    category: "hubzone",
    icon: ExternalLink,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    comingSoon: true,
    content:
      "Access essential SBA resources, certification information, and official links for HUBZone employers. Stay updated with the latest regulations and program information from the Small Business Administration.",
  },
];

export default function EmployerResources() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

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
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
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
                    Employer Resources
                  </Badge>
                </motion.div>
              )}
              {!mounted && (
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm mb-4"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  Employer Resources
                </Badge>
              )}
            </motion.div>
            <TypingText
              text="Hiring Resources & Tools"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              speed={50}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Access comprehensive guides, templates, and AI-powered tools to streamline your HUBZone
              hiring process and ensure compliance.
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
                              <Link href="/employer/dashboard">
                                Access Resource
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="outline" asChild>
                              <Link href="/employer/contact">Get Notified</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Support?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you succeed with HUBZone hiring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/employer/contact">
                    Contact Support
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/employer/help">View Help Center</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
