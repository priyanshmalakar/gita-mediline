"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
  Play,
  Building2,
  X,
} from "lucide-react";
import vivekHospital from "../assets/clientBanner/vivekHospital.jpeg";
import motherHood from "../assets/clientBanner/motherhood.jpeg";
import metroMedicare from "../assets/clientBanner/metroHospital.jpeg";
import sankareye from "../assets/clientBanner/sankareye.jpeg";

const OurClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const clients = [
    {
      id: 1,
      name: "Sankara Eye Centre",
      location: "Indore, Madhya Pradesh",
      testimonial:
        "The MGPS installation by Gita Mediline Services was exceptional. Professional team, quality work, and complete HTM compliance. Highly recommended for healthcare infrastructure.",
      image: sankareye,
      type: "image",
      category: "Eye Care Hospital",
    },
    {
      id: 2,
      name: "Motherhood Hospital",
      location: "Indore, Madhya Pradesh",
      testimonial:
        "Outstanding work on our PICU setup. The team understood our critical care requirements perfectly and delivered beyond expectations. Their expertise in pediatric care infrastructure is commendable.",
      image: motherHood,
      type: "image",
      category: "Women & Child Care",
    },
    {
      id: 3,
      name: "Care CHL Hospital",
      location: "Indore, Madhya Pradesh",
      testimonial:
        "Excellent work on our Cath Lab and Day Care infrastructure. The medical gas systems are working flawlessly. GMS is our trusted partner for all MGPS needs.",
      videoUrl: "https://www.youtube.com/embed/vcZZ53oEHL0?si=zdDSZOVih9NLhPqC",
      thumbnail: "/assets/clients/care-chl-thumb.jpg",
      type: "video",
      category: "Cardiac Care Specialist",
    },
    {
      id: 4,
      name: "Vijay Lakshmi Hospital",
      location: "Khargone, Madhya Pradesh",
      testimonial:
        "Gita Mediline Services completed our Modular OT and complete MGPS setup with precision. The quality of work and adherence to safety standards is outstanding.",
      videoUrl: "https://www.youtube.com/embed/0b9NMCbO8pg?si=V9S2Kkr6ijaghWEZ",
      thumbnail: "/assets/clients/vijay-lakshmi-thumb.jpg",
      type: "video",
      category: "Multi-specialty Hospital",
    },
    {
      id: 5,
      name: "Vivek Memorial Hospital",
      location: "Indore, Madhya Pradesh",
      testimonial:
        "Professional execution of NICU MGPS installation. The team's understanding of neonatal care requirements and their commitment to quality is impressive.",
      videoUrl: "https://www.youtube.com/embed/AB43gBw_Cmw?si=LC-O8Nybb5hFU6Js",
      thumbnail: "/assets/clients/vivek-thumb.jpg",
      image : vivekHospital,
      type: "image",
      category: "Multi-specialty Hospital",
    },
    {
      id: 6,
      name: "Nakshatra Hospital",
      location: "Indore, Madhya Pradesh",
      testimonial:
        "Complete satisfaction with the ICU MGPS infrastructure setup. The team's expertise in critical care medical gas systems and their commitment to quality is excellent.",
      videoUrl: "https://www.youtube.com/embed/0b9NMCbO8pg?si=V9S2Kkr6ijaghWEZ",
      thumbnail: "/assets/clients/nakshatra-thumb.jpg",
      type: "video",
      category: "Multi-specialty Hospital",
    },
    {
      id: 7,
      name: "Metro Medicare Hospital",
      location: "Burhanpur, Madhya Pradesh",
      testimonial:
        "Complete satisfaction with the MGPS infrastructure setup. The team's expertise in medical gas systems and their commitment to quality is impressive.",
      image: metroMedicare,
      type: "image",
      category: "Multi-specialty Hospital",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const openVideoModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
    setIsAutoPlaying(false);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl("");
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  // Get the slides to display (current, previous, next)
  const getVisibleSlides = () => {
    const prev = (currentSlide - 1 + clients.length) % clients.length;
    const next = (currentSlide + 1) % clients.length;
    return [prev, currentSlide, next];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23005B77' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#44AB7E]/10 text-[#005B77] px-4 py-2 rounded-full text-sm font-semibold">
            <Building2 className="w-4 h-4" />
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Happy{" "}
            <span className="bg-gradient-to-r from-[#005B77] to-[#44AB7E] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#005B77] to-[#44AB7E] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[500px] md:h-[450px] flex items-center justify-center">
            {/* Slides */}
            {visibleSlides.map((slideIndex, position) => {
              const client = clients[slideIndex];
              const isCenter = position === 1;
              const isLeft = position === 0;
              const isRight = position === 2;

              return (
                <div
                  key={client.id}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isCenter
                      ? "z-30 scale-100 opacity-100"
                      : "z-10 scale-75 opacity-40"
                  } ${
                    isLeft
                      ? "-translate-x-[110%] md:-translate-x-[80%]"
                      : isRight
                      ? "translate-x-[110%] md:translate-x-[80%]"
                      : "translate-x-0"
                  }`}
                  style={{
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  {/* Client Card */}
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-[280px] md:w-[400px] border border-gray-100">
                    {/* Image/Video Section */}
                    <div className="relative h-48 md:h-56 bg-gradient-to-br from-[#005B77]/10 to-[#44AB7E]/10 flex items-center justify-center overflow-hidden">
                      {client.type === "image" ? (
                        <div className="relative w-full h-full">
                          {/* Image placeholder - replace with actual images */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#005B77] to-[#44AB7E] flex items-center justify-center shadow-xl">
                              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-white" />
                            </div>
                          </div>
                          {/* When you have actual images, uncomment and use: */}
                          <img
                            src={client.image.src}
                            alt={client.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className="relative w-full h-full group cursor-pointer"
                          onClick={() => openVideoModal(client.videoUrl)}
                        >
                          {/* YouTube Video Thumbnail */}
                          <img
                            src={`https://img.youtube.com/vi/${client.videoUrl.split('/embed/')[1].split('?')[0]}/maxresdefault.jpg`}
                            alt={`${client.name} video thumbnail`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to medium quality if maxresdefault doesn't exist
                              e.target.src = `https://img.youtube.com/vi/${client.videoUrl.split('/embed/')[1].split('?')[0]}/mqdefault.jpg`;
                            }}
                          />
                          {/* Dark overlay on hover */}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                          {/* Play button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-8 h-8 md:w-10 md:h-10 text-[#005B77] ml-1" />
                            </div>
                          </div>
                          {/* Video badge */}
                          <div className="absolute top-3 right-3 bg-[#44AB7E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            Video
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 space-y-4">
                      {/* Quote Icon */}
                      <div className="flex justify-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#005B77]/10 to-[#44AB7E]/10 flex items-center justify-center">
                          <Quote className="w-5 h-5 text-[#005B77]" />
                        </div>
                      </div>

                      {/* Testimonial */}
                      <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed line-clamp-4">
                        "{client.testimonial}"
                      </p>

                      {/* Client Info */}
                      <div className="text-center space-y-2 pt-4 border-t border-gray-100">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {client.name}
                        </h3>
                        <p className="text-xs md:text-sm font-medium text-[#44AB7E]">
                          {client.category}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-gray-500">
                          <MapPin className="w-4 h-4 text-[#005B77]" />
                          <span className="text-xs md:text-sm">
                            {client.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl border-2 border-[#005B77]/20 flex items-center justify-center hover:bg-[#005B77] hover:border-[#005B77] text-[#005B77] hover:text-white transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl border-2 border-[#44AB7E]/20 flex items-center justify-center hover:bg-[#44AB7E] hover:border-[#44AB7E] text-[#44AB7E] hover:text-white transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-8 h-2 bg-gradient-to-r from-[#005B77] to-[#44AB7E]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs text-gray-500 hover:text-[#005B77] transition-colors"
          >
            {isAutoPlaying ? "⏸ Pause" : "▶ Play"} Auto-slide
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close video"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={currentVideoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurClients;