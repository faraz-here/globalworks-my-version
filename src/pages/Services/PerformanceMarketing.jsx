import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const industriesData = [
  {
    name: "E-commerce",
    description: "We help online stores drive traffic, increase sales, and optimize return on ad spend through smart targeting and remarketing strategies.",
  },
  {
    name: "Education",
    description: "From online courses to physical institutes, we build campaigns that attract students, promote programs, and increase enrollments.",
  },
  {
    name: "Health & Fitness",
    description: "Whether it's a gym, wellness app, or fitness coach — we craft high-converting campaigns that motivate your audience to take action.",
  },
  {
    name: "Fashion & Apparel",
    description: "Launch your clothing brand with style! We create visually compelling ads and audience-focused funnels that convert visitors into buyers.",
  },
  {
    name: "Finance & Insurance",
    description: "We run compliant, high-trust ads that generate qualified leads for financial services, insurance packages, and advisory firms.",
  },
  {
    name: "SaaS & Tech",
    description: "Promote your software or tech product with funnel-driven ads that drive trials, demos, and subscriptions from your ideal users.",
  },
  {
    name: "Real Estate",
    description: "Generate property leads, showcase listings, and run geo-targeted campaigns for real estate brokers and builders.",
  },
  {
    name: "Coaching & Consulting",
    description: "From personal coaches to business consultants — we help build your authority and attract the right clients through funnel-based marketing.",
  },
];

const PerformanceMarketing = () => {
  useEffect(() => {
    document.title = 'Performance Marketing – Global Works';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const [selected, setSelected] = useState(industriesData[0]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-[#1a2b6b]">Performance Marketing</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Unlock scalable growth with data-driven paid advertising campaigns. At Global Works,
          we help you maximize ROI with performance strategies that convert.
        </p>
      </motion.div>

      {/* Section 1: What We Do */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-2xl font-semibold text-[#1a2b6b] mb-4">What We Do</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Google Ads (Search, Display, Shopping)</li>
            <li>Meta Ads (Facebook & Instagram campaigns)</li>
            <li>Performance tracking and KPI optimization</li>
            <li>Ad creatives and audience testing</li>
            <li>Landing page analysis & CRO support</li>
          </ul>
        </div>
        <div className="bg-[#F0F6FF] p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-[#1a2b6b]">Platforms We Specialize In:</h3>
          <p className="text-gray-600">Google, Facebook, Instagram, TikTok, Pinterest, LinkedIn, and more.</p>
        </div>
      </motion.div>

      {/* Section 2: Why It Works */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-[#f9fafb] p-8 rounded-xl shadow-inner"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b] mb-4">Why Performance Marketing Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-bold text-[#1a2b6b] mb-2">Measurable Results</h3>
            <p className="text-sm text-gray-600">Track every click, conversion, and return on ad spend (ROAS).</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-bold text-[#1a2b6b] mb-2">Scalability</h3>
            <p className="text-sm text-gray-600">Start small, scale big — your budget grows with your ROI.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-bold text-[#1a2b6b] mb-2">Data-Driven</h3>
            <p className="text-sm text-gray-600">Optimize campaigns based on real-time performance metrics.</p>
          </div>
        </div>
      </motion.div>

      {/* Section 3: Industries We Serve */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="bg-[#f9fafb] p-8 rounded-xl shadow-inner space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b] text-center">Industries We Serve</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          From small startups to growing enterprises, we’ve managed campaigns in a wide range of industries.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {industriesData.map((industry) => (
            <button
              key={industry.name}
              onClick={() => setSelected(industry)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                selected.name === industry.name
                  ? 'bg-[#1a2b6b] text-white border-[#1a2b6b]'
                  : 'bg-white text-[#1a2b6b] border-[#1a2b6b] hover:bg-[#1a2b6b] hover:text-white'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Description Box */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold text-[#1a2b6b] mb-2">{selected.name}</h3>
          <p className="text-gray-700 text-base">{selected.description}</p>
        </div>
      </motion.div>

      {/* Section 4: Call to Action */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl font-bold text-[#1a2b6b]">Ready to scale your business?</h2>
        <p className="text-gray-600">
          Let’s create ads that actually work. Book a free consultation today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/getaqoute"
            className="button-wave bg-[#1a2b6b] hover:bg-[#153C6F] text-white py-3 px-8 rounded-full font-semibold transition-all duration-300"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/services/marketing"
            className="text-[#1a2b6b] underline hover:text-[#114F9E]"
          >
            ← Back to Marketing Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceMarketing;
