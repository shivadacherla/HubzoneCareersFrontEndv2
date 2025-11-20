"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Calendar,
  Edit,
  Save,
  X,
  Plus,
  Trash2,
  Crown,
  Shield,
  Sparkles,
  Briefcase,
  Award,
  Link as LinkIcon,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { RichTextDisplay } from "@/components/ui/rich-text-display";
import { cn } from "@/lib/utils";
import { getOrganizationProfile, updateOrganizationProfile, uploadOrganizationLogo } from "@/lib/api/employer-api";
import { authStorage } from "@/lib/auth/cookie-storage";

export function OrganizationPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [orgData, setOrgData] = useState({
    // Basic Info
    name: "",
    email: "",
    phoneNumber: "",
    fax: "",
    website: "",
    type: "",
    logo: null as string | null,
    
    // Address
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    
    // Company Stats
    headquarters: "",
    employees: "",
    founded: "",
    
    // About
    about: "",
    description: "",
    
    // Industries (from specialties)
    industries: [] as string[],
    
    // Tech Stacks (from technologies)
    techStacks: [] as string[],
    
    // Job Roles
    jobRoles: [] as string[],
    
    // Job Types
    jobTypes: [] as string[],
    
    // Benefits
    benefits: [] as string[],
    
    // Social Links
    social: {
      linkedin: "",
      twitter: "",
      facebook: "",
      instagram: "",
    },
    
    // Team Members (fetched from registered members)
    teamMembers: [] as any[],
  });

  useEffect(() => {
    // Check user role first
    const role = authStorage.getRole();
    const userIsAdmin = role === "EMPLOYER_ADMIN";
    setIsAdmin(userIsAdmin);

    const fetchOrganization = async () => {
      if (!authStorage.isAuthenticated()) {
        setIsLoading(false);
        return;
      }

      try {
        const orgProfile = await getOrganizationProfile();
        if (orgProfile) {
          // Map backend fields to frontend state
          setOrgData({
            name: orgProfile.organizationName || "",
            email: orgProfile.organizationEmail || "",
            phoneNumber: orgProfile.phoneNumber || "",
            fax: "", // Not in backend DTO yet
            website: "", // Not in backend DTO yet
            type: orgProfile.organizationType || "",
            logo: orgProfile.logo || null,
            
            // Address
            addressLine1: "", // Not in backend DTO yet
            addressLine2: "", // Not in backend DTO yet
            city: orgProfile.city || "",
            state: orgProfile.state || "",
            zipCode: orgProfile.zip || "",
            country: "United States",
            
            // Company Stats
            headquarters: orgProfile.city && orgProfile.state 
              ? `${orgProfile.city}, ${orgProfile.state}${orgProfile.zip ? ` ${orgProfile.zip}` : ""}`
              : "",
            employees: orgProfile.size || "",
            founded: orgProfile.founded || "",
            
            // About
            about: orgProfile.about || "",
            description: orgProfile.description || "",
            
            // Industries (parse from specialties if comma-separated)
            industries: orgProfile.specialties 
              ? orgProfile.specialties.split(",").map(s => s.trim()).filter(s => s.length > 0)
              : [],
            
            // Tech Stacks (parse from technologies if comma-separated)
            techStacks: orgProfile.technologies
              ? orgProfile.technologies.split(",").map(t => t.trim()).filter(t => t.length > 0)
              : [],
            
            // Job Roles (not in backend yet)
            jobRoles: [],
            
            // Job Types (not in backend yet)
            jobTypes: [],
            
            // Benefits (parse from benefits if comma-separated)
            benefits: orgProfile.benefits
              ? orgProfile.benefits.split(",").map(b => b.trim()).filter(b => b.length > 0)
              : [],
            
            // Social Links (not in backend yet)
            social: {
              linkedin: "",
              twitter: "",
              facebook: "",
              instagram: "",
            },
            
            // Team Members (not in backend yet)
            teamMembers: [],
          });
        }
      } catch (error) {
        console.error("Failed to fetch organization profile:", error);
        // Organization might not exist yet, which is okay
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrganization();

    // Listen for auth changes
    const handleAuthChange = () => {
      // Update role when auth changes
      const updatedRole = authStorage.getRole();
      setIsAdmin(updatedRole === "EMPLOYER_ADMIN");
      fetchOrganization();
    };

    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: Building2 },
    { id: "about", label: "About", icon: Globe },
    { id: "industries", label: "Industries & Skills", icon: Briefcase },
    { id: "benefits", label: "Benefits", icon: Award },
    { id: "team", label: "Our Team", icon: Users },
  ];

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      // Map frontend fields to backend DTO format
      const payload = {
        organizationName: orgData.name.trim() || undefined,
        organizationEmail: orgData.email.trim() || undefined,
        organizationType: orgData.type.trim() || undefined,
        size: orgData.employees.trim() || undefined,
        description: orgData.description.trim() || undefined,
        about: orgData.about.trim() || undefined,
        city: orgData.city.trim() || undefined,
        state: orgData.state.trim() || undefined,
        zip: orgData.zipCode.trim() || undefined,
        phoneNumber: orgData.phoneNumber.trim() || undefined,
        technologies: orgData.techStacks.length > 0 
          ? orgData.techStacks.join(", ")
          : undefined,
        specialties: orgData.industries.length > 0
          ? orgData.industries.join(", ")
          : undefined,
        benefits: orgData.benefits.length > 0
          ? orgData.benefits.join(", ")
          : undefined,
        founded: orgData.founded.trim() || undefined,
        logo: orgData.logo || undefined,
      };

      console.log("Saving organization data:", payload);
      
      await updateOrganizationProfile(payload);

      setSaveSuccess(true);
      setIsEditing(false);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to update organization. Please try again.";
      setSaveError(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading organization details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <TypingText
            text="Organization Details"
            className="text-3xl font-semibold mb-2"
            speed={50}
          />
          <p className="text-muted-foreground">
            Manage your organization information and company profile
          </p>
        </div>
        {isAdmin && (
          <div className="flex items-center gap-2">
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
                Edit Organization
              </Button>
            )}
          </div>
        )}
        {!isAdmin && (
          <Badge variant="secondary" className="gap-1">
            <Shield className="h-3 w-3" />
            View Only
          </Badge>
        )}
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
            <p className="text-sm text-green-600 dark:text-green-400">Organization updated successfully!</p>
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

      {/* Organization Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden border-2 border-border/60 bg-gradient-to-br from-background via-background/95 to-primary/5 shadow-lg shadow-primary/5">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative p-8">
              {/* Organization Logo and Name */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-border/60">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative group"
                >
                  <AnimatePresence mode="wait">
                    {orgData.logo ? (
                      <motion.div
                        key={orgData.logo.substring(0, 100)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative h-24 w-24 rounded-2xl overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl"
                      >
                        <img
                          src={orgData.logo}
                          alt={orgData.name || "Organization logo"}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="no-logo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl"
                      >
                        <Building2 className="h-12 w-12 text-primary-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Edit button - only show when editing and admin */}
                  {isEditing && isAdmin && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors z-10"
                      onClick={() => {
                        const input = document.getElementById("organization-logo-upload");
                        input?.click();
                      }}
                      title="Change logo"
                    >
                      <Camera className="h-5 w-5" />
                    </motion.button>
                  )}
                  
                  {/* Hidden file input */}
                  {isEditing && isAdmin && (
                    <input
                      type="file"
                      accept="image/*"
                      id="organization-logo-upload"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        // Validate file type
                        if (!file.type.startsWith("image/")) {
                          setSaveError("Please select an image file.");
                          return;
                        }

                        // Validate file size (max 5MB)
                        if (file.size > 5 * 1024 * 1024) {
                          setSaveError("Image size must be less than 5MB.");
                          return;
                        }

                        try {
                          setIsSaving(true);
                          setSaveError(null);
                          
                          // Upload logo to backend
                          const logoUrl = await uploadOrganizationLogo(file);
                          
                          // Update state immediately
                          setOrgData({ ...orgData, logo: logoUrl });
                          
                          setSaveSuccess(true);
                          setTimeout(() => setSaveSuccess(false), 3000);
                        } catch (error) {
                          const errorMessage =
                            error instanceof Error
                              ? error.message
                              : "Failed to upload logo. Please try again.";
                          setSaveError(errorMessage);
                        } finally {
                          setIsSaving(false);
                          // Reset file input
                          e.target.value = "";
                        }
                      }}
                    />
                  )}
                  
                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(37, 99, 235, 0.4)",
                        "0 0 20px 5px rgba(37, 99, 235, 0.2)",
                        "0 0 0 0 rgba(37, 99, 235, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                  />
                </motion.div>
                
                <div className="flex-1">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                  >
                    {orgData.name || "Organization Name"}
                  </motion.h2>
                  {orgData.type && (
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-muted-foreground text-lg"
                    >
                      {orgData.type}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Company Stats Grid */}
              <div className="grid gap-6 md:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Headquarters</p>
                    <p className="text-base font-semibold text-foreground truncate">{orgData.headquarters || "—"}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Employees</p>
                    <p className="text-base font-semibold text-foreground">{orgData.employees || "—"}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Founded</p>
                    <p className="text-base font-semibold text-foreground">{orgData.founded || "—"}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-border/60 pb-4">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted/50",
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </motion.button>
        ))}
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
          {activeTab === "overview" && (
            <OverviewTab orgData={orgData} setOrgData={setOrgData} isEditing={isEditing} isAdmin={isAdmin} />
          )}
          {activeTab === "about" && (
            <AboutTab orgData={orgData} setOrgData={setOrgData} isEditing={isEditing} isAdmin={isAdmin} />
          )}
          {activeTab === "industries" && (
            <IndustriesTab orgData={orgData} setOrgData={setOrgData} isEditing={isEditing} isAdmin={isAdmin} />
          )}
          {activeTab === "benefits" && (
            <BenefitsTab orgData={orgData} setOrgData={setOrgData} isEditing={isEditing} isAdmin={isAdmin} />
          )}
          {activeTab === "team" && (
            <TeamTab orgData={orgData} setOrgData={setOrgData} isEditing={isEditing} isAdmin={isAdmin} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ orgData, setOrgData, isEditing, isAdmin }: any) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
        <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Organization Name</label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.name}
                  onChange={(e) => setOrgData({ ...orgData, name: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{orgData.name || "—"}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Organization Email</label>
              {isEditing && isAdmin ? (
                <Input
                  type="email"
                  value={orgData.email}
                  onChange={(e) => setOrgData({ ...orgData, email: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{orgData.email || "—"}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Phone Number</label>
              {isEditing && isAdmin ? (
                <Input
                  type="tel"
                  value={orgData.phoneNumber}
                  onChange={(e) => setOrgData({ ...orgData, phoneNumber: e.target.value })}
                  placeholder="e.g., +1 (555) 123-4567"
                />
              ) : (
                <p className="text-foreground">{orgData.phoneNumber || "—"}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Organization Type</label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.type}
                  onChange={(e) => setOrgData({ ...orgData, type: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{orgData.type || "—"}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Size (Employees)</label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.employees}
                  onChange={(e) => setOrgData({ ...orgData, employees: e.target.value })}
                  placeholder="e.g., 101-200"
                />
              ) : (
                <p className="text-foreground">{orgData.employees || "—"}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Founded Year</label>
              {isEditing && isAdmin ? (
                <Input
                  type="number"
                  value={orgData.founded}
                  onChange={(e) => setOrgData({ ...orgData, founded: e.target.value })}
                  placeholder="e.g., 2007"
                  min="1800"
                  max={new Date().getFullYear()}
                />
              ) : (
                <p className="text-foreground">{orgData.founded || "—"}</p>
              )}
            </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Address</h3>
        <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Description</label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.description}
                  onChange={(e) => setOrgData({ ...orgData, description: e.target.value })}
                  placeholder="Brief description of your organization"
                />
              ) : (
                <p className="text-foreground">{orgData.description || "—"}</p>
              )}
            </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">City</label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.city}
                  onChange={(e) => setOrgData({ ...orgData, city: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{orgData.city}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">State</label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.state}
                  onChange={(e) => setOrgData({ ...orgData, state: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{orgData.state}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Zip Code</label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.zipCode}
                  onChange={(e) => setOrgData({ ...orgData, zipCode: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{orgData.zipCode}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Country</label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.country}
                  onChange={(e) => setOrgData({ ...orgData, country: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{orgData.country}</p>
              )}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 md:col-span-2">
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { key: "linkedin", label: "LinkedIn", icon: Linkedin },
            { key: "twitter", label: "Twitter", icon: Twitter },
            { key: "facebook", label: "Facebook", icon: Facebook },
            { key: "instagram", label: "Instagram", icon: Instagram },
          ].map((social) => (
            <div key={social.key}>
              <label className="text-sm font-medium mb-1 block flex items-center gap-2">
                <social.icon className="h-4 w-4" />
                {social.label}
              </label>
              {isEditing && isAdmin ? (
                <Input
                  value={orgData.social[social.key]}
                  onChange={(e) =>
                    setOrgData({
                      ...orgData,
                      social: { ...orgData.social, [social.key]: e.target.value },
                    })
                  }
                  placeholder={`https://${social.key}.com/...`}
                />
              ) : (
                <a
                  href={orgData.social[social.key] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm",
                    orgData.social[social.key] ? "text-primary hover:underline" : "text-muted-foreground"
                  )}
                >
                  {orgData.social[social.key] || "Not set"}
                </a>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// About Tab Component
function AboutTab({ orgData, setOrgData, isEditing, isAdmin }: any) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">About the Company</h3>
      {isEditing && isAdmin ? (
        <RichTextEditor
          content={orgData.about}
          onChange={(content) => setOrgData({ ...orgData, about: content })}
          placeholder="Describe your company, mission, values, and what makes you unique..."
        />
      ) : (
        <RichTextDisplay content={orgData.about} />
      )}
    </Card>
  );
}

// Industries Tab Component
function IndustriesTab({ orgData, setOrgData, isEditing, isAdmin }: any) {
  const [newIndustry, setNewIndustry] = useState("");
  const [newTechStack, setNewTechStack] = useState("");
  const [newJobRole, setNewJobRole] = useState("");
  const [newJobType, setNewJobType] = useState("");

  const addIndustry = () => {
    if (newIndustry.trim() && !orgData.industries.includes(newIndustry.trim())) {
      setOrgData({
        ...orgData,
        industries: [...orgData.industries, newIndustry.trim()],
      });
      setNewIndustry("");
    }
  };

  const removeIndustry = (industry: string) => {
    setOrgData({
      ...orgData,
      industries: orgData.industries.filter((i: string) => i !== industry),
    });
  };

  const addTechStack = () => {
    if (newTechStack.trim() && !orgData.techStacks.includes(newTechStack.trim())) {
      setOrgData({
        ...orgData,
        techStacks: [...orgData.techStacks, newTechStack.trim()],
      });
      setNewTechStack("");
    }
  };

  const removeTechStack = (tech: string) => {
    setOrgData({
      ...orgData,
      techStacks: orgData.techStacks.filter((t: string) => t !== tech),
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Industries</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {orgData.industries.map((industry: string) => (
            <Badge key={industry} variant="secondary" className="flex items-center gap-1">
              {industry}
              {isEditing && isAdmin && (
                <button
                  onClick={() => removeIndustry(industry)}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </Badge>
          ))}
        </div>
        {isEditing && isAdmin && (
          <div className="flex gap-2">
            <Input
              value={newIndustry}
              onChange={(e) => setNewIndustry(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addIndustry()}
              placeholder="Add industry..."
            />
            <Button onClick={addIndustry}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Tech Stacks</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {orgData.techStacks.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="flex items-center gap-1">
              {tech}
              {isEditing && isAdmin && (
                <button
                  onClick={() => removeTechStack(tech)}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </Badge>
          ))}
        </div>
        {isEditing && isAdmin && (
          <div className="flex gap-2">
            <Input
              value={newTechStack}
              onChange={(e) => setNewTechStack(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTechStack()}
              placeholder="Add tech stack..."
            />
            <Button onClick={addTechStack}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Job Roles</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {orgData.jobRoles.map((role: string) => (
            <Badge key={role} variant="secondary" className="flex items-center gap-1">
              {role}
              {isEditing && isAdmin && (
                <button
                  onClick={() =>
                    setOrgData({
                      ...orgData,
                      jobRoles: orgData.jobRoles.filter((r: string) => r !== role),
                    })
                  }
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </Badge>
          ))}
        </div>
        {isEditing && isAdmin && (
          <div className="flex gap-2">
            <Input
              value={newJobRole}
              onChange={(e) => setNewJobRole(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && newJobRole.trim() && !orgData.jobRoles.includes(newJobRole.trim())) {
                  setOrgData({
                    ...orgData,
                    jobRoles: [...orgData.jobRoles, newJobRole.trim()],
                  });
                  setNewJobRole("");
                }
              }}
              placeholder="Add job role..."
            />
            <Button
              onClick={() => {
                if (newJobRole.trim() && !orgData.jobRoles.includes(newJobRole.trim())) {
                  setOrgData({
                    ...orgData,
                    jobRoles: [...orgData.jobRoles, newJobRole.trim()],
                  });
                  setNewJobRole("");
                }
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Job Types</h3>
        <div className="flex flex-wrap gap-2">
          {orgData.jobTypes.map((type: string) => (
            <Badge key={type} variant="secondary" className="flex items-center gap-1">
              {type}
              {isEditing && isAdmin && (
                <button
                  onClick={() =>
                    setOrgData({
                      ...orgData,
                      jobTypes: orgData.jobTypes.filter((t: string) => t !== type),
                    })
                  }
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </Badge>
          ))}
        </div>
        {isEditing && isAdmin && (
          <div className="flex gap-2 mt-4">
            <Input
              value={newJobType}
              onChange={(e) => setNewJobType(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && newJobType.trim() && !orgData.jobTypes.includes(newJobType.trim())) {
                  setOrgData({
                    ...orgData,
                    jobTypes: [...orgData.jobTypes, newJobType.trim()],
                  });
                  setNewJobType("");
                }
              }}
              placeholder="Add job type..."
            />
            <Button
              onClick={() => {
                if (newJobType.trim() && !orgData.jobTypes.includes(newJobType.trim())) {
                  setOrgData({
                    ...orgData,
                    jobTypes: [...orgData.jobTypes, newJobType.trim()],
                  });
                  setNewJobType("");
                }
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

// Benefits Tab Component
function BenefitsTab({ orgData, setOrgData, isEditing, isAdmin }: any) {
  const [newBenefit, setNewBenefit] = useState("");

  const addBenefit = () => {
    if (newBenefit.trim() && !orgData.benefits.includes(newBenefit.trim())) {
      setOrgData({
        ...orgData,
        benefits: [...orgData.benefits, newBenefit.trim()],
      });
      setNewBenefit("");
    }
  };

  const removeBenefit = (benefit: string) => {
    setOrgData({
      ...orgData,
      benefits: orgData.benefits.filter((b: string) => b !== benefit),
    });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Employee Benefits</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {orgData.benefits.map((benefit: string) => (
          <div
            key={benefit}
            className="flex items-center justify-between rounded-lg border border-border/60 p-3"
          >
            <span className="text-sm">{benefit}</span>
            {isEditing && isAdmin && (
              <button
                onClick={() => removeBenefit(benefit)}
                className="text-destructive hover:text-destructive/80"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>
      {isEditing && isAdmin && (
        <div className="flex gap-2 mt-4">
          <Input
            value={newBenefit}
            onChange={(e) => setNewBenefit(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addBenefit()}
            placeholder="Add benefit..."
          />
          <Button onClick={addBenefit}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}

// Team Tab Component
function TeamTab({ orgData, setOrgData, isEditing, isAdmin }: any) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Team Members</h3>
        {isAdmin && (
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        )}
      </div>
      <div className="space-y-4">
        {orgData.teamMembers.map((member: any) => (
          <div
            key={member.id}
            className="flex items-center justify-between rounded-lg border border-border/60 p-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-semibold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{member.name}</p>
                  {member.role === "Administrator" && (
                    <Badge variant="secondary" className="gap-1">
                      <Crown className="h-3 w-3" />
                      Admin
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.email}</p>
              </div>
            </div>
            {isAdmin && member.role !== "Administrator" && (
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

