import { FaCheckCircle, FaTruckMoving, FaEnvelope } from "react-icons/fa";



const Dispatching = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">


        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {[
            "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg",
            "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={img}
                alt="Trucking logistics"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* COMPANY INFO */}
        <div className="mt-24 text-center">
          <h4 className="text-2xl font-semibold text-gray-900 mb-3">
            Aznanish Dispatching Services LLC
          </h4>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            America’s trusted truck dispatching services for trucking company
            owners, owner-operators, and car haulers. Serving Dry Van, Reefer,
            Flatbed, and Auto Transport carriers nationwide.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 text-gray-700">
            <div className="flex items-center gap-2 transition-colors hover:text-gray-900">
              <FaTruckMoving />
              <span>24/7 Dispatch Support</span>
            </div>
            <div className="flex items-center gap-2 transition-colors hover:text-gray-900">
              <FaEnvelope />
              <span>info@aznanishdispatchingservices.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Dispatching;