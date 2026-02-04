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
import { Poppins } from "next/font/google";
import clientBanner from "../../assets/bg-banner/clientBanner.jpg";
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import chl from "../../assets/clientBanner/chl.jpeg";
import motherHood from "../../assets/clientBanner/motherhood.jpeg";
import sankareye from "../../assets/clientBanner/sankareye.jpeg";
import vone from "../../assets/clientBanner/vone.jpeg";
import vijaylakshmi from "../../assets/clientBanner/vijayLaxmi.jpeg";
import kdHospital from "../../assets/clientBanner/kdhospital.jpeg";
import subhisiHospital from "../../assets/clientBanner/subhisiHospital.jpeg";
import metroMedicare from "../../assets/clientBanner/metroHospital.jpeg";
import vivekHospital from "../../assets/clientBanner/vivekHospital.jpeg";
import nakshatra from "../../assets/clientBanner/nakshatra.jpeg";
import multiple from "../../assets/clientBanner/mulipledistrict.jpeg";
import jabalpurMultiple from "../../assets/clientBanner/jabalpurmultiple.jpeg";
const ClientsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const clients = {
    private: [
      {
        id: 1,
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
        logo: chl,
        established: "Leading cardiac care",
        beds: "Multi-specialty wards",
      },

      {
        id: 2,
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
        logo: motherHood,
        established: "Premium maternity & childcare",
        beds: "Multi-bed NICU facility",
      },
      {
        id: 3,
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
        logo: sankareye,
        established: "Super specialty eye care facility",
        beds: "Multi-specialty",
      },
      {
        id: 4,
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
        logo: vone,
        established: "Modern day care facility",
        beds: "Day care beds",
      },
      {
        id: 5,
        name: "Vijay Lakshmi Hospital",
        location: "Khargone",
        category: "Multi-specialty Hospital",
        workDone: "MGPS Installation & Modular OT",
        address: "Main Road, Khargone",
        city: "Khargone, Madhya Pradesh",
        rating: 4.6,
        reviews: "3,000+",
        phone: "Contact via hospital",
        specs: [
          "Modular OT Setup",
          "Complete MGPS Setup",
          "Medical Air & Vacuum",
          "Gas Manifold Systems",
        ],
        logo: vijaylakshmi,
        established: "Leading hospital in Khargone",
        beds: "Multi-specialty care",
      },
      {
        id: 6,
        name: "KD Hospital",
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
        logo: kdHospital,
        established: "Trusted healthcare provider",
        beds: "Multi-bed facility",
      },

      {
        id: 7,
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
        logo: subhisiHospital,
        established: "Quality healthcare facility",
        beds: "Multi-bed capacity",
      },
      {
        id: 8,
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
        logo: metroMedicare,
        established: "Trusted medical center",
        beds: "Multi-specialty",
      },
    ],
    critical: [
      {
        id: 9,
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
        logo: vivekHospital,
        established: "Quality healthcare center",
        beds: "NICU facility",
      },
      {
        id: 10,
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
        logo: nakshatra,
        established: "Advanced ICU facility",
        beds: "Multi-bed ICU",
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
        city: "Indore, Madhya Pradesh",
        rating: 4.5,
        reviews: "Government Clients",
        phone: "Various locations",
        specs: [
          "HTM 02-01 Compliant Work",
          "District Hospital MGPS",
          "Government Standards",
          "Multiple Project Sites",
        ],
        logo: multiple,
        established: "Government healthcare initiative",
        beds: "Multiple facilities",
      },
        {
        id: 12,
        name: "School of Excellence Jabalpur",
        location: "Across Madhya Pradesh",
        category: "Government Healthcare Facilities",
        workDone: "MGPS Installation - Sub-contract Basis",
        address: "Various District Hospitals",
        city: "Jabalpur, Madhya Pradesh",
        rating: 4.5,
        reviews: "Government Clients",
        phone: "Various locations",
        specs: [
          "HTM 02-01 Compliant Work",
          "District Hospital MGPS",
          "Government Standards",
          "Multiple Project Sites",
        ],
        logo: jabalpurMultiple,
        established: "Government healthcare initiative",
        beds: "Multiple facilities",
      },
    ],
  };

  const allClients = [
    ...clients.private,
    ...clients.critical,
    ...clients.government,
  ];

  const filteredClients =
    activeFilter === "all"
      ? allClients
      : activeFilter === "private"
      ? clients.private
      : activeFilter === "critical"
      ? clients.critical
      : clients.government;

  const stats = [
    { icon: Building2, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "15+", label: "Healthcare Partners" },
    { icon: Award, number: "100%", label: "HTM Compliance" },
    { icon: Heart, number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-white py-6 md:py-10 min-h-[35vh] md:min-h-[45vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${clientBanner.src})`,
            filter: "brightness(0.75) contrast(1.1)",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45"></div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/40 text-white shadow-lg">
              <Building2 className="w-4 h-4" />
              Our Clients
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              Trusted Healthcare Partners
            </h1>

            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-lg">
              Successfully delivered MGPS and critical care infrastructure
              solutions
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-4 md:py-6 bg-gradient-to-r">
        {/* Decorative blur circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-pulse"></span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-wide">
              Top Hospitals
            </h3>
          </div>

          <p
            className={`mt-3 text-sm md:text-base text-black/90 max-w-2xl mx-auto ${poppins.className}`}
          >
            Our trusted healthcare partners delivering world-class medical
            infrastructure
          </p>
          {/* <hr className="mt-4 mx-auto w-40 md:w-56 border-black/60" /> */}
        </div>
      </section>

      {/* Clients Grid */}
      <section className=" bg-white mb-10">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClients.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-[35vh] overflow-hidden">
                  <img
                    src={
                      project.logo.src ||
                      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200"
                    }
                    alt={project.name}
                    className="w-full h-full  image-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-900 shadow">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-gray-500">{project.city}</p>
                  </div>

                  {/* Work Done */}
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-[11px] text-blue-600 font-semibold mb-1">
                      Work Completed
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      {project.workDone}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Project Scope
                    </p>
                    <ul className="space-y-1.5">
                      {project.specs.slice(0, 3).map((spec, index) => (
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

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
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
      <section className="relative text-white py-8 md:py-10 min-h-[35vh] overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://i.pinimg.com/736x/ce/58/06/ce5806b3a7d3708de2b18c7da045d90e.jpg")`,
            filter: "brightness(0.75) contrast(1.1)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45"></div>

        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl">
              Want to See Your Hospital Here?
            </h2>

            <p className="text-lg text-white/95 drop-shadow-lg">
              Join our growing list of satisfied healthcare partners across
              Madhya Pradesh
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="btn-hero-solid-secondary">
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

export default ClientsPage;
