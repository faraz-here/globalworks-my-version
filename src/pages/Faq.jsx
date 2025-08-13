import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-800 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center text-black"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      {isOpen && (
        <div className="p-4 bg-[#002B60] text-white">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of video production services, including corporate videos, promotional videos, event coverage, animation, and more. Check out our services page for details."
    },
    {
      question: "How much does video production cost?",
      answer: "Video production costs vary based on project scope, duration, and complexity. Contact us for a customized quote."
    },
    {
      question: "How long does it take to produce a video?",
      answer: "Production timelines depend on the project's complexity. A standard video might take 2-4 weeks, while more complex projects could take longer."
    }, {
      question: "How long does it take to produce a video?",
      answer: "Production timelines depend on the project's complexity. A standard video might take 2-4 weeks, while more complex projects could take longer."
    }, {
      question: "How long does it take to produce a video?",
      answer: "Production timelines depend on the project's complexity. A standard video might take 2-4 weeks, while more complex projects could take longer."
    }, {
      question: "How long does it take to produce a video?",
      answer: "Production timelines depend on the project's complexity. A standard video might take 2-4 weeks, while more complex projects could take longer."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold  text-[#1a2b6b] text-center mb-12">
          Curious? Check Out the Scoop! (FAQs)
        </h1>

        <div className="mt-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;