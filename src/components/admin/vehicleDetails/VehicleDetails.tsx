import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import baseURL from "../../../BaseUrl";
import Navbar from "../sidebar/Navbar";


const VehicleDetails: React.FC = () => {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.vehicle) {
      setIsEditMode(true);
      // Initialize all form fields with the vehicle data
      const vehicleData = location.state.vehicle;
      setFormData({
        make_brand: vehicleData.make_brand || "",
        model: vehicleData.model || "",
        variant: vehicleData.variant || "",
        year_of_manufacture: vehicleData.year_of_manufacture || "",
        registration_number: vehicleData.registration_number || "",
        fuel_type: vehicleData.fuel_type || "",
        transmission_type: vehicleData.transmission_type || "",
        mileage: vehicleData.mileage || "",
        color: vehicleData.color || "",
        engine_capacity: vehicleData.engine_capacity || "",
        previous_owners: vehicleData.previous_owners || "",
        rc_available: vehicleData.rc_available || "",
        insurance_type: vehicleData.insurance_type || "",
        insurance_validity: vehicleData.insurance_validity ? vehicleData.insurance_validity.split('T')[0] : "",
        pollution_validity: vehicleData.pollution_validity ? vehicleData.pollution_validity.split('T')[0] : "",
        loan_clearance_cert: vehicleData.loan_clearance_cert || "",
        vin: vehicleData.vin || "",
        service_history: vehicleData.service_history || "",
        road_tax_paid: vehicleData.road_tax_paid || "",
          image1: vehicleData.image1 || "",  // Store existing image1 filename
      image2: vehicleData.image2 || "",  // Store existing image2 filename
        id: vehicleData.id || "",
      });
    }
  }, [location.state]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const data = new FormData();

    for (let key in formData) {
      if (key !== 'image1' && key !== 'image2' && key !== 'id') {
        data.append(key, formData[key]);
      }
    }

    // Append images - use existing filenames if no new images are selected
  if (image1) {
    data.append("image1", image1);
  } else if (isEditMode && formData.image1) {
    data.append("image1", formData.image1);
  }

  if (image2) {
    data.append("image2", image2);
  } else if (isEditMode && formData.image2) {
    data.append("image2", formData.image2);
  }

    try {
      const url = isEditMode 
        ? `${baseURL}/vehicles/${formData.id}`
        : `${baseURL}/vehicles`;
      
      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: data,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong");

      setSuccess(isEditMode ? "✅ Vehicle updated successfully!" : "✅ Vehicle added successfully!");
      // ✅ Navigate to table page
    navigate("/admin-details-table");
      if (!isEditMode) {
        setFormData({});
        setImage1(null);
        setImage2(null);
      }
    } catch (err: any) {
      setError(`❌ ${err.message}`);
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {isEditMode ? "✏️ Edit Vehicle" : "🚗 Add New Vehicle"}
            </h1>
            <p className="text-lg text-gray-600">
              {isEditMode ? "Update vehicle details" : "Add new vehicle to your inventory"}
            </p>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded-md mb-6 text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                🔧 Car Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InputField 
                  id="make_brand" 
                  label="Make/Brand" 
                  value={formData.make_brand || ""}
                  onChange={handleChange} 
                  required 
                />
                <InputField 
                  id="model" 
                  label="Model" 
                  value={formData.model || ""}
                  onChange={handleChange} 
                  required 
                />
                <InputField 
                  id="variant" 
                  label="Variant" 
                  value={formData.variant || ""}
                  onChange={handleChange} 
                />
                <InputField 
                  id="year_of_manufacture" 
                  label="Year of Manufacture" 
                  type="number" 
                  value={formData.year_of_manufacture || ""}
                  onChange={handleChange} 
                  required 
                />
                <InputField 
                  id="registration_number" 
                  label="Registration Number" 
                  value={formData.registration_number || ""}
                  onChange={handleChange} 
                  required 
                />
                <SelectField 
                  id="fuel_type" 
                  label="Fuel Type" 
                  value={formData.fuel_type || ""}
                  onChange={handleChange} 
                  options={["Petrol", "Diesel", "CNG", "Electric", "Hybrid"]} 
                  required 
                />
                <SelectField 
                  id="transmission_type" 
                  label="Transmission Type" 
                  value={formData.transmission_type || ""}
                  onChange={handleChange} 
                  options={["Manual", "Automatic", "CVT", "AMT"]} 
                  required 
                />
                <InputField 
                  id="mileage" 
                  label="Mileage (km)" 
                  type="number" 
                  value={formData.mileage || ""}
                  onChange={handleChange} 
                  required 
                />
                <InputField 
                  id="color" 
                  label="Color" 
                  value={formData.color || ""}
                  onChange={handleChange} 
                  required 
                />
                <InputField 
                  id="engine_capacity" 
                  label="Engine Capacity (cc)" 
                  type="number" 
                  value={formData.engine_capacity || ""}
                  onChange={handleChange} 
                  required 
                />
               <FileField 
  label="Image 1" 
  setFile={setImage1} 
  required={!isEditMode}
  existingImage={isEditMode ? formData.image1 : null}
/>

<FileField 
  label="Image 2" 
  setFile={setImage2}
  existingImage={isEditMode ? formData.image2 : null}
/>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                📝 Ownership & Legal Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InputField 
                  id="previous_owners" 
                  label="Previous Owners" 
                  type="number" 
                  value={formData.previous_owners || ""}
                  onChange={handleChange} 
                />
                <SelectField 
                  id="rc_available" 
                  label="RC Available" 
                  value={formData.rc_available || ""}
                  onChange={handleChange} 
                  options={["Yes", "No"]} 
                  required 
                />
                <InputField 
                  id="insurance_type" 
                  label="Insurance Type" 
                  value={formData.insurance_type || ""}
                  onChange={handleChange} 
                />
                <InputField 
                  id="insurance_validity" 
                  label="Insurance Validity" 
                  type="date" 
                  value={formData.insurance_validity || ""}
                  onChange={handleChange} 
                />
                <InputField 
                  id="pollution_validity" 
                  label="Pollution Cert Validity" 
                  type="date" 
                  value={formData.pollution_validity || ""}
                  onChange={handleChange} 
                />
                <SelectField 
                  id="loan_clearance_cert" 
                  label="Loan Clearance Cert" 
                  value={formData.loan_clearance_cert || ""}
                  onChange={handleChange} 
                  options={["Yes", "No"]} 
                />
                <InputField 
                  id="vin" 
                  label="VIN / Chassis Number" 
                  value={formData.vin || ""}
                  onChange={handleChange} 
                />
                <TextAreaField 
                  id="service_history" 
                  label="Service History" 
                  value={formData.service_history || ""}
                  onChange={handleChange} 
                />
                <SelectField 
                  id="road_tax_paid" 
                  label="Road Tax Paid" 
                  value={formData.road_tax_paid || ""}
                  onChange={handleChange} 
                  options={["Yes", "No"]} 
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md"
              >
                {isEditMode ? "Update Vehicle Details" : "Submit Vehicle Details"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Updated InputField with value prop
const InputField = ({ id, label, type = "text", value, onChange, required = false }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
  </div>
);

// Updated SelectField with value prop
const SelectField = ({ id, label, value, options, onChange, required = false }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
    >
      <option value="">Select {label}</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

// Updated TextAreaField with value prop
const TextAreaField = ({ id, label, value, onChange, required = false }: any) => (
  <div className="md:col-span-2 lg:col-span-3">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      rows={3}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
  </div>
);

// FileField remains the same
const FileField = ({ 
  label, 
  setFile, 
  required = false,
  existingImage = null 
}: { 
  label: string; 
  setFile: (file: File) => void; 
  required?: boolean;
  existingImage?: string | null;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {existingImage && (
      <div className="mb-2">
        <span className="text-sm text-gray-500">Current: {existingImage}</span>
      </div>
    )}
    <input
      type="file"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) setFile(file);
      }}
      required={required && !existingImage}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    />
  </div>
);

export default VehicleDetails;