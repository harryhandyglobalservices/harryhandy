import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import staff1 from "../assets/staff1.png";
import line5 from "../assets/line5.png";

/* ANIMATION */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WeeklyHousekeeping() {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [day, setDay] = useState("Monday");

    const plans = [
        { name: "2 Bedroom Flat", price: "₦60,000" },
        { name: "3 Bedroom Flat", price: "₦70,000" },
        { name: "3 Bedroom Duplex", price: "₦80,000" },
        { name: "4 Bedroom Duplex", price: "₦90,000" },
    ];

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const features = [
        "General house cleaning and maintenance",
        "Kitchen cleaning (surfaces, sinks, countertops)",
        "Bathroom sanitization and disinfection",
        "Dusting of furniture, shelves, and appliances",
        "Floor sweeping, mopping, and vacuuming",
        "Waste disposal and organization",
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
                            Weekly Housekeeping Services
                        </h1>
                        <p className="text-gray-200 max-w-xl text-sm sm:text-base">
                            Keep your home consistently clean and stress-free with our professional
                            weekly housekeeping service designed for comfort, hygiene, and convenience.
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
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Consistent Cleanliness, Every Week
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
                    Our Weekly Housekeeping Plan is designed for individuals and families
                    who want to maintain a clean, organized, and healthy living environment
                    without the stress of doing it themselves.

                    With scheduled visits once every week (4 times monthly), we ensure your
                    space remains fresh, hygienic, and always welcoming.
                </motion.p>
            </div>

            {/* FEATURES */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    <motion.div variants={fadeUp} initial="hidden" whileInView="show">
                        <h2 className="text-3xl font-bold mb-6">
                            What’s Included in This Service
                        </h2>

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
                            <h3 className="text-2xl font-bold mb-4">Why Choose This Plan?</h3>
                            <p className="leading-relaxed text-gray-200">
                                Our weekly housekeeping service is perfect for maintaining a
                                consistently clean home without interruption to your daily routine.
                                <br /><br />
                                We assign trained professionals who understand your cleaning
                                preferences and deliver reliable, high-quality service every visit.
                                <br /><br />
                                With this plan, you enjoy peace of mind knowing your home is always
                                in top condition.
                            </p>
                        </div>
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
                    Choose Your Plan
                </motion.h2>

                <div className="flex justify-center mb-10">
                    <img src={line5} alt="" className="w-40" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className={`rounded-2xl p-6 border shadow-lg cursor-pointer transition ${selectedPlan === plan.name
                                    ? "border-blue-600 bg-blue-50"
                                    : "bg-white"
                                }`}
                            onClick={() => setSelectedPlan(plan.name)}
                        >
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-3xl font-bold text-blue-600 mb-4">
                                {plan.price}
                            </p>

                            <button onClick={()=>navigate('/booking-page')} className="w-full bg-blue-600 text-white py-2 rounded-lg">
                                Book a Service
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* BOOKING SECTION */}
            {selectedPlan && (
                <div className="bg-gray-50 py-16">
                    <div className="max-w-4xl mx-auto px-6">

                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            className="text-3xl font-bold mb-6 text-center"
                        >
                            Complete Your Booking
                        </motion.h2>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">

                            {/* PLAN SUMMARY */}
                            <div className="mb-6">
                                <p className="text-gray-600">Selected Plan:</p>
                                <h3 className="text-xl font-bold text-blue-600">
                                    {selectedPlan}
                                </h3>
                            </div>

                            {/* SELECT DAY */}
                            <div className="mb-6">
                                <label className="block mb-2 font-semibold">
                                    Choose Preferred Cleaning Day
                                </label>

                                <select
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    className="w-full border px-4 py-3 rounded-lg"
                                >
                                    {days.map((d, i) => (
                                        <option key={i}>{d}</option>
                                    ))}
                                </select>
                            </div>

                            {/* USER DETAILS */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="border px-4 py-3 rounded-lg w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="border px-4 py-3 rounded-lg w-full"
                                />
                            </div>

                            <textarea
                                placeholder="Address"
                                className="border px-4 py-3 rounded-lg w-full mb-6"
                            />

                            {/* SUBMIT */}
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                                Confirm Booking
                            </button>

                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <div className="bg-blue-950 text-white py-16 text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Enjoy a Cleaner Home Every Week
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="text-gray-200 mb-8 max-w-2xl mx-auto"
                >
                    Let our experts handle your cleaning while you focus on what matters most.
                    Experience comfort, consistency, and peace of mind with our trusted
                    housekeeping service.
                </motion.p>

                <motion.button
                onClick={()=>navigate('/booking-page')}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Get Started Today
                </motion.button>
            </div>

        </section>
    );
}