 "use client";

 import { motion } from "framer-motion";
 import Link from "next/link";
 import { Button } from "@/components/ui/button";

 export function CtaSection() {
   return (
     <section className="relative overflow-hidden py-24">
       <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
       <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl border border-border/60 bg-background/80 px-8 py-16 text-center shadow-xl shadow-primary/10 backdrop-blur md:flex-row md:text-left">
         <motion.div
           initial={{ opacity: 0, y: 12 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-25%" }}
           transition={{ duration: 0.6 }}
           className="flex-1 space-y-3"
         >
           <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
             Ready when you are
           </p>
           <h3 className="text-3xl font-semibold tracking-tight">
             Launch a fully branded AI experience in weeks, not months.
           </h3>
           <p className="max-w-xl text-sm text-muted-foreground">
             Our team can pair with your backend engineers to connect models,
             configure workflows, and migrate data. You own the infrastructure.
           </p>
         </motion.div>
         <motion.div
           initial={{ opacity: 0, y: 12 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-25%" }}
           transition={{ delay: 0.15, duration: 0.6 }}
           className="flex flex-col gap-3 md:items-end"
         >
           <Button asChild size="lg">
             <Link href="/request-demo">Book a strategy session</Link>
           </Button>
           <Button asChild variant="secondary" size="lg">
             <Link href="/docs/api">View integration docs</Link>
           </Button>
         </motion.div>
       </div>
     </section>
   );
 }

