export function ServicesTiming() {
  const services = [
    {
      title: "Daytime Dispatch",
      desc: `Decline your functional expenses and increment efficiency and benefit.
      Aznanish Dispatching offers proficient truck dispatching services administration
      for professionals including booking loads, contract finishing, email/telephone
      dispatch and updates. Click below to learn more about how you can externalize
      these assignments to Aznanish Dispatching Services.`,
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=900",
    },
    {
      title: "Night Time Dispatch",
      desc: `Night-time dispatch administrations don’t need to be a migraine.
      Aznanish Dispatching Services offers industry driving night-time dispatch
      administrations for any organization size. Whenever our group assumes control
      over telephones and messages, you can have confidence that your clients and
      drivers will be fulfilled.`,
      image:
        "https://images.unsplash.com/photo-1714009889233-6699f04623ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2slMjBkaXNwYXRjaGluZyUyMG5pZ2h0JTIwdGltZXxlbnwwfHwwfHx8MA%3D%3D",
      reverse: true,
    },
    
  ];

  return (
    <section className="py-20 bg-white">

      <div className="flex flex-col gap-4 items-center justify-center pb-12">
        <h1 className="text-4xl font-black">24/7 <span className="text-yellow-500">Support</span></h1>
        <p className="text-gray-700 text-lg">Our services are for 24 and 7. See our day and night time support below.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-14 items-center border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition duration-400 p-8 ${
              service.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`${
                service.reverse ? "lg:order-2" : ""
              } rounded-3xl overflow-hidden shadow-xl`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className={`${service.reverse ? "lg:order-1" : ""}`}>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {service.desc}
              </p>

              <button className="inline-flex items-center px-7 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-yellow-400 transition-colors shadow-md">
                Learn More
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
