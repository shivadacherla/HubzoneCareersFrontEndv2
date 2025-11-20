import { EmployerHero } from "@/components/sections/employer-hero";
import { EmployerHubzoneMap } from "@/components/sections/employer-hubzone-map";
import { EmployerAIPipeline } from "@/components/sections/employer-ai-pipeline";
import { EmployerOutcomes } from "@/components/sections/employer-outcomes";

export default function EmployerHome() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <EmployerHero />
      <EmployerHubzoneMap />
      <EmployerAIPipeline />
      <EmployerOutcomes />
    </main>
  );
}

