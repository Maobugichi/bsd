import { forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./constant/faq-object";



export const FAQSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section 
      ref={ref} 
      tabIndex={6} 
      className=" flex flex-col  h-auto min-h-[50vh] md:min-h-[70vh] mx-auto mt-16 py-16 w-[85%]"
    >
      <h2 className="text-2xl md:text-3xl ml-1 font-semibold text-left mb-8 text-black">
        Frequently Asked Questions
      </h2>
      
      <Accordion 
        type="single" 
        collapsible 
        className="border rounded-3xl mx-auto w-full "
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
            <AccordionContent className="tracking-wide text-[clamp(0.9rem,2vw,1.25rem)] md:text-xl text-gray-500">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </section>
  );
});