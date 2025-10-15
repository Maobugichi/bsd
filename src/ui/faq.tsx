import { forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including building construction, MEP design and installation, IT infrastructure, import/export logistics, and property development."
  },
  {
    question: "How do I request a project quote?",
    answer:
      "You can request a quote by contacting us through our website's contact form or by calling our office directly. A project consultant will follow up within 24 hours."
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we have experience managing international logistics and construction partnerships. Our team is equipped to handle cross-border projects seamlessly."
  },
  {
    question: "Are your services customizable to specific client needs?",
    answer:
      "Absolutely. Every project is tailored to meet the unique goals, timeline, and budget of our clients. We offer full design-build flexibility."
  }
];

export const FAQSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section 
      ref={ref} 
      tabIndex={6} 
      className="w-full flex flex-col items-center justify-center h-auto min-h-[50vh] md:min-h-[70vh] mx-auto mt-16 p-4"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-black">
        Frequently Asked Questions
      </h2>
      
      <Accordion 
        type="single" 
        collapsible 
        className="w-full max-w-3xl mx-auto space-y-4"
      >
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-gray-200 rounded-lg px-2 bg-white"
          >
            <AccordionTrigger className="text-left text-sm md:text-lg font-medium text-black hover:no-underline px-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-sm md:text-base px-4 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
});