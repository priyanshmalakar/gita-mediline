"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircle,
  Award,
  Shield,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import logo from "../assets/logos/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "about" },
    { name: "Services", href: "services" },
    { name: "Clients", href: "clients" },
    { name: "Contact", href: "contact" },
  ];

  const services = [
    { name: "MGPS Solutions", href: "services" },
    { name: "Modular OT", href: "services" },
    { name: "Central Gas Supply", href: "services" },
    // { name: "Medical Equipment", href: "services" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100063903677653",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/gita_mediline_services_india",
      color: "hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gita-mediline-services-4b15231b8",
      color: "hover:bg-blue-700",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@gitamedilineservices2163?si=bo85MMbzkBhwg-em",
      color: "hover:bg-red-600",
    },
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   href: "https://twitter.com/gitamediline",
    //   color: "hover:bg-blue-400",
    // },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/917067534498",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-4 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-3">
              <Link href="/" className="flex items-center ">
                {/* <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl font-bold gradient-text">
                    GITA MEDILINE
                  </span>
                  <span className="text-[10px] lg:text-xs text-gray-600 font-medium tracking-wider">
                    SERVICES
                  </span>
                </div> */}
                <img
                  src={logo.src}
                  alt="Gita Mediline Logo"
                  className="w-40 md:w-52 h-auto "
                />
              </Link>

              <p className="text-gray-300 text-sm leading-relaxed">
                Healthcare infrastructure specialists providing MGPS and Modular
                OT solutions across Madhya Pradesh.
              </p>

              {/* Certifications - Compact */}
              <div className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded">
                <Award className="w-3 h-3 text-[#005B77]" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded">
                <Shield className="w-3 h-3 text-[#44AB7E]" />
                <span>CE Certified</span>
              </div>

              {/* Social Media - Compact */}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 group`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-gray-300 hover:text-[#44AB7E] transition-colors text-sm group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                Our Services
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center gap-1 text-gray-300 hover:text-[#44AB7E] transition-colors text-sm group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Compact */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                Contact Us
              </h4>

              <div className="space-y-3">
                {/* Phone Numbers - Compact */}
                <div className="space-y-1">
                  <a
                    href="tel:+917067534498"
                    className="flex items-center gap-2 text-gray-300 hover:text-[#44AB7E] transition-colors text-sm group"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+91 70675 34498</span>
                  </a>
                  <a
                    href="tel:+917389112339"
                    className="flex items-center gap-2 text-gray-300 hover:text-[#44AB7E] transition-colors text-sm group"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+91 73891 12339</span>
                  </a>
                </div>

                {/* Email */}
                <a
                  href="mailto:gitamediline@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#44AB7E] transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">gitamediline@gmail.com</span>
                </a>

                {/* Locations - Very Compact */}
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-[#005B77] mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-white  tracking-wide">
                        Mandleshwar
                      </p>
                      <p className="text-sm text-gray-300">
                        C-09, Main Road, Shri Nagar Colony Mandleshwar, District
                        Khargone Madhya Pradesh – India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-[#44AB7E] mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-white  tracking-wide">
                        Indore
                      </p>
                      <p className="text-sm text-gray-300">
                        51, Main Vandana Nagar Bangali Square, Indore Madhya
                        Pradesh – India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Compact */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <p className="text-center md:text-left text-gray-400">
              © {currentYear} Gita Mediline Services. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#privacy"
                className="hover:text-[#44AB7E] transition-colors"
              >
                Privacy
              </a>
              <span>|</span>
              <a
                href="#terms"
                className="hover:text-[#44AB7E] transition-colors"
              >
                Terms
              </a>
              <span>|</span>
              <a
                href="#sitemap"
                className="hover:text-[#44AB7E] transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005B77] via-[#44AB7E] to-[#005B77]"></div>
    </footer>
  );
};

export default Footer;
