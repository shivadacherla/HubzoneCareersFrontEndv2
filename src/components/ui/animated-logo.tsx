"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export function AnimatedLogo({
  src,
  alt,
  width = 48,
  height = 48,
  className = "h-12 w-auto object-contain",
  style,
  ...props
}: AnimatedLogoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="relative inline-block isolate"
      style={{
        filter: 'none',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        borderRadius: '10px',
        boxShadow: '0 2px 12px rgba(25, 118, 210, 0.13)',
      }}
      initial={false}
      animate={mounted ? {
        y: [0, -8, 0],
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
      whileHover={{
        scale: 1.15,
        rotate: [0, 5, -5, 0],
        boxShadow: '0 4px 16px rgba(25, 118, 210, 0.2)',
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{
          display: "block",
          objectFit: "contain",
          borderRadius: '10px',
          imageRendering: 'crisp-edges',
          WebkitImageRendering: 'crisp-edges',
          ...style,
        }}
        {...props}
      />
      
      {/* Subtle glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)",
        }}
        whileHover={{
          opacity: 0.6,
          scale: 1.3,
          transition: {
            duration: 0.3,
          },
        }}
      />
    </motion.div>
  );
}

