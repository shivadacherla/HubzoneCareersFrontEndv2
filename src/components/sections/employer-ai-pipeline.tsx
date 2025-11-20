"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const STEPS = [
  {
    title: "Intake & scoping",
    body: "Turn your job description and contract language into structured requirements—including clearance, geography, and certifications.",
  },
  {
    title: "AI resume screening",
    body: "We parse resumes, normalize titles, and score candidates on hard skills, clearance fit, and HubZone eligibility using transparent criteria.",
  },
  {
    title: "Ranked shortlists",
    body: "Your team receives a ranked slate with qualitative notes, risk flags, and suggested outreach templates for each candidate.",
  },
  {
    title: "Feedback & learning",
    body: "Hiring manager feedback flows back into the scoring model so subsequent rounds reflect your preferences.",
  },
];

export function EmployerAIPipeline() {
  return (
    <section className="border-b border-border/60 bg-muted/10 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Built-in AI screening that behaves like an extra recruiter.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            No black-box scores. You see exactly why a candidate is recommended:
            skills, geography, HubZone coverage, and clearance context all in
            one place.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <Card className="h-full border-border/60 bg-background">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">
                    <span className="mr-2 text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    {step.body}
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


