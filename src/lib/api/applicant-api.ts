/**
 * API utilities for applicant endpoints
 */

import { authStorage } from "@/lib/auth/cookie-storage";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

export type Skill = {
  id?: number;
  name?: string;
  level?: string;
  // Add other skill fields as needed
};

export type Education = {
  id?: number;
  degree?: string;
  institution?: string; // Backend uses 'institution', not 'school'
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  // Note: Backend doesn't have 'gpa' field, using fieldOfStudy instead
};

export type Experience = {
  id?: number;
  role?: string; // Backend uses 'role', not 'title'
  company?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
};

export type ApplicantUserDTO = {
  id?: number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  middleInitial?: string;
  mobileNumber?: string;
  experienceLevel?: string;
  jobPreference?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zip?: string;
  summary?: string;
  // Resume is stored as byte[] in backend, typically returned as base64 string or URL
  resume?: string | null;
  // ProfilePicture is @Lob String, can be base64 encoded image or URL
  profilePicture?: string | null;
  skills?: Skill[];
  education?: Education[];
  experience?: Experience[];
  linkedin?: string;
  github?: string;
  twitter?: string;
  // Legacy fields (for backward compatibility)
  hubZoneResident?: boolean;
  wantsUpdates?: boolean;
};

/**
 * Fetch applicant profile from backend
 */
export async function getApplicantProfile(): Promise<ApplicantUserDTO | null> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicantuser/profile`;
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include", // Include cookies in request
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Token expired or invalid
        throw new Error("Authentication failed. Please log in again.");
      }
      if (response.status === 404) {
        // Profile not found
        return null;
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to fetch profile");
    }

    const data: ApplicantUserDTO = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching applicant profile:", error);
    throw error;
  }
}

/**
 * Update applicant profile in backend
 */
export async function updateApplicantProfile(
  profileData: Partial<ApplicantUserDTO>
): Promise<ApplicantUserDTO> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/profile`;
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to update profile");
    }

    const responseText = await response.text();
    // Backend returns "Profile updated successfully" string
    return profileData as ApplicantUserDTO;
  } catch (error) {
    console.error("Error updating applicant profile:", error);
    throw error;
  }
}

/**
 * Add a new skill
 */
export async function addSkill(skillData: { name: string }): Promise<Skill> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/skill`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(skillData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to add skill");
    }

    const data: Skill = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding skill:", error);
    throw error;
  }
}

/**
 * Update an existing skill
 */
export async function updateSkill(skillId: number, skillData: { name: string }): Promise<Skill> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/skill/${skillId}`;
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(skillData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to update skill");
    }

    const data: Skill = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating skill:", error);
    throw error;
  }
}

/**
 * Delete a skill
 */
export async function deleteSkill(skillId: number): Promise<void> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/skill/${skillId}`;
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to delete skill");
    }
  } catch (error) {
    console.error("Error deleting skill:", error);
    throw error;
  }
}

/**
 * Add a new education entry
 */
export async function addEducation(educationData: {
  institution?: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  gpa?: string;
}): Promise<Education> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/education`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(educationData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to add education");
    }

    const data: Education = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding education:", error);
    throw error;
  }
}

/**
 * Update an existing education entry
 */
export async function updateEducation(
  educationId: number,
  educationData: {
    institution?: string;
    degree?: string;
    fieldOfStudy?: string;
    startDate?: string;
    endDate?: string;
    gpa?: string;
  }
): Promise<Education> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/education/${educationId}`;
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(educationData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to update education");
    }

    const data: Education = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating education:", error);
    throw error;
  }
}

/**
 * Delete an education entry
 */
export async function deleteEducation(educationId: number): Promise<void> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/education/${educationId}`;
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to delete education");
    }
  } catch (error) {
    console.error("Error deleting education:", error);
    throw error;
  }
}

/**
 * Add a new experience entry
 */
export async function addExperience(experienceData: {
  company?: string;
  role?: string;
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}): Promise<Experience> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/experience`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(experienceData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to add experience");
    }

    const data: Experience = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding experience:", error);
    throw error;
  }
}

/**
 * Update an existing experience entry
 */
export async function updateExperience(
  experienceId: number,
  experienceData: {
    company?: string;
    role?: string;
    title?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
  }
): Promise<Experience> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/experience/${experienceId}`;
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(experienceData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to update experience");
    }

    const data: Experience = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating experience:", error);
    throw error;
  }
}

/**
 * Delete an experience entry
 */
export async function deleteExperience(experienceId: number): Promise<void> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured.");
  }

  const token = authStorage.getToken();
  if (!token) {
    throw new Error("No authentication token found.");
  }

  try {
    const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/experience/${experienceId}`;
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed. Please log in again.");
      }
      const errorText = await response.text();
      throw new Error(errorText || "Failed to delete experience");
    }
  } catch (error) {
    console.error("Error deleting experience:", error);
    throw error;
  }
}

