import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPackages = () => {
    const features = [
        "Setup Paperwork",
        "24/7 Dispatch Support",
        "Fax/Email Documents",
        "Credit Checks",
        "Personal Dispatcher",
        "Request Quick Pay",
        "No Forced Dispatch",
        "Payload & FSC = 100% Yours",
        "Request Fuel Advances",
        "We Negotiate Top Paying Rates",
        "Request Insurance Certificates",
        "Driver Directions Assistance",
        "Factor Setup Assistance",
        "Collection Assistance",
        "Unused Truck Order Assistance",
        "Detention Charges Assistance",
    ];

    return (
        <section className="py-12  bg-gradient-to-b from-gray-100 to-white">

            <div className=" flex flex-col justify-center items-center ">
                <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-700">
                    Simple Pricing
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 ">
                    Pricing & <span className="text-yellow-400">Packages</span>
                </h2>

                <p className="text-gray-500 text-lg mb-10 max-w-lg px-3">
                    One transparent price. No hidden fees. Full dispatch support to keep
                    your trucks profitable and stress-free.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div data-aos="fade-right" data-aos-delay="200" className="relative">
                    <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-yellow-400/20 blur-2xl"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/pricing-img.jpg"
                            alt="Pricing"
                            className="w-full h-[520px] object-cover hover:scale-110 transition duration-700"
                        />
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div data-aos="fade-left" data-aos-delay="400">


                    {/* PRICE CARD */}
                    <div data-aos="zoom-in" data-aos-delay="600" className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-10">

                        {/* Price Badge */}
                        <div className="absolute -top-6 right-8 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                            US$250.00
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            Professional Plan
                        </h3>

                        <p className="text-yellow-500 font-extrabold text-3xl mb-8">
                            $250
                            <span className="text-base text-gray-500 font-medium ml-2">
                                / Per Week / Per Truck
                            </span>
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                            {features.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay={700 + index * 100} // 700ms se start aur 100ms increment
                                >
                                    <FaCheckCircle className="text-yellow-400 text-lg mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA BUTTON */}
                        <button className="mt-10 w-full bg-gray-900 text-white py-2 cursor-pointer  rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 shadow-lg">
                            Get Started Now
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingPackages;
