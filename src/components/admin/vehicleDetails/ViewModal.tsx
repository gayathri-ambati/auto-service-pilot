import React from 'react';
import baseURL from '../../../BaseUrl';

interface Vehicle {
  make_brand: string;
  model: string;
  variant: string;
  year_of_manufacture: number;
  registration_number: string;
  fuel_type: string;
  transmission_type: string;
  mileage: number;
  color: string;
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

interface ViewModalProps {
  show: boolean;
  onHide: () => void;
  vehicle: Vehicle | null;
}

const ViewModal: React.FC<ViewModalProps> = ({ show, onHide, vehicle }) => {
  if (!show || !vehicle) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4 mt-10">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Vehicle Details - {vehicle.make_brand} {vehicle.model}
          </h2>
          <button onClick={onHide} className="text-gray-500 text-2xl hover:text-red-500">&times;</button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 text-sm text-gray-700">
          {/* Car Details */}
          <div>
            <h3 className="text-blue-600 font-medium mb-2">🔧 Car Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p><strong>Make/Brand:</strong> {vehicle.make_brand}</p>
              <p><strong>Model:</strong> {vehicle.model}</p>
              <p><strong>Variant:</strong> {vehicle.variant}</p>
              <p><strong>Year:</strong> {vehicle.year_of_manufacture}</p>
              <p><strong>Registration No:</strong> {vehicle.registration_number}</p>
              <p><strong>Fuel Type:</strong> {vehicle.fuel_type}</p>
              <p><strong>Transmission:</strong> {vehicle.transmission_type}</p>
              <p><strong>Mileage:</strong> {vehicle.mileage} km</p>
              <p><strong>Color:</strong> {vehicle.color}</p>
              <p><strong>Engine Capacity:</strong> {vehicle.engine_capacity} cc</p>
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-blue-600 font-medium mb-2">📝 Ownership & Legal Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p><strong>Previous Owners:</strong> {vehicle.previous_owners}</p>
              <p><strong>RC Available:</strong> {vehicle.rc_available}</p>
              <p><strong>Insurance Type:</strong> {vehicle.insurance_type}</p>
              <p><strong>Insurance Validity:</strong> {vehicle.insurance_validity}</p>
              <p><strong>Pollution Validity:</strong> {vehicle.pollution_validity}</p>
              <p><strong>Loan Clearance Cert:</strong> {vehicle.loan_clearance_cert}</p>
              <p><strong>VIN:</strong> {vehicle.vin}</p>
              <p><strong>Service History:</strong> {vehicle.service_history}</p>
              <p><strong>Road Tax Paid:</strong> {vehicle.road_tax_paid}</p>
            </div>
          </div>

          {/* Images */}
          {(vehicle.image1 || vehicle.image2) && (
            <div>
              <h3 className="text-blue-600 font-medium mb-2">🖼 Vehicle Images</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicle.image1 && (
                  <div>
                    <p className="font-semibold mb-1">Image 1:</p>
                    <img
                      src={`${baseURL.replace('/api', '')}/uploads/${vehicle.image1}`}
                      alt="Vehicle 1"
                      className="rounded shadow border w-full object-contain max-h-60"
                    />
                  </div>
                )}
                {vehicle.image2 && (
                  <div>
                    <p className="font-semibold mb-1">Image 2:</p>
                    <img
                      src={`${baseURL.replace('/api', '')}/uploads/${vehicle.image2}`}
                      alt="Vehicle 2"
                      className="rounded shadow border w-full object-contain max-h-60"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end px-6 py-4 border-t">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            onClick={onHide}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
