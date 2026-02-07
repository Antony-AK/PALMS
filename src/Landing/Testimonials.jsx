import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import t1 from "../assets/t11.jpg";
import t2 from "../assets/t12.jpg";
import t3 from "../assets/t3.png";
import t4 from "../assets/t13.jpg";

const testimonials = [
  {
    name: "Sharone",
    role: "Senior Manager",
    image: t1,
    quote:
      "PALMS helped me slow down my thinking and approach leadership with greater clarity. The learning stayed with me well beyond the sessions.",
  },
  {
    name: "Anna",
    role: "HR Professional",
    image: t2,
    quote:
      "The programmes at PALMS are thoughtful and structured. They focus not just on skills, but on how we think and relate at work.",
  },
  {
    name: "Antony",
    role: "Mid-level Executive",
    image: t3,
    quote:
      "What sets PALMS apart is the consistency. The regular learning sessions created space for reflection and meaningful growth.",
  },
  {
    name: "Clara",
    role: "Team Lead",
    image: t4,
    quote:
      "The experiential programmes challenged our assumptions and strengthened trust within our team. It was learning done right.",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const quoteRef = useRef(null);

  // Smooth quote transition
  useEffect(() => {
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 8 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power1.out",
      }
    );
  }, [activeIndex]);

  return (
    <section className="w-full bg-white px-6 py-44">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">

        {/* LEFT — ACTIVE QUOTE */}
        <div>
          <span className="text-xs mb-5 text-gray-500 block">
            Voices from our community
          </span>

          <div ref={quoteRef}>
            {/* Decorative quote mark */}
            <p className="absolute text-[6rem] leading-none text-[var(--palms-blue)]/10 ">
              “
            </p>

            <div className="w-44 h-44 ms-5 rounded-full overflow-hidden bg-gray-200">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote */}
            <p className="text-2xl md:text-[1.75rem] leading-[1.6] tracking-tight text-black max-w-[560px]">
              {testimonials[activeIndex].quote}
            </p>

            {/* Divider */}
            <div className="mt-5 pt-3 border-t border-[var(--palms-green)] max-w-[120px]" />

            {/* Author */}
            <div className="">
              <p className="text-base font-medium text-[var(--palms-blue)]">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-sm text-[var(--palms-grey)]">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — VOICE SELECTOR */}
        <div className="flex flex-col gap-8">
          {testimonials.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setActiveIndex(index);
              }}
              tabIndex={0}
              className={`group text-left pb-6 border-b transition-all duration-300
                ${activeIndex === index
                  ? "border-[var(--palms-green)] border-b-2 text-[var(--palms-blue)] bg-gray-50 outline-none pt-5 ps-5"
                  : "border-gray-200 text-black  hover:text-[var(--palms-blue)]"
                }`}
            >
              <p className="text-base text-[var(--palms-blue)] font-medium flex items-center gap-2">
                {/* Active dot */}
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300
                    ${activeIndex === index
                      ? "bg-[var(--palms-green)]"
                      : "bg-transparent"
                    }`}
                />
                {item.name}
              </p>

              <p className="text-sm ms-4 text-[var(--palms-grey)]">
                {item.role}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
