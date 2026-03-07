import Navbar from './Components/Navbar';
import './index.css'
import React, { lazy } from 'react';
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
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const FolderView = lazy(() => import("./pages/Gallery/FolderView"));
const PalmsPlus = lazy(() => import("./pages/PalmsPlus"));
const Events = lazy(() => import("./pages/Events"));
const EventDetails = lazy(() => import("./pages/events/EventDetails"));

import ProtectedRoute from './Admin/components/ProtectedRoute';

import JoinFranchise from './pages/contact/JoinFranchise';
import JoinTrainer from './pages/contact/JoinTrainer';
import JoinAssociate from './pages/contact/JoinAssociate';
const AdminLogin = lazy(() => import("./Admin/Login"));
const Dashboard = lazy(() => import("./Admin/Dashboard"));
const GalleryManager = lazy(() => import("./Admin/GalleryManager"));
const JournalManager = lazy(() => import("./Admin/JournalManager"));
const AdminSubscribers = lazy(() => import("./Admin/AdminSubscribers"));
const AdminEventsManager = lazy(() => import("./Admin/AdminEventsManager"));

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
              <Route path='/palmsplus' element={<PalmsPlus />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:slug" element={<FolderView />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join/franchise" element={<JoinFranchise />} />
              <Route path="/join/trainer" element={<JoinTrainer />} />
              <Route path="/join/associate" element={<JoinAssociate />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:slug" element={<EventDetails />} />
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

            <Route
              path="/admin/journals"
              element={
                <ProtectedRoute>
                  <JournalManager />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/subscribers"
              element={
                <ProtectedRoute>
                  <AdminSubscribers />
                </ProtectedRoute>
              }
            />

            <Route
              path='/admin/events'
              element={
                <ProtectedRoute>
                  <AdminEventsManager />
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