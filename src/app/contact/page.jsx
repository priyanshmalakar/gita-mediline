"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Building2,
  CheckCircle,
  ChevronDown,
  MessageSquare,
  User,
  FileText,
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch(
        "https://gita-mediline-backend.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("Thank you! We'll get back to you within 24 hours.", {
          duration: 4000,
          icon: "✅",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try calling us directly.", {
          duration: 5000,
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Error:", error);
      toast.error("An error occurred. Please contact us directly.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 70675 34498", "+91 73891 12339"],
      links: ["tel:+917067534498", "tel:+917389112339"],
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["gitamediline@gmail.com"],
      links: ["mailto:gitamediline@gmail.com"],
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      links: null,
      color: "from-green-600 to-emerald-500",
    },
  ];

  const offices = [
    {
      type: "Head Office",
      address: "C-09, Main Road, Shri Nagar Colony",
      city: "Mandleshwar, District Khargone",
      state: "Madhya Pradesh – India",
      mapLink: "https://maps.google.com/?q=Mandleshwar+Khargone",
    },
    {
      type: "Branch Office",
      address: "51, Main Vandana Nagar, Bangali Square",
      city: "Indore",
      state: "Madhya Pradesh – India",
      mapLink: "https://maps.google.com/?q=Vandana+Nagar+Indore",
    },
  ];

  const faqs = [
    {
      question: "What services does Gita Mediline Services provide?",
      answer:
        "We specialize in Medical Gas Pipeline Systems (MGPS) and Modular Operation Theatre (MOT) solutions. Our services include complete system design, installation, testing, commissioning, and compliance documentation for healthcare facilities.",
    },
    {
      question: "Are your installations compliant with healthcare standards?",
      answer:
        "Yes, all our installations are executed by a Certified Authorised Person (AP – MGPS, HTM 02-01) and comply with HTM 02-01 standards and NABH requirements. We are ISO 9001:2015 and CE certified.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve hospitals across Madhya Pradesh and Central India, including Indore, Khargone, Mandleshwar, and surrounding regions. We have experience with both private and government healthcare facilities.",
    },
    {
      question: "How long does a typical MGPS installation take?",
      answer:
        "The timeline varies based on project scope and hospital size. A typical MGPS installation for a medium-sized hospital takes 4-8 weeks from design to commissioning. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you provide after-installation support?",
      answer:
        "Yes, we provide comprehensive after-installation support including system maintenance, testing, documentation updates, and technical assistance to ensure long-term reliable performance of your healthcare infrastructure.",
    },
    {
      question: "Can you work on government hospital clients?",
      answer:
        "Absolutely. We have extensive experience executing MGPS works for multiple District Hospitals across Madhya Pradesh on sub-contract basis, all compliant with HTM 02-01 standards.",
    },
    {
      question: "What makes Gita Mediline Services different?",
      answer:
        "We combine certified expertise (AP – MGPS, HTM 02-01), compliance-led execution, technical accuracy, and 5+ years of focused experience in healthcare infrastructure. Our commitment to safety and reliability sets us apart.",
    },
    {
      question: "How can I get a quote for my hospital project?",
      answer:
        "You can contact us via phone, email, or the contact form on this page. We'll schedule a consultation to understand your requirements and provide a detailed proposal with technical specifications and pricing.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-cyan-700 text-white py-6 md:py-10 overflow-hidden">
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
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Contact Us
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Have a question or need expert consultation for your healthcare
              infrastructure project? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      {/* <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        {info.links ? (
                          <a
                            href={info.links[idx]}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p className="text-gray-600">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form & Office Locations */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4">
            <div className=" gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project or query..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
              {/* Office Locations */}
              {/* <div>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Building2 className="w-4 h-4" />
                    Our Offices
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Visit Us
                  </h2>
                  <p className="text-gray-600">
                    We have offices across Madhya Pradesh to serve you better.
                  </p>
                </div>

                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {office.type}
                          </h3>
                          <p className="text-gray-600 mb-1">{office.address}</p>
                          <p className="text-gray-600 mb-1">{office.city}</p>
                          <p className="text-gray-600 mb-3">{office.state}</p>
                          <a
                            href={office.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                          >
                            <MapPin className="w-4 h-4" />
                            View on Google Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Prefer to Call?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+917067534498"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span>+91 70675 34498</span>
                    </a>
                    <a
                      href="tel:+917389112339"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span>+91 73891 12339</span>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <MessageSquare className="w-4 h-4" />
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our services and
                processes
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-blue-800 to-cyan-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-blue-100">
              Let's discuss how we can help build safe and compliant healthcare
              infrastructure for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:+917067534498" className="btn-hero-solid-secondary">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link href="/services" className="btn-outline">
                <CheckCircle className="w-5 h-5" />
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
