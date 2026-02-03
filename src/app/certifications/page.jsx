"use client";

import { useState, useEffect } from "react";
import { Eye, X, Award, Download, Shield, CheckCircle, Calendar, User } from "lucide-react";

export default function CertificationPage() {
  const [activeCert, setActiveCert] = useState(null);

  const certifications = [
    {
      id: 1,
      image: "/certificates/iso-certificate.jpg",
      title: "ISO 9001:2015",
      issuer: "Universal Services Pvt. Ltd.",
      date: "18th February 2025",
      category: "Quality Management",
      description: "Quality Management System for Medical Gas Pipeline Equipment & Modular OT Projects",
      validUntil: "17th February 2028",
      certNumber: "UCSPL09802500462",
      scope: "Sales, Services & Installation of Medical Gas Pipelines Equipment's, Modular Operation Theatre Projects, Medical Equipments",
      company: "GITA MEDILINE SERVICES",
      location: "C-09, Main Road, Shri Nagar Colony, Mandleshwar, Khargone, Madhya Pradesh, 451225, India",
      surveillance: [
        { type: "1st Surveillance Audit", date: "17th February 2026" },
        { type: "2nd Surveillance Audit", date: "17th February 2027" }
      ]
    },
    {
      id: 2,
      image: "/certificates/htm-certificate.jpg",
      title: "HTM 02-01: Part B, Section 7",
      issuer: "MediGAS UK Ltd.",
      date: "21st November 2025",
      category: "Healthcare Compliance",
      description: "MGPS Authorised Person Comprehensive Certification",
      validUntil: "21st November 2028",
      certNumber: "3681",
      scope: "Medical Gas Pipeline Systems - Authorised Person Qualification",
      recipient: "Mr. Mohit Singh Solanki",
      authorizedBy: "David Sorrigan - BSc (hons) MBA, Company Director",
      accreditation: ["IHEEM Member", "CPD Certification Service"],
      validityNote: "Valid for three years from the date of completion"
    },
    {
      id: 3,
      image: "/certificates/company-registration.jpg",
      title: "Company Registration Certificate",
      issuer: "Government of India",
      date: "2020",
      category: "Legal Compliance",
      description: "Official Business Registration & Trade License",
      validUntil: "Active",
      certNumber: "REG-2020-XXXX",
      scope: "Authorized to conduct medical equipment sales, installation and services",
      company: "GITA MEDILINE SERVICES",
    },
  ];

  // ❌ Disable right click + shortcuts
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();

    const disableShortcuts = (e) => {
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && ["s", "u", "p"].includes(e.key.toLowerCase())) ||
        (e.metaKey && ["s", "u", "p"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableShortcuts);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 select-none">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Award className="w-8 h-8" />
            </div>
            <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
              Verified Credentials
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Certifications & Accreditations
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Recognized by international standards bodies for excellence in quality,
            safety, and compliance across healthcare infrastructure solutions.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-600">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Active Certifications</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-600">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Compliance Rate</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-purple-600">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 rounded-full p-3">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
            >
              {/* Image Preview */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  draggable={false}
                  className="h-full w-full object-contain pointer-events-none select-none p-6 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  {cert.category}
                </div>
                
                {/* Certificate Number Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-gray-700 shadow-lg">
                  #{cert.certNumber}
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    <Eye size={18} />
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-gray-100">
                  <div className="flex items-start justify-between text-sm gap-2">
                    <span className="text-gray-500">Issued by:</span>
                    <span className="font-semibold text-gray-900 text-right text-xs">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Issue Date:</span>
                    <span className="font-semibold text-gray-900">{cert.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Valid Until:</span>
                    <span className="font-semibold text-green-600">
                      {cert.validUntil}
                    </span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2.5 rounded-xl border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-bold text-green-700">
                    Verified & Active
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center px-4 animate-fadeIn overflow-y-auto py-8"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-6xl w-full animate-scaleIn my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-white rounded-t-2xl p-6 flex items-center justify-between sticky top-0 z-20 shadow-md">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {activeCert.title}
                </h2>
                <p className="text-sm text-gray-600">{activeCert.issuer}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors ml-4"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Certificate Details */}
            <div className="bg-white p-8 space-y-6">
              {/* Certificate Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-black/5 mx-auto mb-4" />
                    <span className="text-6xl font-extrabold text-black/5 rotate-[-25deg] tracking-widest block">
                      VIEW ONLY
                    </span>
                  </div>
                </div>

                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  draggable={false}
                  className="w-full max-h-[60vh] object-contain select-none pointer-events-none p-8"
                />
              </div>

              {/* Detailed Information */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold mb-2">Certificate Number</p>
                    <p className="text-lg font-bold text-gray-900">{activeCert.certNumber}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Issue Date
                    </p>
                    <p className="text-sm font-bold text-gray-900">{activeCert.date}</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-xs text-green-600 font-semibold mb-2">Valid Until</p>
                    <p className="text-sm font-bold text-gray-900">{activeCert.validUntil}</p>
                  </div>

                  {activeCert.recipient && (
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <p className="text-xs text-purple-600 font-semibold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Recipient
                      </p>
                      <p className="text-sm font-bold text-gray-900">{activeCert.recipient}</p>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold mb-2">Scope of Certification</p>
                    <p className="text-sm text-gray-900 leading-relaxed">{activeCert.scope}</p>
                  </div>

                  {activeCert.company && (
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <p className="text-xs text-gray-600 font-semibold mb-2">Company Name</p>
                      <p className="text-sm font-bold text-gray-900">{activeCert.company}</p>
                    </div>
                  )}

                  {activeCert.location && (
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <p className="text-xs text-gray-600 font-semibold mb-2">Location</p>
                      <p className="text-sm text-gray-900 leading-relaxed">{activeCert.location}</p>
                    </div>
                  )}

                  {activeCert.authorizedBy && (
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <p className="text-xs text-gray-600 font-semibold mb-2">Authorized By</p>
                      <p className="text-sm text-gray-900">{activeCert.authorizedBy}</p>
                    </div>
                  )}

                  {activeCert.surveillance && (
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <p className="text-xs text-orange-600 font-semibold mb-3">Surveillance Audits</p>
                      <div className="space-y-2">
                        {activeCert.surveillance.map((audit, index) => (
                          <div key={index} className="text-sm">
                            <span className="font-semibold text-gray-900">{audit.type}:</span>
                            <span className="text-gray-700 ml-2">{audit.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCert.accreditation && (
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <p className="text-xs text-blue-600 font-semibold mb-2">Accreditations</p>
                      <div className="flex gap-2 flex-wrap">
                        {activeCert.accreditation.map((acc, index) => (
                          <span key={index} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-200">
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Info Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-b-2xl">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">
                    Verified Certificate • Valid until {activeCert.validUntil}
                  </span>
                </div>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
                  <Download size={16} />
                  Request Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}