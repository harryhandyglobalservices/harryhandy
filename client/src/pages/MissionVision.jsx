import React from "react";
import { motion } from "framer-motion";
import missionImg from "../assets/sec1.png";
import visionImg from "../assets/sec2.png";
import staff2 from "../assets/staff2.png";

/* ANIMATIONS */
const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function MissionVision() {
    return (
        <section className="w-full bg-white">

            


            {/* HERO SECTION */}
            <div
                className="relative h-[320px] md:h-[420px] bg-cover bg-center flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${staff2})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                    <motion.div variants={fadeUp} initial="hidden" animate="show">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Mission & Vision
                        </h1>
                        <p className="text-gray-200 max-w-xl">
                            Our purpose is driven by excellence, innovation, and a commitment
                            to creating cleaner, healthier spaces for everyone.
                        </p>
                    </motion.div>

                    <div
                        onClick={() => navigate("/")}
                        className="bg-white px-5 py-3 shadow-md cursor-pointer hidden md:block"
                    >
                        <p className="text-sm font-semibold text-gray-600">
                            HOME <span className="mx-2">|</span>
                            <span className="text-orange-500">GOALS & OBJECTIVES</span>
                        </p>
                    </div>
                </div>
            </div>


            {/* MISSION */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">

                {/* IMAGE */}
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="show"
                >
                    <img
                        src={missionImg}
                        alt="Mission"
                        className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                    />
                </motion.div>

                {/* TEXT */}
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our Mission
                    </h2>

                    <p className="text-gray-600 text-xl leading-relaxed mb-4">
                        Our mission is to deliver high-quality, reliable, and professional
                        cleaning services that improve the health, comfort, and productivity
                        of every space we serve.
                    </p>

                    <p className="text-gray-600 text-xl leading-relaxed mb-4">
                        We are committed to exceeding customer expectations through attention
                        to detail, consistent service delivery, and the use of safe,
                        eco-friendly cleaning solutions.
                    </p>

                    <p className="text-gray-600 text-xl leading-relaxed">
                        Our goal is to create environments where people feel comfortable,
                        confident, and proud of their surroundings.
                    </p>
                </motion.div>
            </div>

            {/* VISION */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">

                    {/* TEXT */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="show"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our Vision
                        </h2>

                        <p className="text-gray-600 text-xl leading-relaxed mb-4">
                            Our vision is to become a leading and most trusted cleaning
                            service provider known for excellence, innovation, and reliability.
                        </p>

                        <p className="text-gray-600 text-xl leading-relaxed mb-4">
                            We aim to set new standards in the cleaning industry by combining
                            modern technology, skilled professionals, and exceptional customer
                            service.
                        </p>

                        <p className="text-gray-600 text-xl leading-relaxed">
                            We strive to build long-term relationships with our clients and
                            make a positive impact by promoting healthier and cleaner
                            environments everywhere.
                        </p>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="show"
                    >
                        <img
                            src={visionImg}
                            alt="Vision"
                            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                        />
                    </motion.div>

                </div>
            </div>

            {/* CORE VALUES */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-5xl font-bold mb-12"
                >
                    Our Core Values
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {[
                        "Excellence",
                        "Integrity",
                        "Customer Satisfaction",
                        "Innovation",
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            transition={{ delay: i * 0.2 }}
                            className="bg-white shadow-lg rounded-2xl py-10 px-6 hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">
                                {value}
                            </h3>
                        </motion.div>
                    ))}

                </div>
            </div>

        </section>
    );
}