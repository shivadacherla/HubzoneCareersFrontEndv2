"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { WorkflowToggle } from "./workflow-toggle";
import { UserProfileMenu } from "./user-profile-menu";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { authStorage } from "@/lib/auth/cookie-storage";
import { getApplicantProfile } from "@/lib/api/applicant-api";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, Bell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { href: "/applicant", label: "Home" },
  { href: "/applicant/careers", label: "Careers" },
  { href: "/applicant/companies", label: "Companies" },
  { href: "/applicant/resources", label: "Resources" },
  { href: "/applicant/ai-copilot", label: "Copilot" },
  { href: "/applicant/about", label: "About" },
  { href: "/applicant/faq", label: "FAQ" },
  { href: "/applicant/contact", label: "Contact" },
];

export function ApplicantHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [notifications, setNotifications] = useState(3); // Mock notification count - replace with API call
  const [userData, setUserData] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    profilePicture?: string | null;
  }>({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    profilePicture: null,
  });
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  // Check authentication status and fetch user profile
  useEffect(() => {
    setMounted(true);
    const checkAuth = async () => {
      const authenticated = authStorage.isAuthenticated();
      const role = authStorage.getRole();
      setIsAuthenticated(authenticated);
      setUserRole(role);

      // Fetch user profile if authenticated
      if (authenticated && role === "APPLICANT_USER") {
        setIsLoadingProfile(true);
        try {
          const profile = await getApplicantProfile();
          if (profile) {
            setUserData({
              firstName: profile.firstName || undefined,
              lastName: profile.lastName || undefined,
              email: profile.email || undefined,
              profilePicture: profile.profilePicture || null,
            });
          }
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
          // Keep default/empty user data on error
        } finally {
          setIsLoadingProfile(false);
        }
      } else {
        // Reset user data when not authenticated
        setUserData({
          firstName: undefined,
          lastName: undefined,
          email: undefined,
          profilePicture: null,
        });
      }
    };

    checkAuth();

    // Listen for auth changes (login/logout)
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  const showWorkflowToggle = !isAuthenticated || userRole !== "APPLICANT_USER";

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border/60 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl shadow-sm shadow-primary/5 dark:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50 dark:opacity-30" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/applicant" className="flex min-w-0 items-center gap-3 relative z-10">
           <AnimatedLogo
             src="/brand/hub_logo2.png"
             alt="Hubzone Careers"
             width={48}
             height={48}
             className="h-12 w-auto object-contain"
           />
         </Link>

        <div className="hidden flex-1 items-center justify-end gap-4 md:flex md:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/applicant"
                    ? pathname === "/applicant"
                    : pathname.startsWith(item.href);
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          {showWorkflowToggle && <WorkflowToggle />}
          <ThemeToggle />
          {mounted && isAuthenticated && userRole === "APPLICANT_USER" ? (
            <>
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
              <UserProfileMenu
                firstName={userData.firstName}
                lastName={userData.lastName}
                email={userData.email}
                profilePicture={userData.profilePicture}
              />
            </>
          ) : (
            <>
              {!pathname.startsWith("/applicant/dashboard") && (
                <>
                  <Button asChild variant="outline">
                    <Link href="/applicant/login">Log in</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/applicant/signup">Join Now</Link>
                  </Button>
                </>
              )}
            </>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {showWorkflowToggle && <WorkflowToggle />}
          <ThemeToggle />
          {mounted && isAuthenticated && userRole === "APPLICANT_USER" ? (
            <>
              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => router.push("/applicant/dashboard/notifications")}
              >
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground">
                    {notifications}
                  </span>
                )}
              </Button>
              <UserProfileMenu
                firstName={userData.firstName}
                lastName={userData.lastName}
                email={userData.email}
                profilePicture={userData.profilePicture}
              />
            </>
          ) : mounted ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-4 pt-10">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary",
                        pathname.startsWith(item.href)
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  {!isAuthenticated && (
                    <>
                      <Button asChild variant="outline" onClick={() => setOpen(false)}>
                        <Link href="/applicant/login">Log in</Link>
                      </Button>
                      <Button asChild onClick={() => setOpen(false)}>
                        <Link href="/applicant/signup">Join Now</Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" aria-label="Open navigation" disabled>
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
       </div>
     </header>
   );
 }

