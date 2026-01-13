import { FiMapPin, FiAward, FiArrowUpRight } from "react-icons/fi";

export default function OurStory() {
  return (
    <section className="pb-4 bg-white relative overflow-hidden">
      {/* Background Subtle Pattern & Watermark */}
      <div className="absolute top-20 -left-10 text-gray-100/60 text-[12rem] font-black select-none pointer-events-none rotate-90 lg:rotate-0">
        STORY
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Side */}
          <div className="lg:w-5/12 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-10 h-[2px] bg-yellow-400"></span>
              <span className="text-sm font-black tracking-widest text-yellow-500 uppercase">
                Since 2018
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-none mb-8">
              Real People. <br />
              <span className="text-gray-400">Real Results.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                From a single dispatch desk to a nationwide logistics powerhouse, our journey 
                has been defined by one thing: <span className="text-gray-900 font-bold underline decoration-yellow-400 decoration-4 underline-offset-4">unwavering trust.</span>
              </p>
              <p className="text-gray-500 leading-relaxed">
                We don't just manage freight; we manage futures. By combining over 6 years of 
                on-road expertise with the industry's most advanced TMS software, we've 
                redefined what it means to be a "dispatcher."
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-yellow-200 transition-colors">
                <FiMapPin className="text-yellow-500 mb-3 text-xl" />
                <h4 className="font-bold text-gray-900">Nationwide</h4>
                <p className="text-xs text-gray-500 mt-1">Operating across all 48 states.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-yellow-200 transition-colors">
                <FiAward className="text-yellow-500 mb-3 text-xl" />
                <h4 className="font-bold text-gray-900">Certified</h4>
                <p className="text-xs text-gray-500 mt-1">High-standard safety compliance.</p>
              </div>
            </div>
          </div>

          {/* Right Image Side: The "Layered" Look */}
          <div className="lg:w-7/12 order-1 lg:order-2 relative">
            {/* Background Decorative Box */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gray-100 rounded-[3rem] -z-10" />
            
            <div className="relative group">
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl relative">
                <img 
                  src="https://aznanishdispatchingservices.com/wp-content/uploads/2024/09/qtq_31-1.webp"
                  alt="Our Story" 
                  className="w-full h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Success Card */}
              <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-2xl border border-gray-50 max-w-[280px] animate-bounce-slow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-yellow-400">
                    <FiArrowUpRight size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tighter bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Growth</span>
                </div>
                <p className="text-sm font-medium text-gray-500">Carrier earnings increased by an average of</p>
                <p className="text-3xl font-black text-gray-900 mt-1">32% <span className="text-sm text-green-500 font-bold">+</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}