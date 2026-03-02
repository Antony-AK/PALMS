import React from "react";

const PalmsPlusHero = () => {
  return (
    <section className="relative bg-palms-gradient text-white py-44 overflow-hidden">

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" /> */}

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        <p className="text-sm tracking-widest uppercase text-white/70 mb-1">
          PALMS Publication
        </p>

        <h1 className=" text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
          PALMS PLUS<br />
          <span className="text-white/85 mt-5 block ">
            A Leadership Journal<br />
            for Continuous Growth
          </span>
        </h1>

        <p className="mt-10 text-xl text-white/80 max-w-[640px] leading-relaxed">
          Quarterly insights, reflections, and practical leadership thinking
          designed to strengthen clarity, decision-making, and long-term
          professional growth.
        </p>

        <div className="mt-12 flex flex-wrap gap-6">

          <button className="px-8 py-4 bg-white text-[var(--palms-blue)] font-medium rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg">
            Subscribe Now
          </button>

          <button className="px-8 py-4 border border-white/40 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
            Download Latest Issue
          </button>

        </div>

      </div>
    </section>
  );
};

export default PalmsPlusHero;