import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useParams } from "react-router-dom";


export const membershipsData = [
    {
        slug: "corporate",
        title: "Corporate Membership",
        description:
            "Structured long-term engagement models designed for organisations committed to sustained leadership and behavioural growth.",
        plans: [
            {
                title: "Mega Corporate",
                price: "30,000",
                description:
                    "Ideal for large sized companies or group of companies, with more than 25 employees.",
                benefits: [
                    "Entitles any 10 participants from your company/Group, to attend our regular monthly programmes.",
                    "Membership Fee: Rs.30,000/- Per Annum + GST as applicable."
                ]
            },
            {
                title: "Corporate",
                price: "18,000",
                featured: true,
                description:
                    "Ideal for medium sized companies, with more than 10 employees.",
                benefits: [
                    "Entitles any 5 participants from your company, to attend our regular monthly programmes.",
                    "Membership Fee: Rs.18,000/- Per Annum + GST as applicable."
                ]
            },
            {
                title: "Mini Corporate",
                price: "12,000",
                description:
                    "Ideal for small companies, with less than 10 employees.",
                benefits: [
                    "Entitles any 3 participants from your company, to attend the regular monthly programmes.",
                    "Membership Fee: Rs.12,000/- Per Annum + GST as applicable."
                ]
            }
        ]
    },

    {
        slug: "individual",
        title: "Individual Membership",
        description:
            "Flexible individual membership pathways for professionals, students, and families seeking continuous learning engagement.",
        plans: [
            {
                title: "Standard Membership",
                price: "6,000",
                description:
                    "Ideal for professionals, self-employed and individuals.",
                benefits: [
                    "Entitles the member to attend our regular monthly programmes.",
                    "Membership Fee: Rs.6,000/- Per Annum + GST as applicable."
                ]
            },
            {
                title: "Family Membership",
                price: "9,000",
                description:
                    "Ideal for those who wish to attend the programmes with spouse.",
                benefits: [
                    "Entitles the member and spouse to attend our regular monthly programmes.",
                    "Membership Fee: Rs.9,000/- Per Annum + GST as applicable."
                ]
            },
            {
                title: "Student Membership",
                price: "4,000",
                description:
                    "Ideal for college students who wish to attend the programmes.",
                benefits: [
                    "Entitles the member to attend our regular monthly programmes.",
                    "Membership Fee: Rs.4,000/- Per Annum + GST as applicable.",
                    "* To become a member category the student under this should submit proof of age and educational institutional identity card."
                ]
            },
            {
                title: "Associate Membership",
                price: "1,200",
                description:
                    "Ideal for individuals who are interested in attending selected programmes.",
                benefits: [
                    "Entitles the member to attend any one of the 12 monthly programmes and additional monthly programmes at concessional cost.",
                    "Membership Fee: Rs.1,200/- per annum + GST as applicable."
                ]
            }
        ]
    },

    {
        slug: "dot",
        title: "DOT Membership",
        description:
            "DOT is the acronym of DISTANT ONLINE TRAINING. Personal and Professional Development is an integral part of our life and distance should not be a barrier to learning new skills.",
        content: {
            intro: [
                "At PALMS, we are committed to training. Being the pioneers in the field of leadership and management skills training in Tuticorin, with 20 years of experience, we have been consistent in offering our regular monthly training programmes to our members.",
                "We would now like to leverage the power of internet, to offer this programme to people situated across the state and country. Through our DOT online membership plan, you will be able to enrich your knowledge and skills through our Monthly Webinars."
            ],
            why: [
                "Develop your personal and professional skills from the comfort of your office/home.",
                "Cost effective training solution to update your staff with knowledge and skills.",
                "Expert trainers from across the country will deliver quality programmes.",
                "Learn from wherever you are. No need to travel."
            ],
            how: [
                "Sessions will be held on the 2nd Thursday of every month. Duration: 90 minutes.",
                "Medium of instruction: Tamil and English.",
                "Exclusive for DOT members and paid participants, with prior registration."
            ],
            benefits: [
                "12 regular monthly DOT programmes in a year (one per month).",
                "Copy of PALMS PLUS Monthly Magazine."
            ],
            price: "Rs.3000/- per annum + 18% GST",
            note:
                "Corporates may contact us for group discount packages."
        }
    }

];


const CorporateMembership = () => {

    //   useEffect(() => {
    //   const ctx = gsap.context(() => {
    //     gsap.fromTo(
    //       ".membership-card",
    //       { y: 60, opacity: 0 },
    //       {
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.9,
    //         stagger: 0.18,
    //         ease: "power3.out"
    //       }
    //     );
    //   });

    //   return () => ctx.revert();
    // }, []);


    const { slug } = useParams();

    const membership = membershipsData.find(
        m => m.slug === slug
    );

    if (!membership) return <div>Not found</div>;

    const plans = membership.plans;
    const isFour = plans.length === 4;



    return (
        <section className="relative py-32 bg-gradient-to-b from-[var(--palms-blue)] to-[#0c2340] text-white ">

            <div className="max-w-[1200px] mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-semibold">
                        Corporate Membership
                    </h1>
                    <p className="mt-6 text-white/70 max-w-[600px] mx-auto">
                        Structured long-term engagement models designed for organisations committed to sustained leadership and behavioural growth.
                    </p>
                </div>

                {/* PRICING GRID */}
                <div
                    className={`
    grid gap-10
    grid-cols-1
    sm:grid-cols-2
    ${isFour ? "md:grid-cols-4" : "md:grid-cols-3"}
  `}
                >


                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`
  relative
  rounded-3xl
  bg-[#112a4a]
  border border-white/15
  ${corporatePlans.length === 4 ? "p-8" : "p-10"}

                            `}

                        >
                            {plan.featured && (
                                <div className="absolute top-6 right-6 text-xs bg-[var(--palms-green)] text-white px-3 py-1 rounded-full">
                                    Recommended
                                </div>
                            )}

                            <h3 className="text-2xl font-semibold mb-6">
                                {plan.title}
                            </h3>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-[var(--palms-green)]">
                                    ₹{plan.price}
                                </span>
                                <span className="text-sm text-white/60"> / year</span>
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed mb-8">
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {plan.benefits.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm">
                                        <span className="w-2 h-2 rounded-full bg-[var(--palms-green)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 rounded-full bg-[var(--palms-green)] text-white font-medium transition-all hover:scale-105">
                                Register Now
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default CorporateMembership;
