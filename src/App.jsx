
import Navbar from './Components/Navbar';
import './index.css'
import React from 'react';  
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Contact from './pages/Contact';
import Footer from './Components/Footer';

import { useEffect } from "react";
import { initSmoothScroll } from "./utils/smoothScroll";
import WhoAreWe from './pages/WhoAreWe';
import ServiceDetail from './pages/ServiceDetail';
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MembershipDetail from './pages/MembershipDetail';




function App() {

    const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on route change
    ScrollTrigger.refresh(); // 🔥 force GSAP to recalc everything
  }, [location]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/whoweare' element={<WhoAreWe />} />
          <Route path="/memberships/:slug" element={<MembershipDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App


