import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: "01",
    title: "Leadership Development Journeys",
    desc: "Multi-month leadership programs focused on clarity, confidence, and decision-making for professionals across industries.",
  },
  {
    id: "02",
    title: "Corporate Capability Building",
    desc: "Custom-designed learning interventions aligned with organisational culture, performance goals, and leadership pipelines.",
  },
  {
    id: "03",
    title: "Experiential Outbound Programs",
    desc: "High-impact outbound learning experiences that strengthen collaboration, trust, and leadership behaviour in teams.",
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".portfolio-item").forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 65%",
          end: "bottom 55%",
          onEnter: () =>
            gsap.to(item, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            }),
          onLeaveBack: () =>
            gsap.to(item, {
              opacity: 0.4,
              y: 20,
              duration: 0.4,
            }),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-32 bg-[var(--palms-grey-light)]"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="max-w-[720px] mb-20">
          <span className="text-xs text-gray-500 block mb-4">
            Our Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[var(--palms-blue)]">
            Learning engagements
            <br />
            that define our work
          </h2>

          <p className="mt-6 text-lg text-[var(--palms-grey)]">
            Selected engagements that reflect PALMS’ approach to leadership,
            capability building, and experiential learning.
          </p>
        </div>

        {/* PORTFOLIO LIST */}
        <div className="flex flex-col gap-14">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item bg-[var(--palms-blue)] p-12 rounded-xl opacity-80 translate-y-6"
            >
              <span className="text-sm font-medium text-[var(--palms-blue)]">
                {item.id}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-white max-w-[520px]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-[var(--palms-grey)] leading-relaxed max-w-[620px]">
                {item.desc}
              </p>

              <button className="mt-6 text-sm text-white flex items-center gap-1 hover:underline underline-offset-4">
                View engagement →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
