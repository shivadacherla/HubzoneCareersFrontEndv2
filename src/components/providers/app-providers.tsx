"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./query-provider";
import { useThemePalette } from "@/hooks/use-theme-palette";
import { setStoredPalette, getStoredPalette } from "@/lib/theme/palette-storage";
import { authStorage } from "@/lib/auth/cookie-storage";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const DEFAULT_PRESET =
  process.env.NEXT_PUBLIC_THEME_PRESET?.toLowerCase() ?? "corporate-blue";

function PaletteApplier() {
  useThemePalette(DEFAULT_PRESET);
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Clean up old localStorage tokens (migration from localStorage to cookies)
    authStorage.initialize();
    
    const q = params.get("palette");
    if (q) {
      // URL parameter takes precedence - set the palette from URL
      setStoredPalette(q.toLowerCase());
      // clean the URL
      const url = new URL(window.location.href);
      url.searchParams.delete("palette");
      router.replace(url.pathname + url.search);
    } else {
      // If no URL parameter and no stored palette, use default
      const stored = getStoredPalette();
      if (!stored) {
        setStoredPalette(DEFAULT_PRESET);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <PaletteApplier />
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}

