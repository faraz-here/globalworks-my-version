import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Image Imports
import AccountImg from "../../assets/SEO/Account.png";
import InvoiceImg from "../../assets/SEO/Invoice.png";
import AmazonImg from "../../assets/SEO/Amazon.png";
import AmazonVAImg from "../../assets/SEO/AmazonVA.png";
import EbayImg from "../../assets/SEO/ebay.png";
import WalmartImg from "../../assets/SEO/walmart.png";
import TikTokImg from "../../assets/SEO/tiktok.png";

// ✅ Animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

// ✅ Services List
const ecommerceServices = [
  {
    title: "Account Creation",
    description: "We help you set up seller accounts on platforms like Amazon, eBay, Walmart, and TikTok.",
    image: AccountImg,
    link: "/services/account-creation",
  },
  {
    title: "Invoice Generation",
    description: "Generate professional, tax-compliant invoices tailored to your store’s needs.",
    image: InvoiceImg,
    link: "/services/invoice-generation",
  },
  {
    title: "Amazon Management",
    description: "End-to-end Amazon store management including listing, optimization & reporting.",
    image: AmazonImg,
    link: "/services/amazon-management",
  },
  {
    title: "Amazon VA",
    description: "Hire a dedicated Amazon Virtual Assistant for daily tasks, support & reporting.",
    image: AmazonVAImg,
    link: "/services/amazon-va",
  },
  {
    title: "eBay Management",
    description: "From listings to orders, we manage your complete eBay store operations efficiently.",
    image: EbayImg,
    link: "/services/ebay-management",
  },
  {
    title: "Walmart Management",
    description: "Get expert help in managing your Walmart store and ensuring sales growth.",
    image: WalmartImg,
    link: "/services/walmart-management",
  },
  {
    title: "TikTok Shop",
    description: "We help you launch and scale your store on TikTok with creative product placement.",
    image: TikTokImg,
    link: "/services/tiktok-shop", // ✅ TikTok link added
  },
];

const EcommerceServices = () => {
  useEffect(() => {
    document.title = "E-commerce Services – Global Works";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center text-[#1a2b6b] mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        E-commerce Services
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {ecommerceServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-[20px_0_20px_0] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex flex-col overflow-hidden"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[200px] object-cover"
            />

            <div className="flex-grow p-5 flex flex-col items-center text-center">
              <h3 className="text-[#1a2b6b] text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-[#5C5C5C] text-base mb-6">
                {service.description}
              </p>

              <Link to={service.link || "/getaqoute"} className="mt-auto w-full">
                <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                  {service.link ? `Explore ${service.title}` : "Get a Free Quote"}
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceServices;
