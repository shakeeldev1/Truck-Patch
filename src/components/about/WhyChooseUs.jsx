export default function WhyChooseUs() {
  const reasons = [
    "Reliable drivers who are treated like family",
    "24/7 dispatch support including third shifts",
    "Expertise with TMS & ELD software",
    "Maximizing load rates for owner operators",
    "Long-term partnerships focused on your success"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              <span className="text-yellow-400 font-bold text-2xl">✓</span>
              <p className="text-gray-600 text-lg">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
