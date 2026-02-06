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
  Building2,
  Star,
  TrendingUp,
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] lg:min-h-[92vh] flex overflow-hidden">
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

          {/* Enhanced Multi-Layer Gradient Overlay for Maximum Text Visibility */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/50 to-transparent"></div>

          {/* Vignette Effect for More Text Contrast */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
        </div>

        <div className="container-custom relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16  min-h-[85vh] md:min-h-[90vh] lg:min-h-[92vh] py-8">
            {/* Left Content - Enhanced with Better Contrast */}
            <div className="space-y-6 md:space-y-8 animate-slide-up">
              {/* Top Badge - Professional Trust Signal */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#44AB7E] to-[#359163] backdrop-blur-sm px-4 py-2.5 rounded-full shadow-xl border border-white/30">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
                <span className="text-xs md:text-sm font-bold text-white">
                  Trusted Healthcare Infrastructure Partner
                </span>
              </div>

              {/* Main Heading - Maximum Contrast with Text Shadow */}
              <div className="space-y-3 md:space-y-4">
                <h1
                  className="text-4xl sm:text-5xl md:text-5xl font-black text-white leading-tight"
                  style={{
                    textShadow:
                      "0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.7)",
                  }}
                >
                  GITA MEDILINE
                  <span className="block mt-2 bg-gradient-to-r from-[#44AB7E] to-[#5bc093] bg-clip-text">
                    SERVICES
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl text-yellow-500 font-black italic">
                  Powering Hospital Lifelines...
                </p>
              </div>

              {/* Value Proposition - Clear and Concise */}
              <div className="bg-white/10 backdrop-blur-md   shadow-2xl">
                <p
                  className="text-base sm:text-lg md:text-xl text-white font-semibold leading-relaxed"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  Complete{" "}
                  <span className="text-[#44AB7E] font-bold">
                    Medical Gas Pipeline Systems (MGPS)
                  </span>{" "}
                  &
                  <span className="text-[#44AB7E] font-bold">
                    {" "}
                    Modular Operation Theatres
                  </span>{" "}
                  - Installation, Maintenance & HTM 02-01 Compliant Solutions
                </p>
              </div>

              {/* <div className="flex flex-col xs:flex-row gap-2 md:gap-3">
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
              </div> */}
              {/* Certification Badges - Enhanced Visibility */}
              <div className="grid md:hidden grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-white/20 shadow-lg">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-300 flex-shrink-0" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-white">
                    HTM 02-01
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-white/20 shadow-lg">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-300 flex-shrink-0" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-white">
                    ISO 9001:2015
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-white/20 shadow-lg">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-purple-300 flex-shrink-0" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-white">
                    CE Certified
                  </span>
                </div>
              </div>

              {/* CTA Buttons - Prominent and Action-Oriented */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+917067534498"
                  className="group bg-gradient-to-r from-[#44AB7E] to-[#359163] hover:from-[#359163] hover:to-[#44AB7E] text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-[#44AB7E]/50 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/20 hover:scale-105"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                  <span className="text-base md:text-lg">
                    Call Now: +91 70675 34498
                  </span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-lg"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-lg"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-lg"></div>
                  </div>
                  <span
                    className="text-sm md:text-base text-white font-semibold"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                  >
                    50+ Hospitals Trust Us
                  </span>
                </div>

                <div className="h-6 w-px bg-white/30"></div>

                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#44AB7E]" />
                  <span
                    className="text-sm md:text-base text-white font-semibold"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                  >
                    10+ Years Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Stats/Features Card (Hidden on Mobile for cleaner look) */}
            <div className="hidden lg:flex flex-col gap-6 animate-slide-up animation-delay-500">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-2xl">
                <h3
                  className="text-2xl font-bold text-white mb-6"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                >
                  Why Choose Us?
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#44AB7E] to-[#359163] p-3 rounded-xl shadow-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        HTM 02-01 Certified
                      </h4>
                      <p className="text-sm text-gray-200">
                        Authorized personnel for medical gas systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#44AB7E] to-[#359163] p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        Complete Compliance
                      </h4>
                      <p className="text-sm text-gray-200">
                        ISO 9001:2015 & CE certified solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#44AB7E] to-[#359163] p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        24/7 Support
                      </h4>
                      <p className="text-sm text-gray-200">
                        Round-the-clock maintenance & emergency service
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#44AB7E] to-[#359163] p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        Turnkey Solutions
                      </h4>
                      <p className="text-sm text-gray-200">
                        From design to installation & maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators - Enhanced Visibility */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full border-2 ${
                currentSlide === index
                  ? "w-12 h-3 bg-white border-white shadow-xl"
                  : "w-3 h-3 bg-white/40 border-white/60 hover:bg-white/70 hover:scale-125"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator - Enhanced */}
        <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex z-30">
          <div className="flex flex-col items-center gap-2 text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            <span className="text-xs font-bold tracking-wide">SCROLL DOWN</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
