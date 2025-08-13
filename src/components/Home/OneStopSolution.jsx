import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OneStopSolution = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const features = [
    {
      title: "Full-Service Approach",
      description: "From branding and design to marketing and web development—we’ve got you covered."
    },
    {
      title: "Custom Strategies",
      description: "We tailor each project to fit your unique business goals, audience, and brand."
    },
    {
      title: "Seamless Execution",
      description: "We bring ideas to life with professional execution and attention to detail."
    },
    {
      title: "Dedicated Team",
      description: "Work with experienced professionals committed to your success from start to finish."
    },
    {
      title: "Transparent Process",
      description: "Stay informed at every stage of your project with clear communication and progress updates."
    },
    {
      title: "Ongoing Support",
      description: "We’re here even after launch—with maintenance, updates, and optimization."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center box-shadow-none bg-white px-6 py-12">
      {/* Heading */}
      <div className="text-center z-10 mb-10">
        <h3
          className="text-[#1a2b6b] text-4xl md:text-5xl font-normal leading-[1.4]"
          data-aos="fade-right"
        >
          We are One <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#061C38] via-[#114F9E] to-[#061C38]">Stop Solution Providers</strong>
        </h3>
      </div>

      {/* Intro Text */}
      <div className="max-w-4xl text-center mb-12" data-aos="fade-up">
        <p className="text-[#5C5C5C] text-lg md:text-xl leading-relaxed">
          At GlobalWorks, we believe in delivering more than just services—we deliver complete solutions.
          Whether you're a startup, growing business, or enterprise, we provide everything under one roof to help you thrive in the digital world.
        </p>
      </div>

      {/* Feature Boxes */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mb-10" data-aos="fade-up">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#f3f7ff] p-6 rounded-xl shadow hover:shadow-md transition duration-300 cursor-pointer"
            onClick={() => toggleDescription(index)}
          >
            <h4 className="text-[#1a2b6b] text-xl font-semibold mb-2">{feature.title}</h4>

            <div
              className={`text-[#5C5C5C] text-base mt-2 transition-all duration-300 overflow-hidden ${
                activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneStopSolution;
