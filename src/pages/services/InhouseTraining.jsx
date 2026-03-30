import React from "react";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import { inhouseData } from "../../data/servicesData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InhouseTraining = () => {
  const service = inhouseData;
  const navigate = useNavigate();

  const deliverSectionRef = useRef(null);
  const deliverLeftRef = useRef(null);
  const deliverRightRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    if (!deliverSectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: deliverSectionRef.current,
          start: "top center",
          end: () =>
            deliverRightRef.current.offsetHeight -
            deliverLeftRef.current.offsetHeight +
            window.innerHeight * 0.3,
          pin: deliverLeftRef.current,
          scrub: 0.6,
          anticipatePin: 1,
        });

        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: deliverSectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-white px-5 sm:px-6 md:px-8 pt-32 pb-28">
      <div className="max-w-[1280px] mx-auto space-y-28">

        {/* ================= HERO ================= */}
        <div className="relative grid lg:grid-cols-2 gap-14 items-center min-h-[450px]">

          <span className="absolute -top-24 -left-10 text-[160px] font-bold text-black/5">
            IN
          </span>

          <div className="space-y-8">
            <span className="uppercase tracking-[0.3em] text-sm text-[var(--palms-green)] font-bold">
              Programme
            </span>

            <h1 className="text-5xl md:text-6xl font-semibold text-[var(--palms-blue)] leading-tight">
              {service.title}
            </h1>

            <p className="text-lg font-medium text-[var(--palms-blue)]">
              {service.tagline}
            </p>

            <p className="text-[var(--palms-grey)] leading-relaxed max-w-[560px]">
              {service.intro[0]}
            </p>

            <div className="flex items-center gap-8 pt-4">
              <button className="btn-primary px-10 py-4">
                Enquire now
              </button>

              <div>
                <p className="text-xs uppercase text-gray-400 mb-1">Duration</p>
                <p className="text-[var(--palms-blue)] font-semibold">
                  {service.duration}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-[var(--palms-blue)]" />
            <img
              src={service.image}
              alt=""
              className="relative rounded-[32px] h-[400px] w-full object-cover"
            />
          </div>
        </div>

        {/* ================= APPROACH ================= */}
        <section className="bg-gray-100 p-10 rounded-3xl">
          <h2 className="text-3xl font-semibold text-[var(--palms-blue)]  mb-8">
            Our approach
          </h2>

          <ul className="space-y-4">
            {service.approach.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-2 h-2 mt-2 bg-[var(--palms-green)] rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-palms-gradient text-white py-16 md:py-20">

          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">

            {/* HEADER */}
            <h2 className="text-4xl md:text-5xl font-semibold mb-20">
              Key Training Programmes Offered
              <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />
            </h2>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-12">

              {Object.entries(service.programmes).map(([title, items], i) => (
                <div key={i} className="space-y-8">

                  {/* SUBHEADING (LIKE MODULE STYLE 🔥) */}
                  <div className="flex items-center gap-6">

                    {/* BIG NUMBER */}
                    <span className="text-4xl md:text-6xl font-bold text-white/20">
                      0{i + 1}
                    </span>

                    {/* TITLE */}
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                      {title}
                    </h3>

                  </div>

                  {/* ITEMS */}
                  <div className="pl-16 space-y-4">

                    {items.map((item, j) => (
                      <div key={j} className="flex gap-4 items-start">

                        {/* DOT */}
                        <span className="w-2 h-2 mt-2 bg-[var(--palms-green)] rounded-full flex-shrink-0" />

                        {/* TEXT */}
                        <p className="text-white/90 text-base md:text-lg leading-relaxed">
                          {item}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= ORGANISATIONS ================= */}
        <section className="py-10">

          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">

            {/* HEADER */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--palms-blue)]">
                 Our Inhouse Cleints
              </h2>

              <p className="mt-4 text-[var(--palms-grey)] max-w-[700px]">
                PALMS has conducted training programmes for a number of leading organisations including:
              </p>

              <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

              {service.organisations.map((item, i) => (
                <div
                  key={i}
                  className="group relative p-5 rounded-2xl border border-black/5 bg-white 
            hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-[var(--palms-grey)] group-hover:text-[var(--palms-blue)] transition text-sm sm:text-base leading-relaxed">
                    {item}
                  </p>

                  {/* subtle accent line */}
                  <div className="absolute bottom-0 left-5 h-[3px] bg-[var(--palms-green)] w-[20%] transition-all duration-500" />
                </div>
              ))}

            </div>

          </div>
        </section>



        {/* ================= CTA ================= */}
        <section className="bg-palms-gradient text-white py-16 sm:py-20 md:py-26 text-center px-5 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[900px] mx-auto leading-tight">
            Let’s create meaningful,
            measurable impact together.
          </h2>

          <button onClick={() => navigate("/contact")} className="mt-10 sm:mt-14 md:mt-16  bg-[var(--palms-green)] text-white
px-10 sm:px-14 md:px-20 py-4 sm:py-5 md:py-6 rounded-full text-base sm:text-lg md:text-xl
transition-all duration-300 hover:scale-105">
            Talk to PALMS
          </button>

        </section>

      </div>
    </section>
  );
};

export default InhouseTraining;