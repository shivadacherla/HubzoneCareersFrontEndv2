"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  HelpCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Briefcase,
  Users,
  Search,
  DollarSign,
  Shield,
  TrendingUp,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organizationName: string;
  organizationSize: string;
  subject: string;
  message: string;
  inquiryType: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function EmployerContact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organizationName: "",
    organizationSize: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [faqQuery, setFaqQuery] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const inquiryTypes = [
    { value: "sales", label: "Sales & Pricing", icon: DollarSign },
    { value: "job-posting", label: "Job Posting Help", icon: Briefcase },
    { value: "candidate-search", label: "Finding Candidates", icon: Users },
    { value: "screening", label: "Resume Screening", icon: Search },
    { value: "compliance", label: "HubZone Compliance", icon: Shield },
    { value: "account", label: "Account Management", icon: Building2 },
    { value: "integration", label: "API Integration", icon: TrendingUp },
    { value: "other", label: "Other", icon: Mail },
  ];

  const quickFAQs = [
    "How do I post a job?",
    "What is HubZone compliance?",
    "How does AI candidate screening work?",
    "What are your pricing plans?",
    "How do I manage team access?",
  ];

  const organizationSizes = [
    "1-50 employees",
    "51-100 employees",
    "101-200 employees",
    "201-500 employees",
    "500+ employees",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    } else {
      // Check for work email (not generic domains)
      const genericDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
      const domain = formData.email.split("@")[1]?.toLowerCase();
      if (domain && genericDomains.includes(domain)) {
        newErrors.email = "Please use your work email address";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }

    if (!formData.organizationSize) {
      newErrors.organizationSize = "Please select organization size";
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // TODO: Replace with actual API call
    // await submitContactForm(formData);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFAQSearch = async (query: string) => {
    setFaqQuery(query);
    // TODO: Integrate with AI API to get FAQ suggestions
    if (query.length > 2) {
      setAiSuggestions([
        "How to post a job listing",
        "HubZone compliance requirements",
        "AI candidate screening setup",
        "Team access management",
      ]);
    } else {
      setAiSuggestions([]);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background py-12">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="mx-auto w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-semibold"
            >
              Message Sent Successfully!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground"
            >
              Our sales team will reach out to you within 24 hours. For urgent matters, please call us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center"
            >
              <Button asChild>
                <Link href="/employer">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/employer/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12 relative overflow-hidden">
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
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <TypingText
            text="Contact Our Team"
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            speed={50}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-4"
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
              >
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  Enterprise Support
                </Badge>
              </motion.div>
            )}
            {!mounted && (
              <Badge
                variant="outline"
                className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
              >
                <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                Enterprise Support
              </Badge>
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Need help with job postings, candidate screening, HubZone compliance, or pricing? Our
            sales and support team is here to help.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Column - AI FAQ Assistant & Resources */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* AI FAQ Search */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Get instant answers</p>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Ask a question... (e.g., How do I post a job?)"
                  value={faqQuery}
                  onChange={(e) => handleFAQSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <AnimatePresence>
                {aiSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {aiSuggestions.map((suggestion, index) => (
                      <motion.button
                        key={suggestion}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full text-left p-3 rounded-lg border border-border/60 hover:bg-muted/50 transition-colors text-sm"
                        onClick={() => {
                          setFaqQuery(suggestion);
                          // TODO: Show FAQ answer
                        }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-4 pt-4 border-t border-border/60">
                <p className="text-xs text-muted-foreground mb-2">Quick links:</p>
                <div className="flex flex-wrap gap-2">
                  {quickFAQs.map((faq) => (
                    <Button
                      key={faq}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => handleFAQSearch(faq)}
                    >
                      {faq}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Help Options */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Common Questions
              </h3>
              <div className="space-y-3">
                {[
                  {
                    question: "How do I post a job?",
                    answer: "Go to Dashboard → Jobs → Post New Job",
                    link: "/employer/dashboard/jobs/new",
                  },
                  {
                    question: "What is HubZone compliance?",
                    answer: "Learn about HubZone requirements and verification",
                    link: "/employer/resources",
                  },
                  {
                    question: "How does AI candidate screening work?",
                    answer: "Our AI analyzes resumes and scores candidates automatically",
                    link: "/employer/dashboard/jobs",
                  },
                  {
                    question: "What are your pricing plans?",
                    answer: "View our flexible pricing options for employers",
                    link: "/employer/pricing",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-3 rounded-lg border border-border/60 hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-medium text-sm mb-1">{item.question}</p>
                    <p className="text-xs text-muted-foreground mb-2">{item.answer}</p>
                    <Link href={item.link} className="text-xs text-primary hover:underline">
                      Learn more →
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border/60">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/employer/help">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    View Help Center
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Sales Email</p>
                    <a href="mailto:sales@hubzonecareers.com" className="text-sm text-muted-foreground hover:text-primary">
                      sales@hubzonecareers.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Sales Phone</p>
                    <a href="tel:+18001234567" className="text-sm text-muted-foreground hover:text-primary">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Response Time</p>
                    <p className="text-sm text-muted-foreground">Sales: Within 4 hours</p>
                    <p className="text-sm text-muted-foreground">Support: Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 md:p-8 border-2 border-border/60 bg-background/95 backdrop-blur-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and our team will respond promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className={errors.firstName ? "border-destructive" : ""}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className={errors.lastName ? "border-destructive" : ""}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Organization Name */}
                <div className="space-y-2">
                  <Label htmlFor="organizationName">
                    Organization Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="organizationName"
                    value={formData.organizationName}
                    onChange={(e) => handleChange("organizationName", e.target.value)}
                    className={errors.organizationName ? "border-destructive" : ""}
                    placeholder="TechCorp Solutions"
                  />
                  {errors.organizationName && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.organizationName}
                    </p>
                  )}
                </div>

                {/* Organization Size */}
                <div className="space-y-2">
                  <Label htmlFor="organizationSize">
                    Organization Size <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.organizationSize}
                    onValueChange={(value) => handleChange("organizationSize", value)}
                  >
                    <SelectTrigger
                      id="organizationSize"
                      className={errors.organizationSize ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Select organization size" />
                    </SelectTrigger>
                    <SelectContent>
                      {organizationSizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.organizationSize && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.organizationSize}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Work Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                    placeholder="john.doe@yourcompany.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Please use your work email address (not personal email)
                  </p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <Label htmlFor="inquiryType">
                    What can we help you with? <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => handleChange("inquiryType", value)}
                  >
                    <SelectTrigger
                      id="inquiryType"
                      className={errors.inquiryType ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <type.icon className="h-4 w-4" />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.inquiryType && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.inquiryType}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                    placeholder="Tell us more about your needs, questions, or how we can help..."
                    rows={6}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
