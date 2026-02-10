import React, { useRef, useEffect } from "react";
import aboutImg from "../assets/about.jpg";
import aboutImg2 from "../assets/hero2.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-reveal", {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white px-6 py-24">
            <div className="max-w-[1280px]  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ">

                {/* LEFT COLUMN */}
                <div className="w-full flex flex-col relative">
                    <span className="about-reveal text-lg tracking-widest uppercase text-gray-500 block mb-6">
                        About PALMS
                    </span>

                    <h2 className="about-reveal text-4xl md:text-5xl font-semibold leading-tight  text-[var(--palms-blue)] max-w-[820px]">
                        Building people,
                        <br />
                        strengthening

                        organisations through

                        purposeful learning
                    </h2>

                    {/* Large Image */}
                    <div className=" about-reveal mt-12 w-full max-w-[620px] h-[360px] rouned-xl overflow-hidden  bg-[var(--palms-blue)]">
                        <img
                            src={aboutImg}

                            alt="About PALMS"
                            className="w-full h-full object-cover rouned-4xl"
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col w-full mt-4 justify-end items-end ">

                    {/* Small Supporting Visual */}
                    <div className="about-reveal w-[180px] h-[180px]  rounded-md mb-18 block  ">
                        <img src={aboutImg2} alt="" />
                    </div>

                    <div className="w-full about-reveal">
                        {/* Text */}
                        <p className="text-lg  text-[var(--palms-grey)] leading-relaxed max-w-[550px]">
                            PALMS Training & Consulting is a non-profit organisation dedicated
                            to professional and personal development. Since 2000, we have worked
                            with individuals, professionals, and organisations to strengthen
                            leadership capability, foster clear thinking, and support continuous
                            growth through structured learning experiences.
                        </p>

                        {/* Actions */}
                        <div className="mt-6 flex items-center gap-6">
                            <button className="btn-primary">
                                Learn more about PALMS
                            </button>

                            <button className="btn-secondary">
                                Our approach →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
