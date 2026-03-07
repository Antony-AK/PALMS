import React, { useRef, useEffect } from "react";
import aboutImg from "../assets/about.webp";
import aboutImg2 from "../assets/hero2.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();


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
            className="w-full bg-white px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                {/* LEFT COLUMN */}
                <div className="w-full flex flex-col relative">
                    <span className="about-reveal text-sm sm:text-base md:text-lg tracking-widest uppercase text-gray-500 block mb-6">
                        About PALMS
                    </span>

                    <h2 className="about-reveal text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[var(--palms-blue)] max-w-[820px]">
                        Building people,
                        <br />
                        strengthening

                        organisations through

                        purposeful learning
                    </h2>

                    {/* Large Image */}
                    <div className="about-reveal mt-8 sm:mt-10 md:mt-12 w-full max-w-[620px] h-[240px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden bg-[var(--palms-blue)]">
                        <img
                            src={aboutImg}

                            alt="About PALMS"
                            className="w-full h-full object-cover rouned-xl"
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col w-full mt-4 justify-end items-end ">

                    {/* Small Supporting Visual */}
                    <div className="about-reveal w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] md:h-[180px] rounded-md mb-10 sm:mb-14 md:mb-18">
                        <img src={aboutImg2} alt="" />
                    </div>

                    <div className="w-full about-reveal">
                        {/* Text */}
                        <p className="text-base sm:text-lg text-[var(--palms-grey)] leading-relaxed max-w-[550px]">
                            PALMS Training & Consulting is a non-profit organisation dedicated
                            to professional and personal development. Since 2000, we have worked
                            with individuals, professionals, and organisations to strengthen
                            leadership capability, foster clear thinking, and support continuous
                            growth through structured learning experiences.
                        </p>

                        {/* Actions */}
                        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                            <button onClick={() => navigate("/whoweare")} className="btn-primary">
                                Learn more about PALMS
                            </button>

                            <button onClick={() => navigate("/whoweare")} className="btn-secondary">
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
