"use client";
import React, { useState } from "react";
import {
  Building2,
  MapPin,
  Phone,
  Star,
  Award,
  CheckCircle,
  Users,
  Heart,
  Activity,
  Eye,
  Baby,
  Stethoscope,
  ArrowRight,
  Filter,
} from "lucide-react";
import Link from "next/link";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = {
    private: [
      {
        id: 1,
        name: "Sankara Eye Centre",
        location: "Indore",
        category: "Eye Care Hospital",
        workDone: "MGPS Installation & Critical Care Infrastructure",
        address: "Scheme No. 74C, Vijay Nagar Main Road, AB Road, Indore",
        city: "Indore, Madhya Pradesh 452010",
        rating: 4.8,
        reviews: "17,000+",
        phone: "0731-4744747",
        specs: [
          "Complete MGPS Design & Installation",
          "Medical Gas Outlets",
          "Alarm & Monitoring Systems",
          "HTM 02-01 Compliant",
        ],
        logo: "/assets/clients/sankara-eye.png", // Add your logo here
        established: "Super specialty eye care facility",
        beds: "Multi-specialty",
      },
      {
        id: 2,
        name: "Kamla Devi Hospital",
        location: "Indore",
        category: "Multi-specialty Hospital",
        workDone: "MGPS & Critical Care Units",
        address: "Multiple Locations in Indore",
        city: "Indore, Madhya Pradesh",
        rating: 4.5,
        reviews: "5,000+",
        phone: "Contact via hospital",
        specs: [
          "Medical Gas Pipeline Installation",
          "Critical Care Support",
          "Oxygen Supply Systems",
          "Complete MGPS Infrastructure",
        ],
        logo: "/assets/clients/kamla-devi.png",
        established: "Trusted healthcare provider",
        beds: "Multi-bed facility",
      },
      {
        id: 3,
        name: "Vijay Lakshmi Hospital",
        location: "Khargone",
        category: "Multi-specialty Hospital",
        workDone: "MGPS Installation",
        address: "Main Road, Khargone",
        city: "Khargone, Madhya Pradesh",
        rating: 4.6,
        reviews: "3,000+",
        phone: "Contact via hospital",
        specs: [
          "Complete MGPS Setup",
          "Medical Air & Vacuum",
          "Gas Manifold Systems",
          "Safety Monitoring Systems",
        ],
        logo: "/assets/clients/vijay-lakshmi.png",
        established: "Leading hospital in Khargone",
        beds: "Multi-specialty care",
      },
      {
        id: 4,
        name: "Subhishi Hospital",
        location: "Khargone",
        category: "Multi-specialty Hospital",
        workDone: "MGPS Infrastructure",
        address: "Khargone District",
        city: "Khargone, Madhya Pradesh",
        rating: 4.4,
        reviews: "2,500+",
        phone: "Contact via hospital",
        specs: [
          "Medical Gas Pipeline",
          "Oxygen & Nitrous Oxide Systems",
          "Installation & Commissioning",
          "Compliance Documentation",
        ],
        logo: "/assets/clients/subhishi.png",
        established: "Quality healthcare facility",
        beds: "Multi-bed capacity",
      },
      {
        id: 5,
        name: "Metro Medicare Hospital",
        location: "Burhanpur",
        category: "Multi-specialty Hospital",
        workDone: "MGPS Installation",
        address: "Main Area, Burhanpur",
        city: "Burhanpur, Madhya Pradesh",
        rating: 4.5,
        reviews: "2,000+",
        phone: "Contact via hospital",
        specs: [
          "Medical Gas Pipeline Setup",
          "Critical Care Infrastructure",
          "Testing & Commissioning",
          "HTM Standards Compliance",
        ],
        logo: "/assets/clients/metro-medicare.png",
        established: "Trusted medical center",
        beds: "Multi-specialty",
      },
    ],
    critical: [
      {
        id: 6,
        name: "Motherhood Hospital",
        location: "Indore",
        category: "Women & Child Care Hospital",
        workDone: "PICU - Pediatric Intensive Care Unit",
        address: "Plot No. 34-39, Mechanic Nagar, Scheme No. 54, Vijay Nagar",
        city: "Indore, Madhya Pradesh 452010",
        rating: 4.7,
        reviews: "10,000+",
        phone: "8494800092",
        specs: [
          "PICU MGPS Infrastructure",
          "Level III NICU Setup",
          "Pediatric Gas Systems",
          "24/7 Critical Care Support",
        ],
        logo: "/assets/clients/motherhood.png",
        established: "Premium maternity & childcare",
        beds: "Multi-bed NICU facility",
      },
      {
        id: 7,
        name: "Vivek Memorial Hospital",
        location: "Indore",
        category: "Multi-specialty Hospital",
        workDone: "NICU - Neonatal Intensive Care Unit",
        address: "Main Location, Indore",
        city: "Indore, Madhya Pradesh",
        rating: 4.6,
        reviews: "4,000+",
        phone: "Contact via hospital",
        specs: [
          "NICU MGPS Setup",
          "Neonatal Care Infrastructure",
          "Medical Gas Outlets",
          "Monitoring Systems",
        ],
        logo: "/assets/clients/vivek-memorial.png",
        established: "Quality healthcare center",
        beds: "NICU facility",
      },
      {
        id: 8,
        name: "Nakshatra Hospital",
        location: "Indore",
        category: "Multi-specialty Hospital",
        workDone: "ICU - Intensive Care Unit",
        address: "Main Location, Indore",
        city: "Indore, Madhya Pradesh",
        rating: 4.5,
        reviews: "3,500+",
        phone: "Contact via hospital",
        specs: [
          "ICU MGPS Infrastructure",
          "Critical Care Gas Systems",
          "Vacuum & Medical Air",
          "Emergency Support Systems",
        ],
        logo: "/assets/clients/nakshatra.png",
        established: "Advanced ICU facility",
        beds: "Multi-bed ICU",
      },
      {
        id: 9,
        name: "Care CHL Hospital",
        location: "Indore",
        category: "Multi-specialty Hospital",
        workDone: "Day Care, Semi-Private Ward & Cath Lab",
        address: "AB Road Area, Indore",
        city: "Indore, Madhya Pradesh",
        rating: 4.7,
        reviews: "8,000+",
        phone: "Contact via hospital",
        specs: [
          "Cath Lab MGPS Setup",
          "Day Care Infrastructure",
          "Ward Gas Systems",
          "Specialized Medical Gas Supply",
        ],
        logo: "/assets/clients/care-chl.png",
        established: "Leading cardiac care",
        beds: "Multi-specialty wards",
      },
      {
        id: 10,
        name: "V One Hospital",
        location: "Indore",
        category: "Multi-specialty Hospital",
        workDone: "Day Care Unit",
        address: "Main Location, Indore",
        city: "Indore, Madhya Pradesh",
        rating: 4.6,
        reviews: "2,500+",
        phone: "Contact via hospital",
        specs: [
          "Day Care MGPS",
          "Outpatient Gas Systems",
          "Medical Infrastructure",
          "Safety Compliance",
        ],
        logo: "/assets/clients/v-one.png",
        established: "Modern day care facility",
        beds: "Day care beds",
      },
    ],
    government: [
      {
        id: 11,
        name: "Multiple District Hospitals",
        location: "Across Madhya Pradesh",
        category: "Government Healthcare Facilities",
        workDone: "MGPS Installation - Sub-contract Basis",
        address: "Various District Hospitals",
        city: "Madhya Pradesh",
        rating: 4.5,
        reviews: "Government Projects",
        phone: "Various locations",
        specs: [
          "HTM 02-01 Compliant Work",
          "District Hospital MGPS",
          "Government Standards",
          "Multiple Project Sites",
        ],
        logo: "/assets/clients/mp-govt.png",
        established: "Government healthcare initiative",
        beds: "Multiple facilities",
      },
    ],
  };

  const allProjects = [
    ...projects.private,
    ...projects.critical,
    ...projects.government,
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : activeFilter === "private"
      ? projects.private
      : activeFilter === "critical"
      ? projects.critical
      : projects.government;

  const stats = [
    { icon: Building2, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "15+", label: "Healthcare Partners" },
    { icon: Award, number: "100%", label: "HTM Compliance" },
    { icon: Heart, number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white  py-6 md:py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <Building2 className="w-4 h-4" />
              Our Projects
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Trusted Healthcare Partners
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Successfully delivered MGPS and critical care infrastructure
              solutions across Madhya Pradesh
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 text-center"
              >
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              All Projects ({allProjects.length})
            </button>
            <button
              onClick={() => setActiveFilter("private")}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "private"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Private Hospitals ({projects.private.length})
            </button>
            <button
              onClick={() => setActiveFilter("critical")}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "critical"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Critical Care ({projects.critical.length})
            </button>
            <button
              onClick={() => setActiveFilter("government")}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "government"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Government ({projects.government.length})
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Logo Section */}
                <div className="h-32 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-6 border-b border-gray-100">
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    {/* Replace with actual logo */}
                    <div className="text-center">
                      <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">Client Logo</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500">{project.category}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(project.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {project.rating}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({project.reviews} reviews)
                    </span>
                  </div>

                  {/* Work Done */}
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold mb-1">
                      Work Completed:
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      {project.workDone}
                    </p>
                  </div>

                  {/* Location */}
                  {/* <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-2.5" />
                      <div className=" text-gray-600">
                        <p className="font-medium text-gray-900 text-sm">
                          {project.address}
                        </p>
                        <p className="text-xs text-gray-500">{project.city}</p>
                      </div>
                    </div>

                   
                  </div> */}

                  {/* Specs */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Project Scope:
                    </p>
                    <ul className="space-y-1.5">
                      {project.specs.map((spec, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badge */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold text-blue-600">
                        HTM 02-01 Compliant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Want to See Your Hospital Here?
            </h2>
            <p className="text-lg text-blue-100">
              Join our growing list of satisfied healthcare partners across
              Madhya Pradesh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="contact" className="btn-hero-solid-secondary">
                <Building2 className="w-5 h-5" />
                Start Your Project
              </Link>
              <a href="tel:+917067534498" className="btn-outline">
                <Phone className="w-5 h-5" />
                Call: +91 70675 34498
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;