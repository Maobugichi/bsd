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
    question: "Can your services be customized?",
    answer:
      "Absolutely. Every project is tailored to meet the unique goals, timeline, and budget of our clients. We offer full design-build flexibility."
  }
];

export const FAQSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section 
      ref={ref} 
      tabIndex={6} 
      className=" flex flex-col items-center justify-center h-auto min-h-[50vh] md:min-h-[70vh] mx-auto mt-16 py-16 w-[90%]"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-black">
        Frequently Asked Questions
      </h2>
      
      <Accordion 
  type="single" 
  collapsible 
  className="border rounded-3xl mx-auto w-full max-w-3xl"
>
  {faqs.map((faq, index) => (
    <AccordionItem 
      key={index} 
      value={`item-${index}`} 
      className="py-5 px-6 md:px-10"
    >
      <AccordionTrigger className="text-[clamp(1.2rem,2.5vw,1.5rem)] md:text-[clamp(1.5rem,2vw,2xl)] [&>svg]:size-6 whitespace-nowrap tracking-wider overflow-hidden text-ellipsis text-left">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="tracking-wide text-[clamp(0.9rem,2vw,1.25rem)] md:text-xl">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
      </Accordion>

    </section>
  );
});