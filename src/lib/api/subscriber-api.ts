/**
 * Subscriber API functions
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

export type SubscribeResponse = {
  success: boolean;
  message?: string;
  alreadySubscribed?: boolean;
};

/**
 * Subscribe to newsletter
 */
export async function subscribeToNewsletter(
  email: string,
): Promise<SubscribeResponse> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/subscriber/subscribe`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
      }),
    });

    const data = await response.json().catch(() => {
      // If response is not JSON, try to get text
      return { message: response.statusText || "Failed to subscribe" };
    });

    if (!response.ok) {
      // Check if it's a conflict (already subscribed)
      const errorMessage =
        data.message ||
        data.error ||
        (typeof data === "string" ? data : "Failed to subscribe. Please try again.") ||
        "Failed to subscribe. Please try again.";
      
      // Check for conflict status or duplicate subscription indicators
      const isConflict = 
        response.status === 409 ||
        response.status === 400 ||
        errorMessage.toLowerCase().includes("already") ||
        errorMessage.toLowerCase().includes("exists") ||
        errorMessage.toLowerCase().includes("duplicate") ||
        errorMessage.toLowerCase().includes("subscribed");
      
      if (isConflict) {
        return {
          success: true,
          alreadySubscribed: true,
          message: "Already subscribed",
        };
      }
      
      throw new Error(errorMessage);
    }

    return {
      success: true,
      message: data.message || "Thank you for subscribing!",
    };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to subscribe. Please try again.");
  }
}

