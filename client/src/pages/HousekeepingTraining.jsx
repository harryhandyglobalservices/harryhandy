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

export default function HousekeepingTraining() {
    const navigate = useNavigate();

    return (
        <section className="w-full bg-white">

            {/* HERO */}
            <div
                className="relative h-[300px] md:h-[420px] bg-cover bg-center justify-between flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${staff1})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Housekeeping & Sanitation Training
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="text-gray-200 max-w-xl text-lg"
                    >
                        Equip your staff with professional cleaning knowledge,
                        modern sanitation techniques, and industry-standard practices.
                    </motion.p>
                </div>

                <div
                        onClick={() => navigate("/")}
                        className="hidden md:block bg-white px-5 py-3 shadow-md h-12 cursor-pointer relative"
                    >
                        <p className="text-sm font-semibold text-gray-600">
                            HOME <span className="mx-2">|</span>
                            <span className="text-orange-500">HOUSEKEEPING AND TRAINING</span>
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
                    Build a Skilled & Professional Cleaning Team
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                    Our training program is designed for individuals, companies, and
                    organizations that want to maintain the highest level of cleanliness,
                    hygiene, and professionalism. We go beyond basic cleaning by teaching
                    structured systems, modern tools, and effective sanitation methods
                    used by top cleaning professionals.
                </motion.p>
            </div>

            {/* WHAT YOU WILL LEARN */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-center mb-12"
                    >
                        What You Will Learn
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Professional housekeeping standards",
                            "Proper use of cleaning chemicals",
                            "Sanitation & disinfection techniques",
                            "Waste management and hygiene practices",
                            "Time management & efficiency",
                            "Customer service and professionalism",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="bg-blue-500 p-6 rounded-2xl shadow hover:shadow-lg transition"
                            >
                                <FaCheckCircle className="text-white mb-3 text-xl" />
                                <p className="text-gray-50">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* TRAINING APPROACH */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-12"
                >
                    Our Training Approach
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {[
                        "Hands-on practical training sessions",
                        "Real-life cleaning demonstrations",
                        "Use of modern equipment and tools",
                        "Step-by-step cleaning procedures",
                        "Health & safety compliance training",
                        "Assessment and performance evaluation",
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

            {/* WHY CHOOSE US */}
            <div className="bg-blue-950 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Why Choose Our Training
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-gray-200 mb-10"
                    >
                        We combine industry experience with practical training to ensure
                        every participant gains real skills that can be applied immediately.
                        Our goal is to produce confident, efficient, and professional cleaners.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Experienced instructors",
                            "Practical hands-on learning",
                            "Modern equipment training",
                            "Industry-standard techniques",
                            "Flexible training sessions",
                            "Certification available",
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

            {/* CTA */}
            <div className="py-20 text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Start Your Professional Training Today
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-gray-600 mb-8"
                >
                    Upgrade your skills or train your team to deliver world-class cleaning services.
                </motion.p>

                <motion.button
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    onClick={() => navigate("/contact")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold transition"
                >
                    Enroll Now
                </motion.button>
            </div>

        </section>
    );
}