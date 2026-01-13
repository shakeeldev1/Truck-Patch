import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/plans" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-white py-3"
      }`}
    >
      <div className="max-w-screen-xl px-6 mx-auto flex items-center justify-between">
        
        {/* Left: Logo Section */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-200 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-extrabold text-gray-900 tracking-tight">
              Aznanish Logistics
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center justify-center">
          <ul className="flex space-x-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`relative text-sm font-semibold uppercase tracking-widest transition-colors duration-300 group ${
                      isActive ? "text-yellow-400" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                    {/* Hover Underline: Expands from Center */}
                    <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-yellow-400 transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: CTA/Login Section */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <Link
            to="/login"
            className="hidden sm:block text-sm font-bold text-gray-700 hover:text-yellow-400 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all shadow-md active:scale-95"
          >
            Get Started
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-4 p-2 text-2xl text-gray-800"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu: Animated Dropdown */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-gray-50 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-8 space-y-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-gray-800 hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}