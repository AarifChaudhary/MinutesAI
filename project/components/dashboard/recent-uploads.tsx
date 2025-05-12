"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, MoreHorizontal, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

// Mock data for recent uploads
const mockUploads = [
  {
    id: 1,
    title: "Product Strategy Meeting",
    date: "May 12, 2025",
    duration: "45 min",
    status: "Completed",
    fileType: "audio/mp3",
  },
  {
    id: 2,
    title: "Weekly Team Sync",
    date: "May 10, 2025",
    duration: "30 min",
    status: "Completed",
    fileType: "video/mp4",
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "May 5, 2025",
    duration: "52 min",
    status: "Completed",
    fileType: "audio/wav",
  },
];

export function RecentUploads() {
  const { toast } = useToast();
  const [uploads, setUploads] = useState(mockUploads);

  const handleDeleteUpload = (id: number) => {
    setUploads(uploads.filter(upload => upload.id !== id));
    toast({
      title: "Upload deleted",
      description: "The upload has been deleted successfully.",
    });
  };

  const handleViewSummary = (id: number) => {
    toast({
      title: "Viewing summary",
      description: "Redirecting to summary page...",
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Uploads</CardTitle>
        <CardDescription>
          Your recently uploaded meeting recordings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {uploads.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
            <h3 className="text-lg font-medium">No uploads yet</h3>
            <p className="text-sm text-muted-foreground mt-2 mb-6">
              Upload your first meeting recording to get started.
            </p>
            <Button variant="outline">Upload a Recording</Button>
          </div>
        ) : (
          <div className="space-y-4">
            {uploads.map((upload) => (
              <div 
                key={upload.id} 
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{upload.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{upload.date}</span>
                      <span>•</span>
                      <span>{upload.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{upload.status}</Badge>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleViewSummary(upload.id)}
                  >
                    View Summary
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
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
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}