import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import staff1 from "../assets/staff1.png";

/* ANIMATION */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DeepCleaning() {
    const navigate = useNavigate();

    const plans = [
        { name: "2 Bedroom Flat", price: "₦90,000" },
        { name: "3 Bedroom Flat", price: "₦110,000" },
        { name: "3 Bedroom Duplex", price: "₦130,000" },
        { name: "4 Bedroom Duplex", price: "₦150,000" },
    ];

    return (
        <section className="w-full bg-white">

            {/* HERO */}
            <div
                className="relative h-[250px] sm:h-[320px] md:h-[420px] bg-cover bg-center flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${staff1})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between gap-6">
                    <motion.div initial="hidden" animate="show" variants={fadeUp}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Deep Cleaning
                        </h1>
                        <p className="text-gray-200 max-w-xl">
                            Our deep cleaning service goes beyond regular cleaning to remove hidden dirt,
                            bacteria, and buildup, leaving your space fresh, sanitized, and spotless.
                        </p>
                    </motion.div>

                    <div
                        onClick={() => navigate("/")}
                        className="hidden md:block bg-white px-5 py-3 shadow-md h-12 cursor-pointer"
                    >
                        <p className="text-sm font-semibold text-gray-600">
                            HOME <span className="mx-2">|</span>
                            <span className="text-orange-500">DEEP CLEANING</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* TITLE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Our Deep Cleaning Packages
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from our flexible deep cleaning plans designed to suit your
                        home size and cleaning needs.
                    </p>
                </motion.div>

                {/* PRICING */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: false }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg p-6 text-center border"
                        >
                            <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>

                            <p className="text-3xl font-bold text-blue-600 mb-4">
                                {plan.price}
                            </p>

                            <p className="text-gray-500 text-sm mb-6">
                                One-time deep cleaning service
                            </p>

                            <button onClick={()=>navigate('/booking-page')} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* WHAT'S INCLUDED */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="mt-20 text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-4">What’s Included?</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Our deep cleaning service includes detailed cleaning of hard-to-reach areas,
                        sanitization of high-touch surfaces, removal of stubborn stains, and a
                        thorough refresh of your entire space.
                    </p>
                </motion.div>

                {/* WHY CHOOSE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="mt-20 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Why Choose Our Deep Cleaning Service?
                    </h3>

                    <p className="text-gray-600 mb-6">
                        We don’t just clean what you can see — we focus on what you can’t see.
                        Hidden dirt, bacteria, and buildup are eliminated to create a truly
                        hygienic and healthy space.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {[
                        "Healthier living environment",
                        "Attention to every detail",
                        "Professional tools & products",
                    ].map((item, i) => (
                        <div key={i} className="bg-blue-500 p-6 rounded-xl text-center">
                            <p className="text-gray-50">{item}</p>
                        </div>
                    ))}
                </div>

                {/* EQUIPMENT */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="mt-24 text-center"
                >
                    <h3 className="text-2xl font-bold mb-6">
                        Tools & Products We Use
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "High-powered vacuum cleaners",
                            "Steam cleaning machines",
                            "Eco-friendly cleaning products",
                            "Microfiber cloths",
                            "Scrubbing tools",
                            "Disinfectants",
                        ].map((item, i) => (
                            <div key={i} className="bg-blue-500 text-white p-5 rounded-xl">
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* PROCESS */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="mt-24"
                >
                    <h3 className="text-2xl font-bold mb-10 text-center">
                        Our Cleaning Process
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Inspection & Assessment",
                            "Surface Preparation",
                            "Deep Cleaning",
                            "Sanitization",
                            "Final Inspection",
                            "Fresh Space Delivery",
                        ].map((step, i) => (
                            <div key={i} className="bg-blue-500 text-white p-6 rounded-xl shadow">
                                <h4 className="font-semibold">{step}</h4>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* TRUST */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="mt-20 text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Your Safety Is Our Priority
                    </h3>

                    <p className="text-gray-600">
                        Our trained professionals use safe, tested methods and treat your
                        space with care and respect. You can trust us to deliver consistent,
                        high-quality results every time.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Ready for a Spotless Space?
                    </h3>

                    <button onClick={()=>navigate('/booking-page')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                        Book Deep Cleaning Now
                    </button>
                </motion.div>

            </div>
        </section>
    );
}