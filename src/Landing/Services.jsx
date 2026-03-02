import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pd from "../assets/pdtamil.jpg"
import md from "../assets/manaetamil.jpg"
import soft from "../assets/skillstamil.jpg"
import training from "../assets/corporatetamil.jpg"
import outbaond from "../assets/outbondtamil.jpg"
import retreat from "../assets/retreat.jpg"
import yatra from "../assets/yatra.jpg"
import consulting from "../assets/consulting.png"
import summercamp from "../assets/summercamp.jpg"
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Personality Development", slug: "personality", image: pd },
  { id: "02", title: "Management Development", slug: "management", image: md },
  { id: "03", title: "Leadership & Skill Workshops", slug: "leadership", image: soft },
  { id: "04", title: "Corporate Training Programmes", slug: "corporate", image: training },
  { id: "05", title: "Outbound Training Programmes", slug: "outbound", image: outbaond },

  { id: "06", title: "Summer Leadership Camp", slug: "summer-camp", image: summercamp },
  { id: "07", title: "Business Consultancy", slug: "consultancy", image: consulting },
  { id: "08", title: "Business Yatra", slug: "business-yatra", image: yatra },
  { id: "09", title: "Business Retreat", slug: "business-retreat", image: retreat },
];


const ServicesSection = () => {
    const sectionRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);
    const navigate = useNavigate();



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

                    <div className="grid md:grid-cols-2 gap-10">

                        {services.map((service) => (
                            <div
                                key={service.id}
                                onClick={() => navigate(`/services/${service.slug}`)}
                                className="
service-row group relative rounded-3xl overflow-hidden cursor-pointer
transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.12)]
hover:-translate-y-3 hover:shadow-[0_30px_90px_rgba(0,0,0,0.25)]
border border-white/40
"
                            >

                                {/* Image */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-[380px] object-cover
        transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="
absolute inset-0 rounded-3xl
opacity-0 group-hover:opacity-100
transition duration-500
bg-gradient-to-tr from-[var(--palms-green)]/20 via-transparent to-white/20
" />

                                {/* Dark Gradient Overlay */}
<div className="absolute inset-0 
bg-gradient-to-t from-black/80 via-black/40 to-transparent
transition duration-500" />

                                {/* Content */}
                                <div className="absolute bottom-10 left-10 text-white">

                                    <span className="text-xs tracking-widest bg-white/20 px-3 py-1 rounded-full">
                                        {service.id}
                                    </span>

<h3 className="
mt-5 text-2xl md:text-3xl font-semibold
max-w-[300px] leading-snug
transition-all duration-500
group-hover:translate-y-[-4px]
">                                        {service.title}
                                    </h3>

                                    <div className="
mt-4 h-[2px] w-0 bg-[var(--palms-green)]
transition-all duration-500
group-hover:w-16
" />

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
