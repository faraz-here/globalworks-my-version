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

const WalmartManagement = () => {
  useEffect(() => {
    document.title = "Walmart Management – Global Works";
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
          Walmart Store Management Service
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Launch, manage, and grow your Walmart storefront with our expert
          end-to-end solutions — from listings to fulfillment.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">Service Inclusions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Product Listings</h4>
            <p>High-quality titles, images, keywords, and bullet points optimized for Walmart search.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Category Approval</h4>
            <p>Assistance with category approvals and compliance for restricted products.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Order Fulfillment</h4>
            <p>Real-time tracking and management of orders, returns, and customer service.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Performance Management</h4>
            <p>We help maintain your seller score, on-time shipment rate, and customer satisfaction.</p>
          </div>
        </div>
      </motion.div>

      {/* Our Workflow */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#f9f9f9] p-8 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">Our Working Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold mb-1">Step 1: Store Setup</h4>
            <p>We register your Walmart Seller Center account or audit the existing one.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 2: Product Onboarding</h4>
            <p>We prepare listings in bulk or manually with full SEO optimization.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 3: Fulfillment Setup</h4>
            <p>We configure shipping rules, track orders, and help with WFS if needed.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 4: Monthly Reporting</h4>
            <p>Get performance updates on visibility, sales, returns, and compliance.</p>
          </div>
        </div>
      </motion.div>

      {/* Only Back Link */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex justify-center"
      >
       
      </motion.div>
    </div>
  );
};

export default WalmartManagement;
