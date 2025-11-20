"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { AIRecoPage } from "@/components/dashboard/ai-recommendations-page";
import { FloatingAIAssistant } from "@/components/dashboard/floating-ai-assistant";

export default function RecommendationsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto">
          <AIRecoPage />
        </main>
      </div>
      <FloatingAIAssistant />
    </div>
  );
}

