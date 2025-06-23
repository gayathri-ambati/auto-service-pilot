import React, { useEffect, useState } from 'react';
import { Table, Card, Spinner, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import baseURL from '../../../BaseUrl';
import ViewModal from './ViewModal';
import Navbar from '../sidebar/Navbar';
import { Eye } from 'react-bootstrap-icons'; // Correct import for Eye icon

interface Vehicle {
  id: number;
  make_brand: string;
  model: string;
  registration_number: string;
  fuel_type: string;
  transmission_type: string;
  color: string;
  year_of_manufacture: number;
  variant: string; // Ensure this property is included
  mileage: number; // Ensure this property is included
  engine_capacity: number; // Ensure this property is included
  previous_owners: number; // Ensure this property is included
  rc_available: string; // Ensure this property is included
  insurance_type: string; // Ensure this property is included
  insurance_validity: string; // Ensure this property is included
  pollution_validity: string; // Ensure this property is included
  loan_clearance_cert: string; // Ensure this property is included
  vin: string; // Ensure this property is included
  service_history: string; // Ensure this property is included
  road_tax_paid: string; // Ensure this property is included
  image1?: string; // Optional property
  image2?: string; // Optional property
}

const VehicleTable: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(`${baseURL}/vehicles`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to fetch vehicles');
        setVehicles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div style={{ marginTop: '60px' }}>
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div
        className="vehicle-table-content"
        style={{
          marginLeft: sidebarCollapsed ? '100px' : '220px',
          padding: '2rem',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Card className="shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">🚗 Vehicle Records</h2>
              <Button variant="primary" onClick={() => navigate('/admin-details-form')}>
                Add Vehicle
              </Button>
            </div>

            {loading && <div className="text-center"><Spinner animation="border" /></div>}
            {error && <Alert variant="danger" className="text-center">{error}</Alert>}

            {!loading && !error && (
              <Table bordered responsive hover>
                <thead className="table-dark text-center">
                  <tr>
                    <th>S.No</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Reg No</th>
                    <th>Fuel</th>
                    <th>Transmission</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {vehicles.map((v, index) => (
                    <tr key={v.id}>
                      <td>{index + 1}</td>
                      <td>{v.make_brand}</td>
                      <td>{v.model}</td>
                      <td>{v.registration_number}</td>
                      <td>{v.fuel_type}</td>
                      <td>{v.transmission_type}</td>
                      <td>{v.color}</td>
                      <td>{v.year_of_manufacture}</td>
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => {
                            setSelectedVehicle(v);
                            setShowModal(true);
                          }}
                        >
                          <Eye />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>
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
