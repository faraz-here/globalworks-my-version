import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import EcommerceImg from '../../assets/Ecommerce/Ecommerce1.jpg';
import DigitalMarketingImg from '../../assets/DigitalMarketing/DigitalMarketing1.jpg';
import WebsiteDevelopmentImg from '../../assets/WebDevelopement/websitedevelopment.jpg';

const services = [
  {
    title: 'E-commerce',
    description: 'Build Your Online Store & Scale Effortlessly.',
    image: EcommerceImg,
    path: '/services/ecommerce',
    buttonText: 'Grow My Store'
  },
  {
    title: 'Digital Marketing',
    description: 'Boost Your Brand with Strategic Marketing.',
    image: DigitalMarketingImg,
    path: '/services/digital-marketing',
    buttonText: 'Start Marketing'
  },
  {
    title: 'Website Development',
    description: 'Websites for a Powerful Online Presence.',
    image: WebsiteDevelopmentImg,
    path: '/services/website-development',
    buttonText: 'Build My Website'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const HomeServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-[#1a2b6b] mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          OUR <strong>SERVICES</strong>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[20px_0_20px_0] shadow-md overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:shadow-xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <Link to={service.path}>
                <div className="relative overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </Link>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a2b6b] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.path}>
                  <button className="relative z-10 overflow-hidden group border border-[#053050] text-[#053050] font-semibold px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:text-white hover:border-[#053050]">
                    <span className="relative z-10">{service.buttonText}</span>
                    <span className="absolute inset-0 bg-[#053050] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0 rounded-full"></span>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Link to="/services">
            <button className="relative z-10 overflow-hidden group bg-[#053050] text-white border border-[#053050] font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:text-[#053050] hover:border-[#053050] hover:bg-white">
              <span className="relative z-10">View All Services</span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0 rounded-full"></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
