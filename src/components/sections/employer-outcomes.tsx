"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const OUTCOMES = [
  {
    title: "Shortlist in days, not weeks",
    metric: "72 hrs",
    description:
      "From intake to first AI-ranked candidate slate for common cleared roles.",
  },
  {
    title: "More signal, less noise",
    metric: "65%",
    description:
      "Average reduction in manual resume review time per requisition.",
  },
  {
    title: "Managers stay in the loop",
    metric: "100%",
    description:
      "All shortlists come with transparent, reviewable score explanations.",
  },
];

export function EmployerOutcomes() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl text-center md:mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What employers can expect from Hubzone Careers.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            We don&apos;t just add AI on top of your existing process—we redesign
            the experience so every stakeholder wins: recruiting, compliance, and
            hiring managers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {OUTCOMES.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border/60 bg-background">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">
                    {outcome.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-3xl font-semibold tracking-tight">
                    {outcome.metric}
                  </p>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    {outcome.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


