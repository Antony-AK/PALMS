import React from "react";
import mockup from "../../assets/journel.png";

const PalmsPlusIntro = () => {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <img
            src={mockup}
            alt="PALMS PLUS Journal"
            className="rounded-xl h-[400px] shadow-xl"
          />
        </div>

        <div>
          <h2 className=" text-4xl text-[var(--palms-blue)]">
            What is PALMS PLUS?
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            PALMS PLUS is a curated leadership publication designed to
            support reflective practice, strategic thinking, and
            continuous professional development.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
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