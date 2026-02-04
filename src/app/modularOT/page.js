"use client";
import React from "react";
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
} from "lucide-react";
import Link from "next/link";

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
                    <strong>controlled surgical environment, not just a room</strong>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Every surface, airflow pattern, and utility connection exists
                    to reduce infection risk, maintain sterile pressure zones, and
                    support surgical precision.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                    <p className="text-lg font-bold text-red-900">
                      Poor OT design increases post-operative infection rates. We
                      design to prevent that.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Building2 className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="font-semibold">Modular Operation Theatre</p>
                      <p className="text-sm">Sterile environment</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-lg">
                    NABH Compliant
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
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {/* Large Image */}
                  <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-pink-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <Layout className="w-12 h-12 mx-auto mb-2 opacity-30" />
                          <p className="text-sm font-semibold">Modular Panels</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Small Image 1 */}
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Wind className="w-10 h-10 text-gray-400 opacity-30" />
                      </div>
                    </div>
                  </div>

                  {/* Small Image 2 */}
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100">
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

      {/* Infection Control - Left Content, Right Image */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Shield className="w-4 h-4" />
                    Infection Control
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Airflow Management
                  </h2>
                  <p className="text-xl font-bold text-gray-900 mb-6">
                    Infection control is designed — not assumed.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {infectionControl.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                      <p className="font-bold text-gray-900 mb-1 text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">
                    Seamless, easy-to-clean surfaces
                  </span>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-emerald-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Wind className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="font-semibold">Laminar Flow System</p>
                      <p className="text-sm">HEPA filtered air</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration - Right Content, Left Image */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Image */}
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-amber-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Activity className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="font-semibold">Integrated Systems</p>
                      <p className="text-sm">Medical gas & electrical</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Activity className="w-4 h-4" />
                    Integration
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Integrated Infrastructure
                  </h2>
                  <p className="text-xl font-bold text-gray-900 mb-6">
                    We integrate:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-600">
                    <p className="font-bold text-gray-900 mb-1">
                      MGPS outlets & pendants
                    </p>
                    <p className="text-sm text-gray-600">
                      Medical gas delivery systems
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-600">
                    <p className="font-bold text-gray-900 mb-1">
                      Electrical panels & controls
                    </p>
                    <p className="text-sm text-gray-600">
                      Complete power distribution
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-600">
                    <p className="font-bold text-gray-900 mb-1">
                      Data & nurse call systems
                    </p>
                    <p className="text-sm text-gray-600">
                      Communication infrastructure
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-600">
                    <p className="font-bold text-gray-900 mb-1">
                      Emergency backup provisions
                    </p>
                    <p className="text-sm text-gray-600">Redundant systems</p>
                  </div>
                </div>

                <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-white">No clashes. No last-minute fixes.</p>
                </div>
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

                <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-white">
                    If airflow isn't validated, the OT isn't complete.
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-emerald-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Shield className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="font-semibold">Quality Assurance</p>
                      <p className="text-sm">Testing & validation</p>
                    </div>
                  </div>
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

            <div className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl">
              <p className="text-xl font-bold text-white">
                We don't sell OT panels. We deliver functional surgical
                environments.
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