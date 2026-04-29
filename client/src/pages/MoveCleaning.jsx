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

export default function MoveCleaning() {
    const navigate = useNavigate();

    const plans = [
        { name: "2 Bedroom Flat", price: "₦85,000" },
        { name: "3 Bedroom Flat", price: "₦110,000" },
        { name: "3 Bedroom Duplex", price: "₦140,000" },
        { name: "4 Bedroom Duplex", price: "₦170,000" },
    ];

    const checklist = [
        "Deep cleaning of all rooms and surfaces",
        "Kitchen degreasing (cabinets, tiles, countertops)",
        "Bathroom sanitization and descaling",
        "Wardrobe, shelves & storage cleaning",
        "Floor scrubbing, vacuuming & polishing",
        "Window, glass & frame detailing",
        "Removal of dust, stains & hidden dirt",
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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Move In & Move Out Cleaning
                        </h1>
                        <p className="text-gray-200 max-w-xl text-sm sm:text-xl">
                            Experience a flawless transition into your new space or leave your old one spotless.
                            We deliver deep, detailed, and professional cleaning tailored for moving situations.
                        </p>
                    </motion.div>

                    <div
                        onClick={() => navigate("/")}
                        className="hidden md:block bg-white px-5 py-3 shadow-md h-12 cursor-pointer"
                    >
                        <p className="text-sm font-semibold text-gray-600">
                            HOME <span className="mx-2">|</span>
                            <span className="text-orange-500">SERVICE</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* INTRO */}
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl md:text-5xl font-bold mb-6">
                    A Premium Cleaning Experience for Every Move
                </motion.h2>

                <div className="flex justify-center mb-6">
                    <img src={line5} alt="" className="w-40" />
                </div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto"
                >
                    Moving can be overwhelming, but cleaning should not be part of your stress. Our Move In & Move Out
                    Cleaning service is designed to ensure every space is left in pristine condition or perfectly
                    prepared for your arrival. We go beyond surface cleaning to deliver a deep, hygienic, and
                    refreshing environment that reflects true professionalism and care.
                </motion.p>
            </div>

            {/* WHY CHOOSE US */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    <motion.div variants={fadeUp} initial="hidden" whileInView="show">
                        <h2 className="text-3xl font-bold mb-6">Why Clients Trust This Service</h2>
                        <p className="text-gray-600 text-xl mb-6 leading-relaxed">
                            Whether you are moving into a new home or preparing to hand over a property, our cleaning
                            ensures every detail is handled with precision. We eliminate hidden dirt, bacteria, stains,
                            and odors, leaving the space fresh, sanitized, and welcoming.
                        </p>

                        <ul className="space-y-3 text-xl">
                            {checklist.map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700">
                                    <span className="text-blue-600 text-xl font-bold">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" whileInView="show">
                        <div className="bg-blue-950 text-white p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                            <p className="leading-relaxed text-xl text-gray-200">
                                We treat every space like our own. Our trained professionals use safe, high-quality
                                cleaning products and modern techniques to deliver exceptional results. From the smallest
                                detail to the largest surface, we ensure nothing is overlooked.
                                <br /><br />
                                Your comfort, safety, and satisfaction are always our top priorities.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* PRICING */}
            <div className="max-w-6xl mx-auto px-6 py-20 text-center">
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl md:text-5xl font-bold mb-6">
                    Service Pricing
                </motion.h2>

                <div className="flex justify-center mb-10">
                    <img src={line5} alt="" className="w-40" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg p-6 border"
                        >
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                            <button onClick={()=>navigate('/booking-page')} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-950 text-white py-16 text-center">
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl md:text-5xl font-bold mb-6">
                    Ready for a Fresh Start?
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="text-gray-200 mb-8 text-xl max-w-2xl mx-auto">
                    Let us handle the cleaning while you focus on your move. Enjoy a spotless space and peace of mind
                    knowing professionals are taking care of everything.
                </motion.p>

                <motion.button
                onClick={()=>navigate('/booking-page')}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Book Your Cleaning Today
                </motion.button>
            </div>

        </section>
    );
}