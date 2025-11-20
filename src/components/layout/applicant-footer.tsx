"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PrivacyPolicy } from "@/components/legal/privacy-policy";
import { TermsOfService } from "@/components/legal/terms-of-service";
import { subscribeToNewsletter } from "@/lib/api/subscriber-api";
import { CheckCircle2, AlertCircle, Mail, Sparkles } from "lucide-react";

const APPLICANT_FOOTER_LINKS = [
  {
    title: "For Job Seekers",
    links: [
      { href: "/applicant", label: "Home" },
      { href: "/applicant/careers", label: "Careers" },
      { href: "/applicant/companies", label: "Companies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/applicant/resources", label: "Resources" },
      { href: "/applicant/ai-copilot", label: "AI Copilot" },
      { href: "/applicant/faq", label: "FAQ" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/applicant/about", label: "About Us" },
      { href: "/applicant/contact", label: "Contact" },
    ],
  },
];

export function ApplicantFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setAlreadySubscribed(false);
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await subscribeToNewsletter(email);
      if (response.alreadySubscribed) {
        setAlreadySubscribed(true);
        setEmail("");
        // Hide message after 5 seconds
        setTimeout(() => {
          setAlreadySubscribed(false);
        }, 5000);
      } else {
        setShowSuccess(true);
        setEmail("");
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <footer className="relative border-t border-border/60 bg-gradient-to-b from-background via-background/95 to-background/90 shadow-lg shadow-primary/5 dark:shadow-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50 dark:opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-4 px-6 py-12 md:grid-cols-5 md:gap-6 md:px-10">
          <div className="space-y-3">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Hubzone Careers
              </span>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Find your next opportunity in government contracting. AI-powered
                job matching and career guidance.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Copyright ©️ HUBZone Careers 2025
            </p>
            <p className="text-xs text-muted-foreground">
              Powered by Techathon Inc.
            </p>
          </div>

          {APPLICANT_FOOTER_LINKS.map((section) => (
            <div key={section.title} className="space-y-2">
              <p className="text-sm font-semibold text-foreground">
                {section.title}
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Legal</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="transition-colors hover:text-primary text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTermsOpen(true)}
                  className="transition-colors hover:text-primary text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl border-t border-border/60 px-6 pt-8 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                Join the newsletter
              </p>
              <p className="text-xs text-muted-foreground">
                Subscribe for weekly updates. No spams ever!
              </p>
            </div>
            <div className="flex-1 space-y-2">
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:gap-3"
              >
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                      setShowSuccess(false);
                      setAlreadySubscribed(false);
                    }}
                    className={`h-10 flex-1 text-sm pr-10 ${
                      error ? "border-destructive" : showSuccess || alreadySubscribed ? "border-green-500" : ""
                    }`}
                    required
                    disabled={isSubmitting}
                  />
                  {(showSuccess || alreadySubscribed) && (
                    <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                  )}
                </div>
                <Button
                  type="submit"
                  size="default"
                  className="w-full md:w-auto md:whitespace-nowrap"
                  disabled={isSubmitting || showSuccess || alreadySubscribed}
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
                      Subscribing...
                    </>
                  ) : showSuccess ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : alreadySubscribed ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-md bg-destructive/10 border border-destructive/20 px-3 py-2"
                  >
                    <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                    <p className="text-xs text-destructive">{error}</p>
                  </motion.div>
                )}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-md bg-green-500/10 border border-green-500/20 px-3 py-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Thank you for subscribing!
                    </p>
                  </motion.div>
                )}
                {alreadySubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-md bg-green-500/10 border border-green-500/20 px-3 py-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Email already subscribed!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-semibold">Privacy Policy</DialogTitle>
            <DialogDescription>
              Last updated: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <PrivacyPolicy />
        </DialogContent>
      </Dialog>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-semibold">Terms of Service</DialogTitle>
            <DialogDescription>
              Last updated: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <TermsOfService />
        </DialogContent>
      </Dialog>
    </>
  );
}
