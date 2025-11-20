"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Edit, Save, X, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getEmployerProfile, updateEmployerProfile } from "@/lib/api/employer-api";
import { authStorage } from "@/lib/auth/cookie-storage";

export function EmployerProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    middleInitial: "",
    email: "",
    phone: "",
    position: "",
    profilePicture: null as string | null,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!authStorage.isAuthenticated()) {
        setIsLoading(false);
        return;
      }

      try {
        const profile = await getEmployerProfile();
        if (profile) {
          setProfileData({
            firstName: profile.firstName || "",
            lastName: profile.lastName || "",
            middleInitial: profile.middleInitial || "",
            email: profile.email || "",
            phone: profile.mobileNumber || "",
            position: profile.employerPosition || "",
            profilePicture: profile.profilePicture || null,
          });
        }
      } catch (error) {
        console.error("Failed to fetch employer profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();

    // Listen for auth changes
    const handleAuthChange = () => {
      fetchProfile();
    };

    window.addEventListener("authChanged", handleAuthChange);
    return () => {
      window.removeEventListener("authChanged", handleAuthChange);
    };
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      await updateEmployerProfile({
        firstName: profileData.firstName.trim() || undefined,
        lastName: profileData.lastName.trim() || undefined,
        middleInitial: profileData.middleInitial.trim() || undefined,
        mobileNumber: profileData.phone.trim() || undefined,
        employerPosition: profileData.position.trim() || undefined,
        profilePicture: profileData.profilePicture || undefined,
      });

      setSaveSuccess(true);
      setIsEditing(false);
      
      // Dispatch auth change event to update header
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("authChanged"));
      }

      // Clear success message after 3 seconds
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to update profile. Please try again.";
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
          <p className="text-muted-foreground">Loading profile...</p>
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
            text="Your Profile"
            className="text-3xl font-semibold mb-2"
            speed={50}
          />
          <p className="text-muted-foreground">
            Manage your personal information and profile settings
          </p>
        </div>
        {isEditing ? (
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isSaving}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        ) : (
          <Button onClick={() => setIsEditing(true)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
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
            <p className="text-sm text-green-600 dark:text-green-400">Profile updated successfully!</p>
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

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AnimatePresence mode="wait">
                  {profileData.profilePicture ? (
                    <motion.div
                      key={profileData.profilePicture.substring(0, 100)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <AvatarImage src={profileData.profilePicture} alt={`${profileData.firstName} ${profileData.lastName}`} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="initials"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/60 text-3xl font-semibold text-primary-foreground"
                    >
                      {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0) || profileData.firstName.charAt(0)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Avatar>
              {isEditing && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-lg"
                  onClick={() => {
                    const input = document.getElementById("profile-picture-upload");
                    input?.click();
                  }}
                >
                  <Camera className="h-4 w-4" />
                </motion.button>
              )}
              {isEditing && (
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
                      setSaveError("Please select an image file.");
                      return;
                    }

                    // Validate file size (max 5MB)
                    if (file.size > 5 * 1024 * 1024) {
                      setSaveError("Image size must be less than 5MB.");
                      return;
                    }

                    const reader = new FileReader();
                    reader.onload = async (event) => {
                      const base64DataUrl = event.target?.result as string;
                      if (base64DataUrl) {
                        setProfileData({ ...profileData, profilePicture: base64DataUrl });
                      }
                    };
                    reader.readAsDataURL(file);
                  }}
                />
              )}
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  {profileData.firstName} {profileData.middleInitial && `${profileData.middleInitial}. `}
                  {profileData.lastName}
                </h2>
                <p className="text-muted-foreground">{profileData.position}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    <span className="text-foreground">{profileData.email}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    <span className="text-foreground">{profileData.phone}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-1 block">First Name</label>
              {isEditing ? (
                <Input
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{profileData.firstName}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Middle Initial</label>
              {isEditing ? (
                <Input
                  value={profileData.middleInitial}
                  onChange={(e) => setProfileData({ ...profileData, middleInitial: e.target.value.slice(0, 1) })}
                  maxLength={1}
                />
              ) : (
                <p className="text-foreground">{profileData.middleInitial || "—"}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Last Name</label>
              {isEditing ? (
                <Input
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{profileData.lastName}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Position</label>
              {isEditing ? (
                <Input
                  value={profileData.position}
                  onChange={(e) => setProfileData({ ...profileData, position: e.target.value })}
                />
              ) : (
                <p className="text-foreground">{profileData.position}</p>
              )}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* AI Profile Enhancement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Card className="p-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">AI Profile Enhancement</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Let AI help optimize your profile to attract better candidates and improve your hiring success rate.
              </p>
              <Button variant="outline">
                <Sparkles className="mr-2 h-4 w-4" />
                Enhance Profile with AI
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

