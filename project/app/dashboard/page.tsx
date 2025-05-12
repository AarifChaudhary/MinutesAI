import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { UploadStats } from "@/components/dashboard/upload-stats";
import { RecentUploads } from "@/components/dashboard/recent-uploads";
import { UploadLimit } from "@/components/dashboard/upload-limit";
import { CreateUploadButton } from "@/components/dashboard/create-upload-button";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Manage your meeting recordings and summaries">
        <CreateUploadButton />
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <UploadStats
          title="Total Uploads"
          value="7"
          description="Your total uploads across all time"
        />
        <UploadStats
          title="This Month"
          value="3"
          description="Uploads during the current billing period"
        />
        <UploadStats
          title="Total Minutes"
          value="127"
          description="Total minutes of audio processed"
        />
        <UploadStats
          title="Remaining"
          value="2"
          description="Uploads remaining this month"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-7">
        <div className="col-span-4">
          <RecentUploads />
        </div>
        <div className="col-span-3">
          <UploadLimit />
        </div>
      </div>
    </DashboardShell>
  );
}