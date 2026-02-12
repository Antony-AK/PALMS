import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pd from "../assets/pdtamil.jpg"
import md from "../assets/manaetamil.jpg"
import soft from "../assets/skillstamil.jpg"
import training from "../assets/corporatetamil.jpg"
import outbaond from "../assets/outbondtamil.jpg"


gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "Personality Development",
        desc: "Structured programmes that help individuals build confidence...",
        image: pd,
    },
    {
        id: "02",
        title: "Management Development",
        desc: "Learning initiatives designed to strengthen managerial capability...",
        image: md,
    },
    {
        id: "03",
        title: "Leadership & Skill Workshops",
        desc: "Focused workshops that develop leadership mindset...",
        image: soft,
    },
    {
        id: "04",
        title: "Corporate Training Programmes",
        desc: "Customised learning interventions aligned with organisational goals...",
        image: training,
    },
    {
        id: "05",
        title: "Outbound Training Programmes",
        desc: "Experiential learning programmes that foster teamwork...",
        image: outbaond,
    },
];


const ServicesSection = () => {
    const sectionRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);


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
        <section
            ref={sectionRef}
            className="relative w-full px-6 py-32
             bg-white overflow-hidden"
        >
            <div className="max-w-[1280px] mx-auto">

                <div className="w-full mb-24 max-w-[960px]">
                    <span className="text-lg tracking-widest uppercase text-gray-500 block mb-6">
                        Our programmes
                    </span>

                    <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1]
                 text-[var(--palms-blue)]">
                        Learning experiences designed
                        <br />
                        for lasting growth
                    </h2>

                    <p className="mt-8 text-lg text-[var(--palms-grey)] max-w-[720px]">
                        PALMS delivers structured, value-driven learning programmes that
                        strengthen individuals, leaders, and organisations over time.
                    </p>
                </div>


                {/* SERVICES LIST */}
                <div className="flex w-full gap-20">

                    <div className="flex flex-col w-full space-y-8">

                        {services.map((service, index) => {
                            const isBlue = index % 2 === 1;

                            return (
                                <div
                                    key={service.id}
                                    onMouseEnter={() => setHoveredId(service.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className={`
    service-row group relative
    flex flex-col lg:flex-row gap-12 items-center justify-between
    p-12 rounded-3xl
    transition-all duration-500 ease-out
    hover:-translate-y-2
    hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
    ${isBlue
                                            ? "bg-[var(--palms-blue)] text-white"
                                            : "bg-[var(--palms-blue)] text-white "
                                        }
  `}
                                >


                                    <div className="flex items-center ">
                                        <div className="md:w-[120px]">
                                            <span
                                                className={`
    text-xs tracking-widest px-3 py-1 rounded-full
    ${isBlue
                                                        ? "bg-[var(--palms-green)] text-white"
                                                        : "bg-[var(--palms-green)] text-white"
                                                    }
  `}
                                            >
                                                {service.id}
                                            </span>


                                        </div>

                                        <div>
                                            <h3
                                                className={`
    mt-4 text-2xl md:text-3xl font-semibold
    transition-transform duration-300
    group-hover:translate-x-1
    ${isBlue
                                                        ? "text-white"
                                                        : "text-white"
                                                    }
  `}
                                            >
                                                {service.title}
                                            </h3>


                                            <p
                                                className={`
    mt-4 text-sm md:text-base leading-relaxed max-w-[620px]
    ${isBlue
                                                        ? "text-white/80"
                                                        : "text-white/80"
                                                    }
  `}
                                            >
                                                {service.desc}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="hidden lg:block relative w-[340px] h-[200px] shrink-0">

                                    
                                            <div className="absolute -inset-4 rounded-2xl bg-white/20" />
                                       

                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="
      relative w-full h-full object-cover rounded-2xl
      shadow-lg
      transition-transform duration-500
      group-hover:scale-[1.03]
    "
                                        />
                                    </div>





                                </div>

                            );
                        })}

                    </div>





                </div>

                {/* CTA */}
                <div className="mt-10">
                    <button className="btn-primary">
                        Explore all programmes
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
