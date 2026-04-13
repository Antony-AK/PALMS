import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PalmsTimeline from "../Components/PalmsTimeline";
import hero from "../assets/Who we are.jpg"
import { Lightbulb, Target } from "lucide-react"
import img from "../assets/hero4.png"
import OurTeam from "./OurTeam";


gsap.registerPlugin(ScrollTrigger);

const WhoAreWe = () => {
    const sectionRef = useRef(null);
    const progressRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            /* ================= BASIC SECTION REVEAL ================= */
            gsap.from(".who-reveal", {
                y: 32,
                autoAlpha: 1,
                duration: 1,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });



            /* ================= EXPERIENCE RAIL (.group) FIX ================= */
            gsap.utils.toArray(".group").forEach((el, i) => {
                gsap.from(el, {
                    y: 60,
                    autoAlpha: 0,
                    scale: 0.96,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                });

            });



            /* ================= SCROLL PROGRESS LINE ================= */
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
            className="relative w-full bg-white py-10 sm:py-12 md:py-16 overflow-hidden"        >


            <section className="relative bg-palms-gradient text-white py-20 sm:py-28 md:py-36 lg:py-40 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {/* subtle noise or grid */}
                </div>

                <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 relative z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                        Building leaders<br />
                        who think, decide,<br />
                        and act with purpose
                    </h1>

                    <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-[620px]">
                        PALMS works with individuals and organisations to develop leadership capability, professional clarity, and sustainable growth through value-driven learning.
                    </p>
                </div>
            </section>





            <div className="max-w-[1300px] mx-auto space-y-16 sm:space-y-20 md:space-y-18">

                {/* ================= WHO WE ARE ================= */}
                <section className="py-16 sm:py-24 md:py-32 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 max-w-[1200px] mx-auto px-5 sm:px-6">

                        {/* LEFT — CONTENT */}
                        <div className="space-y-8">

                            <h2 className="text-4xl font-semibold text-[var(--palms-blue)]">
                                Who we are
                            </h2>

                            <p className="text-xl text-[var(--palms-grey)] leading-relaxed">
                                PALMS is a leadership and management development institution
                                focused on building clarity, capability, and purposeful growth
                                in individuals and organisations.
                            </p>

                            <p className="text-[var(--palms-grey)] leading-relaxed">
                                We believe leadership is shaped by how people think, decide,
                                and respond - not merely by titles or roles. Our work centres
                                on strengthening mindset, self-awareness, and practical
                                leadership behaviour that translates into real-world impact.
                            </p>



                        </div>

                        {/* RIGHT — IMAGE */}
                        <div className="relative">
                            <div className="absolute -inset-6 bg-palms-blue-soft rounded-3xl" />
                            <img
                                src={hero}
                                alt="PALMS leadership learning environment"
                                className="relative rounded-3xl shadow-xl"
                            />
                        </div>

                    </div>
                </section>



                {/* ================= IMPACT STRIP ================= */}
                <section className="bg-palms-blue text-white py-16 sm:py-24 md:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24 max-w-[1200px] mx-auto px-5 sm:px-6">

                        <div>
                            <Target size={44} className="text-[var(--palms-green)]" />
                            <h3 className="mt-6 text-3xl font-semibold">Our Purpose</h3>
                            <p className="mt-4 text-white/80 leading-relaxed">
                                To empower people and organisations to enhance their productivity and thereby contribute positively to society.
                            </p>
                        </div>

                        <div>
                            <Lightbulb size={44} className="text-[var(--palms-green)]" />
                            <h3 className="mt-6 text-3xl font-semibold">Our Belief</h3>
                            <p className="mt-4 text-white/80 leading-relaxed">
                                Sustainable success comes from mindset, values, and capability - not short-term performance alone.
                            </p>
                        </div>

                    </div>
                </section>


                {/* ================= WHAT WE ENABLE ================= */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-20 md:gap-28 items-start px-5 sm:px-6">

                    {/* LEFT — STICKY NARRATIVE */}
                    <div className="sticky top-20 sm:top-24 md:top-32 space-y-6 sm:space-y-8 md:space-y-10">

                        <div>
                            <h3 className="text-4xl font-semibold text-[var(--palms-blue)] leading-tight">
                                What we enable
                            </h3>

                            <div className="mt-6 h-[3px] w-14 bg-[var(--palms-green)] rounded-full" />
                        </div>

                        <p className="text-[var(--palms-grey)] text-lg leading-relaxed max-w-[440px]">
                            We enable deep, lasting transformation by shaping how people think,
                            decide, and lead.
                        </p>

                        {/* APPROACH PANEL */}
                        <div className="relative mt-16 rounded-2xl bg-[var(--palms-blue)] p-8 text-white overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                            <p className="relative text-sm uppercase tracking-wider text-white ">
                                Our approach
                            </p>
                            <div className="mt-4 h-[3px] w-12 bg-[var(--palms-green)] rounded-full" />


                            <p className="relative mt-4 text-sm leading-relaxed opacity-90">
                                Experiential learning, guided reflection, real-life cases, and
                                facilitated dialogue - designed to create insight, clarity,
                                and application.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT — EXPERIENCE RAIL */}
                    <div className="relative space-y-10 sm:space-y-12 md:space-y-10 pl-6 sm:pl-8 md:pl-10">

                        {/* Vertical line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--palms-blue)]/15" />

                        {[
                            {
                                index: "01",
                                title: "Leadership & management capability",
                                desc: "Developing leaders who think clearly, take responsibility, and lead people with confidence."
                            },
                            {
                                index: "02",
                                title: "Personality & self-development",
                                desc: "Strengthening self-awareness, emotional intelligence, confidence, and professional presence."
                            },
                            {
                                index: "03",
                                title: "Workplace effectiveness & culture",
                                desc: "Improving productivity, collaboration, trust, and healthy work culture across teams."
                            },
                            {
                                index: "04",
                                title: "Communication & professional excellence",
                                desc: "Building clarity in communication, credibility in relationships, and excellence in execution."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative group">

                                {/* DOT */}
                                <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full
                         bg-white border-4 border-[var(--palms-green)]
                         transition-transform group-hover:scale-110" />

                                <div className="pl-10">
                                    <span className="text-xs tracking-widest text-[var(--palms-green)]">
                                        {item.index}
                                    </span>

                                    <h4 className="mt-2 text-xl font-semibold text-[var(--palms-blue)]">
                                        {item.title}
                                    </h4>

                                    <p className="mt-3 text-sm text-[var(--palms-grey)] leading-relaxed max-w-[520px]">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

                <section className="bg-palms-blue-soft py-10 w-full">
                    <PalmsTimeline />
                </section>

                <div className="bg-white">
  <OurTeam />
</div>



                <div className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 md:gap-20 items-center
bg-[var(--palms-blue)]/5 rounded-3xl p-8 sm:p-12 md:p-16">

                    {/* LEFT — MISSION */}
                    <div className="md:col-span-2 space-y-8">

                        <div>
                            <h3 className="text-2xl font-semibold text-[var(--palms-blue)]">
                                Our Mission & Objectives
                            </h3>
                            <div className="mt-4 h-[3px] w-12 bg-[var(--palms-green)] rounded-full" />
                        </div>

                        <ul className="space-y-4 text-[var(--palms-grey)] text-md leading-relaxed">
                            <li>• Deliver high-quality training programmes that are accessible and impactful</li>
                            <li>• Enhance individual work efficiency and organisational productivity</li>
                            <li>• Develop responsible, value-driven leaders and professionals</li>
                            <li>• Promote ethical thinking, positive work culture, and lifelong learning</li>
                        </ul>

                        <p className="pt-6 text-[var(--palms-grey)] text-base leading-relaxed max-w-[640px]">
                            PALMS exists to support individuals and organisations on their journey
                            toward clarity, confidence, and leadership excellence - enabling
                            sustainable growth in an ever-changing professional landscape.
                        </p>

                    </div>

                    {/* RIGHT — IMAGE */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[var(--palms-blue)]/10 rounded-2xl" />
                        <img
                            src={img}
                            alt="PALMS learning environment"
                            className="relative rounded-2xl shadow-lg"
                        />
                    </div>

                </div>


                <section className="bg-palms-gradient text-white py-20 sm:py-28 md:py-40 text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-[900px] leading-relaxed mx-auto px-5 sm:px-6">
                        Building clarity, confidence, and leadership excellence
                        for a rapidly changing professional world.
                    </h3>
                </section>


            </div>
        </section>
    );
};
export default WhoAreWe;
