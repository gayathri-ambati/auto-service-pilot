import React, { useState } from "react";
import Navbar from "../sidebar/Navbar";

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  return (
    <div className="mt-[60px]">
      {/* Top Navbar */}
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "ml-[100px]" : "ml-[220px]"
        } px-4 py-6 max-w-screen-xl`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome, Admin!</h2>

        {/* Statistic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-green-600 text-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl font-bold mt-2">1,245</p>
          </div>

          <div className="bg-blue-500 text-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Gallery</h3>
            <p className="text-2xl font-bold mt-2">75</p>
          </div>

          <div className="bg-yellow-500 text-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-2xl font-bold mt-2">93</p>
          </div>

          <div className="bg-red-600 text-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Vehicle Details</h3>
            <p className="text-2xl font-bold mt-2">24</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-10">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
            <p className="text-gray-600">No recent activity. Stay tuned!</p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .dashboard-content {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
