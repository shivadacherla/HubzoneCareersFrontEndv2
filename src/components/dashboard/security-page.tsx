"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  EyeOff,
  Lock,
  Globe,
  Trash2,
  Save,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { TypingText } from "@/components/ui/typing-text";

export function SecurityPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [settings, setSettings] = useState({
    profileVisible: true,
    showEmail: true,
    showPhone: false,
    allowMessages: true,
    cacheData: true,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <TypingText
            text="Security & Privacy Settings"
            className="text-3xl font-semibold"
            speed={50}
          />
        </div>
        <p className="text-muted-foreground">
          Manage your account security and privacy preferences
        </p>
      </motion.div>

      {/* Profile Visibility */}
      <Card className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Profile Visibility</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Make profile visible to employers</Label>
              <p className="text-sm text-muted-foreground">
                Allow employers to find and view your profile
              </p>
            </div>
            <Switch
              checked={settings.profileVisible}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, profileVisible: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show email to employers</Label>
              <p className="text-sm text-muted-foreground">
                Display your email address on your profile
              </p>
            </div>
            <Switch
              checked={settings.showEmail}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, showEmail: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show phone number</Label>
              <p className="text-sm text-muted-foreground">
                Display your phone number on your profile
              </p>
            </div>
            <Switch
              checked={settings.showPhone}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, showPhone: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Allow messages from employers</Label>
              <p className="text-sm text-muted-foreground">
                Let employers send you direct messages
              </p>
            </div>
            <Switch
              checked={settings.allowMessages}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, allowMessages: checked })
              }
            />
          </div>
        </div>
      </Card>

      {/* Change Password */}
      <Card className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Change Password</h3>
        </div>
        <div className="space-y-4">
          <div>
            <Label>Current Password</Label>
            <div className="relative mt-2">
              <Input
                type={showPassword ? "text" : "password"}
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value,
                  })
                }
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          <div>
            <Label>New Password</Label>
            <div className="relative mt-2">
              <Input
                type={showNewPassword ? "text" : "password"}
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
                className="pr-10"
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
            <p className="mt-1 text-xs text-muted-foreground">
              Must be at least 8 characters with uppercase, lowercase, and a number
            </p>
          </div>
          <div>
            <Label>Confirm New Password</Label>
            <div className="relative mt-2">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Update Password
          </Button>
        </div>
      </Card>

      {/* Data & Cache */}
      <Card className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Trash2 className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Data & Cache</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Cache browsing data</Label>
              <p className="text-sm text-muted-foreground">
                Store data locally for faster loading
              </p>
            </div>
            <Switch
              checked={settings.cacheData}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, cacheData: checked })
              }
            />
          </div>
          <Button variant="outline" className="w-full">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Cache
          </Button>
          <Button variant="destructive" className="w-full">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Account
          </Button>
        </div>
      </Card>

      {/* Save All */}
      <Button size="lg" className="w-full">
        <CheckCircle2 className="mr-2 h-4 w-4" />
        Save All Changes
      </Button>
    </div>
  );
}

