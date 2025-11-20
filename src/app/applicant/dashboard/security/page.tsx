"use client";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SecurityPage } from "@/components/dashboard/security-page";
import { FloatingAIAssistant } from "@/components/dashboard/floating-ai-assistant";

export default function SecurityDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <SecurityPage />
        </main>
      </div>
      <FloatingAIAssistant />
    </div>
  );
}

