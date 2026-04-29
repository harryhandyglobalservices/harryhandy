import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import sec1 from "../assets/sec1.png";
import sec2 from "../assets/sec2.png";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, marginTop: 40 },
  show: {
    opacity: 1,
    marginTop: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutSection() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-gray-50 relative z-0">

      {/* HEADER */}
      <motion.div
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="flex flex-col pt-24 items-center text-center px-4"
      >
        <motion.h1
          variants={item}
          className="font-bold text-4xl md:text-6xl lg:text-7xl"
        >
          Where Cleanliness
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-blue-950 text-2xl md:text-4xl mt-2"
        >
          Meets Comfort and Productivity
        </motion.h2>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="w-full py-16 flex justify-center">
        <motion.div
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="w-full max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT SIDE */}
          <motion.div
            className="relative z-0 space-y-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { duration: 0.8 },
              },
            }}
          >

            {/* IMAGE */}
            <motion.img
              src={sec1}
              alt=""
              variants={item}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
            />

            {/* TEXT */}
            <motion.p
              variants={item}
              className="text-gray-600 text-lg md:text-xl leading-relaxed"
            >
              At Shiny Clean, we believe a clean space is a happy space. With
              years of experience in residential and commercial cleaning, our
              mission is to deliver top-quality services that enhance health,
              comfort, and productivity in every environment.
            </motion.p>

            {/* BUTTON */}
            <motion.button
              onClick={() => navigate('/booking-page')}
              variants={item}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-400 hover:bg-blue-500 text-black px-8 py-4 cursor-pointer rounded-lg font-semibold shadow-md transition"
            >
              Book Now →
            </motion.button>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="relative z-0 flex justify-center lg:justify-end"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { duration: 0.8 },
              },
            }}
          >

            {/* MAIN IMAGE */}
            <img
              src={sec2}
              alt=""
              className="w-full max-w-xl h-[400px] md:h-[600px] object-cover rounded-2xl shadow-lg"
            />

            {/* FLOATING LABEL (SAFE ANIMATION) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.6 }}
              className="absolute bottom-10 -left-6 bg-gray-50 px-12 py-8 rounded-xl"
            >
              <p className="text-gray-800 text-lg font-bold">
                Office Cleaning
              </p>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}