import { forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../../../constants/faq.constant";
import { Header } from "@/components/ui/header";
import { HelpCircle } from "lucide-react";
import { ShimmerBadge } from "@/components/ui/shimmerBadge";
import { motion } from "motion/react";

export const FAQSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative h-fit font-montserrat py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="relative z-10 w-[90%] lg:w-[85%] mx-auto grid gap-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-5 w-full lg:w-[75%]"
        >
          <ShimmerBadge text="FAQ" icon={HelpCircle} width="w-32" />
          <Header
            level={2}
            className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c1c1c] leading-tight"
          >
            <span className="block whitespace-nowrap">Got Questions?</span>
            <span className="block whitespace-nowrap text-amber-500">We've Got Answers.</span>
          </Header>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col divide-y divide-stone-200">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger
                    className="group w-full text-left py-7 flex items-start justify-between gap-6
                               font-montserrat text-2xl md:text-4xl lg:text-5xl font-bold text-[#1c1c1c]
                               hover:text-amber-500 transition-colors duration-300
                               [&>svg]:text-stone-300 [&>svg]:size-6 [&>svg]:shrink-0
                               hover:[&>svg]:text-amber-400 [&>svg]:transition-colors [&>svg]:duration-300
                               no-underline hover:no-underline leading-tight"
                  >
                    <span className="flex items-start gap-5">
                      <span className="font-montserrat text-sm md:text-base font-bold text-stone-300 pt-2 md:pt-3 w-7 shrink-0 tabular-nums group-hover:text-amber-400 transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pl-12 pb-7">
                    <p className="font-roboto text-base md:text-lg text-stone-500 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </section>
  );
});

FAQSection.displayName = "FAQSection";