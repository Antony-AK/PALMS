import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pd from "../assets/pdtamil.webp"
import md from "../assets/PROEX Managerial and professional Skill Development.jpeg"
import soft from "../assets/skillstamil.webp"
import training from "../assets/Inhouse Training.jpeg"
import outbaond from "../assets/Outbound.JPG"
import retreat from "../assets/Residential Business Retreat.JPG"
import yatra from "../assets/yatra.webp"
import consulting from "../assets/Business Consulting.jpg"
import summercamp from "../assets/summercamp.webp"
import career from "../assets/careercouns.jpeg"
import entrepreneur from "../assets/MBA in a Box.jpg"
import individuals from "../assets/Special Programme for Individuals.JPG"
import personality from "../assets/Pep up.jpg"
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Inhouse Training Programmes",
    slug: "inhouse-training-programmes",
    image: training, // reuse corporate training image
  },
  {
    id: "02",
    title: "Outbound Training Programmes",
    slug: "outbound-training-programmes",
    image: outbaond,
  },
  {
    id: "03",
    title: "Special Programmes for Individuals",
    slug: "special-programmes-individuals",
    image: individuals, // leadership/soft skills fits well
  },
  {
    id: "04",
    title: "Career Guidance for Students",
    slug: "career-guidance-students",
    image: career, // closest match (student-focused)
  },
  {
    id: "05",
    title: "PEP UP - Personality Development",
    slug: "pep-up-personality-development",
    image: personality,
  },
  {
    id: "06",
    title: "Pro EX – Managerial & Professional Skills Development",
    slug: "pro-ex-managerial-professional-skills",
    image: md,
  },
  {
    id: "07",
    title: "MBA In a Box – Business Essentials for Entrepreneurs",
    slug: "mba-in-a-box-business-essentials",
    image: entrepreneur, // entrepreneurial/business vibe
  },
  {
    id: "08",
    title: "PROFIT - Business Retreat for CEO’s & Business Owners",
    slug: "profit-business-retreat",
    image: retreat,
  },
  {
    id: "09",
    title: "Business Consultancy",
    slug: "business-consultancy",
    image: consulting,
  },
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
            className="relative w-full px-5 sm:px-6 md:px-8 py-16 sm:py-20 bg-white overflow-hidden"
        >
            <div className="max-w-[1280px] mx-auto">

                <div className="w-full mb-16 sm:mb-20 md:mb-24 max-w-[960px]">
                    <span className="text-sm sm:text-base md:text-lg tracking-widest uppercase text-gray-500 block mb-6">
                        Our programmes
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[var(--palms-blue)]">
                        Learning experiences designed
                        <br />
                        for lasting growth
                    </h2>

                    <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[var(--palms-grey)] max-w-[720px]">
                        PALMS delivers structured, value-driven learning programmes that
                        strengthen individuals, leaders, and organisations over time.
                    </p>
                </div>


                {/* SERVICES LIST */}
                <div className="flex w-full ">

                    {/* SERVICES GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

  {services.map((service) => (
    <div
      key={service.id}
      onClick={() => navigate(`/services/${service.slug}`)}
      className="
        service-row group relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-500
        border border-gray-200
        hover:-translate-y-2 hover:shadow-xl
        bg-white
      "
    >

      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* Gradient Overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-black/70 via-black/30 to-transparent
        " />
      </div>

      {/* Content */}
      <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 text-white">

        <span className="text-[10px] tracking-widest bg-white/20 px-2 py-1 rounded-full">
          {service.id}
        </span>

        <h3 className="
          mt-3 text-lg font-semibold
          max-w-[200px]
          transition-all duration-300
          group-hover:translate-y-[-2px]
        ">
          {service.title}
        </h3>

        <div className="
          mt-3 h-[2px] w-0 bg-[var(--palms-green)]
          transition-all duration-300
          group-hover:w-12
        " />

      </div>

    </div>
  ))}

</div>




                </div>


            </div>
        </section>
    );
};

export default ServicesSection;
