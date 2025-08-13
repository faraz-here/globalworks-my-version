import React from "react";
import Hero1 from "../../assets/HeroSection/hero1.png";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative lg:min-h-[800px] md:min-h-[600px] min-h-[200px] w-full overflow-hidden bg-white lg:px-4 md:px-6 px-2 lg:py-40 md:py-28 py-2">
      {/* Right swirl */}
      <div className="absolute lg:right-[-200px] right-0 lg:top-[20%] top-[44%] lg:h-[400px] lg:w-[400px] w-[40px] h-[60px] transform">
        <img
          src={Hero1}
          alt="Blue swirl decoration"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto lg:max-w-4xl md:max-w-2xl max-w-xl text-center">
        <h1 className="lg:mb-4 md:mb-6 mb-0 text-center font-inter font-extrabold tracking-[-8%] text-[#1a2b6b] text-xl md:text-4xl lg:text-6xl">
          Empowering Businesses
          <br /> with
          <div className="relative inline-block">
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#061C38] via-[#114F9E] to-[#061C38] md:px-2 md:py-1 px-2 lg:px-3 lg:py-1 z-10">
              Global-Works
            </span>
          </div>
          <span className="ml-0">Digital</span> <br /> Solutions
        </h1>

        <p className="font-inter lg:mb-8 md:mb-6 mb-3 lg:text-[32px] md:text-xl text-[9px] font-medium tracking-[-2%] text-[#5C5C5C] text-center lg:leading-[44.27px] md:leading-9">
          Let's Build Something Extraordinary!
        </p>

        {/* Buttons */}
        <div className="flex justify-center flex-col items-center space-y-3">
          {/* Phone Button */}
          <a
            href="https://t.me/+4915211998833"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a call on Telegram"
            className="inline-block"
          >
            <button
              type="button"
              className="button-wave cursor-pointer flex items-center justify-center font-inter lg:w-[400px] md:w-[300px] w-[90.23px] lg:h-[88px] md:h-[60px] h-[26.86px] lg:rounded-[44px] md:rounded-2xl rounded-[12px] bg-[#053050] text-white lg:text-3xl md:text-xl text-[7px] font-semibold shadow-md transition-all duration-300"
            >
              <Phone className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-2 h-2 lg:mr-4 md:mr-2 mr-1" />
              <span className="mr-0">+49 1521 1998 833</span>
            </button>
          </a>

          {/* Appointment Button */}
          <a
            href="https://t.me/+4915211998833"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Make an appointment"
            className="inline-block"
          >
            <button
              type="button"
              className="button-wave cursor-pointer flex items-center justify-center font-inter lg:w-[400px] md:w-[300px] w-[90.23px] lg:h-[88px] md:h-[60px] h-[26.86px] lg:rounded-[44px] md:rounded-2xl rounded-[12px] bg-[#053050] text-white lg:text-3xl md:text-xl text-[7px] font-semibold shadow-md transition-all duration-300"
            >
              <span className="mr-0 whitespace-nowrap">Make an appointment</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[50px] lg:h-[50px] md:w-[28px] md:h-[28px] w-[12px] h-[12px]"
                aria-hidden="true"
              >
                <path
                  d="M6 18L18 6M18 6H9M18 6V15"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </a>

          {/* Contact Button */}
          <Link to="/getaqoute">
            <button
              type="button"
              className="button-wave cursor-pointer flex items-center justify-center font-inter lg:w-[400px] md:w-[300px] w-[90.23px] lg:h-[88px] md:h-[60px] h-[26.86px] lg:rounded-[44px] md:rounded-2xl rounded-[12px] border-2 border-[#114F9E] bg-white text-[#053050] lg:text-4xl md:text-xl text-[9px] font-semibold shadow-md transition-all duration-300"
            >
              <span className="mr-0">Contact</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
