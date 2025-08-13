import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SocialMediaManagement = () => {
  useEffect(() => {
    document.title = "Social Media Management – Global Works";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1a2b6b] mb-4">
          Social Media Management
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Build, grow, and engage your audience on platforms that matter. Our team creates meaningful content and manages your brand’s online presence — so you don’t have to.
        </p>
      </div>

      {/* Split Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-[#1a2b6b] mb-4">
            Why Social Media Matters?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Social media is more than just posts and likes — it’s where your audience hangs out daily. At Global Works, we create scroll-stopping content and smart strategies that drive engagement, build community, and support your business goals.
          </p>
        </div>
        <div className="bg-[#f5f7fb] p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-[#1a2b6b] mb-3">We manage:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Instagram, Facebook & LinkedIn</li>
            <li>Profile branding and optimization</li>
            <li>Post planning & scheduling</li>
            <li>Community management & responses</li>
            <li>Monthly analytics reports</li>
          </ul>
        </div>
      </div>

      {/* Features / Benefits */}
      <div className="space-y-8">
        <h2 className="text-2xl text-center font-semibold text-[#1a2b6b]">What You Get</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Strategy",
              desc: "We tailor content and campaigns based on your goals and target audience.",
            },
            {
              title: "Content Calendar",
              desc: "Weekly & monthly plans with preview-ready posts and scheduled timing.",
            },
            {
              title: "Brand Voice",
              desc: "We maintain your tone, values, and visual identity across platforms.",
            },
            {
              title: "Hashtag Research",
              desc: "Relevant hashtags for organic growth and reach maximization.",
            },
            {
              title: "Ad Support",
              desc: "Need to run ads? We’ll design creatives and manage paid campaigns.",
            },
            {
              title: "Analytics & Insights",
              desc: "Understand performance with easy-to-read monthly reports.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 border rounded-lg shadow-sm">
              <h3 className="text-[#1a2b6b] font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Results / Trust Section */}
      <div className="bg-[#f9fafc] p-8 rounded-lg shadow space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-[#1a2b6b]">Proven Results</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our clients have seen up to 300% increase in reach, higher conversion through DM-based selling, and consistent follower growth across platforms.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white p-4 rounded-md shadow w-40">
            <p className="text-2xl font-bold text-[#1a2b6b]">+300%</p>
            <p className="text-sm text-gray-600">Instagram Reach</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow w-40">
            <p className="text-2xl font-bold text-[#1a2b6b]">+25%</p>
            <p className="text-sm text-gray-600">Follower Growth</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow w-40">
            <p className="text-2xl font-bold text-[#1a2b6b]">+40%</p>
            <p className="text-sm text-gray-600">Engagement Rate</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="/getaqoute"
          className="button-wave bg-[#1a2b6b] hover:bg-[#153C6F] text-white py-3 px-8 rounded-full font-semibold transition-all duration-300"
        >
          Let’s Grow Your Brand
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

export default SocialMediaManagement;
