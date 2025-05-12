"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  FileText, 
  Copy, 
  Download, 
  MoreVertical, 
  Trash2, 
  ExternalLink, 
  Edit 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample data for the summaries
const initialSummaries = [
  {
    id: "1",
    title: "Product Strategy Meeting",
    date: "May 12, 2025",
    keyPoints: 5,
    actionItems: 4,
    duration: "45 min"
  },
  {
    id: "2",
    title: "Weekly Team Sync",
    date: "May 10, 2025",
    keyPoints: 3,
    actionItems: 2,
    duration: "30 min"
  },
  {
    id: "3",
    title: "Client Presentation",
    date: "May 5, 2025",
    keyPoints: 6,
    actionItems: 5,
    duration: "52 min"
  },
  {
    id: "4",
    title: "Marketing Campaign Planning",
    date: "May 1, 2025",
    keyPoints: 4,
    actionItems: 3,
    duration: "35 min"
  },
];

export default function SummariesPage() {
  const [summaries, setSummaries] = useState(initialSummaries);
  const { toast } = useToast();

  const handleDeleteSummary = (id: string) => {
    setSummaries(summaries.filter(summary => summary.id !== id));
    toast({
      title: "Summary deleted",
      description: "The summary has been deleted successfully.",
    });
  };

  const handleCopySummary = (id: string) => {
    toast({
      title: "Summary copied",
      description: "The summary has been copied to your clipboard.",
    });
  };

  return (
    <DashboardShell>
      <DashboardHeader heading="Summaries" text="View and manage your meeting summaries">
        <Button variant="outline" asChild>
          <Link href="/dashboard/uploads">
            Generate New Summary
          </Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summaries.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
              <h3 className="text-lg font-medium">No summaries yet</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-6">
                Upload a meeting recording to generate your first summary.
              </p>
              <Button asChild>
                <Link href="/dashboard/uploads">Upload Recording</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          summaries.map((summary) => (
            <Card key={summary.id} className="overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg leading-tight">{summary.title}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="-mt-1">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/summaries/${summary.id}`}>
                          <FileText className="mr-2 h-4 w-4" />
                          <span>View Details</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleCopySummary(summary.id)}>
                        <Copy className="mr-2 h-4 w-4" />
                        <span>Copy to Clipboard</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download PDF</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-destructive focus:text-destructive"
                        onClick={() => handleDeleteSummary(summary.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardDescription>{summary.date} • {summary.duration}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="font-medium">{summary.keyPoints}</span>
                    <span className="ml-1 text-muted-foreground">key points</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{summary.actionItems}</span>
                    <span className="ml-1 text-muted-foreground">action items</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4" 
                  variant="outline"
                  asChild
                >
                  <Link href={`/dashboard/summaries/${summary.id}`}>
                    View Summary
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </DashboardShell>
  );
}