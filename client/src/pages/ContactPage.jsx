import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import staff1 from "../assets/staff1.png";
import { Helmet } from "react-helmet";
import API from "../../api";
<Helmet>
    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CleaningService",
            "name": "Shiny Clean",
            "image": "https://yourwebsite.com/logo.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressCountry": "NG",
            },
            "areaServed": "Lagos",
            "telephone": "+2348000000000",
            "url": "https://yourwebsite.com",
            "sameAs": [
                "https://facebook.com/yourpage",
                "https://instagram.com/yourpage"
            ],
        })}
    </script>
</Helmet>

/* ANIMATION */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    // "", "success", "error"

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            const res = await API.post("/contacts", form);

            setStatus("success");

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (err) {
            console.log(err);
            setStatus("error");
        } finally {
            setLoading(false);

            // Reset button text after 3 seconds
            setTimeout(() => {
                setStatus("");
            }, 3000);
        }
    };

    return (
        <section className="w-full bg-white">

            {/* HERO */}
            <div
                className="relative h-[280px] md:h-[420px] bg-cover bg-center flex items-center px-6 md:px-20"
                style={{ backgroundImage: `url(${staff1})` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>

                <div className="relative z-10 w-full flex justify-between items-center">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Contact Us
                        </h1>
                        <p className="text-gray-200 max-w-xl">
                            Get in touch with us for professional cleaning services.
                            We’re ready to make your space spotless.
                        </p>
                    </motion.div>

                    {/* BREADCRUMB */}
                    <div
                        onClick={() => navigate("/")}
                        className="hidden md:block bg-white px-5 py-3 shadow cursor-pointer"
                    >
                        <p className="text-sm font-semibold text-gray-600">
                            HOME <span className="mx-2">|</span>
                            <span className="text-orange-500">CONTACT</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* CONTACT INFO CARDS */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

                {[
                    {
                        icon: <FaPhoneAlt />,
                        title: "Call Us",
                        text: "+2347066443195",
                    },
                    {
                        icon: <FaEnvelope />,
                        title: "Email Us",
                        text: "harryhandyglobalservices21@gmail.com",
                    },
                    {
                        icon: <FaMapMarkerAlt />,
                        title: "Location",
                        text: "Lagos, Nigeria",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-blue-950 p-8 rounded-2xl shadow text-center hover:shadow-lg transition"
                    >
                        <div className="text-white text-2xl mb-4">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-gray-50 text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-50">{item.text}</p>
                    </motion.div>
                ))}
            </div>

            {/* FORM + MAP */}
            <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">

                {/* FORM */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-2xl shadow"
                >
                    <h2 className="text-3xl font-bold mb-6">
                        Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border px-4 py-3 rounded-lg outline-none focus:border-blue-500"
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border px-4 py-3 rounded-lg outline-none focus:border-blue-500"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border px-4 py-3 rounded-lg outline-none focus:border-blue-500"
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full border px-4 py-3 rounded-lg outline-none focus:border-blue-500"
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Sending...
                                </>
                            ) : status === "success" ? (
                                "Message Sent ✅"
                            ) : status === "error" ? (
                                "Failed ❌ Try Again"
                            ) : (
                                "Send Message"
                            )}
                        </button>

                    </form>
                </motion.div>

                {/* MAP / IMAGE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow"
                >
                    {/* Replace with Google Map if needed */}
                    <iframe
                        title="map"
                        src="https://maps.google.com/maps?q=6%2C%20Lanre%20Olumide%20St%2C%20Agungi%20East%20Estate%2C%20Lekki%2C%20Lagos&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full min-h-[400px] border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </motion.div>

            </div>

            {/* CTA */}
            <div className="bg-blue-950 text-white py-20 text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Ready for a Cleaner Space?
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-gray-200 mb-8"
                >
                    Book our professional cleaning services today and experience the difference.
                </motion.p>

                <motion.button
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    onClick={() => navigate("/services")}
                    className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    View Services
                </motion.button>
            </div>

        </section>
    );
}