import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PalmsTimeline from "../Components/PalmsTimeline";
import hero from "../assets/whowearehero.webp"
import { Lightbulb, Target } from "lucide-react"
import img from "../assets/hero4.png"

gsap.registerPlugin(ScrollTrigger);

const WhoAreWe = () => {
    const sectionRef = useRef(null);
    const progressRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // SECTION REVEAL
            gsap.from(".who-reveal", {
                y: 32,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.14,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // DIVIDER GROW
            gsap.from(".who-divider", {
                width: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".who-divider",
                    start: "top 85%",
                },
            });

            // SCROLL PROGRESS LINE
            gsap.to(progressRef.current, {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 10%",
                    end: "bottom 90%",

                    scrub: true,
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-white py-32 px-6 overflow-hidden"
        >

            {/* 🧭 SIDE SCROLL INDICATOR */}
            <div className="absolute left-8 top-0 bottom-0 hidden lg:flex items-center">
                <div className="relative h-full w-[2px] bg-black/10 overflow-hidden">
                    <span
                        ref={progressRef}
                        className="absolute top-0 left-0 w-full bg-[var(--palms-green)]"
                        style={{ height: "0%" }}
                    />
                </div>
            </div>




            <div className="max-w-[1200px] mx-auto space-y-28">

                {/* ================= WHO WE ARE ================= */}
                <div className="max-w-[900px]">
                    <h2 className="who-reveal text-3xl md:text-5xl font-semibold text-[var(--palms-blue)]">
                        Who We Are
                    </h2>
                    <div className="mt-6 h-[3px] w-12 bg-[var(--palms-green)] rounded-full opacity-80" />


                    <p className="who-reveal mt-8 text-[var(--palms-grey)] leading-relaxed text-base md:text-lg">
                        <strong>PALMS (Pearlcity Academy for Leadership and Management Skills)</strong> is a
                        professional training and consulting institution dedicated to enriching lives
                        and strengthening organizations through purposeful, value-based learning.
                    </p>

                    <p className="who-reveal mt-4 text-[var(--palms-grey)] leading-relaxed">
                        We work closely with <strong>corporate houses, business owners, professionals,
                            and students</strong> to develop leadership capability, improve work culture,
                        and enhance personal and organizational effectiveness in a rapidly evolving
                        professional environment.
                    </p>

                    <div className="who-reveal mt-14 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={hero}
                            alt="PALMS Leadership Training"
                            className="w-full h-[360px] object-cover"
                        />
                    </div>

                </div>

                {/* ================= IMPACT STRIP ================= */}
                <div className="who-reveal flex flex-col md:flex-row gap-12 md:gap-20 border-l-2 border-[var(--palms-blue)]/20 pl-8">
                    <div><div className="mb-3 text-[var(--palms-green)]">
                        <Target size={40} />
                    </div>
                        <h4 className="text-sm flex uppercase tracking-wider text-[var(--palms-blue)]">
                            Our Purpose
                        </h4>


                        <div className="mt-6 h-[3px] w-12 bg-[var(--palms-green)] rounded-full opacity-80" />

                        <p className="mt-4 text-[var(--palms-grey)] leading-relaxed">
                            To provide high-quality, value-driven training programmes that enable
                            individuals to lead meaningful professional and personal lives, while
                            contributing positively to their organizations and society.
                        </p>
                    </div>

                    <div>
                        <div className="mb-3 text-[var(--palms-green)]">
                            <Lightbulb size={40} />
                        </div>
                        <h4 className="text-sm uppercase tracking-wider text-[var(--palms-blue)]">
                            Our Belief
                        </h4>
                        <div className="mt-6 h-[3px] w-12 bg-[var(--palms-green)] rounded-full opacity-80" />

                        <p className="mt-4 text-[var(--palms-grey)] leading-relaxed">
                            Sustainable growth is achieved when individuals develop the right mindset,
                            leadership values, and practical skills — enabling long-term success rather
                            than short-term performance.
                        </p>
                    </div>
                </div>

                {/* ================= WHAT WE ENABLE ================= */}
                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <div className="who-reveal">
                        <h3 className="text-2xl font-semibold text-[var(--palms-blue)]">
                            What We Enable
                        </h3>
                        <div className="mt-6 h-[3px] w-12 bg-[var(--palms-green)] rounded-full opacity-80" />


                        <p className="mt-6 text-[var(--palms-grey)] leading-relaxed">
                            PALMS designs and delivers structured learning experiences that support
                            transformation at both individual and organizational levels by addressing
                            mindset, behaviour, and capability development.
                        </p>

                        <ul className="mt-8 space-y-4 text-[var(--palms-grey)] text-sm">
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-[var(--palms-green)]" />
                                Leadership and management capability development
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-[var(--palms-green)]" />
                                Personality enhancement and self-development programmes
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-[var(--palms-green)]" />
                                Workplace effectiveness, productivity, and work culture improvement
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-[var(--palms-green)]" />
                                Communication skills, team building, and professional excellence
                            </li>
                        </ul>
                    </div>

                    <div className="who-reveal bg-[var(--palms-blue)]/5 rounded-2xl p-10">
                        <p className="text-sm uppercase tracking-wider text-[var(--palms-blue)]">
                            Our Approach
                        </p>
                        <div className="mt-6 h-[3px] w-12 bg-[var(--palms-green)] rounded-full opacity-80" />

                        <p className="mt-4 text-[var(--palms-grey)] leading-relaxed">
                            Our programmes combine experiential learning, reflection, real-life case
                            discussions, and guided facilitation to ensure learning is relevant,
                            engaging, and directly applicable in professional and personal contexts.
                        </p>
                    </div>
                </div>

                <PalmsTimeline />

                {/* ================= PROGRAMME SPECTRUM ================= */}
                <div className="space-y-10">
                    <h3 className="who-reveal text-2xl font-semibold text-[var(--palms-blue)]">
                        Programme Spectrum
                    </h3>
                    <div className="mt-6 h-[3px] w-12 bg-[var(--palms-green)] rounded-full opacity-80" />

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* CARD 1 */}
                        <div className="who-reveal group relative ">
                            {/* Outer Layer */}
                            <div className="absolute inset-0 -left-2  bg-[var(--palms-blue)] rounded-2xl translate-y-2" />

                            {/* Inner Card */}
                            <div className="relative bg-white rounded-2xl h-[250px] p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                                <span className="block h-[3px] w-10 bg-[var(--palms-green)] rounded-full mb-4 transition-all group-hover:w-16" />

                                <strong className="block text-[var(--palms-blue)] group-hover:text-[var(--palms-green)] transition">
                                    Management & Leadership Development
                                </strong>

                                <p className="mt-3 text-sm text-[var(--palms-grey)] leading-relaxed">
                                    Leadership development, decision making, team leadership, emotional
                                    intelligence, communication effectiveness, and professional excellence.
                                </p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="who-reveal group relative">
                            <div className="absolute inset-0 -left-2  bg-[var(--palms-blue)] rounded-2xl translate-y-2" />

                            <div className="relative bg-white rounded-2xl h-[250px] p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                                <span className="block h-[3px] w-10 bg-[var(--palms-green)] rounded-full mb-4 transition-all group-hover:w-16" />

                                <strong className="block text-[var(--palms-blue)] group-hover:text-[var(--palms-green)] transition">
                                    Corporate Engagements
                                </strong>

                                <p className="mt-3 text-sm text-[var(--palms-grey)] leading-relaxed">
                                    In-house training programmes, outbound learning experiences, and
                                    customized consulting engagements aligned with organizational goals
                                    and challenges.
                                </p>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="who-reveal group relative">
                            <div className="absolute inset-0 -left-2  bg-[var(--palms-blue)] rounded-2xl translate-y-2" />

                            <div className="relative bg-white rounded-2xl h-[250px] p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                                <span className="block h-[3px] w-10 bg-[var(--palms-green)] rounded-full mb-4 transition-all group-hover:w-16" />

                                <strong className="block text-[var(--palms-blue)] group-hover:text-[var(--palms-green)] transition">
                                    Membership & Learning Forums
                                </strong>

                                <p className="mt-3 text-sm text-[var(--palms-grey)] leading-relaxed">
                                    Continuous learning through structured memberships, monthly programmes,
                                    networking opportunities, and curated knowledge resources such as
                                    PALMS PLUS.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="w-full flex">


                    <div className="w-full flex flex-col gap-10">
                        {/* ================= MISSION & OBJECTIVES ================= */}
                        <div className="who-reveal max-w-[900px]">
                            <h3 className="text-2xl font-semibold text-[var(--palms-blue)]">
                                Our Mission & Objectives
                            </h3>
                            <div className="mt-6 h-[3px] w-12 bg-[var(--palms-green)] rounded-full opacity-80" />


                            <ul className="mt-6 space-y-3 text-[var(--palms-grey)] text-sm leading-relaxed">
                                <li>• Deliver high-quality training programmes at an affordable and accessible cost</li>
                                <li>• Enhance individual work efficiency and organizational productivity</li>
                                <li>• Develop leadership qualities and responsible, value-driven professionals</li>
                                <li>• Promote ethical values, positive work culture, and lifelong learning</li>
                            </ul>
                        </div>

                        {/* ================= CLOSING STATEMENT ================= */}
                        <div className="who-reveal text-[var(--palms-grey)] text-base md:text-lg max-w-[800px]">
                            PALMS exists to support individuals and organizations on their journey toward
                            clarity, confidence, and leadership excellence — enabling sustainable growth
                            in an ever-changing professional and business landscape.

                        </div>

                    </div>

                    <div className=" w-[35%] h-[200px] mt-5 opacity-85">
                        <img
                            src={img}
                            className="rounded-xl "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
export default WhoAreWe;
