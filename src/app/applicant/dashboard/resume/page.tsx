"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Upload, FileText, Sparkles, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/typing-text";
import { ManualEntryForm } from "@/components/dashboard/manual-entry-form";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-border/60 bg-muted/40">
      <Sparkles className="h-8 w-8 animate-pulse text-primary" />
    </div>
  ),
});

// Placeholder for resume scanning animation
const resumeScanAnimation = undefined;

export default function ResumeUploadPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      startScanning();
    }
  };

  const startScanning = () => {
    setIsScanning(true);
    setScanProgress(0);

    // Simulate AI scanning progress
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            router.push("/applicant/dashboard/profile?fromResume=true");
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      startScanning();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <Card className="p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
            >
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
            <TypingText
              text="Let's build your profile"
              className="text-2xl font-semibold mb-2"
              speed={50}
            />
            <p className="text-muted-foreground">
              Upload your resume and our AI will extract all the details automatically
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isScanning && !showManualEntry && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Upload Area */}
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="relative rounded-2xl border-2 border-dashed border-border/60 bg-muted/20 p-12 text-center transition-colors hover:border-primary/60 hover:bg-muted/40"
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 cursor-pointer opacity-0"
                    id="resume-upload"
                  />
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Upload className="mx-auto mb-4 h-12 w-12 text-primary" />
                  </motion.div>
                  <p className="mb-2 font-medium">
                    Drag and drop your resume here, or click to browse
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supports PDF, DOC, DOCX (Max 5MB)
                  </p>
                  {file && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary/10 p-3"
                    >
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{file.name}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm text-muted-foreground">or</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowManualEntry(true)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Enter details manually
                </Button>
              </motion.div>
            )}

            {isScanning && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="space-y-6 text-center"
              >
                <div className="mx-auto h-48 w-48">
                  {resumeScanAnimation ? (
                    <Lottie animationData={resumeScanAnimation} loop />
                  ) : (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="flex h-full w-full items-center justify-center rounded-full border-4 border-primary border-t-transparent"
                    >
                      <Sparkles className="h-12 w-12 text-primary" />
                    </motion.div>
                  )}
                </div>
                <div>
                  <TypingText
                    text="AI is analyzing your resume..."
                    className="text-lg font-semibold mb-4"
                    speed={30}
                  />
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${scanProgress}%` }}
                      className="h-full bg-gradient-to-r from-primary to-primary/60"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Extracting: Personal info, Skills, Experience, Education...
                  </p>
                </div>
              </motion.div>
            )}

            {showManualEntry && !isScanning && (
              <motion.div
                key="manual"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Enter Your Details</h3>
                    <p className="text-sm text-muted-foreground">
                      Fill in your profile information step by step
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowManualEntry(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <ManualEntryForm />
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  );
}

