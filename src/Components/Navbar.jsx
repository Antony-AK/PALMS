import React, { useState, useEffect } from "react";
import logo from "../assets/logo1.png"
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// src/data/servicesNav.js
export const servicesNav = [
    {
        id: "01",
        title: "Inhouse Training Programmes",
        slug: "inhouse-training-programmes",
    },
    {
        id: "03",
        title: "Special Programmes for Individuals",
        slug: "special-programmes-individuals",
    },
    {
        id: "02",
        title: "Outbound Training Programmes",
        slug: "outbound-training-programmes",
    },

    {
        id: "05",
        title: "PEP UP - Personality Development",
        slug: "pep-up-personality-development",
    },
    {
        id: "08",
        title: "PROFIT - Business Retreat for CEO’s & Business Owners",
        slug: "profit-business-retreat",
    },
    {
        id: "06",
        title: "Pro EX – Managerial & Professional Skills Development",
        slug: "pro-ex-managerial-professional-skills",
    },

    {
        id: "09",
        title: "Business Consultancy",
        slug: "business-consultancy",
    },

    {
        id: "04",
        title: "Career Compass - Career Guidance for Students",
        slug: "career-guidance-students",
    },
    {
        id: "07",
        title: "MBA In a Box – Business Essentials for Entrepreneurs",
        slug: "mba-in-a-box-business-essentials",
    },

];

export const membershipsNav = [
    { id: "01", title: "Corporate Membership", slug: "corporate" },
    { id: "02", title: "Individual Membership", slug: "individual" },
    { id: "03", title: "DOT Programme", slug: "dot" },
];




