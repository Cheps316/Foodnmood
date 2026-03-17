"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase, simply contact our support team within 30 days and we'll process a full refund, no questions asked.",
  },
  {
    id: "item-2",
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days within the continental US. Express shipping is available for 2-3 day delivery. International shipping times vary by location, usually between 7-14 business days.",
  },
  {
    id: "item-3",
    question: "Do you offer customer support?",
    answer:
      "Absolutely! Our dedicated customer support team is available 24/7 via email, live chat, and phone. We pride ourselves on quick response times - most queries are resolved within 2 hours during business hours.",
  },
  {
    id: "item-4",
    question: "Can I change my subscription plan?",
    answer:
      "Yes, you can upgrade or downgrade your subscription at any time from your account settings. Changes take effect at the start of your next billing cycle. Pro-rated credits are applied when upgrading mid-cycle.",
  },
  {
    id: "item-5",
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use industry-standard AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted on SOC 2 Type II certified data centers with 99.99% uptime.",
  },
  {
    id: "item-6",
    question: "Do you offer discounts for teams?",
    answer:
      "Yes! We offer tiered pricing for teams. Teams of 5-10 members get 15% off, teams of 11-25 get 25% off, and enterprise teams of 25+ can contact us for custom pricing that includes dedicated support and SLA guarantees.",
  },
  {
    id: "item-7",
    question: "How do I cancel my account?",
    answer:
      "You can cancel your account at any time from the billing section in your account settings. Your access will continue until the end of your current billing period. We also offer the option to pause your subscription if you need a temporary break.",
  },
];

export function FAQ() {
  return (
    <section className="container">
      <div className="mx-auto max-w-4xl  px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Find answers to common questions about our product and services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 rounded-lg border border-border/50 bg-muted/30 p-6 text-center">
          <h3 className="text-lg font-semibold text-foreground">
            Still have questions?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Can't find the answer you're looking for? Our friendly team is here
            to help.
          </p>
          <button className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
