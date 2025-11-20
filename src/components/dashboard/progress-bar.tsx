"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  label?: string;
  showDetails?: boolean;
  className?: string;
}

export function ProgressBar({
  progress,
  label = "Progress",
  showDetails = false,
  className,
}: ProgressBarProps) {
  const getProgressColor = () => {
    if (progress >= 80) return "from-green-500 to-green-600";
    if (progress >= 60) return "from-blue-500 to-blue-600";
    if (progress >= 40) return "from-yellow-500 to-yellow-600";
    return "from-orange-500 to-orange-600";
  };

  const getStatusText = () => {
    if (progress >= 80) return "Excellent!";
    if (progress >= 60) return "Good progress";
    if (progress >= 40) return "Getting there";
    return "Just getting started";
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-primary">{progress}%</span>
          {progress === 100 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </motion.div>
          )}
        </div>
      </div>
      <div className="relative h-3 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn(
            "h-full bg-gradient-to-r shadow-lg",
            getProgressColor()
          )}
        >
          <motion.div
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
      {showDetails && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs text-muted-foreground"
        >
          {getStatusText()} - Complete your profile to unlock more features
        </motion.p>
      )}
    </div>
  );
}

