import { motion } from 'framer-motion';
import { Video, Settings, TrendingUp, Clock } from 'lucide-react';

const services = [
  { 
    icon: <Video size={50} className="text-[#1a2b6b]" />, 
    title: 'Video Content Automation', 
    desc: 'Automate video creation with AI-powered tools that generate engaging content, thumbnails, and captions, ensuring consistent uploads and increased viewership.',
  },
  { 
    icon: <Settings size={50} className="text-[#1a2b6b]" />, 
    title: 'Channel Optimization', 
    desc: 'Enhance your YouTube channel with SEO-optimized titles, descriptions, and tags to rank higher in search results and attract a larger audience.',
  },
  { 
    icon: <TrendingUp size={50} className="text-[#1a2b6b]" />, 
    title: 'Growth Strategy', 
    desc: 'Implement data-driven strategies to increase subscribers, watch time, and engagement using trend analysis and audience insights.',
  },
  { 
    icon: <Clock size={50} className="text-[#1a2b6b]" />, 
    title: 'Scheduling & Automation', 
    desc: 'Streamline content scheduling with automated publishing, bulk uploads, and performance analytics to maintain consistency.',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function YouTubeAutomation() {
  return (
    <section className="lg:py-20 py-10 lg:px-8 px-4 bg-gray-100 text-[#1a2b6b]">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">YouTube Automation Services</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">Boost your YouTube presence with our automation tools and strategies, ensuring optimized content, channel growth, and engagement.</p>
      </motion.div>
      
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants} 
            initial="hidden" 
            animate="visible" 
            className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-6 hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 transform"
          >
            <div>{service.icon}</div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 text-base">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
