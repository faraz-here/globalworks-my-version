import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioStats = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
          markers: false,
          pin: false,
          smoothChildTiming: true,
        },
      });

      tl.to(titleRef.current, {
        y: window.innerHeight * 0.7,
        ease: "linear",
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-r from-[#06162A] via-[#002B60] to-[#081C35] text-white px-4 py-12 lg:py-12 overflow-hidden relative"
    >
     

      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-16 h-full relative z-10">
        {/* Top Section (only visible on mobile) */}
        <div className="lg:hidden">
          <h2 className="text-2xl font-syne -mb-3 mt-6">About Our Company</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 flex-1">
          {/* Left Section (hidden on mobile) */}
          <div className="hidden lg:block lg:w-1/3 relative">
            <div className="h-full flex flex-col justify-between lg:sticky lg:top-24">
              <h2 ref={titleRef} className="text-4xl font-bold font-syne">
                About Our Company
              </h2>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3">
            <div className="space-y-12 lg:space-y-24">
              {/* Awards Section */}
             

              <div>
                <p className="text-xl lg:text-3xl font-light mb-6 lg:mb-12 font-inter">
                  <span className="text-gray-400">
                    Established in 2015, we have dedicated ourselves to
                  </span>{" "}
                  <span className="text-white">
                    crafting captivating visual narratives
                  </span>{" "}
                  <span className="text-gray-400">
                    defined by creativity, innovation, and an unwavering
                    commitment to
                  </span>{" "}
                  <span className="text-white">
                    excellence in video production.
                  </span>
                </p>
               
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-24">
                {/* Stats Items */}
                <div className="relative h-32 flex items-center justify-center">
                  <span className="absolute inset-0 text-[5.6rem] md:text-[6.5rem] font-bold text-gray-500/60 pointer-events-none select-none text-center">
                    13+
                  </span>
                  <h3 className="absolute text-md  md:bottom-10 bottom-11 font-bold font-syne uppercase tracking-wider z-10 text-white">
                    Years of Experience
                  </h3>
                </div>

                <div className="relative h-32 flex items-center justify-center">
                  <span className="absolute inset-0 text-[5.6rem] md:text-[6.5rem] font-bold text-gray-500/60 pointer-events-none select-none text-center">
                    200+
                  </span>
                  <h3 className="absolute text-md  md:bottom-10 bottom-11 font-bold font-syne uppercase tracking-wider z-10 text-white">
                    Repeated Clients
                  </h3>
                </div>

                <div className="relative h-32 flex items-center justify-center">
                  <span className="absolute inset-0 text-[5.6rem] md:text-[6.5rem] font-bold text-gray-500/60 pointer-events-none select-none text-center">
                    478
                  </span>
                  <h3 className="absolute text-md  md:bottom-10 bottom-11 font-bold font-syne uppercase tracking-wider z-10 text-white">
                    Completed Projects
                  </h3>
                </div>

                <div className="relative h-32 flex items-center justify-center">
                  <span className="absolute inset-0 text-[5.6rem] md:text-[6.5rem] font-bold text-gray-500/60 pointer-events-none select-none text-center">
                    350+
                  </span>
                  <h3 className="absolute md:bottom-10 bottom-11 text-md font-bold font-syne uppercase tracking-wider z-10 text-white">
                    Happy Clients
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioStats;
