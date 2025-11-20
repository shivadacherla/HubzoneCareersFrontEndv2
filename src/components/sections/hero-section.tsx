 "use client";

 import dynamic from "next/dynamic";
 import { motion } from "framer-motion";
 import Link from "next/link";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import { TypingText } from "@/components/ui/typing-text";
 import { Sparkles } from "lucide-react";

 const Lottie = dynamic(() => import("lottie-react"), {
   ssr: false,
   loading: () => (
     <div className="flex h-full w-full items-center justify-center rounded-3xl border border-dashed border-border/60 bg-muted/40 text-xs text-muted-foreground">
       Drop in your Lottie animation JSON to bring this scene to life.
     </div>
   ),
 });

 type HeroSectionProps = {
   animationData?: object;
 };

 export function HeroSection({ animationData }: HeroSectionProps) {
   return (
     <section className="relative isolate overflow-hidden border-b border-border/60">
       <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-32 md:grid-cols-[1.2fr_1fr] md:px-10">
         <div className="space-y-10">
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
                className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
              >
                <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                <TypingText
                  text="AI-Optimized Hiring"
                  speed={30}
                  className="inline"
                />
                <Badge variant="secondary" className="ml-2 rounded-full text-[0.65rem]">
                  New
                </Badge>
              </Badge>
            </motion.div>
          </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 16 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1, duration: 0.9, ease: "easeOut" }}
             className="space-y-6"
           >
             <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
               Craft tailored job journeys with AI-driven candidate intelligence.
             </h1>
             <p className="max-w-xl text-lg text-muted-foreground">
               Hubzone Careers merges human insight with automation to surface
               qualified government contracting talent, accelerate compliance, and
               personalize the experience for every candidate.
             </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 16 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
             className="flex flex-col gap-4 sm:flex-row"
           >
             <Button asChild size="lg" className="gap-2 text-base">
               <Link href="/request-demo">Launch AI Experience</Link>
             </Button>
             <Button asChild variant="secondary" size="lg" className="text-base">
               <Link href="/platform">Explore the platform</Link>
             </Button>
           </motion.div>

           <motion.dl
             initial="hidden"
             animate="visible"
             variants={{
               visible: { transition: { staggerChildren: 0.15 } },
             }}
             className="grid gap-6 sm:grid-cols-3"
           >
             {[
               { label: "Qualified introductions", value: "4.8x" },
               { label: "Compliance coverage", value: "99.1%" },
               { label: "Time-to-fill", value: "-37%" },
             ].map((metric) => (
               <motion.div
                 key={metric.label}
                 variants={{
                   hidden: { opacity: 0, y: 12 },
                   visible: { opacity: 1, y: 0 },
                 }}
                 className="rounded-2xl border border-border/60 p-4"
               >
                 <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                   {metric.label}
                 </dt>
                 <dd className="mt-2 text-2xl font-semibold">{metric.value}</dd>
               </motion.div>
             ))}
           </motion.dl>
         </div>

         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
           className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-primary/20 p-6 shadow-xl shadow-primary/10"
         >
           {animationData ? (
             <Lottie
               animationData={animationData}
               loop
               className="h-full w-full"
             />
           ) : (
             <div className="flex h-full w-full flex-col items-start justify-between rounded-2xl border border-dashed border-border/60 bg-background/60 p-6 text-sm text-muted-foreground">
               <p className="max-w-xs">
                 Provide a `hero` animation JSON in `public/animations/hero.json`
                 and pass it to `HeroSection` to showcase your narrative.
               </p>
               <p className="text-xs uppercase tracking-[0.12em]">
                 Motion ready · Lottie enabled
               </p>
             </div>
           )}
         </motion.div>
       </div>
       <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/10 via-transparent" />
     </section>
   );
 }

