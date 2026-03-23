import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { careerGuidanceData } from "../../data/servicesData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CareerGuidance = () => {
    const service = careerGuidanceData;
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

                {/* ================= HERO (MATCHED) ================= */}
                <div className="relative grid lg:grid-cols-2 gap-14 items-center min-h-[450px]">

                    <span className="absolute -top-24 -left-10 text-[160px] font-bold text-black/5">
                        {service.id}
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

                        <p className="text-[var(--palms-grey)] max-w-[560px]">
                            {service.intro[0]}
                        </p>

                        <div className="flex items-center gap-8 pt-4">
                            <button className="btn-primary px-10 py-4">
                                Enquire now
                            </button>

                            <div>
                                <p className="text-xs uppercase text-gray-400 mb-1">
                                    Programme duration
                                </p>
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


                {/* ================= WHAT IT DELIVERS ================= */}
                <div
                    ref={deliverSectionRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 justify-center items-start"        >

                    {/* LEFT – PINNED */}
                    <div ref={deliverLeftRef} className="pt-10">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--palms-blue)]">
                            What this programme delivers
                        </h3>
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
                        <div ref={deliverRightRef} className="space-y-4 pl-10 pb-20">
                            {service.deliverables?.map((item, i) => (
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

                {/* ================= PROGRAMME ELEMENTS (UPGRADED 🔥) ================= */}
                <section className="bg-palms-gradient text-white py-16 md:py-20">

                    <div className="max-w-[1200px] mx-auto px-5 md:px-10">

                        <h2 className="text-4xl md:text-5xl font-semibold mb-20">
                            Programme elements
                            <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />
                        </h2>

                        <div className="space-y-12">

                            {service.elements.map((item, i) => (
                                <div key={i} className="flex gap-10 items-start">

                                    <span className="text-4xl md:text-6xl font-bold text-white/20">
                                        0{i + 1}
                                    </span>

                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-white/80 max-w-[700px]">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* ================= WHO + OUTCOMES ================= */}
                <section className="">

                    <div className="max-w-[1200px] mx-auto px-5 md:px-8">

                        {/* HEADER */}
                        <div className="mb-10">
                            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--palms-blue)]">
                                Who & Outcomes
                            </h2>
                            <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />
                        </div>

                        {/* GRID */}
                        <div className="grid md:grid-cols-2 gap-10">

                            {/* LEFT CARD */}
                            <div className="group relative bg-white border border-black/5 rounded-3xl p-8 
      shadow-[0_10px_40px_rgba(0,0,0,0.05)] 
      hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500">

                                {/* TOP ACCENT */}
                                <div className="absolute top-0 left-0 h-[4px] w-0 bg-[var(--palms-green)] 
        group-hover:w-full transition-all duration-500 rounded-t-3xl" />

                                <h3 className="text-2xl font-semibold text-[var(--palms-blue)] mb-8">
                                    Who this programme is for
                                </h3>

                                <div className="space-y-5">
                                    {service.whoItsFor.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">

                                            <span className="text-lg font-bold text-[var(--palms-green)]">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>

                                            <p className="text-[var(--palms-grey)] leading-relaxed">
                                                {item}
                                            </p>

                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* RIGHT CARD */}
                            <div className="group relative bg-white border border-black/5 rounded-3xl p-8 
      shadow-[0_10px_40px_rgba(0,0,0,0.05)] 
      hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500">

                                {/* TOP ACCENT */}
                                <div className="absolute top-0 left-0 h-[4px] w-0 bg-[var(--palms-green)] 
        group-hover:w-full transition-all duration-500 rounded-t-3xl" />

                                <h3 className="text-2xl font-semibold text-[var(--palms-blue)] mb-8">
                                    Outcomes you can expect
                                </h3>

                                <div className="space-y-5">
                                    {service.outcomes.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">

                                            <span className="text-lg font-bold text-[var(--palms-green)]">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>

                                            <p className="text-[var(--palms-grey)] leading-relaxed">
                                                {item}
                                            </p>

                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= LEARNING ================= */}
                <section className="bg-[var(--palms-grey-light)] rounded-3xl p-10">
                    <h3 className="text-3xl font-semibold text-[var(--palms-blue)] mb-6">
                        How learning happens
                    </h3>

                    <ul className="space-y-4">
                        {service.learning.map((item, i) => (
                            <li key={i}>• {item}</li>
                        ))}
                    </ul>
                </section>

                {/* ================= WHY ================= */}
                <section className="p-10 bg-gray-100">
                    <h2 className="text-3xl font-semibold text-center text-[var(--palms-blue)] mb-16">
                        Why organisations choose PALMS
                    </h2>

                    <div className="space-y-12">
                        {service.why.map((item, i) => (
                            <div key={i} className={`max-w-[800px] ${i % 2 !== 0 ? "ml-auto" : ""}`}>
                                <div className="bg-[var(--palms-blue)] text-white p-8 rounded-3xl border-b-8 border-[var(--palms-green)]">
                                    {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="">

                    <div className="max-w-[900px] mx-auto px-5 md:px-8">

                        <div className="bg-white border-4 flex flex-col justify-center items-center border-[var(--palms-blue)] rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

                            <h3 className="text-2xl md:text-3xl text-center font-semibold text-[var(--palms-blue)] mb-6">
                                Enquire Now
                            </h3>

                            <p className="text-[var(--palms-grey)] mb-6">
                                {service.contact.text}
                            </p>

                            <p className="font-semibold text-[var(--palms-blue)] mb-4">
                                {service.contact.company}
                            </p>

                            <a
                                href={service.contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-[var(--palms-green)] font-medium underline hover:opacity-80 transition"
                            >
                                Visit Career Assessment Platform →
                            </a>

                        </div>

                    </div>

                </section>

                {/* ================= CTA ================= */}
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

export default CareerGuidance;