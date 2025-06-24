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
    <div className="mt-[60px]">
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "ml-[100px]" : "ml-[220px]"
        } px-4 py-6`}
      >
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">🚗 Vehicle Records</h2>
            <button
              onClick={() => navigate("/admin-details-form")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add Vehicle
            </button>
          </div>

          {loading && (
            <div className="text-center py-4">
              <span className="text-blue-600">Loading...</span>
            </div>
          )}

          {error && (
            <div className="text-center text-red-600 bg-red-100 p-3 rounded-md mb-4">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="table-auto w-full border text-sm text-center">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-3 py-2 border">S.No</th>
                    <th className="px-3 py-2 border">Brand</th>
                    <th className="px-3 py-2 border">Model</th>
                    <th className="px-3 py-2 border">Reg No</th>
                    <th className="px-3 py-2 border">Fuel</th>
                    <th className="px-3 py-2 border">Transmission</th>
                    <th className="px-3 py-2 border">Color</th>
                    <th className="px-3 py-2 border">Year</th>
                    <th className="px-3 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((v, index) => (
                    <tr key={v.id} className="hover:bg-gray-100">
                      <td className="border px-3 py-2">{index + 1}</td>
                      <td className="border px-3 py-2">{v.make_brand}</td>
                      <td className="border px-3 py-2">{v.model}</td>
                      <td className="border px-3 py-2">{v.registration_number}</td>
                      <td className="border px-3 py-2">{v.fuel_type}</td>
                      <td className="border px-3 py-2">{v.transmission_type}</td>
                      <td className="border px-3 py-2">{v.color}</td>
                      <td className="border px-3 py-2">{v.year_of_manufacture}</td>
                      <td className="border px-3 py-2">
                        <button
                          onClick={() => {
                            setSelectedVehicle(v);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-800"
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

      {/* Responsive Fix */}
      <style>{`
        @media (max-width: 768px) {
          .vehicle-table-content {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VehicleTable;
