"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  Building2,
  MapPin,
  Sparkles,
  Edit,
  Plus,
  X,
  Save,
  Camera,
  Linkedin,
  Github,
  Twitter,
  CheckCircle2,
  Upload,
  Download,
  FileCheck,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/dashboard/progress-bar";
import { TypingText } from "@/components/ui/typing-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IdealJobsSection } from "@/components/dashboard/ideal-jobs-section";
import {
  getApplicantProfile,
  updateApplicantProfile,
  addSkill,
  deleteSkill,
  addEducation,
  updateEducation,
  deleteEducation,
  addExperience,
  updateExperience,
  deleteExperience,
} from "@/lib/api/applicant-api";
import type {
  ApplicantUserDTO,
  Skill as SkillDTO,
  Education as EducationDTO,
  Experience as ExperienceDTO,
} from "@/lib/api/applicant-api";
import { authStorage } from "@/lib/auth/cookie-storage";

type SectionStatus = {
  type: "success" | "error";
  message: string;
};

type SkillItem = {
  id: number;
  name: string;
};

type EducationItem = {
  id: number;
  degree: string;
  school: string;
  year: string;
  gpa: string;
  startDate: string;
  isNew?: boolean;
};

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  isNew?: boolean;
};

interface ProfilePageProps {
  fromResume?: boolean;
  fromManual?: boolean;
}

