"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

const CollapsibleSection = React.forwardRef<
  React.ElementRef<typeof Collapsible>,
  React.ComponentPropsWithoutRef<typeof Collapsible> & {
    title: string;
    icon?: React.ReactNode;
    defaultOpen?: boolean;
  }
>(({ className, title, icon, defaultOpen = true, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <Collapsible
      ref={ref}
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("border-b border-border/60 pb-4 mb-4", className)}
      {...props}
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 hover:bg-muted/50 rounded-lg px-2 transition-colors">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-base font-semibold">{title}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">{children}</CollapsibleContent>
    </Collapsible>
  );
});
CollapsibleSection.displayName = "CollapsibleSection";

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleSection };

