import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg"
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const linkClass = ({ isActive }) =>
        `nav-link transition-colors ${isActive
            ? "text-[var(--palms-blue)] "
            : "text-[var(--palms-grey)] hover:text-[var(--palms-blue)]"
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
                    <NavLink to="/" ><div className="w-36 h-8 mt-1 text-lg font-semibold tracking-tight text-[var(--palms-blue)]">
                        <img src={logo} className="object-cover" alt="" />
                    </div>
                    </NavLink>
                    <div className="hidden md:flex mt-1 items-center gap-8 text-md font-medium">

                        <NavLink to="/whoweare" className={linkClass}>
                            Who Are We
                        </NavLink>

                        <NavLink to="/blogs" className={linkClass}>
                            Blogs
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
                <div className="flex items-center gap-3">
                    {/* <button className="btn-secondary">
                        Close
                    </button> */}
                    <button className="btn-primary">
                        Become a member
                    </button>
                </div>

            </div>
        </header >
    );
};

export default Navbar;
