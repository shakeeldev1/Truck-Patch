import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaArrowRight 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Conditions", path: "/terms" },
    ],
    Services: [
      { name: "Dedicated Dispatch", path: "/services" },
      { name: "Owner Operator Support", path: "/services" },
      { name: "Load Board Management", path: "/services" },
      { name: "TMS & ELD Software", path: "/services" },
    ],
    Support: [
      { name: "Help Center", path: "/contact" },
      { name: "Contact Us", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebookF />, path: "#" },
    { icon: <FaTwitter />, path: "#" },
    { icon: <FaInstagram />, path: "#" },
    { icon: <FaLinkedinIn />, path: "#" },
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 pt-21 pb-4 ">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Company Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center font-bold text-gray-900">
                A
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Aznanish<span className="text-yellow-400">Logistics</span>
              </span>
            </Link>
            <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">
              Providing reliable truck dispatching services for owner operators and small trucking companies across America. We handle loads, paperwork, and logistics so you can focus on driving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-gray-900 hover:border-yellow-400 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group relative text-gray-600 hover:text-yellow-400 transition-colors duration-300 inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 mb-4" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm">
            © {currentYear} Aznanish Logistics. All rights reserved.
          </p>

          <div className="w-full md:w-auto">
            <form className="flex items-center max-w-md bg-white rounded-full p-1 border border-gray-300 focus-within:border-yellow-400 transition-colors shadow-sm">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="bg-transparent border-none focus:ring-0 text-sm px-4 py-2 w-full text-gray-700 placeholder-gray-400"
              />
              <button className="bg-yellow-400 text-gray-900 p-2.5 rounded-full hover:bg-yellow-500 transition-colors shadow-lg">
                <FaArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
