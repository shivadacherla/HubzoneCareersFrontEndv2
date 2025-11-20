"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const REGIONS = [
  {
    title: "Mid‑Atlantic & DC",
    stat: "4,200+ candidates",
    detail: "Dense HubZone coverage near major federal agencies.",
  },
  {
    title: "South & Gulf",
    stat: "3,100+ candidates",
    detail: "Strong pipeline for logistics, defense, and field roles.",
  },
  {
    title: "Mountain & West",
    stat: "2,000+ candidates",
    detail: "Remote-friendly talent with cleared engineering experience.",
  },
];

export function EmployerHubzoneMap() {
  return (
    <section className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1 text-xs">
              HubZone-aware candidate sourcing
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              See exactly where your next hire can come from.
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Our talent graph understands HubZone tracts, commuting tolerances,
              and remote work preferences across the United States. Filter by
              geography and contract requirements in one view.
            </p>
          </div>
          <div className="max-w-md text-sm text-muted-foreground">
            <p>
              We ingest census and SBA HubZone updates so your team doesn&apos;t
              have to maintain spreadsheets. Each region shows available
              candidates, common skills, and contract history.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-primary/15 p-5"
          >
            <div className="h-64 rounded-2xl border border-dashed border-border/70 bg-background/80 p-4 text-xs text-muted-foreground md:h-72">
              <p className="font-medium text-foreground">
                Interactive HubZone heatmap
              </p>
              <p className="mt-2 max-w-md">
                In the full application, this panel renders an actual US map with
                HubZone overlays, role demand, and candidate density.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-xl bg-primary/25" />
                <div className="h-20 rounded-xl bg-primary/10" />
                <div className="h-20 rounded-xl bg-primary/5" />
                <div className="h-4 rounded-full bg-primary/80" />
                <div className="h-4 rounded-full bg-primary/50" />
                <div className="h-4 rounded-full bg-primary/30" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {REGIONS.map((region, index) => (
              <motion.div
                key={region.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border-border/60 bg-background">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-sm font-semibold">
                      {region.title}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground">
                      {region.stat}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground md:text-sm">
                      {region.detail}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


