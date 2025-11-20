 "use client";

 import { motion } from "framer-motion";
 import { Badge } from "@/components/ui/badge";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

 const WORKFLOWS = [
   {
     title: "Copilot briefings",
     description:
       "Blend transcripts, resumes, and clearance data into recruiter briefings with hallucination-safe RAG pipelines.",
   },
   {
     title: "Intelligent prompts",
     description:
       "Control prompt templates and guardrails, then call OpenAI, Anthropic, Azure OpenAI, or self-hosted endpoints interchangeably.",
   },
   {
     title: "Feedback loops",
     description:
       "Collect structured approvals from hiring managers; auto-sync to your backend via webhooks and event streams.",
   },
 ];

 export function AIShowcase() {
   return (
     <section className="border-b border-border/60 py-28">
       <div className="mx-auto max-w-6xl px-6 md:px-10">
         <motion.div
           initial={{ opacity: 0, y: 12 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-20%" }}
           transition={{ duration: 0.6 }}
           className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
         >
           <div className="space-y-4">
             <Badge variant="outline" className="rounded-full px-4 py-1 text-xs">
               AI SDK Ready
             </Badge>
             <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
               Your AI stack. Your infrastructure.
             </h2>
             <p className="max-w-xl text-muted-foreground">
               Connect directly to your existing services. We ship helpers for Vercel
               AI SDK, LangChain, and streaming UI so you can launch copilots without
               rewriting backend logic.
             </p>
           </div>
           <p className="max-w-sm text-sm text-muted-foreground">
             Fine-tune once and reuse across recruiting, onboarding, and contractor
             management flows. Unified observability keeps humans in control.
           </p>
         </motion.div>

         <div className="mt-12 grid gap-6 md:grid-cols-3">
           {WORKFLOWS.map((workflow, index) => (
             <motion.div
               key={workflow.title}
               initial={{ opacity: 0, y: 16 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-20%" }}
               transition={{ delay: index * 0.12, duration: 0.6 }}
             >
               <Card className="h-full border-border/60 bg-background/80 backdrop-blur">
                 <CardHeader>
                   <CardTitle>{workflow.title}</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-muted-foreground">
                     {workflow.description}
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

