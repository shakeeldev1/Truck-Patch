import React from "react";

const HeroSectionPricin = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      {/* <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"> */}
     <div className="relative h-[90vh] rounded-2xl overflow-hidden  group">
          <img
            src="https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg"
            alt="Truck driving on highway"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Pricing & Packages
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl">
              Transparent pricing for owner-operators and trucking companies.
              No contracts. No forced dispatch.
            </p>
          </div>
        </div>
        {/* </div> */}
        </section>
  );
};

export default HeroSectionPricin;
