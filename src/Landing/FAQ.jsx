import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const faqs = [
    {
        q: "Who is PALMS membership designed for?",
        a: "PALMS membership is ideal for professionals, managers, students, and organisations that value continuous learning, reflective thinking, and long-term personal and professional growth.",
    },
    {
        q: "How often are the learning programmes conducted?",
        a: "PALMS conducts structured learning programmes every month for its members, focusing on leadership, management skills, and self-development topics.",
    },
    {
        q: "Are the programmes suitable for working professionals?",
        a: "Yes. PALMS programmes are designed specifically to accommodate working professionals, combining practical relevance with reflective learning.",
    },
    {
        q: "Do organisations partner with PALMS for corporate training?",
        a: "Yes. PALMS works with organisations to design and deliver customised corporate training and development programmes aligned with organisational goals.",
    },
    {
        q: "How can I become a PALMS member?",
        a: "You can begin by exploring the membership structure on our website or by contacting the PALMS team directly. Membership details are shared clearly before enrolment.",
    },
];

const FAQItem = ({ item, isOpen, onClick }) => {
    const contentRef = useRef(null);
    const iconRef = useRef(null);


    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.4,
                ease: "power1.out",
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power1.inOut",
            });
        }
    }, [isOpen]);

    useEffect(() => {
  gsap.to(iconRef.current, {
    rotate: isOpen ? 180 : 0,
    duration: 0.35,
    ease: "power3.out",
  });
}, [isOpen]);



    return (
        <div className="border-b border-gray-200 py-8 cursor-pointer ">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-start text-left"
            >
                <h4 className="text-lg font-medium text-[var(--palms-blue)] max-w-[520px] cursor-pointer">
                    {item.q}
                </h4>
                <span
                    ref={iconRef}
                    className="ml-6 w-6 h-6 text-[var(--palms-blue)]
             inline-flex items-center justify-center
             origin-center"
                >
                    <span className="text-xl leading-none text-[var(--palms-green)] select-none">
                        {isOpen ? "−" : "+"}
                    </span>
                </span>



            </button>

            <div
                ref={contentRef}
                className="overflow-hidden h-0 opacity-0"
            >
                <p className="mt-6 text-sm text-[var(--palms-grey)] max-w-[640px] leading-relaxed">
                    {item.a}
                </p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="w-full bg-white px-6 py-16">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">

                {/* LEFT — CONTEXT */}
                <div className="max-w-[420px]">
                    <span className="text-lg text-gray-500 block mb-6">
                        Frequently asked
                    </span>

                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-[var(--palms-blue)]">
                        Clarifying
                        <br />
                        questions
                    </h2>

                    <p className="mt-10 text-lg text-[var(--palms-grey)]">
                        Answers to common questions about PALMS, our programmes,
                        and how membership works.
                    </p>
                </div>

                {/* RIGHT — FAQ LIST */}
                <div className="flex flex-col">
                    {faqs.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            isOpen={activeIndex === index}
                            onClick={() =>
                                setActiveIndex(activeIndex === index ? null : index)
                            }
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
