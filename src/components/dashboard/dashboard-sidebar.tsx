"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  Briefcase,
  Bell,
  Bookmark,
  Settings,
  Shield,
  Sparkles,
  FileText,
  GraduationCap,
  Award,
  Building2,
  MapPin,
  Search,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { href: "/applicant/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/applicant/dashboard/profile", label: "Profile", icon: User },
  { href: "/applicant/dashboard/jobs", label: "Job Search", icon: Search },
  { href: "/applicant/dashboard/saved", label: "Saved Jobs", icon: Bookmark },
  { href: "/applicant/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/applicant/dashboard/security", label: "Security", icon: Shield },
  { href: "/applicant/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "hidden border-r border-border/60 bg-background md:flex md:flex-col md:w-64",
        isCollapsed && "md:w-20"
      )}
    >
      <div className="flex h-16 items-center border-b border-border/60 px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          {!isCollapsed && (
            <span className="font-semibold text-foreground">Dashboard</span>
          )}
        </motion.div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {SIDEBAR_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          
          return (
            <motion.div
              key={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-primary-foreground")} />
                {!isCollapsed && (
                  <span className={isActive ? "text-primary-foreground" : ""}>
                    {item.label}
                  </span>
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Profile Completion Progress */}
      <div className="border-t border-border/60 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-lg border border-border/60 bg-muted/30 p-4"
        >
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Profile Complete</span>
            <span className="font-semibold text-primary">45%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-background">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "45%" }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-full bg-gradient-to-r from-primary to-primary/60"
            />
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
}

