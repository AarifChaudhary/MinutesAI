"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { CreateUploadButton } from "@/components/dashboard/create-upload-button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  MoreVertical, 
  Download, 
  Trash2, 
  Upload 
} from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

// Sample data for the uploads
const initialUploads = [
  {
    id: "1",
    title: "Product Strategy Meeting",
    date: new Date(2025, 4, 12),
    duration: "45:12",
    status: "completed",
    fileType: "audio/mp3",
    fileSize: "12.4 MB",
  },
  {
    id: "2",
    title: "Weekly Team Sync",
    date: new Date(2025, 4, 10),
    duration: "30:05",
    status: "completed",
    fileType: "video/mp4",
    fileSize: "45.8 MB",
  },
  {
    id: "3",
    title: "Client Presentation",
    date: new Date(2025, 4, 5),
    duration: "52:30",
    status: "completed",
    fileType: "audio/wav",
    fileSize: "20.1 MB",
  },
  {
    id: "4",
    title: "Marketing Campaign Planning",
    date: new Date(2025, 4, 1),
    duration: "35:42",
    status: "completed",
    fileType: "audio/mp3",
    fileSize: "10.5 MB",
  },
];

export default function UploadsPage() {
  const [uploads, setUploads] = useState(initialUploads);
  const { toast } = useToast();

  const handleDeleteUpload = (id: string) => {
    setUploads(uploads.filter(upload => upload.id !== id));
    toast({
      title: "Upload deleted",
      description: "The upload has been deleted successfully.",
    });
  };

  const handleViewSummary = (id: string) => {
    toast({
      title: "Viewing summary",
      description: "Redirecting to summary page...",
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "success";
      case "processing":
        return "warning";
      case "failed":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <DashboardShell>
      <DashboardHeader heading="Uploads" text="Manage your meeting recordings and their processing status">
        <CreateUploadButton />
      </DashboardHeader>

      <Card>
        <CardHeader>
          <CardTitle>My Uploads</CardTitle>
          <CardDescription>
            View and manage all your uploaded meeting recordings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {uploads.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Upload className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
              <h3 className="text-lg font-medium">No uploads yet</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-6">
                Upload your first meeting recording to get started.
              </p>
              <CreateUploadButton />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {uploads.map((upload) => (
                  <TableRow key={upload.id}>
                    <TableCell className="font-medium">{upload.title}</TableCell>
                    <TableCell>{format(upload.date, "MMM d, yyyy")}</TableCell>
                    <TableCell>{upload.duration}</TableCell>
                    <TableCell>
                      {upload.fileType.split("/")[1].toUpperCase()}
                    </TableCell>
                    <TableCell>{upload.fileSize}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(upload.status) as any}>
                        {upload.status.charAt(0).toUpperCase() + upload.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewSummary(upload.id)}>
                            <FileText className="mr-2 h-4 w-4" />
                            <span>View Summary</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            <span>Download</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleDeleteUpload(upload.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </DashboardShell>
  );
}