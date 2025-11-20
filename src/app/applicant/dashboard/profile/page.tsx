"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { ProfilePage } from "@/components/dashboard/profile-page";
import { FloatingAIAssistant } from "@/components/dashboard/floating-ai-assistant";

export default function ProfileDashboardPage() {
  const searchParams = useSearchParams();
  const fromResume = searchParams.get("fromResume") === "true";
  const fromManual = searchParams.get("fromManual") === "true";

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <ProfilePage fromResume={fromResume} fromManual={fromManual} />
        </main>
      </div>
      <FloatingAIAssistant />
    </div>
  );
}

