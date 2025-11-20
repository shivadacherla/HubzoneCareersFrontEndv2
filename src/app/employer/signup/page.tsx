"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Building2,
  Activity,
  Globe,
  UserRound,
  LockKeyhole,
  Loader2,
  Clock3,
  MailCheck,
  X,
  MapPin,
  Search,
  Check,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";

type DomainCheckResult = "idle" | "checking" | "existing" | "new";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";
const OTP_LENGTH = 6;
const OTP_EXPIRES_IN = 60; // seconds

type OtpStatus = "idle" | "sending" | "entering" | "verifying" | "verified";

type DomainStatusCopy = {
  badge: string;
  icon: typeof Sparkles;
  accent: string;
  message: string;
};

type StepDescriptor = {
  id: number;
  label: string;
  hint: string;
  icon: LucideIcon;
};

const GENERIC_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "proton.me",
];

type Step1State = {
  email: string;
};

type Step2State = {
  firstName: string;
  lastName: string;
  middleInitial: string;
  mobileNumber: string;
  employerPosition: string;
};

type Step3State = {
  organizationName: string;
  organizationEmail: string;
  organizationType: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  orgPhone: string;
  orgFax: string;
};

type Step4State = {
  password: string;
  confirmPassword: string;
};

type Errors = {
  step1?: Partial<Step1State>;
  step2?: Partial<Step2State>;
  step3?: Partial<Step3State>;
  step4?: Partial<Step4State>;
};

