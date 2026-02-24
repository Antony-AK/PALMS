import Navbar from './Components/Navbar';
import './index.css'
import React from 'react';
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Contact from './pages/Contact';
import Footer from './Components/Footer';

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhoAreWe from './pages/WhoAreWe';
import ServiceDetail from './pages/ServiceDetail';
import MembershipDetail from './pages/MembershipDetail';
import Gallery from './pages/Gallery/Gallery';
import FolderView from './pages/Gallery/FolderView';

import AdminLogin from './Admin/Login';
import ProtectedRoute from './Admin/components/ProtectedRoute';
import Dashboard from './Admin/Dashboard';
import GalleryManager from './Admin/GalleryManager';

function App() {

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [location]);

  return (
    <>
      {/* 🔥 If NOT admin route → show normal layout */}
      {!isAdminRoute && (
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/whoweare' element={<WhoAreWe />} />
              <Route path="/memberships/:slug" element={<MembershipDetail />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:slug" element={<FolderView />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
          </div>
        </div>
      )}

      {/* 🔥 Admin Layout (No Navbar, No Footer) */}
      {isAdminRoute && (
        <div className='h-screen '>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/gallery"
            element={
              <ProtectedRoute>
                <GalleryManager />
              </ProtectedRoute>
            }
          />
        </Routes>
        </div>
      )}
    </>
  );
}

export default App;