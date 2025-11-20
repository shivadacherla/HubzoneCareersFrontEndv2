"use client";

import { cn } from "@/lib/utils";

interface RichTextDisplayProps {
  content: string;
  className?: string;
}

export function RichTextDisplay({ content, className }: RichTextDisplayProps) {
  if (!content) {
    return <p className={cn("text-muted-foreground", className)}>No content</p>;
  }

  return (
    <div
      className={cn(
        "max-w-none",
        "[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-6 [&_h1]:text-foreground",
        "[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-foreground",
        "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-foreground",
        "[&_p]:mb-4 [&_p]:text-foreground [&_p]:leading-relaxed",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_em]:italic [&_em]:text-foreground",
        "[&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ul]:text-foreground",
        "[&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_ol]:text-foreground",
        "[&_li]:mb-2 [&_li]:text-foreground",
        "[&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-4",
        "[&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_code]:text-foreground",
        "[&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80",
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

