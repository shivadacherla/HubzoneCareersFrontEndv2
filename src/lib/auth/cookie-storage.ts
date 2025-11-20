/**
 * Cookie storage utility for authentication tokens
 * Uses cookies instead of localStorage for better security
 */

const TOKEN_COOKIE_NAME = "token";
const ROLE_COOKIE_NAME = "role";
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

/**
 * Set a cookie with secure defaults
 */
function setCookie(name: string, value: string, maxAge: number = COOKIE_MAX_AGE) {
  if (typeof document === "undefined") return;
  
  const isProduction = process.env.NODE_ENV === "production";
  const secure = isProduction ? "; Secure" : "";
  const sameSite = "; SameSite=Strict";
  
  document.cookie = `${name}=${value}; Max-Age=${maxAge}; Path=/${secure}${sameSite}`;
}

/**
 * Get a cookie value by name
 */
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  
  return null;
}

/**
 * Delete a cookie
 */
function deleteCookie(name: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; Max-Age=0; Path=/`;
}

/**
 * Clean up old localStorage tokens (migration from localStorage to cookies)
 */
function cleanupOldLocalStorage() {
  if (typeof window === "undefined") return;
  
  try {
    // Remove old token and role from localStorage if they exist
    const oldTokenKeys = ["token", "authToken", "jwtToken", "accessToken"];
    const oldRoleKeys = ["role", "userRole", "user_type", "oauth_role"];
    
    oldTokenKeys.forEach((key) => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        console.log(`Cleaned up old localStorage token: ${key}`);
      }
    });
    
    oldRoleKeys.forEach((key) => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        console.log(`Cleaned up old localStorage role: ${key}`);
      }
    });
  } catch (error) {
    // Silently fail if localStorage is not available
    console.warn("Could not clean up old localStorage tokens:", error);
  }
}

/**
 * Auth token storage using cookies
 */
export const authStorage = {
  setToken(token: string) {
    // Clean up any old localStorage tokens
    cleanupOldLocalStorage();
    setCookie(TOKEN_COOKIE_NAME, token);
  },
  
  getToken(): string | null {
    return getCookie(TOKEN_COOKIE_NAME);
  },
  
  setRole(role: string) {
    // Clean up any old localStorage roles
    cleanupOldLocalStorage();
    setCookie(ROLE_COOKIE_NAME, role);
  },
  
  getRole(): string | null {
    return getCookie(ROLE_COOKIE_NAME);
  },
  
  clear() {
    // Clear cookies
    deleteCookie(TOKEN_COOKIE_NAME);
    deleteCookie(ROLE_COOKIE_NAME);
    
    // Also clear any old localStorage tokens (just in case)
    cleanupOldLocalStorage();
  },
  
  isAuthenticated(): boolean {
    return !!this.getToken();
  },
  
  /**
   * Initialize and clean up old localStorage tokens
   * Call this once when the app loads
   */
  initialize() {
    cleanupOldLocalStorage();
  },
};

