import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brush,
  PenTool,
  LayoutDashboard,
  GalleryVertical,
  ImagePlus,
  Zap,
  Rocket,
  Clock3,
  UserCheck,
  RefreshCcw,
} from 'lucide-react';

const portfolioItems = [
  {
    title: 'Poster Design',
    description: 'Creative, eye-catching posters for promotions, events, and campaigns tailored to your brand aesthetics.',
  },
  {
    title: 'Logo Concepts',
    description: 'Versatile and modern logo ideas aligned with your brand message and target audience.',
  },
  {
    title: 'Social Media Templates',
    description: 'Ready-to-use, visually engaging templates that boost interaction across social platforms.',
  },
  {
    title: 'Brochure Layouts',
    description: 'Well-structured layouts for informative, stylish brochures that convert readers into customers.',
  },
  {
    title: 'Web Banners',
    description: 'Professional banners optimized for web ads, headers, and promotions with CTA focus.',
  },
  {
    title: 'Custom Illustrations',
    description: 'Unique illustrations tailored to your story, branding, or character design requirements.',
  },
];

const GraphicDesigning = () => {
  useEffect(() => {
    document.title = 'Graphic Designing – Global Works';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolioItems[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

      {/* Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center space-y-5">
        <motion.h1 className="text-5xl font-bold text-[#1a2b6b]">Graphic Designing Services</motion.h1>
        <motion.p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Where creativity meets purpose. We craft stunning visuals that speak louder than words and elevate your brand’s identity.
        </motion.p>
      </motion.div>

      {/* What We Offer */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#1a2b6b] flex items-center gap-2">
            <PenTool className="text-[#1a2b6b]" /> What We Offer
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><Brush className="text-blue-600" /> Logo & Brand Identity Design</li>
            <li className="flex items-center gap-2"><GalleryVertical className="text-green-600" /> Social Media Creative Posts</li>
            <li className="flex items-center gap-2"><LayoutDashboard className="text-purple-600" /> Business Cards, Flyers, Brochures</li>
            <li className="flex items-center gap-2"><ImagePlus className="text-pink-500" /> UI Elements & Infographics</li>
            <li className="flex items-center gap-2"><Zap className="text-orange-600" /> Motion Graphics & Video Thumbnails</li>
          </ul>
        </div>

        <div className="bg-[#F0F6FF] p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition">
          <h3 className="font-semibold text-xl mb-3 text-[#1a2b6b]">Tools We Use</h3>
          <p className="text-gray-600 leading-relaxed">
            Adobe Photoshop, Illustrator, Figma, Canva, After Effects and more. Our toolset empowers us to bring your ideas to life with precision and flair.
          </p>
        </div>
      </motion.div>

      {/* Design Showcase with Clickable Details */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-3xl font-bold text-center text-[#1a2b6b] mb-10">Our Design Showcase</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {portfolioItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPortfolio(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedPortfolio.title === item.title
                  ? 'bg-[#1a2b6b] text-white shadow'
                  : 'bg-white text-[#1a2b6b] border border-[#1a2b6b] hover:bg-[#1a2b6b] hover:text-white'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[#1a2b6b] mb-2">{selectedPortfolio.title}</h3>
          <p className="text-gray-700 text-base">{selectedPortfolio.description}</p>
        </div>
      </motion.div>

      {/* Why Brands Choose Us */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="bg-[#f9fafb] p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold text-[#1a2b6b] mb-10 text-center">Why Brands Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <Rocket className="mx-auto text-[#1a2b6b] mb-3" size={28} />
            <h3 className="font-bold text-[#1a2b6b]">Creative Originality</h3>
            <p className="text-gray-600 text-sm mt-2">Each design is built from scratch to reflect your unique brand essence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <Clock3 className="mx-auto text-[#1a2b6b] mb-3" size={28} />
            <h3 className="font-bold text-[#1a2b6b]">Fast Turnaround</h3>
            <p className="text-gray-600 text-sm mt-2">We deliver beautiful, polished designs within tight deadlines.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <UserCheck className="mx-auto text-[#1a2b6b] mb-3" size={28} />
            <h3 className="font-bold text-[#1a2b6b]">Client Collaboration</h3>
            <p className="text-gray-600 text-sm mt-2">You’ll be involved in every step of the creative journey.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <RefreshCcw className="mx-auto text-[#1a2b6b] mb-3" size={28} />
            <h3 className="font-bold text-[#1a2b6b]">Unlimited Revisions</h3>
            <p className="text-gray-600 text-sm mt-2">We iterate until you say it’s perfect. No compromise on satisfaction.</p>
          </div>
        </div>
      </motion.div>

      {/* CTA & Back Link in Same Row */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex justify-center flex-wrap items-center gap-6"
      >
        <Link
          to="/getaqoute"
          className="bg-[#1a2b6b] hover:bg-[#114F9E] text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
        >
          Let’s Design Something Amazing
        </Link>
        <Link
          to="/services/marketing"
          className="text-[#1a2b6b] underline hover:text-[#114F9E] text-base"
        >
          ← Back to Marketing Services
        </Link>
      </motion.div>
    </div>
  );
};

export default GraphicDesigning;