const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const navigate = useNavigate();
    const [showMemberships, setShowMemberships] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileMembershipsOpen, setMobileMembershipsOpen] = useState(false);



    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const linkClass = ({ isActive }) =>
        `nav-link transition-colors ${isActive
            ? "text-[var(--palms-green)] "
            : "text-[var(--palms-grey)] hover:text-[var(--palms-green)]"
        }`;

    const MobileLink = ({ to, label, close }) => {
        const navigate = useNavigate();

        return (
            <div
                onClick={() => {
                    navigate(to);
                    close();
                }}
                className="cursor-pointer"
            >
                {label}
            </div>
        );
    };




    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm"
                    : "bg-white "}
      `}>
                <div className="max-w-[1310px] mx-auto flex items-center  justify-between px-6 py-5">

                    {/* Navigation */}
                    <nav className=" flex items-center gap-18 font-medium ">
                        <NavLink to="/" ><div className="w-44 h-10 -mt-5 text-lg font-semibold tracking-tight text-[var(--palms-blue)]">
                            <img src={logo} className="object-cover" alt="" />
                        </div>
                        </NavLink>
                        <div className="hidden md:flex  items-center gap-8 text-md font-medium">

                            <NavLink to="/whoweare" className={linkClass}>
                                Who Are We
                            </NavLink>

                            <div
                                className="relative"
                                onMouseEnter={() => setShowMemberships(true)}
                                onMouseLeave={() => setShowMemberships(false)}
                            >
                                {/* NAV LINK */}
                                <span
                                    className={`nav-link cursor-pointer  ${showMemberships
                                        ? "text-[var(--palms-green)]"
                                        : "text-[var(--palms-grey)] hover:text-[var(--palms-green)]"
                                        }`}
                                >
                                    Memberships
                                </span>

                                {/* MEGA PANEL */}
                                <div
                                    className={`
      absolute left-1/2 -translate-x-1/2 top-full
      w-[600px]
      rounded-3xl
      bg-[var(--palms-blue)]
      text-white
      shadow-[0_40px_80px_rgba(0,0,0,0.25)]
      transition-all duration-400
      ${showMemberships
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 translate-y-4 pointer-events-none"
                                        }
    `}
                                >
                                    <div className="grid grid-cols-2 gap-12 p-10">

                                        {/* LEFT SIDE — HEADING BLOCK */}
                                        <div>
                                            <h3 className="text-2xl font-semibold leading-tight">
                                                Structured membership pathways
                                            </h3>

                                            <p className="mt-6 text-white/70 text-sm leading-relaxed">
                                                Long-term learning engagement models designed for individuals
                                                and organisations committed to sustained growth.
                                            </p>

                                            <div className="mt-10 h-[3px] w-14 bg-[var(--palms-green)] rounded-full" />
                                        </div>

                                        {/* RIGHT SIDE — ITEMS */}
                                        <div className="space-y-6">
                                            {membershipsNav.map((membership) => (
                                                <div
                                                    key={membership.id}
                                                    onClick={() => {
                                                        setShowMemberships(false);
                                                        navigate(`/memberships/${membership.slug}`);
                                                    }}
                                                    className="
              group cursor-pointer
              flex items-center justify-between
              border-b border-white/10
              pb-4
              transition-all duration-300
              hover:border-[var(--palms-green)]
            "
                                                >
                                                    <div>
                                                        <p className="text-lg font-medium group-hover:text-[var(--palms-green)] transition">
                                                            {membership.title}
                                                        </p>
                                                        <span className="text-xs text-white/50">
                                                            Programme {membership.id}
                                                        </span>
                                                    </div>

                                                    <span className="opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                        →
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div
                                className="relative"
                                onMouseEnter={() => setShowServices(true)}
                                onMouseLeave={() => setShowServices(false)}
                            >
                                {/* SERVICES LINK */}
                                <span
                                    className={`nav-link cursor-pointer ${showServices
                                        ? "text-[var(--palms-green)]"
                                        : "text-[var(--palms-grey)] hover:text-[var(--palms-green)]"
                                        }`}
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded={showServices}
                                >
                                    Services
                                </span>

                                {/* 🔥 HOVER BRIDGE (INVISIBLE AREA) */}
                                <div className="absolute left-0 top-full h-4 w-full" />

                                {/* DROPDOWN */}
                                <div
                                    className={`
    absolute left-1/2 -translate-x-1/2 top-full
   
    w-[750px]
    rounded-3xl
    bg-[var(--palms-blue)]
    text-white
    shadow-[0_40px_80px_rgba(0,0,0,0.25)]
    transition-all duration-300
    ${showServices
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 translate-y-4 pointer-events-none"
                                        }
  `}
                                >
                                    <div className="grid grid-cols-[1.2fr_2fr] gap-5 p-10 ">

                                        {/* LEFT BLOCK */}
                                        <div>
                                            <h3 className="text-2xl font-semibold leading-tight">
                                                Behavioural & Leadership Programmes
                                            </h3>

                                            <p className="mt-6 text-white/70 text-sm leading-relaxed">
                                                Structured capability-building interventions designed to create
                                                measurable behavioural and organisational impact.
                                            </p>

                                            <div className="mt-10 h-[3px] w-14 bg-[var(--palms-green)] rounded-full" />
                                        </div>

                                        {/* RIGHT LIST — TWO COLUMN GRID */}
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">
                                            {servicesNav.map((service) => (
                                                <div
                                                    key={service.id}
                                                    onClick={() => {
                                                        setShowServices(false);
                                                        navigate(`/services/${service.slug}`);
                                                    }}
                                                    className="
            group cursor-pointer
            border-b border-white/10
            pb-3
            transition-all duration-300
            hover:border-[var(--palms-green)]
          "
                                                >
                                                    <p className="text-md font-medium group-hover:text-[var(--palms-green)] transition">
                                                        {service.title}
                                                    </p>


                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                </div>


                            </div>

                            <NavLink to="/events" className={linkClass}>
                                Events
                            </NavLink>


                            <NavLink to="/palmsplus" className={linkClass}>
                                Palms Plus
                            </NavLink>

                            <NavLink to="/gallery" className={linkClass}>
                                Gallery
                            </NavLink>

                            <NavLink to="/contact" className={linkClass}>
                                Contact
                            </NavLink>

                        </div>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4 ">

                        {/* 🔥 SOCIAL ICONS (DESKTOP ONLY) */}
                        <div className="hidden md:flex items-center gap-3 me-2">

                            <a
                                href="https://www.facebook.com/palmstraining/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full
                 border border-gray-200
                 text-[var(--palms-grey)]
                 hover:bg-[var(--palms-blue)]
                 hover:text-white
                 hover:scale-110
                 transition-all duration-300"
                            >
                                <FaFacebookF size={12} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/palmsindia/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full
                 border border-gray-200
                 text-[var(--palms-grey)]
                 hover:bg-[var(--palms-blue)]
                 hover:text-white
                 hover:scale-110
                 transition-all duration-300"
                            >
                                <FaLinkedinIn size={12} />
                            </a>

                            <a
                                href="https://www.instagram.com/palmsindia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full
                 border border-gray-200
                 text-[var(--palms-grey)]
                 hover:bg-[var(--palms-blue)]
                 hover:text-white
                 hover:scale-110
                 transition-all duration-300"
                            >
                                <FaInstagram size={12} />
                            </a>

                        </div>

                        {/* EXISTING BUTTON */}
                        <button
                            onClick={() => navigate("/memberships/individual")}
                            className="hidden md:block btn-primary"
                        >
                            Become a member
                        </button>

                        {/* MOBILE MENU */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="md:hidden text-3xl me-5 text-[var(--palms-blue)]"
                        >
                            ☰
                        </button>

                    </div>

                </div>
            </header >

            {/* MOBILE MENU */}
            <div
                className={`
    fixed inset-0 z-[9998]
    transition-all duration-300
    ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
            >

                {/* Overlay */}
                <div
                    onClick={() => setMobileOpen(false)}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />

                {/* Drawer */}
                <div
                    className={`
      absolute right-0 top-0 h-full w-[85%] max-w-[360px]
      bg-white shadow-2xl
      p-8
      transition-transform duration-300
      ${mobileOpen ? "translate-x-0" : "translate-x-full"}
    `}
                >

                    {/* Close */}
                    <div className="flex justify-between items-center mb-10">
                        <img src={logo} className="h-8" alt="" />
                        <button onClick={() => setMobileOpen(false)} className="text-xl">✕</button>
                    </div>

                    <div className="space-y-6 text-[var(--palms-blue)] font-medium">

                        <MobileLink to="/whoweare" label="Who Are We" close={() => setMobileOpen(false)} />

                        {/* Memberships Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileMembershipsOpen(!mobileMembershipsOpen)}
                                className="w-full flex justify-between items-center"
                            >
                                Memberships
                                <span>{mobileMembershipsOpen ? "−" : "+"}</span>
                            </button>

                            {mobileMembershipsOpen && (
                                <div className="mt-3 ml-4 space-y-3 text-sm">
                                    {membershipsNav.map(m => (
                                        <div
                                            key={m.id}
                                            onClick={() => {
                                                navigate(`/memberships/${m.slug}`);
                                                setMobileOpen(false);
                                            }}
                                            className="cursor-pointer text-[var(--palms-grey)]"
                                        >
                                            {m.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Services Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="w-full flex justify-between items-center"
                            >
                                Services
                                <span>{mobileServicesOpen ? "−" : "+"}</span>
                            </button>

                            {mobileServicesOpen && (
                                <div className="mt-3 ml-4 space-y-3 text-sm">
                                    {servicesNav.map(s => (
                                        <div
                                            key={s.id}
                                            onClick={() => {
                                                navigate(`/services/${s.slug}`);
                                                setMobileOpen(false);
                                            }}
                                            className="cursor-pointer text-[var(--palms-grey)]"
                                        >
                                            {s.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <MobileLink to="/events" label="Events" close={() => setMobileOpen(false)} />
                        <MobileLink to="/palmsplus" label="Palms Plus" close={() => setMobileOpen(false)} />
                        <MobileLink to="/gallery" label="Gallery" close={() => setMobileOpen(false)} />
                        <MobileLink to="/contact" label="Contact" close={() => setMobileOpen(false)} />

                        <button
                            onClick={() => {
                                navigate("/memberships/individual");
                                setMobileOpen(false);
                            }}
                            className="mt-6 w-full btn-primary"
                        >
                            Become a member
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
