"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Bell, Globe, Palette, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { TypingText } from "@/components/ui/typing-text";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function EmployerSettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    jobAlerts: true,
    applicationAlerts: true,
    language: "en",
    timezone: "America/New_York",
  });

  return (
    <div className="space-y-6 max-w-4xl">
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
          Manage your account preferences and notification settings
        </p>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates via email
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
              <div>
                <Label>Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive browser notifications
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
              <div>
                <Label>Job Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about new job postings
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
              <div>
                <Label>Application Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about new applications
                </p>
              </div>
              <Switch
                checked={settings.applicationAlerts}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, applicationAlerts: checked })
                }
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Preferences
          </h3>
          <div className="space-y-4">
            <div>
              <Label>Language</Label>
              <Select
                value={settings.language}
                onValueChange={(value) =>
                  setSettings({ ...settings, language: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Timezone</Label>
              <Select
                value={settings.timezone}
                onValueChange={(value) =>
                  setSettings({ ...settings, timezone: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="America/New_York">Eastern Time</SelectItem>
                  <SelectItem value="America/Chicago">Central Time</SelectItem>
                  <SelectItem value="America/Denver">Mountain Time</SelectItem>
                  <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="flex justify-end">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </div>
  );
}

