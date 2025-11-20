"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FileText,
  Sparkles,
  CheckCircle2,
  X,
  ArrowLeft,
  Upload,
  Download,
  Eye,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-border/60 bg-muted/40">
      <Sparkles className="h-8 w-8 animate-pulse text-primary" />
    </div>
  ),
});

type ScreeningStatus = "idle" | "scanning" | "analyzing" | "complete";

export function ResumeScreeningPage() {
  const router = useRouter();
  const [status, setStatus] = useState<ScreeningStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [selectedResume, setSelectedResume] = useState<number | null>(null);

  // Mock resumes data
  const resumes = [
    {
      id: 1,
      applicantName: "Sarah Johnson",
      fileName: "sarah_johnson_resume.pdf",
      uploadedDate: "2024-01-16",
      score: null as number | null,
      skills: [] as string[],
      experience: null as number | null,
      education: null as string | null,
    },
    {
      id: 2,
      applicantName: "Michael Chen",
      fileName: "michael_chen_resume.pdf",
      uploadedDate: "2024-01-17",
      score: null as number | null,
      skills: [] as string[],
      experience: null as number | null,
      education: null as string | null,
    },
    {
      id: 3,
      applicantName: "Emily Rodriguez",
      fileName: "emily_rodriguez_resume.pdf",
      uploadedDate: "2024-01-18",
      score: null as number | null,
      skills: [] as string[],
      experience: null as number | null,
      education: null as string | null,
    },
  ];

  const handleScreenResume = (resumeId: number) => {
    setSelectedResume(resumeId);
    setStatus("scanning");
    setProgress(0);

    // Simulate scanning progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("analyzing");
          setTimeout(() => {
            setStatus("complete");
            // Update resume with results
            const resume = resumes.find((r) => r.id === resumeId);
            if (resume) {
              resume.score = Math.floor(Math.random() * 20) + 80; // 80-100
              resume.skills = ["React", "TypeScript", "Node.js", "AWS"];
              resume.experience = 5;
              resume.education = "Bachelor's in Computer Science";
            }
          }, 1500);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const handleReset = () => {
    setStatus("idle");
    setProgress(0);
    setSelectedResume(null);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <TypingText
            text="AI Resume Screening"
            className="text-3xl font-semibold mb-2"
            speed={50}
          />
          <p className="text-muted-foreground">
            Screen and score applicant resumes using AI-powered analysis
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/employer/dashboard/jobs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Link>
        </Button>
      </div>

      {/* Screening Status Card */}
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="p-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Ready to Screen Resumes</h3>
                  <p className="text-sm text-muted-foreground">
                    Select a resume below to start AI-powered screening and scoring
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {status === "scanning" && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <Card className="p-6">
              <div className="text-center space-y-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mx-auto h-16 w-16 rounded-full border-4 border-primary border-t-transparent"
                >
                  <FileText className="h-8 w-8 text-primary m-auto mt-3" />
                </motion.div>
                <div>
                  <TypingText
                    text="Scanning Resume..."
                    className="text-lg font-semibold mb-2"
                    speed={30}
                  />
                  <Progress value={progress} className="w-full max-w-md mx-auto" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Extracting text and structure...
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {status === "analyzing" && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <Card className="p-6">
              <div className="text-center space-y-4">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mx-auto h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <Sparkles className="h-8 w-8 text-primary" />
                </motion.div>
                <div>
                  <TypingText
                    text="AI Analyzing Resume..."
                    className="text-lg font-semibold mb-2"
                    speed={30}
                  />
                  <p className="text-sm text-muted-foreground">
                    Evaluating skills, experience, and qualifications...
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {status === "complete" && selectedResume && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <Card className="p-6 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10 border-green-500/20">
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mx-auto h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center"
                >
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Screening Complete!</h3>
                  <p className="text-sm text-muted-foreground">
                    Resume has been analyzed and scored
                  </p>
                </div>
                <Button onClick={handleReset} variant="outline">
                  Screen Another Resume
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resumes List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Resumes to Screen</h3>
        {resumes.map((resume, index) => (
          <motion.div
            key={resume.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">{resume.applicantName}</h4>
                      {resume.score !== null && (
                        <Badge variant="secondary" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {resume.score}% Match
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{resume.fileName}</p>
                    <div className="flex flex-wrap gap-2">
                      {resume.skills.length > 0 ? (
                        resume.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-xs text-muted-foreground">No skills extracted yet</span>
                      )}
                    </div>
                    {resume.experience !== null && (
                      <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {resume.experience} years
                        </div>
                        {resume.education && (
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-3 w-3" />
                            {resume.education}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  {resume.score === null ? (
                    <Button
                      onClick={() => handleScreenResume(resume.id)}
                      disabled={status !== "idle"}
                      className="gap-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      Screen Resume
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="h-4 w-4" />
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleScreenResume(resume.id)}
                        className="gap-2"
                      >
                        <Sparkles className="h-4 w-4" />
                        Re-screen
                      </Button>
                    </>
                  )}
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

