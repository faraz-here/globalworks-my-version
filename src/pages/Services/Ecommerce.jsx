import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAmazon, FaEbay, FaShopify } from 'react-icons/fa';
import { SiWalmart, SiWoocommerce, SiAliexpress } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import React from 'react';

function getIconBgColor(platform) {
  switch (platform) {
    case 'Amazon': return '#FF9900';
    case 'eBay': return '#0061D1';
    case 'Walmart': return '#0071CE';
    case 'Shopify': return '#96BF48';
    case 'WooCommerce': return '#7D3F98';
    case 'AliExpress/Alibaba': return '#FF5722';
    default: return '#E0E0E0';
  }
}

const services = [
  {
    platform: 'Amazon',
    icon: <FaAmazon />,
    details: [
      'Professional Account Setup & Verification',
      'Winning Product Research & Trend Analysis',
      'Reliable Supplier Sourcing & Negotiation',
      'Amazon PPC Campaign Management',
      'Customer Communication & Feedback Handling',
      'Seller Central Optimization & Analytics',
      'SEO-Optimized Product Listings',
      'Inventory Monitoring & Forecasting',
      'Streamlined Order Fulfillment',
      'End-to-End Brand Management Solutions',
    ],
  },
  {
    platform: 'eBay',
    icon: <FaEbay />,
    details: [
      'Business Account Registration',
      'Product Research for eBay Marketplace',
      'Global Supplier Outreach',
      'Targeted Ad Campaigns (PPC)',
      'Customer Support Integration',
      'eBay Dashboard & Sales Reports',
      'Listing Design & Keyword Optimization',
      'Real-Time Stock Management',
      'Shipping Labeling & Processing',
      'Brand Image Enhancement',
    ],
  },
  {
    platform: 'Walmart',
    icon: <SiWalmart />,
    details: [
      'Walmart Seller Account Onboarding',
      'Niche Product Hunting',
      'Reliable Product Sourcing Channels',
      'Walmart Ads & PPC Setup',
      'Customer Messaging & Dispute Resolution',
      'Marketplace Compliance & Seller Tools',
      'Detailed Listings with SEO Best Practices',
      'Inventory Tracking & Reorder Management',
      'Returns, Shipping & Fulfillment Support',
      'Performance Optimization & Brand Strategy',
    ],
  },
  {
    platform: 'Shopify',
    icon: <FaShopify />,
    details: [
      'Shopify Store Setup & Configuration',
      'Profitable Product & Niche Selection',
      'Supplier Outreach & Dropshipping Setup',
      'Google & Meta Ads (PPC)',
      'Integrated Live Chat & Support',
      'Custom Theme & Backend Management',
      'Engaging Product Descriptions & SEO',
      'App Integrations for Inventory Control',
      'Automated Order Fulfillment Tools',
      'Conversion Optimization & Branding',
    ],
  },
  {
    platform: 'WooCommerce',
    icon: <SiWoocommerce />,
    details: [
      'WooCommerce Store Development',
      'Product Market Research',
      'Wholesale Sourcing Support',
      'AdWords & Meta Ads Campaigns',
      'Automated Customer Communications',
      'Backend Admin Panel Training',
      'Product Listings with Schema Markup',
      'Inventory Sync & Alert Systems',
      'Custom Checkout & Order Handling',
      'Brand Identity & Visual Guidelines',
    ],
  },
  {
    platform: 'AliExpress/Alibaba',
    icon: <SiAliexpress />,
    details: [
      'Buyer Account & Dropshipping Setup',
      'Trending Product Identification',
      'Supplier Negotiations & MOQs',
      'Targeted Paid Ads (PPC)',
      'Customer Experience Management',
      'Seller Tool Navigation & Setup',
      'High-Converting Listings with Copywriting',
      'Real-Time Stock Syncing',
      'Global Order Tracking Integration',
      'Business Branding & Scaling Support',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Ecommerce() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-20 px-6 md:px-16 text-[#1a2b6b] relative bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold mb-4">E-Commerce Services</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Elevate your online business through our comprehensive, tailored solutions across Amazon, eBay, Walmart, Shopify, WooCommerce, and AliExpress. Whether you're launching or scaling, we provide full-service support from setup to sales.
        </p>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1.5 transform transition duration-300 cursor-pointer"
            onClick={() => setActiveService(service)}
          >
            <div
              className="p-6 rounded-full shadow-lg mb-4 transition-transform duration-300 hover:scale-110"
              style={{
                backgroundColor: getIconBgColor(service.platform),
              }}
            >
              {React.cloneElement(service.icon, {
                size: 100,
                className: "text-white drop-shadow-md",
              })}
            </div>
            <h3 className="text-2xl font-semibold">{service.platform}</h3>
            <p className="text-sm text-gray-600 mt-2">
              End-to-end services for {service.platform} success.
            </p>
            <button className="mt-4 text-[#1a2b6b] font-medium underline">
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {activeService && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-8 relative max-h-[90vh] overflow-y-auto shadow-lg">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#1a2b6b] cursor-pointer"
              aria-label="Close service details"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col justify-center items-center text-center gap-4 mb-6">
            <div
    className="p-4 rounded-full shadow-lg flex justify-center items-center"
    style={{
                  backgroundColor: getIconBgColor(activeService.platform),
                }}
              >
                {React.cloneElement(activeService.icon, {
                  size: 80,
                  className: "text-white drop-shadow-md",
                })}
              </div>
              <h3 className="text-3xl font-bold text-[#1a2b6b]">
                {activeService.platform}
              </h3>
            </div>

            <p className="text-gray-700 mb-4">
              Our specialized services for{" "}
              <strong>{activeService.platform}</strong> are crafted to deliver
              efficiency, increase visibility, and drive sales. Explore how we
              can support your business:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-8">
              {activeService.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="text-right">
              <Link to="/contact">
                <button className="cursor-pointer bg-[#1a2b6b] text-white px-6 py-3 rounded-lg hover:bg-[#153e72] transition font-semibold">
                  Get a Personalized Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
