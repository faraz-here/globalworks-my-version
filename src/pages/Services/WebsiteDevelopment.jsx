import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const [activeService, setActiveService] = useState(null);
  const [activeTab, setActiveTab] = useState('features');

  // Service data with comprehensive details
  const services = [
    {
      id: 'shopify',
      name: 'Shopify Development',
      icon: '🛒',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      shortDesc: 'Turn your products into a professional online store with customized Shopify solutions.',
      longDesc: 'Our expert Shopify development team builds custom, high-converting e-commerce stores that perfectly represent your brand while maximizing sales. We handle everything from theme customization to app integration.',
      features: [
        {
          title: 'Custom Theme Development',
          desc: 'Unique designs that reflect your brand identity while maintaining Shopifys powerful e-commerce functionality',
          icon: '🎨'
        },
        {
          title: 'App Integration',
          desc: 'Seamless integration of third-party apps to extend your stores capabilities',
          icon: '🔌'
        },
        {
          title: 'Migration Services',
          desc: 'Smooth transition from other platforms to Shopify with zero data loss',
          icon: '🔄'
        },
        {
          title: 'Performance Optimization',
          desc: 'Speed enhancements for better user experience and higher conversion rates',
          icon: '⚡'
        }
      ],
      technologies: ['Shopify Liquid', 'JavaScript', 'Shopify API', 'ThemeKit', 'Tailwind CSS'],
    
      process: [
        { step: 1, name: 'Discovery', desc: 'Understanding your brand, products, and business goals' },
        { step: 2, name: 'Design', desc: 'Creating mockups for your approval' },
        { step: 3, name: 'Development', desc: 'Building your custom Shopify store' },
        { step: 4, name: 'Testing', desc: 'Quality assurance across all devices' },
        { step: 5, name: 'Launch', desc: 'Going live with your new Shopify store' }
      ]
    },
    {
      id: 'wordpress',
      name: 'WordPress Development',
      icon: '📝',
      color: 'from-green-500 to-teal-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      shortDesc: 'Powerful, flexible websites with WordPress - the worlds most popular CMS platform.',
      longDesc: 'Our WordPress development services deliver custom, responsive, and scalable websites with easy content management. From blogs to business sites, we create WordPress solutions that grow with your organization.',
      features: [
        {
          title: 'Custom Theme Development',
          desc: 'Tailored WordPress themes designed specifically for your business needs',
          icon: '🏗️'
        },
        {
          title: 'Plugin Development',
          desc: 'Custom functionality through specialized WordPress plugins',
          icon: '🧩'
        },
        {
          title: 'E-commerce Integration',
          desc: 'WooCommerce setup for selling products and services',
          icon: '🛍️'
        },
        {
          title: 'Security & Maintenance',
          desc: 'Ongoing support to keep your WordPress site secure and updated',
          icon: '🔒'
        }
      ],
      technologies: ['PHP', 'WordPress', 'MySQL', 'WooCommerce', 'Advanced Custom Fields', 'Elementor'],
     
      process: [
        { step: 1, name: 'Planning', desc: 'Defining site structure and functionality' },
        { step: 2, name: 'Design', desc: 'Creating visual mockups for approval' },
        { step: 3, name: 'Development', desc: 'Building your WordPress website' },
        { step: 4, name: 'Content', desc: 'Adding and organizing your content' },
        { step: 5, name: 'Launch', desc: 'Going live with your new WordPress site' }
      ]
    },
    {
      id: 'custom',
      name: 'Custom Development',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      shortDesc: 'Bespoke web applications built from scratch to meet your specific business requirements.',
      longDesc: 'Our custom web development services create tailor-made digital solutions that solve your unique business challenges. Using modern frameworks and best practices, we build scalable, high-performance web applications.',
      features: [
        {
          title: 'Frontend Development',
          desc: 'Responsive interfaces built with React and modern JavaScript frameworks',
          icon: '🖥️'
        },
        {
          title: 'Backend Development',
          desc: 'Robust server-side architecture and API development',
          icon: '⚡'
        },
        {
          title: 'Database Design',
          desc: 'Optimized data structures for your applications needs',
          icon: '🗄️'
        },
        {
          title: 'API Integration',
          desc: 'Seamless connection with third-party services and platforms',
          icon: '🔌'
        }
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
      
      process: [
        { step: 1, name: 'Discovery', desc: 'Understanding your business requirements' },
        { step: 2, name: 'Architecture', desc: 'Planning the technical foundation' },
        { step: 3, name: 'Design', desc: 'Creating UI/UX interfaces' },
        { step: 4, name: 'Development', desc: 'Building your custom application' },
        { step: 5, name: 'Testing', desc: 'Quality assurance and performance testing' },
        { step: 6, name: 'Deployment', desc: 'Launching your application' }
      ]
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const detailsVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  // Get the active service data
  const activeServiceData = activeService ? services.find(s => s.id === activeService) : null;

  return (
    <div className="max-w-6xl mx-auto px-4  lg:py-16 py-10">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1a2b6b] mb-4">Website Development Services</h1>
        <p className="text-xl text-[#5C5C5C] max-w-3xl mx-auto">
          Transform your online presence with modern, high-performance websites and applications
          tailored to your business needs.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className={`rounded-xl overflow-hidden shadow-lg bg-white border ${activeService === service.id ? service.borderColor : 'border-gray-100'}`}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setActiveService(activeService === service.id ? null : service.id)}
          >
            <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
              <span className="text-5xl">{service.icon}</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#1a2b6b] mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-black rounded-full">
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-black rounded-full">
                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
              <motion.button 
                className={`w-full py-2 px-4 rounded-md font-medium cursor-pointer ${
                  activeService === service.id 
                    ? `${service.bgColor} ${service.textColor}`
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeService === service.id ? 'Hide Details' : 'View Details'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Service Details Section */}
      <AnimatePresence>
        {activeServiceData && (
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
            variants={detailsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={activeServiceData.id}
          >
            {/* Detail Header */}
            <div className={`bg-gradient-to-r ${activeServiceData.color} p-8 text-white`}>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{activeServiceData.icon}</span>
                <h2 className="text-3xl font-bold">{activeServiceData.name}</h2>
              </div>
              <p className="text-xl opacity-90">{activeServiceData.longDesc}</p>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <div className="flex flex-wrap">
                {['features', 'technologies', 'process'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                      activeTab === tab
                        ? `border-b-2 ${activeServiceData.textColor} border-current`
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {/* Features Tab */}
              {activeTab === 'features' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeServiceData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex p-4 rounded-lg border border-gray-100 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`flex-shrink-0 ${activeServiceData.textColor} text-3xl mr-4`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Technologies Tab */}
              {activeTab === 'technologies' && (
                <div>
                  <p className="text-gray-600 mb-6">
                    Our {activeServiceData.name.toLowerCase()} solutions leverage the following technologies:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {activeServiceData.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center justify-center p-4 rounded-lg ${activeServiceData.bgColor} border ${activeServiceData.borderColor}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                      >
                        <span className={`font-medium ${activeServiceData.textColor}`}>{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              

              {/* Process Tab */}
              {activeTab === 'process' && (
                <div>
                  <p className="text-gray-600 mb-6">
                    Our tried and tested development process for {activeServiceData.name.toLowerCase()} projects:
                  </p>
                  <div className="relative">
                    {/* Process Timeline Line */}
                    <div className="absolute top-0 bottom-0 left-9 w-1 bg-gray-200 hidden md:block"></div>
                    
                    {/* Process Steps */}
                    {activeServiceData.process.map((step, index) => (
                      <motion.div
                        key={index}
                        className="flex mb-8 relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 z-10">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                            `bg-gradient-to-r ${activeServiceData.color} text-white`
                          } font-bold text-xl shadow-md`}>
                            {step.step}
                          </div>
                        </div>
                        <div className="ml-6 pt-3">
                          <h4 className="text-xl font-bold text-gray-800 mb-1">{step.name}</h4>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 p-6 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-700 mb-4 md:mb-0">
                  Ready to start your {activeServiceData.name.toLowerCase()} project?
                </p>
                <Link to="/getaqoute">
                <motion.button
                  className={`py-2 px-6 rounded-md font-medium bg-gradient-to-r cursor-pointer ${activeServiceData.color} text-white`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Free Consultation
                </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Us Section */}
      <motion.div 
        className="bg-gray-50 rounded-xl p-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-[#1a2b6b] mb-8 text-center">Why Choose Our Development Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '⏱️',
              title: 'Timely Delivery',
              desc: 'We adhere to strict deadlines and deliver projects on time, every time.'
            },
            {
              icon: '💡',
              title: 'Innovative Solutions',
              desc: 'We leverage the latest technologies to create cutting-edge digital experiences.'
            },
            {
              icon: '👨‍💻',
              title: 'Expert Team',
              desc: 'Our developers have years of experience in building successful web projects.'
            },
            {
              icon: '🔍',
              title: 'Attention to Detail',
              desc: 'We focus on the small details that make a big difference in user experience.'
            },
            {
              icon: '🛠️',
              title: 'Ongoing Support',
              desc: 'We provide continuous maintenance and support after launch.'
            },
            {
              icon: '📈',
              title: 'Results-Driven',
              desc: 'We build solutions that drive business growth and achieve your goals.'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#1a2b6b] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default WebDevelopment;