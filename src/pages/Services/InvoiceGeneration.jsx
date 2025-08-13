import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const InvoiceGeneration = () => {
  useEffect(() => {
    document.title = "Invoice Generation – Global Works";
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
          Invoice Generation Service
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Automate and simplify your invoicing process with branded, error-free,
          and downloadable invoices tailored for your eCommerce business.
        </p>
      </motion.div>

      {/* Section 1: Key Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Branded Layouts</h4>
            <p>Professional invoices with your logo, colors, and branding.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Tax & Shipping Calculation</h4>
            <p>Accurate and real-time breakdowns of taxes and shipping fees.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Auto Email & PDF</h4>
            <p>Send invoices automatically after checkout or order delivery.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <h4 className="font-semibold text-lg">Multi-Currency Support</h4>
            <p>Support for different currencies based on customer location.</p>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Process */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#f9f9f9] p-8 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">How We Set It Up</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="font-semibold mb-1">Step 1: Store Analysis</h4>
            <p>We collect your brand assets, tax zones, shipping methods, and payment flow.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 2: Invoice Design</h4>
            <p>We design a modern invoice template that reflects your store identity.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 3: Integration</h4>
            <p>We plug it into your Shopify, WooCommerce, or custom backend.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Step 4: Final Testing</h4>
            <p>Every invoice is tested on real orders, refunds, and shipping cases.</p>
          </div>
        </div>
      </motion.div>

      {/* Section 3: Smart Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">What You Also Get</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Admin panel to download past invoices</li>
          <li>Custom fields for order notes, terms, or refund policy</li>
          <li>Language and currency switchers (for international clients)</li>
          <li>Full compliance with local tax & invoice regulations</li>
        </ul>
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

export default InvoiceGeneration;
