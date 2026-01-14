import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import supportImg from "../assets/contact-support.png";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const hoverText = ["C", "O", "N", "T", "A", "C", "T"];

  return (
    <section 
      ref={sectionRef}
      className="pt-24 bg-gray-50/50 relative overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* Main Section Heading */}
        <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
                CONTACT <span className="text-yellow-400">US</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Side: Image & Info */}
          <div className={`lg:w-5/12 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
            <div className="h-full flex flex-col">
              {/* Image with Hover Text Reveal */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 group flex-grow mb-8 cursor-pointer">
                <img 
                  src={supportImg} 
                  alt="Contact Support" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Word by Word / Letter by Letter Reveal Overlay */}
                <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[3px]">
                  <div className="flex space-x-2">
                    {hoverText.map((letter, i) => (
                      <span 
                        key={i} 
                        className="text-white text-4xl md:text-5xl font-black transition-all duration-500 transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-gray-900/80 to-transparent">
                  <p className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-2">24/7 Support Available</p>
                  <h3 className="text-xl font-black text-white uppercase">We're Here For You</h3>
                </div>
              </div>
              
              {/* Contact Info Cards with Hover Animations */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <FaPhoneAlt />, label: "Call Us", val: "+1 (555) 000-0000" },
                  { icon: <FaEnvelope />, label: "Email", val: "hello@aznanish.com" },
                  { icon: <FaMapMarkerAlt />, label: "Location", val: "100 Logistics Way, NY" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group/item bg-white p-5 rounded-2xl flex items-center space-x-5 shadow-sm border border-gray-100 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-yellow-400/5 translate-y-full group-hover/item:translate-y-0 transition-transform duration-500" />
                    
                    <div className="w-12 h-12 bg-gray-900 text-yellow-400 rounded-xl flex items-center justify-center text-lg group-hover/item:bg-yellow-400 group-hover/item:text-gray-900 transition-all duration-500 relative z-10 shadow-lg shadow-gray-200">
                      {item.icon}
                    </div>
                    <div className="relative z-10">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-tight mb-0.5">{item.label}</p>
                      <p className="text-sm font-black text-gray-800 transition-colors duration-500 group-hover/item:text-gray-900">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form Content */}
          <div className={`lg:w-7/12 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-gray-200/40 border border-gray-100 flex flex-col h-full hover:shadow-yellow-400/5 transition-shadow duration-700">
              <div className="mb-8">
                <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Quick Inquiry</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                  START YOUR <span className="text-yellow-400">PARTNERSHIP</span>
                </h2>
                <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-lg">
                  Fill out the form below and our dedicated agents will get back to you within minutes.
                </p>
              </div>

              <form className="space-y-5 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-xs focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-xs focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-xs focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all outline-none"
                  />
                </div>

                <div className="space-y-2 flex-grow flex flex-col">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Tell us about your logistics needs..." 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-xs focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all outline-none resize-none flex-grow"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gray-900 text-white rounded-2xl py-4 cursor-pointer flex items-center justify-center space-x-3 group hover:bg-yellow-400 hover:text-gray-900 transition-all duration-500 shadow-xl shadow-gray-200 active:scale-95 overflow-hidden relative"
                >
                  <span className="font-black uppercase tracking-[0.2em] text-[10px] relative z-10 transition-colors duration-500">Send Message</span>
                  <FaPaperPlane className="relative z-10 text-xs transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1" />
                  <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact