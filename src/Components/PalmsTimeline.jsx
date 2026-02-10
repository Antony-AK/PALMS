import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_DATA = [
    {
        year: 2001,
        x: 80,
        y: 80,
        color: "#F59E0B",
        items: ["Foundation"]
    },
    {
        year: 2002,
        x: 160,
        y: 80,
        color: "#F59E0B",
        items: []
    },
    {
        year: 2003,
        x: 240,
        y: 80,
        color: "#F59E0B",
        items: []
    },
    {
        year: 2004,
        x: 320,
        y: 80,
        color: "#F59E0B",
        items: []
    },
    {
        year: 2005,
        x: 400,
        y: 80,
        color: "#10B981",
        items: ["First Members Conducted"]
    },
    {
        year: 2006,
        x: 480,
        y: 200,
        color: "#EF4444",
        items: ["Set up PALMS Self Development Centre"]
    },
    {
        year: 2007,
        x: 560,
        y: 200,
        color: "#EF4444",
        items: ["CEO Summit", "First Exclusive Programme"]
    },
    {
        year: 2008,
        x: 640,
        y: 200,
        color: "#3B82F6",
        items: [
            "BSNL Tender – In-house Training (600)",
            "PALMS PLUS Newsletter",
            "Summer Camps for School Students",
            "50th Milestone Programme"
        ]
    },
    {
        year: 2009,
        x: 720,
        y: 80,
        color: "#3B82F6",
        items: ["100th Milestone"]
    },
    {
        year: 2010,
        x: 800,
        y: 80,
        color: "#6366F1",
        items: [
            "Moved to Bigger Meeting Centre",
            "10th Anniversary Celebrations",
            "Launched The Pink Circle Programme",
            "PALMS Toastmasters",
            "Outbound Training – Cairn Energy",
            "Diploma in Shipping & Logistics"
        ]
    },
    {
        year: 2011,
        x: 880,
        y: 200,
        color: "#22C55E",
        items: ["PROFIT Business Retreat"]
    },
    {
        year: 2012,
        x: 960,
        y: 200,
        color: "#22C55E",
        items: ["Launch of PALMS Business Network"]
    },
    {
        year: 2013,
        x: 1040,
        y: 200,
        color: "#22C55E",
        items: ["Business Yatra – China"]
    },
    {
        year: 2014,
        x: 1120,
        y: 200,
        color: "#22C55E",
        items: ["Business Yatra – Indonesia"]
    },
    {
        year: 2015,
        x: 1200,
        y: 240,
        color: "#22C55E",
        items: ["Started PALMS Membership Programmes – Tirunelveli"]
    },
    {
        year: 2016,
        x: 960,
        y: 400,
        color: "#8B5CF6",
        items: ["PROFIT Business Retreat"]
    },
    {
        year: 2017,
        x: 880,
        y: 400,
        color: "#8B5CF6",
        items: ["200th Milestone Programme"]
    },
    {
        year: 2018,
        x: 800,
        y: 400,
        color: "#8B5CF6",
        items: ["Business Yatra – Dubai"]
    },
    {
        year: 2019,
        x: 720,
        y: 400,
        color: "#8B5CF6",
        items: ["PROFIT Business Retreat"]
    },
    {
        year: 2020,
        x: 640,
        y: 400,
        color: "#22C55E",
        items: ["Launch of PEP UP Programme"]
    },
    {
        year: 2021,
        x: 560,
        y: 400,
        color: "#22C55E",
        items: ["250th Milestone Programme"]
    },
    {
        year: 2022,
        x: 480,
        y: 400,
        color: "#22C55E",
        items: []
    },
    {
        year: 2023,
        x: 400,
        y: 400,
        color: "#22C55E",
        items: []
    },
    {
        year: 2024,
        x: 320,
        y: 400,
        color: "#22C55E",
        items: []
    },
    {
        year: 2025,
        x: 1520,
        y: 400,
        color: "#22C55E",
        items: ["300th Milestone – Pro Programme"]
    }
];


const RAILS = {
    top: {
        y: 80,
        labelOffset: -85,
        years: [2001, 2002, 2003, 2004, 2005, 2009, 2010]
    },
    middle: {
        y: 240,
        labelOffset: 80,
        years: [2006, 2007, 2008, 2011, 2012, 2013, 2014, 2015]
    },
    bottom: {
        y: 400,
        labelOffset: 80,
        years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
    }
};

const EVENTS = {
    2001: ["Foundation"],
    2005: ["First Members Conducted"],
    2006: ["Set up PALMS Self Development Centre"],
    2007: ["CEO Summit", "First Exclusive Programme"],
    2008: [
        "50th Milestone Programme"
    ],
    2009: ["100th Milestone"],
    2010: [
        "Moved to Bigger Meeting Centre",
    ],
    2011: ["PROFIT Business Retreat"],
    2012: ["PALMS Business Network"],
    2013: ["Business Yatra – China"],
    2014: ["Business Yatra – Indonesia"],
    2015: ["PALMS Membership Programmes – Tirunelveli"],
    2016: ["PROFIT Business Retreat"],
    2017: ["200th Milestone Programme"],
    2018: ["Business Yatra – Dubai"],
    2019: ["PROFIT Business Retreat"],
    2020: ["Launch of PEP UP Programme"],
    2021: ["250th Milestone Programme"],
    2025: ["300th Milestone – Pro Programme"]
};


const PalmsTimeline = () => {
    const svgRef = useRef(null);
    const pathRef = useRef(null);

    useLayoutEffect(() => {
        const path = pathRef.current;
        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: svgRef.current,
                start: "top bottom",
                end: "bottom center",
                scrub: 1,
            },
        });
    }, []);

    const START_X = 120;
    const END_X = 1480;

    const buildNodes = () => {
        const nodes = [];

        Object.values(RAILS).forEach(rail => {
            const gap = (END_X - START_X) / (rail.years.length - 1);

            rail.years.forEach((year, index) => {
                nodes.push({
                    year,
                    x: START_X + gap * index,
                    y: rail.y,
                    labelY: rail.y + rail.labelOffset,
                    items: EVENTS[year] || []
                });
            });
        });

        return nodes;
    };

    const splitIntoTwoLines = (text) => {
        const words = text.split(" ");
        if (words.length <= 2) {
            return [text]; // short text stays single line
        }

        const mid = Math.ceil(words.length / 2);
        return [
            words.slice(0, mid).join(" "),
            words.slice(mid).join(" "),
        ];
    };


    return (
        <section className="w-full py-32">
            <h3 className="text-3xl font-semibold text-center text-[var(--palms-blue)] mb-20">
                The PALMS Journey
            </h3>

            <svg
                ref={svgRef}
                viewBox="0 0 1600 520"
                className="w-full overflow-visible"
            >
                {/* TRACK */}
                <path
                    d="M 80 80 H 1520 Q 1560 80 1560 120 V 200 Q 1560 240 1520 240 H 80 Q 40 240 40 280 V 360 Q 40 400 80 400 H 1520"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="48"
                    strokeLinecap="round"
                />

                {/* ANIMATED PATH */}
                <path
                    ref={pathRef}
                    d="M 80 80 H 1520 Q 1560 80 1560 120 V 200 Q 1560 240 1520 240 H 80 Q 40 240 40 280 V 360 Q 40 400 80 400 H 1520"
                    fill="none"
                    stroke="url(#palmsGradient)"
                    strokeWidth="64"
                    strokeLinecap="round"
                />

                {/* GRADIENT */}
                <defs>
                    <linearGradient id="palmsGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="25%" stopColor="#10B981" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="75%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#22C55E" />
                    </linearGradient>
                </defs>

                {/* ================= EVENTS ================= */}

                {buildNodes().map((e, i) => (
                    <g key={i}>
                        {/* Dot */}
                        <circle cx={e.x} cy={e.y} r="10" fill="#22C55E" />

                        {/* Year */}
                        <circle
                            cx={e.x}
                            cy={e.y}
                            r="22"
                            fill="white"
                            stroke="#22C55E"
                            strokeWidth="2"
                        />
                        <circle
                            cx={e.x}
                            cy={e.y}
                            r="16"
                            fill="#22C55E"
                        />

                        {e.items.length > 0 && (
                            <line
                                x1={e.x}
                                y1={e.y + (e.labelY < e.y ? -26 : 26)}   // start outside year circle
                                x2={e.x}
                                y2={e.labelY + (e.labelY < e.y ? 5 : -5)} // stop before text
                                stroke="#CBD5E1"
                                strokeWidth="1.5"
                                strokeDasharray="3 4"
                                strokeLinecap="round"
                            />
                        )}


                        <text
                            x={e.x}
                            y={e.y + 4}
                            textAnchor="middle"
                            fontSize="13"
                            fontWeight="600"
                            fill="var(--palms-blue)"
                        >
                            {e.year}
                        </text>

                        {/* Content */}
                        {e.items.length > 0 && (
                            <text
                                x={e.x}
                                y={e.labelY}
                                textAnchor="middle"
                                fontSize="14"
                                fill="#374151"
                            >
                                {e.items.flatMap((item, itemIdx) => {
                                    const lines = splitIntoTwoLines(item);

                                    return lines.map((line, lineIdx) => (
                                        <tspan
                                            key={`${itemIdx}-${lineIdx}`}
                                            x={e.x}
                                            dy={
                                                itemIdx === 0 && lineIdx === 0
                                                    ? 0
                                                    : 18
                                            }
                                            fontWeight={itemIdx === 0 && lineIdx === 0 ? "600" : "400"}
                                            fill={itemIdx === 0 && lineIdx === 0 ? "var(--palms-blue)" : "#374151"}
                                        >
                                            {line}
                                        </tspan>
                                    ));
                                })}
                            </text>
                        )}

                    </g>
                ))}

            </svg>
        </section>
    );
};

export default PalmsTimeline;
