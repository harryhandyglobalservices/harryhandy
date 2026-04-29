import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import harry1 from "../assets/harry1.png";

/* 🔥 VARIANTS */
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CeoMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-sky-900 flex justify-center"
    >
      <motion.div
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="w-full max-w-7xl grid lg:grid-cols-2 gap-6 items-center px-6 lg:px-12"
      >

        {/* TEXT CONTENT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -80 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <motion.p
            variants={item}
            className="text-amber-400 text-2xl font-medium"
          >
            Protecting Our Environment
          </motion.p>

          <motion.h1
            variants={item}
            className="text-3xl md:text-6xl text-gray-50 leading-tight mb-6"
          >
            Scientifically Proven
            <br />
            Effective Against
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gray-100 text-lg md:text-xl mb-6 max-w-xl"
          >
            Our cleaning methods are scientifically proven to effectively eliminate a wide range of harmful 
            bacteria, viruses, and allergens commonly found in homes and workplaces. By combining advanced 
            cleaning techniques with high-quality, tested products, we ensure deep sanitation that goes beyond 
            surface-level cleaning.
          </motion.p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 80 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="relative w-full ceobg lg:w-[70%] h-[500px] mx-auto bg-gray-100 overflow-hidden rounded-2xl"
        >
          <motion.img
            src={harry1}
            alt="Cleaning"
            className="w-full h-full object-cover"
           
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </motion.div>
    </section>
  );
}


