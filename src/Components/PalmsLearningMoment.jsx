import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PalmsLearningMoment = () => {
    const cardRef = useRef(null);
    const tabRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [hasClosed, setHasClosed] = useState(false);


    // show automatically after 2s
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    // animate open / close
    useEffect(() => {
        if (open && cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                {
                    opacity: 0,
                    x: 80,        // 👈 start offscreen (right)
                    scale: 0.98,
                },
                {
                    opacity: 1,
                    x: 0,         // 👈 land in place
                    scale: 1,
                    duration: 0.8,
                    ease: "power4.out",
                }
            );
        }

        if (!open && tabRef.current && hasClosed) {
            gsap.fromTo(
                tabRef.current,
                {
                    opacity: 0,
                    x: 60,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power3.out",
                }
            );
        }
    }, [open, hasClosed]);


    return (
        <>
            {/* EXPANDED CARD */}
            {open && (
                <div
                    ref={cardRef}
                    className="
      fixed top-48 right-10 z-[9999]
      w-[440px]
      rounded-[32px]
      bg-gradient-to-br from-[#0f2545] via-[#13294B] to-[#0b1d36]
      shadow-[0_50px_140px_rgba(0,0,0,0.45)]
      p-10
      text-white
      overflow-hidden
      border-l-8 border-b-8 border-[var(--palms-green)]
    "
                >

                    
                    {/* ambient glow */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--palms-green)]/10 rounded-full blur-[60px]" />

                    {/* close */}

                    <button
                        onClick={() => {
                            gsap.to(cardRef.current, {
                                opacity: 0,
                                x: 80,
                                scale: 0.98,
                                duration: 0.5,
                                ease: "power3.in",
                                onComplete: () => {
                                    setOpen(false);
                                    setHasClosed(true);
                                },
                            });
                        }}

                        className="absolute top-6 right-6 text-white/60 hover:text-white transition"
                    >
                        ✕
                    </button>

                    {/* TAG */}
                    <span className="block text-[11px] tracking-[0.35em] uppercase text-white/70">
                        Are you ready for the change?
                    </span>

                    {/* HEADLINE */}
                    <h2 className="mt-5 text-[24px] leading-[1.05] font-semibold ">
                        Growth

                        doesn’t
                        <br />
                        happen

                        by chance.
                    </h2>

                    {/* divider */}
                    <div className="mt-5 h-px w-14 bg-[var(--palms-green)]" />

                    {/* BODY */}
                    <p className="mt-5 text-[15px] leading-relaxed text-white/80 max-w-[360px]">
                        Most people stay busy.
                        <br />
                        Few people grow.
                        <br /><br />
                        PALMS exists for those who are ready to slow down,
                        think deeply, and lead with clarity.
                    </p>

                    {/* STATEMENT STRIP */}
                    <div className="mt-5 space-y-2 text-sm text-white/75">
                        <p><span className="text-[var(--palms-green)] text-md">•</span> When was the last time you truly reflected?</p>
                        <p><span className="text-[var(--palms-green)] text-md">•</span> Are you growing - or just moving fast?</p>
                    </div>


                    {/* ACTION */}
                    <div className="mt-5">
                        <a
                            href="/membership"
                            className="
          inline-flex items-center gap-3
          text-md  font-medium ms-1
          text-[var(--palms-green)]
          group
        "
                        >
                            Begin the journey
                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>

                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10 animate-[pulse_6s_ease-in-out_infinite]" />
                    </div>

                </div>
            )}




            {/* COLLAPSED SIDE TAB */}
            {!open && hasClosed && (
                <div
                    ref={tabRef}
                    className="fixed top-1/4 right-0 z-[9999]"
                >
                    <button
                        onClick={() => setOpen(true)}
                        className="
              h-[56px] w-[250px]
              bg-[var(--palms-blue)]
              text-white text-sm font-medium
              rotate-[-90deg] origin-bottom-right
              rounded-t-xl 
              shadow-[0_10px_30px_rgba(19,41,75,0.35)]
              hover:shadow-[0_12px_40px_rgba(19,41,75,0.5)]
              transition-all border-t-4 border-[var(--palms-green)]
            "
                    >
                        Are u ready for the change →
                    </button>
                </div>
            )}
        </>
    );
};

export default PalmsLearningMoment;
