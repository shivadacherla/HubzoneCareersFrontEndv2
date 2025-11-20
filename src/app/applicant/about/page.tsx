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
  Bell,
  Search,
  Award,
  Globe,
  BarChart3,
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

const applicantServices = [
  {
    icon: FileText,
    title: "Professional Profile Creation",
    description:
      "Create a comprehensive profile tailored for HUBZone employers. Showcase your skills, experience, and HUBZone eligibility.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Search,
    title: "AI-Powered Job Matching",
    description:
      "Our AI analyzes your profile and preferences to match you with the perfect HUBZone opportunities. Get personalized recommendations daily.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Briefcase,
    title: "Job Search & Applications",
    description:
      "Browse and apply for jobs posted by HUBZone-certified companies, including federal contracting roles and commercial positions.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Receive real-time notifications for new opportunities matching your profile. Track application status and get updates on your submissions.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Brain,
    title: "Resume Optimization",
    description:
      "Get AI-powered suggestions to optimize your resume for HUBZone employers. Improve your chances of getting noticed by recruiters.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Insights",
    description:
      "Access AI-driven career path recommendations, skills gap analysis, and growth opportunities within the HUBZone ecosystem.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Targeted Opportunities",
    description: "Connect directly with employers specifically looking for HUBZone talent",
  },
  {
    icon: Shield,
    title: "Federal Contracting Access",
    description: "Access exclusive federal contracting positions reserved for HUBZone residents",
  },
  {
    icon: Award,
    title: "Community Impact",
    description: "Contribute to economic growth in your local HUBZone community",
  },
  {
    icon: Zap,
    title: "Faster Hiring",
    description: "Get matched with employers faster through AI-powered recommendations",
  },
];

export default function ApplicantAbout() {
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
                    HUBZone Career Portal
                  </Badge>
                </motion.div>
              )}
              {!mounted && (
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm mb-4"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  HUBZone Career Portal
                </Badge>
              )}
            </motion.div>
            <TypingText
              text="About HUBZone Careers"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              speed={50}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              The HUBZone Career Portal (www.hubzonecareers.com) is a dedicated platform designed to
              bridge the gap between job seekers living in Historically Underutilized Business Zones
              (HUBZones) and HUBZone-certified employers. Tied to the U.S. Small Business
              Administration's (SBA) HUBZone initiative, our mission is to empower communities, drive
              economic growth, and help businesses meet their federal contracting goals by connecting
              local talent with meaningful employment opportunities.
            </motion.p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What is a HUBZone?</h2>
              <p className="text-lg text-muted-foreground">
                Understanding Historically Underutilized Business Zones
              </p>
            </div>
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-lg leading-relaxed mb-6">
                  A <strong>Historically Underutilized Business Zone (HUBZone)</strong> is a
                  designated area where the federal government aims to stimulate economic development
                  and employment growth. These zones are typically located in rural and urban
                  communities that have historically experienced lower economic activity.
                </p>
                <div className="grid gap-6 md:grid-cols-2 mt-8">
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Purpose
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      To provide federal contracting opportunities to small businesses located in
                      economically distressed areas, creating jobs and stimulating local economies.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Benefits
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      HUBZone-certified businesses receive preferential treatment in federal
                      contracting, and residents gain access to exclusive job opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Who is this for Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who is this portal for?</h2>
            <p className="text-lg text-muted-foreground">
              Designed for both job seekers and employers in the HUBZone ecosystem
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2 border-primary/20 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Job Seekers</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Register and create a professional profile tailored for HUBZone employers",
                    "Upload your resume and showcase your skills to local and national businesses",
                    "Browse and apply for jobs posted by HUBZone-certified companies, including federal contracting roles",
                    "Receive notifications for new opportunities and track your application status",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/applicant/signup">
                      Get Started as Job Seeker
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2 border-primary/20 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Employers</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Register your business and post open positions targeting HUBZone talent",
                    "Search the HUBZone talent pool and connect with qualified candidates",
                    "Receive and manage applications from job seekers living in HUBZones",
                    "Fulfill federal contracting requirements by hiring from designated Hubzones",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link href="/employer/signup">
                      Get Started as Employer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and AI-powered features to accelerate your job search
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applicantServices.map((service, index) => (
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

        {/* Benefits Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HUBZone Careers?</h2>
            <p className="text-lg text-muted-foreground">Exclusive benefits for HUBZone residents</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your HUBZone Career Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of job seekers finding meaningful opportunities in HUBZone-certified companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/applicant/signup">
                    Create Your Profile
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/applicant/contact">Learn More</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
