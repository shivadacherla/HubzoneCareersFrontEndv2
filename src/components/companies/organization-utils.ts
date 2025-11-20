import type { OrganizationDTO } from "@/lib/api/employer-api";

export type CompanyProfile = {
  id: string;
  numericId?: number;
  name: string;
  industry: string;
  location: string;
  city: string;
  state: string;
  zipCode: string;
  addressLine1: string;
  addressLine2: string;
  headquarters: string;
  officePolicy: string;
  employees: string;
  founded: string;
  email: string;
  phone: string;
  website: string;
  logo: string | null;
  about: string;
  description: string;
  industries: string[];
  techStacks: string[];
  jobRoles: string[];
  jobTypes: string[];
  benefits: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  activeJobs: number;
  matchScore: number;
  hubzoneStatus: string;
  securityClearance: string[];
  certifications: string[];
  federalAgencies: string[];
};

const parseDelimitedList = (value?: string | null): string[] =>
  value
    ? value
        .split(/[,|\n]/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

const computeHash = (input: string): number => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return Math.abs(hash);
};

const resolveId = (org: OrganizationDTO): string => {
  if (org.id !== undefined) return String(org.id);
  if (org.organizationId !== undefined) return String(org.organizationId);
  if (org.organizationID !== undefined) return String(org.organizationID);
  if (org.organizationName) {
    return org.organizationName.toLowerCase().replace(/\s+/g, "-");
  }
  return `org-${Math.random().toString(36).slice(2, 10)}`;
};

const computeMatchScore = (identifier: string): number => {
  const hash = computeHash(identifier);
  return 70 + (hash % 31); // returns between 70-100
};

const normalizeLocation = (city?: string, state?: string): string => {
  if (city && state) return `${city}, ${state}`;
  return city || state || "Location not specified";
};

const deriveHubzoneStatus = (
  explicitStatus?: string,
  specialties?: string,
): string => {
  if (explicitStatus) return explicitStatus;
  if (specialties && specialties.toLowerCase().includes("hubzone")) {
    return "HubZone Certified";
  }
  return "Not specified";
};

export const mapOrganizationToCompanyProfile = (
  org: OrganizationDTO,
): CompanyProfile => {
  const id = resolveId(org);
  const industries = parseDelimitedList(org.specialties);
  const techStacks = parseDelimitedList(org.technologies);
  const benefits = parseDelimitedList(org.benefits);
  const jobRoles = parseDelimitedList(org.jobRoles);
  const parsedJobTypes = parseDelimitedList(org.jobTypes);
  const jobTypes =
    parsedJobTypes.length > 0 ? parsedJobTypes : ["Full-time", "Remote", "Hybrid"];
  const numericId =
    typeof org.organizationID === "number"
      ? org.organizationID
      : typeof org.organizationId === "number"
        ? org.organizationId
        : typeof org.id === "number"
          ? org.id
          : undefined;

  return {
    id,
    numericId,
    name: org.organizationName || "Unnamed Organization",
    industry: org.organizationType || "Industry not specified",
    location: normalizeLocation(org.city, org.state),
    city: org.city || "",
    state: org.state || "",
    zipCode: org.zip || "",
    addressLine1: org.addressLine1 || "",
    addressLine2: org.addressLine2 || "",
    headquarters:
      org.city && org.state
        ? `${org.city}, ${org.state}${org.zip ? ` ${org.zip}` : ""}`
        : org.city || org.state || "Not specified",
    officePolicy: org.officePolicy || "Remote & Onsite",
    employees: org.size || "Size not specified",
    founded: org.founded || "Year not provided",
    email: org.organizationEmail || "",
    phone: org.phoneNumber || "",
    website: org.website || "",
    logo: org.logo || null,
    about: org.about || "",
    description: org.description || org.about || "Description coming soon.",
    industries: industries.length > 0 ? industries : [org.organizationType || "Industry"],
    techStacks,
    jobRoles: jobRoles.length > 0 ? jobRoles : industries,
    jobTypes,
    benefits,
    social: {
      linkedin: org.linkedin ?? "",
      twitter: org.twitter ?? "",
      facebook: org.facebook ?? "",
      instagram: org.instagram ?? "",
    },
    activeJobs: 0,
    matchScore: computeMatchScore(id),
    hubzoneStatus: deriveHubzoneStatus(org.hubzoneStatus, org.specialties),
    securityClearance: parseDelimitedList(org.securityClearance),
    certifications: parseDelimitedList(org.certifications),
    federalAgencies: parseDelimitedList(org.federalAgencies),
  };
};

