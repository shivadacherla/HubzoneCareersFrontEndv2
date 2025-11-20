"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  HelpCircle,
  MessageSquare,
  Sparkles,
  BookOpen,
  Mail,
  Briefcase,
  Building2,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  comingSoon?: boolean;
};

const faqCategories = [
  "All",
  "Getting Started",
  "Job Posting",
  "Candidate Search",
  "Account & Settings",
  "Support & Resources",
];

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I post a job?",
    answer:
      "Sign up as an employer and use the 'Post Job' button on your dashboard. Fill out the job details including title, description, requirements, location, and salary range. Our AI-powered job description generator can help you create compelling job postings. Once submitted, your job will be reviewed and published within 24 hours.",
    category: "Job Posting",
    tags: ["posting", "jobs", "dashboard"],
  },
  {
    id: 2,
    question: "How can I contact support?",
    answer:
      "You can reach our support team through the 'Contact Us' form in your dashboard, email us at support@hubzonecareers.com, or use our AI assistant for instant answers. Our support team is available Monday to Friday, 9am–6pm EST, and typically responds within 24 hours. For urgent matters, please call our support hotline.",
    category: "Support & Resources",
    tags: ["support", "contact", "help"],
    comingSoon: true,
  },
  {
    id: 3,
    question: "Can I edit a job after posting?",
    answer:
      "Yes, you can edit your job postings at any time from your dashboard. Navigate to the 'Jobs' section, select the job you want to edit, and click 'Edit'. Changes will be reflected immediately. Note that significant changes may require re-approval. You can also close or delete job postings when positions are filled.",
    category: "Job Posting",
    tags: ["editing", "jobs", "management"],
    comingSoon: true,
  },
  {
    id: 4,
    question: "How do I search for qualified candidates?",
    answer:
      "Use the 'Find Applicants' feature in your dashboard. You can filter candidates by skills, experience level, location, HUBZone status, and security clearance. Our AI matching system automatically scores candidates based on job requirements, helping you identify the best fits quickly. You can also save candidate profiles for later review.",
    category: "Candidate Search",
    tags: ["search", "candidates", "matching"],
  },
  {
    id: 5,
    question: "What is AI-powered resume screening?",
    answer:
      "Our AI resume screening feature analyzes candidate resumes against your job requirements and provides match scores. It identifies key qualifications, experience levels, skills, and certifications. This helps you quickly identify top candidates and reduces time-to-hire. The AI also flags candidates who may be a good fit but need additional review.",
    category: "Candidate Search",
    tags: ["AI", "screening", "resume"],
  },
  {
    id: 6,
    question: "How do I manage my organization profile?",
    answer:
      "Navigate to 'Organization' in your dashboard to view and edit your company information. As an admin, you can update company details, add team members, manage roles and permissions, and update your HUBZone certification status. Non-admin users can view organization information but cannot make changes.",
    category: "Account & Settings",
    tags: ["organization", "profile", "admin"],
  },
  {
    id: 7,
    question: "Can I invite team members to my account?",
    answer:
      "Yes, as the organization admin, you can invite team members from the 'Team' section in your dashboard. You can assign different roles (Admin, Recruiter, Viewer) with appropriate permissions. Team members will receive an email invitation to join your organization account.",
    category: "Account & Settings",
    tags: ["team", "invite", "collaboration"],
  },
  {
    id: 8,
    question: "How does the HUBZone verification work?",
    answer:
      "Our platform verifies HUBZone certification through the SBA directory. When candidates apply, we check their address against HUBZone census tracts. This helps you identify candidates who can help maintain your HUBZone certification requirements. You can also filter job searches to show only HUBZone-eligible candidates.",
    category: "Getting Started",
    tags: ["HUBZone", "verification", "certification"],
  },
  {
    id: 9,
    question: "What analytics and insights are available?",
    answer:
      "Your dashboard provides analytics on job postings, applicant metrics, time-to-fill, candidate sources, and more. AI-powered insights help you understand hiring trends, identify bottlenecks, and optimize your recruitment process. You can export reports for compliance and planning purposes.",
    category: "Support & Resources",
    tags: ["analytics", "insights", "reports"],
  },
  {
    id: 10,
    question: "Is there a cost to post jobs?",
    answer:
      "During our beta development phase, all features are completely free. Once AI features and integrations are complete, we will introduce pricing plans. Beta users will receive special early-bird pricing and priority access to new features. Check our Pricing page for more details.",
    category: "Getting Started",
    tags: ["pricing", "cost", "beta"],
  },
];

export default function EmployerHelp() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [showAIChat, setShowAIChat] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryCount = (category: string) => {
    if (category === "All") return faqData.length;
    return faqData.filter((faq) => faq.category === category).length;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Getting Started":
        return <Sparkles className="h-4 w-4" />;
      case "Job Posting":
        return <Briefcase className="h-4 w-4" />;
      case "Candidate Search":
        return <Users className="h-4 w-4" />;
      case "Account & Settings":
        return <Settings className="h-4 w-4" />;
      case "Support & Resources":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <HelpCircle className="h-4 w-4" />;
    }
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
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

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
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
                <Building2 className="mr-1.5 h-3 w-3 text-primary" />
                Employer Support
              </Badge>
            </motion.div>
          </div>
          <TypingText
            text="Help Center"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
            speed={50}
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to your questions or chat with our AI assistant for personalized employer
            support
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="p-4 border-2 border-border/60 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button
                onClick={() => setShowAIChat(true)}
                className="h-12 gap-2"
                variant="outline"
              >
                <MessageSquare className="h-4 w-4" />
                Ask AI Assistant
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category !== "All" && getCategoryIcon(category)}
                {category}
                <Badge
                  variant="secondary"
                  className={`ml-1 ${
                    selectedCategory === category ? "bg-primary-foreground/20" : ""
                  }`}
                >
                  {getCategoryCount(category)}
                </Badge>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <h3 className="text-lg font-semibold">{faq.question}</h3>
                          {faq.comingSoon && (
                            <Badge variant="secondary" className="text-xs">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {faq.category}
                          </Badge>
                          {faq.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openItems.has(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-border/60">
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowAIChat(true)}
                                className="gap-2"
                              >
                                <Sparkles className="h-3 w-3" />
                                Ask AI about this
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="gap-2"
                              >
                                <Link href="/employer/contact">
                                  <Mail className="h-3 w-3" />
                                  Contact Support
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or ask our AI assistant for help.
                </p>
                <Button onClick={() => setShowAIChat(true)} className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chat with AI Assistant
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Helpful Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="p-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 border-2">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Still need help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore our resources or get in touch with our support team.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild className="gap-2">
                    <Link href="/employer/resources">
                      <BookOpen className="h-4 w-4" />
                      Browse Resources
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="gap-2">
                    <Link href="/employer/contact">
                      <Mail className="h-4 w-4" />
                      Contact Support
                    </Link>
                  </Button>
                  <Button onClick={() => setShowAIChat(true)} className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    AI Assistant
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* AI Chat Modal - Coming Soon Indicator */}
      {showAIChat && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowAIChat(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background border-2 border-border/60 rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl"
          >
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-muted-foreground mb-6">
                Our AI assistant is coming soon! For now, please use the FAQ above or contact our
                support team.
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => setShowAIChat(false)}>
                  Close
                </Button>
                <Button asChild>
                  <Link href="/employer/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
