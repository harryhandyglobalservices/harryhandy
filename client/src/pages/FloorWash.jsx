import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import staff1 from "../assets/staff1.png";
import line5 from "../assets/line5.png";

/* ANIMATION */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FloorWash() {
    const navigate = useNavigate();

    const plans = [
        { name: "Small Apartment", price: "₦30,000" },
        { name: "2 Bedroom Flat", price: "₦45,000" },
        { name: "3 Bedroom Flat", price: "₦60,000" },
        { name: "Duplex", price: "₦80,000" },
    ];

    const features = [
        "Deep scrubbing of all floor surfaces",
        "Removal of stains, dirt, and grime",
        "Tile and grout cleaning",
        "Use of industrial-grade cleaning machines",
        "Polishing for a smooth, shiny finish",
        "Safe, eco-friendly cleaning solutions",
    ];

    const tools = [
        "Industrial floor scrubbers",
        "High-pressure cleaning machines",
        "Microfiber mops and pads",
        "Specialized tile & grout brushes",
        "Eco-friendly disinfectants",
        "Floor polish and protective coatings",
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
                    <motion.div variants={fadeUp} initial="hidden" animate="show">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Floor Wash Service
                        </h1>
                        <p className="text-gray-200 max-w-xl">
                            Restore the beauty of your floors with our professional deep washing,
                            stain removal, and polishing service.
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

            {/* INTRO */}
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Bring Your Floors Back to Life
                </motion.h2>

                <div className="flex justify-center mb-6">
                    <img src={line5} alt="" className="w-40" />
                </div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto"
                >
                    Over time, floors accumulate dirt, stains, and bacteria that regular cleaning
                    cannot remove. Our Floor Wash Service is designed to deeply clean, restore,
                    and protect your flooring surfaces, leaving them spotless, hygienic, and
                    visually appealing.
                </motion.p>
            </div>

            {/* FEATURES */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    <motion.div variants={fadeUp} initial="hidden" whileInView="show">
                        <h2 className="text-3xl font-bold mb-6">What We Do</h2>

                        <ul className="space-y-3">
                            {features.map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700">
                                    <span className="text-blue-600 font-bold">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" whileInView="show">
                        <div className="bg-blue-950 text-white p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Why This Service Matters</h3>
                            <p className="text-gray-200 leading-relaxed">
                                Dirty floors can affect both the appearance and hygiene of your space.
                                Our expert cleaning process removes embedded dirt and harmful bacteria,
                                improving indoor cleanliness and extending the lifespan of your floors.
                                <br /><br />
                                We don’t just clean — we restore and protect your floors for long-lasting shine.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* TOOLS & PROCESS */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-5xl font-bold text-center mb-10"
                >
                    Our Equipment & Process
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">

                    <motion.div variants={fadeUp}>
                        <h3 className="text-xl font-bold mb-4">Equipment We Use</h3>
                        <ul className="space-y-2 text-gray-600">
                            {tools.map((tool, i) => (
                                <li key={i}>• {tool}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h3 className="text-xl font-bold mb-4">How We Work</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We begin with an inspection of your floor type to determine the best cleaning
                            method. Next, we apply specialized cleaning solutions to break down dirt and
                            stains, followed by deep scrubbing using professional machines.
                            <br /><br />
                            Finally, we rinse, dry, and polish the surface to leave your floors clean,
                            fresh, and shining like new.
                        </p>
                    </motion.div>

                </div>
            </div>

            {/* PRICING */}
            <div className="max-w-6xl mx-auto px-6 py-20 text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Pricing
                </motion.h2>

                <div className="flex justify-center mb-10">
                    <img src={line5} alt="" className="w-40" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg p-6 border"
                        >
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-3xl font-bold text-blue-600 mb-4">
                                {plan.price}
                            </p>
                            <button onClick={()=>navigate('/booking-page')} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-950 text-white py-16 text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Give Your Floors a Fresh Look
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-gray-200 mb-8 max-w-2xl mx-auto"
                >
                    Let our professionals restore the shine and cleanliness of your floors
                    with our trusted deep washing service.
                </motion.p>

                <button onClick={()=>navigate('/booking-page')} className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition">
                    Book Floor Wash Service
                </button>
            </div>

        </section>
    );
}