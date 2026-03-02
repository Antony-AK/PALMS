import React from "react";

const AdvertiseSection = () => {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className=" text-4xl text-[var(--palms-blue)]">
          Partner with PALMS PLUS
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Reach leadership professionals, corporate decision makers,
          educators, and consultants through curated placements inside
          PALMS PLUS - a trusted leadership publication.
        </p>

        {/* Audience Highlights */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>• Senior Leaders</span>
          <span>• Business Owners</span>
          <span>• Educators</span>
          <span>• Consultants</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

          {/* Primary Enquiry */}
          <button className="px-8 py-4 bg-[var(--palms-blue)] text-white rounded-lg hover:opacity-90 transition shadow-md">
            Enquire for Advertising
          </button>

          {/* Download Kit */}
          <a
            href="/pdf/PALMS-Advertisement-Form.jpg"
            download
            className="px-8 py-4 border border-[var(--palms-blue)] text-[var(--palms-blue)] rounded-lg hover:bg-[var(--palms-blue)] hover:text-white transition"
          >
            Download Media Kit
          </a>

        </div>

      </div>
    </section>
  );
};

export default AdvertiseSection;