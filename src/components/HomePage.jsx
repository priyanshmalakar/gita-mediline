"use client";
import React from "react";
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  Stethoscope,
  Building2,
  Wrench,
  Heart,
  Target,
  TrendingUp,
  FileCheck,
  Clock,
  ArrowRight,
  Zap,
  Activity,
} from "lucide-react";
import modularOTImage from "../assets/banner/banner6.jpeg";
import banner from "../assets/banner/banner.png";
import Link from "next/link";
import OurClients from "./OurClients";

const HomePage = () => {
  const coreServices = [
    {
      icon: Activity,
      title: "Medical Gas Pipeline Systems (MGPS)",
      description:
        "Complete MGPS solutions from design to commissioning, ensuring safe and reliable medical gas delivery.",
      gradient: "from-[#005B77] to-[#003d52]",
    },
    {
      icon: Building2,
      title: "Modular Operation Theatre (MOT)",
      description:
        "Infection-controlled modular OT solutions with integrated medical gas and support systems.",
      gradient: "from-[#44AB7E] to-[#359163]",
    },
    {
      icon: Zap,
      title: "Central Medical Gas Supply Systems",
      description:
        "Advanced central supply systems for oxygen, nitrous oxide, medical air, vacuum, and specialty gases.",
      gradient: "from-[#005B77] to-[#44AB7E]",
    },
    {
      icon: Wrench,
      title: "Medical Gas Equipment Supply & Installation",
      description:
        "Professional supply and installation of medical-grade equipment with HTM 02-01 compliance.",
      gradient: "from-[#44AB7E] to-[#005B77]",
    },
    {
      icon: Target,
      title: "Turnkey Healthcare Infrastructure",
      description:
        "End-to-end healthcare infrastructure solutions for private and government hospitals.",
      gradient: "from-[#005B77] to-[#44AB7E]",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Authorised Person",
      description: "AP – MGPS, HTM 02-01 Certified",
      color: "text-[#005B77]",
      bgColor: "bg-[#005B77]/10",
    },
    {
      icon: Shield,
      title: "ISO 9001:2015 & CE Certified",
      description: "Internationally recognized quality standards",
      color: "text-[#44AB7E]",
      bgColor: "bg-[#44AB7E]/10",
    },
    {
      icon: FileCheck,
      title: "HTM 02-01 Compliant",
      description: "Full compliance with healthcare technical standards",
      color: "text-[#005B77]",
      bgColor: "bg-[#005B77]/10",
    },
    {
      icon: Building2,
      title: "Proven Track Record",
      description: "Experience in private & government hospitals",
      color: "text-[#44AB7E]",
      bgColor: "bg-[#44AB7E]/10",
    },
    {
      icon: Heart,
      title: "Safety-Focused Design",
      description: "Patient safety is our top priority",
      color: "text-[#005B77]",
      bgColor: "bg-[#005B77]/10",
    },
    {
      icon: Clock,
      title: "Disciplined Execution",
      description: "On-time project delivery with quality assurance",
      color: "text-[#44AB7E]",
      bgColor: "bg-[#44AB7E]/10",
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: TrendingUp },
    { number: "50+", label: "Projects Completed", icon: CheckCircle },
    { number: "100%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  return (
    <div className="bg-white">
      {/* About Section - Mobile Optimized Version */}
      <section className="section bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#005B77]/5 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-[#44AB7E]/5 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

        <div className="container-custom relative z-10">
          {/* Section Header - Optimized for Mobile */}
          <div className="text-center max-w-3xl mx-auto  space-y-3 md:space-y-2 px-2">
            <div className="inline-flex items-center gap-2 bg-[#44AB7E]/10 text-[#005B77] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
              <Building2 className="w-3 h-3 md:w-4 md:h-4" />
              About Gita Mediline Services
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Medical Gas & Modular OT
              <span className="block gradient-text mt-1 md:mt-2">
                Infrastructure Specialists
              </span>
            </h2>
          </div>

          <div className="flex  flex-col md:flex-row justify-between gap-6  items-center">
            {/* Left Content - Text & Stats */}
            <div className=" w-full md:w-[60%] md:space-y-6 animate-slide-up order-2 lg:order-1 px-4 md:px-8">
              {/* Company Description */}
              <div className="space-y-3 md:space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  <strong className="text-gray-900">
                    Gita Mediline Services (GMS)
                  </strong>{" "}
                  is a specialised healthcare infrastructure company providing{" "}
                  <strong className="text-[#005B77]">
                    Medical Gas Pipeline Systems (MGPS)
                  </strong>{" "}
                  and{" "}
                  <strong className="text-[#005B77]">
                    Modular Operation Theatre (MOT)
                  </strong>{" "}
                  solutions for hospitals across Madhya Pradesh and Central
                  India.
                </p>

                <p>
                  With <strong className="text-gray-900">5+ years</strong> of
                  focused experience in healthcare infrastructure.
                </p>

                <p className="text-[#44AB7E] font-medium italic text-sm md:text-lg pt-2">
                  "Life Support Systems…" – Our commitment to healthcare
                  excellence
                </p>
              </div>

              {/* Certifications Badges - Mobile Optimized */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                <div className="flex items-center gap-1.5 md:gap-2 bg-[#005B77]/10 text-[#005B77] px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-[#005B77]/20 text-xs md:text-sm">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="font-semibold whitespace-nowrap">
                    ISO 9001:2015
                  </span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 bg-[#44AB7E]/10 text-[#44AB7E] px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-[#44AB7E]/20 text-xs md:text-sm">
                  <Award className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="font-semibold whitespace-nowrap">
                    CE Certified
                  </span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 bg-[#005B77]/10 text-[#005B77] px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-[#005B77]/20 text-xs md:text-sm">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="font-semibold whitespace-nowrap">
                    HTM 02-01
                  </span>
                </div>
              </div>

              {/* CTA Button - Mobile Centered */}
              <div className="pt-2 md:pt-1 text-center lg:text-left">
                <Link
                  href="/clients"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#005B77] to-[#44AB7E] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
                >
                  View Our Clients
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </div>
            </div>

            {/* Right Content - Photo Gallery Grid - Mobile Optimized */}
            <div className="order-1 w-full md:w-[40%] lg:order-2 animate-fade-in md:px-0">
              <div className=" gap-3 md:gap-4">
                {/* Large Featured Image - Responsive Height */}
                <div className="relative group overflow-hidden  cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={banner.src}
                      alt="MGPS Installation - Gita Mediline Services"
                      className="w-full h-full object-contain px-4 md:px-0"
                    />
                  </div>
                 
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-gray-300" />
      {/* Core Services Section - Premium Design */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-4">
            <div className="inline-flex items-center gap-2 bg-[#44AB7E]/10 text-[#005B77] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Stethoscope className="w-4 h-4" />
              Our Core Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Healthcare Infrastructure
              <span className="block gradient-text">Solutions</span>
            </h2>
            <p className="text-base text-gray-600">
              Professional MGPS & Modular OT systems for hospitals
            </p>
          </div>

          {/* Services Grid - 3 Column Modern Cards */}
          <div className="grid md:grid-cols-3 gap-6 mx-auto">
            {/* Service 1 - MGPS */}
            <div className="group bg-gradient-to-br from-[#005B77]/5 to-[#005B77]/10 rounded-2xl p-6 md:p-8 border border-[#005B77]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#005B77] to-[#003d52] flex items-center justify-center shadow-lg">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#005B77]">
                  Primary Service
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Medical Gas Pipeline Systems
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Complete MGPS design, installation, testing & commissioning with
                HTM 02-01 compliance for safe medical gas delivery.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  O₂ Supply
                </span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  Medical Air
                </span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  Vacuum
                </span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  N₂O
                </span>
              </div>
            </div>

            {/* Service 2 - Modular OT */}
            <div className="group bg-gradient-to-br from-[#44AB7E]/5 to-[#44AB7E]/10 rounded-2xl p-6 md:p-8 border border-[#44AB7E]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#44AB7E] to-[#359163] flex items-center justify-center shadow-lg">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#44AB7E]">
                  Specialized
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Modular Operation Theatre
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Infection-controlled modular OT with integrated MGPS, HEPA
                filtration, and laminar airflow systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  Modular Walls
                </span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  HEPA Filter
                </span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  Laminar Flow
                </span>
              </div>
            </div>

            {/* Service 3 - Turnkey Solutions */}
            <div className="group bg-gradient-to-br from-[#005B77]/5 to-[#44AB7E]/5 rounded-2xl p-6 md:p-8 border border-[#005B77]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#005B77] to-[#44AB7E] flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#005B77]">
                  Complete
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Turnkey Healthcare Infrastructure
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                End-to-end healthcare infrastructure solutions for private and
                government hospitals across Central India.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  Design
                </span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  Installation
                </span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                  Maintenance
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-12 bg-gradient-to-r from-[#005B77] to-[#44AB7E] rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">5+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
                <div className="text-sm text-white/80">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
                <div className="text-sm text-white/80">HTM Compliant</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurClients/>
      {/* Why Choose Us Section */}
      <section className="section bg-gradient-to-br from-[#005B77] to-[#44AB7E] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Shield className="w-4 h-4" />
              Our Strengths
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Choose GMS
            </h2>
            <p className="text-lg text-white/90">
              Trusted & certified healthcare infrastructure partner with proven
              expertise
            </p>
          </div>

          {/* Why Choose Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group hover:-translate-y-2 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              href="contact"
              className="inline-flex items-center gap-2 bg-white text-[#005B77] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get Started with GMS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
