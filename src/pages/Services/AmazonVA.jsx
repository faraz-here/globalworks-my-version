import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const AmazonVA = () => {
  useEffect(() => {
    document.title = "Amazon VA – Global Works";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-[#1a2b6b] mb-4">
          Amazon Virtual Assistant (VA)
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Save time, reduce errors, and scale faster with a dedicated Amazon VA managing your store’s day-to-day operations.
        </p>
      </motion.div>

      {/* Key Services */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">Tasks We Handle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Listing Creation</h4>
            <p>We create SEO-friendly product listings with titles, bullets, and descriptions.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Inventory Monitoring</h4>
            <p>Track stock levels and send alerts for reordering to avoid out-of-stock issues.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Order Processing</h4>
            <p>Manage orders, returns, and refunds quickly and accurately.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Customer Service</h4>
            <p>Respond to queries, reviews, and complaints on your behalf with professionalism.</p>
          </div>
        </div>
      </motion.div>

      {/* Workflow Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#f9f9f9] p-8 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold mb-1">Step 1: Requirement Gathering</h4>
            <p>We understand your store model, goals, and preferred tools.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 2: VA Assignment</h4>
            <p>We match you with a trained VA experienced in your business niche.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 3: Daily Execution</h4>
            <p>VA works on your store daily, sending progress reports and updates.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 4: Reporting</h4>
            <p>You get weekly analytics on tasks completed, performance & next steps.</p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <Link
          to="/getaqoute"
          className="button-wave bg-[#1a2b6b] hover:bg-[#153C6F] text-white py-3 px-8 rounded-full font-semibold transition-all duration-300"
        >
          Get a Free Quote
        </Link>
        <Link
          to="/services/ecommerce-department" // ✅ updated here
          className="text-[#1a2b6b] underline hover:text-[#114F9E]"
        >
          ← Back to eCommerce Services
        </Link>
      </motion.div>
    </div>
  );
};

export default AmazonVA;
