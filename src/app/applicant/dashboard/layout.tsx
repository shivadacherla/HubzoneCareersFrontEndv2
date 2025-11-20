import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard · Hubzone Careers",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

