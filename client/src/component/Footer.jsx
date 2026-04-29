import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,

} from "react-icons/fa6";
import { FaClock, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {


  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/deep-cleaning" }, // or your services page
    { name: "About Us", path: "/our-company" },
    { name: "Blog", path: "/blog-page" },
    { name: "Contact", path: "/contact-page" },
  ];


  {/* SOCIALS */ }
  const socialLinks = [
    { icon: FaFacebookF, url: "https://web.facebook.com/profile.php?id=61576754518148" },
    { icon: FaXTwitter, url: "https://x.com/harryhandy21" },
    { icon: FaInstagram, url: "https://www.instagram.com/harryhandyglobalservices/" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@harry.handy.globa" },
    { icon: FaLinkedin, url: "www.linkedin.com/in/harison-adams-5a1137405" },
  ];




  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const navigate = useNavigate()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer ref={ref} className="w-full bg-[#0f1e36] text-gray-300 pt-14 sm:pt-16">

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >

        {/* TOP GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LEFT */}
          <motion.div variants={item}>

            <img
              onClick={() => navigate('/')}
              className="w-20 sm:w-28 md:w-36 filter brightness-0 invert"
              src={logo}
              alt="logo"
            />

            <p className="text-sm sm:text-base leading-relaxed mt-4 mb-6">
              We are a team of passionate cleaning experts who take pride in delivering
              the highest standard of service. With years of experience, we’ve perfected
              our cleaning methods to ensure every job is done right.
            </p>


            <div className="flex gap-4 text-lg sm:text-xl">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="cursor-pointer hover:text-white"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

          </motion.div>

          {/* COMPANY */}
          <motion.div variants={item}>

            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {menuLinks.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  className="hover:text-white cursor-pointer"
                >
                  <Link to={item.path}>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

          </motion.div>

          {/* SERVICES */}
          <motion.div variants={item}>

            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {[
                "Residential Cleaning",
                "Deep Cleaning",
                "Commercial Cleaning",
                "Carpet and Upholstery Cleaning",
                "Post-Construction Cleaning",
                "Move-In/Move-Out Cleaning",
              ].map((text, i) => (
                <motion.li key={i} whileHover={{ x: 6 }}>
                  {text}
                </motion.li>
              ))}
            </ul>

          </motion.div>

          {/* CONTACT */}
          <motion.div variants={item}>

            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-5 text-sm sm:text-base">

              <motion.div whileHover={{ x: 5 }} className="flex gap-3">
                <FaClock className="text-yellow-400 mt-1" />
                <div>
                  <p className="text-white font-medium">We're Open</p>
                  <p>Mon – Sat 08:00 – 18:00</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Office Location</p>
                  <p>6, Lanre Olumide St, Agungi East Estate, Lekki, Lagos</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex gap-3">
                <FaEnvelope className="text-yellow-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="break-all">
                    harryhandyglobalservices21@gmail.com
                  </p>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-10 py-6 px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base"
        >

          <p className="text-center md:text-left">
            © 2026 HarryHandy Global Services
          </p>

          <div className="flex gap-4 sm:gap-6 mt-3 md:mt-0 text-center">
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
          </div>

        </motion.div>

      </motion.div>

    </footer>
  );
}