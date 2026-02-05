"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Award,
  Shield,
  CheckCircle,
  ArrowRight,
  Wrench,
  Activity,
  Zap,
  Mail,
} from "lucide-react";
import Image from "next/image";
import banner1 from "../assets/banner/banner.jpeg";

// import banner3 from "../assets/banner/banner3.jpeg";
import banner4 from "../assets/banner/banner6.jpeg";
import banner5 from "../assets/banner/banner7.jpeg";
import Link from "next/link";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    // banner1.src,
    // banner3.src,
    banner4.src,
    banner5.src,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-[75vh] flex overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Image Carousel */}
          <div className="absolute inset-0">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url('${img}')`,
                }}
              ></div>
            ))}
          </div>

          {/* Enhanced Gradient Overlay - Better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/75 to-gray-900/90 md:bg-gradient-to-r md:from-gray-900 md:via-gray-900/75 md:to-transparent"></div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-2.5 md:bottom-16  left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-8 h-2.5 bg-white shadow-lg"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container-custom relative z-20  ">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 py-10 min-h-[60vh] md:min-h-[70vh]">
            {/* Left Content - Reorganized for Mobile */}
            <div className="space-y-4 md:space-y-6 animate-slide-up">
              {/* Top Badge - Simplified for Mobile */}
              {/* <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2.5 rounded-full shadow-lg border border-blue-100">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">
                  ISO 9001:2015 & CE Certified
                </span>
              </div> */}

              {/* Main Heading - Better spacing */}
              <div className="space-y-2 md:space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  GITA MEDILINE
                  <span className="block mt-1">SERVICES</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-semibold italic">
                  Powering Hospital Lifelines...
                </p>
              </div>

              {/* Description - More concise for mobile */}
              <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-xl">
                Complete Medical Gas Pipeline Systems (MGPS) installation,
                maintenance, and HTM 02-01 compliant solutions for hospitals.
              </p>

              {/* Certification Badges - Stacked on small mobile */}
              <div className="flex flex-col xs:flex-row gap-2 md:gap-3">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-white/20 shadow-lg">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-cyan-300 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-white">
                    HTM 02-01 Certified
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-white/20 shadow-lg">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-300 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-white">
                    Authorised Person (AP-MGPS)
                  </span>
                </div>
              </div>

              {/* CTA Buttons - Side by side on mobile, improved styling */}
              <div className="flex flex-row gap-3 pt-2">
                {/* <Link
                  href="/contact"
                  className="flex-1 sm:flex-none btn-hero-primary group"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden xs:inline">Contact Us</span>
                  <span className="xs:hidden">Contact</span>
                </Link> */}
                <a
                  href="tel:+917067534498"
                  className="flex-1 sm:flex-none  group"
                  id="btn-hero-call"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
           
          </div>
        </div>

        {/* Scroll Indicator - Hidden on very small mobile */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:flex">
          <div className="flex flex-col items-center gap-1 text-white/80">
            <span className="text-xs font-medium">Scroll Down</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Sticky Mobile WhatsApp Button */}
    
    </div>
  );
};

export default Hero;
