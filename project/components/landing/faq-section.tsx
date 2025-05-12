"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the transcription?",
    answer: "Our AI transcription boasts over 95% accuracy for clear audio recordings. The system can distinguish between multiple speakers and handles various accents well. For best results, we recommend using high-quality audio recordings with minimal background noise."
  },
  {
    question: "What file formats are supported?",
    answer: "We support a wide range of audio and video formats including MP3, MP4, WAV, M4A, and more. The maximum file size is 2GB for free accounts and 5GB for premium accounts."
  },
  {
    question: "How long does processing take?",
    answer: "Processing time depends on the length of your recording. Typically, a 1-hour meeting takes about 5-10 minutes to process. Premium users enjoy priority processing that can be up to 3x faster."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We take data security seriously. All uploads are encrypted using industry-standard TLS/SSL. Your files are stored securely and only accessible to you. We never share your data with third parties, and you can delete your data at any time."
  },
  {
    question: "How many uploads are included in the free plan?",
    answer: "The free plan includes 5 uploads per month, with a maximum recording length of 30 minutes each. After that, you can upgrade to our premium plans for unlimited uploads."
  },
  {
    question: "Can I integrate with Zoom, Google Meet, or Microsoft Teams?",
    answer: "Yes! Premium users can connect their Lovable AI account with Zoom, Google Meet, and Microsoft Teams to automatically process recordings from these platforms. Integration with Slack and other tools is coming soon."
  },
  {
    question: "Do you offer team or enterprise plans?",
    answer: "Yes, we offer team plans for small to medium businesses and enterprise plans for larger organizations. These include features like team management, shared folders, and custom integrations. Contact us for more details."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Lovable AI and how it can help your team.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions? <a href="/contact" className="text-primary font-medium hover:underline">Contact our support team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}