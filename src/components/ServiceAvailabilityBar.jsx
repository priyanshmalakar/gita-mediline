import React from "react";
import { MapPin, CheckCircle } from "lucide-react";

const ServiceAvailabilityBar = () => {
  return (
    <div className="bg-blue-900 py-3 overflow-hidden relative pt-23">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          {/* Main Message */}
          <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">
            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
            <span>Service Available Across Madhya Pradesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAvailabilityBar;
