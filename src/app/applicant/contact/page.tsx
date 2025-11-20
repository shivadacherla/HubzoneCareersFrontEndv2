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
  User,
  FileText,
  Briefcase,
  Search,
  X,
  ChevronDown,
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
import { submitApplicantContactForm } from "@/lib/api/contact-api";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
};

type FormErrors = Partial<Record<keyof FormData, string>> & {
  submit?: string;
};

export default function ApplicantContact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [faqQuery, setFaqQuery] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const inquiryTypes = [
    { value: "job-search", label: "Job Search Help", icon: Briefcase },
    { value: "profile", label: "Profile Setup", icon: User },
    { value: "resume", label: "Resume Assistance", icon: FileText },
    { value: "application", label: "Application Questions", icon: MessageSquare },
    { value: "account", label: "Account Issues", icon: HelpCircle },
    { value: "hubzone", label: "HubZone Eligibility", icon: CheckCircle2 },
    { value: "other", label: "Other", icon: Mail },
  ];

  const quickFAQs = [
    "How do I upload my resume?",
    "What is HubZone eligibility?",
    "How do I apply for jobs?",
    "Can I edit my profile after signup?",
    "How does AI matching work?",
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
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      } else if (formData.email.trim().length > 100) {
        newErrors.email = "Email address is too long (maximum 100 characters)";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      // Remove all non-digit characters for validation
      const digitsOnly = formData.phone.replace(/\D/g, "");
      if (digitsOnly.length === 0) {
        newErrors.phone = "Phone number must contain at least one digit";
      } else if (digitsOnly.length < 10) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      } else if (digitsOnly.length > 10) {
        newErrors.phone = "Phone number cannot exceed 10 digits";
      } else if (!/^\d{10}$/.test(digitsOnly)) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
      }
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
    try {
      await submitApplicantContactForm({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        inquiryType: formData.inquiryType,
      });
      setIsSubmitted(true);
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    let processedValue = value;
    
    // Handle phone number formatting and validation
    if (field === "phone") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      // Limit to 10 digits
      processedValue = digitsOnly.slice(0, 10);
    }
    
    setFormData((prev) => ({ ...prev, [field]: processedValue }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (errors.submit) {
      setErrors((prev) => ({ ...prev, submit: undefined }));
    }
  };

  const handleFAQSearch = async (query: string) => {
    setFaqQuery(query);
    // TODO: Integrate with AI API to get FAQ suggestions
    // For now, mock suggestions
    if (query.length > 2) {
      setAiSuggestions([
        "How to upload resume",
        "HubZone eligibility requirements",
        "Profile completion guide",
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
              We've received your message and will get back to you within 24 hours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild>
                <Link href="/applicant">Return to Home</Link>
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
            text="Get in Touch"
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
                  AI-Powered Support
                </Badge>
              </motion.div>
            )}
            {!mounted && (
              <Badge
                variant="outline"
                className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
              >
                <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                AI-Powered Support
              </Badge>
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have questions about job searching, your profile, or HubZone eligibility? Our AI assistant
            can help, or reach out to our support team.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Column - AI FAQ Assistant & Quick Help */}
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
                  <p className="text-sm text-muted-foreground">Find answers instantly</p>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Ask a question... (e.g., How do I upload my resume?)"
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
                    question: "How do I upload my resume?",
                    answer: "Go to Dashboard → Resume → Upload",
                    link: "/applicant/dashboard/resume",
                  },
                  {
                    question: "What is HubZone eligibility?",
                    answer: "Learn about HubZone requirements",
                    link: "/applicant/about",
                  },
                  {
                    question: "How does AI job matching work?",
                    answer: "Our AI analyzes your profile and matches you with relevant jobs",
                    link: "/applicant/dashboard/recommendations",
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
                  <Link href="/applicant/faq">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    View All FAQs
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a href="mailto:support@hubzonecareers.com" className="text-sm text-muted-foreground hover:text-primary">
                      support@hubzonecareers.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <a href="tel:+18001234567" className="text-sm text-muted-foreground hover:text-primary">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
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
                <h2 className="text-2xl font-semibold mb-2">Send us a Message</h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
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

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                    placeholder="john.doe@example.com"
                    maxLength={100}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
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
                    placeholder="5551234567"
                    maxLength={10}
                    pattern="[0-9]{10}"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.phone}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Enter 10-digit phone number (digits only)
                  </p>
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
                    placeholder="Tell us more about your question or concern..."
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

                {/* Submit Error */}
                {errors.submit && (
                  <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3">
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {errors.submit}
                    </p>
                  </div>
                )}

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