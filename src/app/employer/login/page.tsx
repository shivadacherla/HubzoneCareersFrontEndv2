"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authStorage } from "@/lib/auth/cookie-storage";
import { ForgotPasswordModal } from "@/components/auth/forgot-password-modal";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

type EmployerFormState = {
  email: string;
  password: string;
};

type EmployerErrors = Partial<EmployerFormState>;

const GENERIC_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "proton.me",
];

const initialState: EmployerFormState = {
  email: "",
  password: "",
};

export default function EmployerLogin() {
  const [form, setForm] = useState<EmployerFormState>(initialState);
  const [errors, setErrors] = useState<EmployerErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const router = useRouter();

  const hasErrors = Boolean(errors.email || errors.password);

  function validate(values: EmployerFormState): EmployerErrors {
    const nextErrors: EmployerErrors = {};

    if (!values.email) {
      nextErrors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    } else {
      const domain = values.email.split("@")[1]?.toLowerCase() ?? "";
      if (!domain || GENERIC_DOMAINS.includes(domain)) {
        nextErrors.email =
          "Use your company email (e.g. name@yourcompany.com), not a personal address.";
      }
    }

    if (!values.password) {
      nextErrors.password = "Password is required.";
    } else if (values.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    return nextErrors;
  }

  function handleChange(
    field: keyof EmployerFormState,
    value: string,
  ): void {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (hasErrors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setLoginError(null);

    try {
      if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
      }

      const endpoint = `${API_BASE_URL}/api/v1/employeruser/login`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.email.trim(), // Backend expects 'username' field
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.error || "Invalid email or password. Please try again.";
        throw new Error(errorMessage);
      }

      // Success - extract token and role
      const token = data.token;
      const role = data.role;

      if (role === "EMPLOYER_USER" || role === "EMPLOYER_ADMIN") {
        // Store token and role in cookies
        authStorage.setToken(token);
        authStorage.setRole(role);

        // Dispatch auth change event for other components to listen
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("authChanged"));
        }

        // Redirect to employer dashboard
        router.push("/employer/dashboard");
      } else {
        throw new Error("Invalid user type for employer login.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Login failed! Please try again later.";
      setLoginError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-background py-12 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl items-stretch gap-8">
        {/* Left Column - Company Insights */}
        <section className="hidden flex-[0.5] flex-col justify-center border-r border-border/60 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 backdrop-blur-sm px-8 py-16 md:flex md:px-12 relative overflow-hidden rounded-r-3xl">
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mx-auto max-w-md space-y-6 z-10"
          >
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight"
            >
              What is a HUBZone?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base text-muted-foreground"
            >
              The HUBZone (Historically Underutilized Business Zone) program helps
              small businesses in urban and rural communities gain preferential
              access to federal procurement opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4 pt-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                </motion.div>
                <div>
                  <h3 className="font-medium text-foreground">AI-Powered Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes job requirements and candidate profiles to match
                    you with qualified HUBZone talent.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                </motion.div>
                <div>
                  <h3 className="font-medium text-foreground">Compliance Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Track HUBZone eligibility, verify addresses, and maintain compliance
                    documentation automatically.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                </motion.div>
                <div>
                  <h3 className="font-medium text-foreground">Streamlined Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Use this portal to verify candidate addresses, track eligibility
                    across openings, and export data for compliance reviews.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className="flex flex-[0.5] items-center justify-center px-6 py-16 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-md rounded-3xl border border-border/70 bg-background/95 p-6 shadow-lg shadow-primary/10"
          >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="space-y-1 mb-6"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              Welcome to Hubzone Careers
            </h2>
            <p className="text-sm font-medium text-primary">
              AI Recruiting Portal
            </p>
            <p className="text-sm text-muted-foreground">
              Use your organization email to access jobs, pipelines, and reporting.
            </p>
          </motion.div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <Button
              type="button"
              variant="outline"
              className="w-full gap-2 h-11"
              // TODO: Hook up to your Google OAuth flow
              onClick={() => {
                // placeholder for Google sign-in
              }}
            >
              <FcGoogle className="h-5 w-5" />
              Continue with Google
            </Button>

            <div className="relative flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">
                Work email
              </label>
              <Input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
                placeholder="name@yourcompany.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className={
                    errors.password
                      ? "border-red-500 focus-visible:ring-red-500 pr-10"
                      : "pr-10"
                  }
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] text-muted-foreground">
                  Minimum 8 characters. Use a unique password for your team login.
                </p>
                <button
                  type="button"
                  onClick={() => setIsForgotPasswordOpen(true)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              {loginError && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
                  <p className="text-sm text-red-600 dark:text-red-400">{loginError}</p>
                </div>
              )}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </div>

            {hasErrors && (
              <p className="text-xs text-red-500">
                Please fix the highlighted fields and try again.
              </p>
            )}
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Need an employer account?{" "}
            <button
              type="button"
              className="font-medium text-primary underline-offset-2 hover:underline"
              onClick={() => router.push("/employer/signup")}
            >
              Request access
            </button>
          </p>
        </motion.div>
        </section>
      </div>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        userType="employer"
      />
    </main>
  );
}

