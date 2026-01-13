import React, { useState, useEffect } from "react";
import { FaTruckMoving, FaRoad, FaDollarSign } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaTruckMoving />,
    targetValue: 40000,
    suffix: " +",
    label: "Loads Booked",
    description: "Successfully delivered across the nation",
  },
  {
    id: 2,
    icon: <FaRoad />,
    targetValue: 3,
    suffix: " +",
    label: "Per Mile",
    description: "Average rate for our dedicated carriers",
  },
  {
    id: 3,
    icon: <FaDollarSign />,
    targetValue: 14000,
    prefix: "$",
    suffix: " +",
    label: "Weekly Gross Revenue",
    description: "Top earning potentials for our partners",
  },
];

const StatCard = ({ stat, index, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = stat.targetValue;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [stat.targetValue, isVisible]);

  return (
    <div 
      className={`group relative p-6 bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/40 hover:shadow-xl hover:shadow-yellow-200/30 hover:-translate-y-2 transition-all duration-700 text-center overflow-hidden transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Background Decorative Blob */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl group-hover:bg-yellow-400/10 transition-colors duration-500" />
      
      {/* Icon Container */}
      <div className="relative w-16 h-16 mx-auto mb-5">
        <div className="absolute inset-0 bg-yellow-400 rounded-2xl rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-transform duration-500 opacity-20" />
        <div className="absolute inset-0 bg-white rounded-2xl shadow flex items-center justify-center text-2xl text-yellow-500 group-hover:text-gray-900 group-hover:bg-yellow-400 transition-all duration-500 z-10">
          {stat.icon}
        </div>
      </div>

      {/* Value */}
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 flex items-center justify-center">
        {stat.prefix}
        {count.toLocaleString()}
        <span className="text-yellow-500 ml-1">{stat.suffix}</span>
      </h3>
      
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 group-hover:text-yellow-600 transition-colors">
        {stat.label}
      </p>
      
      <p className="text-xs text-gray-500 leading-relaxed font-medium px-2">
        {stat.description}
      </p>
      
      {/* Bottom Line */}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-8 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-full bg-yellow-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay or on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-yellow-200/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-[80px]" />
        </div>

      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
