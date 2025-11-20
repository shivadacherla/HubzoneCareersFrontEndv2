/**
 * Contact form API functions
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

export type ApplicantContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  inquiryType: string;
};

export type EmployerContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organizationName: string;
  subject?: string;
  message: string;
  inquiryType: string;
};

/**
 * Submit applicant contact form
 */
export async function submitApplicantContactForm(
  data: ApplicantContactFormData,
): Promise<void> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/contactus/submitContactForm`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.replace(/\D/g, ""), // Send only digits
        subject: data.subject?.trim() || data.inquiryType || "General Inquiry",
        message: data.message.trim(),
        inquiryType: data.inquiryType,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to submit contact form");
    }
  } catch (error) {
    console.error("Error submitting applicant contact form:", error);
    throw error;
  }
}

/**
 * Submit employer contact form
 */
export async function submitEmployerContactForm(
  data: EmployerContactFormData,
): Promise<void> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/contactus/employer/submitContactForm`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.replace(/\D/g, ""), // Send only digits
        organizationName: data.organizationName.trim(),
        subject: data.subject?.trim() || data.inquiryType || "General Inquiry",
        message: data.message.trim(),
        inquiryType: data.inquiryType,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to submit contact form");
    }
  } catch (error) {
    console.error("Error submitting employer contact form:", error);
    throw error;
  }
}

