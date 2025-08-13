import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Seo = () => {
  useEffect(() => {
    document.title = 'SEO Service – Global Works';
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const seoDetails = [
    {
      title: "Keyword Research",
      content: "We perform in-depth research to find the most relevant and high-converting keywords tailored to your business niche."
    },
    {
      title: "On-Page SEO",
      content: "We optimize your website’s content, meta tags, headings, internal linking, and structure for maximum search visibility."
    },
    {
      title: "Technical SEO",
      content: "From website speed to mobile responsiveness and indexing, we ensure your site meets all technical SEO best practices."
    },
    {
      title: "Link Building",
      content: "We acquire high-quality backlinks to improve your domain authority and help you rank higher on Google."
    },
    {
      title: "Analytics & Reporting",
      content: "We provide monthly performance reports showing keyword growth, traffic insights, and improvement areas."
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Heading & Intro */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1a2b6b] mb-4">Search Engine Optimization (SEO)</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Unlock consistent organic traffic and top rankings with our proven SEO solutions. Whether you're a startup or a growing business,
          we help you build long-term visibility in search engines — without relying on ads.
        </p>
      </div>

      {/* What we offer */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-[#1a2b6b] text-center">What We Offer in Our SEO Services</h2>
        <div className="space-y-4">
          {seoDetails.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <motion.button
                layout
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-[#1a2b6b] font-semibold text-lg bg-white hover:bg-gray-50 transition"
              >
                <span>{item.title}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden px-5 pb-4 text-gray-700 bg-white"
                  >
                    <p>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner space-y-6">
        <h2 className="text-2xl font-semibold text-[#1a2b6b] text-center">Our Process</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Our SEO process is designed for results. We combine creativity, data, and technical expertise to make sure your site not only ranks well but converts traffic into leads.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-[#1a2b6b] mb-1">Website Audit</h3>
            <p>We start with a complete SEO audit to identify technical issues and opportunities for improvement.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-[#1a2b6b] mb-1">Competitor Analysis</h3>
            <p>We research what’s working for your competitors and craft a strategy to beat them.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-[#1a2b6b] mb-1">Custom Strategy</h3>
            <p>Every business is different — we tailor your SEO game plan to match your goals and industry.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-[#1a2b6b] mb-1">Continuous Optimization</h3>
            <p>We monitor performance, make improvements, and adapt strategies based on evolving algorithms.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#1a2b6b] text-center">Why Choose Global Works?</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          We're more than just an SEO agency. We’re your growth partners.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#1a2b6b] mb-1">Transparent Reports</h3>
            <p>See exactly what we’re doing and how it’s impacting your business.</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#1a2b6b] mb-1">Dedicated Support</h3>
            <p>Direct access to SEO professionals — no waiting, no fluff.</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#1a2b6b] mb-1">100% White Hat</h3>
            <p>We follow Google-approved techniques that bring long-term, risk-free results.</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#1a2b6b] mb-1">ROI-Focused</h3>
            <p>Everything we do is built around delivering measurable business results.</p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
    </div>
  );
};

export default Seo;
