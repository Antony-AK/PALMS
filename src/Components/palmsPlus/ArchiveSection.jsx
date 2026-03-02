import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";

const API = "http://localhost:5000/api/issues/published";

const ArchiveSection = () => {
  const [issues, setIssues] = useState([]);
  const isSubscriber = false; // later from auth

  useEffect(() => {
    const fetchIssues = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setIssues(data);
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
    <section className="bg-[#f4f6f9] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl text-[var(--palms-blue)] text-center">
          Archive
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-16 ">

          {issues.map((issue) => {
            const locked = !issue.isFree && !isSubscriber;

            return (
              <div key={issue._id} className="group relative bg-white p-5">

                <div className="relative overflow-hidden  shadow-lg ">

                  <img
                    src={issue.coverImage?.url}
                    alt={issue.title}
                    className="w-full h-[480px] object-cover group-hover:scale-105 transition duration-300"
                  />

                  {locked && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                      <Lock size={32} />
                    </div>
                  )}
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl text-[var(--palms-blue)]">
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
                    <p className="text-sm text-gray-600 mt-4 px-4 leading-relaxed line-clamp-3">
                      {issue.description}
                    </p>
                  )}

                  <a
                    href={
                      !locked && issue?.pdfFile?.url
                        ? getDownloadUrl(issue.pdfFile.url, issue.title)
                        : "#"
                    } className={`mt-6 inline-block px-6 py-3 rounded-lg ${locked
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[var(--palms-blue)] text-white"
                      }`}
                  >
                    {locked ? "Subscribe to Access" : "Download Issue"}
                  </a>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;