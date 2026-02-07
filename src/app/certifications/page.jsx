"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Award,
  CheckCircle,
  X,
  FileCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function CertificationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % certifications.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const certifications = [
    {
      id: 1,
      name: "HTM 02-01 Authorised Person",
      description:
        "MGPS Certified Authorised Person for Medical Gas Pipeline Systems",
      image:
        "/certificates/HTM 0201_authorised_person_mgps_certified_page-0001.jpg",
      icon: CheckCircle,
      color: "from-purple-600 to-pink-500",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-50",
      accentColor: "text-purple-700",
    },

    {
      id: 2,
      name: "ISO 9001:2015",
      description:
        "Quality Management System certification for healthcare infrastructure",
      image: "/certificates/Iso9001_2015_page-0001.jpg",
      icon: Award,
      color: "from-emerald-600 to-teal-500",
      borderColor: "border-emerald-500/30",
      bgColor: "bg-emerald-50",
      accentColor: "text-emerald-700",
    },
    {
      id: 3,
      name: "CE Certificate",
      description:
        "European Conformity certification for medical equipment compliance",
      image: "/certificates/CEMarking_page-0001.jpg",
      icon: Shield,
      color: "from-blue-600 to-cyan-500",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-700",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
    setIsPaused(true); // Pause auto-play when user manually navigates
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
    setIsPaused(true); // Pause auto-play when user manually navigates
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsPaused(true); // Pause auto-play when user manually navigates
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-6 md:py-10 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop")`,
            filter: "brightness(0.75) contrast(1.1)",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45"></div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/40 text-white shadow-lg">
              <Shield className="w-4 h-4" />
              Certifications & Accreditations
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              Certified Excellence
            </h1>

            {/* Certifications Badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/40 text-white shadow-md">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">HTM 02-01</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/40 text-white shadow-md">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">ISO 9001:2015</span>
              </div>

              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/40 text-white shadow-md">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">CE Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#005B77]/10 text-[#005B77] px-4 py-2 rounded-full text-sm font-bold">
                <FileCheck className="w-4 h-4" />
                Our Credentials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Industry-Leading Certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recognized by international healthcare and quality management
                organizations
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Main Carousel */}
              <div
                className="relative overflow-hidden rounded-2xl bg-white shadow-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                  }}
                >
                  {certifications.map((cert) => {
                    const Icon = cert.icon;
                    return (
                      <div key={cert.id} className="min-w-full">
                        <div className="flex flex-col gap-6 p-6 md:grid md:grid-cols-2 md:gap-8 md:p-12">
                          {/* Certificate Image - Full width on mobile */}
                          <div className="flex items-center justify-center order-1">
                            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-4 border-gray-100">
                              {/* Certificate Image */}
                              <img
                                src={cert.image}
                                alt={cert.name}
                                className="w-full h-full object-contain bg-white select-none pointer-events-none"
                              />

                              {/* Watermark Overlay */}
                              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                <div className="watermark-grid">
                                  {Array.from({ length: 12 }).map((_, i) => (
                                    <span key={i}>gitamediline.com</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Certificate Info - Below image on mobile */}
                          <div className="flex flex-col justify-center space-y-4 md:space-y-6 order-2">
                            <div>
                              <div
                                className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold ${cert.bgColor} ${cert.accentColor} mb-3 md:mb-4`}
                              >
                                <Icon className="w-3 h-3 md:w-4 md:h-4" />
                                VERIFIED
                              </div>
                              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                                {cert.name}
                              </h3>
                              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                {cert.description}
                              </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-2 md:space-y-3">
                              <div className="flex items-start gap-2 md:gap-3">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#44AB7E] mt-0.5 flex-shrink-0" />
                                <p className="text-sm md:text-base text-gray-700">
                                  Internationally recognized standard
                                </p>
                              </div>
                              <div className="flex items-start gap-2 md:gap-3">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#44AB7E] mt-0.5 flex-shrink-0" />
                                <p className="text-sm md:text-base text-gray-700">
                                  Regular audits and compliance checks
                                </p>
                              </div>
                              <div className="flex items-start gap-2 md:gap-3">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#44AB7E] mt-0.5 flex-shrink-0" />
                                <p className="text-sm md:text-base text-gray-700">
                                  Commitment to excellence and safety
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation Arrows - Larger and better positioned for mobile */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/3 md:top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/3 md:top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                </button>
              </div>

              {/* Carousel Indicators - Larger dots for mobile */}
              <div className="flex justify-center gap-2 md:gap-2 mt-6 md:mt-8">
                {certifications.map((cert, index) => (
                  <button
                    key={cert.id}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 md:h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-10 md:w-8 bg-[#005B77]"
                        : "w-2.5 md:w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to ${cert.name}`}
                  />
                ))}
              </div>

              {/* Thumbnail Navigation - Stacked on mobile, grid on desktop */}
              <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <button
                      key={cert.id}
                      onClick={() => goToSlide(index)}
                      className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${
                        index === activeIndex
                          ? `${cert.borderColor} bg-white shadow-lg md:scale-105`
                          : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="w-5 h-5 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="text-left flex-1">
                          <h4 className="font-bold text-sm md:text-sm text-gray-900">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5 md:hidden">
                            Tap to view
                          </p>
                        </div>
                        {index === activeIndex && (
                          <CheckCircle className="w-5 h-5 text-[#44AB7E] md:hidden" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Certifications Matter Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Our Certifications Matter
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry-recognized credentials that ensure safety, quality, and
                compliance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Safety Assurance",
                  description:
                    "Certified compliance with international safety standards for medical gas systems",
                  color: "from-blue-600 to-cyan-500",
                },
                {
                  icon: Award,
                  title: "Quality Management",
                  description:
                    "ISO 9001:2015 ensures consistent quality in all our healthcare infrastructure projects",
                  color: "from-emerald-600 to-teal-500",
                },
                {
                  icon: CheckCircle,
                  title: "Technical Expertise",
                  description:
                    "HTM 02-01 certification validates our specialized knowledge in MGPS installation and maintenance",
                  color: "from-purple-600 to-pink-500",
                },
              ].map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <BenefitIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-white py-6 md:py-10 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://i.pinimg.com/736x/a2/eb/4a/a2eb4a57014571d9bd3c148fee96ffb3.jpg")`,
            filter: "brightness(0.9) contrast(1.2)",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45"></div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/40 text-white shadow-lg">
              <Building2 className="w-4 h-4" />
              Work With Certified Professionals
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl">
              Partner with a Certified Leader in Healthcare Infrastructure
            </h2>

            <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Our certifications guarantee that every project meets the highest
              standards of safety, quality, and compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn-hero-solid-secondary">
                <Building2 className="w-5 h-5" />
                Contact Us Today
              </Link>
              <Link href="/about" className="btn-outline">
                <Award className="w-5 h-5" />
                Learn About Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
