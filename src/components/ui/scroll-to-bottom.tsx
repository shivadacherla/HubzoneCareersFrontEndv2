"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToBottom() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      // Show button when not at bottom (within 100px)
      const nearBottom = scrollBottom >= documentHeight - 100;
      setIsAtBottom(nearBottom);
      setIsVisible(!nearBottom && scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Button
              onClick={scrollToBottom}
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 bg-primary hover:bg-primary/90 relative overflow-hidden"
              aria-label="Scroll to bottom"
            >
              {/* Water ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                animate={{
                  y: [0, 3, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

