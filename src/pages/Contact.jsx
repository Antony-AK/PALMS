import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".contact-reveal",
                { opacity: 0, y: 14 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white px-6 pt-36 pb-16"
        >
            <div className="max-w-[1260px] mx-auto">

                {/* HERO STATEMENT */}
                <div className="contact-reveal mb-32">
                    <span className="text-xs text-gray-500 block mb-8">
                        Contact PALMS
                    </span>

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[var(--palms-blue)]">
                        Conversations
                        <br />
                        that begin
                        <br />
                        with intent
                    </h1>

                    <p className="mt-10 text-xl text-[var(--palms-grey)] max-w-[720px]">
                        PALMS welcomes thoughtful enquiries — from individuals,
                        professionals, and organisations seeking clarity,
                        learning, and long-term development.
                    </p>
                </div>

                {/* INTENT BLOCKS */}
                <div className="contact-reveal grid grid-cols-1 md:grid-cols-3 gap-20 mb-36">

                    {/* ITEM 01 */}
                    <div className="group relative pl-8">
                        {/* Accent line */}
                        <span className="absolute left-0 top-0 h-full w-[2px] bg-[var(--palms-blue)]/20 
                     group-hover:bg-[var(--palms-blue)] transition-all duration-300" />

                        <span className="text-xs tracking-widest text-[var(--palms-grey)] block mb-4">
                            01
                        </span>

                        <p className="text-base font-medium text-[var(--palms-blue)] mb-4">
                            Membership enquiries
                        </p>

                        <p className="text-sm text-[var(--palms-grey)] leading-relaxed">
                            For individuals interested in joining PALMS
                            and participating in regular learning programmes.
                        </p>
                    </div>

                    {/* ITEM 02 */}
                    <div className="group relative pl-8">
                        <span className="absolute left-0 top-0 h-full w-[2px] bg-[var(--palms-blue)]/20 
                     group-hover:bg-[var(--palms-blue)] transition-all duration-300" />

                        <span className="text-xs tracking-widest text-[var(--palms-grey)] block mb-4">
                            02
                        </span>

                        <p className="text-base font-medium text-[var(--palms-blue)] mb-4">
                            Corporate partnerships
                        </p>

                        <p className="text-sm text-[var(--palms-grey)] leading-relaxed">
                            Organisations seeking leadership development,
                            training programmes, or long-term capability building.
                        </p>
                    </div>

                    {/* ITEM 03 */}
                    <div className="group relative pl-8">
                        <span className="absolute left-0 top-0 h-full w-[2px] bg-[var(--palms-blue)]/20 
                     group-hover:bg-[var(--palms-blue)] transition-all duration-300" />

                        <span className="text-xs tracking-widest text-[var(--palms-grey)] block mb-4">
                            03
                        </span>

                        <p className="text-base font-medium text-[var(--palms-blue)] mb-4">
                            General communication
                        </p>

                        <p className="text-sm text-[var(--palms-grey)] leading-relaxed">
                            Media, academic collaboration, or
                            conversations aligned with PALMS values.
                        </p>
                    </div>

                </div>


                {/* FORM */}
                <div className="contact-reveal max-w-[720px]">

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-14"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <label className="text-sm font-medium text-black block mb-3">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border-b border-gray-300
                             py-3 text-sm bg-transparent
                             focus:outline-none
                             focus:border-[var(--palms-blue)]"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-black block mb-3">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border-b border-gray-300
                             py-3 text-sm bg-transparent
                             focus:outline-none
                             focus:border-[var(--palms-blue)]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-black block mb-3">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                required
                                className="w-full border-b border-gray-300
                           py-3 text-sm bg-transparent resize-none
                           focus:outline-none
                           focus:border-[var(--palms-blue)]"
                            />
                        </div>

                        <div className="pt-6">
                            <button className="btn-primary px-10 py-3">
                                Send message
                            </button>
                        </div>

                    </form>

                    {/* QUIET REASSURANCE */}
                    <p className="mt-10 text-xs text-[var(--palms-grey)] max-w-[520px]">
                        We read every message with care and respond personally.
                        PALMS does not engage in automated or promotional communication.
                    </p>

                </div>

                {/* CONTACT DETAILS — SUBTLE */}
                {/* <div className="contact-reveal mt-40 pt-16 border-t border-gray-200 text-sm text-[var(--palms-grey)] space-y-4">
          <p>
            PALMS Training & Consulting · Thoothukudi, Tamil Nadu
          </p>
          <p>
            0461-2330856 · 82203 44477 · info@palmsindia.org
          </p>
        </div> */}

            </div>
        </section>
    );
};

export default Contact;
