"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User, Bell, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { getApplicantProfile } from "@/lib/api/applicant-api";
import { authStorage } from "@/lib/auth/cookie-storage";

export function DashboardHeader() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(3); // Mock notification count
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    avatar: string | null;
  }>({
    name: "User",
    email: "",
    avatar: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!authStorage.isAuthenticated()) {
        setIsLoading(false);
        return;
      }

      try {
        const profile = await getApplicantProfile();
        if (profile) {
          const firstName = profile.firstName || "";
          const lastName = profile.lastName || "";
          const fullName = `${firstName} ${lastName}`.trim() || "User";
          
          setUserData({
            name: fullName,
            email: profile.email || "",
            avatar: profile.profilePicture || null,
          });
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();

    // Listen for auth changes
    const handleAuthChange = () => {
      fetchProfile();
    };

    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
    authStorage.clear();
    window.dispatchEvent(new Event("authChanged"));
    router.push("/applicant");
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 border-b border-border/60 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl"
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden flex-1 max-w-md md:block"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs, companies..."
              className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2 pl-10 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Sparkles className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </motion.div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => router.push("/applicant/dashboard/notifications")}
            >
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground"
                >
                  {notifications}
                </motion.span>
              )}
            </Button>
          </motion.div>

          {/* User Menu */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full p-0"
                >
                  <Avatar className="h-10 w-10 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                    <AnimatePresence mode="wait">
                      {!isLoading && userData.avatar ? (
                        <motion.div
                          key="image"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <AvatarImage src={userData.avatar} alt={userData.name} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="initial"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/60 text-sm font-semibold text-primary-foreground"
                        >
                          {isLoading ? "..." : getInitials(userData.name)}
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
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">
                      {isLoading ? "Loading..." : userData.name}
                    </p>
                    {userData.email && (
                      <p className="text-xs text-muted-foreground">{userData.email}</p>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/applicant/dashboard/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/applicant/dashboard")}>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/applicant/dashboard/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

