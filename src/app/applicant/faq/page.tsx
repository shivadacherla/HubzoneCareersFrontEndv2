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
  ExternalLink,
  CheckCircle2,
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
};

const faqCategories = [
  "All",
  "Getting Started",
  "HUBZone Information",
  "Job Search",
  "Application Process",
  "Account & Profile",
  "Support & Resources",
];

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is a HUBZone and how does it benefit job seekers?",
    answer:
      "A HUBZone (Historically Underutilized Business Zone) is a program run by the U.S. Small Business Administration to promote economic development and employment growth in distressed areas. For job seekers, working for a HUBZone-certified company can mean more local job opportunities, potential for career growth, and get a chance to contribute to the community development.",
    category: "HUBZone Information",
    tags: ["HUBZone", "benefits", "job seekers"],
  },
  {
    id: 2,
    question: "How do I find jobs at HUBZone-certified companies?",
    answer:
      "You can search for jobs at HUBZone-certified companies directly on our platform, jobs posted by HUBZone employers. Additionally, the SBA maintains a directory of HUBZone-certified businesses, which you can use to identify potential employers.",
    category: "Job Search",
    tags: ["job search", "HUBZone companies", "finding jobs"],
  },
  {
    id: 3,
    question: "Are there special requirements to work for a HUBZone company?",
    answer:
      "Generally, there are few requirements (HubZone Resident, Minimum 10 working hours per week, etc.) for job seekers beyond the qualifications for the specific role. However, some HUBZone companies may give preference to candidates who live in a HUBZone area, as a portion of their workforce must reside in these HubZones to maintain certification.",
    category: "HUBZone Information",
    tags: ["requirements", "HUBZone resident", "qualifications"],
  },
  {
    id: 4,
    question: "How do I apply for a job?",
    answer:
      "Browse open roles, click 'Apply', and follow the instructions to submit your resume. Make sure your resume is up to date and tailored to the job description for the best chance of success.",
    category: "Application Process",
    tags: ["application", "resume", "how to apply"],
  },
  {
    id: 5,
    question: "How do I contact Customer Support?",
    answer:
      "Use the 'Contact Us' form in your dashboard or email support@hubzonecareers.com. Our support team is available Monday to Friday, 9am–6pm EST, and typically responds within 24 hours.",
    category: "Support & Resources",
    tags: ["support", "contact", "help"],
  },
  {
    id: 6,
    question: "What should I do if I forget my password?",
    answer:
      "Click the 'Forgot Password' on the login page. You will receive an email with instructions to reset your password. If you do not receive the email, check your spam folder or contact support.",
    category: "Account & Profile",
    tags: ["password", "forgot password", "account"],
  },
  {
    id: 7,
    question: "How do I know if a company is HUBZone-certified?",
    answer:
      "On our platform, HUBZone-certified companies are clearly labeled. You can also verify a company's certification by searching the SBA's official HUBZone directory.",
    category: "HUBZone Information",
    tags: ["verification", "certification", "SBA"],
  },
  {
    id: 8,
    question: "Can I receive job alerts for newly posted HUBZone opportunities?",
    answer:
      "Yes, you can set up job alerts in your profile settings. You will receive email notifications when new jobs matching your preferences are posted, including those from HUBZone-certified employers.",
    category: "Job Search",
    tags: ["job alerts", "notifications", "preferences"],
  },
  {
    id: 9,
    question: "What resources are available to help job applicant?",
    answer:
      "Our Resources section includes resume guides, interview tips, and information about working for HUBZone companies. You can also access webinars and articles tailored to job seekers interested in HUBZone opportunities.",
    category: "Support & Resources",
    tags: ["resources", "resume", "interview tips"],
  },
  {
    id: 10,
    question: "Is there a cost to use this job portal?",
    answer:
      "No, our job portal is free for job seekers. You can search for jobs, apply, and access resources at no cost.",
    category: "Getting Started",
    tags: ["pricing", "free", "cost"],
  },
  {
    id: 11,
    question: "How do I improve my chances of getting hired by a HUBZone company?",
    answer:
      "Tailor your resume and cover letter to highlight relevant skills and experience. If you live in a HUBZone area, mention this in your application. Take advantage of our career resources and consider networking with HUBZone employers at local events or online.",
    category: "Application Process",
    tags: ["tips", "resume", "networking"],
  },
];

export default function ApplicantFAQ() {
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
                <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                AI-Powered Help
              </Badge>
            </motion.div>
          </div>
          <TypingText
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
            speed={50}
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions or chat with our AI assistant for personalized help
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
                  placeholder="Search for answers..."
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${
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
                              {faq.id === 7 && (
                                <Link
                                  href="https://dsbs.sba.gov/search/dsp_dsbs.cfm?CFID=1005716&CFTOKEN=4d40e784d6edb347-AA04B9C4-91FE-82DE-D76B817E6D238503"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline inline-flex items-center gap-1 ml-1"
                                >
                                  SBA directory
                                  <ExternalLink className="h-3 w-3" />
                                </Link>
                              )}
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
                                <Link href="/applicant/contact">
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
                    <Link href="/applicant/resources">
                      <BookOpen className="h-4 w-4" />
                      Browse Resources
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="gap-2">
                    <Link href="/applicant/contact">
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
                  <Link href="/applicant/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
