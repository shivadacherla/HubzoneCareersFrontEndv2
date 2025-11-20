 "use client";

 import { Moon, Sun } from "lucide-react";
 import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
 import { Button } from "./button";

 export function ThemeToggle() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

   if (!mounted) {
     return (
       <Button
         variant="ghost"
         size="icon"
         className="h-9 w-9 rounded-full border border-border/50"
         aria-label="Toggle theme"
       >
         <Sun className="h-4 w-4" />
       </Button>
     );
   }

   const isDark = theme === "dark";

   return (
     <Button
       variant="ghost"
       size="icon"
       className="h-9 w-9 rounded-full border border-border/50"
       aria-label="Toggle theme"
       onClick={() => setTheme(isDark ? "light" : "dark")}
     >
       {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
     </Button>
   );
 }

