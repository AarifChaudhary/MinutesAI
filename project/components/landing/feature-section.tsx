"use client";

import { File, MessagesSquare, Upload, Clipboard, Clock, Lightbulb, RefreshCw, Lock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Upload className="h-10 w-10 text-primary" />,
    title: "Easy Upload",
    description: "Upload meeting recordings in various formats like MP3, MP4, or WAV files directly from your device."
  },
  {
    icon: <File className="h-10 w-10 text-primary" />,
    title: "Smart Transcription",
    description: "Advanced AI technology converts your audio into accurate text transcripts, handling multiple speakers."
  },
  {
    icon: <MessagesSquare className="h-10 w-10 text-primary" />,
    title: "Meeting Summaries",
    description: "Automatically generate concise summaries highlighting key points and decisions from your meetings."
  },
  {
    icon: <Clipboard className="h-10 w-10 text-primary" />,
    title: "Action Items",
    description: "Extract and organize action items and assign them to team members with deadlines."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Time Saver",
    description: "Reduce meeting follow-up time by 60% with automatic transcription and summarization."
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Secure & Private",
    description: "Your data is encrypted and processed securely. We never share your information with third parties."
  }
];

export function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Lovable AI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our AI-powered meeting assistant saves you time and ensures you never miss important details again.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-card border rounded-lg overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-medium">1</div>
                    <div>
                      <h4 className="font-medium mb-1">Upload Recording</h4>
                      <p className="text-sm text-muted-foreground">Upload your meeting recording in various audio or video formats.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-medium">2</div>
                    <div>
                      <h4 className="font-medium mb-1">AI Processing</h4>
                      <p className="text-sm text-muted-foreground">Our AI transcribes the audio and analyzes the content.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-medium">3</div>
                    <div>
                      <h4 className="font-medium mb-1">Get Insights</h4>
                      <p className="text-sm text-muted-foreground">Receive a detailed summary with key points and action items.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-6 h-full flex items-center justify-center">
                <div className="w-full max-w-md aspect-video bg-background rounded border flex flex-col">
                  <div className="border-b px-4 py-2 flex items-center justify-between">
                    <div className="h-3 w-24 bg-muted-foreground/20 rounded-full"></div>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col space-y-3">
                    <div className="h-8 w-1/2 bg-muted-foreground/20 rounded"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-3 w-full bg-muted-foreground/20 rounded-full"></div>
                      <div className="h-3 w-5/6 bg-muted-foreground/20 rounded-full"></div>
                      <div className="h-3 w-4/6 bg-muted-foreground/20 rounded-full"></div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-8 w-20 bg-primary/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}