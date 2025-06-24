import React, { useState, useEffect } from "react";
import Navbar from "../sidebar/Navbar";
import axios from "axios";
import baseURL from "../../../BaseUrl";

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [galleryCount, setGalleryCount] = useState<number>(0);
  const [contactCount, setContactCount] = useState<number>(0);
  const [vehicleCount, setVehicleCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [galleryRes, contactRes, vehicleRes] = await Promise.all([
          axios.get(`${baseURL}/gallery`),
          axios.get(`${baseURL}/contacts`),
          axios.get(`${baseURL}/vehicles`)
        ]);
        
        setGalleryCount(galleryRes.data.length);
        setContactCount(contactRes.data.length);
        setVehicleCount(vehicleRes.data.length);
      } catch (err) {
        setError("Failed to fetch dashboard data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div
        className="transition-all duration-300"
        style={{
          marginLeft: sidebarCollapsed ? "100px" : "220px",
          padding: "2rem",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome, Admin!
            </h1>
            <p className="text-lg text-gray-600">
              Overview of your application data
            </p>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6 text-center">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-10">
              <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
              <p className="mt-3 text-gray-600">Loading dashboard data...</p>
            </div>
          ) : (
            <>
              {/* Statistic Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard 
                  title="Gallery Items" 
                  value={galleryCount} 
                  icon="📸" 
                  color="bg-blue-600" 
                />
                <StatCard 
                  title="Contact Messages" 
                  value={contactCount} 
                  icon="✉️" 
                  color="bg-teal-500" 
                />
                <StatCard 
                  title="Vehicle Details" 
                  value={vehicleCount} 
                  icon="🚗" 
                  color="bg-orange-500" 
                />
              </div>

              {/* Recent Activity Section */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Recent Activity
                </h2>
                <div className="text-center py-6 text-gray-500">
                  <p>No recent activity. Stay tuned!</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .transition-all {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
          .text-3xl {
            font-size: 1.5rem !important;
          }
          .text-lg {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon, color }: { title: string; value: number; icon: string; color: string }) => (
  <div className={`${color} text-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow`}>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
  </div>
);

export default Dashboard;