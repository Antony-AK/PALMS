import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { proExData } from "../../data/servicesData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import proex from "../../assets/proex.png";

gsap.registerPlugin(ScrollTrigger);

const ProEx = () => {
    const service = proExData;
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
{/* 
                    <span className="absolute -top-24 -left-10 text-[160px] font-bold text-black/5">
                        EX
                    </span> */}

                    <div className="space-y-8">
                        <span className="uppercase tracking-[0.3em] text-sm text-[var(--palms-green)] font-bold">
                            Programme
                        </span>

                        {/* <h1 className="text-5xl md:text-6xl font-semibold text-[var(--palms-blue)] leading-tight">
                            {service.title}
                        </h1> */}
                        <div className=" ">
                            <img
                                src={proex}
                                alt="Pro Ex"
                                className="w-[620px] h-[250px] object-cover"
                            />
                        </div>

                        <p className="text-lg font-medium text-[var(--palms-blue)]">
                            {service.tagline}
                        </p>

                        <div className="space-y-4 max-w-[560px] text-[var(--palms-grey)]">
                            {service.intro.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

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



                {/* ================= PROGRAMME ELEMENTS (UPGRADED 🔥) ================= */}
                <section className="bg-palms-gradient text-white py-16 md:py-20">

                    <div className="max-w-[1200px] mx-auto px-5 md:px-10">

                        <h2 className="text-4xl md:text-5xl font-semibold mb-20">
                            Core Concepts 
                            <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />
                        </h2>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                            {service.modules.map((item, i) => (
                                <div
                                    key={i}
                                    className="
            group relative
            bg-white/5 border border-white/10
            rounded-3xl p-6
            transition-all duration-500
            hover:bg-white/10
            hover:-translate-y-2
          "
                                >

                                    {/* NUMBER */}
                                    <span className="text-3xl font-bold text-white/20">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>

                                    {/* TITLE */}
                                    <h3 className="mt-4 text-lg md:text-xl font-semibold leading-snug">
                                        {item.title}
                                    </h3>

                                    {/* SUBTEXT */}
                                    <p className="mt-3 text-white/70 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* HOVER ACCENT */}
                                    <div className="absolute bottom-0 left-6 h-[3px] w-0 bg-[var(--palms-green)] 
          group-hover:w-[40%] transition-all duration-500" />

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
                                Target Audience ~ Takeaways
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
                                    For Whom?
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
                                    Key Takeaways
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
                <section className="py-16">

                    <div className="max-w-[1200px] mx-auto px-5 md:px-8">

                        <div className="mb-10">
                            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--palms-blue)]">
                                Methodology
                            </h2>
                            <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                            {service.learning.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-white border border-black/5 p-5 rounded-2xl">

                                    <span className="text-[var(--palms-green)] font-bold">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <p className="text-[var(--palms-grey)]">
                                        {item}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* ================= WHY ================= */}
                <section className="p-10 bg-gray-100">
                    <h2 className="text-3xl font-semibold text-center text-[var(--palms-blue)] mb-16">
                        Why CEO's choose PALMS?
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

export default ProEx;