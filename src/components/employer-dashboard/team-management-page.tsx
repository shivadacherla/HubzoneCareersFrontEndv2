"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Plus, Crown, Shield, User, Mail, Phone, MoreVertical, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TeamManagementPage() {
  const [isAdmin] = useState(true); // TODO: Get from auth context
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@techcorp.com",
      role: "Administrator",
      phone: "+1 (555) 123-4567",
      status: "active",
      avatar: null,
      joinedDate: "2024-01-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@techcorp.com",
      role: "HR Manager",
      phone: "+1 (555) 123-4568",
      status: "active",
      avatar: null,
      joinedDate: "2024-01-05",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@techcorp.com",
      role: "Recruiter",
      phone: "+1 (555) 123-4569",
      status: "active",
      avatar: null,
      joinedDate: "2024-01-10",
    },
  ]);

  const getRoleIcon = (role: string) => {
    if (role === "Administrator") return Crown;
    if (role.includes("Manager")) return Shield;
    return User;
  };

  const getRoleColor = (role: string) => {
    if (role === "Administrator") return "text-yellow-500";
    if (role.includes("Manager")) return "text-blue-500";
    return "text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <TypingText
            text="Team Management"
            className="text-3xl font-semibold mb-2"
            speed={50}
          />
          <p className="text-muted-foreground">
            Manage your organization's team members and their access levels
          </p>
        </div>
        {isAdmin && (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        )}
      </div>

      {/* Team Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Total Members", value: teamMembers.length, icon: Users },
          { label: "Admins", value: teamMembers.filter(m => m.role === "Administrator").length, icon: Crown },
          { label: "Active", value: teamMembers.filter(m => m.status === "active").length, icon: Shield },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Team Members List */}
      <div className="space-y-4">
        {teamMembers.map((member, index) => {
          const RoleIcon = getRoleIcon(member.role);
          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="h-16 w-16">
                      {member.avatar ? (
                        <AvatarImage src={member.avatar} alt={member.name} />
                      ) : (
                        <AvatarFallback className="bg-primary/20 text-primary text-xl font-semibold">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <Badge variant="secondary" className="gap-1">
                          <RoleIcon className={`h-3 w-3 ${getRoleColor(member.role)}`} />
                          {member.role}
                        </Badge>
                        <Badge variant={member.status === "active" ? "default" : "secondary"}>
                          {member.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {member.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {member.phone}
                        </div>
                        <div className="text-xs mt-2">
                          Joined: {member.joinedDate}
                        </div>
                      </div>
                    </div>
                  </div>
                  {isAdmin && member.role !== "Administrator" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Role
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

