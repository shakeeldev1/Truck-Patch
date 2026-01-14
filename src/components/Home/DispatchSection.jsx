import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Import images
import dispatcherImg from "../../assets/dispatcher.png";
import driverImg from "../../assets/driver.png";
import truckImg from "../../assets/truck.jpg";

const ServiceCard = ({ children, index, reverse }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100/50 transform transition-all duration-1000 ease-out hover:-translate-y-2 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {children}
    </div>
  );
};

const DispatchSection = () => {
  return (
    <section className="py-10 bg-gray-50/30 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl font-black text-gray-200/20 uppercase select-none">
            Services
          </div>
          <h2 className="text-3xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight relative z-10">
            DEDICATED PROFESSIONAL <span className="text-yellow-400 underline decoration-gray-900 underline-offset-8">TRUCK DISPATCH</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto text-sm">
            Strategic logistics and dispatching solutions engineered for efficiency, reliability, and growth.
          </p>
        </div>

        {/* Horizontal Integrated Cards */}
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          
          {/* Card 1: Dispatcher | Communication */}
          <ServiceCard index={0}>
            {/* Image Side */}
            <div className="md:w-1/2 h-80 md:h-[320px] relative overflow-hidden group">
              <img 
                src={dispatcherImg} 
                alt="Dispatcher" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                <div className="flex space-x-1">
                  {"DISPATCHER".split("").map((letter, i) => (
                    <span 
                      key={i} 
                      className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest transition-all duration-500 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="inline-block w-10 h-0.5 bg-yellow-400 mb-4 rounded-full" />
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                Viable Communication
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 font-medium">
                We maintain constant contact between drivers and shippers, ensuring seamless coordination and real-time updates for every load. Our dedicated dispatchers are always just a call away.
              </p>
              <Link to="/contact" className="flex items-center space-x-3 text-gray-900 font-black uppercase text-[10px] tracking-widest group/btn w-fit">
                <span className="relative">
                    Contact Dispatcher
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-yellow-400 group-hover/btn:w-full transition-all duration-300" />
                </span>
                <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover/btn:bg-yellow-400 group-hover/btn:text-gray-900 transition-colors">
                    <FaArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </ServiceCard>

          {/* Card 2: Services | Trucks */}
          <ServiceCard index={1} reverse>
            {/* Image Side */}
            <div className="md:w-1/2 h-80 md:h-[320px] relative overflow-hidden group">
              <img 
                src={truckImg} 
                alt="Trucks" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                <div className="flex space-x-1">
                  {"TRUCKS".split("").map((letter, i) => (
                    <span 
                      key={i} 
                      className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest transition-all duration-500 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="inline-block w-10 h-0.5 bg-yellow-400 mb-4 rounded-full" />
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight leading-tight">
                Dispatching Services For <br /> Owner Operators
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 font-medium">
                Tailored dispatching solutions designed specifically for owner-operators. We handle your back-office tasks, rate negotiations, and paperwork so you can focus on the road.
              </p>
              <Link to="/services" className="flex items-center space-x-3 text-gray-900 font-black uppercase text-[10px] tracking-widest group/btn w-fit">
                <span className="relative">
                    View All Services
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-yellow-400 group-hover/btn:w-full transition-all duration-300" />
                </span>
                <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover/btn:bg-yellow-400 group-hover/btn:text-gray-900 transition-colors">
                    <FaArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </ServiceCard>

          {/* Card 3: Driver | Reliable Drivers */}
          <ServiceCard index={2}>
            {/* Image Side */}
            <div className="md:w-1/2 h-80 md:h-[320px] relative overflow-hidden group">
              <img 
                src={driverImg} 
                alt="Truck Driver" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                <div className="flex space-x-1">
                  {"DRIVERS".split("").map((letter, i) => (
                    <span 
                      key={i} 
                      className="text-white text-2xl md:text-3xl font-black uppercase tracking-widest transition-all duration-500 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="inline-block w-10 h-0.5 bg-yellow-400 mb-4 rounded-full" />
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                Reliable Drivers
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 font-medium">
                Our network consists of highly professional and experienced drivers who prioritize safety and punctuality on every single route.
              </p>
              <Link to="/about" className="flex items-center space-x-3 text-gray-900 font-black uppercase text-[10px] tracking-widest group/btn w-fit">
                <span className="relative">
                    Meet Our Team
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-yellow-400 group-hover/btn:w-full transition-all duration-300" />
                </span>
                <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover/btn:bg-yellow-400 group-hover/btn:text-gray-900 transition-colors">
                    <FaArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </ServiceCard>

        </div>
      </div>
    </section>
  );
};

export default DispatchSection;
