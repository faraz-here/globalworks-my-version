import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Ecommerce from "../../assets/Ecommerce/Ecommerce1.jpg";
import DigitalMarketing from "../../assets/DigitalMarketing/DigitalMarketing1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const CategoryCard = ({ title, description, path, imageUrl, index }) => {
  return (
    <motion.div
      className="flex flex-col bg-white rounded-[20px_0_20px_0] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <Link to={path}>
        <div className="relative overflow-hidden group">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-center text-2xl font-bold text-[#1a2b6b] mb-2">{title}</h3>
        <p className="text-center text-[#5C5C5C] text-md mb-4">
          {description}
        </p>

        <div className="mt-auto flex justify-center">
          <Link to={path}>
            <button className="button-wave border-[2px] border-[#1E5092] text-[#153C6F] font-semibold text-[16px] rounded-[50px] px-6 py-3 flex items-center gap-2 hover:text-white transition-all duration-300">
              EXPLORE SERVICES
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[20px]"
              >
                <path
                  d="M6 18L18 6M18 6H9M18 6V15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  useEffect(() => {
    document.title = 'Services';
  }, []);

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Section Title */}
        <motion.div
  className="text-center text-white lg:py-20 py-6 px-4 bg-gray-100"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <h2 className="lg:text-7xl text-4xl text-[#1a2b6b]">
    OUR <strong>SERVICES</strong>
  </h2>
  <p className="mt-4 text-lg text-[#5C5C5C] max-w-3xl mx-auto">
    At Global Works, we offer specialized services across departments to help businesses thrive in the digital world.
    From comprehensive digital marketing strategies to complete e-commerce store management, we've got you covered.
  </p>
</motion.div>


        {/* Department Categories */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 px-6 pb-16">
          <CategoryCard
            title="Marketing Department Services"
            description="Explore our full range of digital solutions including SEO, content, and branding to grow your online presence."
            path="/services/marketing"
            imageUrl={DigitalMarketing}
            index={0}
          />
          <CategoryCard
            title="E-commerce Department Services"
            description="Get complete store management from account creation to order processing for Amazon, eBay, and more."
            path="/services/ecommerce-department"
            imageUrl={Ecommerce}
            index={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
