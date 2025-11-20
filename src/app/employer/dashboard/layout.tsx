import type { Metadata } from "next";
import { EmployerDashboardSidebar } from "@/components/employer-dashboard/employer-dashboard-sidebar";
import { FloatingAIAssistant } from "@/components/employer-dashboard/floating-ai-assistant";

export const metadata: Metadata = {
  title: "Employer Dashboard · Hubzone Careers",
  description: "Manage your organization, post jobs, and find qualified candidates.",
};

export default function EmployerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <EmployerDashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
      <FloatingAIAssistant />
    </div>
  );
}

