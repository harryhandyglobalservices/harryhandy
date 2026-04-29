import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import staff1 from "../assets/staff1.png";

/* ANIMATION FIXED */
const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
};

export default function CarpetChairWash() {
    const navigate = useNavigate();

    const pricing = [
        { name: "Single Chair", price: "₦5,000" },
        { name: "Office Chair", price: "₦7,000" },
        { name: "2-Seater Sofa", price: "₦15,000" },
        { name: "3-Seater Sofa", price: "₦20,000" },
        { name: "Carpet (per sqm)", price: "₦2,500" },
    ];

    return (
        <section className="w-full bg-white">

            {/* HERO */}
            <div
                className="relative h-[300px] md:h-[420px] bg-cover bg-center justify-between flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${staff1})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10">
                    <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Carpet & Chair Wash
                    </motion.h1>

                    <motion.p {...fadeUp} className="text-gray-200 max-w-xl text-lg">
                        Deep cleaning that removes stains, eliminates odors, and restores
                        your fabrics to a fresh, hygienic condition.
                    </motion.p>
                </div>

                <div
                    onClick={() => navigate("/")}
                    className="hidden md:block bg-white px-5 py-3 shadow-md h-12 cursor-pointer relative"
                >
                    <p className="text-sm font-semibold text-gray-600">
                        HOME <span className="mx-2">|</span>
                        <span className="text-orange-500">CARPET CLEANING</span>
                    </p>
                </div>
            </div>

            {/* INTRO */}
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold mb-6">
                    Premium Fabric Cleaning Experience
                </motion.h2>

                <motion.p {...fadeUp} className="text-gray-600 text-lg max-w-3xl mx-auto">
                    We go beyond surface cleaning. Our advanced techniques penetrate deep
                    into fabric fibers to remove hidden dirt, bacteria, and allergens.
                </motion.p>
            </div>

            {/* PROCESS */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        "Inspection & stain analysis",
                        "Deep vacuum extraction",
                        "Steam & shampoo cleaning",
                        "Odor & bacteria removal",
                        "Fast drying system",
                        "Final finishing",
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            className="bg-blue-500 p-6 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <FaCheckCircle className="text-blue-50 mb-3 text-xl" />
                            <p className="text-gray-50">{step}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* PRICING */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold text-center mb-12">
                    Our Pricing
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {pricing.map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white border p-6 rounded-2xl shadow text-center"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-3xl font-bold text-blue-600">{item.price}</p>

                            <button
                               onClick={()=>navigate('/booking-page')}
                                className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="py-20 text-center">
                <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold mb-6">
                    Refresh Your Space Today
                </motion.h2>

                <motion.button
                    {...fadeUp}
                    onClick={()=>navigate('/booking-page')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold transition"
                >
                    Book Cleaning Service
                </motion.button>
            </div>

        </section>
    );
}