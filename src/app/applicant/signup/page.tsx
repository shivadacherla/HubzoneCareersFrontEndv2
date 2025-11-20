"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowUpRight,
  Loader2,
  Clock3,
  ShieldCheck,
  MailCheck,
  X,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";
const OTP_LENGTH = 6;
const OTP_EXPIRES_IN = 60; // seconds

type FormState = {
  firstName: string;
  lastName: string;
  middleInitial: string;
  email: string;
  password: string;
  confirmPassword: string;
  captcha: string;
  isHubZoneResident: boolean;
  wantsUpdates: boolean;
  agreedToTerms: boolean;
};

type Errors = Partial<FormState & { captcha: string; terms: string }>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  middleInitial: "",
  email: "",
  password: "",
  confirmPassword: "",
  captcha: "",
  isHubZoneResident: false,
  wantsUpdates: false,
  agreedToTerms: false,
};

// Simple captcha - in production, use a service like reCAPTCHA
const CAPTCHA_CODE = "HUBZONE";

const gradientBlobs = [
  { top: "-12%", left: "-8%", size: 420, color: "rgba(56, 189, 248, 0.18)", duration: 28 },
  { top: "65%", left: "-15%", size: 360, color: "rgba(167, 139, 250, 0.2)", duration: 26 },
  { top: "10%", left: "60%", size: 480, color: "rgba(52, 211, 153, 0.15)", duration: 32 },
  { top: "72%", left: "58%", size: 320, color: "rgba(251, 191, 36, 0.1)", duration: 30 },
];

