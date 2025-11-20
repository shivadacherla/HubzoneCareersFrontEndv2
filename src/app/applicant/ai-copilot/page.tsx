"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Briefcase,
  FileText,
  TrendingUp,
  Target,
  Zap,
  Brain,
  CheckCircle2,
  ArrowRight,
  Play,
  Star,
  User,
  Search,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";

const features = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description: "AI analyzes your profile, skills, and preferences to find perfect job matches in seconds.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    delay: 0.1,
  },
  {
    icon: FileText,
    title: "Resume Optimization",
    description: "Get AI-powered suggestions to improve your resume and increase your chances of getting noticed.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    delay: 0.2,
  },
  {
    icon: Brain,
    title: "Interview Prep",
    description: "Practice with AI-generated interview questions tailored to your target role and company.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: "Career Path Insights",
    description: "Discover growth opportunities and career paths based on your skills and industry trends.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    delay: 0.4,
  },
  {
    icon: Target,
    title: "Skills Gap Analysis",
    description: "Identify skills you need to develop to land your dream job with personalized recommendations.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    delay: 0.5,
  },
  {
    icon: BarChart3,
    title: "Salary Insights",
    description: "Get market-rate salary data for your role, location, and experience level.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    delay: 0.6,
  },
];

const useCases = [
  {
    title: "Find Your Perfect Job",
    description: "Tell the AI what you're looking for, and it will search thousands of jobs to find the best matches.",
    example: "I'm looking for a remote software engineer role in government contracting with Python experience.",
    icon: Briefcase,
  },
  {
    title: "Optimize Your Resume",
    description: "Upload your resume and get instant feedback on how to improve it for specific job postings.",
    example: "Review my resume for this Senior Developer position and suggest improvements.",
    icon: FileText,
  },
  {
    title: "Prepare for Interviews",
    description: "Practice with AI-generated questions based on the job description and company culture.",
    example: "Help me prepare for an interview at TechCorp for a DevOps Engineer role.",
    icon: MessageSquare,
  },
  {
    title: "Career Guidance",
    description: "Get personalized advice on career growth, skill development, and next steps.",
    example: "What skills should I learn to advance from Junior to Senior Developer?",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    text: "The AI copilot helped me find 3 perfect job matches I never would have found on my own!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    text: "Resume optimization suggestions increased my interview rate by 40%. Game changer!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    text: "The interview prep feature gave me confidence and helped me land my dream job.",
    rating: 5,
  },
];

export default function ApplicantCopilot() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

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
                    AI-Powered Assistant
                  </Badge>
                </motion.div>
              )}
              {!mounted && (
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm mb-4"
                >
                  <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                  AI-Powered Assistant
                </Badge>
              )}
            </motion.div>
            <TypingText
              text="Your AI Career Copilot"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              speed={50}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Get personalized job recommendations, optimize your resume, prepare for interviews, and
              accelerate your career—all powered by advanced AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="gap-2" asChild>
                <Link href="/applicant/dashboard">
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

          {/* Interactive Chat Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 md:p-8 border-2 border-primary/20 bg-background/95 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Copilot</h3>
                  <p className="text-xs text-muted-foreground">Ready to help</p>
                </div>
              </div>
              <div className="space-y-4 min-h-[300px]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      I'm looking for a remote software engineer role with Python and AWS experience.
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
                    <p className="text-sm">
                      I found 12 matching positions! Here are the top 3 based on your profile:
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Senior Python Developer at TechCorp (Remote, $120k-150k)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Cloud Engineer at InnovateGov (Hybrid, $110k-140k)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Full Stack Developer at CloudSecure (Remote, $115k-145k)
                      </li>
                    </ul>
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
              Everything you need to accelerate your job search and career growth
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
              See how the AI copilot can help you at every step of your job search
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Job Seekers</h2>
            <p className="text-lg text-muted-foreground">See what others are saying</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Job Search?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of job seekers who are using AI to find better opportunities faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/applicant/dashboard">
                    Get Started Free
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
