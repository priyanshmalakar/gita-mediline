"use client";
import { useState, useEffect } from "react";
import {
  Building2,
  Wind,
  Sparkles,
  Activity,
  Zap,
  Settings,
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Heart,
  Layout,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import modularOT from "../../assets/bg-banner/modularOT.jpg";
import modularOT1 from "../../assets/carousalImages/modularOT2.jpeg";
import modularOT2 from "../../assets/carousalImages/modularOT3.jpeg";
import modularOTComponent from "../../assets/carousalImages/modularOTComponent.png";
import modularStandards from "../../assets/carousalImages/modularStandards.png";
const ModularOTPage = () => {
  const coreComponents = [
    "Modular wall & ceiling panels",
    "Laminar airflow systems",
    "HEPA filtration (H13 / H14)",
    "Pressure differential control",
    "OT control panels",
    "Medical gas & pendants integration",
    "Electrical & backup systems",
    "Data & nurse call systems",
  ];

  const infectionControl = [
    { icon: Wind, title: "Laminar Airflow", desc: "Vertical/horizontal flow" },
    {
      icon: Sparkles,
      title: "HEPA Filtration",
      desc: "99.97% particle removal",
    },
    {
      icon: AlertCircle,
      title: "Positive Pressure",
      desc: "Contamination prevention",
    },
    { icon: Settings, title: "Air Changes", desc: "Controlled rates" },
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

  const carouselImages = [modularOT1, modularOT2];
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#005B77] to-[#003d52] text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${modularOT.src})`,
                filter: "brightness(0.75) contrast(1.1)",
              }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Building2 className="w-4 h-4" />
              Modular OT Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Modular Operation Theatre
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Engineered for Sterility. Designed for Precision Surgery.
            </p>
          </div>
        </div>
      </section>

      {/* What is Modular OT - Left Content, Right Image */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Heart className="w-4 h-4" />
                    What is Modular OT?
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Controlled Surgical Environment
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    A Modular OT is a{" "}
                    <strong>
                      controlled surgical environment, not just a room
                    </strong>
                    .
                  </p>
                  <p className="text-lg leading-relaxed">
                    Every surface, airflow pattern, and utility connection
                    exists to reduce infection risk, maintain sterile pressure
                    zones, and support surgical precision.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                    <p className="text-lg font-bold text-red-900">
                      Poor OT design increases post-operative infection rates.
                      We design to prevent that.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="order-2 lg:order-1 relative">
                  {/* Carousel Container */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    {/* Images */}
                    <div
                      className="flex transition-transform duration-500 ease-out"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components - Right Content, Left Image */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Image */}
              <div className=" rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full ">
                  <img
                    src={modularOTComponent.src}
                    alt="Leader"
                    className=" "
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Settings className="w-4 h-4" />
                    Components
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Core Components
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Each component is engineered as part of one system, not
                    isolated items.
                  </p>
                </div>

                <ul className="space-y-3">
                  {coreComponents.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards - Left Content, Right Image */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Shield className="w-4 h-4" />
                    Quality Standards
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Standards & Quality
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">
                        NABH-aligned OT infrastructure
                      </p>
                      <p className="text-sm text-gray-600">
                        Meeting national accreditation requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">
                        Sterility-focused material selection
                      </p>
                      <p className="text-sm text-gray-600">
                        Antimicrobial surfaces throughout
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">
                        Tested airflow & pressure validation
                      </p>
                      <p className="text-sm text-gray-600">
                        Comprehensive testing protocols
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">
                        Documented commissioning reports
                      </p>
                      <p className="text-sm text-gray-600">
                        Complete validation documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className=" rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full ">
                 <img
                 src={modularStandards.src}
                 alt=""
                 className=""
                 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us for Modular OT?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Activity className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900 mb-2">
                  Specialized OT Team
                </p>
                <p className="text-sm text-gray-600">
                  Expert team with surgical environment expertise
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Heart className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900 mb-2">
                  Surgical Workflow Understanding
                </p>
                <p className="text-sm text-gray-600">
                  Design based on real surgical procedures
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Zap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900 mb-2">
                  MGPS + OT Integration
                </p>
                <p className="text-sm text-gray-600">
                  Seamless medical gas system coordination
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Settings className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900 mb-2">
                  Long-Term Performance
                </p>
                <p className="text-sm text-gray-600">
                  Designed for reliability and maintenance
                </p>
              </div>
            </div>

            <div className="mt-10 bg-cyan-800  text-white p-6 rounded-xl">
              <p className="text-xl font-bold text-white">
                We don't sell OT panels. We deliver functional surgical
                environments.
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
              Planning a New OT or Upgrading an Existing One?
            </h2>
            <p className="text-lg text-blue-100">
              Get a solution designed for surgeons, not sales brochures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn-hero-solid-secondary">
                <Phone className="w-5 h-5" />
                Request Modular OT Consultation
              </Link>
              <Link href="/mgps" className="btn-outline">
                <ArrowRight className="w-5 h-5" />
                Medical Gas Pipeline Systems
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModularOTPage;
