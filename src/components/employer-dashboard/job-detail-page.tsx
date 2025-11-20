"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  FileText,
  Edit,
  Save,
  X,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { getJobPostingById, updateJobPosting, toggleJobActiveStatus, JobPostingDTO } from "@/lib/api/employer-api";
import { authStorage } from "@/lib/auth/cookie-storage";

// Industries array
const industries = [
  "Healthcare",
  "Technology",
  "Education",
  "Finance",
  "Construction / Skilled Trades",
  "Retail / Hospitality",
  "Manufacturing",
  "Creative / Design",
  "Administrative",
  "Transportation / Logistics",
];

// Education levels
const educationLevels = ["Masters", "Bachelors", "Highschool"];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

export function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = parseInt(params.id as string);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [jobData, setJobData] = useState<JobPostingDTO | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    industry: "",
    education: "",
    city: "",
    state: "",
    zipcode: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requirements: "",
    benefits: "",
    applicationDeadline: "",
    experienceLevel: "",
    clearanceRequired: false,
    clearanceLevel: "",
    remote: false,
    hybrid: false,
    onsite: false,
  });

  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);
  const [stateSuggestions, setStateSuggestions] = useState<string[]>([]);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingZipcode, setIsLoadingZipcode] = useState(false);
  const [isLoadingZipcodeFromCityState, setIsLoadingZipcodeFromCityState] = useState(false);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const citySuggestionsRef = useRef<HTMLDivElement>(null);

  // Fetch job data
  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId || isNaN(jobId)) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const job = await getJobPostingById(jobId);
        if (job) {
          setJobData(job);
          // Parse jobPreference to set remote, hybrid, onsite
          const preferences = job.jobPreference?.split(",").map(p => p.trim()) || [];
          
          const formDataToSet = {
            title: job.jobTitle || "",
            industry: job.industry || "",
            education: job.education || "",
            city: job.city || "",
            state: job.state || "",
            zipcode: job.zipCode || "",
            jobType: job.jobType || "",
            // Backend field: salaryMin (Integer)
            salaryMin: job.salaryMin !== null && job.salaryMin !== undefined ? job.salaryMin.toString() : "",
            // Backend field: salaryMax (Integer)
            salaryMax: job.salaryMax !== null && job.salaryMax !== undefined ? job.salaryMax.toString() : "",
            description: job.jobDescription || "",
            // Backend field: requirements (String, text)
            requirements: job.requirements || "",
            // Backend field: benefits (String, text)
            benefits: job.benefits || "",
            applicationDeadline: job.applicationDeadlineDate
              ? new Date(job.applicationDeadlineDate).toISOString().split("T")[0]
              : "",
            experienceLevel: job.experienceLevel || "",
            clearanceRequired: job.clearanceRequired || false,
            clearanceLevel: "", // Not in backend DTO
            remote: preferences.includes("Remote"),
            hybrid: preferences.includes("Hybrid"),
            onsite: preferences.includes("Onsite"),
          };
          
          setFormData(formDataToSet);
        }
      } catch (error) {
        setSaveError(error instanceof Error ? error.message : "Failed to load job");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  // Fetch city suggestions from backend API
  useEffect(() => {
    const fetchCities = async () => {
      const query = formData.city.trim();
      if (!query || query.length < 2 || !API_BASE_URL) {
        setCitySuggestions([]);
        setShowCitySuggestions(false);
        return;
      }

      setIsLoadingCities(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/v1/applicantjob/geonames/all-cities?query=${encodeURIComponent(query)}`
        );
        if (response.ok) {
          const data = await response.json();
          const cities = (data.cities || []) as string[];
          setCitySuggestions(cities.slice(0, 10));
          setShowCitySuggestions(cities.length > 0);
        }
      } catch (error) {
        setCitySuggestions([]);
      } finally {
        setIsLoadingCities(false);
      }
    };

    const debounceTimer = setTimeout(fetchCities, 300);
    return () => clearTimeout(debounceTimer);
  }, [formData.city]);

  // Fetch states when city is selected
  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.city.trim() || !API_BASE_URL) {
        setStateSuggestions([]);
        setShowStateDropdown(false);
        return;
      }

      setIsLoadingStates(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/v1/applicantjob/geonames/states-by-city?city=${encodeURIComponent(formData.city)}`
        );
        if (response.ok) {
          const data = await response.json();
          const states = (data.states || []) as string[];
          setStateSuggestions(states);
          setShowStateDropdown(states.length > 0);
          
          // Auto-select if only one state
          if (states.length === 1 && !formData.state) {
            setFormData((prev) => ({ ...prev, state: states[0] }));
          }
        }
      } catch (error) {
        setStateSuggestions([]);
      } finally {
        setIsLoadingStates(false);
      }
    };

    const debounceTimer = setTimeout(fetchStates, 300);
    return () => clearTimeout(debounceTimer);
  }, [formData.city]);

  // Fetch city and state when zipcode is entered (5 digits)
  useEffect(() => {
    const fetchLocationByZipcode = async () => {
      const zipcode = formData.zipcode.trim();
      if (!zipcode || zipcode.length !== 5 || !API_BASE_URL) {
        return;
      }

      setIsLoadingZipcode(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/v1/applicantjob/geonames/validate-location?zipcode=${encodeURIComponent(zipcode)}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.city && data.state) {
            setFormData((prev) => ({
              ...prev,
              city: data.city,
              state: data.state,
            }));
          }
        }
      } catch (error) {
        // Silently handle error - allow manual entry
      } finally {
        setIsLoadingZipcode(false);
      }
    };

    const debounceTimer = setTimeout(fetchLocationByZipcode, 500);
    return () => clearTimeout(debounceTimer);
  }, [formData.zipcode]);

  // Fetch zipcode when both city and state are entered
  useEffect(() => {
    const fetchZipcodeByCityState = async () => {
      const city = formData.city.trim();
      const state = formData.state.trim();
      const zipcode = formData.zipcode.trim();
      
      if (!city || !state || zipcode.length > 0 || !API_BASE_URL) {
        return;
      }

      if (isLoadingZipcode) {
        return;
      }

      setIsLoadingZipcodeFromCityState(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/v1/applicantjob/geonames/zipcodes?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`
        );
        if (response.ok) {
          const data = await response.json();
          const zipcodes = (data.zipcodes || []) as string[];
          
          if (zipcodes.length > 0) {
            setFormData((prev) => {
              if (!prev.zipcode.trim()) {
                return {
                  ...prev,
                  zipcode: zipcodes[0],
                };
              }
              return prev;
            });
          }
        }
      } catch (error) {
        // Silently handle error - allow manual entry
      } finally {
        setIsLoadingZipcodeFromCityState(false);
      }
    };

    const debounceTimer = setTimeout(fetchZipcodeByCityState, 500);
    return () => clearTimeout(debounceTimer);
  }, [formData.city, formData.state]);

  // Close city suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cityInputRef.current &&
        !cityInputRef.current.contains(event.target as Node) &&
        citySuggestionsRef.current &&
        !citySuggestionsRef.current.contains(event.target as Node)
      ) {
        setShowCitySuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCitySelect = (city: string) => {
    setFormData((prev) => ({ ...prev, city }));
    setShowCitySuggestions(false);
  };

  const handleSave = async () => {
    if (!authStorage.isAuthenticated()) {
      setSaveError("Please log in to update job.");
      return;
    }

    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      // Validate required fields
      if (!formData.title.trim()) {
        setSaveError("Job title is required.");
        setIsSaving(false);
        return;
      }
      if (!formData.description.trim()) {
        setSaveError("Job description is required.");
        setIsSaving(false);
        return;
      }
      if (!formData.jobType.trim()) {
        setSaveError("Job type is required.");
        setIsSaving(false);
        return;
      }
      if (!formData.city.trim()) {
        setSaveError("City is required.");
        setIsSaving(false);
        return;
      }
      if (!formData.state.trim()) {
        setSaveError("State is required.");
        setIsSaving(false);
        return;
      }

      // Build jobPreference from remote, hybrid, onsite checkboxes
      const jobPreferences: string[] = [];
      if (formData.remote) jobPreferences.push("Remote");
      if (formData.hybrid) jobPreferences.push("Hybrid");
      if (formData.onsite) jobPreferences.push("Onsite");
      const jobPreference = jobPreferences.length > 0 ? jobPreferences.join(",") : undefined;

      // Prepare payload matching backend JobPostingDTO structure
      const payload: any = {
        jobTitle: formData.title.trim(),
        jobDescription: formData.description.trim(),
        jobType: formData.jobType.trim(),
        city: formData.city.trim(),
        state: formData.state.trim(),
      };

      // Add optional fields only if they have values
      if (formData.industry.trim()) {
        payload.industry = formData.industry.trim();
      }
      if (formData.education.trim()) {
        payload.education = formData.education.trim();
      }
      if (formData.zipcode.trim()) {
        payload.zipCode = formData.zipcode.trim();
      }
      if (formData.salaryMin.trim()) {
        const minSalary = parseInt(formData.salaryMin.trim(), 10);
        if (!isNaN(minSalary)) {
          payload.salaryMin = minSalary;
        }
      }
      if (formData.salaryMax.trim()) {
        const maxSalary = parseInt(formData.salaryMax.trim(), 10);
        if (!isNaN(maxSalary)) {
          payload.salaryMax = maxSalary;
        }
      }
      if (formData.requirements.trim()) {
        payload.requirements = formData.requirements.trim();
      }
      if (formData.benefits.trim()) {
        payload.benefits = formData.benefits.trim();
      }
      if (formData.applicationDeadline.trim()) {
        const dateStr = formData.applicationDeadline.trim();
        payload.applicationDeadlineDate = dateStr + "T00:00:00";
      }
      if (formData.experienceLevel.trim()) {
        payload.experienceLevel = formData.experienceLevel.trim();
      }
      if (formData.clearanceRequired) {
        payload.clearanceRequired = true;
      }
      if (jobPreference) {
        payload.jobPreference = jobPreference;
      }

      await updateJobPosting(jobId, payload);
      
      setSaveSuccess(true);
      setIsEditing(false);
      
      // Refresh job data
      const updatedJob = await getJobPostingById(jobId);
      if (updatedJob) {
        setJobData(updatedJob);
        const preferences = updatedJob.jobPreference?.split(",").map(p => p.trim()) || [];
        setFormData((prev) => ({
          ...prev,
          remote: preferences.includes("Remote"),
          hybrid: preferences.includes("Hybrid"),
          onsite: preferences.includes("Onsite"),
        }));
      }

      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to update job. Please try again.";
      setSaveError(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleActive = async () => {
    if (!jobData) return;

    setIsToggling(true);
    setSaveError(null);
    try {
      await toggleJobActiveStatus(jobId, !jobData.active);
      // Refresh job data from backend to get accurate status
      const updatedJob = await getJobPostingById(jobId);
      if (updatedJob) {
        setJobData(updatedJob);
      } else {
        // If we can't fetch, at least update the active status locally
        setJobData({ ...jobData, active: !jobData.active });
      }
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to update job status. Please try again.";
      setSaveError(errorMessage);
    } finally {
      setIsToggling(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!jobData) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card className="p-12 text-center">
          <h3 className="text-lg font-semibold mb-2">Job Not Found</h3>
          <p className="text-muted-foreground mb-4">
            The job posting you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/employer/dashboard/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <TypingText
            text={isEditing ? "Edit Job" : jobData.jobTitle || "Job Details"}
            className="text-3xl font-semibold mb-2"
            speed={50}
          />
          <p className="text-muted-foreground">
            {isEditing ? "Update job details and requirements" : "View and manage job posting"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/employer/dashboard/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
          {!isEditing && (
            <Button
              variant={jobData.active !== false ? "destructive" : "default"}
              onClick={handleToggleActive}
              disabled={isToggling}
            >
              {isToggling ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-current mr-2"></div>
                  Updating...
                </>
              ) : jobData.active !== false ? (
                <>
                  <X className="mr-2 h-4 w-4" />
                  Deactivate
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Activate
                </>
              )}
            </Button>
          )}
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isSaving}>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={isSaving}>
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Job
            </Button>
          )}
        </div>
      </div>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {saveSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-lg bg-green-500/10 border border-green-500/20 p-3"
          >
            <p className="text-sm text-green-600 dark:text-green-400">
              Job updated successfully!
            </p>
          </motion.div>
        )}
        {saveError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-lg bg-red-500/10 border border-red-500/20 p-3"
          >
            <p className="text-sm text-red-600 dark:text-red-400">{saveError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
          {/* Basic Information */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Basic Information
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-1 block">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Senior Software Engineer"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Industry <span className="text-red-500">*</span>
                </label>
                <Select
                  required
                  value={formData.industry}
                  onValueChange={(value) => setFormData({ ...formData, industry: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Education</label>
                <Select
                  value={formData.education}
                  onValueChange={(value) => setFormData({ ...formData, education: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Experience Level
                </label>
                <Select
                  value={formData.experienceLevel}
                  onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                    <SelectItem value="lead">Lead/Principal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Job Type <span className="text-red-500">*</span>
                </label>
                <Select
                  required
                  value={formData.jobType}
                  onValueChange={(value) => setFormData({ ...formData, jobType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Location & Work Arrangement */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location & Work Arrangement
            </h3>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                {/* City Field with Autocomplete */}
                <div className="relative" ref={cityInputRef}>
                  <label className="text-sm font-medium mb-1 block">
                    City <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.city}
                    onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value, state: "" }))}
                    onFocus={() => {
                      if (citySuggestions.length > 0) {
                        setShowCitySuggestions(true);
                      }
                    }}
                    placeholder="e.g., Reston"
                    className="w-full"
                  />
                  {isLoadingCities && (
                    <div className="absolute right-3 top-9 text-muted-foreground text-xs">
                      Searching...
                    </div>
                  )}
                  <AnimatePresence>
                    {showCitySuggestions && citySuggestions.length > 0 && (
                      <motion.div
                        ref={citySuggestionsRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-1 bg-background border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto"
                      >
                        {citySuggestions.map((city, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleCitySelect(city)}
                            className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {city}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className="text-xs text-muted-foreground mt-1">
                    Start typing to see suggestions
                  </p>
                </div>

                {/* State Field - Auto-populated from city */}
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    State <span className="text-red-500">*</span>
                  </label>
                  {showStateDropdown && stateSuggestions.length > 0 ? (
                    <Select
                      required
                      value={formData.state}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, state: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={isLoadingStates ? "Loading..." : "Select state"} />
                      </SelectTrigger>
                      <SelectContent>
                        {stateSuggestions.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      required
                      value={formData.state}
                      onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                      placeholder={isLoadingStates ? "Loading..." : "Enter state"}
                      disabled={isLoadingStates}
                    />
                  )}
                  {isLoadingStates && (
                    <p className="text-xs text-muted-foreground mt-1">Loading states...</p>
                  )}
                </div>

                {/* Zipcode Field - Auto-fills city and state */}
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    type="text"
                    value={formData.zipcode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 5);
                      setFormData((prev) => ({ ...prev, zipcode: value }));
                    }}
                    placeholder="e.g., 20190"
                    maxLength={5}
                    className="w-full"
                    disabled={isLoadingZipcodeFromCityState}
                  />
                  {isLoadingZipcode && (
                    <p className="text-xs text-muted-foreground mt-1">Auto-filling city & state...</p>
                  )}
                  {isLoadingZipcodeFromCityState && (
                    <p className="text-xs text-muted-foreground mt-1">Auto-filling zipcode...</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter 5-digit ZIP to auto-fill city & state, or enter city & state to auto-fill ZIP
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium block">Work Arrangement</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.remote}
                      onChange={(e) => setFormData((prev) => ({ ...prev, remote: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm">Remote</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.hybrid}
                      onChange={(e) => setFormData((prev) => ({ ...prev, hybrid: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm">Hybrid</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.onsite}
                      onChange={(e) => setFormData((prev) => ({ ...prev, onsite: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm">Onsite</span>
                  </label>
                </div>
              </div>
            </div>
          </Card>

          {/* Salary */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Salary Information (USD)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              All salaries are in US Dollars (USD)
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-1 block">Min Salary (USD)</label>
                <Input
                  type="number"
                  value={formData.salaryMin}
                  onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
                  placeholder="e.g., 80000"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Max Salary (USD)</label>
                <Input
                  type="number"
                  value={formData.salaryMax}
                  onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
                  placeholder="e.g., 120000"
                />
              </div>
            </div>
          </Card>

          {/* Clearance Requirements */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Security Clearance
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.clearanceRequired}
                  onChange={(e) => setFormData({ ...formData, clearanceRequired: e.target.checked })}
                  className="rounded"
                />
                <span className="text-sm font-medium">Clearance Required</span>
              </label>
            </div>
          </Card>

          {/* Job Description */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Job Description <span className="text-red-500">*</span>
            </h3>
            <RichTextEditor
              content={formData.description}
              onChange={(content) => setFormData({ ...formData, description: content })}
              placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
            />
          </Card>

          {/* Requirements */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Requirements</h3>
            <RichTextEditor
              content={formData.requirements}
              onChange={(content) => setFormData({ ...formData, requirements: content })}
              placeholder="List the required skills, qualifications, and experience..."
            />
          </Card>

          {/* Benefits */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Benefits & Perks</h3>
            <RichTextEditor
              content={formData.benefits}
              onChange={(content) => setFormData({ ...formData, benefits: content })}
              placeholder="Highlight the benefits and perks offered with this position..."
            />
          </Card>

          {/* Application Deadline */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Application Details
            </h3>
            <div>
              <label className="text-sm font-medium mb-1 block">Application Deadline</label>
              <Input
                type="date"
                value={formData.applicationDeadline}
                onChange={(e) => setFormData({ ...formData, applicationDeadline: e.target.value })}
              />
            </div>
          </Card>
        </form>
      ) : (
        <>
          {/* Job Info */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold">{jobData.jobTitle}</h3>
                <Badge variant={jobData.active !== false ? "default" : "secondary"}>
                  {jobData.active !== false ? "Active" : "Inactive"}
                </Badge>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {jobData.industry && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Industry</label>
                  <p className="text-foreground font-medium">{jobData.industry}</p>
                </div>
              )}
              {jobData.jobType && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Job Type</label>
                  <p className="text-foreground font-medium">{jobData.jobType}</p>
                </div>
              )}
              {(jobData.city || jobData.state || jobData.zipCode) && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Location</label>
                  <p className="text-foreground font-medium">
                    {[jobData.city, jobData.state, jobData.zipCode].filter(Boolean).join(", ")}
                    {jobData.jobPreference && ` (${jobData.jobPreference})`}
                  </p>
                </div>
              )}
              {(jobData.salaryMin || jobData.salaryMax) && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Salary Range</label>
                  <p className="text-foreground font-medium">
                    {jobData.salaryMin && jobData.salaryMax
                      ? `$${jobData.salaryMin.toLocaleString()} - $${jobData.salaryMax.toLocaleString()} USD`
                      : jobData.salaryMin
                        ? `$${jobData.salaryMin.toLocaleString()}+ USD`
                        : jobData.salaryMax
                          ? `Up to $${jobData.salaryMax.toLocaleString()} USD`
                          : "Not specified"}
                  </p>
                </div>
              )}
              {jobData.experienceLevel && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Experience Level</label>
                  <p className="text-foreground font-medium capitalize">{jobData.experienceLevel}</p>
                </div>
              )}
              {jobData.education && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Education</label>
                  <p className="text-foreground font-medium">{jobData.education}</p>
                </div>
              )}
            </div>
          </Card>

          {/* Job Description */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Job Description
            </h3>
            {jobData.jobDescription ? (
              <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: jobData.jobDescription }} />
            ) : (
              <p className="text-muted-foreground">No description provided.</p>
            )}
          </Card>

          {/* Requirements */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Requirements</h3>
            {jobData.requirements ? (
              <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: jobData.requirements }} />
            ) : (
              <p className="text-muted-foreground">No requirements specified.</p>
            )}
          </Card>

          {/* Benefits */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Benefits & Perks</h3>
            {jobData.benefits ? (
              <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: jobData.benefits }} />
            ) : (
              <p className="text-muted-foreground">No benefits specified.</p>
            )}
          </Card>
        </>
      )}
    </div>
  );
}
