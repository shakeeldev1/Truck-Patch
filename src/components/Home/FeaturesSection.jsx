import React, { useEffect, useRef, useState } from "react";
import { FaShieldAlt, FaTruckLoading, FaHeadset, FaRoute, FaArrowRight } from "react-icons/fa";
import controlImg from "../../assets/logistics-control.png";

const ServiceNode = ({ icon, title, desc, index, isVisible }) => (
  <div 
    className={`group relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-700 transform ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    {/* Animated Corner Border */}
    <div className="absolute top-0 left-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-700" />
    <div className="absolute top-0 right-0 w-[2px] h-0 bg-yellow-400 group-hover:h-full transition-all duration-700 delay-100" />

    <div className="w-10 h-10 bg-yellow-400/10 text-yellow-400 rounded-xl flex items-center justify-center text-lg mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
      {icon}
    </div>
    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2">{title}</h4>
    <p className="text-[10px] text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">{desc}</p>
  </div>
);

const FeaturesSection = () => {
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

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "No Forced Dispatch",
      desc: "Total freedom to navigate your business path. Our system provides choices, you drive the results."
    },
    {
      icon: <FaTruckLoading />,
      title: "Elite Rates Recovery",
      desc: "Our strategic negotiators leverage market data to secure top-tier pay for every single lane."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Command Center",
      desc: "Constant logistical oversight and support. We manage the details while you command the road."
    },
    {
      icon: <FaRoute />,
      title: "Precision Route Optima",
      desc: "Advanced algorithmic planning to maximize your loaded miles and eliminate wasteful deadhead."
    }
  ];

  const hoverText = "ADVANTAGE".split("");

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Cyber Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      {/* Large Watermark */}
      <div className="absolute top-20 left-10 text-[10rem] font-black text-white/[0.02] uppercase leading-none select-none tracking-tighter">
        Aznanish
      </div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Side: Futuristic Visual */}
          <div className={`lg:w-5/12 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-yellow-400/10 rounded-[2.5rem] blur-2xl group-hover:bg-yellow-400/20 transition-all duration-1000" />
              
              <div className="relative h-80 md:h-[400px] rounded-[2rem] overflow-hidden border-2 border-white/10 group-hover:border-yellow-400/30 transition-all duration-700">
                <img 
                  src={controlImg} 
                  alt="Logistics Technology" 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                />
                
                {/* Letter Reveal Overlay */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[4px]">
                  <div className="flex space-x-1.5">
                    {hoverText.map((l, i) => (
                      <span 
                        key={i} 
                        className="text-white text-3xl font-black transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cyber HUD Label */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(250,204,21,1)]" />
                        <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">Operational Pulse</span>
                    </div>
                </div>
              </div>

              {/* High-Tech Float Data */}
              <div className={`absolute -bottom-8 -right-8 bg-[#151515] p-6 rounded-2xl border border-white/10 shadow-2xl transition-all duration-1000 delay-500 transform ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
                <div className="text-center">
                    <p className="text-yellow-400 text-3xl font-black leading-none mb-1">98.2<span className="text-xs">%</span></p>
                    <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Global Safety Index</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content & Grid */}
          <div className={`lg:w-7/12 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
            <div className="mb-10 text-left">
              <div className="inline-flex items-center space-x-4 mb-4">
                <span className="h-[1px] w-12 bg-yellow-400" />
                <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Advantage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
                WHY LEADERS CHOOSE <br />
                <span className="text-yellow-400 underline decoration-white/10 underline-offset-8">AZNANISH LOGISTICS</span>
              </h2>
              <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-lg mb-8">
                Operating at the intersection of logistics expertise and technological innovation. We redefine the dispatcher-carrier relationship through transparency and precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <ServiceNode 
                  key={i} 
                  {...f} 
                  index={i} 
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Action Link */}
            <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                 <a href="#about" className="group flex items-center space-x-3 text-white font-black text-[10px] uppercase tracking-widest">
                    <span>Explore Our Methodology</span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-400/50 group-hover:bg-yellow-400 transition-all duration-500">
                        <FaArrowRight className="text-white group-hover:text-black transition-colors" />
                    </div>
                 </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