export function ProfilePage({ fromResume = false, fromManual = false }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const [profileComplete, setProfileComplete] = useState(45);
  const [isLoading, setIsLoading] = useState(true);
  const [resume, setResume] = useState<string | null>(null);
  const [pendingResume, setPendingResume] = useState<string | null>(null);
  const [savingSection, setSavingSection] = useState<string | null>(null);
  const [sectionStatus, setSectionStatus] = useState<
    Record<string, SectionStatus | null>
  >({});
  // Store full profile data from API for complete payloads
  const [fullProfileData, setFullProfileData] = useState<ApplicantUserDTO | null>(null);
  const [isSkillProcessing, setIsSkillProcessing] = useState(false);
  const [educationSavingId, setEducationSavingId] = useState<number | null>(null);
  const [experienceSavingId, setExperienceSavingId] = useState<number | null>(null);

  // Profile data state
  const [profileData, setProfileData] = useState({
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      profilePicture: null as string | null,
    },
    about: {
      summary: "",
    },
    skills: [] as SkillItem[],
    education: [] as EducationItem[],
    experience: [] as ExperienceItem[],
    certifications: [] as Array<{
      id: number;
      name: string;
      issuer: string;
      date: string;
    }>,
    publications: [],
    idealJobs: [] as string[],
    idealCompanies: [] as string[],
    social: {
      linkedin: "",
      github: "",
      twitter: "",
    },
  });

  // Fetch profile data from API
  useEffect(() => {
    const fetchProfile = async () => {
      if (!authStorage.isAuthenticated()) {
        setIsLoading(false);
        return;
      }

      try {
        const apiProfile = await getApplicantProfile();
        if (apiProfile) {
          // Store full profile data for complete payloads
          setFullProfileData(apiProfile);
          
          // Map API data to component state
          setProfileData({
            personal: {
              firstName: apiProfile.firstName || "",
              lastName: apiProfile.lastName || "",
              email: apiProfile.email || "",
              phone: apiProfile.mobileNumber || "",
              addressLine1: apiProfile.addressLine1 || "",
              addressLine2: apiProfile.addressLine2 || "",
              city: apiProfile.city || "",
              state: apiProfile.state || "",
              zip: apiProfile.zip || "",
              profilePicture: apiProfile.profilePicture || null,
            },
            about: {
              summary: apiProfile.summary || "",
            },
            skills:
              apiProfile.skills?.map((skill, index) =>
                normalizeSkillItem(skill, index + 1)
              ) || [],
            education:
              apiProfile.education?.map((edu, index) =>
                normalizeEducationItem(edu, index + 1)
              ) || [],
            experience:
              apiProfile.experience?.map((exp, index) =>
                normalizeExperienceItem(exp, index + 1)
              ) || [],
            certifications: [],
            publications: [],
            idealJobs: [],
            idealCompanies: [],
            social: {
              linkedin: apiProfile.linkedin || "",
              github: apiProfile.github || "",
              twitter: apiProfile.twitter || "",
            },
          });

          // Calculate profile completion
          let completion = 0;
          if (apiProfile.firstName && apiProfile.lastName) completion += 10;
          if (apiProfile.email) completion += 10;
          if (apiProfile.mobileNumber) completion += 5;
          const hasAddress = Boolean(
            apiProfile.addressLine1 ||
              apiProfile.addressLine2 ||
              apiProfile.city ||
              apiProfile.state ||
              apiProfile.zip
          );
          if (hasAddress) completion += 5;
          if (apiProfile.summary) completion += 10;
          if (apiProfile.skills && apiProfile.skills.length > 0) completion += 15;
          if (apiProfile.education && apiProfile.education.length > 0) completion += 15;
          if (apiProfile.experience && apiProfile.experience.length > 0) completion += 20;
          if (apiProfile.profilePicture) completion += 10;
              setProfileComplete(completion);
              
              // Set resume from API
          setResume(apiProfile.resume || null);
          setPendingResume(null);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();

    // Also handle fromResume/fromManual flags for completion animation
    if (fromResume) {
      setTimeout(() => {
        setProfileComplete((prev) => Math.max(prev, 65));
      }, 1000);
    } else if (fromManual) {
      setTimeout(() => {
        setProfileComplete((prev) => Math.max(prev, 70));
      }, 500);
    }
  }, [fromResume, fromManual]);

  const tabs = [
    { id: "personal", label: "Personal", icon: User },
    { id: "about", label: "About", icon: FileText },
    { id: "resume", label: "Resume", icon: FileCheck },
    { id: "skills", label: "Skills", icon: Sparkles },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "publications", label: "Publications", icon: FileText },
    { id: "preferences", label: "Preferences", icon: Building2 },
    { id: "social", label: "Social", icon: Linkedin },
  ];

  const getTrimmedValue = (value?: string | null) =>
    typeof value === "string" ? value.trim() : "";

  const stripDataUrl = (value?: string | null) => {
    if (!value) return null;
    if (value.startsWith("data:")) {
      const [, base64] = value.split(",");
      return base64 || null;
    }
    return value;
  };

  const getAddressDisplay = () => {
    const parts = [
      profileData.personal.addressLine1,
      profileData.personal.addressLine2,
      [profileData.personal.city, profileData.personal.state]
        .filter(Boolean)
        .join(", "),
      profileData.personal.zip,
    ]
      .map((part) => (part || "").trim())
      .filter((part) => part.length > 0);

    return parts.join(" • ");
  };

  const normalizeSkillItem = (
    skill: SkillDTO | undefined,
    fallbackId: number
  ): SkillItem => ({
    id: skill?.id ?? fallbackId,
    name: skill?.name ?? "",
  });

  const normalizeEducationItem = (
    education: EducationDTO | undefined,
    fallbackId: number
  ): EducationItem => {
    const formatDate = (date: string | undefined | null): string => {
      if (!date) return "";
      if (typeof date === 'string') return date;
      return String(date);
    };
    
    return {
      id: education?.id ?? fallbackId,
      degree: education?.degree ?? "",
      school: education?.institution ?? "", // Backend uses 'institution', frontend uses 'school' for UI
      year: formatDate(education?.endDate),
      gpa: education?.fieldOfStudy ?? "", // Using gpa field to store fieldOfStudy temporarily
      startDate: formatDate(education?.startDate),
      isNew: false,
    };
  };

  const normalizeExperienceItem = (
    experience: ExperienceDTO | undefined,
    fallbackId: number
  ): ExperienceItem => {
    const formatDate = (date: string | undefined | null): string => {
      if (!date) return "";
      if (typeof date === 'string') return date;
      return String(date);
    };
    
    return {
      id: experience?.id ?? fallbackId,
      title: experience?.role ?? "", // Backend uses 'role', frontend uses 'title' for UI
      company: experience?.company ?? "",
      startDate: formatDate(experience?.startDate),
      endDate: formatDate(experience?.endDate),
      description: experience?.description ?? "",
      isNew: false,
    };
  };

  // Build complete ApplicantUserDTO payload with all current data
  const buildCompletePayload = (
    updates: Partial<ApplicantUserDTO>
  ): ApplicantUserDTO => {
    const base = fullProfileData || {};
    const hasResumeUpdate = Object.prototype.hasOwnProperty.call(
      updates,
      "resume"
    );
    const hasSummaryUpdate = Object.prototype.hasOwnProperty.call(
      updates,
      "summary"
    );

    const resolvedResume = hasResumeUpdate
      ? stripDataUrl(updates.resume)
      : stripDataUrl(resume || base.resume || null);

    const resolvedSummary = hasSummaryUpdate
      ? (updates.summary ?? "").trim()
      : profileData.about.summary?.trim() || base.summary || "";

    return {
      ...base,
      ...updates,
      resume: resolvedResume,
      summary: resolvedSummary,
    };
  };

  const handleSectionSave = async (
    sectionId: string,
    payload: Partial<ApplicantUserDTO>,
    successMessage: string
  ): Promise<boolean> => {
    if (!authStorage.isAuthenticated()) {
      setSectionStatus((prev) => ({
        ...prev,
        [sectionId]: {
          type: "error",
          message: "Please sign in to update your profile.",
        },
      }));
      return false;
    }

    setSavingSection(sectionId);
    setSectionStatus((prev) => ({ ...prev, [sectionId]: null }));

    try {
      // Build complete payload with all data
      const completePayload = buildCompletePayload(payload);
      
      // Log what we're sending to backend
      console.log(`[${sectionId}] Sending complete payload to backend:`, {
        ...completePayload,
        resume: completePayload.resume ? `${completePayload.resume.substring(0, 50)}... (base64)` : null,
      });
      
      await updateApplicantProfile(completePayload);
      
      // Update full profile data after successful save
      setFullProfileData((prev) => ({ ...prev, ...completePayload }));
      
      setSectionStatus((prev) => ({
        ...prev,
        [sectionId]: { type: "success", message: successMessage },
      }));
      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to save changes. Please try again.";
      setSectionStatus((prev) => ({
        ...prev,
        [sectionId]: { type: "error", message },
      }));
      return false;
    } finally {
      setSavingSection(null);
    }
  };

  const savePersonalInfo = () => {
    return handleSectionSave(
      "personal",
      {
        firstName: getTrimmedValue(profileData.personal.firstName),
        lastName: getTrimmedValue(profileData.personal.lastName),
        email: getTrimmedValue(profileData.personal.email),
        mobileNumber: getTrimmedValue(profileData.personal.phone),
        profilePicture: profileData.personal.profilePicture || null,
        addressLine1: getTrimmedValue(profileData.personal.addressLine1),
        addressLine2: getTrimmedValue(profileData.personal.addressLine2),
        city: getTrimmedValue(profileData.personal.city),
        state: getTrimmedValue(profileData.personal.state),
        zip: getTrimmedValue(profileData.personal.zip),
      },
      "Personal information updated successfully."
    );
  };

  const saveAboutInfo = () =>
    handleSectionSave(
      "about",
      {
        summary: profileData.about.summary?.trim() || "",
      },
      "Professional summary updated successfully."
    );

  const saveSocialLinks = () =>
    handleSectionSave(
      "social",
      {
        linkedin: getTrimmedValue(profileData.social.linkedin),
        github: getTrimmedValue(profileData.social.github),
        twitter: getTrimmedValue(profileData.social.twitter),
      },
      "Social links updated successfully."
    );

  const saveResumeInfo = async (): Promise<boolean> => {
    const resumeToSave = pendingResume ?? resume;
    if (!resumeToSave) {
      setSectionStatus((prev) => ({
        ...prev,
        resume: {
          type: "error",
          message: "Please upload a resume before saving.",
        },
      }));
      return false;
    }

    const success = await handleSectionSave(
      "resume",
      { resume: resumeToSave },
      "Resume updated successfully."
    );

    if (success) {
      setResume(resumeToSave);
      setPendingResume(null);
    }

    return success;
  };

  const deleteResumeInfo = async (): Promise<boolean> => {
    const success = await handleSectionSave(
      "resume",
      { resume: null },
      "Resume removed successfully."
    );

    if (success) {
      setResume(null);
      setPendingResume(null);
    }

    return success;
  };

  const handleAddSkill = async (skillName: string) => {
    const trimmedName = skillName.trim();
    if (!trimmedName) {
      return false;
    }
    if (
      profileData.skills.some(
        (skill) => skill.name.toLowerCase() === trimmedName.toLowerCase()
      )
    ) {
      setSectionStatus((prev) => ({
        ...prev,
        skills: {
          type: "error",
          message: "This skill is already added.",
        },
      }));
      return false;
    }
    if (!authStorage.isAuthenticated()) {
      setSectionStatus((prev) => ({
        ...prev,
        skills: {
          type: "error",
          message: "Please sign in to update your skills.",
        },
      }));
      return false;
    }

    setIsSkillProcessing(true);
    setSectionStatus((prev) => ({ ...prev, skills: null }));

    try {
      const createdSkill = await addSkill({ name: trimmedName });
      const normalizedSkill = normalizeSkillItem(
        createdSkill,
        Date.now()
      );
      setProfileData((prev) => ({
        ...prev,
        skills: [...prev.skills, normalizedSkill],
      }));
      setSectionStatus((prev) => ({
        ...prev,
        skills: { type: "success", message: "Skill added successfully." },
      }));
      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to add skill. Please try again.";
      setSectionStatus((prev) => ({
        ...prev,
        skills: { type: "error", message },
      }));
      return false;
    } finally {
      setIsSkillProcessing(false);
    }
  };

  const handleRemoveSkill = async (skillId: number) => {
    const targetSkill = profileData.skills.find(
      (skill) => skill.id === skillId
    );
    if (!targetSkill) {
      return false;
    }

    if (!authStorage.isAuthenticated()) {
      setSectionStatus((prev) => ({
        ...prev,
        skills: {
          type: "error",
          message: "Please sign in to update your skills.",
        },
      }));
      return false;
    }

    setIsSkillProcessing(true);
    setSectionStatus((prev) => ({ ...prev, skills: null }));

    try {
      await deleteSkill(skillId);
      setProfileData((prev) => ({
        ...prev,
        skills: prev.skills.filter((skill) => skill.id !== skillId),
      }));
      setSectionStatus((prev) => ({
        ...prev,
        skills: { type: "success", message: "Skill removed successfully." },
      }));
      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to remove skill. Please try again.";
      setSectionStatus((prev) => ({
        ...prev,
        skills: { type: "error", message },
      }));
      return false;
    } finally {
      setIsSkillProcessing(false);
    }
  };

  const addEducationEntry = () => {
    setProfileData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          degree: "",
          school: "",
          year: "",
          gpa: "", // This field is used for fieldOfStudy in the UI
          startDate: "",
          isNew: true,
        },
      ],
    }));
  };

  const educationPayloadFromEntry = (entry: EducationItem) => ({
    degree: getTrimmedValue(entry.degree) || undefined,
    institution: getTrimmedValue(entry.school) || undefined, // Frontend 'school' maps to backend 'institution'
    fieldOfStudy: getTrimmedValue(entry.gpa) || undefined, // Using gpa field to store fieldOfStudy
    startDate: getTrimmedValue(entry.startDate) || undefined,
    endDate: getTrimmedValue(entry.year) || undefined,
  });

  const saveEducationEntry = async (entryId: number) => {
    const entry = profileData.education.find((edu) => edu.id === entryId);
    if (!entry) {
      return false;
    }
    if (!authStorage.isAuthenticated()) {
      setSectionStatus((prev) => ({
        ...prev,
        education: {
          type: "error",
          message: "Please sign in to update education details.",
        },
      }));
      return false;
    }

    setEducationSavingId(entryId);
    setSectionStatus((prev) => ({ ...prev, education: null }));

    try {
      const payload = educationPayloadFromEntry(entry);
      const result = entry.isNew
        ? await addEducation(payload)
        : await updateEducation(entryId, payload);

      const normalized = normalizeEducationItem(result, entryId);
      setProfileData((prev) => ({
        ...prev,
        education: prev.education.map((edu) =>
          edu.id === entryId ? { ...normalized, isNew: false } : edu
        ),
      }));
      setSectionStatus((prev) => ({
        ...prev,
        education: { type: "success", message: "Education saved." },
      }));
      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to save education. Please try again.";
      setSectionStatus((prev) => ({
        ...prev,
        education: { type: "error", message },
      }));
      return false;
    } finally {
      setEducationSavingId(null);
    }
  };

  const removeEducationEntry = async (entryId: number) => {
    const entry = profileData.education.find((edu) => edu.id === entryId);
    if (!entry) {
      return false;
    }

    if (entry.isNew) {
      setProfileData((prev) => ({
        ...prev,
        education: prev.education.filter((edu) => edu.id !== entryId),
      }));
      return true;
    }

    if (!authStorage.isAuthenticated()) {
      setSectionStatus((prev) => ({
        ...prev,
        education: {
          type: "error",
          message: "Please sign in to update education details.",
        },
      }));
      return false;
    }

    setEducationSavingId(entryId);
    setSectionStatus((prev) => ({ ...prev, education: null }));

    try {
      await deleteEducation(entryId);
      setProfileData((prev) => ({
        ...prev,
        education: prev.education.filter((edu) => edu.id !== entryId),
      }));
      setSectionStatus((prev) => ({
        ...prev,
        education: { type: "success", message: "Education removed." },
      }));
      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to remove education. Please try again.";
      setSectionStatus((prev) => ({
        ...prev,
        education: { type: "error", message },
      }));
      return false;
    } finally {
      setEducationSavingId(null);
    }
  };

  const addExperienceEntry = () => {
    setProfileData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          isNew: true,
        },
      ],
    }));
  };

  const experiencePayloadFromEntry = (entry: ExperienceItem) => ({
    role: getTrimmedValue(entry.title) || undefined, // Frontend 'title' maps to backend 'role'
    company: getTrimmedValue(entry.company) || undefined,
    startDate: getTrimmedValue(entry.startDate) || undefined,
    endDate: getTrimmedValue(entry.endDate) || undefined,
    description: getTrimmedValue(entry.description) || undefined,
  });

  const saveExperienceEntry = async (entryId: number) => {
    const entry = profileData.experience.find((exp) => exp.id === entryId);
    if (!entry) {
      return false;
    }

    if (!authStorage.isAuthenticated()) {
      setSectionStatus((prev) => ({
        ...prev,
        experience: {
          type: "error",
          message: "Please sign in to update experience details.",
        },
      }));
      return false;
    }

    setExperienceSavingId(entryId);
    setSectionStatus((prev) => ({ ...prev, experience: null }));

    try {
      const payload = experiencePayloadFromEntry(entry);
      const result = entry.isNew
        ? await addExperience(payload)
        : await updateExperience(entryId, payload);

      const normalized = normalizeExperienceItem(result, entryId);
      setProfileData((prev) => ({
        ...prev,
        experience: prev.experience.map((exp) =>
          exp.id === entryId ? { ...normalized, isNew: false } : exp
        ),
      }));
      setSectionStatus((prev) => ({
        ...prev,
        experience: { type: "success", message: "Experience saved." },
      }));
      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to save experience. Please try again.";
      setSectionStatus((prev) => ({
        ...prev,
        experience: { type: "error", message },
      }));
      return false;
    } finally {
      setExperienceSavingId(null);
    }
  };

  const removeExperienceEntry = async (entryId: number) => {
    const entry = profileData.experience.find((exp) => exp.id === entryId);
    if (!entry) {
      return false;
    }

    if (entry.isNew) {
      setProfileData((prev) => ({
        ...prev,
        experience: prev.experience.filter((exp) => exp.id !== entryId),
      }));
      return true;
    }

    if (!authStorage.isAuthenticated()) {
      setSectionStatus((prev) => ({
        ...prev,
        experience: {
          type: "error",
          message: "Please sign in to update experience details.",
        },
      }));
      return false;
    }

    setExperienceSavingId(entryId);
    setSectionStatus((prev) => ({ ...prev, experience: null }));

    try {
      await deleteExperience(entryId);
      setProfileData((prev) => ({
        ...prev,
        experience: prev.experience.filter((exp) => exp.id !== entryId),
      }));
      setSectionStatus((prev) => ({
        ...prev,
        experience: { type: "success", message: "Experience removed." },
      }));
      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to remove experience. Please try again.";
      setSectionStatus((prev) => ({
        ...prev,
        experience: { type: "error", message },
      }));
      return false;
    } finally {
      setExperienceSavingId(null);
    }
  };

  const getInitials = () => {
    const first = profileData.personal.firstName?.[0] || "";
    const last = profileData.personal.lastName?.[0] || "";
    return `${first}${last}`.toUpperCase() || "U";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto"
          />
          <p className="text-muted-foreground">Loading profile...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header with Profile Picture and Progress */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AnimatePresence mode="wait">
                  {profileData.personal.profilePicture ? (
                    <motion.div
                      key={profileData.personal.profilePicture.substring(0, 100)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <AvatarImage 
                        src={profileData.personal.profilePicture} 
                        alt="Profile picture"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-picture"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-2xl font-semibold text-primary-foreground">
                        {getInitials()}
                      </AvatarFallback>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Avatar>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const input = document.getElementById("profile-picture-upload");
                  input?.click();
                }}
                className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-lg"
              >
                <Camera className="h-4 w-4" />
              </motion.button>
              <input
                type="file"
                accept="image/*"
                id="profile-picture-upload"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  // Validate file type
                  if (!file.type.startsWith("image/")) {
                    setSectionStatus((prev) => ({
                      ...prev,
                      personal: {
                        type: "error",
                        message: "Please upload an image file.",
                      },
                    }));
                    return;
                  }

                  // Validate file size (max 5MB)
                  if (file.size > 5 * 1024 * 1024) {
                    setSectionStatus((prev) => ({
                      ...prev,
                      personal: {
                        type: "error",
                        message: "Image size must be less than 5MB.",
                      },
                    }));
                    return;
                  }

                  // Read file as base64
                  const reader = new FileReader();
                  reader.onload = async (event) => {
                    const base64DataUrl = event.target?.result as string;
                    if (base64DataUrl) {
                      // Update profile data with new picture immediately for UI update
                      setProfileData((prev) => ({
                        ...prev,
                        personal: {
                          ...prev.personal,
                          profilePicture: base64DataUrl,
                        },
                      }));
                      // Auto-save the profile picture using the same API
                      const success = await handleSectionSave(
                        "personal",
                        {
                          firstName: getTrimmedValue(profileData.personal.firstName),
                          lastName: getTrimmedValue(profileData.personal.lastName),
                          email: getTrimmedValue(profileData.personal.email),
                          mobileNumber: getTrimmedValue(profileData.personal.phone),
                          profilePicture: base64DataUrl,
                          addressLine1: getTrimmedValue(profileData.personal.addressLine1),
                          addressLine2: getTrimmedValue(profileData.personal.addressLine2),
                          city: getTrimmedValue(profileData.personal.city),
                          state: getTrimmedValue(profileData.personal.state),
                          zip: getTrimmedValue(profileData.personal.zip),
                        },
                        "Profile picture updated successfully."
                      );
                      // If save failed, revert the profile picture
                      if (!success) {
                        setProfileData((prev) => ({
                          ...prev,
                          personal: {
                            ...prev.personal,
                            profilePicture: fullProfileData?.profilePicture || null,
                          },
                        }));
                      }
                    }
                  };
                  reader.onerror = () => {
                    setSectionStatus((prev) => ({
                      ...prev,
                      personal: {
                        type: "error",
                        message: "Failed to read the image file. Please try again.",
                      },
                    }));
                  };
                  reader.readAsDataURL(file);
                  // Reset input
                  e.target.value = "";
                }}
              />
            </div>
            <div>
              <TypingText
                text={`${profileData.personal.firstName} ${profileData.personal.lastName}`}
                className="text-2xl font-semibold"
                speed={50}
              />
              <p className="text-muted-foreground">{profileData.personal.email}</p>
              <div className="mt-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {getAddressDisplay() || "Address not provided"}
                </span>
              </div>
            </div>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)}>
            <Edit className="mr-2 h-4 w-4" />
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>

        {/* Progress Bar */}
        <ProgressBar
          progress={profileComplete}
          label="Profile Completion"
          showDetails
        />
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto border-b border-border/60 pb-2">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }
              `}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </motion.button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "personal" && (
            <PersonalInfoTab
              data={profileData.personal}
              isEditing={isEditing}
              onChange={(data: typeof profileData.personal) =>
                setProfileData({ ...profileData, personal: data })
              }
              onEnableEdit={() => setIsEditing(true)}
              onSave={savePersonalInfo}
              isSaving={savingSection === "personal"}
              statusMessage={sectionStatus.personal ?? null}
            />
          )}
          {activeTab === "about" && (
            <AboutTab
              data={profileData.about}
              isEditing={isEditing}
              onChange={(data: typeof profileData.about) => setProfileData({ ...profileData, about: data })}
              onEnableEdit={() => setIsEditing(true)}
              onSave={saveAboutInfo}
              isSaving={savingSection === "about"}
              statusMessage={sectionStatus.about ?? null}
            />
          )}
          {activeTab === "resume" && (
            <ResumeTab
              resume={resume}
              pendingResume={pendingResume}
              onPendingResumeChange={setPendingResume}
              onSave={saveResumeInfo}
              onDelete={deleteResumeInfo}
              isSaving={savingSection === "resume"}
              statusMessage={sectionStatus.resume ?? null}
            />
          )}
          {activeTab === "skills" && (
            <SkillsTab
              skills={profileData.skills}
              isEditing={isEditing}
              onAddSkill={handleAddSkill}
              onRemoveSkill={handleRemoveSkill}
              isProcessing={isSkillProcessing}
              statusMessage={sectionStatus.skills ?? null}
              onEnableEdit={() => setIsEditing(true)}
            />
          )}
          {activeTab === "education" && (
            <EducationTab
              education={profileData.education}
              isEditing={isEditing}
              onChange={(education: typeof profileData.education) =>
                setProfileData({ ...profileData, education })
              }
              onAddEntry={addEducationEntry}
              onSaveEntry={saveEducationEntry}
              onRemoveEntry={removeEducationEntry}
              savingId={educationSavingId}
              statusMessage={sectionStatus.education ?? null}
              onEnableEdit={() => setIsEditing(true)}
            />
          )}
          {activeTab === "experience" && (
            <ExperienceTab
              experience={profileData.experience}
              isEditing={isEditing}
              onChange={(experience: typeof profileData.experience) =>
                setProfileData({ ...profileData, experience })
              }
              onAddEntry={addExperienceEntry}
              onSaveEntry={saveExperienceEntry}
              onRemoveEntry={removeExperienceEntry}
              savingId={experienceSavingId}
              statusMessage={sectionStatus.experience ?? null}
              onEnableEdit={() => setIsEditing(true)}
            />
          )}
          {activeTab === "certifications" && (
            <CertificationsTab
              certifications={profileData.certifications}
              isEditing={isEditing}
              onChange={(certifications: typeof profileData.certifications) =>
                setProfileData({ ...profileData, certifications })
              }
              onEnableEdit={() => setIsEditing(true)}
            />
          )}
          {activeTab === "publications" && (
            <PublicationsTab
              publications={profileData.publications}
              isEditing={isEditing}
              onChange={(publications: typeof profileData.publications) =>
                setProfileData({ ...profileData, publications })
              }
              onEnableEdit={() => setIsEditing(true)}
            />
          )}
          {activeTab === "preferences" && (
            <PreferencesTab
              idealJobs={profileData.idealJobs}
              idealCompanies={profileData.idealCompanies}
              isEditing={isEditing}
              onChange={(data: { idealJobs: string[]; idealCompanies: string[] }) =>
                setProfileData({
                  ...profileData,
                  idealJobs: data.idealJobs,
                  idealCompanies: data.idealCompanies,
                })
              }
              onEnableEdit={() => setIsEditing(true)}
            />
          )}
          {activeTab === "social" && (
            <SocialTab
              social={profileData.social}
              isEditing={isEditing}
              onChange={(social: typeof profileData.social) => setProfileData({ ...profileData, social })}
              onSave={saveSocialLinks}
              isSaving={savingSection === "social"}
              statusMessage={sectionStatus.social ?? null}
              onEnableEdit={() => setIsEditing(true)}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Ideal Jobs Section - Show at bottom if preferences are set */}
      {(profileData.idealJobs.length > 0 || profileData.idealCompanies.length > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <IdealJobsSection
            idealJobs={profileData.idealJobs}
            idealCompanies={profileData.idealCompanies}
          />
        </motion.div>
      )}

      {/* Recommendation Prompt - Show if profile is complete but recommendations not done */}
      {profileComplete >= 60 && profileData.idealJobs.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Ready for AI Recommendations?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tell us about your ideal jobs, companies, and work preferences. Our AI
                  will match you with perfect opportunities and show you relevant openings.
                </p>
                <Button
                  onClick={() => {
                    // Navigate to recommendations
                    window.location.href = "/applicant/dashboard/recommendations";
                  }}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get AI Recommendations
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

// Tab Components
function PersonalInfoTab({
  data,
  isEditing,
  onChange,
  onSave,
  isSaving,
  statusMessage,
}: any) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">First Name</label>
            {isEditing ? (
              <Input
                value={data.firstName}
                onChange={(e) => onChange({ ...data, firstName: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.firstName}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Last Name</label>
            {isEditing ? (
              <Input
                value={data.lastName}
                onChange={(e) => onChange({ ...data, lastName: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.lastName}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            {isEditing ? (
              <Input
                type="email"
                value={data.email}
                onChange={(e) => onChange({ ...data, email: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.email}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Phone</label>
            {isEditing ? (
              <Input
                value={data.phone}
                onChange={(e) => onChange({ ...data, phone: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.phone}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">Address Line 1</label>
            {isEditing ? (
              <Input
                value={data.addressLine1}
                onChange={(e) => onChange({ ...data, addressLine1: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.addressLine1 || "—"}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">Address Line 2 (Optional)</label>
            {isEditing ? (
              <Input
                value={data.addressLine2}
                onChange={(e) => onChange({ ...data, addressLine2: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.addressLine2 || "—"}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">City</label>
            {isEditing ? (
              <Input
                value={data.city}
                onChange={(e) => onChange({ ...data, city: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.city || "—"}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">State / Province</label>
            {isEditing ? (
              <Input
                value={data.state}
                onChange={(e) => onChange({ ...data, state: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.state || "—"}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">ZIP / Postal Code</label>
            {isEditing ? (
              <Input
                value={data.zip}
                onChange={(e) => onChange({ ...data, zip: e.target.value })}
              />
            ) : (
              <p className="text-muted-foreground">{data.zip || "—"}</p>
            )}
          </div>
        </div>
        {statusMessage && (
          <p
            className={`text-sm ${
              statusMessage.type === "error"
                ? "text-destructive"
                : "text-green-600 dark:text-green-400"
            }`}
          >
            {statusMessage.message}
          </p>
        )}
        {isEditing && (
          <Button className="w-full" onClick={onSave} disabled={isSaving}>
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        )}
      </div>
    </Card>
  );
}

function AboutTab({
  data,
  isEditing,
  onChange,
  onEnableEdit,
  onSave,
  isSaving,
  statusMessage,
}: any) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        {!data.summary && !isEditing ? (
          <div className="text-center py-8">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No professional summary added yet</p>
            <Button onClick={() => { onChange({ ...data, summary: "" }); onEnableEdit(); }} variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Professional Summary
            </Button>
          </div>
        ) : (
          <>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Professional Summary
              </label>
              {isEditing ? (
                <Textarea
                  value={data.summary}
                  onChange={(e) => onChange({ ...data, summary: e.target.value })}
                  rows={6}
                  placeholder="Tell us about yourself, your experience, and what makes you unique..."
                />
              ) : (
                <p className="text-muted-foreground whitespace-pre-wrap">{data.summary || "—"}</p>
              )}
            </div>
            {isEditing && (
              <div className="rounded-lg bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1">AI Enhancement Suggestion</p>
                    <p className="text-xs text-muted-foreground">
                      Consider adding specific achievements and metrics to make your summary
                      more impactful.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.type === "error"
                    ? "text-destructive"
                    : "text-green-600 dark:text-green-400"
                }`}
              >
                {statusMessage.message}
              </p>
            )}
            {isEditing && (
              <Button className="w-full" onClick={onSave} disabled={isSaving}>
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            )}
          </>
        )}
      </div>
    </Card>
  );
}

function SkillsTab({
  skills,
  isEditing,
  onAddSkill,
  onRemoveSkill,
  isProcessing,
  statusMessage,
  onEnableEdit,
}: any) {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = async () => {
    const trimmedInput = newSkill.trim();
    if (!trimmedInput) {
      console.log("No skill input to add");
      return;
    }
    
    console.log("Adding skills from input:", trimmedInput);
    
    // Parse multiple skills separated by commas or newlines
    const skillNames = trimmedInput
      .split(/[,\n]/)
      .map(s => s.trim())
      .filter(s => s.length > 0);
    
    console.log("Parsed skill names:", skillNames);
    
    if (skillNames.length === 0) {
      console.log("No valid skill names after parsing");
      return;
    }
    
    // Add each skill one by one
    let successCount = 0;
    let failedCount = 0;
    
    try {
      for (const skillName of skillNames) {
        console.log(`Attempting to add skill: "${skillName}"`);
        try {
          const success = await onAddSkill(skillName);
          console.log(`Skill "${skillName}" add result:`, success);
          if (success) {
            successCount++;
          } else {
            failedCount++;
          }
        } catch (error) {
          console.error(`Failed to add skill "${skillName}":`, error);
          failedCount++;
        }
      }
      
      console.log(`Added ${successCount} skills, ${failedCount} failed`);
      
      // Clear input if at least one skill was added successfully
      if (successCount > 0) {
        setNewSkill("");
      }
    } catch (error) {
      console.error("Error in handleAddSkill:", error);
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {skills.length === 0 && !isEditing ? (
          <div className="text-center py-8">
            <Sparkles className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No skills added yet</p>
            <Button
              onClick={() => {
                onEnableEdit();
              }}
              variant="outline"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Skill
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill: SkillItem, index: number) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {skill.name}
                  {isEditing && (
                    <button
                      onClick={() => onRemoveSkill(skill.id)}
                      disabled={isProcessing}
                      className="hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
            {(isEditing || skills.length === 0) && (
              <div className="space-y-2">
                <div className="flex gap-2 items-start">
                  <Textarea
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                      // Ctrl+Enter or Cmd+Enter to add skills
                      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                        e.preventDefault();
                        handleAddSkill();
                      }
                    }}
                    placeholder="Add skills (one per line or comma-separated)"
                    className="flex-1 min-h-[80px] resize-none"
                    rows={3}
                  />
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddSkill();
                    }}
                    disabled={isProcessing || !newSkill.trim()}
                    className="mt-0"
                  >
                    {isProcessing ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                        Adding...
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Add multiple skills at once: separate by commas or put each on a new line. Press Ctrl+Enter (or Cmd+Enter on Mac) to add.
                </p>
              </div>
            )}
            {isEditing && (
              <div className="rounded-lg bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1">AI Skill Recommendations</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Docker", "Kubernetes", "GraphQL", "MongoDB"].map((skill) => (
                        <button
                          key={skill}
                          onClick={() => {
                            onAddSkill(skill);
                          }}
                          disabled={
                            isProcessing ||
                            skills.some(
                              (existing: SkillItem) =>
                                existing.name.toLowerCase() === skill.toLowerCase()
                            )
                          }
                          className="rounded-full border border-primary/40 bg-background px-3 py-1 text-xs hover:bg-primary/10"
                        >
                          + {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.type === "error"
                    ? "text-destructive"
                    : "text-green-600 dark:text-green-400"
                }`}
              >
                {statusMessage.message}
              </p>
            )}
          </>
        )}
      </div>
    </Card>
  );
}

function EducationTab({
  education,
  isEditing,
  onChange,
  onAddEntry,
  onSaveEntry,
  onRemoveEntry,
  savingId,
  statusMessage,
  onEnableEdit,
}: any) {
  const updateEducationField = (id: number, field: string, value: string) => {
    onChange(
      education.map((edu: any) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {education.length === 0 && !isEditing ? (
          <div className="text-center py-8">
            <GraduationCap className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No education entries added yet</p>
            <Button
              onClick={() => {
                onAddEntry();
                onEnableEdit();
              }}
              variant="outline"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Education
            </Button>
          </div>
        ) : (
          <>
            {education.map((edu: any, index: number) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border border-border/60 p-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Degree</label>
                {isEditing ? (
                  <Input
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducationField(edu.id, "degree", e.target.value)
                    }
                  />
                ) : (
                  <p className="text-muted-foreground">{edu.degree}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">School/Institution</label>
                {isEditing ? (
                  <Input
                    value={edu.school}
                    onChange={(e) =>
                      updateEducationField(edu.id, "school", e.target.value)
                    }
                  />
                ) : (
                  <p className="text-muted-foreground">{edu.school}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Start Date</label>
                {isEditing ? (
                  <Input
                    type="date"
                    value={edu.startDate || ""}
                    onChange={(e) =>
                      updateEducationField(edu.id, "startDate", e.target.value)
                    }
                  />
                ) : (
                  <p className="text-muted-foreground">{edu.startDate || "—"}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">End Date / Year</label>
                {isEditing ? (
                  <Input
                    type="date"
                    value={edu.year || ""}
                    onChange={(e) =>
                      updateEducationField(edu.id, "year", e.target.value)
                    }
                  />
                ) : (
                  <p className="text-muted-foreground">{edu.year || "—"}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Field of Study</label>
                {isEditing ? (
                  <Input
                    value={edu.gpa}
                    onChange={(e) =>
                      updateEducationField(edu.id, "gpa", e.target.value)
                    }
                    placeholder="e.g., Computer Science, Business Administration"
                  />
                ) : (
                  <p className="text-muted-foreground">{edu.gpa || "—"}</p>
                )}
              </div>
            </div>
            {isEditing && (
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  size="sm"
                  onClick={() => onSaveEntry(edu.id)}
                  disabled={savingId === edu.id}
                >
                  <Save className="mr-2 h-4 w-4" />
                  {savingId === edu.id ? "Saving..." : "Save Entry"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive"
                  onClick={() => onRemoveEntry(edu.id)}
                  disabled={savingId === edu.id}
                >
                  <X className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </div>
            )}
          </motion.div>
            ))}
            {(isEditing || education.length === 0) && (
              <Button variant="outline" onClick={onAddEntry} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Education
              </Button>
            )}
            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.type === "error"
                    ? "text-destructive"
                    : "text-green-600 dark:text-green-400"
                }`}
              >
                {statusMessage.message}
              </p>
            )}
          </>
        )}
      </div>
    </Card>
  );
}

