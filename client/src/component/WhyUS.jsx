import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import staff5 from "../assets/staff5.png";

/* 🔥 ANIMATION VARIANTS */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-blue-50 mt-20 flex justify-center"
    >
      <motion.div
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="w-full max-w-7xl grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-12"
      >

        {/* LEFT IMAGE */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -80 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="relative"
        >
          <img
            src={staff5}
            alt="Cleaning"
            className="w-full object-cover rounded-2xl"
          />

          {/* FLOATING CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6 },
              },
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute flex flex-col items-center justify-center bottom-0 left-0 w-60 h-40 bg-blue-500 px-6 py-5 rounded-bl-2xl shadow-lg"
          >
            <h2 className="text-6xl font-bold text-white">20+</h2>
            <p className="text-sm text-white">Team Member</p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div variants={container}>

          <motion.p variants={item} className="text-gray-500 text-xl font-medium">
            Why Choose Us
          </motion.p>

          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            Your Space Deserves the Best,
            and We Make It Happen
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-600 text-xl mb-6 max-w-xl"
          >
            Our team of trained professionals takes pride in every detail,
            going above and beyond to exceed your expectations.
          </motion.p>

          {/* FEATURES */}
          <div className="space-y-4">
            {[
              "Trusted & Vetted Cleaners",
              "Customizable Cleaning Plans",
              "Affordable Pricing",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-sm w-fit"
              >
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-sm ${
                    i === 1
                      ? "bg-blue-400 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  ✓
                </span>
                <p className="text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}