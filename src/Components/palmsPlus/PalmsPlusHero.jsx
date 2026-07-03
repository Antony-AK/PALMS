import React, { useEffect, useState } from "react";

const API = "https://palms-backend-bwad.onrender.com/api/issues/published";

const PalmsPlusHero = () => {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    const fetchLatest = async () => {
      const res = await fetch(API);
      const data = await res.json();

      const newsletters = data.filter(
        (item) => item.campaignType === "newsletter" && item.isFree
      );

      if (newsletters.length > 0) {
        setLatest(newsletters[0]);
      }
    };

    fetchLatest();
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("subscribe-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getDownloadUrl = (url, title) => {
    if (!url) return "#";

    const safeTitle = title
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "");

    return url.replace(
      "/upload/",
      `/upload/fl_attachment:PALMS-PLUS-${safeTitle}/`
    );
  };

  return (
    <section className="relative bg-palms-gradient text-white py-24 sm:py-32 md:py-40 lg:py-44 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8  mt-8 md:mt-0 relative z-10">
        <p className="text-xs sm:text-sm tracking-widest uppercase text-white/70 mb-2">
          PALMS Publication
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight">
          PALMS PLUS<br />
          <span className="text-white/85 mt-4  md:mt-5 block">
            An Inhouse Journal<br />
            for Continuous Growth
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-white/80 max-w-[640px] leading-relaxed">
          Monthly insights, reflections, and practical leadership thinking
          designed to strengthen clarity, decision-making, and long-term growth.
        </p>

        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">

          {/* SUBSCRIBE BUTTON */}
          <button
            onClick={handleScroll}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[var(--palms-blue)] font-medium rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg text-sm sm:text-base"          >
            Subscribe Now
          </button>

          {/* DOWNLOAD BUTTON */}
          {latest?.pdfFile?.url && (
            <a
              href={getDownloadUrl(latest.pdfFile.url, latest.title)}
              download
              className="px-6 sm:px-8 py-3 sm:py-4 border border-white/40 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"            >
              Download Latest Issue
            </a>
          )}

        </div>
      </div>
    </section>
  );
};

export default PalmsPlusHero;