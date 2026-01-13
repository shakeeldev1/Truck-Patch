import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John D.",
    role: "Owner Operator",
    quote: "Aznanish Dispatching Services has streamlined my operations and increased my earnings significantly. Their dispatch team is always responsive and reliable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah L.",
    role: "Small Fleet Owner",
    quote: "Professional, efficient, and trustworthy. Their use of TMS and ELD software keeps everything transparent and organized.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mike R.",
    role: "Fleet Manager",
    quote: "Exceptional service! The dispatchers are knowledgeable and always ensure we get the best rates for our loads.",
    image: "https://randomuser.me/api/portraits/men/56.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="pt-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 relative"
            >
              <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
              <FaQuoteRight className="absolute bottom-4 right-4 text-yellow-400 text-2xl opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
