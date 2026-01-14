import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

const OurFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const faqs = [
    {
      question: "How does your dispatch service work?",
      answer:
        "We handle load booking, rate negotiation, paperwork, and communication so you can focus on driving and growing your business."
    },
    {
      question: "Do you force drivers to take loads?",
      answer:
        "No. We never force dispatch. You always have full control over which loads you accept."
    },
    {
      question: "What are your pricing plans?",
      answer:
        "We offer a flat weekly rate per truck with no hidden fees. All freight charges and fuel surcharges are 100% yours."
    },
    {
      question: "How fast can I get started?",
      answer:
        "Setup usually takes less than 24 hours once paperwork is completed."
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes. Our dispatch team is available around the clock to support drivers on the road."
    }
  ];

  return (
    <section className="relative w-full border-b-2 border-yellow-400 pb-4 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute top-20 right-1/3 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – FAQ */}
        <div data-aos="fade-right">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500 mb-4">
            Need Help?
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between px-5 py-2 text-left group"
                  >
                    <span className="text-sm md:text-base font-bold text-gray-900 group-hover:text-yellow-500 transition">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 cursor-pointer transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-yellow-500" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div data-aos="fade-left" className="relative overflow-hidden">
          <div className="absolute  -top-6 -left-6 w-full h-full bg-yellow-400/20 rounded-3xl blur-2xl" />
          <img
            src="https://aznanishdispatchingservices.com/wp-content/uploads/2024/09/qtq_31-1.webp"
            alt="FAQ Support"
            className="relative rounded shadow-2xl w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
};

export default OurFaq;
