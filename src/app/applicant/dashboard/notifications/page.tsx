"use client";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { NotificationsPage } from "@/components/dashboard/notifications-page";
import { FloatingAIAssistant } from "@/components/dashboard/floating-ai-assistant";

export default function NotificationsDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <NotificationsPage />
        </main>
      </div>
      <FloatingAIAssistant />
    </div>
  );
}

