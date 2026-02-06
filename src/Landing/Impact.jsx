import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal
      gsap.from(".impact-reveal", {
        opacity: 0,
        y: 16,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Number count-up
      gsap.utils.toArray(".impact-number").forEach((el) => {
        const target = Number(el.dataset.value);

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.6,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
            onUpdate: function () {
              el.innerText =
                target >= 1000
                  ? `${Math.floor(el.innerText)}+`
                  : Math.floor(el.innerText);
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-40">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT – AUTHORITY STATEMENT */}
        <div className="impact-reveal">
          <span className="text-xs text-gray-500 block mb-6">
            Our impact
          </span>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-[var(--palms-blue)] max-w-[520px]">
            Learning as a
            <br />
            lifelong practice,
            <br />
            shaped over
            <br />
            decades
          </h2>

          <p className="mt-10 text-lg text-[var(--palms-grey)] max-w-[520px]">
            Since 2000, PALMS Training & Consulting has remained committed
            to enabling individuals and organisations to think clearly,
            lead responsibly, and grow continuously through structured
            learning experiences.
          </p>
        </div>

        {/* RIGHT – EVIDENCE SYSTEM */}
        <div className="relative pl-10 impact-reveal">

          {/* Vertical Accent Line */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--palms-blue)]/20"></div>

          <div className="flex flex-col gap-20">

            {/* METRIC */}
            <div className="impact-reveal">
              <h3
                className="text-7xl font-semibold text-[var(--palms-blue)] impact-number"
                data-value="25"
              >
                0
              </h3>
              <p className="mt-4 text-base font-medium text-black">
                Years of professional learning initiatives
              </p>
              <p className="mt-3 text-sm text-[var(--palms-grey)] max-w-[420px]">
                A sustained commitment to leadership development,
                management thinking, and behavioural growth.
              </p>
            </div>

            {/* METRIC */}
            <div className="impact-reveal">
              <h3
                className="text-7xl font-semibold text-[var(--palms-blue)] impact-number"
                data-value="12"
              >
                0
              </h3>
              <p className="mt-4 text-base font-medium text-black">
                Structured programmes conducted annually
              </p>
              <p className="mt-3 text-sm text-[var(--palms-grey)] max-w-[420px]">
                Regular monthly learning programmes designed
                exclusively for members.
              </p>
            </div>

            {/* METRIC */}
            <div className="impact-reveal">
              <h3
                className="text-7xl font-semibold text-[var(--palms-blue)] impact-number"
                data-value="1000"
              >
                0+
              </h3>
              <p className="mt-4 text-base font-medium text-black">
                Professionals and learners impacted
              </p>
              <p className="mt-3 text-sm text-[var(--palms-grey)] max-w-[420px]">
                Individuals across industries engaged through
                classroom programmes, workshops, and experiential learning.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
