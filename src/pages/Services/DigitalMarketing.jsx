import { motion } from 'framer-motion';
import { Megaphone, Search, DollarSign, Mail } from 'lucide-react';

const services = [
  { 
    icon: <Search size={50} className="text-[#1a2b6b]" />, 
    title: 'SEO Optimization', 
    desc: 'Enhance your website ranking with strategic SEO implementation, keyword optimization, and technical SEO best practices. Our experts ensure your site stays ahead of competitors using the latest search engine algorithms and best-in-class techniques to drive organic traffic.',
  },
  { 
    icon: <Megaphone size={50} className="text-[#1a2b6b]" />, 
    title: 'Social Media Marketing', 
    desc: 'Leverage social media platforms to grow your audience, increase engagement, and drive conversions through tailored strategies. We create data-driven campaigns, optimize content for maximum reach, and use advanced analytics to fine-tune performance for the best results.',
  },
  { 
    icon: <DollarSign size={50} className="text-[#1a2b6b]" />, 
    title: 'PPC Advertising', 
    desc: 'Optimize your paid ad campaigns for maximum ROI with data-driven targeting, compelling ad creatives, and budget management. Our PPC specialists design high-converting ads across platforms like Google Ads and Facebook, ensuring every dollar spent translates into revenue.',
  },
  { 
    icon: <Mail size={50} className="text-[#1a2b6b]" />, 
    title: 'Email Marketing', 
    desc: 'Create impactful email campaigns to nurture leads, build customer relationships, and drive sales with personalized messaging. Our automation strategies ensure your audience receives the right message at the right time, enhancing engagement and boosting conversion rates.',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function DigitalMarketing() {
  return (
    <section className="py-20 px-8 bg-gray-100 text-[#1a2b6b]">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing Services</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">Boost your business growth with our expert digital marketing solutions. Our team delivers innovative, data-driven strategies to ensure maximum visibility, engagement, and conversions.</p>
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