import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react"; // You can replace with any other icon if preferred

const contentItems = [
  {
    title: "Blog Articles",
    description:
      "Informative, SEO-optimized blog posts that establish authority, educate your audience, and boost organic traffic.",
  },
  {
    title: "Social Media Captions",
    description:
      "Scroll-stopping, witty, or persuasive captions crafted for engagement and aligned with your brand voice.",
  },
  {
    title: "Product Descriptions",
    description:
      "Benefit-driven, persuasive content that makes your product irresistible and drives conversions.",
  },
  {
    title: "Email Copy",
    description:
      "Strategic email sequences and promotional content designed to increase clicks, opens, and revenue.",
  },
  {
    title: "Video Scripts",
    description:
      "Compelling, structured scripts for explainer videos, promos, or reels that capture and hold attention.",
  },
  {
    title: "Infographic Texts",
    description:
      "Concise, informative content that simplifies complex data and pairs beautifully with visuals.",
  },
];

const ContentCreation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.title = "Content Creation – Global Works";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#1a2b6b]">
          Creative & Strategic Content Creation
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Fuel your digital presence with compelling and engaging content –
          written, visual, and interactive – crafted to connect and convert.
        </p>
      </div>

      {/* Section 1: Our Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1a2b6b]">
            Tailored Content Strategy
          </h2>
          <p className="text-gray-700">
            We believe in content that speaks directly to your audience. Our
            team dives into research, trends, and your brand's tone to build a
            content plan that resonates and converts.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Audience & market research</li>
            <li>Content calendar & topic planning</li>
            <li>SEO-aligned article structures</li>
          </ul>
        </div>
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center rounded-lg shadow-inner">
          <Lightbulb className="text-blue-700 w-16 h-16" />
        </div>
      </div>

      {/* Section 2: Types of Content */}
      <div>
        <h2 className="text-2xl font-semibold text-[#1a2b6b] mb-8 text-center">
          We Create Content That Performs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contentItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-[#1a2b6b] text-center">
                {item.title}
              </h3>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.p
                    className="text-sm text-gray-600 mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Why Work With Us */}
      <div className="bg-gray-50 rounded-xl p-8 space-y-6 shadow-inner">
        <h2 className="text-2xl font-semibold text-[#1a2b6b] text-center">
          Why Brands Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-bold">Conversion-Focused Writing</h3>
            <p>
              We don't just write — we write to drive results. Every piece is
              crafted with purpose.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Fast Turnaround</h3>
            <p>
              We deliver high-quality, SEO-optimized content — on time, every
              time.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Tone & Voice Matching</h3>
            <p>
              Your brand has a voice. We amplify it — consistently and
              creatively.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Multilingual Expertise</h3>
            <p>
              From English to Urdu – we localize your message to engage every
              audience.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="/getaqoute"
          className="button-wave bg-[#1a2b6b] hover:bg-[#153C6F] text-white py-3 px-8 rounded-full font-semibold transition-all duration-300"
        >
          Request Content Plan
        </Link>
        <Link
          to="/services/marketing"
          className="text-[#1a2b6b] underline hover:text-[#114F9E]"
        >
          ← Back to Marketing Services
        </Link>
      </div>
    </div>
  );
};

export default ContentCreation;
