"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Building2,
  MapPin,
  Users,
  Sparkles,
  TrendingUp,
  Briefcase,
  X,
  ChevronDown,
  Shield,
  Award,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypingText } from "@/components/ui/typing-text";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { getOrganizations } from "@/lib/api/employer-api";
import {
  CompanyProfile,
  mapOrganizationToCompanyProfile,
} from "@/components/companies/organization-utils";

type FilterState = {
  industry: string[];
  location: string[];
  companySize: string[];
  jobType: string[];
  techStack: string[];
  hubzoneStatus: string[];
  securityClearance: string[];
  certifications: string[];
  federalAgency: string[];
};

type FilterCategory = keyof FilterState;

export function CompaniesListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoadingCompanies, setIsLoadingCompanies] = useState(true);
  const [companiesError, setCompaniesError] = useState<string | null>(null);
  const [companies, setCompanies] = useState<CompanyProfile[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    industry: [],
    location: [],
    companySize: [],
    jobType: [],
    techStack: [],
    hubzoneStatus: [],
    securityClearance: [],
    certifications: [],
    federalAgency: [],
  });

  useEffect(() => {
    const fetchCompanies = async () => {
      setIsLoadingCompanies(true);
      setCompaniesError(null);
      try {
        const organizations = await getOrganizations();
        setCompanies(organizations.map(mapOrganizationToCompanyProfile));
      } catch (error) {
        setCompaniesError(
          error instanceof Error
            ? error.message
            : "Failed to load organizations. Please try again later.",
        );
      } finally {
        setIsLoadingCompanies(false);
      }
    };

    fetchCompanies();
  }, []);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industries.some((ind) =>
          ind.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesFilters =
        (filters.industry.length === 0 ||
          filters.industry.some((ind) => company.industries.includes(ind))) &&
        (filters.location.length === 0 ||
          (company.location &&
            filters.location.some((loc) =>
              company.location.toLowerCase().includes(loc.toLowerCase()),
            ))) &&
        (filters.companySize.length === 0 ||
          filters.companySize.includes(company.employees)) &&
        (filters.jobType.length === 0 ||
          filters.jobType.some((type) => company.jobTypes.includes(type))) &&
        (filters.techStack.length === 0 ||
          filters.techStack.some((tech) => company.techStacks.includes(tech))) &&
        (filters.hubzoneStatus.length === 0 ||
          filters.hubzoneStatus.includes(company.hubzoneStatus)) &&
        (filters.securityClearance.length === 0 ||
          filters.securityClearance.some((clearance) =>
            company.securityClearance.includes(clearance),
          )) &&
        (filters.certifications.length === 0 ||
          filters.certifications.some((cert) =>
            company.certifications.includes(cert),
          )) &&
        (filters.federalAgency.length === 0 ||
          filters.federalAgency.some((agency) =>
            company.federalAgencies.includes(agency),
          ));

      return matchesSearch && matchesFilters;
    });
  }, [companies, filters, searchQuery]);

  const companiesToDisplay: (CompanyProfile | null)[] = isLoadingCompanies
    ? Array.from({ length: 6 }, () => null)
    : filteredCompanies;

  const clearFilters = () => {
    setFilters({
      industry: [],
      location: [],
      companySize: [],
      jobType: [],
      techStack: [],
      hubzoneStatus: [],
      securityClearance: [],
      certifications: [],
      federalAgency: [],
    });
  };

  const toggleFilter = (category: FilterCategory, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [category]: newValues };
    });
  };

  const removeFilter = (category: FilterCategory, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((v) => v !== value),
    }));
  };

  const hasActiveFilters = Object.values(filters).some((f) => f.length > 0);
  const totalActiveFilters = Object.values(filters).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <TypingText
          text="Explore Companies"
          className="text-4xl font-semibold tracking-tight mb-3"
          speed={50}
        />
        <p className="text-lg text-muted-foreground">
          Discover HUBZone-focused employers and find your next opportunity
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-6"
      >
        <Card className="p-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search companies by name, industry, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                  {hasActiveFilters && (
                    <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {totalActiveFilters}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto border-l-2 border-border/60">
                <FilterDrawerContent
                  filters={filters}
                  toggleFilter={toggleFilter}
                  clearFilters={clearFilters}
                  hasActiveFilters={hasActiveFilters}
                  totalActiveFilters={totalActiveFilters}
                  removeFilter={removeFilter}
                  onClose={() => setIsFilterOpen(false)}
                />
              </SheetContent>
            </Sheet>
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" />
              AI Match
            </Button>
          </div>
        </Card>

        {/* Active Filters Display (Outside Drawer) */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4"
          >
            <Card className="p-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
                {filters.industry.map((ind) => (
                  <Badge key={`industry-${ind}`} variant="secondary" className="gap-1">
                    Industry: {ind}
                    <button
                      onClick={() => removeFilter("industry", ind)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.location.map((loc) => (
                  <Badge key={`location-${loc}`} variant="secondary" className="gap-1">
                    Location: {loc}
                    <button
                      onClick={() => removeFilter("location", loc)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.companySize.map((size) => (
                  <Badge key={`size-${size}`} variant="secondary" className="gap-1">
                    Size: {size}
                    <button
                      onClick={() => removeFilter("companySize", size)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.jobType.map((type) => (
                  <Badge key={`job-${type}`} variant="secondary" className="gap-1">
                    Job: {type}
                    <button
                      onClick={() => removeFilter("jobType", type)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.techStack.map((tech) => (
                  <Badge key={`tech-${tech}`} variant="secondary" className="gap-1">
                    Tech: {tech}
                    <button
                      onClick={() => removeFilter("techStack", tech)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.hubzoneStatus.map((status) => (
                  <Badge key={`hubzone-${status}`} variant="secondary" className="gap-1">
                    HubZone: {status}
                    <button
                      onClick={() => removeFilter("hubzoneStatus", status)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.securityClearance.map((clearance) => (
                  <Badge key={`clearance-${clearance}`} variant="secondary" className="gap-1">
                    Clearance: {clearance}
                    <button
                      onClick={() => removeFilter("securityClearance", clearance)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.certifications.map((cert) => (
                  <Badge key={`cert-${cert}`} variant="secondary" className="gap-1">
                    Cert: {cert}
                    <button
                      onClick={() => removeFilter("certifications", cert)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.federalAgency.map((agency) => (
                  <Badge key={`agency-${agency}`} variant="secondary" className="gap-1">
                    Agency: {agency}
                    <button
                      onClick={() => removeFilter("federalAgency", agency)}
                      className="ml-1 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="ml-auto gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear All
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-4 flex items-center justify-between"
      >
        <p className="text-sm text-muted-foreground">
          {isLoadingCompanies ? (
            "Loading companies..."
          ) : companiesError ? (
            "Unable to load companies"
          ) : (
            <>
              Found{" "}
              <span className="font-semibold text-foreground">
                {filteredCompanies.length}
              </span>{" "}
              {filteredCompanies.length === 1 ? "company" : "companies"}
            </>
          )}
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Sort by Match
          </Button>
        </div>
      </motion.div>

      {/* Companies Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companiesError && !isLoadingCompanies ? (
          <Card className="col-span-full p-8 text-center border-red-200 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30">
            <p className="text-red-600 dark:text-red-300">
              {companiesError}
            </p>
            <Button className="mt-4" onClick={() => window.location.reload()}>
              Retry
            </Button>
          </Card>
        ) : (
          <AnimatePresence mode="popLayout">
            {companiesToDisplay.map((company, index) => (
              <motion.div
                key={company ? company.id : `skeleton-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                layout
              >
                {company ? (
                  <Card className="group h-full p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
                    <Link href={`/applicant/companies/${company.id}`}>
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              {company.logo ? (
                                <img
                                  src={company.logo}
                                  alt={company.name}
                                  className="h-full w-full rounded-lg object-cover"
                                />
                              ) : (
                                <Building2 className="h-6 w-6 text-primary" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                {company.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {company.industry}
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="gap-1">
                            <Sparkles className="h-3 w-3" />
                            {company.matchScore}%
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {company.description}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {company.location}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Users className="h-3 w-3" />
                            {company.employees}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Briefcase className="h-3 w-3" />
                            {company.activeJobs} active jobs
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {company.industries.slice(0, 2).map((industry) => (
                            <Badge key={industry} variant="outline" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                          {company.industries.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{company.industries.length - 2}
                            </Badge>
                          )}
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="pt-2"
                        >
                          <Button className="w-full" variant="outline">
                            View Company Details
                            <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                          </Button>
                        </motion.div>
                      </div>
                    </Link>
                  </Card>
                ) : (
                  <Card className="h-full p-6 space-y-4 animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-muted" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-1/2 bg-muted rounded" />
                        <div className="h-3 w-1/3 bg-muted rounded" />
                      </div>
                    </div>
                    <div className="h-3 bg-muted rounded" />
                    <div className="h-3 bg-muted rounded" />
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-muted rounded" />
                      <div className="h-6 w-16 bg-muted rounded" />
                    </div>
                    <div className="h-10 w-full bg-muted rounded" />
                  </Card>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Empty State */}
      {!isLoadingCompanies && !companiesError && filteredCompanies.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No companies found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filters to find more companies.
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Clear All Filters
          </Button>
        </motion.div>
      )}

      {/* AI Insights Card */}
      {filteredCompanies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">AI Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Based on your profile, these companies have a high match rate with your skills and
                  preferences. Consider exploring their open positions.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

// Filter Drawer Content Component
interface FilterDrawerContentProps {
  filters: FilterState;
  toggleFilter: (category: FilterCategory, value: string) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
  totalActiveFilters: number;
  removeFilter: (category: FilterCategory, value: string) => void;
  onClose: () => void;
}

function FilterDrawerContent({
  filters,
  toggleFilter,
  clearFilters,
  hasActiveFilters,
  totalActiveFilters,
  removeFilter,
  onClose,
}: FilterDrawerContentProps) {
  return (
    <div className="flex flex-col h-full">
      <SheetHeader className="border-b border-border/60 pb-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <SheetTitle className="text-2xl font-semibold flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Filters
            </SheetTitle>
            <SheetDescription className="mt-2">
              {hasActiveFilters
                ? `${totalActiveFilters} filter${totalActiveFilters > 1 ? "s" : ""} active`
                : "Refine your company search with multiple selections"}
            </SheetDescription>
          </div>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
              <X className="h-4 w-4" />
              Clear All
            </Button>
          )}
        </div>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto py-6">
        <div className="grid gap-8 md:grid-cols-2 px-6">
          {/* Left Column */}
          <div className="space-y-8 pr-4">
            {/* Industry Filter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                <Building2 className="h-4 w-4 text-primary" />
                Industry
              </Label>
              <div className="space-y-2">
                {["Technology Services", "Government Contracting", "Software Development", "Cybersecurity", "Consulting", "Information Technology"].map((industry, index) => (
                  <motion.label
                    key={industry}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.03 }}
                    className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                  >
                    <Checkbox
                      checked={filters.industry.includes(industry)}
                      onCheckedChange={() => toggleFilter("industry", industry)}
                    />
                    <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                      {industry}
                    </span>
                    {filters.industry.includes(industry) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                    )}
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Location Filter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                <MapPin className="h-4 w-4 text-primary" />
                Location
              </Label>
              <div className="space-y-2">
                {["Reston, VA", "Arlington, VA", "Alexandria, VA", "Washington, DC", "Remote", "Hybrid"].map((location, index) => (
                  <motion.label
                    key={location}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.03 }}
                    className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                  >
                    <Checkbox
                      checked={filters.location.includes(location)}
                      onCheckedChange={() => toggleFilter("location", location)}
                    />
                    <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                      {location}
                    </span>
                    {filters.location.includes(location) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                    )}
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Company Size Filter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                <Users className="h-4 w-4 text-primary" />
                Company Size
              </Label>
              <div className="space-y-2">
                {[
                  { value: "1-50", label: "1-50 employees" },
                  { value: "51-100", label: "51-100 employees" },
                  { value: "101-200", label: "101-200 employees" },
                  { value: "201-500", label: "201-500 employees" },
                  { value: "500+", label: "500+ employees" },
                ].map((size, index) => (
                  <motion.label
                    key={size.value}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.03 }}
                    className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                  >
                    <Checkbox
                      checked={filters.companySize.includes(size.value)}
                      onCheckedChange={() => toggleFilter("companySize", size.value)}
                    />
                    <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                      {size.label}
                    </span>
                    {filters.companySize.includes(size.value) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                    )}
                  </motion.label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 pl-4 border-l border-border/40">
            {/* Job Type Filter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                <Briefcase className="h-4 w-4 text-primary" />
                Job Type
              </Label>
              <div className="space-y-2">
                {["Full-time", "Part-time", "Contract", "Temporary", "Remote", "Hybrid"].map((type, index) => (
                  <motion.label
                    key={type}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.03 }}
                    className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                  >
                    <Checkbox
                      checked={filters.jobType.includes(type)}
                      onCheckedChange={() => toggleFilter("jobType", type)}
                    />
                    <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                      {type}
                    </span>
                    {filters.jobType.includes(type) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                    )}
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Filter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                <Sparkles className="h-4 w-4 text-primary" />
                Tech Stack
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {["React", "TypeScript", "Node.js", "AWS", "Python", "Django", "Kubernetes", "Docker", "Java", "Spring Boot", "Angular", "Vue.js"].map((tech, index) => (
                  <motion.label
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.03 }}
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                  >
                    <Checkbox
                      checked={filters.techStack.includes(tech)}
                      onCheckedChange={() => toggleFilter("techStack", tech)}
                    />
                    <span className="text-xs flex-1 group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
                    {filters.techStack.includes(tech) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                      />
                    )}
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* HubZone Status Filter - Most Important! */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                <Award className="h-4 w-4 text-primary" />
                HubZone Status
              </Label>
              <div className="space-y-2">
                {["HubZone Certified", "Non-HubZone"].map((status, index) => (
                  <motion.label
                    key={status}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.03 }}
                    className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                  >
                    <Checkbox
                      checked={filters.hubzoneStatus.includes(status)}
                      onCheckedChange={() => toggleFilter("hubzoneStatus", status)}
                    />
                    <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                      {status}
                    </span>
                    {filters.hubzoneStatus.includes(status) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                    )}
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Security Clearance Filter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
                <Shield className="h-4 w-4 text-primary" />
                Security Clearance
              </Label>
              <div className="space-y-2">
                {["Public Trust", "Secret", "Top Secret", "TS/SCI", "None Required"].map((clearance, index) => (
                  <motion.label
                    key={clearance}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.03 }}
                    className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                  >
                    <Checkbox
                      checked={filters.securityClearance.includes(clearance)}
                      onCheckedChange={() => toggleFilter("securityClearance", clearance)}
                    />
                    <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                      {clearance}
                    </span>
                    {filters.securityClearance.includes(clearance) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                    )}
                  </motion.label>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Row - Additional Filters */}
        <div className="grid gap-8 md:grid-cols-2 mt-8 pt-8 border-t border-border/60">
          {/* Left Column - Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-4 pr-4"
          >
            <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
              <Award className="h-4 w-4 text-primary" />
              Certifications
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {["HUBZone", "8(a)", "WOSB", "VOSB", "SDVOSB", "EDWOSB", "CMMC", "ISO 27001"].map((cert, index) => (
                <motion.label
                  key={cert}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.03 }}
                  className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                >
                  <Checkbox
                    checked={filters.certifications.includes(cert)}
                    onCheckedChange={() => toggleFilter("certifications", cert)}
                  />
                  <span className="text-xs flex-1 group-hover:text-foreground transition-colors">
                    {cert}
                  </span>
                  {filters.certifications.includes(cert) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="h-2 w-2 rounded-full bg-primary flex-shrink-0"
                    />
                  )}
                </motion.label>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Federal Agency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="space-y-4 pl-4 border-l border-border/40"
          >
            <Label className="text-base font-semibold flex items-center gap-2 pb-3 border-b border-border/60">
              <Landmark className="h-4 w-4 text-primary" />
              Federal Agency
            </Label>
            <div className="space-y-2">
              {["DoD", "DHS", "GSA", "NASA", "VA", "HHS", "DOJ", "Other"].map((agency, index) => (
                <motion.label
                  key={agency}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.03 }}
                  className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2.5 rounded-lg transition-colors group border border-transparent hover:border-border/40"
                >
                  <Checkbox
                    checked={filters.federalAgency.includes(agency)}
                    onCheckedChange={() => toggleFilter("federalAgency", agency)}
                  />
                  <span className="text-sm flex-1 group-hover:text-foreground transition-colors">
                    {agency}
                  </span>
                  {filters.federalAgency.includes(agency) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="h-2 w-2 rounded-full bg-primary"
                    />
                  )}
                </motion.label>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer with Active Filters */}
      <SheetFooter className="border-t border-border/60 pt-4 mt-auto">
        <div className="w-full space-y-4">
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <p className="text-sm font-medium text-muted-foreground">Active Filters:</p>
              <div className="flex flex-wrap gap-2">
                {filters.industry.map((ind) => (
                  <Badge key={`industry-${ind}`} variant="secondary" className="gap-1">
                    {ind}
                    <button
                      onClick={() => removeFilter("industry", ind)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.location.map((loc) => (
                  <Badge key={`location-${loc}`} variant="secondary" className="gap-1">
                    {loc}
                    <button
                      onClick={() => removeFilter("location", loc)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.companySize.map((size) => (
                  <Badge key={`size-${size}`} variant="secondary" className="gap-1">
                    {size}
                    <button
                      onClick={() => removeFilter("companySize", size)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.jobType.map((type) => (
                  <Badge key={`job-${type}`} variant="secondary" className="gap-1">
                    {type}
                    <button
                      onClick={() => removeFilter("jobType", type)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.techStack.map((tech) => (
                  <Badge key={`tech-${tech}`} variant="secondary" className="gap-1">
                    {tech}
                    <button
                      onClick={() => removeFilter("techStack", tech)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.hubzoneStatus.map((status) => (
                  <Badge key={`hubzone-${status}`} variant="secondary" className="gap-1">
                    {status}
                    <button
                      onClick={() => removeFilter("hubzoneStatus", status)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.securityClearance.map((clearance) => (
                  <Badge key={`clearance-${clearance}`} variant="secondary" className="gap-1">
                    {clearance}
                    <button
                      onClick={() => removeFilter("securityClearance", clearance)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.certifications.map((cert) => (
                  <Badge key={`cert-${cert}`} variant="secondary" className="gap-1">
                    {cert}
                    <button
                      onClick={() => removeFilter("certifications", cert)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {filters.federalAgency.map((agency) => (
                  <Badge key={`agency-${agency}`} variant="secondary" className="gap-1">
                    {agency}
                    <button
                      onClick={() => removeFilter("federalAgency", agency)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}
          <div className="flex gap-2 w-full">
            {hasActiveFilters && (
              <Button variant="outline" onClick={clearFilters} className="flex-1">
                <X className="mr-2 h-4 w-4" />
                Clear All
              </Button>
            )}
            <Button className="flex-1" onClick={onClose}>
              Apply Filters
            </Button>
          </div>
        </div>
      </SheetFooter>
    </div>
  );
}

