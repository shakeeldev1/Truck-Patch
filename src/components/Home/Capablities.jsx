import React from "react";
import { FiTruck, FiPackage, FiGlobe, FiTrendingUp } from "react-icons/fi";

export default function Capabilities() {
  const data = {
    title: "Capabilities",
    description:
      "Aznanish Logistics is a full-service fulfillment partner powered by modern infrastructure, smart technology, and an experienced operations team built to scale with your business.",
    imgLarge:
      "https://img.freepik.com/premium-photo/desolate-military-supply-depot-with-soldiers-standing-guard-amidst-stacks-crates-parked-trucks-bathed-warm-glow-setting-sun_908344-45705.jpg?w=1400",
    imgSmall:
      "https://img.freepik.com/free-photo/team-work-employees-warehouse_23-2148923099.jpg?w=700",
  };

  return (
    <section className="bg-white  border-b-2 border-yellow-400 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT – IMAGES */}
        <div className="sm:grid grid-cols-1 hidden sm:grid-cols-2 gap-3">
          {/* Large image */}
          <div className="rounded-md  flex gap-2 items-center overflow-hidden  shadow-xl group">
            <img
              src={data.imgLarge}
              alt="Logistics Operations"
              className="w-[100%] rounded-md border border-yellow-400/40 h-[100px] sm:h-[200px] md:h-[300px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
           
          </div>

          {/* Small overlay image */}
          <div className="  rounded-md overflow-hidden border border-yellow-400/50 shadow-lg bg-black group">
            <img
              src={data.imgSmall}
              alt="Warehouse Team"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="text-black relative pt-14 lg:pt-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            {data.title}
          </h2>

          <p className="text-lg text-black/40 max-w-xl mb-10">
            {data.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <FiTruck className="text-yellow-400 text-2xl" />
              <span className="text-sm">Fast Transportation</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPackage className="text-yellow-400 text-2xl" />
              <span className="text-sm">Smart Warehousing</span>
            </div>
            <div className="flex items-center gap-3">
              <FiGlobe className="text-yellow-400 text-2xl" />
              <span className="text-sm">Global Coverage</span>
            </div>
            <div className="flex items-center gap-3">
              <FiTrendingUp className="text-yellow-400 text-2xl" />
              <span className="text-sm">Real-time Analytics</span>
            </div>
          </div>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
            <FiTruck />
            Explore Services
          </button>

          {/* Decorative icon */}
          <FiPackage className="absolute -bottom-6 right-0 text-8xl text-white/5 hidden md:block" />
        </div>

      </div>
    </section>
  );
}
