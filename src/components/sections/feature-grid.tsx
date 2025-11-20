 "use client";

 import { motion } from "framer-motion";
 import { LucideIcon, BrainCircuit, Workflow, ShieldCheck, Sparkles } from "lucide-react";

 type Feature = {
   title: string;
   description: string;
   icon: LucideIcon;
 };

 const FEATURES: Feature[] = [
   {
     title: "AI Matching Intelligence",
     description:
       "Blend your proprietary scoring with embeddings, RAG pipelines, and compliance filters to surface the right HubZone candidates instantly.",
     icon: BrainCircuit,
   },
   {
     title: "Automated Workflows",
     description:
       "Drag-and-drop journey builder orchestrates email, SMS, and AI agent nudges that sync with your ATS or custom backend.",
     icon: Workflow,
   },
   {
     title: "Security & Compliance",
     description:
       "SOC2-ready architecture with audit trails, redaction policies, and adaptive access rules for government contracting teams.",
     icon: ShieldCheck,
   },
   {
     title: "Copilot Everywhere",
     description:
       "Bring conversational copilots to candidate dashboards, recruiter inboxes, and hiring manager reviews with a single SDK.",
     icon: Sparkles,
   },
 ];

 export function FeatureGrid() {
   return (
     <section className="border-b border-border/60 bg-muted/20 py-28">
       <div className="mx-auto max-w-6xl px-6 md:px-10">
         <div className="mx-auto max-w-3xl text-center">
           <motion.h2
             initial={{ opacity: 0, y: 12 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-20%" }}
             transition={{ duration: 0.6 }}
             className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
           >
             Designed for recruiting teams that depend on precision and velocity.
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 12 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-20%" }}
             transition={{ delay: 0.1, duration: 0.6 }}
             className="mt-4 text-lg text-muted-foreground"
           >
             Every feature is composable, API-friendly, and ready for AI extension.
           </motion.p>
         </div>

         <div className="mt-16 grid gap-6 md:grid-cols-2">
           {FEATURES.map((feature, index) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
               className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 transition-shadow hover:shadow-xl hover:shadow-primary/10"
             >
               <feature.icon className="h-10 w-10 text-primary" />
               <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
               <p className="mt-3 text-sm text-muted-foreground">
                 {feature.description}
               </p>
               <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/15" />
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }

