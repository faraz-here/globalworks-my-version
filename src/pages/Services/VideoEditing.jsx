import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, SkipForward, SkipBack, Settings, Layers, Scissors, Volume2, ChevronRight } from 'lucide-react';

const VideoEditing = () => {
  const [activeTab, setActiveTab] = useState('editing');

  const features = [
    {
      id: 'editing',
      title: "Professional Editing",
      description: "Transform raw footage into polished, engaging content with precision cuts, transitions, and timing adjustments that enhance your storytelling.",
      icon: <Scissors className="text-blue-600" />,
      details: [
        "Scene arrangement and sequencing",
        "Precision cuts and seamless transitions",
        "Tempo adjustment and pacing",
        "Content trimming and optimization"
      ]
    },
    {
      id: 'color',
      title: "Color Grading",
      description: "Elevate your visual aesthetics with professional color correction, grading, and LUT application for a consistent, cinematic look.",
      icon: <Layers className="text-blue-600" />,
      details: [
        "Custom color profiles and LUTs",
        "Exposure and contrast balancing",
        "Color correction and matching",
        "Mood and atmosphere enhancement"
      ]
    },
    {
      id: 'audio',
      title: "Audio Enhancement",
      description: "Perfect your sound with comprehensive audio processing including noise reduction, EQ adjustment, and professional mixing for crystal-clear audio.",
      icon: <Volume2 className="text-blue-600" />,
      details: [
        "Background noise removal",
        "Voice enhancement and clarity",
        "Music integration and balancing",
        "Spatial audio optimization"
      ]
    }
  ];

  const activeFeature = features.find(f => f.id === activeTab);

  return (
    <div className="w-full bg-white lg:p-12 p-6 rounded-lg shadow-lg">
      <motion.h2
        className="lg:text-6xl text-4xl font-bold text-center mb-2 text-[#1a2b6b]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Professional Video Editing
      </motion.h2>

      <motion.p
        className="text-center text-[#5C5C5C] mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Transform your raw footage into compelling, professional content that captivates your audience and elevates your brand.
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch mb-16">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-50 p-6 rounded-lg h-full">
            <h3 className="text-xl font-medium mb-4 text-[#1a2b6b]">
              {activeFeature.title}
            </h3>
            <p className="text-[#5C5C5C] mb-6">
              {activeFeature.description}
            </p>

            <ul className="space-y-3 mb-8">
              {activeFeature.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                >
                  <ChevronRight className="h-5 w-5 text-[#1a2b6b] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5C5C5C]">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative h-96 rounded-lg overflow-hidden shadow-md border border-gray-200 bg-gray-900">
            <div className="absolute top-0 left-0 right-0 h-10 bg-gray-800 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-xs mx-auto">Professional Video Editor</div>
            </div>

            <div className="absolute top-10 left-0 right-0 bottom-16 p-2 flex">
              <div className="w-2/3 h-full p-1">
                <div className="w-full h-full bg-black rounded border border-gray-700 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-4/5">
                    <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    ></motion.div>

                    {activeTab === 'color' && (
                      <motion.div
                        className="absolute inset-0 bg-blue-500 mix-blend-soft-light"
                        animate={{ opacity: [0, 0.2, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      ></motion.div>
                    )}

                    {activeTab === 'audio' && (
                      <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8"
                      >
                        <div className="relative w-full h-full">
                          <motion.div
                            className="absolute inset-0 flex items-end justify-around"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            {[...Array(16)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 bg-blue-400 opacity-70"
                                initial={{ height: Math.random() * 100 + '%' }}
                                animate={{
                                  height: [
                                    Math.random() * 20 + 20 + '%',
                                    Math.random() * 60 + 40 + '%',
                                    Math.random() * 20 + 20 + '%'
                                  ]
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  delay: i * 0.05
                                }}
                              ></motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-1/3 h-full pl-2">
                <div className="w-full h-full bg-gray-800 rounded border border-gray-700 p-2">
                  <div className="text-gray-300 text-xs mb-2 pb-1 border-b border-gray-700">
                    {activeTab === 'editing' ? 'Edit Tools' :
                      activeTab === 'color' ? 'Color Tools' : 'Audio Tools'}
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-gray-600"></div>
                        <div className="w-full h-3 bg-gray-700 rounded-full">
                          <motion.div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: (Math.random() * 40 + 30) + '%' }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((btn) => (
                        <div key={btn} className="h-6 bg-gray-700 rounded-sm flex items-center justify-center">
                          <div className="w-3 h-3 rounded-sm bg-gray-500"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 w-full h-16 bg-gray-800 border-t border-gray-700 px-3 pt-1">
              <div className="flex items-center justify-center gap-3 mb-1">
                <SkipBack size={14} className="text-gray-400" />
                <SkipBack size={14} className="text-gray-400 transform scale-x-50" />
                <Play size={18} className="text-gray-200" />
                <SkipForward size={14} className="text-gray-400 transform scale-x-50" />
                <SkipForward size={14} className="text-gray-400" />
                <Settings size={14} className="text-gray-400 ml-2" />
              </div>

              <div className="relative h-8 bg-gray-900 rounded-sm">
                <div className="absolute left-0 top-0 bottom-0 w-full overflow-hidden">
                  <div className="flex h-full">
                    <div className="h-full w-1/4 bg-blue-700 bg-opacity-30 border-r border-gray-700"></div>
                    <div className="h-full w-1/6 bg-green-700 bg-opacity-30 border-r border-gray-700"></div>
                    <div className="h-full w-1/5 bg-red-700 bg-opacity-30 border-r border-gray-700"></div>
                    <div className="h-full w-1/3 bg-purple-700 bg-opacity-30"></div>
                  </div>

                  <motion.div
                    className="absolute top-0 bottom-0 w-px bg-red-500"
                    initial={{ left: "10%" }}
                    animate={{ left: ["10%", "80%", "10%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Navigation */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === feature.id ? 'bg-white text-[#1a2b6b] shadow-sm' : 'text-black hover:text-gray-900'}`}
              onClick={() => setActiveTab(feature.id)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {feature.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#f9fafb] p-10 rounded-lg shadow-inner mb-10">
        <h2 className="text-3xl font-bold text-center text-[#1a2b6b] mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#1a2b6b] mb-2">Creative Excellence</h3>
            <p className="text-gray-600 text-sm">
              We blend creativity with precision to deliver cinematic-quality videos tailored to your brand.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#1a2b6b] mb-2">Client-Centric Process</h3>
            <p className="text-gray-600 text-sm">
              We involve you at every step — from scripting to final render — to ensure your vision is realized.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#1a2b6b] mb-2">On-Time Delivery</h3>
            <p className="text-gray-600 text-sm">
              Your deadlines matter. We’re known for delivering premium-quality edits without delays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;
