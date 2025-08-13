import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Ali Raza",
      feedback:
        "YouTube Automation service exceeded my expectations! From content strategy to video optimization, my channel's views and revenue have skyrocketed. Highly recommended for aspiring YouTubers!",
    },
    {
      name: "Sophia L.",
      feedback:
        "The Digital Marketing team is phenomenal! They helped me run targeted ads and SEO campaigns that boosted my brand's visibility and doubled my conversions within three months.",
    },
    {
      name: "James W.",
      feedback:
        "Website Development service was top-notch! They built a sleek, user-friendly, and high-converting website for my business. It looks professional and works flawlessly!",
    },
    {
      name: "Emily T.",
      feedback:
        "The Video Editing service transformed my raw footage into high-quality, engaging content. The team’s creativity and attention to detail made my videos stand out.",
    },
    {
      name: "David M.",
      feedback:
        "I got my eCommerce store developed, and the results are fantastic! The site is responsive, optimized, and has all the features I needed to start selling online with ease.",
    },
    {
      name: "Rachel B.",
      feedback:
        "Thanks to their YouTube automation service, I can now focus on content creation while they handle video scheduling, optimization, and audience engagement. My channel is growing faster than ever!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="py-24 relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#053050] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#5C5C5C] max-w-3xl mx-auto">
            Hear from those whose lives we’ve had the privilege to touch.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:left-10 bg-[#053050] hover:bg-[#021a34] text-white p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Testimonial Card with hover effect */}
          <motion.div
            key={currentIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg text-center transform transition-transform duration-500 hover:shadow-2xl hover:scale-[1.02]"
          >
            <h4 className="text-xl font-bold text-[#053050] mb-1">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-[#5C5C5C] leading-relaxed italic">
              "{testimonials[currentIndex].feedback}"
            </p>
          </motion.div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:right-10 bg-[#053050] hover:bg-[#021a34] text-white p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
