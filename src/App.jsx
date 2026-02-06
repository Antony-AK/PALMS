
import Navbar from './Components/Navbar';
import './index.css'
import React from 'react';  // ✅ add this line
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Contact from './pages/Contact';
import Footer from './Landing/Footer';

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

         <Footer />


    </div>
  )
}

export default App


