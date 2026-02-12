import React, { useState, useEffect } from "react";
import logo from "../assets/Silverlogo.png"
import { NavLink, useNavigate } from "react-router-dom";


// src/data/servicesNav.js
export const servicesNav = [
    { id: "01", title: "Personality Development", slug: "personality" },
    { id: "02", title: "Management Development", slug: "management" },
    { id: "03", title: "Leadership & Skill Workshops", slug: "leadership" },
    { id: "04", title: "Corporate Training Programmes", slug: "corporate" },
    { id: "05", title: "Outbound Training Programmes", slug: "outbound" },
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




    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm"
                : "bg-white "}
      `}>
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-5">

                {/* Logo */}


                {/* Navigation */}
                <nav className=" flex items-center gap-18 font-medium">
                    <NavLink to="/" ><div className="w-18 h-10 -mt-7 text-lg font-semibold tracking-tight text-[var(--palms-blue)]">
                        <img src={logo} className="object-cover" alt="" />
                    </div>
                    </NavLink>
                    <div className="hidden md:flex mt-1 items-center gap-8 text-md font-medium">

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
                                    <div className="grid grid-cols-2 gap-x-14 gap-y-8">

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

                                                <span className="text-xs text-white/50">
                                                    Programme {service.id}
                                                </span>
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            </div>


                        </div>


                        <NavLink to="/blogs" className={linkClass}>
                            Mindspace
                        </NavLink>

                        <NavLink to="/gallery" className={linkClass}>
                            Gallery
                        </NavLink>

                        <NavLink to="/ourteam" className={linkClass}>
                            Our Team
                        </NavLink>

                        <NavLink to="/contact" className={linkClass}>
                            Contact
                        </NavLink>

                    </div>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="btn-primary">
                        Become a member
                    </button>
                </div>

            </div>
        </header >
    );
};

export default Navbar;
