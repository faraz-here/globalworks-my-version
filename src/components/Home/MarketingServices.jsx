import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SeoImg from "../../assets/SEO/seo.png";
import SocialMediaImg from "../../assets/SEO/socialmedia.png";
import PerformanceImg from "../../assets/SEO/performance.png";
import WebDevImg from "../../assets/WebDevelopement/websitedevelopment.jpg";
import VideoEditingImg from "../../assets/VideoEditing/VideoEditing1.jpg";
import GraphicImg from "../../assets/SEO/graphic.png";
import ContentImg from "../../assets/SEO/content.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Improve your visibility on Google and other search engines with smart optimization strategies.",
    image: SeoImg,
  },
  {
    title: "Social Media Management",
    description:
      "Let us handle your brand presence on platforms like Facebook, Instagram & LinkedIn.",
    image: SocialMediaImg,
  },
  {
    title: "Performance Marketing",
    description:
      "Run paid campaigns that are data-driven and ROI-focused across multiple ad platforms.",
    image: PerformanceImg,
  },
  {
    title: "Web Development",
    description:
      "We build fast, mobile-friendly, SEO-optimized websites that drive results.",
    image: WebDevImg,
  },
  {
    title: "Video Editing",
    description:
      "Turn raw footage into engaging content that grabs attention and tells your story.",
    image: VideoEditingImg,
  },
  {
    title: "Graphic Designing",
    description:
      "From logos to social media creatives – get custom designs that make your brand shine.",
    image: GraphicImg,
  },
  {
    title: "Content Creation",
    description:
      "High-quality, original content tailored for blogs, social media, and websites.",
    image: ContentImg,
  },
];

const MarketingServices = () => {
  useEffect(() => {
    document.title = "Marketing Department Services";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#1a2b6b] mb-4">
          Marketing Department Services
        </h1>
        <p className="text-lg text-[#5C5C5C] max-w-3xl mx-auto">
          From SEO to content creation, our marketing department provides end-to-end digital solutions to grow your brand, reach your audience, and drive measurable results across platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-[20px_0_20px_0] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex flex-col overflow-hidden"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {service.image ? (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[200px] object-cover"
              />
            ) : (
              <div className="h-[200px] bg-gray-200 w-full flex items-center justify-center text-gray-500 text-lg font-medium">
                Image Here
              </div>
            )}

            <div className="flex-grow p-5 flex flex-col items-center text-center">
              <h3 className="text-[#1a2b6b] text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-[#5C5C5C] text-base mb-6">
                {service.description}
              </p>

              {service.title === "Web Development" ? (
                <Link to="/services/website-development" className="mt-auto w-full">
                  <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                    Explore Web Development
                  </button>
                </Link>
              ) : service.title === "Content Creation" ? (
                <Link to="/services/content-creation" className="mt-auto w-full">
                  <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                    Explore Content Creation
                  </button>
                </Link>
              ) : service.title === "Video Editing" ? (
                <Link to="/services/video-editing" className="mt-auto w-full">
                  <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                    Explore Video Editing
                  </button>
                </Link>
              ) : service.title === "Search Engine Optimization" ? (
                <Link to="/services/seo" className="mt-auto w-full">
                  <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                    Explore SEO
                  </button>
                </Link>
              ) : service.title === "Social Media Management" ? (
                <Link to="/services/social-media-management" className="mt-auto w-full">
                  <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                    Explore Social Media
                  </button>
                </Link>
              ) : service.title === "Performance Marketing" ? (
                <Link to="/services/performance-marketing" className="mt-auto w-full">
                  <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                    Explore Performance Marketing
                  </button>
                </Link>
              ) : service.title === "Graphic Designing" ? (
                <Link to="/services/graphic-designing" className="mt-auto w-full">
                  <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                    Explore Graphic Designing
                  </button>
                </Link>
              ) : (
                <Link to="/getaqoute" className="mt-auto w-full">
                  <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-5 py-3 w-full hover:text-white hover:bg-[#153C6F] transition-all duration-300">
                    Get a Free Quote
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketingServices;
