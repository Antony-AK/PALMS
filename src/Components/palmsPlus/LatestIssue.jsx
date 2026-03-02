import React, { useEffect, useState } from "react";

const API = "http://localhost:5000/api/issues/published";

const LatestIssue = () => {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    const fetchLatest = async () => {
      const res = await fetch(API);
      const data = await res.json();

      if (data.length > 0) {
        setLatest(data[0]); // already sorted newest first
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
    <section className="bg-[#f4f6f9] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xs text-center tracking-widest text-[var(--palms-blue)] uppercase mb-6">
          Latest Edition
        </h1>

        <div className="bg-white rounded-2xl px-12 py-14 shadow-sm">
          <div className="grid md:grid-cols-[300px_1fr] gap-5 items-center">

            <div className="flex justify-center md:justify-start">
              <div className="overflow-hidden rounded-lg shadow-xl hover:-translate-y-2 transition">
                <img
                  src={latest.coverImage?.url}
                  alt={latest.title}
                  className="w-[260px] h-[380px] object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-[var(--palms-blue)]">
                {latest.title}
              </h2>

              {latest.subtitle && (
                <p className="text-sm text-gray-500 mt-1">
                  {latest.subtitle}
                </p>
              )}

              {latest.description && (
                <p className="text-sm text-gray-600 mt-4  leading-relaxed line-clamp-3">
                  {latest.description}
                </p>
              )}

              <p className="text-sm text-gray-500 mt-2 mb-6">
                {new Date(latest.publishedAt).toLocaleDateString()}
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                {latest.description}
              </p>

              <div className="mt-8 flex gap-4">

                <a
                  href={
                    latest?.pdfFile?.url
                      ? getDownloadUrl(latest.pdfFile.url, latest.title)
                      : "#"
                  } download
                  className="px-6 py-3 bg-[var(--palms-blue)] text-white rounded-md"
                >
                  Download PDF
                </a>

                <a
                  href={latest.pdfFile?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[var(--palms-blue)] text-[var(--palms-blue)] rounded-md hover:bg-[var(--palms-blue)] hover:text-white transition"
                >
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