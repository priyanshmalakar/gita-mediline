"use client";

import { useState, useEffect } from "react";
import { Eye, X } from "lucide-react";
import certificateImg from "../certifications/";

export default function CertificationPage() {
  const [activeCert, setActiveCert] = useState(null);

  const certifications = [
    {
      id: 1,
      image: "/certificates/fullstack.png",
    },
    {
      id: 2,
      image: "/certificates/react.png",
    },
    {
      id: 3,
      image: "/certificates/backend.png",
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
    <div className="min-h-screen bg-gray-50 px-6 py-12 select-none">
      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src={cert.image}
                alt="Certificate"
                draggable={false}
                className="h-full w-full object-contain pointer-events-none select-none p-3"
              />
            </div>

            <div className="p-4">
              <button
                onClick={() => setActiveCert(cert)}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                <Eye size={16} />
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute -top-12 right-0 text-white hover:scale-110 transition"
            >
              <X size={30} />
            </button>

            {/* Certificate View */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="text-7xl font-extrabold text-black/10 rotate-[-25deg] tracking-widest">
                  VIEW ONLY
                </span>
              </div>

              <img
                src={activeCert.image}
                alt="Certificate"
                draggable={false}
                className="w-full max-h-[85vh] object-contain select-none pointer-events-none bg-gray-100 p-4"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
