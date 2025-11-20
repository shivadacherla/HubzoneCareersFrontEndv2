"use client";

import Link from "next/link";
import { useState } from "react";
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

const EMPLOYER_FOOTER_LINKS = [
  {
    title: "For Employers",
    links: [
      { href: "/employer", label: "Home" },
      { href: "/employer/overview", label: "Overview" },
      { href: "/employer/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/employer/resources", label: "Resources" },
      { href: "/employer/ai-copilot", label: "AI Copilot" },
      { href: "/employer/help", label: "Help" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/employer/contact", label: "Contact Us" },
    ],
  },
];

export function EmployerFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    
    setIsSubmitting(true);
    // TODO: Replace with real newsletter subscription API call
    setTimeout(() => {
      alert("Thank you for subscribing! Check your email for confirmation.");
      setEmail("");
      setIsSubmitting(false);
    }, 500);
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
                AI-powered recruitment platform for government contracting. Find
                qualified HUBZone candidates faster.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Copyright ©️ HUBZone Careers 2025
            </p>
            <p className="text-xs text-muted-foreground">
              Powered by Techathon Inc.
            </p>
          </div>

          {EMPLOYER_FOOTER_LINKS.map((section) => (
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
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:gap-3"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 flex-1 text-sm"
                required
              />
              <Button
                type="submit"
                size="default"
                className="w-full md:w-auto md:whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
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

