import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../BaseUrl";
import ViewModal from "./ViewModal";
import Navbar from "../sidebar/Navbar";
import { Eye } from "react-bootstrap-icons";

interface Vehicle {
  id: number;
  make_brand: string;
  model: string;
  registration_number: string;
  fuel_type: string;
  transmission_type: string;
  color: string;
  year_of_manufacture: number;
  variant: string;
  mileage: number;
  engine_capacity: number;
  previous_owners: number;
  rc_available: string;
  insurance_type: string;
  insurance_validity: string;
  pollution_validity: string;
  loan_clearance_cert: string;
  vin: string;
  service_history: string;
  road_tax_paid: string;
  image1?: string;
  image2?: string;
}

const VehicleTable: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(`${baseURL}/vehicles`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed to fetch vehicles");
        setVehicles(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
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
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                🚗 Vehicle Records
              </h1>
              <p className="text-lg text-gray-600">
                View all vehicle inventory and details
              </p>
            </div>
            <button
              onClick={() => navigate("/admin-details-form")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Add Vehicle
            </button>
          </div>

          {loading ? (
            <div className="text-center py-6 text-gray-500">
              <p>Loading vehicle records...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 font-medium">{error}</div>
          ) : vehicles.length === 0 ? (
            <div className="text-center text-gray-500">
              No vehicle records found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                  <tr>
                    <th className="px-4 py-3 text-left">S.No</th>
                    <th className="px-4 py-3 text-left">Brand</th>
                    <th className="px-4 py-3 text-left">Model</th>
                    <th className="px-4 py-3 text-left">Reg No</th>
                    <th className="px-4 py-3 text-left">Fuel</th>
                    <th className="px-4 py-3 text-left">Transmission</th>
                    <th className="px-4 py-3 text-left">Color</th>
                    <th className="px-4 py-3 text-left">Year</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {vehicles.map((vehicle, index) => (
                    <tr key={vehicle.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {vehicle.make_brand}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {vehicle.model}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {vehicle.registration_number}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {vehicle.fuel_type}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {vehicle.transmission_type}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {vehicle.color}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {vehicle.year_of_manufacture}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        <button
                          onClick={() => {
                            setSelectedVehicle(vehicle);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* View Modal */}
      {selectedVehicle && (
        <ViewModal
          show={showModal}
          onHide={() => setShowModal(false)}
          vehicle={selectedVehicle}
        />
      )}

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
          .text-4xl {
            font-size: 2rem !important;
          }
          .text-lg {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VehicleTable;