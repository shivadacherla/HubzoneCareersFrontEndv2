"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Building2,
  Briefcase,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  TrendingUp,
  FileText,
  Search,
  Award,
  BarChart3,
  Filter,
  Clock,
  DollarSign,
  Globe,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";

const stats = [
  {
    value: "7,461+",
    label: "HUBZone Areas",
    description: "Designated HUBZone regions across the USA, as per the SBA",
    icon: MapPin,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    value: "4,553+",
    label: "Certified Employers",
    description: "Active HUBZone-certified businesses hiring nationwide",
    icon: Building2,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    value: "1000+",
    label: "Opportunities",
    description: "Federal and commercial jobs posted for HUBZone residents",
    icon: Briefcase,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const employerServices = [
  {
    icon: Briefcase,
    title: "Job Posting & Management",
    description:
      "Post open positions targeting HUBZone talent. Manage multiple job listings with AI-optimized descriptions that attract qualified candidates.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Search,
    title: "AI-Powered Candidate Search",
    description:
      "Search and filter the HUBZone talent pool with intelligent matching. AI analyzes candidate profiles to find the best fit for your roles.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: FileText,
    title: "Resume Screening & Scoring",
    description:
      "Automatically screen and score resumes using AI. Get instant rankings based on job requirements, skills, and experience.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Shield,
    title: "HUBZone Compliance Verification",
    description:
      "Automatically verify candidate HUBZone eligibility and compliance requirements. Ensure your hires meet federal contracting standards.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: MessageSquare,
    title: "Application Management",
    description:
      "Receive, organize, and manage applications from HUBZone job seekers. Streamline your hiring workflow with AI-powered insights.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: BarChart3,
    title: "Hiring Analytics & Insights",
    description:
      "Track your hiring metrics, time-to-fill, candidate quality, and compliance rates. Get AI-powered insights to optimize your process.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
];

const platformFeatures = [
  {
    icon: Brain,
    title: "AI Candidate Matching",
    description: "Intelligent algorithms match candidates to roles based on skills, experience, and cultural fit",
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description: "Filter candidates by location, skills, clearance level, HUBZone status, and more",
  },
  {
    icon: Clock,
    title: "Faster Time-to-Hire",
    description: "Reduce hiring time by up to 60% with automated screening and AI-powered recommendations",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Save on recruitment costs while accessing a qualified, pre-screened talent pool",
  },
  {
    icon: Target,
    title: "Federal Contract Compliance",
    description: "Meet federal contracting requirements by hiring from designated HUBZones",
  },
  {
    icon: Award,
    title: "Quality Candidates",
    description: "Access skilled professionals specifically looking for HUBZone employer opportunities",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Compliance Made Easy",
    description: "Automated HUBZone verification ensures all hires meet federal contracting requirements",
  },
  {
    icon: Zap,
    title: "Streamlined Hiring",
    description: "AI-powered tools reduce manual work and accelerate your hiring process",
  },
  {
    icon: TrendingUp,
    title: "Access to Qualified Talent",
    description: "Connect with skilled professionals specifically interested in HUBZone opportunities",
  },
  {
    icon: Globe,
    title: "National Reach",
    description: "Access talent from 7,461+ HUBZone areas across the United States",
  },
];

export default function EmployerOverview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className="relative">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              {mounted && (
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block mb-4"
                >
                  <Badge
                    variant="outline"
                    className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
                  >
                    <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                    Platform Overview
                  </Badge>
                </motion.div>
              )}
              {!mounted && (
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm mb-4"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  Platform Overview
                </Badge>
              )}
            </motion.div>
            <TypingText
              text="HUBZone Career Platform"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              speed={50}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              The HUBZone Career Portal is a dedicated platform designed to bridge the gap between
              HUBZone-certified employers and job seekers living in Historically Underutilized
              Business Zones. Tied to the U.S. Small Business Administration's (SBA) HUBZone
              initiative, our platform helps you meet federal contracting goals while connecting with
              qualified local talent through AI-powered hiring tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="gap-2" asChild>
                <Link href="/employer/signup">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/employer/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid gap-6 md:grid-cols-3 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <div className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    className="text-4xl md:text-5xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* What is HUBZone Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding HUBZone</h2>
              <p className="text-lg text-muted-foreground">
                How the HUBZone program benefits employers and communities
              </p>
            </div>
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-lg leading-relaxed mb-6">
                  A <strong>Historically Underutilized Business Zone (HUBZone)</strong> is a
                  designated area where the federal government aims to stimulate economic development
                  and employment growth. As a HUBZone-certified employer, you gain access to
                  preferential treatment in federal contracting while contributing to community
                  economic development.
                </p>
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Federal Contracting
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Access set-aside contracts and preferential treatment in federal procurement
                      opportunities when you hire from HUBZones.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Community Impact
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Support economic growth in underserved communities while building a skilled,
                      local workforce for your organization.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Services Offered Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive hiring tools powered by AI to streamline your recruitment process
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {employerServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50">
                  <div className={`${service.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Platform Features */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Advanced features designed for HUBZone-certified employers
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-lg text-muted-foreground">
              Exclusive benefits for HUBZone-certified employers
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block mb-6"
              >
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of HUBZone-certified employers using AI to find qualified talent faster
                and meet federal contracting requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/employer/signup">
                    Start Hiring Today
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/employer/contact">Schedule a Demo</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
