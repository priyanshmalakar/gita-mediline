'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'MGPS', href: '#mgps' },
        { name: 'Modular OT', href: '#mot' },
        { name: 'Medical Equipment', href: '#equipment' }
      ]
    },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Contact Bar - Desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-900 to-blue-900 text-white py-2.5">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+917067534498" className="flex items-center gap-2 hover:text-blue-100 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 70675 34498</span>
              </a>
              <span className="text-blue-300">|</span>
              <a href="tel:+917389112339" className="flex items-center gap-2 hover:text-blue-100 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 73891 12339</span>
              </a>
              <span className="text-blue-300">|</span>
              <a href="mailto:gitamediline@gmail.com" className="flex items-center gap-2 hover:text-blue-100 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span>gitamediline@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <MapPin className="w-4 h-4" />
              <span>Mandleshwar & Indore, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Contact Bar - Always Visible */}
      <div className="lg:hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center text-xs">
          <a href="tel:+917067534498" className="flex items-center gap-1.5 font-medium hover:text-blue-100 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 70675 34498</span>
          </a>
          <a href="mailto:gitamediline@gmail.com" className="flex items-center gap-1.5 hover:text-blue-100 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Email Us</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg lg:top-0' : 'bg-white/95 backdrop-blur-sm lg:top-10'
      } top-8 lg:top-0`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold gradient-text">
                  GITA MEDILINE
                </span>
                <span className="text-[10px] lg:text-xs text-gray-600 font-medium tracking-wider">
                  SERVICES
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <>
                      <button className="nav-link flex items-center gap-1 group">
                        {link.name}
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a href={link.href} className="nav-link">
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <a href="tel:+917067534498" className="ml-4 btn-primary flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-lg">
            {/* Mobile Contact Info Card */}
            <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm">
              <h3 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact Gita Mediline
              </h3>
              <div className="space-y-2.5">
                <a 
                  href="tel:+917067534498" 
                  className="flex items-center gap-2.5 text-sm text-blue-700 hover:text-blue-900 font-medium bg-white px-3 py-2 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 70675 34498</span>
                </a>
                <a 
                  href="tel:+917389112339" 
                  className="flex items-center gap-2.5 text-sm text-blue-700 hover:text-blue-900 font-medium bg-white px-3 py-2 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 73891 12339</span>
                </a>
                <a 
                  href="mailto:gitamediline@gmail.com" 
                  className="flex items-center gap-2.5 text-sm text-blue-700 hover:text-blue-900 bg-white px-3 py-2 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all text-xs">gitamediline@gmail.com</span>
                </a>
                <div className="flex items-start gap-2.5 text-sm text-blue-700 pt-2 border-t border-blue-200 mt-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <p className="font-semibold">Head Office:</p>
                    <p>Mandleshwar, Khargone, MP</p>
                    <p className="font-semibold mt-1">Branch Office:</p>
                    <p>Indore, Madhya Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            
            {/* Call Now Button */}
            <a
              href="tel:+917067534498"
              className="block w-full mt-4 btn-primary text-center flex items-center justify-center gap-2 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Call Now - Emergency Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar on mobile */}
      <div className="h-24 lg:h-22" />
    </>
  );
}