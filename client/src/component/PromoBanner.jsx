import React from "react";
import { motion } from "framer-motion";
import hero3 from "../assets/hero3.png";
import { useNavigate } from "react-router-dom";

export default function PromoBanner() {
    const navigate = useNavigate()
    return (
        <section className="w-full bg-white py-56 flex justify-center">

            <div className="w-full px-4  sm:px-6 lg:px-12 xl:px-20">

                <div className="relative bg-[#0f343d] rounded-2xl pt-4  px-6 sm:px-10 lg:px-16  flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* BACKGROUND MAP */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/world-map.png')] bg-cover bg-center"></div>

                    {/* LEFT CONTENT */}
                    <div className="relative z-10 max-w-xl text-white text-center lg:text-left">

                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Recognized as One of The Best Cleaning{" "}
                            <span className="text-blue-400">Company!</span>
                        </h2>

                        <p className="text-white/80 text-sm sm:text-base mb-3">
                           A cleaning services company plays a vital role in maintaining clean, healthy, and productive environments.
                        </p>

                        <button onClick={()=>navigate('/our-company')} className="bg-white hover:bg-blue-50 text-black px-5 sm:px-6 py-3 rounded-lg font-semibold shadow-md transition">
                            Read More →
                        </button>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="relative w-full lg:w-auto flex justify-end">

                        <motion.img
                            src={hero3}
                            alt="Cleaner"
                            initial={{ opacity: 0, y: 80, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="
                                w-[260px] md:w-[340px] lg:w-[580px]
                                object-contain
                                relative
                                lg:-mt-54
                                lg:-mr-14
                                float-x
                                z-20
                            "
                        />
                    </div>
                    {/* DECOR */}
                    <div className="hidden lg:block absolute bottom-10 right-1/4 w-40 h-40 border border-dashed border-white/30 rounded-full"></div>

                </div>
            </div>
        </section>
    );
}
