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
  <section
  ref={sectionRef}
  className="relative w-full px-6 py-12 overflow-hidden bg-white"
>
  <div className="absolute right-0 top-0 h-full w-[48%] bg-[var(--palms-blue)] rounded-4xl me-10" />

  <div className="relative max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">

    {/* LEFT – NARRATIVE */}
    <div className="impact-reveal">
      <span className="text-lg  text-gray-500 tracking-widest uppercase  block mb-6">
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

      <p className="mt-10 text-lg text-[var(--palms-grey)] max-w-[520px] leading-relaxed">
        Since 2000, PALMS has remained committed to enabling individuals and
        organisations to think clearly, lead responsibly, and grow continuously
        through structured, value-driven learning experiences.
      </p>
    </div>

    {/* RIGHT – IMPACT SYSTEM */}
    <div className="relative pl-14 impact-reveal ">

      {/* Gradient rail */}
      <div className="absolute left-0 top-0  h-full w-[3px] bg-gradient-to-b from-[var(--palms-green)] via-[var(--palms-green)] to-transparent" />

      <div className="flex flex-col gap-16 ">

        {/* CARD */}
        {[
          {
            value: 25,
            title: "Years of professional learning initiatives",
            desc:
              "A sustained commitment to leadership development, management thinking, and behavioural growth.",
          },
          {
            value: 12,
            title: "Structured programmes conducted annually",
            desc:
              "Regular monthly learning programmes designed exclusively for members.",
          },
          {
            value: 1000,
            title: "Professionals and learners impacted",
            desc:
              "Individuals across industries engaged through workshops, programmes, and experiential learning.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="impact-reveal bg-white rounded-3xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
          >
            <h3
              className="text-7xl font-semibold text-[var(--palms-green)] impact-number"
              data-value={item.value}
            >
              0
            </h3>

            <p className="mt-4 text-base font-semibold text-[var(--palms-blue)]">
              {item.title}
            </p>

            <p className="mt-3 text-sm text-[var(--palms-grey)] leading-relaxed max-w-[420px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default ImpactSection;
