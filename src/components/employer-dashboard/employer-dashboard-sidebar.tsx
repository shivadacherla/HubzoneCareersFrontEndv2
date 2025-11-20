"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building2,
  User,
  Search,
  Briefcase,
  FileText,
  Users,
  Bell,
  Shield,
  Settings,
  Sparkles,
  Menu,
  X,
  Crown,
} from "lucide-react";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { authStorage } from "@/lib/auth/cookie-storage";

const NAV_ITEMS = [
  { href: "/employer/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/employer/dashboard/organization", label: "Organization", icon: Building2 },
  { href: "/employer/dashboard/profile", label: "Profile", icon: User },
  { href: "/employer/dashboard/applicants", label: "Find Applicants", icon: Search },
  { href: "/employer/dashboard/jobs", label: "Jobs", icon: Briefcase },
  { href: "/employer/dashboard/team", label: "Team", icon: Users },
  { href: "/employer/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/employer/dashboard/security", label: "Security", icon: Shield },
  { href: "/employer/dashboard/settings", label: "Settings", icon: Settings },
];

export function EmployerDashboardSidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = authStorage.getRole();
    setIsAdmin(role === "EMPLOYER_ADMIN");

    // Listen for auth changes
    const handleAuthChange = () => {
      const updatedRole = authStorage.getRole();
      setIsAdmin(updatedRole === "EMPLOYER_ADMIN");
    };

    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  return (
    <motion.aside
      initial={false}
      animate={isExpanded ? { width: 240 } : { width: 80 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 flex h-screen flex-col border-r border-border/60 bg-background p-4 shadow-lg"
    >
      <div className="mb-6 flex items-center justify-between">
        <Link href="/employer/dashboard" className="flex items-center gap-3">
          {isAdmin && (
            <AnimatedLogo
              src="/brand/hub_logo2.png"
              alt="Hubzone Careers"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
          )}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="text-lg font-semibold">Employer</span>
              <Badge variant="secondary" className="gap-1 px-2 py-0.5">
                {isAdmin ? (
                  <>
                    <Crown className="h-3 w-3" />
                    Admin
                  </>
                ) : (
                  "User"
                )}
              </Badge>
            </motion.div>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-8 w-8"
        >
          {isExpanded ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item, index) => {
          const isActive =
            item.href === "/employer/dashboard"
              ? pathname === "/employer/dashboard"
              : pathname.startsWith(item.href);
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <item.icon className={cn("h-5 w-5", isActive && "text-primary-foreground")} />
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className={cn(
                        "text-sm font-medium",
                        isActive ? "text-primary-foreground" : ""
                      )}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <div className="mt-auto pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-lg border border-border/60 bg-gradient-to-br from-primary/5 to-primary/10 p-4"
        >
          {isExpanded && (
            <>
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">AI Assistant</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Get help with job postings, candidate screening, and more.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </motion.aside>
  );
}

