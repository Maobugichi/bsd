import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <span className="text-sm md:text-lg font-medium text-black">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700 text-md border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
