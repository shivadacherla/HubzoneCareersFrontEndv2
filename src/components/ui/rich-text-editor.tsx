"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Quote, Undo, Redo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
  editable?: boolean;
}

export function RichTextEditor({
  content,
  onChange,
  placeholder = "Start typing...",
  className,
  editable = true,
}: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder,
        emptyEditorClass: "is-empty",
      }),
    ],
    content,
    editable,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: cn(
          "focus:outline-none min-h-[200px] p-4",
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
          "[&_.is-empty:first-child::before]:content-[attr(data-placeholder)] [&_.is-empty:first-child::before]:text-muted-foreground [&_.is-empty:first-child::before]:float-left [&_.is-empty:first-child::before]:pointer-events-none [&_.is-empty:first-child::before]:h-0 [&_.is-empty:first-child::before]:opacity-60",
          className
        ),
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!isMounted || !editor) {
    return (
      <div className="rounded-lg border border-border/60 bg-background min-h-[200px] p-4">
        <div className="text-muted-foreground text-sm">{placeholder}</div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border/60 bg-background">
      {editable && (
        <div className="flex flex-wrap items-center gap-1 border-b border-border/60 p-2 bg-muted/30">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("bold") && "bg-muted"
            )}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("italic") && "bg-muted"
            )}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <div className="h-6 w-px bg-border/60 mx-1" />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("heading", { level: 1 }) && "bg-muted"
            )}
          >
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("heading", { level: 2 }) && "bg-muted"
            )}
          >
            <Heading2 className="h-4 w-4" />
          </Button>
          <div className="h-6 w-px bg-border/60 mx-1" />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("bulletList") && "bg-muted"
            )}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("orderedList") && "bg-muted"
            )}
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={cn(
              "h-8 w-8 p-0",
              editor.isActive("blockquote") && "bg-muted"
            )}
          >
            <Quote className="h-4 w-4" />
          </Button>
          <div className="h-6 w-px bg-border/60 mx-1" />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="h-8 w-8 p-0"
          >
            <Undo className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="h-8 w-8 p-0"
          >
            <Redo className="h-4 w-4" />
          </Button>
        </div>
      )}
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

