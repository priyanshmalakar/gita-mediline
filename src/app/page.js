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
} from "lucide-react";
import Image from "next/image";
import banner1 from "../assets/banner/banner.jpeg";
import banner2 from "../assets/banner/banner2.jpeg";
import banner3 from "../assets/banner/banner3.jpeg";
import banner4 from "../assets/banner/banner4.jpg";
import banner5 from "../assets/banner/banner5.jpeg";

const GMSHero = () => {
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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[60vh] flex  overflow-hidden">
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

          {/* Gradient Overlay */}
          <div className="overlay-gradient opacity-95"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/40"></div>
        </div>
        <div className="absolute bottom-20 md:bottom-30 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-8 h-3 bg-white"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container-custom relative z-20 section-padding py-4">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Left Content */}
            <div className="space-y-3 animate-slide-up">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-blue-100">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">
                  ISO 9001:2015 & CE Certified
                </span>
              </div>

              {/* Main Heading */}
              <div>
                {/* <h2 className="text-lg sm:text-xl text-yellow-200 font-semibold  tracking-wide">
                  Medical Gas Pipeline Systems Specialists
                </h2> */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight ">
                  GITA MEDILINE
                  <span className="block ">SERVICES</span>
                </h1>
                <p className="text-xl sm:text-2xl text-yellow-200 font-medium italic ">
                  Gases for Life…
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-100 leading-relaxed max-w-xl">
                Complete Medical Gas Pipeline Systems (MGPS) installation,
                maintenance, and HTM 02-01 compliant solutions for hospitals.
              </p>

              {/* Certification Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg shadow-sm border border-white/20">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium text-white">
                    HTM 02-01 Certified
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg shadow-sm border border-white/20">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium text-white">
                    Authorised Person (AP-MGPS)
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary group">Contact Us</button>
                <a
                  href="tel:+917067534498"
                  className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Visual - Pipeline System */}
            <div className="relative lg:h-[600px] h-96 animate-fade-in hidden lg:block">
              {/* Pipeline Illustration Container */}
              <div className="relative h-full rounded-3xl overflow-hidden ">
                {/* Animated Pipeline Network */}
                <div className="absolute inset-0 flex items-center justify-center ">
                  {/* Central Hub */}
                  <div className="relative">
                    {/* Main Central Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 bg-white/30 backdrop-blur-lg rounded-full flex items-center justify-center border-4 border-white/50">
                        <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center animate-pulse-slow">
                          <Wrench className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Pipes */}
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 400 400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Left Pipe */}
                      <line
                        x1="50"
                        y1="200"
                        x2="150"
                        y2="200"
                        stroke="white"
                        strokeWidth="8"
                        opacity="0.6"
                        strokeDasharray="200"
                        className="animate-dash"
                      />
                      <circle
                        cx="40"
                        cy="200"
                        r="15"
                        fill="white"
                        opacity="0.8"
                        className="animate-pulse-slow"
                      />

                      {/* Right Pipe */}
                      <line
                        x1="250"
                        y1="200"
                        x2="350"
                        y2="200"
                        stroke="white"
                        strokeWidth="8"
                        opacity="0.6"
                        strokeDasharray="200"
                        className="animate-dash animation-delay-500"
                      />
                      <circle
                        cx="360"
                        cy="200"
                        r="15"
                        fill="white"
                        opacity="0.8"
                        className="animate-pulse-slow animation-delay-500"
                      />

                      {/* Top Pipe */}
                      <line
                        x1="200"
                        y1="50"
                        x2="200"
                        y2="150"
                        stroke="white"
                        strokeWidth="8"
                        opacity="0.6"
                        strokeDasharray="200"
                        className="animate-dash animation-delay-1000"
                      />
                      <circle
                        cx="200"
                        cy="40"
                        r="15"
                        fill="white"
                        opacity="0.8"
                        className="animate-pulse-slow animation-delay-1000"
                      />

                      {/* Bottom Pipe */}
                      <line
                        x1="200"
                        y1="250"
                        x2="200"
                        y2="350"
                        stroke="white"
                        strokeWidth="8"
                        opacity="0.6"
                        strokeDasharray="200"
                        className="animate-dash animation-delay-1500"
                      />
                      <circle
                        cx="200"
                        cy="360"
                        r="15"
                        fill="white"
                        opacity="0.8"
                        className="animate-pulse-slow animation-delay-1500"
                      />

                      {/* Diagonal Pipes */}
                      {/* <line
                        x1="280"
                        y1="120"
                        x2="230"
                        y2="170"
                        stroke="white"
                        strokeWidth="6"
                        opacity="0.5"
                        strokeDasharray="150"
                        className="animate-dash animation-delay-700"
                      />
                      <circle
                        cx="290"
                        cy="110"
                        r="12"
                        fill="white"
                        opacity="0.7"
                        className="animate-pulse-slow animation-delay-700"
                      />

                      <line
                        x1="120"
                        y1="120"
                        x2="170"
                        y2="170"
                        stroke="white"
                        strokeWidth="6"
                        opacity="0.5"
                        strokeDasharray="150"
                        className="animate-dash animation-delay-1200"
                      />
                      <circle
                        cx="110"
                        cy="110"
                        r="12"
                        fill="white"
                        opacity="0.7"
                        className="animate-pulse-slow animation-delay-1200"
                      /> */}
                    </svg>

                    {/* Gas Type Labels */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-lg rounded-lg px-3 py-2 border border-white/30">
                      <div className="text-white font-semibold text-xs">
                        O₂ - Oxygen
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-lg rounded-lg px-3 py-2 border border-white/30">
                      <div className="text-white font-semibold text-xs">
                        N₂O - Nitrous Oxide
                      </div>
                    </div>

                    <div className="absolute top-1/2 left-8 -translate-y-1/2 bg-white/20 backdrop-blur-lg rounded-lg px-3 py-2 border border-white/30">
                      <div className="text-white font-semibold text-xs">
                        Air
                      </div>
                    </div>

                    <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-white/20 backdrop-blur-lg rounded-lg px-3 py-2 border border-white/30">
                      <div className="text-white font-semibold text-xs">
                        Vacuum
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="border border-white/20"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <span className="text-xs font-medium">Scroll Down</span>
            <svg
              className="w-6 h-6"
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
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Tooltip on hover - desktop only */}
        <span className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
      <style jsx>{`
        @keyframes carouselFade {
          0%,
          20% {
            opacity: 1;
          }
          25%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GMSHero;
