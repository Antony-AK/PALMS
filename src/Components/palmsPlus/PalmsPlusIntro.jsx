import React from "react";
import mockup from "../../assets/journel.png";

const PalmsPlusIntro = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
        <div>
          <img
            src={mockup}
            alt="PALMS PLUS Journal"
            className="rounded-xl w-full max-w-[420px] h-[240px] sm:h-[300px] md:h-[400px] object-cover shadow-xl mx-auto md:mx-0" />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--palms-blue)]">
            What is PALMS PLUS?
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
            PALMS PLUS is a curated leadership publication designed to
            support reflective practice, strategic thinking, and
            continuous professional development.
          </p>

          <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
            <li>• Quarterly digital issues</li>
            <li>• Exclusive leadership insights</li>
            <li>• Real organisational case reflections</li>
            <li>• Interviews with experienced leaders</li>
            <li>• Practical tools & structured frameworks</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default PalmsPlusIntro;