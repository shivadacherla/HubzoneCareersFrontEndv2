"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  User,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { authStorage } from "@/lib/auth/cookie-storage";
import { cn } from "@/lib/utils";

type UserProfileMenuProps = {
  firstName?: string;
  lastName?: string;
  email?: string;
  profilePicture?: string | null;
  className?: string;
  dashboardPath?: string;
  profilePath?: string;
  settingsPath?: string;
  logoutRedirectPath?: string;
};

export function UserProfileMenu({
  firstName = "User",
  lastName = "",
  email,
  profilePicture,
  className,
  dashboardPath = "/applicant/dashboard",
  profilePath = "/applicant/dashboard/profile",
  settingsPath = "/applicant/dashboard/settings",
  logoutRedirectPath = "/applicant",
}: UserProfileMenuProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    // Clear auth cookies
    authStorage.clear();
    
    // Dispatch auth change event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("authChanged"));
    }
    
    // Redirect to appropriate landing
    router.push(logoutRedirectPath);
  };

  // Get initials from name
  const getInitials = () => {
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    if (firstName) {
      return firstName.charAt(0).toUpperCase();
    }
    if (email) {
      return email.charAt(0).toUpperCase();
    }
    return "U";
  };

  if (!mounted) {
    return null;
  }

  const displayName = firstName && lastName 
    ? `${firstName} ${lastName}` 
    : firstName || email || "User";

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "relative h-10 w-10 rounded-full p-0",
            className
          )}
          aria-label="User menu"
        >
          <Avatar className="h-10 w-10 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
            <AnimatePresence mode="wait">
              {profilePicture ? (
                <motion.div
                  key="image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <AvatarImage src={profilePicture} alt={displayName} />
                </motion.div>
              ) : (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/60 text-sm font-semibold text-primary-foreground"
                >
                  {getInitials()}
                </motion.div>
              )}
            </AnimatePresence>
          </Avatar>
          {/* Glow effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(37, 99, 235, 0.4)",
                "0 0 0 4px rgba(37, 99, 235, 0)",
                "0 0 0 0 rgba(37, 99, 235, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenuContent
            align="end"
            className="w-72 rounded-xl border border-border/80 bg-background/95 p-2 shadow-xl backdrop-blur-xl"
            sideOffset={8}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <DropdownMenuLabel className="p-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background flex-shrink-0">
                    {profilePicture ? (
                      <AvatarImage src={profilePicture} alt={displayName} />
                    ) : null}
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-base font-semibold text-primary-foreground">
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-0.5 min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-none truncate">
                      {displayName}
                    </p>
                    {email && (
                      <p className="text-xs text-muted-foreground leading-none break-all">
                        {email}
                      </p>
                    )}
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2" />
              <div className="space-y-1">
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer rounded-lg transition-colors hover:bg-accent"
                >
                  <a href={dashboardPath} className="flex items-center gap-3">
                    <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                    <span>Dashboard</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer rounded-lg transition-colors hover:bg-accent"
                >
                  <a href={profilePath} className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>Profile</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer rounded-lg transition-colors hover:bg-accent"
                >
                  <a href={settingsPath} className="flex items-center gap-3">
                    <Settings className="h-4 w-4 text-muted-foreground" />
                    <span>Settings</span>
                  </a>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer rounded-lg text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700 dark:text-red-400 dark:hover:bg-red-950/50 dark:hover:text-red-300 dark:focus:bg-red-950/50 dark:focus:text-red-300"
              >
                <LogOut className="mr-3 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
}

