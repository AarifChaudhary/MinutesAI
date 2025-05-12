import { Metadata } from "next";

import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { SiteFooter } from "@/components/dashboard/site-footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Dashboard | Lovable AI",
  description: "Manage your meeting recordings and summaries",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <DashboardNav />
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden pt-6">{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}