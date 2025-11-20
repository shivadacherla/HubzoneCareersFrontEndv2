"use client";

import { motion } from "framer-motion";
import { Bell, CheckCircle2, Sparkles, Briefcase, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "job_match",
      title: "New job match found",
      message: "Tech Corp posted a Senior Full Stack Developer position that matches your profile",
      time: "2 hours ago",
      read: false,
      icon: Sparkles,
    },
    {
      id: 2,
      type: "application",
      title: "Application status updated",
      message: "Your application for React Developer at StartupXYZ has been reviewed",
      time: "1 day ago",
      read: false,
      icon: Briefcase,
    },
    {
      id: 3,
      type: "company",
      title: "New company following you",
      message: "BigTech Inc viewed your profile and saved it",
      time: "2 days ago",
      read: true,
      icon: Building2,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            <TypingText
              text="Notifications"
              className="text-3xl font-semibold"
              speed={50}
            />
          </div>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>
        <p className="text-muted-foreground">
          {notifications.filter((n) => !n.read).length} unread notification
          {notifications.filter((n) => !n.read).length !== 1 ? "s" : ""}
        </p>
      </motion.div>

      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`p-4 transition-colors ${
                  !notification.read
                    ? "border-primary/40 bg-primary/5"
                    : "border-border/60"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      !notification.read
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                      {!notification.read && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="h-2 w-2 rounded-full bg-primary"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

