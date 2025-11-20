import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { themePresets } from "@/lib/theme/presets";
import { getStoredPalette } from "@/lib/theme/palette-storage";

export function useThemePalette(presetName?: string) {
  const { theme } = useTheme();
  const [override, setOverride] = useState<string | null>(null);

  // Read persisted palette once on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOverride(getStoredPalette());
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // React to external palette-change events (storage/URL toggles)
  useEffect(() => {
    function onPaletteChange(e: Event) {
      if ("detail" in (e as CustomEvent)) {
        setOverride((e as CustomEvent<string>).detail);
      }
    }
    window.addEventListener("palette-change", onPaletteChange as EventListener);
    return () =>
      window.removeEventListener(
        "palette-change",
        onPaletteChange as EventListener,
      );
  }, []);

  useEffect(() => {
    const activeName = override || presetName;
    const palette =
      themePresets.find((preset) => preset.name === activeName) ??
      themePresets.find((p) => p.name === "corporate-blue") ??
      themePresets[0];

    if (!palette) return;

    const vars = theme === "dark" ? palette.dark : palette.light;

    for (const [key, value] of Object.entries(vars)) {
      document.documentElement.style.setProperty(key, value);
    }
  }, [presetName, override, theme]);
}

