import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import t1 from "../assets/t11.jpg";
import t2 from "../assets/t12.jpg";
import t3 from "../assets/t3.png";
import t4 from "../assets/t13.jpg";

const testimonials = [
  {
    name: "Management",
    role: "SPIC",
    quote:
      "We value our long association with PALMS. Nearly 300 of our employees have participated in over 60 programmes covering communication, leadership, productivity, and personal development. The engaging content and practical delivery have strengthened our workforce significantly.",
  },
  {
    name: "Mr. Senthil Kumar S",
    role: "CEO, Dakshin Bharat Gateway Terminal Pvt Ltd",
    quote:
      "PALMS behavioural training programmes have helped our teams gain valuable insights and practical tools. The sessions have strengthened individual mindsets and positively influenced our organisational culture.",
  },
  {
    name: "Mr. Krishna Shankar",
    role: "CEO, Subramany & Co",
    quote:
      "PALMS reflects a journey of dedication, growth, and meaningful milestones. Senthil’s innovative mindset and strong commitment have shaped the organisation into a vibrant platform for learning and development. Through thoughtful programmes and consistent effort, PALMS continues to help individuals grow year after year and remains a valuable force in professional development.",
  },
  {
    name: "J. Solomon Rajakumar",
    role: "CEO, EXCEL Group",
    quote:
      "PALMS has emerged as a pioneer in values-based leadership training and transformation. Their programmes inspire individuals and organisations to grow, evolve, and lead with purpose. What stands out is their commitment to building people, strengthening character, and nurturing a culture of excellence.",
  },
  {
    name: "Ms. Oliver Drishila",
    role: "School Teacher, Vietnam",
    quote:
      "My journey with PALMS Summer Camp helped me overcome stage fear and develop confidence in public speaking. What once felt challenging became a strength, and addressing large audiences today reflects the impact of those early learning experiences.",
  },
  {
    name: "Mr. Suresh Thangarayappan",
    role: "CEO, JSF Foods",
    quote:
      "Attending a PALMS programme feels like pressing the refresh button on both career and life. The sessions are interactive, thought-provoking, and filled with insights that transform the way you think, work, and grow.",
  },
  {
    name: "Mr. Sahayaraj",
    role: "CEO, Sahay Racks (P) Ltd",
    quote:
      "The energy at PALMS is truly infectious. You walk in curious and walk out inspired, equipped with practical strategies that can be applied immediately. The trainers combine professionalism with a personal touch that drives real growth.",
  },
  {
    name: "Dr. Nirmala Vijaykumar",
    role: "Consultant, Queens Fertility Center",
    quote:
      "Our association with PALMS has been deeply rewarding. Their programmes connect global ideas with local needs, and PALMS PLUS serves as an inspiring platform for continuous learning and thoughtful reflection.",
  },
  {
    name: "Mr. Cecil Machado",
    role: "CEO, Southern Trading Company",
    quote:
      "PALMS stands out for its remarkable consistency in delivering meaningful and practical learning experiences. Their commitment to quality has made them a dependable name in the learning and development space.",
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
    <section className="w-full bg-white px-5 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto">

        {/* Heading */}
        <div className="mb-16 sm:mb-20 md:mb-24 text-center">
          <span className="text-sm sm:text-base md:text-lg tracking-widest uppercase text-[var(--palms-grey)]">
            Testimonials
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--palms-blue)]">
            What our participants say
          </h2>
        </div>

        {/* Testimonial block */}
        <div className="relative max-w-[860px] mx-auto px-2 sm:px-0">

          {/* Decorative quote */}
          <span className="absolute -top-6 sm:-top-8 md:-top-10 -left-4 sm:-left-6 md:-left-8 text-[3rem] sm:text-[4rem] md:text-[6rem] leading-none text-[var(--palms-blue)]/10 select-none">
            “
          </span>

          {/* Accent line */}
          <div className="absolute left-[-10px] sm:left-[-16px] md:left-[-24px] top-3 sm:top-4 bottom-3 sm:bottom-4 w-[2px] bg-[var(--palms-blue)]/20" />

          <div ref={quoteRef} className="relative transition-all duration-500 hover:-translate-y-1">

            {/* Quote */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[var(--palms-grey)]">
              {testimonials[activeIndex].quote}
            </p>

            {/* Author */}
            <div className="mt-8 sm:mt-10 md:mt-12">
              <p className="font-medium text-sm sm:text-base text-[var(--palms-blue)]">
                {testimonials[activeIndex].name}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-[var(--palms-grey)]">
                {testimonials[activeIndex].role}
              </p>
            </div>

          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center gap-2 sm:gap-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-[3px] rounded-full transition-all duration-500
            ${activeIndex === i
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
