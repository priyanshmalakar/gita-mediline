"use client";
import React from "react";
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

  const medicalGases = [
    { name: "Oxygen (O₂)", icon: Activity },
    { name: "Medical Air (4 bar & 7 bar)", icon: Wind },
    { name: "Vacuum", icon: Settings },
    { name: "Nitrous Oxide (N₂O)", icon: Droplets },
    { name: "AGSS", icon: AlertCircle },
    { name: "Carbon Dioxide (CO₂)", icon: Zap },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-cyan-700 text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-cyan-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Activity className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="font-semibold">MGPS Pipeline System</p>
                      <p className="text-sm">Medical-grade installation</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-lg">
                    HTM 02-01 Compliant
                  </div>
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
              {/* Left: Image */}
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {/* Large Image */}
                  <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-[16/9] bg-gradient-to-br from-teal-100 to-emerald-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <Wrench className="w-12 h-12 mx-auto mb-2 opacity-30" />
                          <p className="text-sm font-semibold">
                            Pipeline Installation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Small Image 1 */}
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Droplets className="w-10 h-10 text-gray-400 opacity-30" />
                      </div>
                    </div>
                  </div>

                  {/* Small Image 2 */}
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Settings className="w-10 h-10 text-gray-400 opacity-30" />
                      </div>
                    </div>
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

      {/* Medical Gases - Left Content, Right Image */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Droplets className="w-4 h-4" />
                    Medical Gases
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Medical Gases Covered
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Each system is designed independently to avoid
                    cross-contamination.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {medicalGases.map((gas, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <gas.icon className="w-6 h-6 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-900">
                        {gas.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Droplets className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="font-semibold">Gas Manifold System</p>
                      <p className="text-sm">Multi-gas distribution</p>
                    </div>
                  </div>
                </div>
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Shield className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="font-semibold">Compliance Testing</p>
                      <p className="text-sm">HTM 02-01 Standards</p>
                    </div>
                  </div>
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
                  <p className="text-xl font-bold text-gray-900 mb-6">
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

                <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">
                    If it's not compliant on paper, it doesn't leave the site.
                  </p>
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

            <div className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl">
              <p className="text-xl font-bold text-white">
                We don't install pipelines. We build reliable oxygen lifelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-blue-800 to-cyan-700 text-white">
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