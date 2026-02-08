import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);
  const deliverSectionRef = useRef(null);
  const deliverLeftRef = useRef(null);
  const deliverRightRef = useRef(null);
  const progressRef = useRef(null);



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      ScrollTrigger.create({
        trigger: deliverSectionRef.current,
        start: "top center",
        end: () => {
          return (
            deliverRightRef.current.offsetHeight -
            deliverLeftRef.current.offsetHeight +
            window.innerHeight * 0.3
          );
        },
        pin: deliverLeftRef.current,
        pinSpacing: true,
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

    return () => ctx.revert();
  }, []);


  if (!service) {
    return <div className="py-32 text-center text-gray-500">Service not found</div>;
  }

  return (
    <section className="w-full bg-white px-6 pt-40 pb-32">
      <div className="max-w-[1280px] mx-auto space-y-32">

        {/* ================= HERO ================= */}
        <div className="relative grid lg:grid-cols-2 gap-20 items-center">

          {/* BACKGROUND INDEX */}
          <span className="absolute -top-24 -left-10 text-[180px] font-bold text-black/5 select-none">
            {service.id}
          </span>

          <div className="space-y-10 relative z-10">
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-[var(--palms-green)]">
              Programme
            </span>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold text-[var(--palms-blue)] leading-[1.05]">
              {service.title}
            </h1>

            <p className="text-xl text-[var(--palms-grey)] max-w-[560px] leading-relaxed">
              {service.heroDesc}
            </p>

            <div className="flex items-center gap-8 pt-6">
              <button className="btn-primary px-12 py-5">
                Enquire now
              </button>

              <div className="text-sm text-[var(--palms-grey)]">
                <span className="block uppercase tracking-wide text-xs mb-1">Duration</span>
                <strong className="text-[var(--palms-blue)]">{service.duration}</strong>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-[var(--palms-blue)]/10 to-transparent" />
            <img
              src={service.image}
              alt={service.title}
              className="relative rounded-[32px] w-full h-[460px] object-cover"
            />
          </div>
        </div>


        {/* ================= WHAT IT DELIVERS (PINNED) ================= */}
        <div
          ref={deliverSectionRef}
          className="grid md:grid-cols-2 gap-20 justify-center items-start"
        >

          {/* LEFT – PINNED */}
          <div ref={deliverLeftRef} className="pt-10">
            <h3 className="text-2xl font-semibold text-[var(--palms-blue)]">
              What this programme delivers
            </h3>
            <p className="mt-6 text-[var(--palms-grey)] max-w-[460px]">
              Designed outcomes that directly translate into confidence, clarity,
              and measurable workplace effectiveness.
            </p>
          </div>

          <div className="relative">

            {/* SCROLL RAIL */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-black/10">
              <span
                ref={progressRef}
                className="absolute top-0 left-0 w-full h-full bg-[var(--palms-green)]"
                style={{ transform: "scaleY(0)" }}
              />
            </div>

            {/* POINTS */}
            <div ref={deliverRightRef} className="space-y-14 pl-10 pb-20">
              {service.highlights.map((item, i) => (
                <div
                  key={i}
                  className="relative py-6"
                >
                  <span className="absolute -left-[11px] top-9 w-3 h-3 rounded-full bg-[var(--palms-green)]" />
                  <p className=" ms-5 text-[var(--palms-blue)] text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>


        </div>



        {/* ================= WHO + OUTCOMES ================= */}
        <div className="grid md:grid-cols-2 gap-28">
          <div className="bg-[var(--palms-grey-light)] rounded-3xl px-12 py-16">
            <h3 className="text-xl font-semibold text-[var(--palms-blue)]">
              Who this programme is for
            </h3>

            <ul className="mt-10 space-y-6">
              {service.whoItsFor.map((item, i) => (
                <li key={i} className="text-[var(--palms-grey)] text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--palms-blue)]">
              Outcomes you can expect
            </h3>

            <ul className="mt-10 space-y-6">
              {service.outcomes.map((item, i) => (
                <li key={i} className="flex gap-4 text-[var(--palms-grey)] text-lg">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--palms-green)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* ================= MODULES (FEATURE STRIP) ================= */}
        <div className="rounded-[48px] bg-[var(--palms-blue)] px-16 py-24 text-white">
          <h3 className="text-4xl font-semibold max-w-[620px] leading-tight">
            Learning modules designed for real-world impact
          </h3>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {service.modules.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 px-8 py-6 text-lg backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>


        <div className="max-w-[900px]">
          <h3 className="text-2xl font-semibold text-[var(--palms-blue)]">
            How learning happens
          </h3>

          <div className="mt-10 space-y-6">
            {service.methodology.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start"
              >
                <span className="text-[var(--palms-green)] font-semibold">
                  0{i + 1}
                </span>
                <p className="text-lg text-[var(--palms-grey)] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>



        {/* ================= APPROACH ================= */}
        <div className="max-w-[820px]">
          <h3 className="text-2xl font-semibold text-[var(--palms-blue)]">
            Our approach
          </h3>
          <p className="mt-6 text-lg text-[var(--palms-grey)] leading-relaxed">
            {service.approach}
          </p>
        </div>

        <div className="bg-[var(--palms-grey-light)] rounded-3xl px-12 py-16">
          <h3 className="text-2xl font-semibold text-[var(--palms-blue)]">
            Why organisations choose PALMS
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {service.whyPalms.map((item, i) => (
              <div key={i} className="flex gap-4 text-[var(--palms-grey)]">
                <span className="mt-2 w-2 h-2 rounded-full bg-[var(--palms-green)]" />
                {item}
              </div>
            ))}
          </div>
        </div>


        {/* ================= FINAL CTA ================= */}
        <div className="text-center py-32">
          <h4 className="text-4xl font-semibold text-[var(--palms-blue)] mb-8">
            Ready to create meaningful impact?
          </h4>

          <p className="text-lg text-[var(--palms-grey)] mb-12 max-w-[560px] mx-auto">
            Let’s design a learning experience aligned with your people,
            culture, and business goals.
          </p>

          <button className="btn-primary px-16 py-6 text-lg">
            Talk to PALMS
          </button>
        </div>


      </div>
    </section>
  );
};

export default ServiceDetail;
