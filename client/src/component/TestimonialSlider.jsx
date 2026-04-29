import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

import pass1 from "../assets/pass1.avif";
import pass2 from "../assets/pass2.jpg";
import pass3 from "../assets/pass3.jfif";
import pass4 from "../assets/pass4.avif";
import pass5 from "../assets/pass5.avif";

const data = [
    {
        name: "Felicia Ogunsanya",
        city: "Lagos",
        img: pass1,
        review:
            "Harry Handy Global Services did an amazing job cleaning my apartment. Everything was spotless and fresh!",
        rating: 5,
    },
    {
        name: "Mercy Philips",
        city: "Abuja",
        img: pass2,
        review:
            "Very professional team. They arrived on time and handled my office cleaning perfectly.",
        rating: 4,
    },
    {
        name: "Daniel Ethian",
        city: "Port Harcourt",
        img: pass3,
        review:
            "I was impressed with their attention to detail. Even hidden areas were properly cleaned.",
        rating: 5,
    },
    {
        name: "Jane Jonathan",
        city: "Ibadan",
        img: pass4,
        review:
            "Great service overall. The cleaners were polite and efficient. Will definitely book again.",
        rating: 4,
    },
    {
        name: "Michael Aduragbemi",
        city: "Lekki",
        img: pass5,
        review:
            "Top-notch cleaning service! My home looks brand new every time they visit.",
        rating: 5,
    },
];


const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });

    /* RESPONSIVE CARDS PER VIEW */
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setCardsPerView(1);
            else if (window.innerWidth < 1024) setCardsPerView(2);
            else setCardsPerView(4);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = Math.max(0, data.length - cardsPerView);

    const nextSlide = () => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [index, cardsPerView]);

    return (
        <section
            ref={ref}
            className="w-full py-16 sm:py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
        >

            {/* ARROWS (RESPONSIVE FIXED) */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 lg:left-10 top-66 md:top-85 -translate-y-1/2 z-30 bg-blue-800 p-2 sm:p-3 rounded-full"
            >
                <FaArrowLeft className="text-white" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 lg:right-10 top-66 md:top-85 -translate-y-1/2 z-30 bg-blue-800 p-2 sm:p-3 rounded-full"
            >
                <FaArrowRight className="text-white" />
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                <div className="overflow-hidden pt-10">

                    <motion.div
                        animate={isInView ? "show" : "hidden"}
                        variants={container}
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${index * (100 / cardsPerView)}%)`,
                        }}
                    >

                        {data.map((itemData, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="flex-shrink-0 px-3"
                                style={{
                                    width: `${100 / cardsPerView}%`,
                                }}
                            >

                                <div className="relative pt-16">

                                    {/* AVATAR */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                        <img
                                            src={itemData.img}
                                            alt={itemData.name}
                                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg bg-white"
                                        />
                                    </div>

                                    {/* CARD */}
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="bg-gradient-to-br from-blue-950 to-gray-700 text-white rounded-2xl pt-14 pb-6 px-5 sm:px-6 text-center shadow-lg"
                                    >

                                        <h3 className="text-base mb-4 sm:text-lg font-bold">
                                            {itemData.name}
                                        </h3>



                                        <p className="text-xs sm:text-sm text-gray-100 mb-5">
                                            {itemData.review}
                                        </p>
                                        <div className="flex justify-center gap-1 text-sm">
                                            {[...Array(5)].map((_, i) => {
                                                const full = i < Math.floor(itemData.rating);
                                                const half =
                                                    i === Math.floor(itemData.rating) &&
                                                    itemData.rating % 1 !== 0;

                                                return (
                                                    <span key={i} className="relative">
                                                        {/* Empty star */}
                                                        <FaStar className="text-gray-400" />

                                                        {/* Full star */}
                                                        {full && (
                                                            <FaStar className="text-yellow-400 absolute top-0 left-0" />
                                                        )}

                                                        {/* Half star */}
                                                        {half && (
                                                            <FaStar
                                                                className="text-yellow-400 absolute top-0 left-0 overflow-hidden"
                                                                style={{ clipPath: "inset(0 50% 0 0)" }}
                                                            />
                                                        )}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </motion.div>

                                    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-blue-950 rounded-full absolute -z-10 top-10 left-22 md:left-15 sm:left-16 opacity-80"></div>

                                </div>

                            </motion.div>
                        ))}

                    </motion.div>

                </div>
            </div>
        </section>
    );
}