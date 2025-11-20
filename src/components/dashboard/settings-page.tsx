"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Bell, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    jobAlerts: true,
    weeklyDigest: true,
    language: "en",
    timezone: "America/Los_Angeles",
  });

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6 text-primary" />
          <TypingText
            text="Settings"
            className="text-3xl font-semibold"
            speed={50}
          />
        </div>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </motion.div>

      {/* Notification Settings */}
      <Card className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Notifications</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via email
              </p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, emailNotifications: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Push notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications in browser
              </p>
            </div>
            <Switch
              checked={settings.pushNotifications}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, pushNotifications: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Job alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified about new job matches
              </p>
            </div>
            <Switch
              checked={settings.jobAlerts}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, jobAlerts: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Weekly digest</Label>
              <p className="text-sm text-muted-foreground">
                Receive weekly summary of activity
              </p>
            </div>
            <Switch
              checked={settings.weeklyDigest}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, weeklyDigest: checked })
              }
            />
          </div>
        </div>
      </Card>

      {/* General Settings */}
      <Card className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">General</h3>
        </div>
        <div className="space-y-4">
          <div>
            <Label>Language</Label>
            <select className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div>
            <Label>Timezone</Label>
            <select className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2">
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="America/Chicago">Central Time (CT)</option>
            </select>
          </div>
        </div>
      </Card>

      <Button size="lg" className="w-full">
        Save Settings
      </Button>
    </div>
  );
}

