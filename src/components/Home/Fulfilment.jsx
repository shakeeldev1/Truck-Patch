import React from 'react'
import { FaRegCalendarCheck } from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";
import { LiaFileContractSolid } from "react-icons/lia";

export default function Fulfilment() {
    const data = [
        {
            id: 1,
            title: "Fulfillment That Scales With Your Business",
            description: "Power your growth with fast, reliable fulfillment. We help brands ship smarter, reduce operational costs, and unlock enterprise-level shipping rates through our nationwide warehouse network.",
            features: [
                {
                    id: 1,
                    icon: <FaRegCalendarCheck />,
                    title: 'Volume-Based Shipping Rates'
                },
                {
                    id: 2,
                    icon: <GiClockwork />,
                    title: 'Same-Day Order Processing'
                },
                {
                    id: 3,
                    icon: <LiaFileContractSolid />,
                    title: 'Flexible, No-Commitment Plans'
                }
            ],
            btn: "How It Works"
        },
        {
            img1: 'https://img.freepik.com/free-photo/cargo-ship-sailing-into-sunset_23-2151989597.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80',
            img2: "https://img.freepik.com/free-photo/scene-with-photorealistic-logistics-operations-proceedings_23-2151468903.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80"
        }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  p-12 bg-gray-50">
            {/* Left Content Section */}
            <div className="flex-1 pr-12">
                <h2 className="text-4xl font-bold text-gray-800">
                    {data[0].title}
                </h2>
                <div className="inline-block w-20 h-0.5 bg-yellow-400 rounded-full" />
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {data[0].description}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                    {data[0].features.map(feature => (
                        <div key={feature.id} className="flex items-center gap-3">
                            <span className="text-2xl text-yellow-300">
                                {feature.icon}
                            </span>
                            <span className="text-gray-700 font-medium">
                                {feature.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <button className="px-6 py-3  bg-yellow-300 text-black cursor-pointer font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 shadow-md">
                    {data[0].btn}
                </button>
            </div>

            {/* Right Images Section */}
            <div className="flex-1 relative mt-2">
                {/* Main Image */}
                <img
                    src={data[1].img1}
                    alt="Fulfillment Main"
                    className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />

                {/* Small Image - Bottom Left */}
                <img
                    src={data[1].img2}
                    alt="Fulfillment Secondary"
                    className="absolute bottom-0 -left-8 w-48 h-32 object-cover rounded-lg shadow-lg border-4 border-yellow-300"
                />
            </div>
        </div>
    )
}
