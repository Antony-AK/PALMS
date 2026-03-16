import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";

const API = "https://palms-backend-bwad.onrender.com/api/issues/published";

const ArchiveSection = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const res = await fetch(API);
      const data = await res.json();

      const newsletters = data.filter(
        (item) => item.campaignType === "newsletter" && item.isFree
      );

      setIssues(newsletters);
    };

    fetchIssues();
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

  return (
    <section className="bg-[#f4f6f9] py-12 sm:py-14 md:py-16 px-5 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--palms-blue)] text-center">
          Archive
        </h2>

        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-16">

          {issues.map((issue) => (
            <div key={issue._id} className="group relative bg-white p-4 sm:p-5">

              <div className="relative overflow-hidden shadow-lg">
                <img
                  src={issue.coverImage?.url}
                  alt={issue.title}
                  className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-lg sm:text-xl text-[var(--palms-blue)]">
                  {issue.title}
                </h3>

                {issue.subtitle && (
                  <p className="text-sm text-gray-500 mt-1">
                    {issue.subtitle}
                  </p>
                )}

                <p className="text-sm text-gray-500 mt-1">
                  {new Date(issue.publishedAt).toLocaleDateString()}
                </p>

                {issue.description && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 px-2 sm:px-4 leading-relaxed line-clamp-3">
                    {issue.description}
                  </p>
                )}

                <a
                  href={getDownloadUrl(issue.pdfFile?.url, issue.title)}
                  className="mt-5 sm:mt-6 inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base bg-[var(--palms-blue)] text-white"
                >
                  Download Issue
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;