 "use client";

 import { usePathname, useRouter } from "next/navigation";
 import { Button } from "@/components/ui/button";
 import { Shuffle } from "lucide-react";

 export function WorkflowToggle() {
   const router = useRouter();
   const pathname = usePathname();

   const isApplicant = pathname.startsWith("/applicant");

   const target = isApplicant ? "/employer" : "/applicant";
   const label = isApplicant ? "Switch to Employer" : "Switch to Applicant";

   return (
     <Button
       variant="outline"
       size="sm"
       className="gap-2"
       onClick={() => router.push(target)}
       aria-label={label}
     >
       <Shuffle className="h-4 w-4" />
       {label}
     </Button>
   );
 }

