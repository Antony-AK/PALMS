import React, { useState, useEffect } from "react";
import logo from "../assets/logo1.png"
import { NavLink, useNavigate } from "react-router-dom";


// src/data/servicesNav.js
export const servicesNav = [
    { id: "01", title: "Personality Development", slug: "personality" },
    { id: "02", title: "Management Development", slug: "management" },
    { id: "03", title: "Leadership & Skill Workshops", slug: "leadership" },
    { id: "04", title: "Corporate Training Programmes", slug: "corporate" },
    { id: "05", title: "Outbound Training Programmes", slug: "outbound" },
];



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const navigate = useNavigate();


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
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}


                {/* Navigation */}
                <nav className=" flex items-center gap-18 font-medium">
                    <NavLink to="/" ><div className="w-44 h-10 -mt-5 text-lg font-semibold tracking-tight text-[var(--palms-blue)]">
                        <img src={logo} className="object-cover" alt="" />
                    </div>
                    </NavLink>
                    <div className="hidden md:flex mt-1 items-center gap-8 text-md font-medium">

                        <NavLink to="/whoweare" className={linkClass}>
                            Who Are We
                        </NavLink>

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
    w-[460px]
    rounded-3xl
    bg-white
    shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
    border border-black/5
    transition-all duration-300 ease-out
    ${showServices
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 translate-y-2 pointer-events-none"}
  `}
                            >
                                {/* ITEMS */}
                                <div className="px-6 py-6 ">
                                    {servicesNav.map((service) => (
                                        <div
                                            key={service.id}
                                            onClick={() => {
                                                setShowServices(false);
                                                navigate(`/services/${service.slug}`);
                                            }}
                                            className="
          group cursor-pointer
          rounded-2xl px-5 py-4
          transition-all duration-300
          hover:bg-[var(--palms-grey-light)]
        "
                                            role="menuitem"
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* INDEX PILL */}
                                                <div
                                                    className="
              mt-[2px]
              flex items-center justify-center
              w-8 h-8
              rounded-full
              bg-[var(--palms-green)]/10
              text-[var(--palms-green)]
              text-xs font-semibold
              transition-all
              group-hover:bg-[var(--palms-green)]
              group-hover:text-white
            "
                                                >
                                                    {service.id}
                                                </div>

                                                {/* TEXT */}
                                                <div className="flex-1">
                                                    <p
                                                        className="
                text-[15px] font-medium text-[var(--palms-blue)]
                transition-all
                group-hover:translate-x-1
              "
                                                    >
                                                        {service.title}
                                                    </p>

                                                    <p className="mt-1 text-xs text-[var(--palms-grey)]">
                                                        Structured learning programme
                                                    </p>
                                                </div>

                                                {/* ARROW */}
                                                <span
                                                    className="
              text-[var(--palms-grey)]
              opacity-0 translate-x-[-6px]
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-x-0
            "
                                                >
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>




                        <NavLink to="/ourteam" className={linkClass}>
                            Our Team
                        </NavLink>

                        <NavLink to="/gallery" className={linkClass}>
                            Gallery
                        </NavLink>

                        <NavLink to="/blogs" className={linkClass}>
                            Mindspace
                        </NavLink>

                        <NavLink to="/memberships" className={linkClass}>
                            Memberships
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
