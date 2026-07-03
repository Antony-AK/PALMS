import React from "react";
import { useNavigate } from "react-router-dom";

const AdvertiseSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--palms-blue)]">
          Partner with PALMS PLUS
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Reach leadership professionals, corporate decision makers,
          educators, and consultants through curated placements inside
          PALMS PLUS - a trusted leadership publication.
        </p>

        {/* Audience Highlights */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
          <span>• Senior Leaders</span>
          <span>• Business Owners</span>
          <span>• Educators</span>
          <span>• Consultants</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5">

          {/* Primary Enquiry */}
          {/* <button onClick={() => navigate("/contact")} className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-[var(--palms-blue)] text-white rounded-lg hover:opacity-90 transition shadow-md">
            Enquire for Advertising
          </button> */}

          {/* Download Kit */}
          <a
            href="/pdf/PALMS-Advertisement-Form.jpg"
            download
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border border-[var(--palms-blue)] text-[var(--palms-blue)] rounded-lg hover:bg-[var(--palms-blue)] hover:text-white transition"          >
            Download Advertisement Form
          </a>

        </div>

      </div>
    </section>
  );
};

export default AdvertiseSection;