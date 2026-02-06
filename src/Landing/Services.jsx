import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "Personality Development",
        desc: "Structured programmes that help individuals build confidence, clarity of thought, and interpersonal effectiveness."
    },
    {
        id: "02",
        title: "Management Development",
        desc: "Learning initiatives designed to strengthen managerial capability, decision-making, and people leadership."
    },
    {
        id: "03",
        title: "Leadership & Skill Workshops",
        desc: "Focused workshops that develop leadership mindset, communication, and essential workplace skills."
    },
    {
        id: "04",
        title: "Corporate Training Programmes",
        desc: "Customised training interventions aligned with organisational goals, culture, and performance outcomes."
    },
    {
        id: "05",
        title: "Outbound Training Programmes",
        desc: "Experiential learning programmes that foster teamwork, trust, leadership behaviour, and self-awareness."
    },
];

const ServicesSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".service-row",
                {
                    opacity: 0,
                    y: 12,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.12,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        once: true, // 🔥 important: run only once
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white px-6 py-16">
            <div className="max-w-[1280px] mx-auto">

                {/* HEADER */}
                <div className="max-w-[720px] mb-20">
                    <span className="text-xs text-gray-500 block mb-4">
                        Our services
                    </span>

                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-[var(--palms-blue)]">
                        Learning programmes
                        <br />
                        designed for
                        <br />
                        lasting growth
                    </h2>

                    <p className="mt-8 text-lg text-[var(--palms-grey)]">
                        PALMS delivers structured learning experiences that support
                        individual excellence, leadership capability, and organisational
                        effectiveness.
                    </p>
                </div>

                {/* SERVICES LIST */}
                <div className="flex flex-col divide-y divide-gray-200">

                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="service-row group py-10 flex flex-col md:flex-row gap-10
                         transition-all duration-300 hover:bg-[var(--palms-grey-light)] px-4 rounded-lg"
                        >
                            {/* NUMBER */}
                            <div className="md:w-[120px]">
                                <span className="text-2xl font-medium text-[var(--palms-blue)]">
                                    {service.id}
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div>
                                <h3 className="text-2xl font-semibold text-black group-hover:text-[var(--palms-blue)] transition">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm text-[var(--palms-grey)] max-w-[640px]">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div className="mt-20">
                    <button className="btn-primary">
                        Explore all programmes
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
