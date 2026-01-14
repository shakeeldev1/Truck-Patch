import { FaFileAlt, FaSlidersH, FaTruck } from "react-icons/fa";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Register Your Company",
      desc: "Submit your MC authority, W-9, and insurance documents to get approved.",
      icon: <FaFileAlt />,
    },
    {
      number: "02",
      title: "Set Your Preferences",
      desc: "Share your lanes, equipment type, home time, and rate expectations.",
      icon: <FaSlidersH />,
    },
    {
      number: "03",
      title: "Start Hauling Loads",
      desc: "We book and negotiate loads while you focus on driving and earning.",
      icon: <FaTruck />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            How It {" "}
            <span className="text-yellow-400">Works</span>
          </h2>

          <p className="text-gray-500 text-lg">
            Our dispatch process is designed to be fast, transparent, and
            stress-free for owner-operators and fleets.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl hover:scale-103 p-10  border-2 border-gray-100 hover:border-yellow-400 shadow-md hover:shadow-xl transition-all duration-500 group"
            >
              

              {/* Icon */}
              <div className="w-12 h-12 mb-6 absolute top-2 right-2 rounded-2xl bg-yellow-100 group-hover:bg-yellow-500  text-yellow-500 group-hover:text-white flex items-center justify-center text-2xl group-hover:scale-110 transition duration-500">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
