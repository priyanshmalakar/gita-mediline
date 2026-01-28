"use client";
import React from "react";
import {
  Activity,
  Building2,
  Wrench,
  CheckCircle,
  Shield,
  FileCheck,
  Zap,
  Wind,
  AlertCircle,
  Droplets,
  Settings,
  ClipboardCheck,
  Sparkles,
  Layout,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  const mgpsScope = [
    {
      icon: Layout,
      title: "MGPS Design and Engineering",
      description: "Comprehensive system design tailored to hospital needs",
    },
    {
      icon: Droplets,
      title: "Medical Gas Systems",
      description: "Oxygen, Nitrous Oxide, Medical Air, Vacuum, AGSS & CO₂",
    },
    {
      icon: Wrench,
      title: "Copper Pipeline Installation",
      description: "Medical-grade copper pipeline installation and integration",
    },
    {
      icon: AlertCircle,
      title: "Alarm & Monitoring Systems",
      description: "Advanced monitoring and alert systems for safety",
    },
    {
      icon: ClipboardCheck,
      title: "Testing & Commissioning",
      description: "Thorough testing, purging and system commissioning",
    },
    {
      icon: FileCheck,
      title: "Compliance Documentation",
      description: "Complete documentation for regulatory compliance",
    },
  ];

  const motServices = [
    {
      icon: Building2,
      title: "Modular Wall & Ceiling Systems",
      description: "Infection-controlled modular construction",
    },
    {
      icon: Wind,
      title: "Laminar Airflow Systems",
      description: "Advanced airflow control for sterile environment",
    },
    {
      icon: Sparkles,
      title: "HEPA Filtration",
      description: "High-efficiency particulate air filtration systems",
    },
    {
      icon: Activity,
      title: "Medical Gas Integration",
      description: "Seamless integration with MGPS infrastructure",
    },
    {
      icon: Zap,
      title: "Electrical & Control Panels",
      description: "Complete electrical systems and control solutions",
    },
    {
      icon: Settings,
      title: "OT Accessories & Fittings",
      description: "Professional grade operation theatre accessories",
    },
  ];

  const standards = [
    {
      icon: Shield,
      title: "HTM 02-01",
      description: "UK Health Technical Memorandum standards compliance",
    },
    {
      icon: CheckCircle,
      title: "NABH-aligned",
      description: "Infrastructure meeting NABH accreditation requirements",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-cyan-700 text-white py-6 md:py-10 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Activity className="w-4 h-4" />
              Our Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              MGPS & Modular OT Solutions
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              End-to-end healthcare infrastructure solutions from design to
              commissioning
            </p>
          </div>
        </div>
      </section>

      {/* MGPS Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Activity className="w-4 h-4" />
                MGPS Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Medical Gas Pipeline Systems (MGPS)
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end MGPS solutions for hospitals, from system
                design to testing and commissioning
              </p>
            </div>

            {/* Photo Grid with Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              {/* Left: Photo Gallery */}
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {/* Main Image */}
                  <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                      {/* Replace with your image */}
                      <img
                        src="/assets/services/mgps-system.jpg"
                        alt="MGPS Installation"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 text-white">
                          <p className="font-bold text-lg">MGPS Installation</p>
                          <p className="text-sm text-blue-200 mt-1">
                            Medical-grade copper pipeline system
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 shadow-lg">
                      HTM 02-01 Compliant
                    </div>
                  </div>

                  {/* Small Image 1 */}
                  <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                      <img
                        src="/assets/services/mgps-manifold.jpg"
                        alt="Gas Manifold System"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-3 text-white">
                          <p className="text-xs font-bold">Manifold System</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Small Image 2 */}
                  <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                      <img
                        src="/assets/services/mgps-outlets.jpg"
                        alt="Medical Gas Outlets"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-3 text-white">
                          <p className="text-xs font-bold">Gas Outlets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Scope of Work
                </h3>

                <div className="space-y-3">
                  {mgpsScope.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Standards Followed */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Standards Followed
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {standards.map((standard, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <standard.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {standard.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {standard.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* MOT Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Building2 className="w-4 h-4" />
                Modular OT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Modular Operation Theatre (MOT) Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We design and execute infection-controlled Modular Operation
                Theatre solutions, integrated with medical gas and support
                systems
              </p>
            </div>

            {/* Photo Grid with Content - Reversed Layout */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              {/* Left: Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  MOT Services Include
                </h3>

                <div className="space-y-3">
                  {motServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Photo Gallery */}
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Main Image */}
                  <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                      {/* Replace with your image */}
                      <img
                        src="/assets/services/modular-ot.jpg"
                        alt="Modular Operation Theatre"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 text-white">
                          <p className="font-bold text-lg">
                            Modular Operation Theatre
                          </p>
                          <p className="text-sm text-purple-200 mt-1">
                            Infection-controlled sterile environment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-purple-600 shadow-lg">
                      HEPA Filtered
                    </div>
                  </div>

                  {/* Small Image 1 */}
                  <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                      <img
                        src="/assets/services/ot-ceiling.jpg"
                        alt="Modular Ceiling System"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-3 text-white">
                          <p className="text-xs font-bold">Ceiling System</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Small Image 2 */}
                  <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                      <img
                        src="/assets/services/ot-control-panel.jpg"
                        alt="OT Control Panel"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-3 text-white">
                          <p className="text-xs font-bold">Control Panel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-blue-800 to-cyan-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Upgrade Your Healthcare Infrastructure?
            </h2>
            <p className="text-lg text-blue-100">
              Get expert consultation for your MGPS and Modular OT requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn-hero-solid-secondary">
                <CheckCircle className="w-5 h-5" />
                Request Consultation
              </Link>
              <Link href="/projects" className="btn-outline">
                <ArrowRight className="w-5 h-5" />
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;