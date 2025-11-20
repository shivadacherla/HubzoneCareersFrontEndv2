"use client";

import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { JobSearchPage } from "@/components/dashboard/job-search-page";
import { FloatingAIAssistant } from "@/components/dashboard/floating-ai-assistant";

export default function JobsDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <JobSearchPage />
        </main>
      </div>
      <FloatingAIAssistant />
    </div>
  );
}

