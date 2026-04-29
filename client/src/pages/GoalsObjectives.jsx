import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBullseye, FaCheckCircle, FaChartLine, FaUsers } from "react-icons/fa";
import staff2 from "../assets/staff2.png";
import { useNavigate } from "react-router-dom";

/* ANIMATION */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 },
    },
};

export default function GoalsObjectives() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });
    const navigate = useNavigate()

    const goals = [
        {
            icon: <FaBullseye />,
            title: "Deliver Exceptional Service",
            desc: "Provide high-quality cleaning services that exceed customer expectations every time.",
        },
        {
            icon: <FaUsers />,
            title: "Build Long-Term Relationships",
            desc: "Establish trust and maintain strong relationships with our clients through reliability.",
        },
        {
            icon: <FaChartLine />,
            title: "Continuous Growth",
            desc: "Expand our services and improve our processes to stay ahead in the industry.",
        },
    ];

    const objectives = [
        "Maintain consistent service quality across all projects",
        "Use eco-friendly and safe cleaning products",
        "Train and develop highly skilled staff",
        "Ensure timely and reliable service delivery",
        "Adopt modern cleaning technologies",
        "Improve customer satisfaction and retention",
    ];

    return (
        <section ref={ref} className="w-full bg-white">


            {/* HERO SECTION */}
            <div
                className="relative h-[320px] md:h-[420px] bg-cover bg-center flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${staff2})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                    <motion.div variants={fadeUp} initial="hidden" animate="show">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our Goals & Objectives
                        </h1>
                        <p className="text-gray-200 max-w-xl">
                            We are driven by clear goals and strong objectives that guide our
                            commitment to excellence and customer satisfaction.
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

            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >

                {/* GOALS */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">

                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl md:text-5xl font-bold mb-12"
                    >
                        Our Core Goals
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {goals.map((goal, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
                            >
                                <div className="text-4xl text-blue-600 mb-4">
                                    {goal.icon}
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {goal.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {goal.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* OBJECTIVES */}
                <div className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT TEXT */}
                        <motion.div variants={fadeUp}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Our Objectives
                            </h2>

                            <p className="text-gray-600 mb-6 text-xl leading-relaxed">
                                Our objectives define how we achieve our goals. We focus on
                                delivering consistent quality, improving efficiency, and
                                maintaining customer trust in every service we provide.
                            </p>

                            <div className="space-y-4">
                                {objectives.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="flex items-center gap-3"
                                    >
                                        <FaCheckCircle className="text-blue-500" />
                                        <p className="text-gray-700 text-xl">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT VISUAL CARD */}
                        <motion.div
                            variants={fadeUp}
                            className="bg-blue-900 text-white p-10 rounded-2xl shadow-lg"
                        >
                            <h3 className="text-3xl font-bold mb-4">
                                Why It Matters
                            </h3>

                            <p className="leading-relaxed text-xl text-gray-200">
                                Clear goals and objectives allow us to deliver consistent
                                results, improve our services, and maintain a high level of
                                customer satisfaction. They guide every decision we make and
                                ensure we continue to grow while delivering value.
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* VISION STATEMENT */}
                <div className="py-20 text-center max-w-4xl mx-auto px-6">

                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Our Commitment
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-gray-600 text-xl leading-relaxed"
                    >
                        We are committed to delivering excellence in every cleaning service
                        we provide. Our goals and objectives are centered on creating clean,
                        safe, and comfortable environments while building lasting trust
                        with our clients.
                    </motion.p>

                </div>

            </motion.div>
        </section>
    );
}