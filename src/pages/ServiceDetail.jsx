import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { useLayoutEffect, useRef } from "react";
import pdbig from "../assets/pdbig.jpg"

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
  const navigate = useNavigate();



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {


    const mm = gsap.matchMedia();

    // ✅ DESKTOP / LAPTOP
    mm.add("(min-width: 1024px)", () => {

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
      mm.add("(max-width: 1023px)", () => {
      gsap.set(progressRef.current, { scaleY: 1 });
    });

    });

    return () => ctx.revert();
  }, [service]);


  if (!service) {
    return <div className="py-32 text-center text-gray-500">Service not found</div>;
  }

  return (
    <section className="w-full bg-white px-5 sm:px-6 md:px-8 pt-32 sm:pt-32 md:pt-36 pb-20 sm:pb-28 md:pb-32">
      <div className="max-w-[1280px] mx-auto space-y-16 sm:space-y-24 md:space-y-32">

        {/* ================= HERO ================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center min-h-[420px] lg:h-[500px]">

          {/* BACKGROUND INDEX */}
          <span className="absolute -top-16 sm:-top-20 md:-top-24 -left-6 sm:-left-8 md:-left-10 text-[90px] sm:text-[140px] md:text-[180px] font-bold text-black/5 select-none">
            {service.id}
          </span>

          <div className="space-y-8 relative z-10">
            <span className="inline-block text-lg tracking-[0.3em] font-bold uppercase text-[var(--palms-green)]">
              Programme
            </span>

            <h1 className="text-5xl md:text-6xl  font-semibold text-[var(--palms-blue)] mb-5 leading-[1.05]">
              {service.title}
            </h1>

             <p className="text-lg sm:text-lg font-medium text-[var(--palms-blue)] mb-3 max-w-[560px]  ">
              {service.shortDesc}
            </p>

            <p className="text-base sm:text-lg text-[var(--palms-grey)] max-w-[560px] leading-relaxed">
              {service.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-6">
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
            <div className="absolute -inset-4 md:-inset-8 rounded-[40px] bg-[var(--palms-blue)] " />
            <img
              src={service.image}
              alt={service.title}
              className="relative rounded-[32px] w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover" />
          </div>
        </div>


        {/* ================= WHAT IT DELIVERS (PINNED) ================= */}
        <div
          ref={deliverSectionRef}
className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 justify-center items-start"        >

          {/* LEFT – PINNED */}
          <div ref={deliverLeftRef} className="pt-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--palms-blue)]">
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
              {service.highlights?.map((item, i) => (
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


        {/* ================= MODULES (FEATURE STRIP) ================= */}
        <section className="bg-palms-gradient text-white py-14 sm:py-16 md:py-18">

          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">

            <h2 className="text-4xl font-semibold mb-20">
              Learning modules
              <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />

            </h2>


            <div className="space-y-10">

              {service.modules?.map((item, i) => (
                <div key={i} className="flex gap-10 items-start">

                  <span className="text-3xl md:text-5xl font-bold text-white/20">
                    0{i + 1}
                  </span>

                  <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-[900px]">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= WHO + OUTCOMES ================= */}
        <div className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-[900px]">
          <div className="bg-[var(--palms-grey-light)] rounded-3xl px-6 sm:px-8 md:px-12 py-10 sm:py-14 md:py-16">
            <h3 className="text-xl font-semibold text-[var(--palms-blue)]">
              Who this programme is for
            </h3>

            <ul className="mt-10 space-y-6">
              {service.whoItsFor?.map((item, i) => (
                <li key={i} className="text-[var(--palms-grey)] text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl mt-10 font-semibold text-[var(--palms-blue)]">
              Outcomes you can expect
            </h3>

            <ul className="mt-10 space-y-6">
              {service.outcomes?.map((item, i) => (
                <li key={i} className="flex gap-4 text-[var(--palms-grey)] text-lg">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--palms-green)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>


        <section className="relative py-10 overflow-hidden">

          {/* BACKGROUND IMAGE LAYER */}
          <div className="absolute right-0 top-0 w-[45%] h-full bg-[var(--palms-blue)] opacity-100 pointer-events-none border-8 border-[var(--palms-blue)]">
            {/* <img
      // src={pdbig}
      alt=""
      className="w-full h-full object-fill bg-[var(--palms-blue)"
    /> */}
          </div>

       <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8">

            {/* HEADER */}
            <div className="mb-24">
              <h2 className="text-4xl font-semibold text-[var(--palms-blue)]">
                How learning happens
              </h2>
              <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />
            </div>

            {/* STRUCTURE */}
            <div className="relative">

              {/* LEFT ACCENT SPINE */}
              <div className="absolute -left-10 top-0 bottom-0 w-[3px] bg-[var(--palms-green)]/20" />

              <div className="space-y-10 pl-5">

                {service.methodology?.map((item, i) => (
                  <div
                    key={i}
                    className="relative group "
                  >

                    {/* NUMBER */}
                    <span className="absolute -left-16 text-6xl font-bold text-gray-200 select-none">
                      0{i + 1}
                    </span>

                    {/* CARD PANEL */}
                    <div className="
              relative
              bg-white
              border border-[var(--palms-blue)]
              rounded-3xl
              px-12 py-10
             ml-2
              border-l-4 border-bg-[var(--palms-blue)]
              shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              transition-all duration-500
              group-hover:-translate-y-2
              group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)]
            ">

                      <div className="h-[3px] w-10 bg-[var(--palms-green)] mb-6" />

                      <p className="text-xl text-[var(--palms-blue)] leading-relaxed max-w-[720px]">
                        {item}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        <section className="py-20 bg-[var(--palms-blue)]/5 ">

          <div className="max-w-[1200px] mx-auto px-10">

            <h2 className="text-3xl font-semibold text-center text-[var(--palms-blue)] mb-16">
              Why organisations choose PALMS
            </h2>

            <div className="space-y-16">

              {service.whyPalms?.map((item, i) => (
                <div
                  key={i}
                  className={`max-w-[800px] ${i % 2 === 0 ? "" : "ml-auto"
                    }`}
                >
                  <div className="bg-[var(--palms-blue)] text-white p-10 rounded-3xl shadow-lg border-b-8 border-[var(--palms-green)]">
                    <p className="text-lg text-white leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= ORGANISATIONS (ONLY INHOUSE) ================= */}
{service.slug === "inhouse-training-programmes" && service.organisations && (
  <section className="py-10">

    <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">

      {/* HEADER */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--palms-blue)]">
          Organisations we have served
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
)}

<section className="bg-palms-gradient text-white py-16 sm:py-20 md:py-26 text-center px-5 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[900px] mx-auto leading-tight">
            Let’s create meaningful,
            measurable impact together.
          </h2>

          <button onClick={() => navigate("/contact")} className="mt-10 sm:mt-14 md:mt-16 bg-white text-[var(--palms-blue)]
px-10 sm:px-14 md:px-20 py-4 sm:py-5 md:py-6 rounded-full text-base sm:text-lg md:text-xl
transition-all duration-300 hover:scale-105">
            Talk to PALMS
          </button>

        </section>



      </div>
    </section>
  );
};

export default ServiceDetail;
