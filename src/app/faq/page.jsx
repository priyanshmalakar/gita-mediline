"use client";
import React, { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Default FAQs if none provided
  const defaultFaqs = [
    {
      question: "What services does Gita Mediline Services provide?",
      answer:
        "We specialize in Medical Gas Pipeline Systems (MGPS) and Modular Operation Theatre (MOT) solutions. Our services include complete system design, installation, testing, commissioning, and compliance documentation for healthcare facilities.",
    },
    {
      question: "Are your installations compliant with healthcare standards?",
      answer:
        "Yes, all our installations are executed by a Certified Authorised Person (AP – MGPS, HTM 02-01) and comply with HTM 02-01 standards and NABH requirements. We are ISO 9001:2015 and CE certified.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve hospitals across Madhya Pradesh and Central India, including Indore, Khargone, Mandleshwar, and surrounding regions. We have experience with both private and government healthcare facilities.",
    },
    {
      question: "How long does a typical MGPS installation take?",
      answer:
        "The timeline varies based on project scope and hospital size. A typical MGPS installation for a medium-sized hospital takes 4-8 weeks from design to commissioning. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you provide after-installation support?",
      answer:
        "Yes, we provide comprehensive after-installation support including system maintenance, testing, documentation updates, and technical assistance to ensure long-term reliable performance of your healthcare infrastructure.",
    },
    {
      question: "Can you work on government hospital clients?",
      answer:
        "Absolutely. We have extensive experience executing MGPS works for multiple District Hospitals across Madhya Pradesh on sub-contract basis, all compliant with HTM 02-01 standards.",
    },
    {
      question: "What makes Gita Mediline Services different?",
      answer:
        "We combine certified expertise (AP – MGPS, HTM 02-01), compliance-led execution, technical accuracy, and 5+ years of focused experience in healthcare infrastructure. Our commitment to safety and reliability sets us apart.",
    },
    {
      question: "How can I get a quote for my hospital project?",
      answer:
        "You can contact us via phone, email, or the contact form on this page. We'll schedule a consultation to understand your requirements and provide a detailed proposal with technical specifications and pricing.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#005B77] to-[#003d52] text-white  py-6 md:py-10 overflow-hidden">
        {/* Header */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
            <MessageSquare className="w-4 h-4" />
            FAQ
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Frequently Asked Questions
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </div>
      </section>
      <div className="container-custom py-4 md:py-8">
        <div className="max-w-4xl mx-auto ">
          {/* FAQ List */}
          <div className="space-y-4">
            {defaultFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
