import React from "react";
import { FaCheckCircle, FaTruckMoving, FaDollarSign } from "react-icons/fa";


const HeroSectionPricing = () => {
  

  const features = [
    { icon: <FaCheckCircle className="text-yellow-400" />, text: "No Contracts" },
    { icon: <FaTruckMoving className="text-yellow-400" />, text: "24/7 Dispatch Support" },
    { icon: <FaDollarSign className="text-yellow-400" />, text: "Transparent Pricing" },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="relative h-[100vh] overflow-hidden group">
        {/* Background Image */}
        <img
          src="/pricing-img.jpg"
          alt="Truck driving on highway"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            data-aos="fade-down"
          >
            Maximize Your Trucking Profits <br />
            <span className="text-yellow-400">Without Extra Paperwork</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 text-lg text-gray-200 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Transparent pricing, expert dispatch support, and faster load management.
          </p>

          {/* Features */}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-white"
                data-aos="fade-up"
                data-aos-delay={300 + index * 150} // staggered animation
              >
                {feature.icon}
                <span className="text-lg font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="mt-8 bg-yellow-400 text-black hover:text-white cursor-pointer font-bold py-2 px-5 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPricing;
