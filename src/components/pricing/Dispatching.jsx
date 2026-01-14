import { FaCheckCircle, FaTruckMoving, FaEnvelope, FaPhoneAlt, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

const Dispatching = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-black/60 text-white px-3 py-2 rounded-full mb-4">
            <FaShieldAlt className="text-lg" />
            <span className="font-semibold">Trusted Since 2015</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aznanish <span className="text-yellow-400">Dispatching</span> Services
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium dispatch solutions for trucking professionals across America
          </p>
        </div>

        {/* Image Gallery with Overlay */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              url: "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg",
              title: "24/7 Fleet Management",
              subtitle: "Real-time tracking & support"
            },
            {
              url: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
              title: "Nationwide Coverage",
              subtitle: "Serving all 48 states"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:-translate-y-2 "
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
              <img
                src={item.url}
                alt="Trucking logistics"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <FaCheckCircle className="text-yellow-300 text-lg" />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-blue-100 text-lg">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-2xl shadow p-8 md:p-12 transform transition-all duration-300 ">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Reliable Partner</span> in Logistics
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-10">
              America's most trusted truck dispatching service for trucking company owners, 
              owner-operators, and car haulers. We specialize in Dry Van, Reefer, Flatbed, 
              and Auto Transport carriers with nationwide coverage and dedicated support.
            </p>

            {/* Services Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Dry Van", "Reefer", "Flatbed", "Auto Transport", "Heavy Haul", "LTL"].map((service) => (
                <div 
                  key={service}
                  className="px-5 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full flex items-center gap-2 hover:border-yellow-300 hover:shadow-md transition-all duration-300"
                >
                  <FaCheckCircle className="text-yellow-500" />
                  <span className="font-medium text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-100">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <FaTruckMoving className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 Dispatch Support</h4>
              <p className="text-gray-600">Round-the-clock monitoring and load management</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-black/10 to-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Email Support</h4>
              <p className="text-gray-600">info@aznanishdispatchingservices.com</p>
              <a 
                href="mailto:info@aznanishdispatchingservices.com" 
                className="mt-4 text-yellow-500 hover:text-yellow-600 font-medium transition-colors"
              >
                Contact Us →
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Nationwide Service</h4>
              <p className="text-gray-600">Serving carriers across all 48 contiguous states</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 pt-8 border-t border-gray-100">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black/70 font-bold py-4 px-4 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center gap-3 mx-auto">
              <FaPhoneAlt />
              Get Your Free Consultation
            </button>
            <p className="text-gray-500 mt-4 text-sm">
              Response within 2 business hours • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dispatching;