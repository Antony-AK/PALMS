
import Navbar from './Components/Navbar';
import './index.css'
import React from 'react';  // ✅ add this line
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Contact from './pages/Contact';
import Footer from './Landing/Footer';

import { useEffect } from "react";
import { initSmoothScroll } from "./utils/smoothScroll";



function App() {





  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App


