"use client";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SavedJobsPage } from "@/components/dashboard/saved-jobs-page";
import { FloatingAIAssistant } from "@/components/dashboard/floating-ai-assistant";

export default function SavedJobsDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <SavedJobsPage />
        </main>
      </div>
      <FloatingAIAssistant />
    </div>
  );
}

