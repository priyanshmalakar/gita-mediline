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
  MessageSquare,
  User,
  FileText,
  Navigation,
  Activity,
  Heart,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import contactUsImage from '../../assets/bg-banner/contactusBanner.jpeg'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      title: "24/7 Support Line",
      details: ["+91 70675 34498", "+91 73891 12339"],
      links: ["tel:+917067534498", "tel:+917389112339"],
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["gitamediline@gmail.com"],
      links: ["mailto:gitamediline@gmail.com"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Clock,
      title: "Service Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      links: null,
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const offices = [
    {
      type: "Head Office",
      address: "C-09, Main Road, Shri Nagar Colony",
      city: "Mandleshwar, District Khargone",
      state: "Madhya Pradesh",
      pincode: "451221",
      mapLink: "https://maps.google.com/?q=Mandleshwar+Khargone",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop",
    },
    {
      type: "Branch Office",
      address: "51, Main Vandana Nagar, Bangali Square",
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452001",
      mapLink: "https://maps.google.com/?q=Vandana+Nagar+Indore",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#005B77] to-[#003d52] text-white py-6 md:py-10 overflow-hidden">
        <div className="absolute inset-0 ">
          <div
             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
             backgroundImage: `url(${contactUsImage.src})`,
                filter: "brightness(0.75) contrast(1.1)",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45"></div>

        {/* Animated medical cross icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart
            className="absolute top-10 left-10 w-12 h-12 text-white/10 animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <Activity
            className="absolute top-20 right-20 w-16 h-16 text-white/10 animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          />
          <Stethoscope
            className="absolute bottom-10 left-1/4 w-14 h-14 text-white/10 animate-pulse"
            style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
          />
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
              infrastructure project?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards
      <section className="section bg-white relative">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 -mt-16 relative z-10 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
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
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block font-medium"
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

      {/* Contact Form - Compact Design */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom flex display-flex flex-col md:flex-row gap-8 md:gap-16">
          <div className=" mx-auto px-4">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Send className="w-4 h-4" />
                Quick Inquiry
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                We respond within 24 hours • All fields required
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                {" "}
                <div className="grid md:grid-cols-1 gap-8">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Office Image */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-teal-100 to-blue-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                            <MapPin className="w-4 h-4 text-teal-600" />
                            <span className="font-bold text-gray-900 text-sm">
                              {office.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Office Details */}
                      <div className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-gray-900 font-medium">
                                {office.address}
                              </p>
                              <p className="text-gray-600 text-sm mt-1">
                                {office.city}, {office.state}
                              </p>
                              <p className="text-gray-500 text-sm">
                                PIN: {office.pincode}
                              </p>
                            </div>
                          </div>

                          <a
                            href={office.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors duration-200 group/link"
                          >
                            <Navigation className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                            Get Directions
                          </a>
                        </div>

                        {/* Quick Contact */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <a
                              href="tel:+917067534498"
                              className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors duration-200"
                            >
                              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                                <Phone className="w-4 h-4 text-teal-600" />
                              </div>
                              <span className="text-sm font-medium">Call</span>
                            </a>
                            <a
                              href="mailto:gitamediline@gmail.com"
                              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Mail className="w-4 h-4 text-blue-600" />
                              </div>
                              <span className="text-sm font-medium">Email</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
                >
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project or query..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* Office Locations with Images */}
      <section className="mb-4 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Emergency Contact Banner */}
            <div className="mt-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <Activity className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Emergency Support
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-teal-100">
                    Our technical team is available for urgent healthcare
                    infrastructure support
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+917067534498"
                    className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    +91 70675 34498
                  </a>
                  <a
                    href="tel:+917389112339"
                    className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    +91 73891 12339
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
