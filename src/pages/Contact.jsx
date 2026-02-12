import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lazy, Suspense } from "react";

const HologramGlobe = lazy(() => import("../Components/HologramGlobe"));

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const [showGlobe, setShowGlobe] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShowGlobe(true), 400);
        return () => clearTimeout(t);
    }, []);

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
    className="relative w-full min-h-screen bg-[#f5f7fb] px-6 pt-18 pb-20 overflow-hidden"
  >

    {showGlobe && (
      <Suspense fallback={null}>
        <HologramGlobe />
      </Suspense>
    )}

    <div className="relative z-10 max-w-full mx-auto">

      {/* HERO */}
      <div className="contact-reveal mb-28 text-white p-20 bg-palms-gradient ">
        <span className="text-xs text-white/60 block mb-8">
          Contact PALMS
        </span>

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Conversations that begin with intent
        </h1>

        <p className="mt-10 text-lg text-white/70">
          PALMS welcomes thoughtful enquiries - from individuals,
          professionals, and organisations seeking clarity,
          learning, and long-term development.
        </p>
      </div>


      {/* CONTENT SECTION */}
      <div className="contact-reveal bg-white rounded-3xl max-w-[1200px] shadow-xl p-14">

        {/* INTENT BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">

          {[
            {
              id: "01",
              title: "Membership enquiries",
              desc: "For individuals interested in joining PALMS and participating in regular learning programmes."
            },
            {
              id: "02",
              title: "Corporate partnerships",
              desc: "Organisations seeking leadership development, training programmes, or long-term capability building."
            },
            {
              id: "03",
              title: "General communication",
              desc: "Media, academic collaboration, or conversations aligned with PALMS values."
            }
          ].map((item) => (
            <div key={item.id} className="group">

              <div className="w-12 h-12 rounded-full bg-[var(--palms-blue)]/10 text-[var(--palms-blue)] flex items-center justify-center font-semibold mb-6">
                {item.id}
              </div>

              <p className="text-base font-medium text-[var(--palms-blue)] mb-4">
                {item.title}
              </p>

              <p className="text-sm text-[var(--palms-grey)] leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>


        {/* FORM SECTION */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* FORM */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-10">

            <div>
              <label className="text-sm font-medium text-[var(--palms-blue)] block mb-3">
                Your name
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm
                           focus:outline-none focus:border-[var(--palms-blue)] focus:ring-2 focus:ring-[var(--palms-blue)]/10 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[var(--palms-blue)] block mb-3">
                Email address
              </label>
              <input
                type="email"
                required
                className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm
                           focus:outline-none focus:border-[var(--palms-blue)] focus:ring-2 focus:ring-[var(--palms-blue)]/10 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[var(--palms-blue)] block mb-3">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm resize-none
                           focus:outline-none focus:border-[var(--palms-blue)] focus:ring-2 focus:ring-[var(--palms-blue)]/10 transition"
              />
            </div>

            <button className="px-12 py-4 bg-[var(--palms-blue)] text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
              Send message
            </button>

          </form>


          {/* SIDE INFO CARD */}
          <div className="bg-[var(--palms-blue)] text-white rounded-3xl p-12 flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                We respond personally
              </h3>

              <p className="text-white/70 leading-relaxed mb-10">
                Every enquiry is read carefully and answered
                with intention. PALMS does not engage in
                automated or promotional communication.
              </p>
            </div>

            <div className="text-sm text-white/60 space-y-3">
              <p>PALMS Training & Consulting</p>
              <p>Thoothukudi · Tamil Nadu</p>
              <p>0461-2330856 · 82203 44477</p>
              <p>info@palmsindia.org</p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
);

};

export default Contact;
