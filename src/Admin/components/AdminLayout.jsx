import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-[var(--palms-blue)] text-white p-6 flex flex-col justify-between">

        <div>
          <h2 className="text-2xl font-semibold mb-10">PALMS Admin</h2>

          <nav className="space-y-4">
            <Link to="/admin/dashboard" className="block hover:text-[var(--palms-green)]">
              Dashboard
            </Link>
            <Link to="/admin/gallery" className="block hover:text-[var(--palms-green)]">
              Gallery
            </Link>

            <Link to="/admin/journals" className="block hover:text-[var(--palms-green)]">NewsLetter </Link>
        
              <Link to="/admin/subscribers" className="block hover:text-[var(--palms-green)]">Subscribers</Link>
          
          <Link to="/admin/events" className="block hover:text-[var(--palms-green)]">Events</Link>
          </nav>
        </div>

        <button
          onClick={logout}
          className="bg-[var(--palms-green)] py-2 rounded-lg hover:scale-105 transition"
        >
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        {children}
      </div>

    </div>
  );
};

export default AdminLayout;