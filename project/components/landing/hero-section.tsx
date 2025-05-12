"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Headphones, Upload, FileText, Clipboard } from "lucide-react";
import { motion } from "framer-motion";
import { useSupabase } from "@/components/supabase-provider";

export function HeroSection() {
  const { user } = useSupabase();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-primary/10 text-primary w-fit">
              <span className="font-medium">AI Meeting Assistant</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Transform Your Meetings Into 
              <span className="text-primary block">Actionable Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Upload your meeting recordings and let our AI assistant transcribe, 
              summarize, and extract action items for you. Save time and never miss 
              important details again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href={user ? "/dashboard" : "/auth/signup"}>
                  {user ? "Go to Dashboard" : "Get Started Free"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#features">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="pt-4 text-sm text-muted-foreground">
              5 free uploads per month. No credit card required.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-lg border bg-card p-2"
          >
            <div className="rounded-md bg-muted overflow-hidden relative aspect-[4/3]">
              <div className="absolute inset-0 flex flex-col">
                <div className="flex items-center justify-between bg-card p-2 border-b">
                  <div className="flex items-center space-x-2">
                    <Headphones className="h-5 w-5 text-primary" />
                    <span className="font-medium text-sm">Meeting Summary</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-auto">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Product Strategy Meeting</h3>
                      <div className="text-xs text-muted-foreground mb-4">
                        May 12, 2025 • 45 min
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Key Points</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex gap-2">
                              <span className="text-primary">•</span>
                              <span>New feature prioritization for Q3 roadmap</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-primary">•</span>
                              <span>Customer satisfaction scores increased by 18%</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-primary">•</span>
                              <span>Budget approval for marketing campaign</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Action Items</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-start">
                              <span className="text-primary h-4 w-4 mt-0.5">✓</span>
                              <span>Sarah to finalize Q3 product roadmap by Friday</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <span className="text-primary h-4 w-4 mt-0.5">✓</span>
                              <span>Michael to review budget projections with finance</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" /> Export
                      </Button>
                      <Button size="sm" variant="outline">
                        <Clipboard className="h-4 w-4 mr-1" /> Copy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:60px_60px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C8B6FF30,transparent)]"></div>
      </div>
    </section>
  );
}