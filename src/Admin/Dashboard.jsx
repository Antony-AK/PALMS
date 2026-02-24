import React from "react";
import AdminLayout from "../Admin/components/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-semibold mb-6 text-[var(--palms-blue)]">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg">Total Folders</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg">Total Images</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg">Recent Activity</h3>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;