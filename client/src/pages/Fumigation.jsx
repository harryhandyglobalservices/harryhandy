import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import staff1 from "../assets/staff1.png";

/* ANIMATION */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Fumigation() {
    const navigate = useNavigate();

    const pricing = [
        { name: "2 Bedroom Flat", price: "₦70,000" },
        { name: "3 Bedroom Flat", price: "₦80,000" },
        { name: "3 Bedroom Duplex", price: "₦90,000" },
        { name: "4 Bedroom Duplex", price: "₦100,000" },
    ];

    return (
        <section className="w-full bg-white">

            {/* HERO */}
            <div
                className="relative h-[300px] md:h-[420px] bg-cover bg-center justify-between  flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${staff1})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        Fumigation & Pest Control
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-gray-200 max-w-xl text-lg"
                    >
                        Protect your home and workplace from harmful pests with safe,
                        effective, and long-lasting solutions.
                    </motion.p>
                </div>

                  <div
                        onClick={() => navigate("/")}
                        className="hidden md:block bg-white px-5 py-3 shadow-md h-12 cursor-pointer relative"
                    >
                        <p className="text-sm font-semibold text-gray-600">
                            HOME <span className="mx-2">|</span>
                            <span className="text-orange-500">FUMIGATION</span>
                        </p>
                    </div>
            </div>

            {/* INTRO */}
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Safe, Effective And Long-Lasting Protection
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                    Pests like cockroaches, rodents, termites, and mosquitoes can
                    pose serious health risks. Our fumigation service eliminates them
                    completely while keeping your environment safe.
                </motion.p>
            </div>

            {/* WHAT WE HANDLE */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        "Cockroaches & ants",
                        "Mosquitoes & flies",
                        "Rodents (rats & mice)",
                        "Bed bugs & termites",
                        "Spiders & crawling insects",
                        "General pest infestation",
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-blue-500 p-6 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <FaCheckCircle className="text-white mb-3" />
                            <p className="text-gray-50">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* PROCESS */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-12"
                >
                    Our Fumigation Process
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        "Inspection & pest identification",
                        "Preparation guidance",
                        "Safe chemical application",
                        "Target hidden breeding areas",
                        "Ventilation & safety check",
                        "Follow-up support",
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex gap-3"
                        >
                            <FaCheckCircle className="text-blue-500 mt-1" />
                            <p className="text-gray-600">{step}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SAFETY */}
            <div className="bg-blue-950 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Safe & Professional Approach
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-gray-200 mb-10"
                    >
                        We use eco-friendly chemicals and modern equipment to ensure
                        safety for your family, staff, and pets.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Eco-friendly chemicals",
                            "Certified methods",
                            "Trained professionals",
                            "Odor-controlled",
                            "Long-lasting protection",
                            "100% safety compliance",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-white text-gray-800 p-5 rounded-xl shadow"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PRICING */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-12"
                >
                    Pricing
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {pricing.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white border p-6 rounded-2xl shadow text-center"
                        >
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            <p className="text-2xl font-bold text-blue-600">{item.price}</p>

                            <button
                                onClick={()=>navigate('/booking-page')}
                                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}