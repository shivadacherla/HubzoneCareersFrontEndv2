"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  Loader2,
  ArrowLeft,
  Shield,
  KeyRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authStorage } from "@/lib/auth/cookie-storage";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

const OTP_LENGTH = 6;

type ForgotPasswordModalProps = {
  isOpen: boolean;
  onClose: () => void;
  userType: "applicant" | "employer";
};

type Step = "email" | "otp" | "password";

export function ForgotPasswordModal({
  isOpen,
  onClose,
  userType,
}: ForgotPasswordModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isRequestingOtp, setIsRequestingOtp] = useState(false);

  // OTP state
  const [otpStatus, setOtpStatus] = useState<
    "idle" | "sending" | "entering" | "verifying" | "verified"
  >("idle");
  const [otpDigits, setOtpDigits] = useState<string[]>(
    Array(OTP_LENGTH).fill(""),
  );
  const [otpMessage, setOtpMessage] = useState<string | null>(null);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [otpTimeLeft, setOtpTimeLeft] = useState(0);
  const otpInputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // Password state
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setCurrentStep("email");
        setEmail("");
        setEmailError(null);
        setOtpStatus("idle");
        setOtpDigits(Array(OTP_LENGTH).fill(""));
        setOtpMessage(null);
        setOtpError(null);
        setOtpTimeLeft(0);
        setNewPassword("");
        setConfirmPassword("");
        setPasswordError(null);
        setSuccessMessage(null);
      }, 300);
    }
  }, [isOpen]);

  // OTP timer
  useEffect(() => {
    if (otpTimeLeft > 0) {
      const timer = setTimeout(() => setOtpTimeLeft(otpTimeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimeLeft]);

  const validateEmail = (emailValue: string): boolean => {
    if (!emailValue) {
      setEmailError("Email is required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setEmailError("Enter a valid email address.");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleRequestOtp = async () => {
    if (!validateEmail(email)) return;

    if (!API_BASE_URL) {
      setEmailError("API base URL is not configured.");
      return;
    }

    setIsRequestingOtp(true);
    setEmailError(null);

    try {
      const endpoint =
        userType === "applicant"
          ? `${API_BASE_URL}/api/v1/applicantuser/request-otp-forgot-password`
          : `${API_BASE_URL}/api/v1/employeruser/request-otp-forgot-password`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        const errorText =
          (await response.text()) || "Failed to send verification code.";
        throw new Error(errorText);
      }

      setOtpStatus("entering");
      setOtpTimeLeft(300); // 5 minutes
      setCurrentStep("otp");
    } catch (error) {
      setEmailError(
        error instanceof Error
          ? error.message
          : "Failed to send verification code. Please try again.",
      );
    } finally {
      setIsRequestingOtp(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const nextDigits = [...otpDigits];
    nextDigits[index] = value.slice(-1);
    setOtpDigits(nextDigits);
    setOtpError(null);

    if (value && index < OTP_LENGTH - 1) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!paste) return;
    const nextDigits = Array(OTP_LENGTH)
      .fill("")
      .map((_, i) => paste[i] ?? "");
    setOtpDigits(nextDigits);
    const lastIndex = Math.min(paste.length, OTP_LENGTH) - 1;
    otpInputsRef.current[lastIndex]?.focus();
  };

  const handleValidateOtp = async () => {
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
      const endpoint =
        userType === "applicant"
          ? `${API_BASE_URL}/api/v1/applicantuser/validate-otp`
          : `${API_BASE_URL}/api/v1/employeruser/validate-otp`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), otp: code }),
      });

      if (!response.ok) {
        const errorText =
          (await response.text()) || "Invalid or expired verification code.";
        throw new Error(errorText);
      }

      setOtpStatus("verified");
      setOtpMessage("Email verified! Proceeding to password reset...");
      setOtpTimeLeft(0);

      setTimeout(() => {
        setCurrentStep("password");
        setOtpMessage(null);
      }, 1000);
    } catch (error) {
      setOtpStatus("entering");
      setOtpError(
        error instanceof Error ? error.message : "Failed to verify OTP.",
      );
    }
  };

  const handleResendOtp = async () => {
    if (otpTimeLeft > 0) return;
    await handleRequestOtp();
  };

  const validatePassword = (): boolean => {
    if (!newPassword) {
      setPasswordError("New password is required.");
      return false;
    }
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return false;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return false;
    }
    setPasswordError(null);
    return true;
  };

  const handleUpdatePassword = async () => {
    if (!validatePassword()) return;

    if (!API_BASE_URL) {
      setPasswordError("API base URL is not configured.");
      return;
    }

    setIsUpdatingPassword(true);
    setPasswordError(null);

    try {
      const token = authStorage.getToken();
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
      
      // Add token if available (some backends might require it even for forgot password)
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const endpoint =
        userType === "applicant"
          ? `${API_BASE_URL}/api/v1/applicantuser/updatepassword`
          : `${API_BASE_URL}/api/v1/employeruser/updatepassword`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify({
          email: email.trim(),
          newPassword: newPassword,
        }),
      });

      if (!response.ok) {
        const errorText =
          (await response.text()) || "Failed to update password.";
        throw new Error(errorText);
      }

      setSuccessMessage("Password updated successfully!");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setPasswordError(
        error instanceof Error
          ? error.message
          : "Failed to update password. Please try again.",
      );
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          className="relative w-full max-w-md rounded-2xl border border-border/70 bg-gradient-to-br from-background via-background to-background/95 p-6 shadow-2xl shadow-primary/20"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Progress indicator */}
          <div className="mb-6 flex items-center justify-center gap-2">
            {["email", "otp", "password"].map((step, index) => {
              const stepIndex = ["email", "otp", "password"].indexOf(
                currentStep,
              );
              const isActive = index <= stepIndex;
              return (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={`h-2 w-8 rounded-full ${
                      isActive
                        ? "bg-primary"
                        : "bg-muted"
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  {index < 2 && (
                    <div
                      className={`h-0.5 w-4 ${
                        index < stepIndex ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step 1: Email */}
          <AnimatePresence mode="wait">
            {currentStep === "email" && (
              <motion.div
                key="email"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <Mail className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Reset Your Password</h2>
                  <p className="text-sm text-muted-foreground">
                    Enter your email address and we'll send you a verification
                    code.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError(null);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleRequestOtp();
                        }}
                        className={`pl-10 ${emailError ? "border-destructive" : ""}`}
                      />
                    </div>
                    {emailError && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-sm text-destructive"
                      >
                        {emailError}
                      </motion.p>
                    )}
                  </div>

                  <Button
                    onClick={handleRequestOtp}
                    disabled={isRequestingOtp || !email}
                    className="w-full"
                    size="lg"
                  >
                    {isRequestingOtp ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Verification Code
                        <Mail className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: OTP */}
            {currentStep === "otp" && (
              <motion.div
                key="otp"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <Shield className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Verify Your Email</h2>
                  <p className="text-sm text-muted-foreground">
                    We've sent a 6-digit code to{" "}
                    <span className="font-medium text-foreground">{email}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center gap-2">
                    {otpDigits.map((digit, index) => (
                      <motion.input
                        key={index}
                        ref={(el) => {
                          otpInputsRef.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                        onPaste={index === 0 ? handleOtpPaste : undefined}
                        className={`h-14 w-14 rounded-xl border-2 text-center text-xl font-semibold transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                          otpError
                            ? "border-destructive"
                            : "border-border"
                        }`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      />
                    ))}
                  </div>

                  {otpError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-sm text-destructive"
                    >
                      {otpError}
                    </motion.p>
                  )}

                  {otpMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-sm text-green-600 dark:text-green-400 flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      {otpMessage}
                    </motion.p>
                  )}

                  {otpTimeLeft > 0 && (
                    <p className="text-center text-sm text-muted-foreground">
                      Code expires in{" "}
                      <span className="font-medium">
                        {Math.floor(otpTimeLeft / 60)}:
                        {(otpTimeLeft % 60).toString().padStart(2, "0")}
                      </span>
                    </p>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setCurrentStep("email");
                        setOtpDigits(Array(OTP_LENGTH).fill(""));
                        setOtpError(null);
                        setOtpStatus("idle");
                      }}
                      className="flex-1"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={handleValidateOtp}
                      disabled={
                        otpStatus === "verifying" ||
                        otpDigits.join("").length !== OTP_LENGTH
                      }
                      className="flex-1"
                      size="lg"
                    >
                      {otpStatus === "verifying" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          Verify Code
                          <CheckCircle2 className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>

                  {otpTimeLeft === 0 && (
                    <Button
                      variant="ghost"
                      onClick={handleResendOtp}
                      className="w-full"
                    >
                      Didn't receive code? Resend
                    </Button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: New Password */}
            {currentStep === "password" && (
              <motion.div
                key="password"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <KeyRound className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Create New Password</h2>
                  <p className="text-sm text-muted-foreground">
                    Enter your new password. Make sure it's strong and secure.
                  </p>
                </div>

                {successMessage ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4 py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="mx-auto w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center"
                    >
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                    </motion.div>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                      {successMessage}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Redirecting to login...
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          value={newPassword}
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                            setPasswordError(null);
                          }}
                          className={`pl-10 pr-10 ${
                            passwordError ? "border-destructive" : ""
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm new password"
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setPasswordError(null);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleUpdatePassword();
                          }}
                          className={`pl-10 pr-10 ${
                            passwordError ? "border-destructive" : ""
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {passwordError && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive"
                      >
                        {passwordError}
                      </motion.p>
                    )}

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setCurrentStep("otp");
                          setNewPassword("");
                          setConfirmPassword("");
                          setPasswordError(null);
                        }}
                        className="flex-1"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        onClick={handleUpdatePassword}
                        disabled={isUpdatingPassword || !newPassword || !confirmPassword}
                        className="flex-1"
                        size="lg"
                      >
                        {isUpdatingPassword ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Updating...
                          </>
                        ) : (
                          <>
                            Update Password
                            <KeyRound className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

