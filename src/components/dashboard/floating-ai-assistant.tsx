"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Search, FileText, Edit, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const aiActions = [
    { icon: Search, label: "Find Jobs", action: () => router.push("/applicant/dashboard/jobs") },
    { icon: Building2, label: "Find Companies", action: () => router.push("/applicant/dashboard/jobs?tab=companies") },
    { icon: FileText, label: "Edit Resume", action: () => router.push("/applicant/dashboard/profile?tab=resume") },
    { icon: Edit, label: "Enhance Profile", action: () => router.push("/applicant/dashboard/profile") },
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 0 0 rgba(37, 99, 235, 0.4)",
              "0 0 0 10px rgba(37, 99, 235, 0)",
              "0 0 0 0 rgba(37, 99, 235, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg hover:shadow-xl"
          >
            <Sparkles className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>

      {/* AI Assistant Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl p-6 shadow-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold">AI Assistant</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                How can I help you today?
              </p>

              <div className="space-y-2">
                {aiActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        action.action();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center gap-3 rounded-lg border border-border/60 bg-background/60 p-3 text-left text-sm transition-colors hover:bg-muted hover:border-primary/40"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <span>{action.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-4 rounded-lg bg-primary/5 p-3 text-xs text-muted-foreground">
                💡 Tip: Use AI to find jobs that match your profile perfectly
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

