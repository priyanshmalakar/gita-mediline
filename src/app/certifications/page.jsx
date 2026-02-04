"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Award,
  CheckCircle,
  Eye,
  X,
  FileCheck,
  Building2,
} from "lucide-react";
import Link from "next/link";

export default function CertificationPage() {
  const [activeCert, setActiveCert] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const certifications = [
    {
      id: 1,
      name: "CE Certificate",
      description: "European Conformity certification for medical equipment compliance",
      image: "/certificates/CEMarking.pdf",
      type: "pdf",
      icon: Shield,
      color: "from-blue-600 to-cyan-500",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-700",
    },
    {
      id: 2,
      name: "ISO 9001:2015",
      description: "Quality Management System certification for healthcare infrastructure",
      image: "/certificates/Iso9001_2015.pdf",
      type: "pdf",
      icon: Award,
      color: "from-emerald-600 to-teal-500",
      borderColor: "border-emerald-500/30",
      bgColor: "bg-emerald-50",
      accentColor: "text-emerald-700",
    },
    {
      id: 3,
      name: "HTM 02-01 Authorised Person",
      description: "MGPS Certified Authorised Person for Medical Gas Pipeline Systems",
      image: "/certificates/HTM 0201_authorised_person_mgps_certified.pdf",
      type: "pdf",
      icon: CheckCircle,
      color: "from-purple-600 to-pink-500",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-50",
      accentColor: "text-purple-700",
    },
  ];

  // Enhanced security: Disable right-click, shortcuts, and print
  useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const disableShortcuts = (e) => {
      if (e.key === "PrintScreen") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      if (
        (e.ctrlKey && ["s", "p", "u"].includes(e.key.toLowerCase())) ||
        (e.metaKey && ["s", "p", "u"].includes(e.key.toLowerCase())) ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const disableSelection = () => {
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
      document.body.style.mozUserSelect = "none";
      document.body.style.msUserSelect = "none";
    };

    const preventDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    document.addEventListener("contextmenu", disableContextMenu, true);
    document.addEventListener("keydown", disableShortcuts, true);
    document.addEventListener("dragstart", preventDrag, true);
    window.addEventListener("contextmenu", disableContextMenu, true);
    disableSelection();

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu, true);
      document.removeEventListener("keydown", disableShortcuts, true);
      document.removeEventListener("dragstart", preventDrag, true);
      window.removeEventListener("contextmenu", disableContextMenu, true);
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.body.style.mozUserSelect = "";
      document.body.style.msUserSelect = "";
    };
  }, []);

  // Additional security for PDF modal
  useEffect(() => {
    if (activeCert) {
      const beforePrint = (e) => {
        e.preventDefault();
        return false;
      };

      const blockContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      window.addEventListener("beforeprint", beforePrint);
      document.addEventListener("contextmenu", blockContextMenu, true);

      return () => {
        window.removeEventListener("beforeprint", beforePrint);
        document.removeEventListener("contextmenu", blockContextMenu, true);
      };
    }
  }, [activeCert]);

  return (
    <div className="bg-white select-none" onContextMenu={(e) => e.preventDefault()}>
      {/* Hero Section - Matching About Page Style */}
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
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">ISO 9001:2015</span>
              </div>

              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/40 text-white shadow-md">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">CE Certified</span>
              </div>

              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/40 text-white shadow-md">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">HTM 02-01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid Section */}
      <section className=" bg-gradient-to-b from-gray-50 to-white py-10">
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

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.id}
                    className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                      cert.borderColor
                    } hover:scale-105 ${
                      isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* Certificate Icon Header */}
                    <div
                      className={`relative h-48 ${cert.bgColor} flex items-center justify-center overflow-hidden`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                          }}
                        ></div>
                      </div>

                      {/* Animated Gradient Orb */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>

                      {/* Icon */}
                      <div className="relative z-10">
                        <div
                          className={`w-24 h-24 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        >
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                        <span className={`text-xs font-bold ${cert.accentColor}`}>
                          VERIFIED
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#005B77] transition-colors">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => setActiveCert(cert)}
                        className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${cert.color} text-white py-3 px-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
                      >
                        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        View Certificate
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Certifications Matter Section */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Our Certifications Matter
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry-recognized credentials that ensure safety, quality,
                and compliance
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

      {/* Modal for Certificate Viewing - FIXED SCROLLING */}
      {activeCert && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in select-none"
          onClick={() => setActiveCert(null)}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
        >
          <div
            className="relative w-full max-w-6xl h-[90vh] flex flex-col animate-slide-up"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }}
          >
            {/* Fixed Header with Close Button */}
            <div className="flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 rounded-t-2xl border-b-2 border-gray-700">
              <div className="flex items-center gap-3 text-white">
                {React.createElement(activeCert.icon, {
                  className: "w-5 h-5",
                })}
                <span className="font-bold text-lg">{activeCert.name}</span>
              </div>
              
              <button
                onClick={() => setActiveCert(null)}
                className="text-white hover:text-gray-300 transition-all duration-200 hover:scale-110 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Certificate Container */}
            <div className="relative flex-1 bg-white rounded-b-2xl overflow-auto border-4 border-gray-200">
              {/* Watermarks - Fixed position */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-30">
                <span className="text-7xl md:text-8xl lg:text-9xl font-black text-[#005B77]/[0.05] rotate-[-25deg] tracking-wide drop-shadow-md whitespace-nowrap">
                  GITA MEDILINE
                </span>
              </div>

              <div className="absolute top-1/4 left-10 pointer-events-none select-none z-30">
                <span className="text-4xl md:text-5xl font-black text-[#44AB7E]/[0.06] rotate-[-15deg] inline-block drop-shadow-sm">
                  GITA MEDILINE
                </span>
              </div>
              
              <div className="absolute bottom-1/4 right-10 pointer-events-none select-none z-30">
                <span className="text-4xl md:text-5xl font-black text-[#44AB7E]/[0.06] rotate-[15deg] inline-block drop-shadow-sm">
                  GITA MEDILINE
                </span>
              </div>

              {/* PDF Viewer - Scrollable with Protected Overlay */}
              {activeCert.type === "pdf" ? (
                <div 
                  className="w-full min-h-full relative"
                  onContextMenu={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }}
                >
                  {/* PDF Container with scroll */}
                  <div className="w-full h-full overflow-auto p-4">
                    <iframe
                      src={`${activeCert.image}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full border-0 pointer-events-none"
                      style={{
                        height: '150vh',
                        minHeight: '150vh'
                      }}
                      title={activeCert.name}
                    />
                  </div>

                  {/* Transparent Protection Layer - Blocks Right Click but allows wheel scroll */}
                  <div 
                    className="absolute inset-0 z-10"
                    onContextMenu={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      return false;
                    }}
                    onMouseDown={(e) => {
                      // Block all mouse buttons except left click for interaction
                      if (e.button !== 0) {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                      }
                    }}
                    style={{
                      background: 'transparent',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      cursor: 'default'
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-full p-8">
                  <img
                    src={activeCert.image}
                    alt={activeCert.name}
                    draggable={false}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      return false;
                    }}
                    className="w-full h-auto object-contain select-none pointer-events-none"
                  />
                </div>
              )}
            </div>

            {/* Fixed Footer */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 rounded-b-2xl mt-0">
              <div className="flex items-center justify-center text-sm text-gray-300">
                <Shield className="w-4 h-4 mr-2" />
                <span className="font-semibold">Certified & Verified Document</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}