import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import preview from "../assets/preview.png";
import video1 from "../assets/video1.mp4";
import { FaPlay } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/*  VARIANTS */
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function VideoSection() {
    const [play, setPlay] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });
    const navigate = useNavigate()

    return (
        <section
            ref={ref}
            className="w-full min-h-[500px] bg-white py-20 flex flex-col lg:flex-row"
        >

            {/* LEFT SIDE */}
            <motion.div
                animate={isInView ? "show" : "hidden"}
                variants={{
                    hidden: { opacity: 0, x: -80 },
                    show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.8, ease: "easeOut" },
                    },
                }}
                className="relative w-full lg:w-1/2 max-w-3xl mx-auto lg:mx-0 lg:ml-20 py-10 h-[300px] lg:h-auto"
            >

                {/* IMAGE */}
                <img
                    src={preview}
                    alt="Video Preview"
                    className="w-full h-full object-cover rounded-xl"
                />

               

                {/* PLAY BUTTON */}
                <motion.button
                    onClick={() => setPlay(true)}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg"
                    >
                        <FaPlay className="text-red-500 text-3xl" />
                    </motion.div>
                </motion.button>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
                animate={isInView ? "show" : "hidden"}
                variants={container}
                className="w-full lg:w-1/2 text-black flex items-center px-6 lg:px-16 py-12"
            >
                <div className="max-w-xl">

                    <motion.p
                        variants={item}
                        className="uppercase text-sm mb-4 opacity-80"
                    >
                        VIDEO TOUR
                    </motion.p>

                    <motion.h1
                        variants={item}
                        className="text-3xl md:text-6xl leading-tight mb-6"
                    >
                        Shine Brighter with Our Expert Touch
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed"
                    >
                        We are a team of passionate cleaning experts who take pride in delivering the highest
                        standard of service. With years of experience in the industry, we’ve perfected our
                        cleaning methods to ensure every job is done right.
                    </motion.p>

                    <motion.button
                    onClick={()=>navigate('/booking-page')}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition"
                    >
                        Book a Service
                    </motion.button>

                </div>
            </motion.div>

            {/* VIDEO MODAL */}
            {play && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                >

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={() => setPlay(false)}
                        className="absolute top-36 right-6 z-50 bg-white backdrop-blur-md text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/40 transition"
                    >
                        <FaTimes size={20} />
                    </button>

                    {/* VIDEO */}
                    <motion.video
                        src={video1}
                        controls
                        autoPlay
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-[90%] max-w-3xl rounded-xl z-10"
                    />

                </motion.div>
            )}

        </section>
    );
}