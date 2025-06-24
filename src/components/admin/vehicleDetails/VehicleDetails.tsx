import React, { useState } from "react";
import baseURL from "../../../BaseUrl";
import Navbar from "../sidebar/Navbar";

const VehicleDetails: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
      data.append(key, formData[key]);
    }

    if (image1) data.append("image1", image1);
    if (image2) data.append("image2", image2);

    try {
      const response = await fetch(`${baseURL}/vehicles`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong");

      setSuccess("✅ Vehicle added successfully!");
      setFormData({});
      setImage1(null);
      setImage2(null);
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
              🚗 Vehicle Details
            </h1>
            <p className="text-lg text-gray-600">
              Add new vehicle to your inventory
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
                <InputField id="make_brand" label="Make/Brand" onChange={handleChange} required />
                <InputField id="model" label="Model" onChange={handleChange} required />
                <InputField id="variant" label="Variant" onChange={handleChange} />
                <InputField id="year_of_manufacture" label="Year of Manufacture" type="number" onChange={handleChange} required />
                <InputField id="registration_number" label="Registration Number" onChange={handleChange} required />
                <SelectField id="fuel_type" label="Fuel Type" onChange={handleChange} options={["Petrol", "Diesel", "CNG", "Electric", "Hybrid"]} required />
                <SelectField id="transmission_type" label="Transmission Type" onChange={handleChange} options={["Manual", "Automatic", "CVT", "AMT"]} required />
                <InputField id="mileage" label="Mileage (km)" type="number" onChange={handleChange} required />
                <InputField id="color" label="Color" onChange={handleChange} required />
                <InputField id="engine_capacity" label="Engine Capacity (cc)" type="number" onChange={handleChange} required />
                <FileField label="Image 1" setFile={setImage1} required />
                <FileField label="Image 2" setFile={setImage2} />
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                📝 Ownership & Legal Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InputField id="previous_owners" label="Previous Owners" type="number" onChange={handleChange} />
                <SelectField id="rc_available" label="RC Available" onChange={handleChange} options={["Yes", "No"]} required />
                <InputField id="insurance_type" label="Insurance Type" onChange={handleChange} />
                <InputField id="insurance_validity" label="Insurance Validity" type="date" onChange={handleChange} />
                <InputField id="pollution_validity" label="Pollution Cert Validity" type="date" onChange={handleChange} />
                <SelectField id="loan_clearance_cert" label="Loan Clearance Cert" onChange={handleChange} options={["Yes", "No"]} />
                <InputField id="vin" label="VIN / Chassis Number" onChange={handleChange} />
                <TextAreaField id="service_history" label="Service History" onChange={handleChange} />
                <SelectField id="road_tax_paid" label="Road Tax Paid" onChange={handleChange} options={["Yes", "No"]} />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md"
              >
                Submit Vehicle Details
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .transition-all {
            margin-left: 0 !important;
            padding: 1rem !important;
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

// Reusable Input
const InputField = ({ id, label, type = "text", onChange, required = false }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
      type={type}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
  </div>
);

// Reusable Select
const SelectField = ({ id, label, options, onChange, required = false }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
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

// Reusable File Upload
const FileField = ({ label, setFile, required = false }: { label: string; setFile: (file: File) => void; required?: boolean }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="file"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) setFile(file);
      }}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    />
  </div>
);

// Reusable Textarea
const TextAreaField = ({ id, label, onChange, required = false }: any) => (
  <div className="md:col-span-2 lg:col-span-3">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      rows={3}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
  </div>
);

export default VehicleDetails;