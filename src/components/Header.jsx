import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import companyLogo from "/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Marketing Department Services", href: "/services/marketing" },
      { name: "E-commerce Department Services", href: "/services/ecommerce-department" },
    ],
  },
  { name: "Blogs", href: "/blogs" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#053050] shadow-md">
      <nav className="w-full sticky top-0 px-2 lg:px-10 bg-[#053050] z-[100] shadow-lg">
        <div className="container mx-auto py-3 flex flex-col md:flex-col lg:flex-row items-center md:space-y-3 lg:space-y-0 lg:justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 md:mb-2">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-12 md:h-16 lg:h-20 w-auto mx-auto lg:mx-0"
            />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex lg:flex items-center space-x-4 md:flex-wrap md:justify-center">
            {navLinks.map((link) => (
              <NavItem key={link.name} {...link} />
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/getaqoute"
            className="nav-btn items-center justify-center gap-1 text-xl hidden md:flex font-bold text-white font-[700] px-4 py-2 rounded-xl bg-[#053050] border border-white hover:bg-white hover:text-[#053050] transition-colors duration-300"
          >
            Get a Free Quote
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px] ml-1 transition-colors duration-300"
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

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden text-white text-3xl focus:outline-none absolute top-4 right-4"
          >
            {isNavOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        ref={navRef}
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isNavOpen ? "block" : "hidden"
        } bg-[#053050] w-full z-50`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <MobileNavItem key={link.name} {...link} closeMenu={() => setIsNavOpen(false)} />
          ))}
          <Link
            to="/getaqoute"
            onClick={() => setIsNavOpen(false)}
            className="block w-full text-center bg-white text-[#053050] font-bold border border-white px-4 py-2 rounded-md transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ name, href, dropdown }) => (
  <div className="relative group">
    <NavLink
      to={href}
      className={({ isActive }) =>
        `text-xl font-[500] flex items-center relative group px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
          isActive
            ? "bg-white text-[#053050]"
            : "text-white hover:scale-[1.05]"
        }`
      }
    >
      <span className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full group-hover:after:left-0">
        {name}
      </span>
    </NavLink>

    {dropdown && (
      <div
        className="absolute left-0 top-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block transition-all duration-300 ease-out shadow-md rounded-md overflow-hidden z-50"
        style={{ backgroundColor: "#053050" }}
      >
        {dropdown.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `block px-8 py-4 text-md font-[500] whitespace-nowrap border-b border-slate-300 transition-colors duration-200 ${
                isActive
                  ? "bg-white text-[#053050]"
                  : "text-white hover:bg-white hover:text-[#053050]"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    )}
  </div>
);

const MobileNavItem = ({ name, href, dropdown, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    closeMenu();
  };

  return (
    <div>
      <div
        className="flex justify-between items-center py-2 border-b border-[#FFF] text-white"
        onClick={() => dropdown && setIsOpen(!isOpen)}
      >
        <Link to={href} onClick={handleClick} className="text-white text-lg">
          {name}
        </Link>
        {dropdown && (
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180 text-white" : "text-white"
            }`}
          />
        )}
      </div>
      {dropdown && isOpen && (
        <div className="pl-4">
          {dropdown.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={closeMenu}
              className="block py-2 text-sm text-white hover:bg-white hover:text-[#053050] border-b border-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
