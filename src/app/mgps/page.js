"use client";
import { useState, useEffect } from "react";
import {
  Activity,
  Shield,
  CheckCircle,
  AlertCircle,
  Droplets,
  Wind,
  Wrench,
  FileCheck,
  Phone,
  ArrowRight,
  Heart,
  Zap,
  Settings,
  Layout,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mgps from "../../assets/bg-banner/mgps.jpeg";
import banner from "../../assets/banner/banner.png";
import standard from "../../assets/componentBanner/standard.png"
const MGPSPage = () => {
  const scopeOfWork = [
    "MGPS system design & engineering layouts",
    "Oxygen, Medical Air, Vacuum & AGSS pipeline networks",
    "Medical-grade copper pipeline installation",
    "Brazing with nitrogen purging",
    "Zone valve boxes & terminal units",
    "Alarm & monitoring systems",
    "Pressure testing, purging & commissioning",
    "As-built drawings & compliance documentation",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, []);

  const medicalGases = [
    { name: "Oxygen (O₂)", icon: Activity },
    { name: "Medical Air (4 bar & 7 bar)", icon: Wind },
    { name: "Vacuum", icon: Settings },
    { name: "Nitrous Oxide (N₂O)", icon: Droplets },
    { name: "AGSS", icon: AlertCircle },
    { name: "Carbon Dioxide (CO₂)", icon: Zap },
  ];

  const carouselImages = [
    "/carousalImages/service1.jpeg",
    "/carousalImages/service2.jpeg",
    "/carousalImages/service3.jpeg",
    "/carousalImages/service4.jpeg",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#005B77] to-[#003d52] text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 ">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${mgps.src})`,
              filter: "brightness(0.75) contrast(1.1)",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Activity className="w-4 h-4" />
              MGPS Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Medical Gas Pipeline Systems
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Safe. Compliant. Life-Critical Infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* What is MGPS - Left Content, Right Image */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Heart className="w-4 h-4" />
                    What is MGPS?
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Critical Life-Support Systems
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Medical Gas Pipeline Systems (MGPS) are{" "}
                    <strong>critical life-support systems</strong> that ensure
                    uninterrupted delivery of medical gases across hospitals.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Any design flaw, contamination, or pressure failure can
                    directly risk patient lives — which is why MGPS is not a
                    generic MEP service.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-lg font-bold text-blue-900">
                      We treat MGPS as a safety system, not just piping.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="w-full">
                <div className="  relative">
                  <img
                    src={banner.src}
                    alt="Leader"
                    className="w-[90%] h-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work - Right Content, Left Image */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  {/* Images */}
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="min-w-full">
                        <Image
                          src={image}
                          alt={`Service ${index + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-[300px] md-h-[400px] object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentSlide === index
                            ? "bg-white w-8"
                            : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Wrench className="w-4 h-4" />
                    Our Services
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    MGPS Scope of Work
                  </h2>
                  <p className="text-gray-600 mb-6">
                    No shortcuts. No guesswork.
                  </p>
                </div>

                <ul className="space-y-3">
                  {scopeOfWork.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards - Right Content, Left Image */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Image */}
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-emerald-100">
                  <img
                    src={standard.src}
                    alt="Leader"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Shield className="w-4 h-4" />
                    Compliance
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Standards & Compliance
                  </h2>
                  <p className="text-xl font-bold text-gray-900 mb-2">
                    We strictly follow:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-600">
                    <p className="font-bold text-gray-900 mb-1">
                      HTM 02-01 Guidelines
                    </p>
                    <p className="text-sm text-gray-600">
                      UK Health Technical Memorandum standards compliance
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-600">
                    <p className="font-bold text-gray-900 mb-1">
                      NABH-Aligned Infrastructure
                    </p>
                    <p className="text-sm text-gray-600">
                      National Accreditation Board requirements
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-600">
                    <p className="font-bold text-gray-900 mb-1">
                      Medical-Grade Components
                    </p>
                    <p className="text-sm text-gray-600">
                      Certified medical-grade copper and components
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us for MGPS?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-gray-50 p-6 rounded-xl">
                <Shield className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900 mb-2">
                  Zero-Compromise Safety
                </p>
                <p className="text-sm text-gray-600">
                  Every decision prioritizes patient safety
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <FileCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900 mb-2">
                  Clear Documentation
                </p>
                <p className="text-sm text-gray-600">
                  Complete as-built documentation and handover
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <Heart className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900 mb-2">
                  Proven Experience
                </p>
                <p className="text-sm text-gray-600">
                  Successfully delivered across multiple facilities
                </p>
              </div>
            </div>

            <div className="mt-10 bg-cyan-800 text-white p-6 rounded-xl">
              <p className="text-xl font-bold text-white">
                We don't install pipelines. We build reliable oxygen lifelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#005B77] to-[#003d52] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Planning a New Hospital or Upgrading Your MGPS?
            </h2>
            <p className="text-lg text-blue-100">
              Talk to specialists who understand compliance, not contractors who
              experiment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn-hero-solid-secondary">
                <Phone className="w-5 h-5" />
                Request MGPS Consultation
              </Link>
              <Link href="/modularOT" className="btn-outline">
                <ArrowRight className="w-5 h-5" />
                Modular Operation Theatre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MGPSPage;
