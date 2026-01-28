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
import banner1 from "../assets/banner/banner7.jpeg";
import banner2 from "../assets/banner/banner2.jpeg";
import banner3 from "../assets/banner/banner3.jpeg";
import banner4 from "../assets/banner/banner4.jpg";
import banner5 from "../assets/banner/banner5.jpeg";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    banner1.src,
    banner2.src,
    banner3.src,
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
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-900/75 to-gray-900/90 md:bg-gradient-to-r md:from-blue-900/80 md:via-blue-900/60 md:to-transparent"></div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
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
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2.5 rounded-full shadow-lg border border-blue-100">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">
                  ISO 9001:2015 & CE Certified
                </span>
              </div>

              {/* Main Heading - Better spacing */}
              <div className="space-y-2 md:space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  GITA MEDILINE
                  <span className="block mt-1">SERVICES</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-semibold italic">
                  Life Support Systems...
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
                <a
                  href="#contact"
                  className="flex-1 sm:flex-none btn-hero-primary group"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden xs:inline">Contact Us</span>
                  <span className="xs:hidden">Contact</span>
                </a>
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
            {/* Right Visual - Pipeline System - Professional Design */}
            <div className="relative h-96 lg:h-[400px] animate-fade-in hidden lg:block">
              {/* Pipeline Illustration Container */}
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Animated Pipeline Network */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central Hub */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Main Central Circle */}
                    <div className="relative z-10">
                      <div className="w-40 h-40 bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/40 shadow-2xl">
                        <div className="w-28 h-28 bg-white/30 rounded-full flex items-center justify-center">
                          <Wrench className="w-12 h-12 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </div>

                    {/* Pipeline SVG - Clean and Organized */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 500 500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Horizontal Lines */}
                      {/* Left Line */}
                      <line
                        x1="80"
                        y1="250"
                        x2="180"
                        y2="250"
                        stroke="white"
                        strokeWidth="6"
                        opacity="0.5"
                      />
                      <circle
                        cx="80"
                        cy="250"
                        r="12"
                        fill="white"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.6;1;0.6"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Right Line */}
                      <line
                        x1="320"
                        y1="250"
                        x2="420"
                        y2="250"
                        stroke="white"
                        strokeWidth="6"
                        opacity="0.5"
                      />
                      <circle
                        cx="420"
                        cy="250"
                        r="12"
                        fill="white"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.6;1;0.6"
                          dur="2s"
                          begin="0.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Vertical Lines */}
                      {/* Top Line */}
                      <line
                        x1="250"
                        y1="80"
                        x2="250"
                        y2="180"
                        stroke="white"
                        strokeWidth="6"
                        opacity="0.5"
                      />
                      <circle
                        cx="250"
                        cy="80"
                        r="12"
                        fill="white"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.6;1;0.6"
                          dur="2s"
                          begin="1s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Bottom Line */}
                      <line
                        x1="250"
                        y1="320"
                        x2="250"
                        y2="420"
                        stroke="white"
                        strokeWidth="6"
                        opacity="0.5"
                      />
                      <circle
                        cx="250"
                        cy="420"
                        r="12"
                        fill="white"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.6;1;0.6"
                          dur="2s"
                          begin="1.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Flow Indicators - Subtle moving dots */}
                      <circle cx="0" cy="250" r="4" fill="white" opacity="0.8">
                        <animate
                          attributeName="cx"
                          values="80;180;80"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle cx="0" cy="250" r="4" fill="white" opacity="0.8">
                        <animate
                          attributeName="cx"
                          values="320;420;320"
                          dur="3s"
                          begin="0.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle cx="250" cy="0" r="4" fill="white" opacity="0.8">
                        <animate
                          attributeName="cy"
                          values="80;180;80"
                          dur="3s"
                          begin="1s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle cx="250" cy="0" r="4" fill="white" opacity="0.8">
                        <animate
                          attributeName="cy"
                          values="320;420;320"
                          dur="3s"
                          begin="1.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Gas Type Labels - Professionally Positioned */}
                    {/* Top - Oxygen */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/25 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/30 shadow-xl">
                      <div className="text-white font-semibold text-sm tracking-wide">
                        O₂ - Oxygen
                      </div>
                    </div>

                    {/* Bottom - Nitrous Oxide */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/25 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/30 shadow-xl">
                      <div className="text-white font-semibold text-sm tracking-wide">
                        N₂O - Nitrous Oxide
                      </div>
                    </div>

                    {/* Left - Medical Air */}
                    <div className="absolute top-1/2 left-12 -translate-y-1/2 bg-white/25 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/30 shadow-xl">
                      <div className="text-white font-semibold text-sm tracking-wide">
                        Medical Air
                      </div>
                    </div>

                    {/* Right - Vacuum */}
                    <div className="absolute top-1/2 right-12 -translate-y-1/2 bg-white/25 backdrop-blur-lg rounded-xl px-4 py-2.5 border border-white/30 shadow-xl">
                      <div className="text-white font-semibold text-sm tracking-wide">
                        Vacuum
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
                    {[...Array(100)].map((_, i) => (
                      <div key={i} className="border border-white/30"></div>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-lg"></div>
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
      <a
        href="https://wa.me/917067534498?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20MGPS%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group animate-pulse-slow"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Tooltip on hover - desktop only */}
        <span className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default Hero;
