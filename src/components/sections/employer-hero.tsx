"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { Sparkles } from "lucide-react";

export function EmployerHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
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
                className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
              >
                <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                <TypingText
                  text="HubZone & cleared hiring · AI accelerated"
                  speed={30}
                  className="inline"
                />
              </Badge>
            </motion.div>
          </motion.div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Fill HubZone and cleared roles faster—with an AI hiring copilot.
          </h1>
          <p className="max-w-xl text-sm md:text-base text-muted-foreground">
            Hubzone Careers combines geo-aware talent mapping, resume
            intelligence, and compliance-first workflows so your team can move
            from requisition to signed offer in weeks, not quarters.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/employer/pricing">View pricing</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/employer/overview">Platform overview</Link>
            </Button>
          </div>
          <dl className="mt-4 grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em]">Time-to-fill</dt>
              <dd className="mt-1 text-lg font-semibold text-foreground">
                -37% on avg.
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em]">
                HubZone coverage
              </dt>
              <dd className="mt-1 text-lg font-semibold text-foreground">
                95%+ census tracts
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em]">
                Qualified shortlists
              </dt>
              <dd className="mt-1 text-lg font-semibold text-foreground">
                5–10 per role
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="relative h-full w-full rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-primary/20 p-5 shadow-xl shadow-primary/10"
        >
          <div className="space-y-4 rounded-2xl bg-background/80 p-4 backdrop-blur">
            <p className="text-xs font-medium text-muted-foreground">
              Geo-aware HubZone coverage
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-lg bg-primary/10 p-2">
                <p className="font-medium text-primary/90">Northeast</p>
                <p className="text-[0.7rem] text-muted-foreground">
                  DC, MD, VA, PA, NJ
                </p>
              </div>
              <div className="rounded-lg bg-primary/5 p-2">
                <p className="font-medium text-primary/90">South</p>
                <p className="text-[0.7rem] text-muted-foreground">
                  TX, FL, GA, NC
                </p>
              </div>
              <div className="rounded-lg bg-primary/5 p-2">
                <p className="font-medium text-primary/90">West</p>
                <p className="text-[0.7rem] text-muted-foreground">
                  CA, CO, AZ, WA
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-dashed border-border/70 bg-muted/40 p-3 text-xs">
              <p className="font-medium text-foreground">
                AI screening & scoring
              </p>
              <p className="mt-1 text-muted-foreground">
                We pre-score candidates on clearance status, HubZone
                eligibility, skills, and recency of similar contracts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


