"use client";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SettingsPage } from "@/components/dashboard/settings-page";
import { FloatingAIAssistant } from "@/components/dashboard/floating-ai-assistant";

export default function SettingsDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <SettingsPage />
        </main>
      </div>
      <FloatingAIAssistant />
    </div>
  );
}

