import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from "/logo.png";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-8 bg-[#053050] overflow-x-hidden">
      {/* Top CTA Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug md:max-w-[65%]">
          Let's Build Something Extraordinary!
        </h2>
        <Link
          to="/getaqoute/"
          className="text-white border border-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-white hover:text-[#053050] transition-colors duration-300 flex items-center gap-2"
        >
          Get Started
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              d="M6 18L18 6M18 6H9M18 6V15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto pt-10 mt-6 border-t border-white/20 px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & About */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-20 mb-4"
              style={{ maxWidth: "150px" }}
            />
            <p className="text-white text-sm leading-relaxed max-w-full md:max-w-[250px] text-center sm:text-left">
              At GlobalWorks, we provide innovative digital solutions that empower businesses and individuals to establish a strong online presence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start md:col-span-1 md:w-[90%]">
            <h4 className="text-white font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white text-center sm:text-left">
              <li><Link to="/portfolio" className="hover:text-slate-300">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-slate-300">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-slate-300">FAQ</Link></li>
            </ul>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col items-center sm:items-start md:col-span-1 md:w-[90%]">
            <h4 className="text-white font-semibold text-lg mb-3">Visit Us</h4>
            <p className="text-white text-sm text-center sm:text-left">
              Monday - Friday<br />9:00 AM - 6:00 PM
            </p>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold text-lg mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white text-center sm:text-left">
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>Sharjah, Dubai</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <a href="mailto:globalwork907@gmail.com" className="hover:text-slate-300">globalwork907@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <a href="tel:+19299334325" className="hover:text-slate-300">+19 299 334 325</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-3 mt-4 justify-center md:justify-start">
              <SocialLink href="https://x.com/devverseorg?s=21" icon="fab fa-twitter" />
              <SocialLink href="https://www.instagram.com/globalwork907/" icon="fab fa-instagram" />
              <SocialLink href="https://www.linkedin.com/company/devverse-01/" icon="fab fa-linkedin" />
              <SocialLink href="http://www.youtube.com/@Globalwork-de" icon="fab fa-youtube" />
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="w-full border-t border-white/20 mt-10 pt-4 text-center text-sm text-white">
          &copy; 2025–2026 <strong>GlobalWorks</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:bg-white hover:text-[#053050] p-2 rounded-full transition-colors duration-300"
  >
    <i className={`${icon} text-base`}></i>
  </a>
);

export default Footer;
