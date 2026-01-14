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
        "https://images.unsplash.com/photo-1762908407323-28e9a9efd0be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9hZCUyMEJvb2tpbmclMjAlMjYlMjBSYXRlJTIwTmVnb3RpYXRpb24lMjB0cnVja3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Broker & Shipper Communication",
      desc: "We handle all calls, emails, and confirmations with brokers so you can focus on driving.",
      icon: <FaHeadset />,
      image:
        "https://media.istockphoto.com/id/2151802994/photo/female-semitruck-driver-handshake-with-fleet-manager-deal-agreed.webp?a=1&b=1&s=612x612&w=0&k=20&c=_bZOpEi3WKFNMpS19KrbL3qPEl63Ly2ZWvdh5-1I5sQ=",
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
        "https://media.istockphoto.com/id/1474043787/photo/foreperson-talking-to-a-truckdriver-while-working-at-a-distribution-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=TOtKPJm70SmFauUqEn7pEHT4QfnalIWlRnLrlANU_YU=",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
        
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
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-4 left-6 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white text-xl shadow-lg border-2 border-white">
                  {service.icon}
                </div>
              </div>

              <div className="py-4 px-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