export default function EmployerSignup() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isNewOrganization, setIsNewOrganization] = useState(false);
  const [domainCheckResult, setDomainCheckResult] = useState<DomainCheckResult>("idle");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // OTP state
  const [otpStatus, setOtpStatus] = useState<OtpStatus>("idle");
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [otpMessage, setOtpMessage] = useState<string | null>(null);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [otpTimeLeft, setOtpTimeLeft] = useState(0);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [isOrgDetailsModalOpen, setIsOrgDetailsModalOpen] = useState(false);
  const [showOrgDetailsSaved, setShowOrgDetailsSaved] = useState(false);
  const otpInputsRef = useRef<Array<HTMLInputElement | null>>([]);
  
  // Location autocomplete state
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);
  const [stateSuggestions, setStateSuggestions] = useState<string[]>([]);
  const [allStates, setAllStates] = useState<string[]>([]);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingZipcode, setIsLoadingZipcode] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const citySearchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cityInputRef = useRef<HTMLInputElement | null>(null);
  const stateInputRef = useRef<HTMLInputElement | null>(null);

  const [step1, setStep1] = useState<Step1State>({ email: "" });
  const [step2, setStep2] = useState<Step2State>({
    firstName: "",
    lastName: "",
    middleInitial: "",
    mobileNumber: "",
    employerPosition: "",
  });
  const [step3, setStep3] = useState<Step3State>({
    organizationName: "",
    organizationEmail: "",
    organizationType: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    orgPhone: "",
    orgFax: "",
  });
  const [step4, setStep4] = useState<Step4State>({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  function validateStep1(values: Step1State): Partial<Step1State> {
    const nextErrors: Partial<Step1State> = {};

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

    return nextErrors;
  }

  function validateStep2(values: Step2State): Partial<Step2State> {
    const nextErrors: Partial<Step2State> = {};

    if (!values.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }
    if (!values.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }
    if (!values.mobileNumber.trim()) {
      nextErrors.mobileNumber = "Mobile number is required.";
    } else {
      // Remove all non-digit characters
      const cleaned = values.mobileNumber.replace(/\D/g, "");
      // Must be exactly 10 digits
      if (cleaned.length !== 10) {
        nextErrors.mobileNumber = "Phone number must be exactly 10 digits.";
      } else if (!/^\d{10}$/.test(cleaned)) {
        nextErrors.mobileNumber = "Phone number must contain only digits.";
      }
    }
    if (!values.employerPosition.trim()) {
      nextErrors.employerPosition = "Employer position is required.";
    }

    return nextErrors;
  }

  function validateStep3(values: Step3State): Partial<Step3State> {
    const nextErrors: Partial<Step3State> = {};

    if (!values.organizationName.trim()) {
      nextErrors.organizationName = "Organization name is required.";
    }
    if (!values.organizationEmail) {
      nextErrors.organizationEmail = "Organization email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.organizationEmail)) {
      nextErrors.organizationEmail = "Enter a valid email address.";
    }
    if (!values.organizationType) {
      nextErrors.organizationType = "Organization type is required.";
    }
    if (!values.addressLine1.trim()) {
      nextErrors.addressLine1 = "Address is required.";
    }
    if (!values.city.trim()) {
      nextErrors.city = "City is required.";
    }
    if (!values.state.trim()) {
      nextErrors.state = "State is required.";
    }
    if (!values.zipCode.trim()) {
      nextErrors.zipCode = "ZIP code is required.";
    } else {
      // Remove any non-digit characters
      const cleanedZip = values.zipCode.replace(/\D/g, "");
      // Must be exactly 5 digits
      if (cleanedZip.length !== 5) {
        nextErrors.zipCode = "ZIP code must be exactly 5 digits.";
      } else if (!/^\d{5}$/.test(cleanedZip)) {
        nextErrors.zipCode = "ZIP code must contain only digits.";
      }
    }
    if (!values.orgPhone.trim()) {
      nextErrors.orgPhone = "Organization phone is required.";
    } else {
      // Remove all non-digit characters
      const cleaned = values.orgPhone.replace(/\D/g, "");
      // Must be exactly 10 digits
      if (cleaned.length !== 10) {
        nextErrors.orgPhone = "Phone number must be exactly 10 digits.";
      } else if (!/^\d{10}$/.test(cleaned)) {
        nextErrors.orgPhone = "Phone number must contain only digits.";
      }
    }
    // Fax validation (optional field)
    if (values.orgFax && values.orgFax.trim()) {
      const cleaned = values.orgFax.replace(/\D/g, "");
      // Must be exactly 10 digits
      if (cleaned.length !== 10) {
        nextErrors.orgFax = "Fax number must be exactly 10 digits.";
      } else if (!/^\d{10}$/.test(cleaned)) {
        nextErrors.orgFax = "Fax number must contain only digits.";
      }
    }

    return nextErrors;
  }

  function validateStep4(values: Step4State): Partial<Step4State> {
    const nextErrors: Partial<Step4State> = {};

    if (!values.password) {
      nextErrors.password = "Password is required.";
    } else if (values.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
      nextErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    if (!values.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (values.password !== values.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    return nextErrors;
  }

  // OTP timer effect
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

  function resetOtpState() {
    setOtpStatus("idle");
    setOtpDigits(Array(OTP_LENGTH).fill(""));
    setOtpMessage(null);
    setOtpError(null);
    setOtpTimeLeft(0);
  }

  async function requestOtpCode(): Promise<string> {
    if (!API_BASE_URL) {
      throw new Error("API base URL is not configured.");
    }

    setOtpStatus("sending");
    setOtpMessage(null);
    setOtpError(null);

    try {
      const endpoint = `${API_BASE_URL}/api/v1/employeruser/check-email`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: step1.email.trim() }),
      });

      if (response.status === 409) {
        const errorText = (await response.text()) || "Email is already registered.";
        throw new Error(errorText);
      }

      if (!response.ok) {
        const errorText = (await response.text()) || "Unable to send verification code.";
        throw new Error(errorText);
      }

      const data = (await response.json()) as {
        emailExists?: boolean;
        otpResult?: boolean | string;
      };

      const domainExists = Boolean(data.emailExists);
      setIsNewOrganization(!domainExists);
      setDomainCheckResult(domainExists ? "existing" : "new");

      if (data.otpResult !== true) {
        const message =
          typeof data.otpResult === "string"
            ? data.otpResult
            : "Unable to send verification code.";
        throw new Error(message);
      }

      setOtpStatus("entering");
      setOtpMessage(`We sent a verification code to ${step1.email.trim()}. Enter it to continue.`);
      setOtpDigits(Array(OTP_LENGTH).fill(""));
      setOtpTimeLeft(OTP_EXPIRES_IN);
      setIsOtpModalOpen(true);
      return step1.email.trim();
    } catch (error) {
      setOtpStatus("idle");
      throw error;
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

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
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
      const endpoint = `${API_BASE_URL}/api/v1/employeruser/validate-otp`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: step1.email.trim(), otp: code }),
      });

      if (!response.ok) {
        const errorText = (await response.text()) || "Invalid or expired verification code.";
        throw new Error(errorText);
      }

      setOtpStatus("verified");
      setOtpMessage("Email verified! Proceeding to next step...");
      setOtpTimeLeft(0);

      setTimeout(() => {
        setIsOtpModalOpen(false);
        // Don't reset OTP state completely - keep verified status
        setOtpDigits(Array(OTP_LENGTH).fill(""));
        setOtpMessage(null);
        setOtpError(null);
        setOtpTimeLeft(0);
        // Keep otpStatus as "verified" so we don't re-send OTP
        
        // If new organization, show organization details modal first
        if (isNewOrganization) {
          setIsOrgDetailsModalOpen(true);
        } else {
          // Existing organization, go directly to personal info
          setCurrentStep(2);
        }
      }, 1000);
    } catch (error) {
      setOtpStatus("entering");
      setOtpError(error instanceof Error ? error.message : "Failed to verify OTP.");
    }
  }

  async function handleResendOtp() {
    if (otpStatus === "sending" || otpStatus === "verifying") return;
    try {
      await requestOtpCode();
    } catch (error) {
      setOtpError(error instanceof Error ? error.message : "Failed to resend OTP.");
    }
  }

  const canResendOtp = otpStatus !== "verified" && otpStatus !== "sending" && otpTimeLeft === 0;
  const formattedOtpTimer = new Date(otpTimeLeft * 1000).toISOString().substring(14, 19);

  async function handleStep1Next() {
    const step1Errors = validateStep1(step1);
    if (Object.keys(step1Errors).length > 0) {
      setErrors({ step1: step1Errors });
      return;
    }

    // If OTP was already verified OR domain was already checked, just proceed without re-sending
    if (otpStatus === "verified" || (domainCheckResult !== "idle" && domainCheckResult !== "checking")) {
      setIsOtpModalOpen(false);
      if (isNewOrganization) {
        setIsOrgDetailsModalOpen(true);
      } else {
        setCurrentStep(2);
      }
      return;
    }

    // If OTP modal is already open and user is entering OTP, don't re-send
    if (isOtpModalOpen && (otpStatus === "entering" || otpStatus === "verifying")) {
      return;
    }

    setDomainCheckResult("checking");
    setOtpError(null);
    try {
      await requestOtpCode();
    } catch (error) {
      setDomainCheckResult("idle");
      setOtpError(error instanceof Error ? error.message : "Failed to check domain.");
    }
    setErrors({});
  }

  function handleStep2Next() {
    const step2Errors = validateStep2(step2);
    if (Object.keys(step2Errors).length > 0) {
      setErrors({ step2: step2Errors });
      return;
    }
    
    // Always go to password step (organization details already handled in modal)
    setCurrentStep(4);
    setErrors({});
  }

  // Helper function to clear errors when user starts typing
  function clearFieldError(fieldName: keyof Step3State) {
    setErrors((prev) => {
      const newStep3Errors = { ...prev.step3 };
      delete newStep3Errors[fieldName];
      return {
        ...prev,
        step3: Object.keys(newStep3Errors).length > 0 ? newStep3Errors : undefined,
      };
    });
    // Clear general error message when user starts typing
    if (otpError) {
      setOtpError(null);
    }
  }

  function handleOrgDetailsSubmit() {
    const step3Errors = validateStep3(step3);
    if (Object.keys(step3Errors).length > 0) {
      setErrors({ step3: step3Errors });
      setOtpError("Please complete all required organization fields before continuing.");
      return;
    }
    
    // Double-check all required fields are filled
    if (!step3.organizationName.trim() || 
        !step3.organizationEmail.trim() || 
        !step3.organizationType ||
        !step3.addressLine1.trim() ||
        !step3.city.trim() ||
        !step3.state.trim() ||
        !step3.zipCode.trim() ||
        !step3.country.trim() ||
        !step3.orgPhone.trim()) {
      setErrors({ step3: { 
        organizationName: !step3.organizationName.trim() ? "Required" : undefined,
        organizationEmail: !step3.organizationEmail.trim() ? "Required" : undefined,
        organizationType: !step3.organizationType ? "Required" : undefined,
        addressLine1: !step3.addressLine1.trim() ? "Required" : undefined,
        city: !step3.city.trim() ? "Required" : undefined,
        state: !step3.state.trim() ? "Required" : undefined,
        zipCode: !step3.zipCode.trim() ? "Required" : undefined,
        country: !step3.country.trim() ? "Required" : undefined,
        orgPhone: !step3.orgPhone.trim() ? "Required" : undefined,
      } });
      setOtpError("Please complete all required organization fields.");
      return;
    }
    
    // Close modal and show confirmation message
    setIsOrgDetailsModalOpen(false);
    setErrors({});
    setOtpError(null);
    
    // Show success message
    setShowOrgDetailsSaved(true);
    
    // Proceed to personal info after a brief delay
    setTimeout(() => {
      setCurrentStep(2);
      // Hide message after animation
      setTimeout(() => {
        setShowOrgDetailsSaved(false);
      }, 4000);
    }, 500);
  }

  // Location autocomplete functions
  async function fetchStates() {
    if (!API_BASE_URL) return;
    
    try {
      setIsLoadingStates(true);
      const response = await fetch(`${API_BASE_URL}/api/v1/applicantjob/geonames/states`);
      if (!response.ok) throw new Error("Failed to fetch states");
      const data = await response.json();
      const states = (data.states || []) as string[];
      setAllStates(states);
      return states;
    } catch (error) {
      console.error("Error fetching states:", error);
      setLocationError("Unable to load states. Please enter manually.");
      return [];
    } finally {
      setIsLoadingStates(false);
    }
  }

  async function searchCities(query: string) {
    if (!API_BASE_URL || !query.trim() || query.length < 2) {
      setCitySuggestions([]);
      return;
    }

    try {
      setIsLoadingCities(true);
      setLocationError(null);
      const response = await fetch(
        `${API_BASE_URL}/api/v1/applicantjob/geonames/all-cities?query=${encodeURIComponent(query)}`
      );
      if (!response.ok) throw new Error("Failed to fetch cities");
      const data = await response.json();
      const cities = (data.cities || []) as string[];
      setCitySuggestions(cities.slice(0, 10)); // Limit to 10 suggestions
      setShowCityDropdown(true);
    } catch (error) {
      console.error("Error searching cities:", error);
      setCitySuggestions([]);
      // Don't show error - allow manual entry
    } finally {
      setIsLoadingCities(false);
    }
  }

  async function fetchStatesByCity(city: string) {
    if (!API_BASE_URL || !city.trim()) return;

    try {
      setIsLoadingStates(true);
      setLocationError(null);
      const response = await fetch(
        `${API_BASE_URL}/api/v1/applicantjob/geonames/states-by-city?city=${encodeURIComponent(city)}`
      );
      if (!response.ok) throw new Error("Failed to fetch states");
      const data = await response.json();
      const states = (data.states || []) as string[];
      setStateSuggestions(states);
      setShowStateDropdown(states.length > 0);
      
      // Auto-select if only one state
      if (states.length === 1) {
        setStep3((prev) => {
          const updated = { ...prev, state: states[0] };
          // Try to fetch zipcode if city and state are now both set
          if (prev.city && states[0]) {
            setTimeout(() => {
              fetchZipcodesByCityState(prev.city, states[0]);
            }, 300);
          }
          return updated;
        });
        setShowStateDropdown(false);
      }
    } catch (error) {
      console.error("Error fetching states by city:", error);
      // Allow manual entry
    } finally {
      setIsLoadingStates(false);
    }
  }

  async function fetchZipcodesByCityState(city: string, state: string) {
    if (!API_BASE_URL || !city.trim() || !state.trim()) return;

    try {
      setIsLoadingZipcode(true);
      setLocationError(null);
      const response = await fetch(
        `${API_BASE_URL}/api/v1/applicantjob/geonames/zipcodes?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`
      );
      if (!response.ok) throw new Error("Failed to fetch zipcodes");
      const data = await response.json();
      const zipcodes = (data.zipcodes || []) as string[];
      
      // Auto-fill with first zipcode if available and zipcode field is empty
      if (zipcodes.length > 0 && !step3.zipCode) {
        setStep3({
          ...step3,
          zipCode: zipcodes[0],
        });
      }
    } catch (error) {
      console.error("Error fetching zipcodes by city/state:", error);
      // Allow manual entry - don't show error
    } finally {
      setIsLoadingZipcode(false);
    }
  }

  async function fetchLocationByZipcode(zipcode: string) {
    if (!API_BASE_URL || !zipcode.trim() || zipcode.length !== 5) return;

    try {
      setIsLoadingZipcode(true);
      setLocationError(null);
      const response = await fetch(
        `${API_BASE_URL}/api/v1/applicantjob/geonames/validate-location?zipcode=${encodeURIComponent(zipcode)}`
      );
      if (!response.ok) throw new Error("Failed to validate location");
      const data = await response.json();
      
      if (data.city && data.state) {
        setStep3({
          ...step3,
          city: data.city,
          state: data.state,
          zipCode: zipcode,
        });
        // Show success indicator briefly
        setLocationError(null);
      }
    } catch (error) {
      console.error("Error fetching location by zipcode:", error);
      // Allow manual entry - don't show error
    } finally {
      setIsLoadingZipcode(false);
    }
  }

  // Debounced city search
  function handleCityChange(value: string) {
    setStep3((prev) => {
      const updated = { ...prev, city: value };
      // If both city and state are set, try to fetch zipcode
      if (value && prev.state && value.length >= 2) {
        setTimeout(() => {
          fetchZipcodesByCityState(value, prev.state);
        }, 500);
      }
      return updated;
    });
    clearFieldError("city");
    setShowCityDropdown(false);
    
    if (citySearchTimeoutRef.current) {
      clearTimeout(citySearchTimeoutRef.current);
    }
    
    if (value.length >= 2) {
      citySearchTimeoutRef.current = setTimeout(() => {
        searchCities(value);
        fetchStatesByCity(value);
      }, 300);
    } else {
      setCitySuggestions([]);
      setStateSuggestions([]);
    }
  }

  // Handle zipcode change
  function handleZipcodeChange(value: string) {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 5);
    setStep3({ ...step3, zipCode: digitsOnly });
    clearFieldError("zipCode");
    
    if (digitsOnly.length === 5) {
      fetchLocationByZipcode(digitsOnly);
    }
  }

  // Load states on mount
  useEffect(() => {
    if (isOrgDetailsModalOpen && allStates.length === 0) {
      fetchStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOrgDetailsModalOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (citySearchTimeoutRef.current) {
        clearTimeout(citySearchTimeoutRef.current);
      }
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    setSuccessMessage(null);
    
    const step4Errors = validateStep4(step4);
    if (Object.keys(step4Errors).length > 0) {
      setErrors({ step4: step4Errors });
      return;
    }

    // Validate organization details if it's a new organization
    if (isNewOrganization) {
      const step3Errors = validateStep3(step3);
      if (Object.keys(step3Errors).length > 0) {
        setErrors({ step3: step3Errors });
        setServerError("Please complete all organization details before submitting.");
        return;
      }
    }

    if (!API_BASE_URL) {
      setServerError("API base URL is not configured.");
      return;
    }

    setIsSubmitting(true);

    // Debug: Log current state
    console.log("Submission state check:", {
      isNewOrganization,
      step3: step3,
      hasOrgName: !!step3.organizationName.trim(),
      hasOrgEmail: !!step3.organizationEmail.trim(),
      hasOrgType: !!step3.organizationType,
    });

    // Build EmployerUserDTO from all form steps
    const payload: any = {
      // Employer user fields
      email: step1.email.trim(),
      username: step1.email.trim(), // Username is always the email
      password: step4.password,
      firstName: step2.firstName.trim(),
      lastName: step2.lastName.trim(),
      middleInitial: step2.middleInitial.trim() || null,
      mobileNumber: step2.mobileNumber.trim(),
      employerPosition: step2.employerPosition.trim(),
    };

    // Add organization details if it's a new organization (nested structure)
    if (isNewOrganization) {
      // Ensure all required fields are present and not empty
      if (!step3.organizationName.trim() || 
          !step3.organizationEmail.trim() || 
          !step3.organizationType ||
          !step3.addressLine1.trim() ||
          !step3.city.trim() ||
          !step3.state.trim() ||
          !step3.zipCode.trim() ||
          !step3.country.trim() ||
          !step3.orgPhone.trim()) {
        setServerError("Please complete all required organization details.");
        setIsSubmitting(false);
        return;
      }

      // Add organization as nested object (matching OrganizationDTO field names)
      payload.organization = {
        organizationDomain: emailDomain, // Extract domain from email
        organizationName: step3.organizationName.trim(),
        organizationEmail: step3.organizationEmail.trim(),
        organizationType: step3.organizationType,
        addressLine1: step3.addressLine1.trim(),
        addressLine2: step3.addressLine2.trim() || null,
        city: step3.city.trim(),
        state: step3.state.trim(),
        zip: step3.zipCode.trim(), // Changed from zipCode to zip
        phoneNumber: step3.orgPhone.trim(), // Changed from orgPhone to phoneNumber
        fax: step3.orgFax.trim() || null, // Changed from orgFax to fax
      };
      
      // Debug: Log the organization data being sent
      console.log("Organization data being sent:", payload.organization);
    } else {
      // Set organization to null if it's an existing organization
      payload.organization = null;
    }

    // Debug: Log full payload
    console.log("Full payload being sent:", payload);
    console.log("Is new organization:", isNewOrganization);

    try {
      const endpoint = `${API_BASE_URL}/api/v1/employeruser/employer-registration`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = (await response.text()) || "Unable to register employer.";
        throw new Error(errorText);
      }

      setSuccessMessage("Registration successful! Redirecting to your dashboard...");
      setErrors({});
      
      setTimeout(() => {
        router.push("/employer");
      }, 1000);
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred while registering.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    // Only reset domain check result when email changes
    // Don't reset isNewOrganization here as it should persist after domain check
    setDomainCheckResult("idle");
    if (isOtpModalOpen) {
      setIsOtpModalOpen(false);
      resetOtpState();
    }
    // Only reset isNewOrganization if we're going back to step 1
    if (currentStep === 1 && domainCheckResult === "idle") {
      setIsNewOrganization(false);
    }
  }, [step1.email]);

  const emailDomain = useMemo(() => step1.email.split("@")[1] ?? "", [step1.email]);

  const domainStatusCopy = useMemo<DomainStatusCopy>(() => {
    const base: DomainStatusCopy = {
      badge: emailDomain ? emailDomain : "No domain detected",
      icon: Sparkles,
      accent: "text-muted-foreground",
      message: "Use your company email to unlock HUBZone employer tools.",
    };

    if (!emailDomain) {
      return base;
    }

    if (domainCheckResult === "checking") {
      return {
        badge: emailDomain,
        icon: Activity,
        accent: "text-sky-400",
        message: "Scanning your domain to match it with an existing workspace...",
      };
    }

    if (domainCheckResult === "new") {
      return {
        badge: `${emailDomain} • new`,
        icon: Building2,
        accent: "text-amber-400",
        message:
          "This looks like a fresh domain. We’ll capture organization details right after your profile.",
      };
    }

    if (domainCheckResult === "existing") {
      return {
        badge: `${emailDomain} • verified`,
        icon: ShieldCheck,
        accent: "text-emerald-400",
        message:
          "Nice—this domain already has a Hubzone footprint. We’ll sync you to your org workspace automatically.",
      };
    }

    return base;
  }, [domainCheckResult, emailDomain]);

  const stepTimeline = useMemo<StepDescriptor[]>(() => {
    // Organization details now handled in modal, so always show 3 steps
    return [
      { id: 1, label: "Domain Sync", hint: "Verify email", icon: Globe },
      { id: 2, label: "Crew Lead", hint: "Personal profile", icon: UserRound },
      { id: 4, label: "Secure Access", hint: "Password", icon: LockKeyhole },
    ];
  }, []);

  const currentTimelineIndex = stepTimeline.findIndex((step) => step.id === currentStep);

  const stepDescriptions: Record<number, string> = {
    1: "Start with your work email so we can detect your domain.",
    2: "Enter your personal information.",
    4: "Lock your account with a secure password and finish onboarding.",
  };

  return (
    <main className="min-h-screen bg-background py-12 relative overflow-hidden font-sans text-foreground">
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
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mx-auto max-w-md space-y-6 z-10"
          >
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight"
            >
              Join as an Employer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base text-muted-foreground"
            >
              Access AI-powered recruiting tools, HUBZone candidate matching, and
              streamlined compliance tracking for government contracting.
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
                  <h3 className="font-medium text-foreground">AI Resume Screening</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically score and rank candidates based on your job requirements
                    and HUBZone eligibility.
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
                  <h3 className="font-medium text-foreground">Talent Pipeline</h3>
                  <p className="text-sm text-muted-foreground">
                    Build and manage your talent pipeline with AI-powered insights and
                    candidate recommendations.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Right Column - Signup Form */}
        <section className="flex flex-[0.5] items-start justify-center px-6 py-16 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`relative w-full ${currentStep === 3 ? "max-w-3xl" : "max-w-lg"}`}
          >
            <div className="absolute inset-0 -z-10 animate-pulse rounded-[36px] bg-gradient-to-br from-primary/25 via-transparent to-secondary/30 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-[36px] border border-border/70 bg-background/95 shadow-[0_35px_120px_-60px_rgba(59,130,246,0.8)] backdrop-blur-2xl ${currentStep === 3 ? "p-10" : "p-8"}`}
            >
              <div className="mb-8 space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2"
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.4em] backdrop-blur-sm"
                    >
                      <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
                      <TypingText
                        text="Employer Registration"
                        speed={30}
                        className="inline"
                      />
                    </Badge>
                  </motion.div>
                </motion.div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold leading-tight">
                      Create your account
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {stepDescriptions[currentStep]}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    Step {currentTimelineIndex + 1}/{stepTimeline.length}
                  </span>
                </div>
              </div>

              <div className="mb-8 space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Domain
                  </div>
                  <span className="text-xs text-primary/80">
                    {emailDomain || "Awaiting work email"}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  {stepTimeline.map((step, index) => {
                    const status =
                      currentStep === step.id
                        ? "active"
                        : currentStep > step.id
                          ? "done"
                          : "upcoming";
                    const Icon = step.icon;
                    return (
                      <div key={step.id} className="flex flex-1 items-center">
                        <div className="flex w-full flex-col items-center gap-3">
                          <div className="flex w-full items-center">
                            <motion.div
                              animate={{ scale: status === "active" ? 1.1 : 1 }}
                              className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                                status === "done"
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : status === "active"
                                    ? "border-primary/80 bg-primary/10 text-primary"
                                    : "border-border text-muted-foreground"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </motion.div>
                            {index < stepTimeline.length - 1 && (
                              <div
                                className={`ml-2 h-px flex-1 ${
                                  currentStep > step.id ? "bg-primary" : "bg-border"
                                }`}
                              />
                            )}
                          </div>
                          <div className="text-center">
                            <p className="text-[0.7rem] font-semibold">{step.label}</p>
                            <p className="text-[0.6rem] text-muted-foreground">
                              {step.hint}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1: Email */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-5"
                  >
                    <motion.div
                      key={domainCheckResult}
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                      className="rounded-2xl border border-border/70 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 p-4"
                    >
                      {(() => {
                        const DomainStatusIcon = domainStatusCopy.icon;
                        return (
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <DomainStatusIcon className={`h-5 w-5 ${domainStatusCopy.accent}`} />
                              <span className={`text-sm font-semibold ${domainStatusCopy.accent}`}>
                                Domain signal
                              </span>
                            </div>
                            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
                              {emailDomain || "—"}
                            </span>
                          </div>
                        );
                      })()}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-medium text-muted-foreground">
                          {domainStatusCopy.badge}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {domainStatusCopy.message}
                      </p>
                    </motion.div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        autoComplete="email"
                        value={step1.email}
                        onChange={(e) => setStep1({ ...step1, email: e.target.value })}
                        className={
                          errors.step1?.email
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                        placeholder="name@yourcompany.com"
                      />
                      {errors.step1?.email && (
                        <p className="text-xs text-red-500">{errors.step1.email}</p>
                      )}
                    </div>

                    <Button
                      type="button"
                      onClick={handleStep1Next}
                      disabled={domainCheckResult === "checking" || otpStatus === "sending"}
                      className="w-full rounded-2xl bg-primary py-6 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {domainCheckResult === "checking" || otpStatus === "sending" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {domainCheckResult === "checking" ? "Checking domain..." : "Sending code..."}
                        </>
                      ) : (
                        <>
                          Continue <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    {otpError && (
                      <p className="text-xs text-red-500">{otpError}</p>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Personal Info (always shown) */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    {domainCheckResult !== "idle" && (
                      <motion.div
                        initial={{ opacity: 0.6, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`rounded-2xl border ${
                          domainCheckResult === "new"
                            ? "border-amber-400/40 bg-amber-100/5"
                            : "border-emerald-400/40 bg-emerald-100/5"
                        } p-4 text-sm text-muted-foreground`}
                      >
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          {domainCheckResult === "new" ? (
                            <Building2 className="h-4 w-4 text-amber-400" />
                          ) : (
                            <ShieldCheck className="h-4 w-4 text-emerald-400" />
                          )}
                          {domainCheckResult === "new"
                            ? `New domain detected: ${emailDomain}`
                            : `Existing domain: ${emailDomain}`}
                        </div>
                        <p className="mt-1 text-xs">
                          {domainCheckResult === "new"
                            ? "Organization details have been saved. You can edit them later in your dashboard."
                            : "This domain is already verified. We’ll add you under your organization automatically."}
                        </p>
                      </motion.div>
                    )}

                    {/* Name Section - Vertical Layout */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 pb-2 border-b border-border/30">
                        <UserRound className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-semibold text-foreground">Full Name</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {/* First Name */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-1.5"
                        >
                          <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                            <span className="text-primary">•</span>
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Input
                              type="text"
                              autoComplete="given-name"
                              value={step2.firstName}
                              onChange={(e) =>
                                setStep2({ ...step2, firstName: e.target.value })
                              }
                              className={
                                errors.step2?.firstName
                                  ? "border-red-500 focus-visible:ring-red-500 pr-10"
                                  : "pr-10"
                              }
                              placeholder="John"
                            />
                            {step2.firstName && !errors.step2?.firstName && (
                              <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                            )}
                          </div>
                          {errors.step2?.firstName && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-500 flex items-center gap-1"
                            >
                              <AlertCircle className="h-3 w-3" />
                              {errors.step2.firstName}
                            </motion.p>
                          )}
                        </motion.div>

                        {/* Middle Initial */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                          className="space-y-1.5"
                        >
                          <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                            <span className="text-muted-foreground/60">•</span>
                            Middle Initial <span className="text-[0.65rem] text-muted-foreground/50 font-normal ml-1">(Optional)</span>
                          </label>
                          <div className="relative">
                            <Input
                              type="text"
                              autoComplete="additional-name"
                              maxLength={1}
                              value={step2.middleInitial}
                              onChange={(e) =>
                                setStep2({
                                  ...step2,
                                  middleInitial: e.target.value.toUpperCase().replace(/[^A-Z]/g, ""),
                                })
                              }
                              placeholder="M"
                              className="pr-10 text-base font-semibold tracking-widest"
                            />
                            {step2.middleInitial && (
                              <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                            )}
                          </div>
                        </motion.div>

                        {/* Last Name */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="space-y-1.5"
                        >
                          <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                            <span className="text-primary">•</span>
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Input
                              type="text"
                              autoComplete="family-name"
                              value={step2.lastName}
                              onChange={(e) =>
                                setStep2({ ...step2, lastName: e.target.value })
                              }
                              className={
                                errors.step2?.lastName
                                  ? "border-red-500 focus-visible:ring-red-500 pr-10"
                                  : "pr-10"
                              }
                              placeholder="Doe"
                            />
                            {step2.lastName && !errors.step2?.lastName && (
                              <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                            )}
                          </div>
                          {errors.step2?.lastName && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-xs text-red-500 flex items-center gap-1"
                            >
                              <AlertCircle className="h-3 w-3" />
                              {errors.step2.lastName}
                            </motion.p>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Contact & Position Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-5 pt-4 border-t border-border/30"
                    >
                      <div className="flex items-center gap-2 pb-2">
                        <Activity className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-semibold text-foreground">Contact & Role</h3>
                      </div>

                      {/* Mobile Number with Formatting */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                          <span className="text-primary">•</span>
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            type="tel"
                            autoComplete="tel"
                            value={step2.mobileNumber}
                            onChange={(e) => {
                              // Only allow digits, limit to 10
                              const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                              setStep2({ ...step2, mobileNumber: digitsOnly });
                            }}
                            maxLength={10}
                            className={
                              errors.step2?.mobileNumber
                                ? "border-red-500 focus-visible:ring-red-500 pr-10"
                                : "pr-10"
                            }
                            placeholder="(555) 123-4567"
                          />
                          {step2.mobileNumber && !errors.step2?.mobileNumber && step2.mobileNumber.length === 10 && (
                            <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                          )}
                          {step2.mobileNumber && step2.mobileNumber.length < 10 && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                              {step2.mobileNumber.length}/10
                            </span>
                          )}
                        </div>
                        {step2.mobileNumber && step2.mobileNumber.length === 10 && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-emerald-600 flex items-center gap-1"
                          >
                            <Check className="h-3 w-3" />
                            {`(${step2.mobileNumber.slice(0, 3)}) ${step2.mobileNumber.slice(3, 6)}-${step2.mobileNumber.slice(6)}`}
                          </motion.p>
                        )}
                        {errors.step2?.mobileNumber && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-500 flex items-center gap-1"
                          >
                            <AlertCircle className="h-3 w-3" />
                            {errors.step2.mobileNumber}
                          </motion.p>
                        )}
                      </div>

                      {/* Employer Position */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                          <span className="text-primary">•</span>
                          Employer Position <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            type="text"
                            value={step2.employerPosition}
                            onChange={(e) =>
                              setStep2({ ...step2, employerPosition: e.target.value })
                            }
                            className={
                              errors.step2?.employerPosition
                                ? "border-red-500 focus-visible:ring-red-500 pr-10"
                                : "pr-10"
                            }
                            placeholder="e.g., HR Manager, Recruiter, Talent Acquisition"
                          />
                          {step2.employerPosition && !errors.step2?.employerPosition && (
                            <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                          )}
                        </div>
                        {errors.step2?.employerPosition && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-red-500 flex items-center gap-1"
                          >
                            <AlertCircle className="h-3 w-3" />
                            {errors.step2.employerPosition}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="flex-1 rounded-2xl py-6 text-base font-semibold"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <Button
                        type="button"
                        onClick={handleStep2Next}
                        className="flex-1 rounded-2xl bg-primary py-6 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                      >
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                </motion.div>
              )}

                {/* Step 3 removed - now handled in modal */}

                {/* Step 4: Password */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          value={step4.password}
                          onChange={(e) =>
                            setStep4({ ...step4, password: e.target.value })
                          }
                          className={
                            errors.step4?.password
                              ? "border-red-500 focus-visible:ring-red-500 pr-10"
                              : "pr-10"
                          }
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <Eye className="h-4 w-4" />
                          ) : (
                            <EyeOff className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {errors.step4?.password && (
                        <p className="text-xs text-red-500">
                          {errors.step4.password}
                        </p>
                      )}
                      <p className="text-[0.7rem] text-muted-foreground">
                        Use at least 8 characters with uppercase, lowercase, and a number.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          autoComplete="new-password"
                          value={step4.confirmPassword}
                          onChange={(e) =>
                            setStep4({
                              ...step4,
                              confirmPassword: e.target.value,
                            })
                          }
                          className={
                            errors.step4?.confirmPassword
                              ? "border-red-500 focus-visible:ring-red-500 pr-10"
                              : "pr-10"
                          }
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={
                            showConfirmPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          {showConfirmPassword ? (
                            <Eye className="h-4 w-4" />
                          ) : (
                            <EyeOff className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {errors.step4?.confirmPassword && (
                        <p className="text-xs text-red-500">
                          {errors.step4.confirmPassword}
                        </p>
                      )}
                    </div>

                      <div className="flex gap-3 pt-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(isNewOrganization ? 3 : 2)}
                          disabled={isSubmitting}
                          className="flex-1 rounded-2xl py-6 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 rounded-2xl bg-primary py-6 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Creating account...
                            </>
                          ) : (
                            "Sign Up"
                          )}
                        </Button>
                      </div>

                      {Object.keys(errors.step4 || {}).length > 0 && (
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
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center text-xs text-muted-foreground"
              >
                Already have an account?{" "}
                <Link
                  href="/employer/login"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Sign in
                </Link>
              </motion.p>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* OTP Verification Modal */}
      {isOtpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              if (otpStatus === "verified") {
                setIsOtpModalOpen(false);
              }
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-md rounded-[32px] border border-border/80 bg-gradient-to-br from-background via-background/95 to-background/90 p-8 shadow-[0_35px_120px_-60px_rgba(59,130,246,0.8)] backdrop-blur-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: otpStatus === "verified" ? [1, 1.2, 1] : 1,
                    rotate: otpStatus === "sending" ? [0, 360] : 0,
                  }}
                  transition={{
                    scale: { duration: 0.5 },
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5"
                >
                  {otpStatus === "verified" ? (
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  ) : (
                    <MailCheck className="h-6 w-6 text-primary" />
                  )}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold">Verify your email</h3>
                  <p className="text-xs text-muted-foreground">
                    {domainCheckResult === "existing"
                      ? `Domain verified: ${emailDomain}`
                      : `New domain: ${emailDomain}`}
                  </p>
                </div>
              </div>
              {otpStatus !== "verified" && (
                <button
                  onClick={() => {
                    setIsOtpModalOpen(false);
                    resetOtpState();
                  }}
                  className="rounded-full p-2 text-muted-foreground transition hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {otpStatus === "verified" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-emerald-200/40 bg-emerald-50/40 p-5 text-center text-sm text-emerald-700"
              >
                <CheckCircle2 className="h-5 w-5" />
                <p>Email verified. Proceeding to next step…</p>
              </motion.div>
            ) : (
              <div className="mt-6 space-y-4">
                {otpMessage && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-muted-foreground"
                  >
                    {otpMessage}
                  </motion.p>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    <span>Enter verification code</span>
                    {otpStatus === "entering" && otpTimeLeft > 0 && (
                      <span className="flex items-center gap-1.5 text-[0.6rem] font-semibold text-primary">
                        <Clock3 className="h-3.5 w-3.5" />
                        {formattedOtpTimer}
                      </span>
                    )}
                  </div>

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
                        inputMode="numeric"
                        maxLength={1}
                        readOnly={otpStatus === "verifying"}
                        className="h-14 w-full border-2 text-center text-xl font-semibold tracking-[0.3em] focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    ))}
                  </div>

                  {otpStatus === "entering" && otpTimeLeft > 0 && (
                    <div className="relative h-1.5 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: otpTimeLeft, ease: "linear" }}
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-sky-500 to-violet-500"
                      />
                    </div>
                  )}

                  {otpError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500"
                    >
                      {otpError}
                    </motion.p>
                  )}

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={handleValidateOtp}
                      disabled={otpStatus === "verifying"}
                      className="h-12 flex-1 rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {otpStatus === "verifying" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying
                        </>
                      ) : (
                        "Verify & continue"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleResendOtp}
                      disabled={!canResendOtp}
                      className="h-12 rounded-2xl border border-dashed border-primary/50 text-xs font-semibold uppercase tracking-[0.3em] text-primary hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Resend
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Organization Details Modal */}
      {isOrgDetailsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[40px] border border-border/80 bg-gradient-to-br from-background via-background/98 to-background/95 shadow-[0_35px_120px_-60px_rgba(59,130,246,0.8)] backdrop-blur-2xl"
          >
            {/* Animated header */}
            <div className="relative border-b border-border/50 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5"
                  >
                    <Building2 className="h-7 w-7 text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-semibold">Organization Details</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Let's set up <span className="font-semibold text-primary">{emailDomain}</span> in our system
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[calc(90vh-200px)] px-8 py-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {/* Organization Information Section */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 pb-3 border-b border-border/40"
                  >
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Organization Information</h3>
                  </motion.div>
                  
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Organization Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        value={step3.organizationName}
                        onChange={(e) => {
                          setStep3({ ...step3, organizationName: e.target.value });
                          clearFieldError("organizationName");
                        }}
                        className={
                          errors.step3?.organizationName
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                        placeholder="Techathon Inc."
                      />
                      {errors.step3?.organizationName && (
                        <p className="text-xs text-red-500">
                          {errors.step3.organizationName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Organization Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        value={step3.organizationEmail}
                        onChange={(e) => {
                          setStep3({ ...step3, organizationEmail: e.target.value });
                          clearFieldError("organizationEmail");
                        }}
                        className={
                          errors.step3?.organizationEmail
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                        placeholder="contact@yourcompany.com"
                      />
                      {errors.step3?.organizationEmail && (
                        <p className="text-xs text-red-500">
                          {errors.step3.organizationEmail}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Organization Type <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={step3.organizationType}
                        onValueChange={(value) => {
                          setStep3({ ...step3, organizationType: value });
                          clearFieldError("organizationType");
                        }}
                      >
                        <SelectTrigger
                          className={
                            errors.step3?.organizationType
                              ? "border-red-500 focus-visible:ring-red-500"
                              : ""
                          }
                        >
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="llc">LLC</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="sole-proprietorship">
                            Sole Proprietorship
                          </SelectItem>
                          <SelectItem value="non-profit">Non-Profit</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.step3?.organizationType && (
                        <p className="text-xs text-red-500">
                          {errors.step3.organizationType}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Address Information Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6 pt-6 border-t border-border/40"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-border/40">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Address Information</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Address Line 1 <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        autoComplete="address-line1"
                        value={step3.addressLine1}
                        onChange={(e) => {
                          setStep3({ ...step3, addressLine1: e.target.value });
                          clearFieldError("addressLine1");
                        }}
                        className={
                          errors.step3?.addressLine1
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                        placeholder="123 Main Street"
                      />
                      {errors.step3?.addressLine1 && (
                        <p className="text-xs text-red-500">
                          {errors.step3.addressLine1}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Address Line 2 <span className="text-xs text-muted-foreground">(Optional)</span>
                      </label>
                      <Input
                        type="text"
                        autoComplete="address-line2"
                        value={step3.addressLine2}
                        onChange={(e) => {
                          setStep3({ ...step3, addressLine2: e.target.value });
                          // addressLine2 is optional, but clear error if it exists
                          if (errors.step3?.addressLine2) {
                            clearFieldError("addressLine2");
                          }
                        }}
                        placeholder="Suite 100"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* City with autocomplete */}
                      <div className="space-y-1.5 relative">
                        <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                          <MapPin className="h-3 w-3 text-primary" />
                          City <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            ref={cityInputRef}
                            type="text"
                            autoComplete="address-level2"
                            value={step3.city}
                            onChange={(e) => handleCityChange(e.target.value)}
                            onFocus={() => {
                              if (citySuggestions.length > 0) setShowCityDropdown(true);
                            }}
                            onBlur={() => {
                              // Delay to allow dropdown click
                              setTimeout(() => setShowCityDropdown(false), 200);
                            }}
                            className={
                              errors.step3?.city
                                ? "border-red-500 focus-visible:ring-red-500 pr-10"
                                : "pr-10"
                            }
                            placeholder="Start typing city name..."
                          />
                          {isLoadingCities && (
                            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
                          )}
                          {!isLoadingCities && step3.city && (
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          )}
                          
                          {/* City Suggestions Dropdown */}
                          {showCityDropdown && citySuggestions.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-50 mt-1 w-full rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-lg max-h-48 overflow-y-auto"
                            >
                              {citySuggestions.map((city, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setStep3((prev) => {
                                      const updated = { ...prev, city };
                                      // If state is already set, try to fetch zipcode
                                      if (prev.state) {
                                        setTimeout(() => {
                                          fetchZipcodesByCityState(city, prev.state);
                                        }, 300);
                                      }
                                      return updated;
                                    });
                                    clearFieldError("city");
                                    setShowCityDropdown(false);
                                    fetchStatesByCity(city);
                                  }}
                                  className="w-full px-4 py-2.5 text-left text-sm hover:bg-primary/5 transition-colors flex items-center gap-2 border-b border-border/30 last:border-0"
                                >
                                  <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                                  <span className="flex-1">{city}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </div>
                        {errors.step3?.city && (
                          <p className="text-xs text-red-500">
                            {errors.step3.city}
                          </p>
                        )}
                      </div>

                      {/* State with autocomplete */}
                      <div className="space-y-1.5 relative">
                        <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                          <Globe className="h-3 w-3 text-primary" />
                          State <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            ref={stateInputRef}
                            type="text"
                            autoComplete="address-level1"
                            value={step3.state}
                            onChange={(e) => {
                              const value = e.target.value;
                              setStep3((prev) => {
                                const updated = { ...prev, state: value };
                                // If both city and state are set, try to fetch zipcode
                                if (value && prev.city && value.length >= 2) {
                                  setTimeout(() => {
                                    fetchZipcodesByCityState(prev.city, value);
                                  }, 500);
                                }
                                return updated;
                              });
                              clearFieldError("state");
                              // Filter states if we have them
                              if (allStates.length > 0 && value.length > 0) {
                                const filtered = allStates.filter(s =>
                                  s.toLowerCase().includes(value.toLowerCase())
                                );
                                setStateSuggestions(filtered.slice(0, 8));
                                setShowStateDropdown(filtered.length > 0);
                              }
                            }}
                            onFocus={() => {
                              if (stateSuggestions.length > 0 || allStates.length > 0) {
                                if (allStates.length > 0 && !step3.state) {
                                  setStateSuggestions(allStates.slice(0, 8));
                                }
                                setShowStateDropdown(true);
                              }
                            }}
                            onBlur={() => {
                              setTimeout(() => setShowStateDropdown(false), 200);
                            }}
                            className={
                              errors.step3?.state
                                ? "border-red-500 focus-visible:ring-red-500 pr-10"
                                : "pr-10"
                            }
                            placeholder="State or select from city"
                          />
                          {isLoadingStates && (
                            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
                          )}
                          {!isLoadingStates && step3.state && (
                            <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                          )}
                          
                          {/* State Suggestions Dropdown */}
                          {showStateDropdown && (stateSuggestions.length > 0 || allStates.length > 0) && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-50 mt-1 w-full rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-lg max-h-48 overflow-y-auto"
                            >
                              {(stateSuggestions.length > 0 ? stateSuggestions : allStates.slice(0, 8)).map((state, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setStep3((prev) => {
                                      const updated = { ...prev, state };
                                      // If city is already set, try to fetch zipcode
                                      if (prev.city) {
                                        setTimeout(() => {
                                          fetchZipcodesByCityState(prev.city, state);
                                        }, 300);
                                      }
                                      return updated;
                                    });
                                    clearFieldError("state");
                                    setShowStateDropdown(false);
                                  }}
                                  className="w-full px-4 py-2.5 text-left text-sm hover:bg-primary/5 transition-colors flex items-center gap-2 border-b border-border/30 last:border-0"
                                >
                                  <Globe className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                                  <span className="flex-1">{state}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </div>
                        {errors.step3?.state && (
                          <p className="text-xs text-red-500">
                            {errors.step3.state}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* ZIP Code with auto-fill */}
                      <div className="space-y-1.5 relative">
                        <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
                          <MapPin className="h-3 w-3 text-primary" />
                          ZIP Code <span className="text-red-500">*</span>
                          {isLoadingZipcode && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-[0.65rem] text-primary font-normal ml-1 flex items-center gap-1"
                            >
                              <Loader2 className="h-2.5 w-2.5 animate-spin" />
                              Auto-filling from city/state...
                            </motion.span>
                          )}
                        </label>
                        <div className="relative">
                          <Input
                            type="text"
                            autoComplete="postal-code"
                            value={step3.zipCode}
                            onChange={(e) => handleZipcodeChange(e.target.value)}
                            maxLength={5}
                            className={
                              errors.step3?.zipCode
                                ? "border-red-500 focus-visible:ring-red-500 pr-10"
                                : "pr-10"
                            }
                            placeholder="Enter 5-digit ZIP"
                          />
                          {isLoadingZipcode && (
                            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-primary" />
                          )}
                          {!isLoadingZipcode && step3.zipCode.length === 5 && step3.city && step3.state && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                              <Check className="h-4 w-4 text-emerald-500" />
                            </motion.div>
                          )}
                        </div>
                        {step3.zipCode.length === 5 && step3.city && step3.state && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-emerald-600 flex items-center gap-1"
                          >
                            <Check className="h-3 w-3" />
                            Location found: {step3.city}, {step3.state}
                          </motion.p>
                        )}
                        {errors.step3?.zipCode && (
                          <p className="text-xs text-red-500">
                            {errors.step3.zipCode}
                          </p>
                        )}
                        {locationError && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-amber-600 flex items-center gap-1"
                          >
                            <AlertCircle className="h-3 w-3" />
                            {locationError}
                          </motion.p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          value={step3.country}
                          onChange={(e) => {
                            setStep3({ ...step3, country: e.target.value });
                            clearFieldError("country");
                          }}
                          placeholder="United States"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Information Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6 pt-6 border-t border-border/40"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-border/40">
                    <Activity className="h-5 w-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Contact Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Organization Phone <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        value={step3.orgPhone}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setStep3({ ...step3, orgPhone: digitsOnly });
                          clearFieldError("orgPhone");
                        }}
                        maxLength={10}
                        className={
                          errors.step3?.orgPhone
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                        placeholder="5551234567"
                      />
                      {errors.step3?.orgPhone && (
                        <p className="text-xs text-red-500">
                          {errors.step3.orgPhone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">
                        Organization Fax <span className="text-xs text-muted-foreground">(Optional)</span>
                      </label>
                      <Input
                        type="tel"
                        value={step3.orgFax}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setStep3({ ...step3, orgFax: digitsOnly });
                        }}
                        maxLength={10}
                        placeholder="5551234568"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Footer with action buttons */}
            <div className="border-t border-border/50 bg-background/50">
              {/* Error messages section - separate from buttons */}
              {(otpError || Object.keys(errors.step3 || {}).length > 0) && (
                <div className="px-6 pt-4 pb-2 space-y-2">
                  {otpError && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-red-500/50 bg-red-50/50 dark:bg-red-950/20 p-3 text-sm text-red-600 dark:text-red-400"
                    >
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span className="flex-1">{otpError}</span>
                      </div>
                    </motion.div>
                  )}
                  {Object.keys(errors.step3 || {}).length > 0 && !otpError && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-red-500/50 bg-red-50/50 dark:bg-red-950/20 p-3 text-sm text-red-600 dark:text-red-400"
                    >
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span className="flex-1">Please fix the highlighted fields above before continuing.</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
              
              {/* Buttons section - always visible */}
              <div className="px-6 pb-6 pt-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <p className="text-xs text-muted-foreground">
                      Step 1 of 3 • Organization setup
                    </p>
                    <p className="text-[0.65rem] text-muted-foreground/70 mt-0.5">
                      You can edit these details later in your dashboard
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsOrgDetailsModalOpen(false);
                        setCurrentStep(1);
                        setErrors({});
                        setOtpError(null);
                      }}
                      className="rounded-2xl px-6"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      onClick={handleOrgDetailsSubmit}
                      className="rounded-2xl bg-primary px-8 text-primary-foreground shadow-lg transition hover:brightness-110"
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
