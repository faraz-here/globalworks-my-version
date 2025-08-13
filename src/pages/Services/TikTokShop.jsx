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

const TikTokShop = () => {
  useEffect(() => {
    document.title = "TikTok Shop Management – Global Works";
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
          TikTok Shop Management
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock the power of social commerce by launching and managing your
          TikTok Shop with our expert support.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Shop Setup</h4>
            <p>We help register and verify your business on TikTok Shop quickly and correctly.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Product Listing</h4>
            <p>Engaging visuals, SEO-rich descriptions, and creative hooks optimized for mobile users.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Influencer Collaboration</h4>
            <p>We connect you with TikTok creators to promote your products with native content.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Order & Return Handling</h4>
            <p>Real-time order tracking, fulfillment coordination, and customer support management.</p>
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
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">Our Working Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold mb-1">Step 1: Shop Registration</h4>
            <p>We register your brand, upload licenses, and verify payment methods.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 2: Content Strategy</h4>
            <p>We plan your creative campaigns based on TikTok trends and audience data.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 3: Listing + Ads</h4>
            <p>We upload products, set up paid promotions, and optimize daily for results.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 4: Support & Reports</h4>
            <p>Our team ensures smooth customer support and provides weekly analytics.</p>
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
        
      </motion.div>
    </div>
  );
};

export default TikTokShop;
