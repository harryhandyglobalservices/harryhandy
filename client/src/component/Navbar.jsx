import { useState, useEffect } from "react"
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaSearch,
    FaShoppingCart,
    FaUsers
} from "react-icons/fa"
import { FiChevronDown } from "react-icons/fi"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

    const navigate = useNavigate()
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate(`/search?q=${search}`);
        }
    };
    // Sticky on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="w-full  z-9998 relative">

            {/* ================= SEARCH OVERLAY ================= */}
            <div
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                <div className="bg-blue-900 rounded-t-2xl py-4 px-4 md:px-10 flex items-center justify-between shadow-lg">

                    <div className="flex items-center w-full max-w-3xl mx-auto">
                        <div className="bg-gray-100 px-4 py-4 flex items-center">
                            <FaSearch className="text-black" />
                        </div>

                        <input
                            type="text"
                            placeholder="Search Here"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleSearch}
                            className="w-full px-4 py-3 outline-none bg-gray-200"
                        />
                    </div>

                    <button
                        onClick={() => setSearchOpen(false)}
                        className="ml-4 bg-blue-400 px-4 py-2 text-white text-2xl"
                    >
                        ×
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button onClick={() => setMenuOpen(false)} className="text-3xl">×</button>
                </div>

                <ul className="flex flex-col gap-4 p-6 text-lg font-semibold">

                    <li className="cursor-pointer">Home</li>

                    {/* ABOUT */}
                    <li>
                        <div
                            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            About
                            <span>{mobileAboutOpen ? "−" : "+"}</span>
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? "max-h-40 mt-2" : "max-h-0"
                                }`}
                        >
                            <ul className="pl-4 text-gray-600 text-sm flex flex-col gap-2">
                                <li onClick={() => navigate('/our-company')} className="px-4  hover:bg-blue-100">Our Company</li>
                                <li onClick={() => navigate('/our-goals')} className="px-4  hover:bg-blue-100">Goals & Objectives</li>
                                <li onClick={() => navigate('/mission-vision')} className="px-4  hover:bg-blue-100">Mission & Vision</li>
                            </ul>
                        </div>


                    </li>

                    {/* SERVICES */}
                    <li>
                        <div
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            Services
                            <span>{mobileServicesOpen ? "−" : "+"}</span>
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-60 mt-2" : "max-h-0"
                                }`}
                        >
                            <ul className="pl-4 text-gray-600 text-sm flex flex-col gap-2">
                                <li onClick={() => navigate('/post-construction')} className="px-4  hover:bg-blue-100">Post Construction Cleaning </li>
                                <li onClick={() => navigate('/deep-cleaning')} className="px-4  hover:bg-blue-100">Deep Cleaning </li>
                                <li onClick={() => navigate('/move-cleaning')} className="px-4  hover:bg-blue-100">Move In & Move Out Cleaning</li>
                                <li onClick={() => navigate('/weekly-cleaning')} className="px-4  hover:bg-blue-100">Weekly Housekeeping Services</li>
                                <li onClick={() => navigate('/floor-wash')} className="px-4  hover:bg-blue-100">Floor Wash</li>
                                <li onClick={() => navigate('/carpet')} className="px-4  hover:bg-blue-100">Capet & Chair Wash</li>
                                <li onClick={() => navigate('/fumigation')} className="px-4  hover:bg-blue-100">Fumigation & Pest Control Services</li>
                                <li onClick={() => navigate('/house-keeping')} className="px-4  hover:bg-blue-100">Housekeeping & Sanitation Training</li>
                            </ul>
                        </div>
                    </li>

                    <li onClick={() => navigate('/blog-page')} className="hover:text-blue-400 cursor-pointer">Blog</li>
                    <li onClick={() => navigate('/contact-page')} className="hover:text-blue-400 cursor-pointer">Contact</li>

                </ul>

                <button onClick={() => navigate('/booking-page')} className="block ml-3 md:hidden cursor-pointer bg-blue-600 text-white px-3 py-3 rounded-lg text-sm font-bold">
                    Book Now →
                </button>
            </div>

            {/* BACKDROP */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                />
            )}

            {/* ================= TOP BAR ================= */}
            <div className="bg-blue-900 text-white py-3">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 text-sm lg:text-lg">
                    <span className="flex items-center gap-2">
                        <FaPhoneAlt /> <span className="hidden lg:block">+2347066443195</span>
                    </span>

                    <span className="flex items-center gap-2">
                        <FaEnvelope />  <span className="hidden lg:block">harryhandyglobalservices21@gmail.com</span>
                    </span>

                    <span className="flex items-center gap-2">
                        <FaMapMarkerAlt />  <span className="hidden lg:block">Lagos, Nigeria</span>
                    </span>

                    <div>Mon - Fri : 09:00 - 05:00</div>
                </div>
            </div>

            {/* ================= MAIN NAV ================= */}
            <nav
                className={`bg-gray-50   text-gray-800 transition-all duration-300 ${isSticky ? "fixed  top-0 left-0 w-full shadow-xl z-40" : ""
                    }`}
            >
                <div className="w-full mx-auto flex items-center justify-between px-4 md:px-16 ">

                    {/* LOGO */}
                    <img onClick={() => navigate('/')} className="w-24 cursor-pointer md:w-30" src={logo} alt="logo" />

                    {/* DESKTOP NAV */}
                    <ul className="hidden lg:flex gap-8 items-center text-2xl font-bold">

                        <li onClick={() => navigate('/')} className="hover:text-blue-400 cursor-pointer">Home</li>

                        {/* ABOUT */}
                        <li
                            className="relative"
                            onMouseEnter={() => setAboutOpen(true)}
                            onMouseLeave={() => setAboutOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
                                About <FiChevronDown />
                            </div>

                            <div className={`absolute top-8 left-0 bg-gray-50 cursor-pointer rounded shadow-lg w-48 transition-all duration-300
              ${aboutOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                                <ul className="text-lg">
                                    <li onClick={() => navigate('/our-company')} className="px-4 py-3 hover:bg-blue-100">Our Company</li>
                                    <li onClick={() => navigate('/our-goals')} className="px-4 py-3 hover:bg-blue-100">Goals & Objectives</li>
                                    <li onClick={() => navigate('/mission-vision')} className="px-4 py-3 hover:bg-blue-100">Mission & Vision</li>
                                </ul>
                            </div>
                        </li>

                        {/* SERVICES */}
                        <li
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
                                Services <FiChevronDown />
                            </div>

                            <div className={`absolute top-8 left-0 bg-gray-50 cursor-pointer rounded shadow-lg w-86 transition-all duration-300
              ${servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                                <ul className="text-lg">
                                    <li onClick={() => navigate('/post-construction')} className="px-4 py-3 hover:bg-blue-100">Post Construction Cleaning </li>
                                    <li onClick={() => navigate('/deep-cleaning')} className="px-4 py-3 hover:bg-blue-100">Deep Cleaning </li>
                                    <li onClick={() => navigate('/move-cleaning')} className="px-4 py-3 hover:bg-blue-100">Move In & Move Out Cleaning</li>
                                    <li onClick={() => navigate('/weekly-cleaning')} className="px-4 py-3 hover:bg-blue-100">Weekly Housekeeping Services</li>
                                    <li onClick={() => navigate('/floor-wash')} className="px-4 py-3 hover:bg-blue-100">Floor Wash</li>
                                    <li onClick={() => navigate('/carpet')} className="px-4 py-3 hover:bg-blue-100">Capet & Chair Wash</li>
                                    <li onClick={() => navigate('/fumigation')} className="px-4 py-3 hover:bg-blue-100">Fumigation & Pest Control Services</li>
                                    <li onClick={() => navigate('/house-keeping')} className="px-4 py-3 hover:bg-blue-100">Housekeeping & Sanitation Training</li>


                                </ul>
                            </div>
                        </li>

                        <li onClick={() => navigate('/blog-page')} className="hover:text-blue-400 cursor-pointer">Blog</li>
                        <li onClick={() => navigate('/contact-page')} className="hover:text-blue-400 cursor-pointer">Contact</li>
                    </ul>

                    {/* RIGHT ICONS */}
                    <div className="flex items-center text-xl md:text-2xl gap-6 md:gap-6">

                        <FaSearch onClick={() => setSearchOpen(true)} className="cursor-pointer" />





                        {/* MOBILE MENU BUTTON */}
                        <div
                            onClick={() => setMenuOpen(true)}
                            className="lg:hidden cursor-pointer text-2xl"
                        >
                            ☰
                        </div>

                        {/* BUTTON */}
                        <button onClick={() => navigate('/booking-page')} className="hidden md:block cursor-pointer bg-blue-600 text-white px-5 py-4 rounded-lg text-xl md:text-base font-bold">
                            Book Now →
                        </button>

                    </div>

                </div>
            </nav>

        </header>
    )
}