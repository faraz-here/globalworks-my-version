import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const platformsData = [
  {
    name: "Amazon Seller Central",
    details: "We create fully optimized seller accounts that are policy-compliant and ready for product listings, shipping setup, and advertising campaigns.",
  },
  {
    name: "Daraz Seller Account",
    details: "Get your Daraz store up and running with verified documents, product categories, and seller center configuration.",
  },
  {
    name: "Facebook Business Manager",
    details: "We set up Business Manager, connect pages, pixels, and ad accounts for complete Facebook ad readiness.",
  },
  {
    name: "Instagram Creator/Business",
    details: "Switch to a professional Instagram account, optimize the bio, and link it with Facebook for content scheduling and ads.",
  },
  {
    name: "Google My Business",
    details: "Create and verify local listings to make your business visible on Google Maps and Search.",
  },
  {
    name: "TikTok Shop & Ads",
    details: "We register and configure TikTok Shop accounts, product catalogs, and ad settings to start selling fast.",
  },
  {
    name: "LinkedIn Company Page",
    details: "Build a professional company profile that reflects your brand, ready for hiring and content publishing.",
  },
  {
    name: "YouTube Channel Setup",
    details: "Create a branded channel with all the necessary visuals and settings for long-form or shorts video marketing.",
  },
];

const AccountCreation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.title = "Account Creation – Global Works";
  }, []);

  const toggleDetails = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1a2b6b] mb-4">
          Professional Account Creation Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From business platforms to eCommerce marketplaces, we create optimized accounts that are ready to perform from Day 1.
        </p>
      </div>

      {/* Section 1: Where We Create Accounts */}
      <div>
        <h2 className="text-2xl font-semibold text-[#1a2b6b] mb-6 text-center">
          Platforms We Cover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {platformsData.map((platform, index) => (
            <div
              key={index}
              onClick={() => toggleDetails(index)}
              className="cursor-pointer bg-white rounded-lg shadow-md px-6 py-5 transition duration-300 hover:shadow-xl"
            >
              <h3 className="text-[#1a2b6b] font-semibold text-lg">{platform.name}</h3>
              {activeIndex === index && (
                <p className="text-sm text-gray-600 mt-2">{platform.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Our Setup Process */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#1a2b6b]">Structured Account Setup</h2>
          <p className="text-gray-700">
            We follow a step-by-step strategy to create business-compliant, fully optimized accounts that are ready for immediate use.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Profile and bio optimization</li>
            <li>Logo, banners & visuals setup</li>
            <li>Business information accuracy</li>
            <li>Platform-specific settings configuration</li>
          </ul>
        </div>
        <div className="flex justify-center items-center bg-[#F0F6FF] rounded-lg h-[200px] shadow-inner">
          {/* You can replace the emoji with a real icon later */}
          <div className="text-[#1a2b6b] text-6xl">📂</div>
        </div>
      </div>

      {/* Section 3: Why Choose Us */}
      <div className="bg-gray-50 rounded-xl p-8 space-y-6 shadow-inner">
        <h2 className="text-2xl font-semibold text-[#1a2b6b] text-center">
          Why Choose Global Works?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-bold">Marketplace Expertise</h3>
            <p>We understand the policies and algorithms of every platform we serve.</p>
          </div>
          <div>
            <h3 className="font-bold">Visual Branding Setup</h3>
            <p>We don't just create an account — we make sure it reflects your brand visually.</p>
          </div>
          <div>
            <h3 className="font-bold">Error-Free Configuration</h3>
            <p>Say goodbye to account rejections and poor setups.</p>
          </div>
          <div>
            <h3 className="font-bold">Quick Turnaround</h3>
            <p>Your business accounts will be live and ready — usually within 24–48 hours.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="/getaqoute"
          className="button-wave bg-[#1a2b6b] hover:bg-[#153C6F] text-white py-3 px-8 rounded-full font-semibold transition-all duration-300"
        >
          Request Account Setup
        </Link>
        <Link
          to="/services/ecommerce-department"
          className="text-[#1a2b6b] underline hover:text-[#114F9E]"
        >
          ← Back to eCommerce Services
        </Link>
      </div>
    </div>
  );
};

export default AccountCreation;
