"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Briefcase,
  FileText,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Brain,
  CheckCircle2,
  ArrowRight,
  Play,
  Star,
  Search,
  Filter,
  Clock,
  Award,
  BarChart3,
  Target,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";

const features = [
  {
    icon: Search,
    title: "Intelligent Candidate Screening",
    description: "AI automatically scores and ranks candidates based on job requirements, skills, and experience.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    delay: 0.1,
  },
  {
    icon: FileText,
    title: "Job Description Generator",
    description: "Create compelling, optimized job descriptions in seconds with AI-powered suggestions.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    delay: 0.2,
  },
  {
    icon: Filter,
    title: "HubZone Compliance Check",
    description: "Automatically verify candidate HubZone eligibility and compliance requirements.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    delay: 0.3,
  },
  {
    icon: Brain,
    title: "Interview Question Generator",
    description: "Get AI-generated interview questions tailored to specific roles and candidate profiles.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    delay: 0.4,
  },
  {
    icon: BarChart3,
    title: "Talent Analytics",
    description: "Get insights into your hiring pipeline, time-to-fill, and candidate quality metrics.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    delay: 0.5,
  },
  {
    icon: Target,
    title: "Skills Matching",
    description: "Match candidates to roles based on technical skills, soft skills, and cultural fit.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    delay: 0.6,
  },
];

const useCases = [
  {
    title: "Screen Resumes Automatically",
    description: "Upload job requirements and candidate resumes, and get instant scoring and ranking.",
    example: "Screen these 50 resumes for a Senior DevOps Engineer role with Kubernetes experience.",
    icon: FileText,
  },
  {
    title: "Generate Job Descriptions",
    description: "Create professional, optimized job postings that attract the right candidates.",
    example: "Create a job description for a Full Stack Developer role with React and Node.js.",
    icon: Briefcase,
  },
  {
    title: "Verify HubZone Eligibility",
    description: "Automatically check if candidates meet HubZone requirements for your contracts.",
    example: "Verify if this candidate's address qualifies for HubZone eligibility.",
    icon: Shield,
  },
  {
    title: "Generate Interview Questions",
    description: "Get tailored interview questions based on the role and candidate's background.",
    example: "Generate technical interview questions for a Python Developer with 5 years experience.",
    icon: MessageSquare,
  },
];

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "HR Director, TechCorp",
    text: "AI screening reduced our time-to-hire by 60% and improved candidate quality significantly.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Talent Acquisition Lead",
    text: "The job description generator is a game-changer. We get 3x more qualified applicants now.",
    rating: 5,
  },
  {
    name: "Amanda Thompson",
    role: "Recruiting Manager",
    text: "HubZone compliance checking saves us hours of manual verification. Highly recommend!",
    rating: 5,
  },
];

const stats = [
  { label: "Time Saved", value: "60%", icon: Clock },
  { label: "Better Matches", value: "3x", icon: Target },
  { label: "Faster Hiring", value: "40%", icon: Zap },
  { label: "Compliance Rate", value: "99%", icon: Shield },
];

export default function EmployerCopilot() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
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
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
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
                    Enterprise AI Assistant
                  </Badge>
                </motion.div>
              )}
              {!mounted && (
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm mb-4"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  Enterprise AI Assistant
                </Badge>
              )}
            </motion.div>
            <TypingText
              text="Your AI Hiring Copilot"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              speed={50}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Streamline your hiring process with AI-powered candidate screening, job description
              generation, compliance checking, and intelligent talent matching.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="gap-2" asChild>
                <Link href="/employer/dashboard">
                  <Zap className="h-5 w-5" />
                  Start Using Copilot
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Chat Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 md:p-8 border-2 border-primary/20 bg-background/95 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Hiring Copilot</h3>
                  <p className="text-xs text-muted-foreground">Ready to assist</p>
                </div>
              </div>
              <div className="space-y-4 min-h-[300px]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      Screen these 25 resumes for a Senior DevOps Engineer role. Requirements: Kubernetes,
                      AWS, 5+ years experience.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-3 justify-end"
                >
                  <div className="flex-1 bg-primary/10 rounded-lg p-4 max-w-[80%]">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">AI Copilot</span>
                    </div>
                    <p className="text-sm mb-3">
                      I've analyzed all 25 resumes. Here are the top 5 candidates ranked by match score:
                    </p>
                    <div className="space-y-2">
                      {[
                        { name: "Sarah Johnson", score: 95, skills: "Kubernetes, AWS, Terraform" },
                        { name: "Michael Chen", score: 92, skills: "K8s, AWS, CI/CD" },
                        { name: "David Lee", score: 88, skills: "Docker, AWS, Python" },
                      ].map((candidate, i) => (
                        <div key={i} className="bg-background/50 rounded p-2 text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{candidate.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {candidate.score}% match
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{candidate.skills}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to streamline your hiring process and find the best talent
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                onHoverStart={() => setActiveFeature(index)}
              >
                <Card
                  className={`p-6 h-full cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "border-primary shadow-lg shadow-primary/20 scale-105"
                      : "hover:border-primary/50"
                  }`}
                >
                  <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how the AI copilot can transform your hiring process
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary">
                        <p className="text-sm italic">"{useCase.example}"</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Hiring Teams</h2>
            <p className="text-lg text-muted-foreground">See what employers are saying</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join leading companies using AI to hire faster, smarter, and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/employer/dashboard">
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/employer/pricing">View Pricing</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