export default function ApplicantSignup() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const [otpStatus, setOtpStatus] = useState<
    "idle" | "sending" | "entering" | "verifying" | "verified"
  >("idle");
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(
    Array(OTP_LENGTH).fill(""),
  );
  const [otpMessage, setOtpMessage] = useState<string | null>(null);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [otpTimeLeft, setOtpTimeLeft] = useState(0);
  const otpInputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const hasErrors = Object.keys(errors).length > 0;
  const requiredFields: Array<keyof FormState> = [
    "firstName",
    "lastName",
    "email",
    "password",
    "confirmPassword",
    "captcha",
  ];
  const completedFields = requiredFields.reduce((count, field) => {
    const value = form[field];
    if (typeof value === "string" && value.trim().length > 0) {
      return count + 1;
    }
    return count;
  }, 0);
  const progressValue = Math.min(
    100,
    Math.round((completedFields / requiredFields.length) * 100),
  );
  const emailDisplay = form.email.trim() || "your email";

  useEffect(() => {
    if (otpStatus === "entering" && otpTimeLeft > 0) {
      const interval = window.setInterval(() => {
        setOtpTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
      return () => window.clearInterval(interval);
    }
  }, [otpStatus, otpTimeLeft]);

  useEffect(() => {
    if (otpStatus === "entering") {
      otpInputsRef.current[0]?.focus();
    }
  }, [otpStatus]);

  function validate(values: FormState): Errors {
    const nextErrors: Errors = {};

    if (!values.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!values.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!values.email) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.password) {
      nextErrors.password = "Password is required.";
    } else {
      const hasMinLength = values.password.length >= 8;
      const hasNumber = /\d/.test(values.password);
      const hasSpecialChar = /[!@#$%^&*]/.test(values.password);
      const hasUpperCase = /[A-Z]/.test(values.password);
      const hasLowerCase = /[a-z]/.test(values.password);

      if (!hasMinLength) {
        nextErrors.password = "Password must be at least 8 characters.";
      } else if (!hasNumber) {
        nextErrors.password = "Password must include at least one number.";
      } else if (!hasSpecialChar) {
        nextErrors.password = "Password must include at least one special character (!@#$%^&*).";
      } else if (!hasUpperCase || !hasLowerCase) {
        nextErrors.password = "Password must include at least one uppercase and one lowercase letter.";
      }
    }

    if (!values.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (values.password !== values.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (!values.captcha || values.captcha.toUpperCase() !== CAPTCHA_CODE) {
      nextErrors.captcha = "Please enter the correct captcha code.";
    }

    if (!values.agreedToTerms) {
      nextErrors.terms = "You must agree to the Terms of Service and Privacy Policy.";
    }

    return nextErrors;
  }

  function handleChange(
    field: keyof FormState,
    value: string | boolean,
  ): void {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (hasErrors && field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validateEmailField(value: string) {
    if (!value) {
      return "Email is required.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Enter a valid email address.";
    }
    return null;
  }

  function resetOtpState() {
    setOtpStatus("idle");
    setOtpDigits(Array(OTP_LENGTH).fill(""));
    setOtpMessage(null);
    setOtpError(null);
    setOtpTimeLeft(0);
  }

  function handleCloseOtpModal() {
    if (otpStatus === "verifying") return;
    setIsOtpModalOpen(false);
    resetOtpState();
  }

  async function requestOtpCode() {
    const trimmedEmail = form.email.trim();
    const emailError = validateEmailField(trimmedEmail);
    if (emailError) {
      setErrors((prev) => ({ ...prev, email: emailError }));
      throw new Error(emailError);
    }

    if (!API_BASE_URL) {
      throw new Error("API base URL is not configured.");
    }

    const endpoint = `${API_BASE_URL}/api/v1/applicantuser/request-otp`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmedEmail }),
    });

    if (!response.ok) {
      const errorText =
        (await response.text()) || "Unable to send verification code.";
      throw new Error(errorText);
    }

    return trimmedEmail;
  }

  async function handleResendOtp() {
    if (!canResendOtp) return;
    try {
      setOtpStatus("sending");
      setOtpError(null);
      setOtpMessage(null);
      await requestOtpCode();
      setOtpStatus("entering");
      setOtpDigits(Array(OTP_LENGTH).fill(""));
      setOtpTimeLeft(OTP_EXPIRES_IN);
      setOtpMessage("New code sent. Check your inbox.");
    } catch (error) {
      setOtpStatus("entering");
      setOtpError(
        error instanceof Error ? error.message : "Unable to resend code.",
      );
    }
  }

  function handleOtpInputChange(index: number, value: string) {
    if (otpStatus !== "entering") return;
    const digit = value.replace(/\D/g, "").slice(-1);
    if (!digit && value.length > 0) return;

    const nextDigits = [...otpDigits];
    nextDigits[index] = digit ?? "";
    setOtpDigits(nextDigits);

    if (digit && index < OTP_LENGTH - 1) {
      otpInputsRef.current[index + 1]?.focus();
    }
    if (!digit && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  }

  function handleOtpKeyDown(
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!paste) return;
    const nextDigits = Array(OTP_LENGTH)
      .fill("")
      .map((_, i) => paste[i] ?? "");
    setOtpDigits(nextDigits);
    const lastIndex = Math.min(paste.length, OTP_LENGTH) - 1;
    otpInputsRef.current[lastIndex]?.focus();
  }

  async function handleValidateOtp() {
    if (otpStatus !== "entering") return;
    const code = otpDigits.join("");
    if (code.length !== OTP_LENGTH) {
      setOtpError("Enter the full 6-digit code.");
      return;
    }

    if (!API_BASE_URL) {
      setOtpError("API base URL is not configured.");
      return;
    }

    try {
      setOtpStatus("verifying");
      setOtpError(null);
      const endpoint = `${API_BASE_URL}/api/v1/applicantuser/validate-otp`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email.trim(), otp: code }),
      });

      if (!response.ok) {
        const errorText =
          (await response.text()) || "Invalid or expired verification code.";
        throw new Error(errorText);
      }

      setOtpStatus("verified");
      setOtpMessage("Email verified! Creating your account...");
      setOtpTimeLeft(0);
      await completeRegistration();
    } catch (error) {
      setOtpStatus("entering");
      setOtpError(
        error instanceof Error ? error.message : "Failed to verify OTP.",
      );
      setServerError(
        error instanceof Error
          ? error.message
          : "Failed to verify your email address.",
      );
    }
  }

  async function completeRegistration() {
    if (!API_BASE_URL) {
      throw new Error("API base URL is not configured.");
    }

    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      middleInitial: form.middleInitial.trim() || undefined,
      email: form.email.trim(),
      username: form.email.trim(),
      password: form.password,
      hubZoneResident: form.isHubZoneResident,
      wantsUpdates: form.wantsUpdates,
      agreedToTerms: form.agreedToTerms,
    };

    const endpoint = `${API_BASE_URL}/api/v1/applicantuser/register`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText =
        (await response.text()) || "Unable to register applicant.";
      throw new Error(errorText);
    }

    setServerError(null);
    setSuccessMessage("Registration successful! Redirecting to your dashboard...");
    setErrors({});
    setForm(initialState);

    setTimeout(() => {
      resetOtpState();
      setIsOtpModalOpen(false);
      router.push("/applicant/dashboard/resume");
    }, 700);
  }

  const canResendOtp =
    otpStatus !== "verified" && otpStatus !== "sending" && otpTimeLeft === 0;
  const formattedOtpTimer = new Date(otpTimeLeft * 1000)
    .toISOString()
    .substring(14, 19);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    setSuccessMessage(null);
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setOtpDigits(Array(OTP_LENGTH).fill(""));
    setOtpMessage(null);
    setOtpError(null);
    setOtpStatus("sending");
    setIsOtpModalOpen(true);

    try {
      const email = await requestOtpCode();
      setOtpStatus("entering");
      setOtpMessage(`We sent a verification code to ${email}. Enter it to continue.`);
      setOtpTimeLeft(OTP_EXPIRES_IN);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Failed to send verification code.",
      );
      resetOtpState();
      setIsOtpModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)]" />
        {gradientBlobs.map((blob, index) => (
          <motion.div
            key={`blob-${index}`}
            className="absolute rounded-full blur-[120px]"
            style={{
              top: blob.top,
              left: blob.left,
              width: blob.size,
              height: blob.size,
              background: blob.color,
            }}
            animate={{
              opacity: [0.4, 0.85, 0.4],
              scale: [0.9, 1.12, 0.92],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-stretch gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:px-10 lg:py-20">
        <section className="hidden flex-[0.5] flex-col justify-center overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 px-8 py-16 backdrop-blur-sm md:flex md:px-12 relative">
          <motion.div
            className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
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
            className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
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
            className="relative z-10 mx-auto max-w-md space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight"
            >
              Join Hubzone Careers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base text-muted-foreground"
            >
              Connect with government contracting opportunities and find your next
              career move in HUBZone areas across the United States.
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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-medium text-foreground">AI-Powered Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes your skills and preferences to match you with
                    the perfect opportunities.
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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-medium text-foreground">HUBZone Benefits</h3>
                  <p className="text-sm text-muted-foreground">
                    Access exclusive opportunities in HUBZone areas with preferential
                    federal procurement access.
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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-medium text-foreground">Career Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized recommendations and insights to advance your
                    career in government contracting.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex flex-1 items-start justify-center"
          >
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-3xl opacity-50" />
            <div className="relative rounded-[34px] border border-border/80 bg-background/95 p-8 shadow-[0_25px_70px_-40px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    Create account
                  </p>
                  <h2 className="text-2xl font-semibold">Applicant Registration</h2>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.4em] text-muted-foreground">
                  <span>Profile momentum</span>
                  <span>{progressValue}%</span>
                </div>
                <div className="relative h-1.5 overflow-hidden rounded-full bg-border/60">
                  <motion.div
                    animate={{ width: `${Math.max(progressValue, 6)}%` }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-sky-500 to-violet-500 shadow-[0_0_15px_rgba(129,140,248,0.6)]"
                  />
                </div>
              </div>

              <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
              <Button
                type="button"
                variant="outline"
                  className="h-12 w-full gap-2 border-primary/40 bg-primary/5 text-primary hover:bg-primary/10"
              >
                <FcGoogle className="h-5 w-5" />
                  Continue with Google
              </Button>

                <div className="relative flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <div className="h-px flex-1 bg-border" />
                  or continue manually
                <div className="h-px flex-1 bg-border" />
              </div>

                <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <label className="text-[0.7rem] font-semibold">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={
                      errors.firstName
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                      placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                    <label className="text-[0.7rem] font-semibold">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={
                      errors.lastName
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                      placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

                <div className="grid gap-3 sm:grid-cols-[0.4fr_1fr]">
              <div className="space-y-1.5">
                    <label className="text-[0.7rem] font-semibold">
                      Middle Initial
                </label>
                <Input
                  type="text"
                  autoComplete="additional-name"
                  maxLength={1}
                  value={form.middleInitial}
                  onChange={(e) =>
                    handleChange("middleInitial", e.target.value.toUpperCase())
                  }
                  placeholder="M"
                />
              </div>
              <div className="space-y-1.5">
                    <label className="text-[0.7rem] font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  readOnly={otpStatus === "verified"}
                  className={
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }
                      placeholder="you@gmail.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
                  </div>
              </div>

              <div className="space-y-1.5">
                  <label className="text-[0.7rem] font-semibold">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
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
                <div className="rounded-lg border border-border/50 bg-background/40 p-3">
                  <p className="text-[0.7rem] font-medium text-foreground mb-2">Your password must:</p>
                  <ul className="space-y-1 text-[0.7rem] text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Be at least 8 characters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Include at least one number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Include at least one special character (!@#$%^&*)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Include at least one uppercase letter and one lowercase letter</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-1.5">
                  <label className="text-[0.7rem] font-semibold">
                    Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                    className={
                      errors.confirmPassword
                        ? "border-red-500 focus-visible:ring-red-500 pr-10"
                        : "pr-10"
                    }
                      placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                    <p className="text-xs text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Optional: HUBZone Resident Checkbox */}
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/40 px-3 py-2.5">
                <Checkbox
                  id="hubzone"
                  checked={form.isHubZoneResident}
                  onCheckedChange={(checked) =>
                    handleChange("isHubZoneResident", checked === true)
                  }
                  className="h-4 w-4"
                />
                <label htmlFor="hubzone" className="text-sm text-foreground/90 cursor-pointer flex-1">
                  I am a HUBZone resident
                  <span className="ml-1.5 text-xs text-muted-foreground">(Optional)</span>
                </label>
              </div>

              <div className="space-y-1.5">
                  <label className="text-[0.7rem] font-semibold">
                    Captcha code · <span className="font-mono text-primary">HUBZONE</span>{" "}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={form.captcha}
                  onChange={(e) =>
                    handleChange("captcha", e.target.value.toUpperCase())
                  }
                  className={
                    errors.captcha
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }
                    placeholder="Type it here"
                />
                {errors.captcha && (
                  <p className="text-xs text-red-500">{errors.captcha}</p>
                )}
              </div>

                <div className="space-y-3 rounded-2xl border border-border/70 bg-background/60 p-4">
                  <div className="flex items-start gap-3">
                  <Checkbox
                    id="updates"
                    checked={form.wantsUpdates}
                    onCheckedChange={(checked) =>
                      handleChange("wantsUpdates", checked === true)
                    }
                    className="mt-0.5"
                  />
                    <label htmlFor="updates" className="text-sm leading-snug">
                      Send me curated job drops, interview scripts, and community events.
                  </label>
                </div>

                  <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={form.agreedToTerms}
                    onCheckedChange={(checked) =>
                      handleChange("agreedToTerms", checked === true)
                    }
                    className={
                        errors.terms ? "mt-0.5 border-red-500" : "mt-0.5"
                      }
                    />
                    <label htmlFor="terms" className="text-sm leading-snug">
                      I agree to the{" "}
                    <Link
                      href="/legal/terms"
                        className="text-primary underline-offset-2 hover:underline"
                      target="_blank"
                    >
                      Terms of Service
                    </Link>{" "}
                      and{" "}
                    <Link
                      href="/legal/privacy"
                        className="text-primary underline-offset-2 hover:underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                    . <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-xs text-red-500">{errors.terms}</p>
                )}
              </div>

                <div className="space-y-3 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl bg-primary py-6 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isSubmitting ? "Creating account..." : "Sign Up"}
                </Button>
                {hasErrors && (
                  <p className="text-xs text-red-500">
                    Please fix the highlighted fields and try again.
                  </p>
                )}
                {serverError && (
                  <p className="text-xs text-red-500">{serverError}</p>
                )}
                {successMessage && (
                  <p className="text-xs text-emerald-600">{successMessage}</p>
                )}
              </div>
              </form>

              {/* <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/70 p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <p className="text-sm font-semibold">Need a co-pilot?</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ask our AI Copilot to scan your resume, quantify achievements, or prep you for federal interviews.
                </p>
                <Link
                  href="/applicant/ai-copilot"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
                >
                  Summon Copilot
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
                <p className="text-center text-xs text-muted-foreground">
                  Already have an account?{" "}
                <Link
                  href="/applicant/login"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Sign in
                </Link>
                </p>
              </div> */}
              <p className="mt-6 text-center text-xs text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/applicant/login"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </motion.section>
        </div>
      </main>
      {isOtpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleCloseOtpModal}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-background/95 via-background to-background/90 p-8 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.8)]"
          >
            <button
              type="button"
              onClick={handleCloseOtpModal}
              className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition hover:border-white/30 hover:text-foreground"
              aria-label="Close verification modal"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-start gap-4 pr-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Secure verification
                </p>
                <h3 className="mt-1 text-2xl font-semibold">Verify your email</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Enter the 6-digit one-time passcode to finish creating your account.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-inner backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <MailCheck className="h-4 w-4 text-primary" />
                <span>{emailDisplay}</span>
              </div>
              {otpStatus === "sending" && (
                <div className="mt-6 flex flex-col items-center gap-3 text-sm text-muted-foreground">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  <p>Sending your verification code...</p>
                </div>
              )}

              {(otpStatus === "entering" || otpStatus === "verifying") && (
                <div className="mt-6 space-y-4">
                  <div className="flex gap-2">
                    {otpDigits.map((digit, index) => (
                      <Input
                        key={index}
                        ref={(el) => {
                          otpInputsRef.current[index] = el;
                        }}
                        value={digit}
                        onChange={(e) => handleOtpInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        onPaste={handleOtpPaste}
                        readOnly={otpStatus === "verifying"}
                        inputMode="numeric"
                        maxLength={1}
                        className="h-14 w-full border-white/20 bg-white/10 text-center text-2xl font-semibold text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] focus-visible:ring-primary"
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 font-semibold text-primary">
                      <Clock3 className="h-3.5 w-3.5" />
                      {formattedOtpTimer}
                    </span>
                    <span>Code expires in 60 seconds.</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      type="button"
                      onClick={handleValidateOtp}
                      disabled={otpStatus === "verifying"}
                      className="h-12 flex-1 rounded-2xl bg-primary text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-lg hover:bg-primary/90"
                    >
                      {otpStatus === "verifying" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying
                        </>
                      ) : (
                        "Confirm & create account"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleResendOtp}
                      disabled={!canResendOtp}
                      className="h-12 rounded-2xl border border-dashed border-white/20 px-6 text-xs font-semibold text-foreground hover:bg-white/5 disabled:opacity-50"
                    >
                      Resend code
                    </Button>
                  </div>
                  <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      animate={{
                        width:
                          otpTimeLeft > 0
                            ? `${(otpTimeLeft / OTP_EXPIRES_IN) * 100}%`
                            : "0%",
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-y-0 right-0 rounded-full bg-gradient-to-r from-primary via-orange-400 to-yellow-300"
                    />
                  </div>
                </div>
              )}

              {otpStatus === "verified" && (
                <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-emerald-200/40 bg-emerald-50/40 p-5 text-center text-sm text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" />
                  <p>Email confirmed. Redirecting to your dashboard…</p>
                </div>
              )}

              {otpMessage && (
                <p className="mt-4 text-xs font-semibold text-primary">{otpMessage}</p>
              )}
              {otpError && <p className="mt-2 text-xs text-red-500">{otpError}</p>}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
