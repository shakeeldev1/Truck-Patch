import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images from assets
import truck1 from "../../assets/truck.jpg";
import truck2 from "../../assets/truck2.jpg";
import truck3 from "../../assets/truck3.jpg";

const slides = [
  {
    image: truck1,
    title: "Reliable Truck Dispatching",
    subtitle:
      "Connecting owner-operators with the best loads across the country.",
    cta: "Get Started",
    link: "/services",
  },
  {
    image: truck2,
    title: "Maximize Your Earnings",
    subtitle:
      "We handle the paperwork and logistics so you can focus on driving.",
    cta: "Our Pricing",
    link: "/plans",
  },
  {
    image: truck3,
    title: "24/7 Support for Drivers",
    subtitle: "Dedicated dispatchers available round the clock to assist you.",
    cta: "Contact Us",
    link: "/contact",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 4000);
    return () => clearInterval(autoPlay);
  }, [current]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-10000"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1
              className={`text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 transform transition-all duration-700 delay-300 ${
                index === current
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {slide.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i % 2 !== 0 ? "text-yellow-400" : "text-white"}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p
              className={`text-base md:text-lg text-gray-200 mb-8 max-w-2xl transform transition-all duration-700 delay-500 ${
                index === current
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {slide.subtitle}
            </p>
            <div
              className={`flex space-x-4 transform transition-all duration-700 delay-700 ${
                index === current
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Link
                to={slide.link}
                className="bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-500 hover:scale-105 transition-all shadow-xl shadow-yellow-400/20"
              >
                {slide.cta}
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white/20 hover:scale-105 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-yellow-400 hover:text-gray-900 z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-yellow-400 hover:text-gray-900 z-10"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === current
                ? "w-12 bg-yellow-400"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
