"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Search, FileText, Briefcase, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: Briefcase, label: "Post New Job", href: "/employer/dashboard/jobs/new" },
    { icon: Search, label: "Find Applicants", href: "/employer/dashboard/applicants" },
    { icon: FileText, label: "Screen Resumes", href: "/employer/dashboard/jobs" },
    { icon: Users, label: "Manage Team", href: "/employer/dashboard/team" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-64 rounded-xl border border-border/60 bg-background p-4 shadow-xl shadow-primary/10"
          >
            <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
              AI Assistant
            </h3>
            <div className="space-y-2">
              {actions.map((action, index) => (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={action.href}>
                      <action.icon className="h-4 w-4 text-primary" />
                      {action.label}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/30"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Sparkles className="h-6 w-6" />
        )}
        {/* Glow effect */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0px 0px var(--primary)",
              "0 0 12px 4px var(--primary)",
              "0 0 0px 0px var(--primary)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full pointer-events-none"
        />
      </motion.button>
    </div>
  );
}

