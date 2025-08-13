import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const WelcomeMessage = () => {
  return (
    <motion.div
      className="flex flex-wrap items-center justify-center h-auto m-[10px] px-[20px] min-w-[300px] md:px-0 sm:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-[1100px] w-full">
        {/* Text Section */}
        <motion.div
          className="flex flex-wrap items-center p-[10px] flex-col md:flex-row md:mb-[20px]"
          variants={fadeUp}
        >
          <div className="flex-1 md:px-4">
            <h1 className="text-[1.2em] font-bold text-[#1a2b6b] font-inter mb-[20px] lg:text-[2.8em]">
              Welcome to GlobalWorks – Fastest Growing Marketing Company
            </h1>
            <p className="text-[1em] font-inter text-[#5C5C5C] md:text-[1.4em]">
              At GlobalWorks, we are dedicated to providing innovative digital solutions that empower businesses and individuals to establish a strong online presence. Our expertise spans across web development, e-commerce, digital marketing, and video editing, ensuring that your brand not only stands out but also thrives in the competitive digital landscape. Whether you are a startup looking to build a stunning website, a business scaling its online reach, or a creator seeking professional branding and content solutions, we’ve got you covered. With a team of experienced professionals, cutting-edge technogiies, and a passion for digital excellence, we are committed to turning your vision into reality. Let's create, innovate, and grow together!
            </p>
          </div>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-2 items-center mt-[30px] mb-0 md:space-x-5"
          variants={fadeUp}
        >
          {/* ✅ Button 1: With wave effect */}
          <a
            href="https://t.me/+4915211998833"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-wave flex items-center justify-center cursor-pointer rounded-[50px] h-[50px] w-[240px] md:w-[240px] lg:w-[280px] text-[15px] font-semibold font-inter text-white bg-[#053050] border border-white overflow-hidden relative z-10 transition-all duration-300">
              <Phone className="lg:w-6 lg:h-6 w-4 h-4 mr-2" />
              <span className="whitespace-nowrap">+49 1521 1998 833</span>
            </button>
          </a>

          {/* ✅ Button 2: View Our Work */}
          <Link to="/portfolio">
            <button className="button-wave border-[2px] border-[#1E5092] flex items-center justify-center cursor-pointer rounded-[50px] h-[50px] w-[195px] md:w-[220px] lg:w-[250px] text-[#153C6F] text-[16px] font-semibold font-inter relative overflow-hidden z-10 transition-all duration-300 ease-in-out">
              View Our Work
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[25px] lg:h-[25px] w-[18px] h-[18px] lg:ml-1 ml-1"
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeMessage;
