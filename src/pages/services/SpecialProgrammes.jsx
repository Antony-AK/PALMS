import React from "react";
import { useNavigate } from "react-router-dom";
import { specialProgrammesData } from "../../data/servicesData";

const SpecialProgrammes = () => {
    const service = specialProgrammesData;
    const navigate = useNavigate();

    return (
        <section className="w-full bg-white px-5 sm:px-6 md:px-8 pt-32 pb-28">
            <div className="max-w-[1280px] mx-auto space-y-28">

                {/* ================= HERO ================= */}
                <div className="relative grid lg:grid-cols-2 gap-14 items-center min-h-[450px]">

                    <span className="absolute -top-24 -left-10 text-[160px] font-bold text-black/5">
                        {service.id}
                    </span>

                    <div className="space-y-8">
                        <span className="uppercase tracking-[0.3em] text-sm text-[var(--palms-green)] font-bold">
                            Programme
                        </span>

                        <h1 className="text-5xl md:text-6xl font-semibold text-[var(--palms-blue)]">
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

                {/* ================= INTRO ================= */}
                <section className="py-10">

                    <div className="max-w-[900px] mx-auto px-5 md:px-0">

                        {/* HEADER */}
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--palms-blue)]">
                                Overview
                            </h2>
                            <div className="mt-4 h-[3px] w-12 bg-[var(--palms-green)] rounded-full" />
                        </div>

                        {/* CONTENT */}
                        <div className="space-y-6 text-[var(--palms-grey)] text-base md:text-lg leading-relaxed">

                            {service.intro.map((p, i) => (
                                <p key={i} className="relative pl-6">

                                    {/* LEFT ACCENT LINE */}
                                    <span className="absolute left-0 top-2 w-[3px] h-[80%] bg-[var(--palms-green)]/40 rounded-full" />

                                    {p}

                                </p>
                            ))}

                        </div>

                    </div>

                </section>

                {/* ================= CATEGORY BLOCKS (🔥 MAIN SECTION) ================= */}
                <section className="bg-palms-gradient text-white py-16 md:py-20">

                    <div className="max-w-[1200px] mx-auto px-5 md:px-10">

                        {/* HEADER */}
                        <h2 className="text-4xl md:text-5xl font-semibold mb-20">
                            Programmes for different groups
                            <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] rounded-full" />
                        </h2>

                        {/* CONTENT */}
                        <div className="space-y-16">

                            {service.categories.map((cat, i) => (
                                <div key={i} className="flex gap-10 items-start">

                                    {/* BIG NUMBER */}
                                    <span className="text-4xl md:text-6xl font-bold text-white/20">
                                        0{i + 1}
                                    </span>

                                    {/* CONTENT */}
                                    <div className="flex-1">

                                        {/* TITLE */}
                                        <h3 className="text-xl md:text-2xl font-semibold mb-3">
                                            {cat.title}
                                        </h3>

                                        {/* DESC */}
                                        <p className="text-white/80 max-w-[700px] mb-6 leading-relaxed">
                                            {cat.desc}
                                        </p>

                                        {/* POINTS GRID */}
                                        <div className="grid md:grid-cols-2 gap-4">

                                            {cat.points.map((item, j) => (
                                                <div key={j} className="flex gap-3 items-start">

                                                    {/* DOT */}
                                                    <span className="w-2 h-2 mt-2 bg-[var(--palms-green)] rounded-full flex-shrink-0" />

                                                    {/* TEXT */}
                                                    <p className="text-white/90 leading-relaxed">
                                                        {item}
                                                    </p>

                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* ================= CLOSING ================= */}
                <section className="py-16">

                    <div className="max-w-[1000px] mx-auto px-5 md:px-8">

                        <div className="relative bg-white border border-black/5 rounded-3xl p-10 md:p-14 
    shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

                            {/* TOP ACCENT */}
                            <div className="absolute top-0 left-0 h-[4px] w-full bg-[var(--palms-green)] rounded-t-3xl" />

                            {/* HEADER */}
                            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--palms-blue)] mb-8">
                                Our objective
                            </h2>

                            {/* CONTENT */}
                            <div className="space-y-6 text-[var(--palms-grey)] text-base md:text-lg leading-relaxed">

                                {service.closing.map((p, i) => (
                                    <p key={i}>
                                        {p}
                                    </p>
                                ))}

                            </div>

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

export default SpecialProgrammes;