"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { WorkflowToggle } from "./workflow-toggle";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { UserProfileMenu } from "./user-profile-menu";
import { authStorage } from "@/lib/auth/cookie-storage";
import { getEmployerProfile } from "@/lib/api/employer-api";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Bell, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "/employer", label: "Home" },
  { href: "/employer/overview", label: "Overview" },
  { href: "/employer/pricing", label: "Pricing" },
  { href: "/employer/resources", label: "Resources" },
  { href: "/employer/ai-copilot", label: "Copilot" },
  { href: "/employer/contact", label: "Contact" },
  { href: "/employer/help", label: "Help" },
];

const EMPLOYER_ROLES = ["EMPLOYER_USER", "EMPLOYER_ADMIN"];

const isEmployerRole = (role: string | null): boolean =>
  !!role && EMPLOYER_ROLES.includes(role);

type EmployerUserProfile = {
  firstName?: string;
  lastName?: string;
  email?: string;
  profilePicture?: string | null;
};

export function EmployerHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [notifications, setNotifications] = useState(2);
  const [userData, setUserData] = useState<EmployerUserProfile>({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    profilePicture: null,
  });

  useEffect(() => {
    setMounted(true);

    const checkAuth = async () => {
      const authenticated = authStorage.isAuthenticated();
      const role = authStorage.getRole();
      setIsAuthenticated(authenticated);
      setUserRole(role);

      if (authenticated && isEmployerRole(role)) {
        try {
          const profile = await getEmployerProfile();
          if (profile) {
            setUserData({
              firstName: profile.firstName || profile.organization?.organizationName || undefined,
              lastName: profile.lastName || undefined,
              email: profile.email || profile.organization?.organizationEmail || undefined,
              profilePicture:
                profile.profilePicture ||
                profile.organization?.logo ||
                null,
            });
          }
        } catch (error) {
          console.error("Failed to fetch employer profile:", error);
        }
      } else {
        setUserData({
          firstName: undefined,
          lastName: undefined,
          email: undefined,
          profilePicture: null,
        });
      }
    };

    checkAuth();

    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  const userHasEmployerAccess = mounted && isEmployerRole(userRole) && isAuthenticated;
  const showWorkflowToggle = !userHasEmployerAccess;

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border/60 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl shadow-sm shadow-primary/5 dark:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50 dark:opacity-30" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/employer"
          className="flex min-w-0 items-center gap-3 relative z-10"
        >
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
                  item.href === "/employer"
                    ? pathname === "/employer"
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
          {userHasEmployerAccess ? (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={() => router.push("/employer/dashboard/notifications")}
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
                dashboardPath="/employer/dashboard"
                profilePath="/employer/dashboard/profile"
                settingsPath="/employer/dashboard/settings"
                logoutRedirectPath="/employer"
              />
            </>
          ) : (
            <>
              {!pathname.startsWith("/employer/dashboard") && (
                <>
                  <Button asChild variant="outline">
                    <Link href="/employer/login">Log in</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/employer/signup">Join Now</Link>
                  </Button>
                </>
              )}
            </>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {showWorkflowToggle && <WorkflowToggle />}
          <ThemeToggle />
          {userHasEmployerAccess ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => router.push("/employer/dashboard/notifications")}
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
                dashboardPath="/employer/dashboard"
                profilePath="/employer/dashboard/profile"
                settingsPath="/employer/dashboard/settings"
                logoutRedirectPath="/employer"
              />
            </>
          ) : (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation"
                >
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
                      <Button
                        asChild
                        variant="outline"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/employer/login">Log in</Link>
                      </Button>
                      <Button asChild onClick={() => setOpen(false)}>
                        <Link href="/employer/signup">Join Now</Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}

