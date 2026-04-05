import React, { useEffect, useState } from "react";

const API = "https://palms-backend-bwad.onrender.com/api/issues/published";

const LatestIssue = () => {
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

  if (!latest) return null;

  return (
    <section className="bg-[#f4f6f9] py-14 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-[10px] sm:text-xs text-center tracking-widest text-[var(--palms-blue)] uppercase mb-4 sm:mb-6">
          Latest Edition
        </h1>

        <div className="bg-white rounded-2xl px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-5 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="overflow-hidden rounded-lg shadow-xl hover:-translate-y-2 transition">
                <img
                  src={latest.coverImage?.url}
                  alt={latest.title}
                  className="w-[180px] sm:w-[220px] md:w-[260px] h-[260px] sm:h-[320px] md:h-[380px] object-cover" />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[var(--palms-blue)]">
                {latest.title}
              </h2>

              {latest.subtitle && (
                <p className="text-sm text-gray-500 mt-1">
                  {latest.subtitle}
                </p>
              )}

             

              <p className="text-sm text-gray-500 mt-2 mb-6">
                {new Date(latest.publishedAt).toLocaleDateString()}
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                {latest.description}
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

                <a
                  href={
                    latest?.pdfFile?.url
                      ? getDownloadUrl(latest.pdfFile.url, latest.title)
                      : "#"
                  } download
                  className="px-5 sm:px-6 py-3 bg-[var(--palms-blue)] text-white rounded-md text-sm sm:text-base"                >
                  Download PDF
                </a>

                <a
                  href={latest.pdfFile?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3 border border-[var(--palms-blue)] text-[var(--palms-blue)] rounded-md hover:bg-[var(--palms-blue)] hover:text-white transition text-sm sm:text-base"                >
                  View Online
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestIssue;