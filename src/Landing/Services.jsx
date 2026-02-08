import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pd from "../assets/pd1.jpg"
import md from "../assets/md2.webp"
import soft from "../assets/skills1.png"
import training from "../assets/corporate.jpg"
import outbaond from "../assets/outbond1.png"


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
        <section ref={sectionRef} className="w-full bg-white px-6 ">
            <div className="max-w-[1280px] mx-auto">

                {/* HEADER */}
                <div className="w-full mb-20">
                    <span className="text-lg  text-gray-500 block mb-4">
                        Our services
                    </span>

                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-[var(--palms-blue)]">
                        Learning programmes
                        
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
                <div className="flex w-full gap-20">

                    <div className=" flex flex-col divide-y w-full divide-gray-300">

                        {services.map((service) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => {
                                    setHoveredId(service.id);
                                }}
                                onMouseLeave={() => setHoveredId(null)}
                                className="
                                       service-row group flex flex-col justify-between md:flex-row gap-10
                                       px-10 py-10 rounded-xl cursor-pointer
                                       transition-all duration-300 ease-out
                                       hover:bg-[var(--palms-grey-light)]
                                       hover:scale-[1.01]
                                       hover:shadow-sm 
                                     "

                            >
                                <div className="flex items-center ">
                                    <div className="md:w-[120px]">
                                        <span className="text-4xl font-medium text-[var(--palms-green)]">
                                            {service.id}
                                        </span>
                                    </div>

                                    <div>
                                        <h3
                                            className="
                                          text-2xl font-semibold text-black
                                          transition-all duration-300 ease-out
                                          group-hover:text-[var(--palms-blue)]
                                          group-hover:scale-[1.03]
                                          origin-left
                                        "
                                        >
                                            {service.title}
                                        </h3>

                                        <p
                                            className="
                                             mt-3 text-sm text-[var(--palms-grey)] max-w-[640px]
                                             transition-all duration-300 ease-out
                                             group-hover:translate-y-[-2px]
                                             group-hover:text-opacity-90
                                           "
                                        >
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden lg:block relative w-[350px] h-[180px] rounded-lg group">

                                    {/* BACK LAYER (SHADOW CARD) */}
                                    <div
                                        className="
      absolute
      left-[-16px]
      bottom-[-16px]
      w-full
      h-full
      rounded-lg
      bg-[var(--palms-blue)]
      z-0
      transition-transform duration-500 ease-out
      group-hover:translate-x-1
      group-hover:translate-y-1
    "
                                    />

                                    {/* IMAGE LAYER */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="
      relative z-10
      w-full h-full
      object-cover
      rounded-lg
      scale-[1.04]
      transition-all duration-500 ease-out
      group-hover:scale-100
    "
                                    />

                                </div>



                            </div>


                        ))}

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
