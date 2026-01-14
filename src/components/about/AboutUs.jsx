import { FiCheckCircle, FiShield, FiTrendingUp } from "react-icons/fi";

export default function AboutUs() {
  const highlights = [
    { icon: <FiTrendingUp />, text: "Maximize Earning Potential" },
    { icon: <FiShield />, text: "Safety & Compliance Focused" },
    { icon: <FiCheckCircle />, text: "24/7 Dedicated Support" },
  ];

  return (
    <section className="pb-12 pt-6 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Image with Floating Stats Card */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://aznanishdispatchingservices.com/wp-content/uploads/2024/09/ai-generated-8795642_640.jpg"
                alt="Truck Dispatching"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -right-0 md:-right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 max-w-[240px]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-400 rounded-lg text-white text-2xl">
                  <FiShield />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 leading-none">100%</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">Reliability Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-yellow-500 uppercase bg-yellow-50 rounded-full">
              About Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.1]">
              Efficiency in Motion, <br />
              <span className="text-yellow-400">Reliability in Service.</span>
            </h2>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Aznanish Logistics is a trusted partner for owner-operators and small trucking firms. 
                We don't just find loads; we strategically manage your business to ensure every 
                mile you drive contributes to your growth.
              </p>
              
              <p className="text-lg leading-relaxed">
                Using cutting-edge <span className="text-gray-900 font-bold italic">TMS & ELD technology</span>, 
                our experienced dispatchers maintain seamless tracking and high safety standards across the country.
              </p>
            </div>

            {/* Icon Feature List */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="text-yellow-400 text-xl group-hover:scale-125 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-bold text-gray-800 tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}