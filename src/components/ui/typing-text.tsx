"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number; // milliseconds per character
  onComplete?: () => void;
}

export function TypingText({ text, className, speed = 50, onComplete }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState(text); // Start with full text to avoid hydration mismatch
  const [isComplete, setIsComplete] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Reset to empty and start typing animation only on client
    setDisplayedText("");
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, isComplete, onComplete, mounted]);

  return (
    <motion.span
      className={cn(className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      {mounted && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-[1em] bg-current ml-0.5"
        />
      )}
    </motion.span>
  );
}

