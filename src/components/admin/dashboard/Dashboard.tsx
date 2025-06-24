import React, { useState, useEffect } from "react";
import Navbar from "../sidebar/Navbar";
import axios from "axios";
import baseURL from "../../../BaseUrl";

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  const [galleryCount, setGalleryCount] = useState<number>(0);
  const [contactCount, setContactCount] = useState<number>(0);
  const [vehicleCount, setVehicleCount] = useState<number>(0);

  useEffect(() => {
    // Fetch gallery count
    axios.get(`${baseURL}/gallery`).then((res) => {
      setGalleryCount(res.data.length);
    });

    // Fetch contact count
    axios.get(`${baseURL}/contacts`).then((res) => {
      setContactCount(res.data.length);
    });

    // Fetch vehicle count
    axios.get(`${baseURL}/vehicles`).then((res) => {
      setVehicleCount(res.data.length);
    });
  }, []);

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
  <div className="bg-blue-600 text-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold">Gallery</h3>
    <p className="text-2xl font-bold mt-2">{galleryCount}</p>
  </div>

  <div className="bg-teal-500 text-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold">Contact</h3>
    <p className="text-2xl font-bold mt-2">{contactCount}</p>
  </div>

  <div className="bg-orange-500 text-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold">Vehicle Details</h3>
    <p className="text-2xl font-bold mt-2">{vehicleCount}</p>
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
