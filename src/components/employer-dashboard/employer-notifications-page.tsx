"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, CheckCircle2, FileText, Users, Briefcase, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";

export function EmployerNotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "application",
      title: "New application received",
      message: "Sarah Johnson applied for Senior Software Engineer",
      time: "2 hours ago",
      read: false,
      icon: FileText,
    },
    {
      id: 2,
      type: "job",
      title: "Job posted successfully",
      message: "Your job posting for Full Stack Developer is now live",
      time: "5 hours ago",
      read: false,
      icon: Briefcase,
    },
    {
      id: 3,
      type: "team",
      title: "Team member joined",
      message: "Jane Smith has been added to your organization",
      time: "1 day ago",
      read: true,
      icon: Users,
    },
    {
      id: 4,
      type: "ai",
      title: "AI screening complete",
      message: "Resume screening completed for 3 applicants",
      time: "2 days ago",
      read: true,
      icon: Sparkles,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <TypingText
            text="Notifications"
            className="text-3xl font-semibold mb-2"
            speed={50}
          />
          <p className="text-muted-foreground">
            Stay updated with your hiring activities
          </p>
        </div>
        {unreadCount > 0 && (
          <Badge variant="secondary" className="gap-1">
            <Bell className="h-3 w-3" />
            {unreadCount} unread
          </Badge>
        )}
      </div>

      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-4 ${!notification.read ? "border-primary/40 bg-primary/5" : ""}`}>
                <div className="flex items-start gap-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    notification.type === "application" ? "bg-blue-500/10 text-blue-500" :
                    notification.type === "job" ? "bg-green-500/10 text-green-500" :
                    notification.type === "team" ? "bg-purple-500/10 text-purple-500" :
                    "bg-primary/10 text-primary"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
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

