import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1720811559395-3ed8d1b16649?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    title: "Aznanish Logistics",
    subtitle: "Reliable Truck Dispatching Services Across America"
  },
  {
    image: "https://www.transamtruck.com/wp-content/uploads/2019/12/077A6707-1024x683.jpg",
    title: "Expert Dispatching",
    subtitle: "Optimizing routes and maximizing carrier profits daily."
  }
];

export default function AboutHero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-gray-900">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom"
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center text-center">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 group-[.swiper-slide-active]:scale-100"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

              <div className="relative z-10 px-6 max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                  {slide.title.split(' ')[0]}{" "}
                  <span className="text-yellow-400">{slide.title.split(' ')[1]}</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-100 mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full cursor-pointer sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-5 py-2 rounded-full transition-all shadow-lg shadow-yellow-400/30 active:scale-95">
                    View Services
                  </button>
                  <button className="w-full cursor-pointer sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold px-5 py-2 rounded-full transition-all active:scale-95">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

       
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet { 
          background: white !important; 
          height: 4px !important; 
          width: 20px !important; 
          border-radius: 2px !important; 
          opacity: 0.3; 
        }
        .swiper-pagination-bullet-active { 
          background: #facc15 !important; 
          width: 40px !important; 
          opacity: 1; 
          transition: all 0.4s ease;
        }
      `}</style>
    </section>
  );
}
