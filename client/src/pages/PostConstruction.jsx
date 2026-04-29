import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import heroImg from "../assets/sec2.png"; 
import staff1 from "../assets/staff1.png";
import { useNavigate } from "react-router-dom";

/* ANIMATIONS */
const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 },
    },
};

export default function PostConstruction() {
    const plans = [
        { name: "2 Bedroom Flat", price: "₦100,000" },
        { name: "3 Bedroom Flat", price: "₦130,000" },
        { name: "3 Bedroom Duplex", price: "₦160,000" },
        { name: "4 Bedroom Duplex", price: "₦200,000" },
    ];

    const navigate = useNavigate()

    return (
        <section className="w-full bg-white">


            {/* HERO */}
            <div
                className="relative h-[250px] sm:h-[320px] md:h-[420px] bg-cover bg-center flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${staff1})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between gap-6">
                    <div variants={fadeUp} initial="hidden" animate="show">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Post Construction Cleaning
                        </h1>
                        <p className="text-gray-200 max-w-xl text-sm sm:text-base">
                            We remove dust, debris, and construction residues to transform your
                            newly built or renovated space into a clean, safe, and ready-to-use environment.
                        </p>
                    </div>

                    <div
                        onClick={() => navigate("/")}
                        className="hidden md:block bg-white px-5 py-3 shadow-md h-12 cursor-pointer"
                    >
                        <p className="text-sm font-semibold text-gray-600">
                            HOME <span className="mx-2">|</span>
                            <span className="text-orange-500">ABOUT</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* ABOUT SERVICE */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">

                <motion.div variants={fadeUp} initial="hidden" whileInView="show">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        What We Offer
                    </h2>

                    <p className="text-gray-600 text-xl leading-relaxed mb-6">
                        After construction or renovation, spaces are often left with dust,
                        debris, and hazardous particles. Our post-construction cleaning
                        service ensures every corner is thoroughly cleaned and safe.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Dust and debris removal",
                            "Window and glass cleaning",
                            "Floor scrubbing and polishing",
                            "Paint and stain removal",
                            "Deep sanitation of all areas",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-500" />
                                <p className="text-gray-700 text-xl">{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.img
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    src={heroImg}
                    alt=""
                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
            </div>

            {/* PRICING */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        className="text-3xl md:text-5xl font-bold mb-12"
                    >
                        Pricing Plan
                    </motion.h2>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >

                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl shadow-lg p-8 text-center"
                            >
                                <h3 className="text-xl font-semibold mb-3">
                                    {plan.name}
                                </h3>

                                <p className="text-3xl font-bold text-blue-600 mb-6">
                                    {plan.price}
                                </p>

                                <p className="text-gray-500 mb-6 text-sm">
                                    One-time professional deep cleaning service
                                </p>

                                <button onClick={()=>navigate('/booking-page')} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                                    Book Now
                                </button>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-950 py-20 text-center text-white px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to Make Your Space Shine?
                    </h2>

                    <p className="max-w-xl mx-auto mb-8 text-gray-200">
                        Let our experts handle the final cleaning so you can enjoy your
                        newly completed space without stress.
                    </p>

                    <button onClick={()=>navigate('/contact-page')} className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Contact Us
                    </button>
                </motion.div>
            </div>

        </section>
    );
}