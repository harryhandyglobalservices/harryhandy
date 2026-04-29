import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Images
import heroImg from "../assets/staff2.png";
import aboutImg from "../assets/sec1.png";
import team1 from "../assets/staff1.png";
import team2 from "../assets/staff2.png";
import team3 from "../assets/staff5.png";
import line5 from "../assets/line5.png";
import ceo1 from "../assets/ceo1.png";
import hero3 from "../assets/hero3.png";
import hero1 from "../assets/hero1.png";
import API from "../../api";

/* ANIMATIONS */
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function OurCompany() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });
    const navigate = useNavigate();
    const [staff, setStaff] = useState([]);

    const stats = [
        { number: "500+", label: "Happy Clients" },
        { number: "1200+", label: "Projects Completed" },
        { number: "20+", label: "Team Members" },
        { number: "5+", label: "Years Experience" },
    ];



    const team = [
        { img: ceo1, name: "Owner" },
        { img: hero3, name: "Cleaning Expert" },
        { img: hero1, name: "Cleaning Expert" },
        { img: team1, name: "Cleaning Expert" },
        { img: team2, name: "Cleaning Expert" },
        { img: team3, name: "Cleaning Expert" },
    ];

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await API.get("/staff");
                console.log("STAFF DATA:", res.data); // 👈 ADD THIS
                setStaff(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchStaff();
    }, []);

    return (
        <section ref={ref} className="w-full bg-white">

            {/* HERO */}
            <div
                className="relative h-[250px] sm:h-[320px] md:h-[420px] bg-cover bg-center flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between gap-6">
                    <div variants={fadeUp} initial="hidden" animate="show">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            About Our Company
                        </h1>
                        <p className="text-gray-200 max-w-xl text-sm sm:text-base">
                            We provide high-quality cleaning services that create healthier,
                            safer, and more productive environments.
                        </p>
                    </div>

                    <div
                        onClick={() => navigate("/")}
                        className="hidden md:block bg-white px-5 h-12 py-3 shadow-md cursor-pointer"
                    >
                        <p className="text-sm font-semibold text-gray-600">
                            HOME <span className="mx-2">|</span>
                            <span className="text-orange-500">ABOUT</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >

                {/* WHO WE ARE */}
                <div className="max-w-[85%] mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">

                    <img
                        variants={fadeUp}
                        src={aboutImg}
                        alt=""
                        className="rounded-2xl shadow-lg w-full"
                    />

                    <div variants={fadeUp}>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                            Who We Are
                        </h2>
                        <div className="flex mb-6">
                            <img src={line5} alt="" className="w-32 sm:w-78" />
                        </div>

                        <p className="text-gray-600 text-base sm:text-xl leading-relaxed">
                            We are a dedicated and professional cleaning company committed to delivering exceptional cleaning services that meet the highest standards of quality, safety, and customer satisfaction. With a strong passion for cleanliness and hygiene, we focus on transforming homes, offices, and commercial spaces into spotless, healthy, and welcoming environments.

                            Our company was built on the belief that a clean space is not just about appearance, but about improving the overall well-being, productivity, and comfort of the people who use it.
                            <br /><br />
                            That is why we go beyond basic cleaning. We provide deep, detailed, and reliable cleaning solutions tailored to the unique needs of each client.

                            We combine modern cleaning techniques with eco-friendly products and advanced equipment to ensure effective results without harming the environment.
                            <br /><br />
                            Our team of trained and experienced professionals is committed to excellence, attention to detail, and consistent service delivery.

                            Over time, we have earned the trust of many clients by maintaining integrity, professionalism, and reliability in everything we do.
                        </p>
                    </div>
                </div>

                {/* WHY WE ARE HERE */}
                <div className="max-w-[85%]  mx-auto px-6 py-16 text-center">

                    <div variants={fadeUp}>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                            Why We Are Here
                        </h2>

                        <div className="flex justify-center mb-6">
                            <img src={line5} alt="" className="w-32 sm:w-78" />
                        </div>

                        <p className="text-gray-600 text-base sm:text-xl text-left leading-relaxed">
                            We are here because we believe that every space deserves to be clean, safe, and comfortable. In today’s fast-paced world, people are often too busy to maintain the level of cleanliness their homes and workplaces truly need.

                            That is where we come in to bridge the gap between busy lifestyles and a healthy, well maintained environment.

                            Our purpose is simple but powerful: to create cleaner spaces that improve the quality of life for our clients.
                            <br /><br />
                            A clean environment is not just about appearance, it directly impacts health, productivity, mood, and overall well-being.

                            We exist to make that difference visible in every home, office, and commercial space we serve.

                            We are also here to raise the standard of cleaning services by delivering professionalism, consistency, and attention to detail in everything we do.

                            We do not believe in shortcuts or average results. Instead, we are committed to excellence, using modern cleaning techniques, safe products, and well-trained staff to achieve outstanding results every time.

                            Beyond cleaning, we are here to bring peace of mind. Our clients trust us to handle their spaces with care, and we take that responsibility seriously.

                            Ultimately, we are here to make life easier, healthier, and more comfortable for the people we serve.
                        </p>
                    </div>
                </div>

                {/* WHY WE EXIST */}
                <div className="max-w-[85] mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">

                    <img
                        variants={fadeUp}
                        src={aboutImg}
                        alt=""
                        className="rounded-2xl shadow-lg w-full"
                    />

                    <div variants={fadeUp}>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">
                            Why We Exist
                        </h2>

                        <div className="flex justify-center md:justify-start mb-6">
                            <img src={line5} alt="" className="w-32 sm:w-78" />
                        </div>

                        <p className="text-gray-600 text-base sm:text-xl leading-relaxed">
                            We exist to make cleanliness simple, accessible, and reliable for everyone.

                            In a world where time is limited, maintaining a clean environment has become a challenge. We solve that by delivering dependable services people can trust.
                            <br /><br />
                            We believe cleanliness is not a luxury, it is a necessity. It improves health, reduces stress, and boosts productivity.
                            <br /><br />
                            Our purpose goes beyond cleaning. We restore comfort, order, and freshness to every space we touch.
                        </p>
                    </div>
                </div>

                {/* WHAT DRIVES US */}
                <div className="max-w-[85%] mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">

                    <img
                        variants={fadeUp}
                        src={aboutImg}
                        alt=""
                        className="rounded-2xl shadow-lg w-full"
                    />

                    <div variants={fadeUp}>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">
                            What Drives Us
                        </h2>

                        <div className="flex justify-center md:justify-start mb-6">
                            <img src={line5} alt="" className="w-32 sm:w-78" />
                        </div>

                        <p className="text-gray-600 text-base sm:text-xl leading-relaxed">
                            Whether it is a home, office, or commercial property, we aim to transform environments into places where people feel relaxed, productive, and proud.

                            We also exist to set a higher standard in the cleaning industry through professionalism, honesty, and attention to detail.
                            <br /><br />
                            Every service we provide is guided by our commitment to excellence and customer satisfaction.
                            <br /><br />
                            Ultimately, we aim to make a difference—one clean space at a time.
                        </p>
                    </div>
                </div>

                {/* STATS */}
                <div className="bg-blue-950 text-white py-16">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {stats.map((s, i) => (
                            <div key={i} variants={fadeUp}>
                                <h2 className="text-3xl sm:text-4xl font-bold">{s.number}</h2>
                                <p className="text-gray-200 mt-2">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TEAM */}
                <div className="py-20 w-full">
                    <div className="w-full lg:ml-53 mx-auto px-6 ">

                        <div className="lg:-ml-105">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                                Meet Our Team
                            </h2>

                            <p className="text-gray-500 max-w-2xl mx-auto text-center mb-12">
                                Our professional cleaning team is dedicated to delivering quality,
                                reliability, and exceptional service every time.
                            </p>
                        </div>

                        {staff.length === 0 ? (
                            <p className="text-gray-400">No staff available</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                                {staff.map((s) => (
                                    <div
                                        key={s._id}
                                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
                                    >
                                        <div className="w-full h-[600px] overflow-hidden">
                                            <img
                                                src={s.image}
                                                alt={s.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                            />
                                        </div>

                                        <div className="p-5">
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {s.name}
                                            </h3>
                                            <p className="text-sm text-blue-500 mt-1">
                                                {s.role}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}