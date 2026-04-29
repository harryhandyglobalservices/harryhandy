import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import staff1 from "../assets/staff1.png";
import Pricing from "./Pricing";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What types of cleaning services do you offer?",
    answer:
      "We provide residential cleaning, commercial cleaning, deep cleaning, and specialized services designed to meet your needs.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, you don’t have to be home. Many clients provide access instructions, and our team handles the rest.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use eco-friendly and non-toxic cleaning products that are safe for families and pets.",
  },
  {
    question: "How do I book a cleaning appointment?",
    answer:
      "You can book via our website, call support, or use the contact form.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const navigate = useNavigate()

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${staff1})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT WRAPPER */}
      <motion.div
        animate={isInView ? "show" : "hidden"}
        variants={container}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24"
      >

        {/* PRICING */}
        <motion.div variants={item} className="mb-16">
          <Pricing />
        </motion.div>

        {/* GRID LAYOUT (FIXED RESPONSIVE STRUCTURE) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div variants={item} className="text-center lg:text-left space-y-6">

            <div className="flex items-center justify-center lg:justify-start gap-2 text-2xl sm:text-3xl">
              <FaQuestionCircle className="text-blue-400" />
              <p className="text-white font-medium">FAQ</p>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Frequently asked questions...
            </h1>

            <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              Effective communication and modern logistics planning allow us to deliver services
              efficiently and reliably every time.
            </p>

            <button onClick={()=>navigate('/booking-page')} className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 sm:px-9 py-3 sm:py-5 rounded-lg font-semibold transition">
              Book Now →
            </button>

          </motion.div>

          {/* RIGHT SIDE (FAQ BOXES) */}
          <motion.div variants={container} className="space-y-4">

            {faqs.map((itemFaq, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl px-5 py-4 sm:px-6 sm:py-5 shadow-sm cursor-pointer"
                onClick={() => toggle(index)}
              >

                {/* QUESTION */}
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-gray-800 text-sm sm:text-lg font-semibold">
                    {itemFaq.question}
                  </h3>
                  <span className="text-xl text-gray-600">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* ANSWER */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 text-sm mt-3">
                    {itemFaq.answer}
                  </p>
                </motion.div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}