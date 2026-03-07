import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const HologramGlobe = lazy(() => import("../Components/HologramGlobe"));

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [showGlobe, setShowGlobe] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024; // lg breakpoint

    if (isDesktop) {
      const t = setTimeout(() => setShowGlobe(true), 400);
      return () => clearTimeout(t);
    }
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

  const membershipPlans = [
    { name: "Mega Corporate", price: "₹30,000 / year" },
    { name: "Corporate", price: "₹18,000 / year" },
    { name: "Mini Corporate", price: "₹12,000 / year" },
    { name: "Standard Membership", price: "₹6,000 / year" },
    { name: "Family Membership", price: "₹9,000 / year" },
    { name: "Student Membership", price: "₹4,000 / year" },
    { name: "Associate Membership", price: "₹1,200 / year" }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#f5f7fb] px-5 sm:px-6 md:px-8 pt-14 sm:pt-16 md:pt-18 pb-16 sm:pb-18 md:pb-20 overflow-hidden"    >

      {showGlobe && (
        <div className="hidden lg:block">
          <Suspense fallback={null}>
            <HologramGlobe />
          </Suspense>
        </div>
      )}

      <div className="relative z-10 max-w-full mx-auto">

        {/* HERO */}
        <div className="contact-reveal mb-16 sm:mb-20 md:mb-28 text-white p-8 sm:p-12 md:p-16 lg:p-20 bg-palms-gradient rounded-2xl">
          <span className="text-xs text-white/60 block mb-8">
            Contact PALMS
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Conversations that begin with intent
          </h1>

          <p className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg text-white/70">
            PALMS welcomes thoughtful enquiries - from individuals,
            professionals, and organisations seeking clarity,
            learning, and long-term development.
          </p>
        </div>


        {/* CONTENT SECTION */}
        <div className="contact-reveal bg-white rounded-3xl max-w-[1200px] shadow-xl p-6 sm:p-8 md:p-10 lg:p-14 mx-auto">


          {/* PARTNERSHIP & CAREER OPPORTUNITIES */}
          <div className="contact-reveal mb-24">

            <div className="border-t border-gray-100 ">

              <div className="mb-16 max-w-3xl">
                <span className="text-xs text-[var(--palms-grey)] uppercase tracking-widest">
                  Partnership & Career Opportunities
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold text-[var(--palms-blue)] mt-6">
                  Collaborate. Contribute. Grow with PALMS.
                </h2>

                <p className="mt-6 text-[var(--palms-grey)] leading-relaxed">
                  PALMS collaborates with committed professionals, entrepreneurs,
                  and business associates who believe in structured leadership
                  development and long-term capability building.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

                {[
                  {
                    id: "01",
                    title: "Join us, as a Franchise",
                    route: "/join/franchise",
                    desc: "Simply complete the application form and we will get in touch with you to discuss opportunities for working together and mutual growth."
                  },
                  {
                    id: "02",
                    title: "Join us, as a Trainer",
                    route: "/join/trainer",
                    desc: "We would like to add qualified training professionals to conduct programmes that enhance Leadership and Management development."
                  },
                  {
                    id: "03",
                    title: "Join us, as a Marketeer",
                    route: "/join/associate",
                    desc: "If you have a strong professional network across business owners, students, or organisations, you can promote selected services on a commission basis."
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    className="group bg-[#f9fafc] border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >

                    <div className="w-10 h-10 rounded-full bg-[var(--palms-blue)]/10 text-[var(--palms-blue)] flex items-center justify-center text-sm font-semibold mb-6">
                      {item.id}
                    </div>

                    <h3 className="text-lg font-semibold text-[var(--palms-blue)] mb-4">
                      {item.title}
                    </h3>



                    <p className="text-sm text-[var(--palms-grey)] leading-relaxed mb-8">
                      {item.desc}
                    </p>

                    <button
                      onClick={() => navigate(item.route)}
                      className="text-sm font-medium text-[var(--palms-blue)] group-hover:text-[var(--palms-green)] transition">
                      Apply Now →
                    </button>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* FORM SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-20">

            {/* FORM */}
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log({
                selectedPlan
              });
            }} className="space-y-10">

              <div>
                <label className="text-sm font-medium text-[var(--palms-blue)] block mb-3">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm
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
                  className="w-full border border-gray-200 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm
                           focus:outline-none focus:border-[var(--palms-blue)] focus:ring-2 focus:ring-[var(--palms-blue)]/10 transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--palms-blue)] block mb-3">
                  Select Membership Plan
                </label>

                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm 
    focus:outline-none focus:border-[var(--palms-blue)] 
    focus:ring-2 focus:ring-[var(--palms-blue)]/10 transition"
                >
                  <option value="">Choose a membership plan</option>

                  {membershipPlans.map((plan, index) => (
                    <option key={index} value={plan.name}>
                      {plan.name} — {plan.price}
                    </option>
                  ))}
                </select>
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

              <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base bg-[var(--palms-blue)] text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                Send message
              </button>

            </form>


            {/* SIDE INFO CARD */}
            <div className="bg-[var(--palms-blue)] text-white rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-between">

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
