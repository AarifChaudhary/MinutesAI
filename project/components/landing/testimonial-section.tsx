"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Product Manager, TechCorp",
    avatar: "SJ",
    content: "Lovable AI has transformed how we document and follow up on meetings. Our team saves hours each week, and we never miss important details anymore.",
    className: "md:col-span-2"
  },
  {
    name: "Michael Chen",
    title: "CEO, StartupLabs",
    avatar: "MC",
    content: "As a startup founder, I'm in meetings all day. Lovable AI helps me stay focused on conversations instead of taking notes."
  },
  {
    name: "Emma Rodriguez",
    title: "Team Lead, MarketingPro",
    avatar: "ER",
    content: "The action item extraction is a game-changer. Our team accountability has improved significantly since we started using Lovable AI."
  },
  {
    name: "David Kim",
    title: "Project Manager, BuildCo",
    avatar: "DK",
    content: "The transcription accuracy is impressive, even with multiple speakers and technical jargon. Highly recommended for any business.",
    className: "md:col-span-2"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what professionals across industries are saying about Lovable AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn("flex flex-col", testimonial.className)}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <blockquote className="text-muted-foreground flex-grow">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-4 pt-4 border-t">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-2xl font-bold text-muted-foreground">
              <span className="text-primary text-4xl block mb-2">87%</span>
              Time Saved
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              <span className="text-primary text-4xl block mb-2">10K+</span>
              Meetings Processed
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              <span className="text-primary text-4xl block mb-2">94%</span>
              User Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}