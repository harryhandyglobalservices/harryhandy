import React, { useEffect, useState } from "react";
import hero1 from "../assets/hero1.png";
import hero3 from "../assets/hero3.png";
import hero6 from "../assets/hero6.png";
import mob from "../assets/mob.png";
import { useNavigate } from "react-router-dom";

const images = [hero6, hero1, hero3];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [phase, setPhase] = useState("enter");
  const navigate = useNavigate()

  useEffect(() => {
    const enterTime = 700;
    const stayTime = 2000;
    const exitTime = 700;

    setPhase("enter");

    const stayTimer = setTimeout(() => setPhase("stay"), enterTime);
    const exitTimer = setTimeout(() => setPhase("exit"), enterTime + stayTime);
    const nextTimer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, enterTime + stayTime + exitTime);

    return () => {
      clearTimeout(stayTimer);
      clearTimeout(exitTimer);
      clearTimeout(nextTimer);
    };
  }, [current]);

  // SWIPE HANDLERS
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) {
      setCurrent((prev) => (prev + 1) % images.length);
    }

    if (distance < -50) {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-blue-100 flex items-center pt-44 md:pt-0 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* BACKGROUND SHAPES (RESPONSIVE FIXED) */}
      <div className="absolute right-0 md:right-20 lg:right-60 top-0 w-40 md:w-80 lg:w-[30rem] h-screen bg-blue-400/40 bgUnderlay"></div>
      <div className="absolute right-0 md:right-20 lg:right-60 top-0 w-28 md:w-60 lg:w-[20rem] h-screen bg-blue-400/70 bgUnderlay"></div>
      <div className="absolute right-0 md:right-20 lg:right-60 top-0 w-20 md:w-40 lg:w-[15rem] h-screen bg-blue-400 bgUnderlay"></div>

      {/* MOBILE IMAGE (still same design, now responsive) */}
      <img
        className="w-32 sm:w-40 md:w-60 lg:w-100 bottom-110 md:bottom-0 left-0 md:-left-10 absolute animate-floatSwing"
        src={mob}
        alt=""
      />

      {/* MAIN GRID (FIXED RESPONSIVE PADDING) */}
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-60 min-h-screen grid lg:grid-cols-2 grid-cols-1 items-center z-20">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          <div className="animate-fadeUp">
            <p className="text-base sm:text-lg md:text-2xl font-semibold text-gray-500 mb-4">
              DEEP CLEAN, FRESH START
            </p>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-950 mb-6">
              Experience Quality <br className="hidden sm:block" />
              Services for Every Space <br className="hidden sm:block" />
            </h1>

            <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-lg mx-auto lg:mx-0">
              We provide reliable and professional cleaning services designed to keep your home or workspace
              spotless, fresh, and healthy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={()=>navigate('/booking-page')} className="bg-gray-500 hover:bg-gray-600 cursor-pointer text-white px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold transition">
              Book Now →
            </button>

            <button onClick={()=>navigate('/contact-page')} className="bg-blue-800 hover:bg-blue-900 cursor-pointer text-white px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold transition">
              Contact Us →
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="flex justify-center lg:justify-end overflow-hidden px-0 md:px-3 relative w-full pt-0 md:pt-20 mt-10 lg:mt-0">

          <img
            src={images[current]}
            alt="Cleaner"
            className={`w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full  object-cover
              ${phase === "enter" && "animate-slideInBounce"}
              ${phase === "exit" && "animate-slideOutRight"}
              ${phase === "stay" && "animate-slowZoom"}
            `}
          />

        </div>

      </div>
    </section>
  );
}