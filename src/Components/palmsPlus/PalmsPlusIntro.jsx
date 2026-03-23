import React from "react";
import mockup from "../../assets/journel.png";

const PalmsPlusIntro = () => {
  return (
    <section className="py-20 md:py-28 px-5 sm:px-6 md:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute -inset-6 bg-[var(--palms-blue)] rounded-[30px]" />
          
          <img
            src={mockup}
            alt="PALMS PLUS Journal"
            className="relative w-full  h-[260px] sm:h-[320px] md:h-[420px] object-cover rounded-[24px] shadow-2xl"
          />
        </div>

        {/* CONTENT SIDE */}
        <div className="space-y-8">

          {/* LABEL */}
          <span className="uppercase tracking-[0.3em] text-sm text-[var(--palms-green)] font-bold">
            Newsletter
          </span>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--palms-blue)] leading-tight">
            PALMS PLUS
          </h2>

          {/* TAGLINE */}
          <p className="text-lg text-[var(--palms-blue)] font-medium">
            Ideas that help you grow.
          </p>

          {/* DESCRIPTION */}
          <div className="space-y-4 text-[var(--palms-grey)] leading-relaxed max-w-[550px]">

            <p>
              PALMS PLUS is the in-house monthly newsletter of PALMS Training & Consulting Pvt Ltd, created as a platform to share ideas, insights, and perspectives that encourage continuous learning and personal growth.
            </p>

            <p>
              Each issue features thoughtfully curated articles on management, personal development, business insights, health, finance, relationships, and contemporary issues.
            </p>

 

          </div>

          {/* HIGHLIGHTS */}
          <div className="pt-4 space-y-4">

            {[
              "Monthly digital newsletter",
              "Articles on management, business, and personal growth",
              "Insights from experienced professionals and contributors",
              "Accessible across mobile, tablet, and desktop",
              "A platform for reflection, learning, and inspiration"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-2 h-2 mt-2 bg-[var(--palms-green)] rounded-full" />
                <p className="text-[var(--palms-grey)]">{item}</p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default PalmsPlusIntro;