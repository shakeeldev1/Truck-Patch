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
      <div className="relative h-[90vh] rounded-2xl overflow-hidden group">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg"
          alt="Truck driving on highway"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          {/* Headline */}
         <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Maximize Your Trucking Profits <br />
            <span className="text-yellow-400">Without Extra Paperwork</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-200 max-w-3xl">
            Transparent pricing, expert dispatch support, and faster load management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPricing;
