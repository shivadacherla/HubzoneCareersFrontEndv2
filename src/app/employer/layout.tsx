import type { Metadata } from "next";
import { EmployerHeader } from "@/components/layout/employer-header";
import { EmployerFooter } from "@/components/layout/employer-footer";
import { ScrollToBottom } from "@/components/ui/scroll-to-bottom";

export const metadata: Metadata = {
  title: "Employer · Hubzone Careers",
};

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <EmployerHeader />
      <main className="flex-1">{children}</main>
      <EmployerFooter />
      <ScrollToBottom />
    </div>
  );
}

