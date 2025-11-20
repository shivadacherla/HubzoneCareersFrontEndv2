export const PALETTE_STORAGE_KEY = "palettePreset";

export function getStoredPalette(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(PALETTE_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setStoredPalette(name: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PALETTE_STORAGE_KEY, name);
    window.dispatchEvent(new CustomEvent("palette-change", { detail: name }));
  } catch {
    // ignore
  }
}