function ExperienceTab({
  experience,
  isEditing,
  onChange,
  onAddEntry,
  onSaveEntry,
  onRemoveEntry,
  savingId,
  statusMessage,
  onEnableEdit,
}: any) {
  const updateExperienceField = (id: number, field: string, value: string) => {
    onChange(
      experience.map((exp: any) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {experience.length === 0 && !isEditing ? (
          <div className="text-center py-8">
            <Briefcase className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No work experience added yet</p>
            <Button
              onClick={() => {
                onAddEntry();
                onEnableEdit();
              }}
              variant="outline"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Experience
            </Button>
          </div>
        ) : (
          <>
            {experience.map((exp: any, index: number) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-border/60 p-4"
              >
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Job Title</label>
                      {isEditing ? (
                        <Input
                          value={exp.title}
                          onChange={(e) =>
                            updateExperienceField(exp.id, "title", e.target.value)
                          }
                        />
                      ) : (
                        <p className="font-medium">{exp.title}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Company</label>
                      {isEditing ? (
                        <Input
                          value={exp.company}
                          onChange={(e) =>
                            updateExperienceField(exp.id, "company", e.target.value)
                          }
                        />
                      ) : (
                        <p className="text-muted-foreground">{exp.company}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Start Date</label>
                      {isEditing ? (
                        <Input
                          value={exp.startDate}
                          onChange={(e) =>
                            updateExperienceField(exp.id, "startDate", e.target.value)
                          }
                        />
                      ) : (
                        <p className="text-muted-foreground">{exp.startDate}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">End Date</label>
                      {isEditing ? (
                        <Input
                          value={exp.endDate}
                          onChange={(e) =>
                            updateExperienceField(exp.id, "endDate", e.target.value)
                          }
                          placeholder="Present"
                        />
                      ) : (
                        <p className="text-muted-foreground">{exp.endDate}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Description</label>
                    {isEditing ? (
                      <Textarea
                        value={exp.description}
                        onChange={(e) =>
                          updateExperienceField(exp.id, "description", e.target.value)
                        }
                        rows={4}
                      />
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-wrap">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
                {isEditing && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      onClick={() => onSaveEntry(exp.id)}
                      disabled={savingId === exp.id}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      {savingId === exp.id ? "Saving..." : "Save Entry"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                      onClick={() => onRemoveEntry(exp.id)}
                      disabled={savingId === exp.id}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
            {(isEditing || experience.length === 0) && (
              <Button variant="outline" onClick={onAddEntry} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Experience
              </Button>
            )}
            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.type === "error"
                    ? "text-destructive"
                    : "text-green-600 dark:text-green-400"
                }`}
              >
                {statusMessage.message}
              </p>
            )}
          </>
        )}
      </div>
    </Card>
  );
}

function CertificationsTab({ certifications, isEditing, onChange, onEnableEdit }: any) {
  const addCertification = () => {
    onChange([
      ...certifications,
      {
        id: Date.now(),
        name: "",
        issuer: "",
        date: "",
      },
    ]);
  };

  const updateCertification = (id: number, field: string, value: string) => {
    onChange(
      certifications.map((cert: any) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    );
  };

  const removeCertification = (id: number) => {
    onChange(certifications.filter((cert: any) => cert.id !== id));
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {certifications.length === 0 && !isEditing ? (
          <div className="text-center py-8">
            <Award className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No certifications added yet</p>
            <Button onClick={() => { addCertification(); onEnableEdit(); }} variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Certification
            </Button>
          </div>
        ) : (
          <>
            {certifications.map((cert: any, index: number) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between rounded-lg border border-border/60 p-4"
          >
            <div className="flex-1">
              {isEditing ? (
                <div className="grid gap-4 md:grid-cols-3">
                  <Input
                    value={cert.name}
                    onChange={(e) =>
                      updateCertification(cert.id, "name", e.target.value)
                    }
                    placeholder="Certification Name"
                  />
                  <Input
                    value={cert.issuer}
                    onChange={(e) =>
                      updateCertification(cert.id, "issuer", e.target.value)
                    }
                    placeholder="Issuer"
                  />
                  <Input
                    value={cert.date}
                    onChange={(e) =>
                      updateCertification(cert.id, "date", e.target.value)
                    }
                    placeholder="Date"
                  />
                </div>
              ) : (
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              )}
            </div>
            {isEditing && (
              <Button
                variant="ghost"
                size="icon"
                className="ml-4 text-destructive"
                onClick={() => removeCertification(cert.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </motion.div>
        ))}
            {(isEditing || certifications.length === 0) && (
              <Button variant="outline" onClick={addCertification} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Certification
              </Button>
            )}
          </>
        )}
      </div>
    </Card>
  );
}

function PublicationsTab({ publications, isEditing, onChange, onEnableEdit }: any) {
  const addPublication = () => {
    onChange([
      ...publications,
      {
        id: Date.now(),
        title: "",
        publisher: "",
        date: "",
        link: "",
      },
    ]);
  };

  if (publications.length === 0 && !isEditing) {
    return (
      <Card className="p-6">
        <div className="text-center py-8">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">No publications added yet</p>
          <Button onClick={() => { addPublication(); onEnableEdit(); }} variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Your First Publication
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {publications.map((pub: any, index: number) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border border-border/60 p-4"
          >
            {isEditing ? (
              <div className="space-y-3">
                <Input
                  value={pub.title}
                  onChange={(e) =>
                    onChange(
                      publications.map((p: any) =>
                        p.id === pub.id ? { ...p, title: e.target.value } : p
                      )
                    )
                  }
                  placeholder="Publication Title"
                />
                <div className="grid gap-3 md:grid-cols-2">
                  <Input
                    value={pub.publisher}
                    onChange={(e) =>
                      onChange(
                        publications.map((p: any) =>
                          p.id === pub.id ? { ...p, publisher: e.target.value } : p
                        )
                      )
                    }
                    placeholder="Publisher"
                  />
                  <Input
                    value={pub.date}
                    onChange={(e) =>
                      onChange(
                        publications.map((p: any) =>
                          p.id === pub.id ? { ...p, date: e.target.value } : p
                        )
                      )
                    }
                    placeholder="Date"
                  />
                </div>
                <Input
                  value={pub.link}
                  onChange={(e) =>
                    onChange(
                      publications.map((p: any) =>
                        p.id === pub.id ? { ...p, link: e.target.value } : p
                      )
                    )
                  }
                  placeholder="Link (optional)"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive"
                  onClick={() =>
                    onChange(publications.filter((p: any) => p.id !== pub.id))
                  }
                >
                  <X className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </div>
            ) : (
              <div>
                <p className="font-medium">{pub.title}</p>
                <p className="text-sm text-muted-foreground">
                  {pub.publisher} · {pub.date}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Publication
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
        {(isEditing || publications.length === 0) && (
          <Button variant="outline" onClick={addPublication} className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Add Publication
          </Button>
        )}
      </div>
    </Card>
  );
}

function PreferencesTab({
  idealJobs,
  idealCompanies,
  isEditing,
  onChange,
  onEnableEdit,
}: any) {
  const [newJob, setNewJob] = useState("");
  const [newCompany, setNewCompany] = useState("");

  const addJob = () => {
    if (newJob.trim() && !idealJobs.includes(newJob.trim())) {
      onChange({
        idealJobs: [...idealJobs, newJob.trim()],
        idealCompanies,
      });
      setNewJob("");
    }
  };

  const addCompany = () => {
    if (newCompany.trim() && !idealCompanies.includes(newCompany.trim())) {
      onChange({
        idealJobs,
        idealCompanies: [...idealCompanies, newCompany.trim()],
      });
      setNewCompany("");
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <h3 className="mb-4 font-semibold">Ideal Jobs</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {idealJobs.map((job: string, index: number) => (
              <motion.div
                key={job}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {job}
                {isEditing && (
                  <button
                    onClick={() =>
                      onChange({
                        idealJobs: idealJobs.filter((j: string) => j !== job),
                        idealCompanies,
                      })
                    }
                    className="hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                value={newJob}
                onChange={(e) => setNewJob(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addJob()}
                placeholder="Add ideal job"
              />
              <Button onClick={addJob}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 font-semibold">Ideal Companies</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {idealCompanies.map((company: string, index: number) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {company}
                {isEditing && (
                  <button
                    onClick={() =>
                      onChange({
                        idealJobs,
                        idealCompanies: idealCompanies.filter(
                          (c: string) => c !== company
                        ),
                      })
                    }
                    className="hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addCompany()}
                placeholder="Add ideal company"
              />
              <Button onClick={addCompany}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function ResumeTab({
  resume,
  pendingResume,
  onPendingResumeChange,
  onSave,
  onDelete,
  isSaving,
  statusMessage,
}: {
  resume: string | null;
  pendingResume: string | null;
  onPendingResumeChange: (resume: string | null) => void;
  onSave: () => Promise<boolean>;
  onDelete: () => Promise<boolean>;
  isSaving: boolean;
  statusMessage: SectionStatus | null;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [readyMessage, setReadyMessage] = useState<string | null>(null);

  const ensureDataUrl = (value: string | null) => {
    if (!value) return null;
    return value.startsWith("data:")
      ? value
      : `data:application/pdf;base64,${value}`;
  };

  const hasSavedResume = Boolean(resume);
  const hasPendingResume = Boolean(pendingResume);

  const handleFileSelect = async (selectedFile: File) => {
    setError(null);
    setReadyMessage(null);
    onPendingResumeChange(null);

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(selectedFile.type)) {
      setError("Please upload a PDF, DOC, or DOCX file");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    // Automatically process the file when selected
    setFile(selectedFile);
    // Process immediately
    await processFile(selectedFile);
  };

  const processFile = async (fileToProcess: File) => {
    if (isProcessing || hasPendingResume) return;

    setIsProcessing(true);
    setUploadProgress(0);
    setError(null);
    setReadyMessage(null);

    const reader = new FileReader();

    reader.onerror = () => {
      setError("Failed to read the selected file. Please try again.");
      setIsProcessing(false);
      setUploadProgress(0);
    };

    reader.onload = (e) => {
      try {
        const base64DataUrl = e.target?.result as string;
        if (!base64DataUrl) {
          throw new Error("Unable to process the selected file. Please retry.");
        }
        const payload = base64DataUrl.includes(",")
          ? base64DataUrl.split(",")[1] ?? ""
          : base64DataUrl;

        if (!payload) {
          throw new Error("Unable to extract resume data from the file.");
        }

        setUploadProgress(100);
        // Set ready message FIRST to immediately hide upload area
        setReadyMessage(
          "Resume ready to save. Click the save button below to update your profile."
        );
        // Set pending resume - this will enable the save button
        onPendingResumeChange(payload);
        // Clear the file state so the UI shows the pending resume message instead of upload area
        setFile(null);
        // Reset the file input
        const fileInput = document.getElementById("resume-upload") as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to prepare resume. Please try again."
        );
        setUploadProgress(0);
      } finally {
        setIsProcessing(false);
      }
    };

    reader.readAsDataURL(fileToProcess);
  };


  const downloadResume = (value: string | null) => {
    if (!value) {
      setError("Resume file is not available for download.");
      return;
    }
    const href = ensureDataUrl(value);
    if (!href) {
      setError("Resume file is not available for download.");
      return;
    }
    const link = document.createElement("a");
    link.href = href;
    link.download = "resume.pdf";
    link.click();
  };

  const handleDeleteSaved = async () => {
    if (!resume) return;
    const confirmed = confirm("Are you sure you want to delete your saved resume?");
    if (!confirmed) return;

    const success = await onDelete();
    if (success) {
      setFile(null);
      setReadyMessage(null);
    }
  };

  const handleSaveClick = async () => {
    const success = await onSave();
    if (success) {
      setFile(null);
      setReadyMessage(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const handleDiscardPending = () => {
    onPendingResumeChange(null);
    setFile(null);
    setReadyMessage(null);
    setError(null);
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-primary" />
              Resume Management
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Upload, update, or manage your resume document
            </p>
          </div>
        </div>

        {/* Saved Resume Display */}
        {hasSavedResume && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="h-16 w-16 rounded-lg bg-primary/20 flex items-center justify-center"
                >
                  <FileText className="h-8 w-8 text-primary" />
                </motion.div>
                <div>
                  <p className="font-semibold">
                    {hasPendingResume ? "Current Resume (Unsaved changes pending)" : "Current Resume"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {hasPendingResume
                      ? "You have a new resume ready to save."
                      : "Resume uploaded and ready"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadResume(resume)}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDeleteSaved}
                  className="gap-2 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Upload Area - Hide when there's a pending resume, ready message, or processing */}
        {!hasPendingResume && !readyMessage && !isProcessing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`relative rounded-2xl border-2 border-dashed transition-all duration-300 ${
            isDragging
              ? "border-primary bg-primary/10 scale-105"
              : "border-border/60 bg-muted/20 hover:border-primary/60 hover:bg-muted/40"
          } p-12 text-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];
              if (selectedFile && !hasPendingResume && !readyMessage && !isProcessing) {
                handleFileSelect(selectedFile);
              }
            }}
            className="absolute inset-0 cursor-pointer opacity-0"
            id="resume-upload"
            disabled={isProcessing || hasPendingResume || !!readyMessage}
          />

          <motion.div
            animate={{ y: isDragging ? [-10, 10, -10] : [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Upload className="mx-auto mb-4 h-16 w-16 text-primary" />
          </motion.div>

          <h4 className="text-lg font-semibold mb-2">
            {file ? "Ready to Upload" : "Drag & Drop Your Resume"}
          </h4>
          <p className="text-muted-foreground mb-4">
            {file ? file.name : "or click to browse files from your device"}
          </p>
          <p className="text-xs text-muted-foreground">
            Supports PDF, DOC, DOCX (Max 5MB)
          </p>

          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-4"
            >
              <div className="flex items-center justify-center gap-2 rounded-lg bg-primary/10 p-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full"
                />
                <span className="text-sm font-medium">Processing resume... {uploadProgress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${uploadProgress}%` }}
                  className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
        )}

        {/* Hidden file input for when there's a pending resume */}
        {hasPendingResume && (
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];
              if (selectedFile) {
                handleFileSelect(selectedFile);
                // Clear pending resume when selecting a new file
                onPendingResumeChange(null);
                setReadyMessage(null);
              }
            }}
            className="hidden"
            id="resume-upload-pending"
            disabled={isProcessing}
          />
        )}

        {(readyMessage || hasPendingResume) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 space-y-2"
          >
            <div className="flex items-start gap-2">
              <FileText className="h-5 w-5 mt-0.5" />
              <div>
                <p className="font-medium">
                  {readyMessage || "Unsaved resume pending"}
                </p>
                <p className="text-xs">
                  Click "Save Resume" to sync this file to your profile or discard it to keep the previously saved version.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => downloadResume(pendingResume)}
                disabled={!pendingResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Preview Pending
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  const input = document.getElementById("resume-upload-pending");
                  input?.click();
                }}
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Different File
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-destructive"
                onClick={handleDiscardPending}
              >
                <X className="mr-2 h-4 w-4" />
                Discard Pending
              </Button>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 flex items-center gap-3"
            >
              <X className="h-5 w-5 text-red-600 dark:text-red-400" />
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                {error}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-2">
          <Button
            onClick={handleSaveClick}
            className="w-full md:w-auto"
            disabled={isSaving || (!hasPendingResume && !hasSavedResume)}
          >
            {isSaving ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Resume
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground">
            Upload a file above, then click save to send it to the backend.
          </p>
          {statusMessage && (
            <p
              className={`text-sm ${
                statusMessage.type === "error"
                  ? "text-destructive"
                  : "text-green-600 dark:text-green-400"
              }`}
            >
              {statusMessage.message}
            </p>
          )}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg bg-primary/5 border border-primary/20 p-4"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium mb-1">Tips for Best Results</p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                <li>Use a clear, well-formatted resume</li>
                <li>Ensure all text is readable and not scanned as an image</li>
                <li>Keep your resume up to date with latest experience</li>
                <li>You can update your resume anytime</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </Card>
  );
}

function SocialTab({
  social,
  isEditing,
  onChange,
  onSave,
  isSaving,
  statusMessage,
}: any) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="rounded-lg bg-primary/5 p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Connect Your Social Profiles</p>
              <p className="text-xs text-muted-foreground">
                Linking your profiles helps employers learn more about you and increases
                your profile visibility.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Linkedin className="h-4 w-4 text-[#0077b5]" />
              LinkedIn
            </label>
            {isEditing ? (
              <Input
                value={social.linkedin}
                onChange={(e) => onChange({ ...social, linkedin: e.target.value })}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            ) : (
              <p className="text-muted-foreground">
                {social.linkedin || "Not connected"}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Github className="h-4 w-4" />
              GitHub
            </label>
            {isEditing ? (
              <Input
                value={social.github}
                onChange={(e) => onChange({ ...social, github: e.target.value })}
                placeholder="https://github.com/yourusername"
              />
            ) : (
              <p className="text-muted-foreground">
                {social.github || "Not connected"}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Twitter className="h-4 w-4 text-[#1DA1F2]" />
              Twitter
            </label>
            {isEditing ? (
              <Input
                value={social.twitter}
                onChange={(e) => onChange({ ...social, twitter: e.target.value })}
                placeholder="https://twitter.com/yourusername"
              />
            ) : (
              <p className="text-muted-foreground">
                {social.twitter || "Not connected"}
              </p>
            )}
          </div>
        </div>

        {statusMessage && (
          <p
            className={`text-sm ${
              statusMessage.type === "error"
                ? "text-destructive"
                : "text-green-600 dark:text-green-400"
            }`}
          >
            {statusMessage.message}
          </p>
        )}
        {isEditing && (
          <Button className="w-full" onClick={onSave} disabled={isSaving}>
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Saving..." : "Save Social Links"}
          </Button>
        )}
      </div>
    </Card>
  );
}

