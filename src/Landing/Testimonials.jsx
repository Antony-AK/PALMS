import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import t1 from "../assets/t11.jpg";
import t2 from "../assets/t12.jpg";
import t3 from "../assets/t3.png";
import t4 from "../assets/t13.jpg";

const testimonials = [
  {
    name: "Mr. A. V. Ramanathan",
    role: "Manager (Human Relations), Heavy Water Board, Mumbai",
    quote:
      "As a member, participant, friend, and trainer, my journey with PALMS has been joyful and deeply enriching. In a region with limited exposure and infrastructure, PALMS has created a rare platform for learning and growth. I am confident PALMS will continue empowering people with knowledge, skills, and the right attitude, reaching greater heights through its unwavering commitment.",
  },
  {
    name: "Mr. C. Naren Dharmaraj",
    role: "Partner, Brilliant Salt Refinery",
    quote:
      "PALMS training has guided me significantly in both business and personal life. It brought a positive shift in my mindset, encouraged creative thinking, and strengthened my ability to plan and take calculated risks. The trainers are practical, grounded, and approachable, and the learning environment fosters meaningful growth.",
  },
  {
    name: "Dr. G. Sugumar",
    role: "Associate Professor, Fisheries College & Research Institute",
    quote:
      "PALMS’ commitment to training is commendable. Every programme is well-planned, thoughtfully designed, and efficiently executed. The learning experience consistently delivers real value.",
  },
  {
    name: "Mr. Edwin Samuel",
    role: "Business Owner, Pearl Shipping Agencies",
    quote:
      "PALMS is doing praiseworthy service to society. Soft skills training is essential for workplace success, and PALMS delivers such valuable learning at highly affordable costs, making development accessible to many.",
  },
  {
    name: "Mr. Vikranth Machado",
    role: "Managing Director, Machadosons (P) Ltd",
    quote:
      "The in-house programmes conducted by PALMS brought remarkable improvements in our team’s efficiency and collaboration. Employees became highly motivated and began working together more effectively as a cohesive unit.",
  },
];


const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const quoteRef = useRef(null);

  // Gentle fade only (no slide)
  useEffect(() => {
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power1.out" }
    );
  }, [activeIndex]);

  // Auto rotate (very calm)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) =>
        i === testimonials.length - 1 ? 0 : i + 1
      );
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="w-full bg-white px-6 py-32">
  <div className="max-w-[1280px] mx-auto">

    {/* Heading */}
    <div className="mb-24 text-center">
      <span className="text-lg tracking-widest uppercase text-[var(--palms-grey)]">
        Testimonials
      </span>

      <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-[var(--palms-blue)]">
        What our participants say
      </h2>
    </div>

    {/* Testimonial block */}
    <div className="relative max-w-[860px] mx-auto">

      {/* Decorative quote */}
      <span className="absolute -top-10 -left-8 text-[6rem] leading-none
        text-[var(--palms-blue)]/10 select-none">
        “
      </span>

      {/* Accent line */}
      <div className="absolute left-[-24px] top-4 bottom-4 w-[2px]
        bg-[var(--palms-blue)]/20" />

      <div ref={quoteRef} className="relative">

        {/* Quote */}
        <p className="text-lg md:text-xl leading-relaxed text-[var(--palms-grey)]">
          {testimonials[activeIndex].quote}
        </p>

        {/* Author */}
        <div className="mt-12">
          <p className="font-medium text-[var(--palms-blue)]">
            {testimonials[activeIndex].name}
          </p>
          <p className="mt-1 text-sm text-[var(--palms-grey)]">
            {testimonials[activeIndex].role}
          </p>
        </div>

      </div>
    </div>

    {/* Progress indicator */}
    <div className="mt-20 flex justify-center gap-3">
      {testimonials.map((_, i) => (
        <span
          key={i}
          className={`h-[3px] rounded-full transition-all duration-500
            ${
              activeIndex === i
                ? "w-10 bg-[var(--palms-green)]"
                : "w-6 bg-gray-200"
            }`}
        />
      ))}
    </div>

  </div>
</section>

  );
};

export default TestimonialsSection;
