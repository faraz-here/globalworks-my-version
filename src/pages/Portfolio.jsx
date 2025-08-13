import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Code, TrendingUp, Video, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, tags, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white rounded-xl border border-[#053050] overflow-hidden shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <div className="p-1">
      <div className="bg-white p-6 rounded-t-lg">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#053050] mb-5 p-4 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#053050]">{title}</h3>
        <p className="text-[#5C5C5C] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-[#e6f0f8] text-[#053050] text-xs px-2.5 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="p-4 bg-gray-50">
      <button className="w-full py-2 text-[#053050] font-medium flex items-center justify-center cursor-pointer hover:underline">
        Learn More
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  </motion.div>
);

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="bg-[#053050] p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            {service.icon}
            {service.title}
          </h2>
          <button onClick={onClose} className="text-white bg-white/20 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.map((tag, index) => (
              <span key={index} className="bg-[#e6f0f8] text-[#053050] text-xs px-2.5 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[#5C5C5C] mb-4">{service.fullDescription}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {service.stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-[#053050] font-bold text-2xl">{stat.value}</p>
                <p className="text-gray-800 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/getaqoute" className="flex-1">
              <button className="relative z-10 w-full overflow-hidden group bg-[#053050] text-white border border-[#053050] px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out hover:text-[#053050] hover:bg-white">
                <span className="relative z-10">Get a Custom Quote</span>
                <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0 rounded-lg"></span>
              </button>
            </Link>
            <Link to="/portfolio" className="flex-1">
              <button
                className="relative z-10 w-full overflow-hidden group border border-[#053050] text-[#053050] px-6 py-3 rounded-lg font-medium hover:text-white transition-all duration-300 ease-in-out"
                onClick={onClose}
              >
                <span className="relative z-10">View Portfolio</span>
                <span className="absolute inset-0 bg-[#053050] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0 rounded-lg"></span>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const PortfolioServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <ShoppingCart size={24} className="text-white" />,
      title: "E-Commerce Solutions",
      description: "Custom e-commerce platforms designed to maximize conversions and scale globally.",
      tags: ["Shopify", "WooCommerce", "Custom Solutions"],
      fullDescription: "Our e-commerce experts build sophisticated online stores...",
      stats: [
        { value: "98%", label: "Client satisfaction" },
        { value: "43%", label: "Avg. conversion increase" },
        { value: "150+", label: "Stores launched" }
      ]
    },
    {
      id: 2,
      icon: <Code size={24} className="text-white" />,
      title: "Web Development",
      description: "Cutting-edge web solutions combining visuals with functionality.",
      tags: ["React", "Next.js", "WordPress"],
      fullDescription: "We build sleek websites and apps using modern technologies...",
      stats: [
        { value: "250+", label: "Projects delivered" },
        { value: "99%", label: "On-time completion" },
        { value: "45%", label: "Faster load times" }
      ]
    },
    {
      id: 3,
      icon: <TrendingUp size={24} className="text-white" />,
      title: "Digital Marketing",
      description: "Results-driven campaigns to boost visibility and conversions.",
      tags: ["SEO", "PPC", "Social Media"],
      fullDescription: "We drive results with SEO, advertising, and data-backed strategies...",
      stats: [
        { value: "180%", label: "Avg. ROI" },
        { value: "74%", label: "Traffic increase" },
        { value: "120+", label: "Active clients" }
      ]
    },
    {
      id: 4,
      icon: <Video size={24} className="text-white" />,
      title: "Video Production",
      description: "High-quality video editing to bring your stories to life.",
      tags: ["Commercial", "Social Media"],
      fullDescription: "We produce visually engaging and emotionally impactful videos...",
      stats: [
        { value: "300+", label: "Projects completed" },
        { value: "87%", label: "Engagement increase" },
        { value: "14", label: "Industry awards" }
      ]
    },
    {
      id: 5,
      icon: <Youtube size={24} className="text-white" />,
      title: "YouTube Automation",
      description: "Passive income through fully managed YouTube channels.",
      tags: ["Content Creation", "Monetization"],
      fullDescription: "From scriptwriting to publishing, we handle it all...",
      stats: [
        { value: "85M+", label: "Views generated" },
        { value: "42", label: "Monetized channels" },
        { value: "215%", label: "Subscriber growth" }
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#053050] mb-6">
            Global Digital Solutions
          </h1>
          <div className="flex justify-center items-center mb-6">
            <Globe size={28} className="text-[#053050] mr-3" />
            <p className="text-xl lg:text-2xl text-[#5C5C5C]">Empowering businesses worldwide</p>
          </div>
          <Link to="/getaqoute">
  <button className="bg-[#053050] hover:bg-[#021d3a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer">
    Transform Your Business Today
  </button>
</Link>


        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#053050] font-semibold">OUR EXPERTISE</span>
            <h2 className="text-4xl font-bold text-[#053050] mt-4 mb-6">Transform Your Digital Presence</h2>
            <p className="max-w-2xl mx-auto text-[#5C5C5C] text-lg">
              From concept to execution, we deliver digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                tags={service.tags}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#053050] py-16 mb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Elevate Your Business?</h2>
          <Link to="/getaqoute">
  <button className="relative z-10 overflow-hidden group bg-white text-[#053050] border border-[#053050] font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:text-white hover:border-white hover:bg-[#053050] cursor-pointer">
    <span className="relative z-10 flex items-center gap-2">
      Get a Free Consultation
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path d="M6 18L18 6M18 6H9M18 6V15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    <span className="absolute inset-0 bg-[#053050] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0 rounded-full"></span>
  </button>
</Link>

        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default PortfolioServices;
