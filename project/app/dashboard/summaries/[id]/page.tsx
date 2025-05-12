"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileText, Copy, Download, Edit, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Mock data for a meeting summary
const meetingSummary = {
  id: "1",
  title: "Product Strategy Meeting",
  date: "May 12, 2025",
  duration: "45 min",
  participants: ["John Doe", "Jane Smith", "Mike Johnson", "Sarah Wilson"],
  summary: `The team discussed the Q3 product roadmap with a focus on three major feature launches. 
    The mobile app redesign is on track for an August release with beta testing planned for July. 
    Customer satisfaction scores have increased by 18% since the last UI update.
    Marketing requested additional budget approval for the Q3 campaign launch, which was provisionally approved pending finance review.
    The team also discussed potential integration with third-party analytics tools to improve data insights.`,
  keyPoints: [
    "Q3 roadmap includes three major feature launches",
    "Mobile app redesign on track for August release",
    "Customer satisfaction increased by 18%",
    "Additional budget approved for marketing campaign",
    "Exploring third-party analytics integrations"
  ],
  actionItems: [
    {
      task: "Finalize Q3 product roadmap document",
      assignee: "Sarah",
      dueDate: "May 19, 2025"
    },
    {
      task: "Schedule beta testing for mobile app redesign",
      assignee: "Mike",
      dueDate: "June 15, 2025"
    },
    {
      task: "Review budget projections with finance",
      assignee: "John",
      dueDate: "May 20, 2025"
    },
    {
      task: "Research analytics integration options",
      assignee: "Jane",
      dueDate: "May 25, 2025"
    }
  ],
  transcript: `
    John: Welcome everyone to our product strategy meeting. Today we'll be discussing our Q3 roadmap and the progress on current initiatives.
    
    Jane: Great, I've prepared some slides on the mobile app redesign. We're on track for the August release and we've made good progress on the UI updates.
    
    Mike: That's excellent news. I've got the latest customer satisfaction scores which show an 18% increase since our last update.
    
    Sarah: That's impressive! We should leverage that in our marketing. Speaking of which, I'd like to request additional budget for our Q3 campaign.
    
    John: That sounds reasonable. Let's review the numbers and we can provisionally approve it pending finance review.
    
    Jane: I also wanted to discuss potential integration with third-party analytics tools. I think it could really improve our data insights.
    
    John: That's a good idea. Can you research some options and report back?
    
    Jane: Yes, I'll do that.
    
    John: Great, let's wrap up. Sarah, can you finalize the Q3 roadmap document by next week? Mike, please schedule the beta testing for the mobile app redesign.
    
    Sarah: Will do.
    
    Mike: Got it.
    
    John: And I'll review the budget projections with finance. Thanks everyone!
  `
};

export default function SummaryPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The summary has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF
    toast({
      title: "Download started",
      description: "Your summary is being downloaded as a PDF.",
    });
  };

  return (
    <DashboardShell>
      <DashboardHeader heading="Meeting Summary" text="Generated summary and insights from your meeting">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => handleCopy(meetingSummary.summary)}>
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </>
            )}
          </Button>
          <Button variant="outline" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-2xl">{meetingSummary.title}</CardTitle>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <span>{meetingSummary.date}</span>
                <span>•</span>
                <span>{meetingSummary.duration}</span>
                <span>•</span>
                <span>{meetingSummary.participants.length} participants</span>
              </div>
            </div>
            <Badge variant="outline" className="h-6">
              AI Generated
            </Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList>
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="keypoints">Key Points</TabsTrigger>
                <TabsTrigger value="actions">Action Items</TabsTrigger>
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
              </TabsList>
              <TabsContent value="summary" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Executive Summary</h3>
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {meetingSummary.summary}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="keypoints" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Key Points</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {meetingSummary.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="actions" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Action Items</h3>
                  <div className="space-y-3">
                    {meetingSummary.actionItems.map((item, index) => (
                      <div key={index} className="p-3 rounded-md border flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="h-5 w-5 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{item.task}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Assigned to {item.assignee}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline">Due {item.dueDate}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="transcript" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Full Transcript</h3>
                  <div className="whitespace-pre-line text-muted-foreground border rounded-md p-4 h-96 overflow-y-auto font-mono text-sm">
                    {meetingSummary.transcript}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meeting Participants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {meetingSummary.participants.map((participant, index) => (
                <Badge key={index} variant="secondary">
                  {participant}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}