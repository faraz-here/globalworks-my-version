import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Product Listing Optimization",
    description: "Optimize your Amazon listings to boost visibility and conversions with researched keywords, high-quality images, and persuasive content."
  },
  {
    title: "A+ Content Creation",
    description: "We design rich A+ content modules that enhance brand perception and boost sales by providing more in-depth product info."
  },
  {
    title: "Keyword Research",
    description: "In-depth analysis of trending, relevant keywords to help your listings rank higher on Amazon search."
  },
  {
    title: "Inventory & Order Management",
    description: "We ensure your stock is updated and orders are fulfilled efficiently to maintain customer satisfaction and avoid penalties."
  }
];

const AmazonManagement = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = "Amazon Management – Global Works";
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-[#1a2b6b] mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Amazon Management Services
      </motion.h1>

      {/* Accordion Section */}
      <div className="space-y-4 mb-10">
        {categories.map((item, index) => (
          <div key={index} className="border border-[#1E5092] rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 bg-[#053050] text-white text-lg font-semibold flex justify-between items-center"
            >
              {item.title}
              <span className="ml-4">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-white px-6 py-4 text-[#333] transition-all">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* First Creative Section */}
      <section className="bg-[#F4F9FF] px-6 py-10 rounded-3xl shadow-xl text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1a2b6b] mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 text-lg mb-6">
          We're not just Amazon managers – we're your growth partners. With data-backed strategies, creative content, and real-time reporting, we help your brand dominate the digital shelf.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-5 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-[#1a2b6b] text-lg mb-2">📊 Real-Time Reporting</h3>
            <p className="text-gray-600 text-sm">Track your sales, ad spend, and inventory in real-time using customized dashboards.</p>
          </div>
          <div className="p-5 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-[#1a2b6b] text-lg mb-2">🤝 Dedicated Support</h3>
            <p className="text-gray-600 text-sm">Your dedicated account manager will ensure every task is on point and on time.</p>
          </div>
          <div className="p-5 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-[#1a2b6b] text-lg mb-2">🚀 Growth-Driven Strategy</h3>
            <p className="text-gray-600 text-sm">Every decision we make is aligned with your revenue goals and long-term success.</p>
          </div>
        </div>
      </section>

      {/* ➕ New Section: Client-Centered Benefits */}
      <section className="bg-[#E6F0FA] px-6 py-10 rounded-3xl shadow-lg text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1a2b6b] mb-4">Client-Centered Benefits</h2>
        <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
          We believe in building long-term partnerships. Our Amazon management is tailored to your unique business goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          <div className="p-5 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-[#1a2b6b] text-lg mb-2">✅ Transparent Pricing</h3>
            <p className="text-gray-600 text-sm">No hidden costs — just clear deliverables and consistent progress tracking.</p>
          </div>
          <div className="p-5 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-[#1a2b6b] text-lg mb-2">🛒 Multi-Channel Ready</h3>
            <p className="text-gray-600 text-sm">We prepare your brand to scale across eBay, Walmart, and TikTok once you grow.</p>
          </div>
        </div>
      </section>

      {/* 🔙 Back to E-commerce Services Button */}
      <div className="text-center mt-10">
        <Link to="/services/ecommerce-department">
          <button className="bg-[#1E5092] text-white font-semibold text-lg px-6 py-3 rounded-full hover:bg-[#153C6F] transition duration-300">
            ← Back to E-commerce Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AmazonManagement;
