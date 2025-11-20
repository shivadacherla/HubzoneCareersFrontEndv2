"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authStorage } from "@/lib/auth/cookie-storage";
import { ForgotPasswordModal } from "@/components/auth/forgot-password-modal";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

type FormState = {
  email: string;
  password: string;
};

type Errors = Partial<FormState>;

const initialState: FormState = {
  email: "",
  password: "",
};

export default function ApplicantLogin() {
  const [open, setOpen] = useState(true);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const router = useRouter();

  const hasErrors = Boolean(errors.email || errors.password);

  function validate(values: FormState): Errors {
    const nextErrors: Errors = {};

    if (!values.email) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.password) {
      nextErrors.password = "Password is required.";
    } else if (values.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    return nextErrors;
  }

  function handleChange(
    field: keyof FormState,
    value: string,
  ): void {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (hasErrors || loginError) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setLoginError(null);
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

      const endpoint = `${API_BASE_URL}/api/v1/applicantuser/login`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.email.trim(), // Backend expects 'username' field, but we use email as username
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle error responses
        const errorMessage =
          data.error || "Invalid email or password. Please try again.";
        throw new Error(errorMessage);
      }

      // Success - extract token and role
      const token = data.token;
      const role = data.role;

      if (role === "APPLICANT_USER") {
        // Store token and role in cookies
        authStorage.setToken(token);
        authStorage.setRole(role);

        // Dispatch auth change event for other components to listen
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("authChanged"));
        }

        // Close modal and redirect
        setOpen(false);
        setTimeout(() => {
          router.push("/applicant/dashboard");
        }, 300);
      } else {
        throw new Error("Invalid user type for applicant login.");
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

  function handleGoogleLogin() {
    // Set the role cookie for OAuth flow
    if (typeof document !== "undefined") {
      document.cookie = `oauth_role=APPLICANT_USER; path=/; SameSite=Lax`;
    }
    // Redirect to Google OAuth
    if (typeof window !== "undefined") {
      window.location.href = "/oauth2/authorization/google";
    }
  }

  return (
    <div className="relative min-h-[60vh] bg-background">
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-md rounded-3xl border border-border/70 bg-background/95 p-6 shadow-2xl shadow-primary/20"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="space-y-1 mb-6"
              >
                <h1 className="text-2xl font-semibold tracking-tight">
                  Welcome back to Hubzone Careers
                </h1>
                <p className="text-sm text-muted-foreground">
                  Sign in to access your saved searches, applications, and AI-guided profile recommendations.
                </p>
              </motion.div>

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full gap-2 h-11"
                  onClick={handleGoogleLogin}
                  disabled={isSubmitting}
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
                    Email
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
                    placeholder="you@example.com"
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
                      Use at least 8 characters, including a number and a symbol.
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
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </div>

                {loginError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <p>{loginError}</p>
                  </motion.div>
                )}

                {hasErrors && !loginError && (
                  <p className="text-xs text-red-500">
                    Please fix the highlighted fields and try again.
                  </p>
                )}
              </form>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                New to Hubzone Careers?{" "}
                <button
                  type="button"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                  onClick={() => router.push("/applicant/signup")}
                >
                  Create an account
                </button>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        userType="applicant"
      />
    </div>
  );
}

