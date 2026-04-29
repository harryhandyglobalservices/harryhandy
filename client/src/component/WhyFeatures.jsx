import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaCalendarAlt, FaCheck } from "react-icons/fa";

import img1 from "../assets/staff1.png";
import img2 from "../assets/staff2.png";
import img3 from "../assets/why1.jpeg";
import { useNavigate } from "react-router-dom";



const services = [
  {
    icon: <FaHome />,
    title: "Move Out Cleaning",
    desc: "Our services go beyond the cleaning will reenergize your home and enhance your life.",
    bg: "bg-orange-100 text-orange-500",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Regular & Monthly Cleaning",
    desc: "Our services go beyond the cleaning will reenergize your home and enhance your life.",
    bg: "bg-green-100 text-green-500",
  },
  {
    icon: <FaCheck />,
    title: "Customer Focused Reviews",
    desc: "Our services go beyond the cleaning will reenergize your home and enhance your life.",
    bg: "bg-yellow-100 text-yellow-500",
  },
];

export default function WhyFeatures() {

  const navigate = useNavigate()
  return (
    <section className="w-full bg-white mt-20 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Clean Home Is Our First Priority
          </h2>

          <p className="text-gray-500 mb-8 max-w-lg">
            Our services go beyond the basic services and provide you with
            reenergize your home and enhance your life.
          </p>

          {/* SERVICES */}
          <div className="space-y-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg}`}>
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 max-w-md">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.button
          onClick={()=>navigate('/contact-page')}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src={img1}
            alt=""
            className="w-full h-[220px] mt-26 object-cover rounded-2xl"
          />

          <img
            src={img2}
            alt=""
            className="w-full h-[320px] object-cover rounded-2xl"
          />

          <img
            src={img3}
            alt=""
            className="col-span-2 w-full h-[260px] object-cover rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}