import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../BaseUrl";
import Navbar from "../sidebar/Navbar";
import { FaTrash, FaEdit } from "react-icons/fa";

interface Mechanic {
  id: number;
  name: string;
  mail: string;
  phone: string;
  designation: string;
  workexperience: string;
  profilepic: string | null;
}

const MechanicDetailsTable: React.FC = () => {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const fetchMechanics = async () => {
    try {
      const response = await fetch(`${baseURL}/mechanics`);
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to fetch mechanics");
      setMechanics(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMechanics();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this mechanic?")) return;
    try {
      const response = await fetch(`${baseURL}/mechanics/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Delete failed");
      setMechanics((prev) => prev.filter((item) => item.id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

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
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                🧑‍🔧 Mechanic Details
              </h1>
              <p className="text-lg text-gray-600">View and manage your mechanic records</p>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition-colors w-full md:w-auto"
              onClick={() => navigate("/mechanic-details-form")}
            >
              Add New Mechanic
            </button>
          </div>

          {loading ? (
            <div className="text-center py-10">
              <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
              <p className="mt-3 text-gray-600">Loading mechanic details...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-4 rounded-md text-center mb-6">
              {error}
            </div>
          ) : mechanics.length === 0 ? (
            <div className="text-center py-10 text-gray-500">No mechanic data found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                  <tr>
                    <th className="px-4 py-3 text-left">S.No</th>
                    <th className="px-4 py-3 text-left">Profile</th>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Phone</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Designation</th>
                    <th className="px-4 py-3 text-left">Experience</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mechanics.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">{index + 1}</td>
                      <td className="px-4 py-3 text-sm">
                        {item.profilepic ? (
                         <img
  src={`${baseURL.replace("/api", "")}/uploads/${item.profilepic}`}
  alt={item.name}
  className="w-12 h-12 object-cover rounded-full"
/>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm">{item.name}</td>
                      <td className="px-4 py-3 text-sm">{item.phone}</td>
                      <td className="px-4 py-3 text-sm">{item.mail || "N/A"}</td>
                      <td className="px-4 py-3 text-sm">{item.designation || "N/A"}</td>
                      <td className="px-4 py-3 text-sm">{item.workexperience || "N/A"}</td>
                      <td className="px-4 py-3 text-sm text-center">
  <div className="flex justify-center items-center gap-3">
   <FaEdit
  onClick={() => navigate(`/mechanic-details-form/${item.id}`)}
  className="text-blue-500 cursor-pointer hover:text-blue-700"
/>

    <FaTrash
      onClick={() => handleDelete(item.id)}
      className="text-red-500 cursor-pointer hover:text-red-700"
    />
  </div>
</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .transition-all {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
          table th, table td {
            padding: 8px !important;
            font-size: 0.85rem;
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

export default MechanicDetailsTable;
