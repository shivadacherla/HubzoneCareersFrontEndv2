"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  Building2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Plus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";

type FormData = {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  
  // About
  summary: string;
  
  // Skills
  skills: string[];
  
  // Education
  education: Array<{
    id: number;
    degree: string;
    school: string;
    year: string;
    gpa: string;
  }>;
  
  // Experience
  experience: Array<{
    id: number;
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  
  // Certifications
  certifications: Array<{
    id: number;
    name: string;
    issuer: string;
    date: string;
  }>;
};

const INITIAL_FORM_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
  skills: [],
  education: [],
  experience: [],
  certifications: [],
};

export function ManualEntryForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [newSkill, setNewSkill] = useState("");

  const steps = [
    { id: 1, label: "Personal", icon: User, required: true },
    { id: 2, label: "About", icon: FileText, required: false },
    { id: 3, label: "Skills", icon: Sparkles, required: false },
    { id: 4, label: "Education", icon: GraduationCap, required: false },
    { id: 5, label: "Experience", icon: Briefcase, required: false },
    { id: 6, label: "Certifications", icon: Award, required: false },
  ];

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      return !!(
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.phone &&
        formData.location
      );
    }
    return true; // Other steps are optional
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      } else {
        // All steps complete, go to profile
        handleComplete();
      }
    }
  };

  const handleComplete = () => {
    // Save form data (in real app, this would be an API call)
    // Then redirect to profile page with the data
    router.push("/applicant/dashboard/profile?fromManual=true");
  };

  const handleSkip = () => {
    // Allow skipping to profile, user can complete later
    router.push("/applicant/dashboard/profile?fromManual=true");
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          id: Date.now(),
          degree: "",
          school: "",
          year: "",
          gpa: "",
        },
      ],
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          id: Date.now(),
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [
        ...formData.certifications,
        {
          id: Date.now(),
          name: "",
          issuer: "",
          date: "",
        },
      ],
    });
  };

  const currentStepInfo = steps[currentStep - 1];
  const Icon = currentStepInfo.icon;

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-muted-foreground">
            {currentStepInfo.required ? "Required" : "Optional"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div
                className={`
                  flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors
                  ${
                    currentStep > step.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : currentStep === step.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground"
                  }
                `}
              >
                {currentStep > step.id ? (
                  <span className="text-xs">✓</span>
                ) : (
                  <step.icon className="h-4 w-4" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 ${
                    currentStep > step.id ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{currentStepInfo.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentStepInfo.required
                    ? "Please fill in the required information"
                    : "You can skip this step and complete it later"}
                </p>
              </div>
            </div>

            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="City, State"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: About */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Professional Summary
                  </label>
                  <Textarea
                    value={formData.summary}
                    onChange={(e) =>
                      setFormData({ ...formData, summary: e.target.value })
                    }
                    rows={6}
                    placeholder="Tell us about yourself, your experience, and what makes you unique..."
                  />
                </div>
                <div className="rounded-lg bg-primary/5 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">AI Tip</p>
                      <p className="text-xs text-muted-foreground">
                        Include specific achievements, years of experience, and key skills
                        to make your summary more impactful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Skills */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {skill}
                      <button
                        onClick={() =>
                          setFormData({
                            ...formData,
                            skills: formData.skills.filter((s) => s !== skill),
                          })
                        }
                        className="hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    placeholder="Add a skill"
                  />
                  <Button onClick={addSkill}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Education */}
            {currentStep === 4 && (
              <div className="space-y-4">
                {formData.education.map((edu, index) => (
                  <div key={edu.id} className="rounded-lg border border-border/60 p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input
                        value={edu.degree}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            education: formData.education.map((e) =>
                              e.id === edu.id ? { ...e, degree: e.target.value } : e
                            ),
                          })
                        }
                        placeholder="Degree"
                      />
                      <Input
                        value={edu.school}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            education: formData.education.map((e) =>
                              e.id === edu.id ? { ...e, school: e.target.value } : e
                            ),
                          })
                        }
                        placeholder="School"
                      />
                      <Input
                        value={edu.year}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            education: formData.education.map((e) =>
                              e.id === edu.id ? { ...e, year: e.target.value } : e
                            ),
                          })
                        }
                        placeholder="Year"
                      />
                      <Input
                        value={edu.gpa}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            education: formData.education.map((e) =>
                              e.id === edu.id ? { ...e, gpa: e.target.value } : e
                            ),
                          })
                        }
                        placeholder="GPA (optional)"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-destructive"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          education: formData.education.filter((e) => e.id !== edu.id),
                        })
                      }
                    >
                      <X className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                ))}
                <Button variant="outline" onClick={addEducation} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Education
                </Button>
              </div>
            )}

            {/* Step 5: Experience */}
            {currentStep === 5 && (
              <div className="space-y-4">
                {formData.experience.map((exp, index) => (
                  <div key={exp.id} className="rounded-lg border border-border/60 p-4">
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <Input
                          value={exp.title}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              experience: formData.experience.map((e) =>
                                e.id === exp.id ? { ...e, title: e.target.value } : e
                              ),
                            })
                          }
                          placeholder="Job Title"
                        />
                        <Input
                          value={exp.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              experience: formData.experience.map((e) =>
                                e.id === exp.id ? { ...e, company: e.target.value } : e
                              ),
                            })
                          }
                          placeholder="Company"
                        />
                        <Input
                          value={exp.startDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              experience: formData.experience.map((e) =>
                                e.id === exp.id ? { ...e, startDate: e.target.value } : e
                              ),
                            })
                          }
                          placeholder="Start Date"
                        />
                        <Input
                          value={exp.endDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              experience: formData.experience.map((e) =>
                                e.id === exp.id ? { ...e, endDate: e.target.value } : e
                              ),
                            })
                          }
                          placeholder="End Date or Present"
                        />
                      </div>
                      <Textarea
                        value={exp.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: formData.experience.map((e) =>
                              e.id === exp.id ? { ...e, description: e.target.value } : e
                            ),
                          })
                        }
                        rows={3}
                        placeholder="Job description and achievements..."
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-destructive"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          experience: formData.experience.filter((e) => e.id !== exp.id),
                        })
                      }
                    >
                      <X className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                ))}
                <Button variant="outline" onClick={addExperience} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Experience
                </Button>
              </div>
            )}

            {/* Step 6: Certifications */}
            {currentStep === 6 && (
              <div className="space-y-4">
                {formData.certifications.map((cert, index) => (
                  <div key={cert.id} className="rounded-lg border border-border/60 p-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <Input
                        value={cert.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            certifications: formData.certifications.map((c) =>
                              c.id === cert.id ? { ...c, name: e.target.value } : c
                            ),
                          })
                        }
                        placeholder="Certification Name"
                      />
                      <Input
                        value={cert.issuer}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            certifications: formData.certifications.map((c) =>
                              c.id === cert.id ? { ...c, issuer: e.target.value } : c
                            ),
                          })
                        }
                        placeholder="Issuer"
                      />
                      <Input
                        value={cert.date}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            certifications: formData.certifications.map((c) =>
                              c.id === cert.id ? { ...c, date: e.target.value } : c
                            ),
                          })
                        }
                        placeholder="Date"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-destructive"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          certifications: formData.certifications.filter(
                            (c) => c.id !== cert.id
                          ),
                        })
                      }
                    >
                      <X className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                ))}
                <Button variant="outline" onClick={addCertification} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Certification
                </Button>
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="flex gap-2">
          {!currentStepInfo.required && (
            <Button variant="ghost" onClick={handleSkip}>
              Skip
            </Button>
          )}
          <Button
            onClick={currentStep === steps.length ? handleComplete : handleNext}
            disabled={currentStep === 1 && !validateStep(1)}
          >
            {currentStep === steps.length ? "Complete" : "Next"}
            {currentStep < steps.length && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

