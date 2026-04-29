import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const pricingData = [
  {
    title: "Housekeeping (Monthly)",
    subtitle: "Once a week x4",
    plans: [
      { name: "2 Bedroom Flat", price: "₦60,000" },
      { name: "3 Bedroom Flat", price: "₦70,000" },
      { name: "3 Bedroom Duplex", price: "₦80,000" },
      { name: "4 Bedroom Duplex", price: "₦90,000" },
    ],
  },
  {
    title: "Fumigation (One-Off)",
    plans: [
      { name: "2 Bedroom Flat", price: "₦70,000" },
      { name: "3 Bedroom Flat", price: "₦80,000" },
      { name: "3 Bedroom Duplex", price: "₦90,000" },
      { name: "4 Bedroom Duplex", price: "₦100,000" },
    ],
  },
  {
    title: "Post Construction Cleaning",
    plans: [
      { name: "2 Bedroom Flat", price: "₦100,000" },
      { name: "3 Bedroom Flat", price: "₦130,000" },
      { name: "3 Bedroom Duplex", price: "₦160,000" },
      { name: "4 Bedroom Duplex", price: "₦200,000" },
    ],
  },
  {
    title: "Deep Cleaning",
    plans: [
      { name: "2 Bedroom Flat", price: "₦90,000" },
      { name: "3 Bedroom Flat", price: "₦110,000" },
      { name: "3 Bedroom Duplex", price: "₦130,000" },
      { name: "4 Bedroom Duplex", price: "₦150,000" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const navigate = useNavigate()

  return (
    <section ref={ref} className="w-full py-20 ">

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      >

        {/* HEADER */}
        <motion.div variants={item} className="text-center mb-14">
          <p className="text-blue-400 font-semibold tracking-wide">
            Pricing
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Flexible Cleaning Packages
          </h2>

          <p className="text-gray-50 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Choose from professional cleaning services tailored to your needs and budget.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">

          {pricingData.map((category, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition p-5 sm:p-6 flex flex-col"
            >

              {/* TITLE */}
              <div className="mb-5">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {category.title}
                </h3>

                {category.subtitle && (
                  <p className="text-sm text-gray-500 mt-1">
                    {category.subtitle}
                  </p>
                )}
              </div>

              {/* PLANS */}
              <div className="flex flex-col gap-3 flex-1">
                {category.plans.map((plan, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                      <FaCheck className="text-blue-500 text-xs" />
                      {plan.name}
                    </div>

                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      {plan.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button onClick={()=>navigate('/booking-page')} className="mt-6 w-ful cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Book Now
              </button>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}