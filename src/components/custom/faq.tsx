"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "Do you offer dine-in, takeaway, or delivery?",
    answer:
      "We offer dine-in and takeaway options, with delivery available through selected platforms.",
  },
  {
    id: "item-2",
    question: "Do I need a reservation?",
    answer:
      "Reservations are recommended during busy hours, but we always welcome walk-ins whenever possible.",
  },
  {
    id: "item-3",
    question: "What makes your food special?",
    answer:
      "We focus on quality ingredients, refined recipes, and consistent craftsmanship to deliver a memorable dining experience.",
  },
  {
    id: "item-4",
    question: "Is your menu suitable for groups or families?",
    answer:
      "Absolutely. Our diverse menu offers something for everyone, making it perfect for both small gatherings and larger groups.",
  },
  {
    id: "item-5",
    question: "Do you have vegetarian or dietary-friendly options?",
    answer:
      "Yes, our menu includes a variety of vegetarian and dietary-friendly dishes. Please let our staff know about any specific requirements.",
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
            Find answers to common questions about our services
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
          <p className="my-2 text-muted-foreground">
            Can't find the answer you're looking for? Our friendly team is here
            to help.
          </p>

          <Link
            to="/contact"
            className=" bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-[0.15em] border border-primary hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
