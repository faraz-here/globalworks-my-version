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

const EbayManagement = () => {
  useEffect(() => {
    document.title = "eBay Management – Global Works";
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
          eBay Management Service
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Launch and grow your eBay store with complete management – from listings and promotions to order fulfillment and performance tracking.
        </p>
      </motion.div>

      {/* Core Offerings */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">What’s Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Product Listings</h4>
            <p>Optimized listings with compelling titles, categories, and images.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Inventory Management</h4>
            <p>Real-time tracking, stock alerts, and inventory syncing.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Order Processing</h4>
            <p>Manage orders, shipping, and returns seamlessly.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Seller Performance</h4>
            <p>Improve metrics, ratings, and seller health for long-term success.</p>
          </div>
        </div>
      </motion.div>

      {/* Our Process */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#f9f9f9] p-8 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold mb-1">Step 1: Store Review</h4>
            <p>We audit your eBay store and understand your niche and products.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 2: Listing Optimization</h4>
            <p>We create or update listings for better visibility and conversions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 3: Order & Inventory Flow</h4>
            <p>We automate order flow, manage returns, and monitor inventory levels.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 4: Monthly Reporting</h4>
            <p>We provide analytics on sales, trends, and areas for improvement.</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
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
          to="/services/ecommerce-department" // ✅ Corrected link here
          className="text-[#1a2b6b] underline hover:text-[#114F9E]"
        >
          ← Back to eCommerce Services
        </Link>
      </motion.div>
    </div>
  );
};

export default EbayManagement;
