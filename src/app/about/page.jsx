"use client";
import React from "react";
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  Building2,
  Heart,
  Target,
  FileCheck,
  TrendingUp,
  Lightbulb,
  User,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const philosophyPoints = [
    {
      icon: FileCheck,
      title: "Compliance-led Execution",
      description:
        "Every project follows HTM 02-01 standards and healthcare compliance requirements",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Technical Accuracy & Documentation",
      description:
        "Detailed engineering documentation and precise installation protocols",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Reliable System Performance",
      description:
        "Tested and verified systems ensuring consistent, safe operation",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Long-term Hospital Support",
      description:
        "Ongoing maintenance and support for sustained infrastructure reliability",
      color: "from-orange-500 to-red-500",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Care",
      description: "Patient safety and healthcare excellence at the core",
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "Accountable execution and compliance adherence",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting partnerships with healthcare providers",
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
              <Building2 className="w-4 h-4" />
              About Us
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About Gita Mediline Services
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Professionally managed healthcare infrastructure company
              specialising in Medical Gas Pipeline Systems (MGPS) and Modular
              Operation Theatre (MOT) solutions
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">CE Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">HTM 02-01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">
                  Gita Mediline Services (GMS)
                </strong>{" "}
                is a professionally managed healthcare infrastructure company
                specialising in{" "}
                <strong className="text-blue-600">
                  Medical Gas Pipeline Systems (MGPS)
                </strong>{" "}
                and{" "}
                <strong className="text-blue-600">
                  Modular Operation Theatre (MOT)
                </strong>{" "}
                solutions.
              </p>

              <p className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <strong className="text-blue-900">
                  The company is named "Gita"
                </strong>{" "}
                in honour of the founder's grandmother, reflecting values of{" "}
                <strong className="text-blue-700">
                  care, responsibility, and trust
                </strong>
                , which form the foundation of our work in healthcare
                environments.
              </p>

              <p>
                With more than{" "}
                <strong className="text-gray-900">
                  5 years of industry experience
                </strong>
                , we support hospitals with infrastructure that meets safety,
                compliance, and operational reliability requirements.
              </p>
            </div>

            {/* Values Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <User className="w-4 h-4" />
                Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Expert Leadership
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">
                    <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Mr. Mohit Singh Solanki
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mt-1">
                      Proprietor
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Certified Authorised Person (AP – MGPS, HTM 02-01)
                      </span>
                    </div>

                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Briefcase className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        5+ Years Healthcare Infrastructure Experience
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mt-6">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      All MGPS projects are executed under Authorised Person
                      supervision, ensuring compliance with recognised
                      healthcare standards and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Philosophy Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Lightbulb className="w-4 h-4" />
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Working Philosophy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four core principles that guide every project we undertake
              </p>
            </div>

            {/* Philosophy Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {philosophyPoints.map((point, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${point.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <point.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-blue-800 to-cyan-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Partner with GMS for Your Healthcare Infrastructure
            </h2>
            <p className="text-lg text-blue-100">
              Experience the difference of working with certified professionals
              who prioritize safety, compliance, and reliability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="btn-hero-solid-secondary"
              >
                <Building2 className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="btn-outline"
              >
                <CheckCircle className="w-5 h-5" />
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;