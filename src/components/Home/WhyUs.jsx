import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faClock, faShieldAlt, faWrench } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";

const WhyUs = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      icon: faCogs,
      title: "Quality Products",
      description:
        "We believe in Software Quality that is essential to deliver the product on time and on the required quality.",
    },
    {
      icon: faClock,
      title: "Timely Work",
      description:
        "We always plan the Project Development schedule for deploying the Project on time with all completed requirements.",
    },
    {
      icon: faShieldAlt,
      title: "Reliability",
      description:
        "Failure Free Products are our main target. We always develop the most reliable products without any failure issues in the future.",
    },
    {
      icon: faWrench,
      title: "Maintainable",
      description: "Our products are fully maintainable for the injection of any new functionality or requirement.",
    },
  ];

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.5
      }
    })
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold text-[#1a2b6b] mb-6">
            Why Choose GlobalWorks?
          </h2>
        </motion.div>

        {/* Desktop Version */}
        <div className="hidden lg:block relative">
          <svg
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[400px]"
            viewBox="0 0 1200 400"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M100 200 C 400 100, 800 300, 1100 200"
              stroke="url(#gradient-path)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="gradient-path" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1a2b6b" />
                <stop offset="100%" stopColor="#1a2b6b" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`${index % 2 === 0 ? 'mt-0' : 'mt-32'} group`}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-[#1a2b6b] flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={step.icon} className="w-12 h-12 text-white" />
                  </div>
                  <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-[#1a2b6b]">
                      {step.title}
                    </h3>
                    <p className="text-[#5C5C5C] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Version (Blue theme) */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a2b6b] to-[#1a2b6b]" />
              <div className="ml-12 relative bg-white rounded-xl p-6 shadow-lg">
                <div className="absolute -left-16 top-4 w-12 h-12 rounded-full bg-[#1a2b6b] flex items-center justify-center text-xl shadow-md">
                  <FontAwesomeIcon icon={step.icon} className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1a2b6b]">
                  {step.title}
                </h3>
                <p className="text-[#5C5C5C] text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
