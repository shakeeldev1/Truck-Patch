import {
  FaTruckMoving,
  FaFileInvoiceDollar,
  FaMapMarkedAlt,
  FaHeadset,
  FaHandshake,
  FaRoute,
  FaShieldAlt,
  FaSatelliteDish,
} from "react-icons/fa";

export function ServicesSection() {
  const services = [
    {
      title: "Dedicated Truck Dispatch",
      desc: "Personal dispatcher assigned to your truck to find the best-paying loads based on your preferences.",
      icon: <FaTruckMoving />,
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Load Booking & Rate Negotiation",
      desc: "We negotiate top market rates with brokers and shippers so you earn more per mile.",
      icon: <FaHandshake />,
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Broker & Shipper Communication",
      desc: "We handle all calls, emails, and confirmations with brokers so you can focus on driving.",
      icon: <FaHeadset />,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Invoicing & Billing Support",
      desc: "We prepare rate confirmations, invoices, and assist with factoring companies.",
      icon: <FaFileInvoiceDollar />,
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Route Planning & Fuel Optimization",
      desc: "Smart route planning to reduce deadhead miles, fuel costs, and delivery delays.",
      icon: <FaRoute />,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "DOT Compliance & Safety Support",
      desc: "Stay compliant with FMCSA regulations, safety paperwork, and documentation.",
      icon: <FaShieldAlt />,
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "ELD & TMS Monitoring",
      desc: "We monitor your ELD logs and TMS systems to keep dispatch smooth and compliant.",
      icon: <FaSatelliteDish />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "24/7 Driver Support",
      desc: "Day or night, our dispatch team is always available to assist drivers on the road.",
      icon: <FaMapMarkedAlt />,
      image:
        "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-700">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Complete <span className="text-yellow-400">Dispatch Solutions</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-xl">
            Professional truck dispatch services designed to maximize your
            profits and keep your wheels moving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-4 left-6 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white text-xl shadow-lg border-2 border-white">
                  {service.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-gray-900 font-bold text-xs uppercase tracking-widest hover:text-yellow-500 transition-colors cursor-pointer">
                  Learn More
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
