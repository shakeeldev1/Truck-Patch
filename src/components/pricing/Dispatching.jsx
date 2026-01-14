import React from "react";
import { 
  FaCheckCircle, 
  FaTruckMoving, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaShieldAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";


const Dispatching = () => {


  const galleryItems = [
    {
      url: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg",
      title: "24/7 Fleet Management",
      subtitle: "Real-time tracking & support",
    },
    {
      url: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
      title: "Nationwide Coverage",
      subtitle: "Serving all 48 states",
    },
  ];

  const services = ["Dry Van", "Reefer", "Flatbed", "Auto Transport", "Heavy Haul", "LTL"];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-yellow-500 to-black/60 text-white px-3 py-1.5 sm:px-3 sm:py-2 rounded-full mb-3 sm:mb-4">
            <FaShieldAlt className="text-sm sm:text-base md:text-lg" />
            <span className="font-semibold text-xs sm:text-sm md:text-base">Trusted Since 2015</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Aznanish <span className="text-yellow-400">Dispatching</span> Services
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Premium dispatch solutions for trucking professionals across America
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105 sm:group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <FaCheckCircle className="text-yellow-300 text-sm sm:text-lg" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-blue-100 text-sm sm:text-base md:text-lg">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div 
          className="bg-white rounded-xl sm:rounded-2xl shadow sm:shadow-xl p-5 sm:p-6 md:p-8 lg:p-12 transform transition-all duration-300"
          data-aos="fade-up"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Reliable Partner</span> in Logistics
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10 px-2">
              America's most trusted truck dispatching service for trucking company owners, 
              owner-operators, and car haulers. We specialize in Dry Van, Reefer, Flatbed, 
              and Auto Transport carriers with nationwide coverage and dedicated support.
            </p>

            {/* Services Badges */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
              {services.map((service, idx) => (
                <div 
                  key={idx}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full flex items-center gap-1 sm:gap-2 hover:border-yellow-300 hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <FaCheckCircle className="text-yellow-500 text-xs sm:text-sm" />
                  <span className="font-medium text-gray-800 text-xs sm:text-sm md:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-gray-100">
            <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-50 to-white hover:shadow-md sm:hover:shadow-lg transition-all duration-300 group" data-aos="fade-up">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-700 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                <FaTruckMoving className="text-xl sm:text-2xl text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">24/7 Dispatch Support</h4>
              <p className="text-gray-600 text-sm sm:text-base">Round-the-clock monitoring and load management</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-black/10 to-white hover:shadow-md sm:hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-700 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-xl sm:text-2xl text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Email Support</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base break-all sm:break-normal">info@aznanishdispatchingservices.com</p>
              <a 
                href="mailto:info@aznanishdispatchingservices.com" 
                className="mt-3 sm:mt-4 text-yellow-500 hover:text-yellow-600 font-medium transition-colors text-sm sm:text-base"
              >
                Contact Us →
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-50 to-white hover:shadow-md sm:hover:shadow-lg transition-all duration-300 group col-span-1 sm:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-700 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-xl sm:text-2xl text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Nationwide Service</h4>
              <p className="text-gray-600 text-sm sm:text-base">Serving carriers across all 48 contiguous states</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-100" data-aos="fade-up" data-aos-delay="300">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black/70 font-bold py-3 sm:py-4 px-4 sm:px-6 md:px-10 rounded-lg sm:rounded-xl hover:shadow-lg sm:hover:shadow-2xl hover:-translate-y-0.5 sm:hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 mx-auto w-full sm:w-auto">
              <FaPhoneAlt />
              <span>Get Your Free Consultation</span>
            </button>
            <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm px-2">
              Response within 2 business hours • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dispatching;
