import type { Metadata } from "next";
import { ApplicantHeader } from "@/components/layout/applicant-header";
import { ApplicantFooter } from "@/components/layout/applicant-footer";
import { ScrollToBottom } from "@/components/ui/scroll-to-bottom";

export const metadata: Metadata = {
  title: "Applicant · Hubzone Careers",
};

export default function ApplicantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <ApplicantHeader />
      <main className="flex-1">{children}</main>
      <ApplicantFooter />
      <ScrollToBottom />
    </div>
  );
}

