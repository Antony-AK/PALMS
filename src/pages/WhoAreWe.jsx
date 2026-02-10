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
            className="relative w-full bg-white py-12  overflow-hidden"
        >


            <section className="relative bg-palms-gradient text-white py-40 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {/* subtle noise or grid */}
                </div>

                <div className="max-w-[1100px] mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
                        Building leaders<br />
                        who think, decide,<br />
                        and act with purpose
                    </h1>

                    <p className="mt-8 text-xl text-white/80 max-w-[620px]">
                        PALMS partners with individuals and organisations to develop
                        leadership capability, professional clarity, and sustainable growth
                        through value-driven learning.
                    </p>
                </div>
            </section>





            <div className="max-w-[1300px] mx-auto space-y-28">

                {/* ================= WHO WE ARE ================= */}
                <section className="py-32 bg-white">
                    <div className="grid md:grid-cols-2 gap-20 max-w-[1200px] mx-auto px-2">

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
                <section className="bg-palms-blue text-white py-32">
                    <div className="grid md:grid-cols-2 gap-24 max-w-[1200px] mx-auto px-6">

                        <div>
                            <Target size={44} className="text-[var(--palms-green)]" />
                            <h3 className="mt-6 text-3xl font-semibold">Our purpose</h3>
                            <p className="mt-4 text-white/80 leading-relaxed">
                                To enable individuals and organisations to lead meaningful,
                                value-driven professional lives while contributing positively
                                to society.
                            </p>
                        </div>

                        <div>
                            <Lightbulb size={44} className="text-[var(--palms-green)]" />
                            <h3 className="mt-6 text-3xl font-semibold">Our belief</h3>
                            <p className="mt-4 text-white/80 leading-relaxed">
                                Sustainable success comes from mindset, values, and capability -
                                not short-term performance alone.
                            </p>
                        </div>

                    </div>
                </section>


                {/* ================= WHAT WE ENABLE ================= */}
                <div className="relative grid md:grid-cols-2 gap-28 items-start">

                    {/* LEFT — STICKY NARRATIVE */}
                    <div className="sticky top-32 space-y-10">

                        <div>
                            <h3 className="text-4xl font-semibold text-[var(--palms-blue)] leading-tight">
                                What we enable
                            </h3>

                            <div className="mt-6 h-[3px] w-14 bg-[var(--palms-green)] rounded-full" />
                        </div>

                        <p className="text-[var(--palms-grey)] text-lg leading-relaxed max-w-[440px]">
                            We enable deep, lasting transformation by shaping how people think,
                            decide, and lead - not just what they do.
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
                    <div className="relative space-y-24 pl-10">

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


                <div className="mt-32 grid md:grid-cols-3 gap-20 items-center
                bg-[var(--palms-blue)]/5 rounded-3xl p-16">

                    {/* LEFT — MISSION */}
                    <div className="md:col-span-2 space-y-8">

                        <div>
                            <h3 className="text-2xl font-semibold text-[var(--palms-blue)]">
                                Our mission & objectives
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


                <section className="bg-palms-gradient text-white py-40 text-center">
                    <h3 className="text-4xl md:text-5xl font-semibold max-w-[900px] leading-16 mx-auto">
                        Building clarity, confidence, and leadership excellence
                        for a rapidly changing professional world.
                    </h3>
                </section>


            </div>
        </section>
    );
};
export default WhoAreWe;
