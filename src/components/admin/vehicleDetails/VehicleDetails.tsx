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
    <div className="mt-[60px] min-h-screen bg-gray-100">
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "ml-[100px]" : "ml-[220px]"
        } px-4 py-6 max-w-[1200px]`}
      >
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            🚗 Vehicle Details Form
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4 text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Section 1 */}
            <h5 className="text-blue-600 font-semibold mb-4">🔧 Car Details</h5>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <InputField id="make_brand" label="Make/Brand" onChange={handleChange} />
              <InputField id="model" label="Model" onChange={handleChange} />
              <InputField id="variant" label="Variant" onChange={handleChange} />
              <InputField id="year_of_manufacture" label="Year of Manufacture" type="number" onChange={handleChange} />
              <InputField id="registration_number" label="Registration Number" onChange={handleChange} />
              <SelectField id="fuel_type" label="Fuel Type" onChange={handleChange} options={["Petrol", "Diesel", "CNG", "Electric", "Hybrid"]} />
              <SelectField id="transmission_type" label="Transmission Type" onChange={handleChange} options={["Manual", "Automatic", "CVT", "AMT"]} />
              <InputField id="mileage" label="Mileage (km)" type="number" onChange={handleChange} />
              <InputField id="color" label="Color" onChange={handleChange} />
              <InputField id="engine_capacity" label="Engine Capacity (cc)" type="number" onChange={handleChange} />
              <FileField label="Image 1" setFile={setImage1} />
              <FileField label="Image 2" setFile={setImage2} />
            </div>

            {/* Section 2 */}
            <h5 className="text-blue-600 font-semibold mt-6 mb-4">
              📝 Ownership & Legal Info
            </h5>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <InputField id="previous_owners" label="Previous Owners" type="number" onChange={handleChange} />
              <SelectField id="rc_available" label="RC Available" onChange={handleChange} options={["Yes", "No"]} />
              <InputField id="insurance_type" label="Insurance Type" onChange={handleChange} />
              <InputField id="insurance_validity" label="Insurance Validity" type="date" onChange={handleChange} />
              <InputField id="pollution_validity" label="Pollution Cert Validity" type="date" onChange={handleChange} />
              <SelectField id="loan_clearance_cert" label="Loan Clearance Cert" onChange={handleChange} options={["Yes", "No"]} />
              <InputField id="vin" label="VIN / Chassis Number" onChange={handleChange} />
              <TextAreaField id="service_history" label="Service History" onChange={handleChange} />
              <SelectField id="road_tax_paid" label="Road Tax Paid" onChange={handleChange} options={["Yes", "No"]} />
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable Input
const InputField = ({ id, label, type = "text", onChange }: any) => (
  <div>
    <label htmlFor={id} className="block font-medium text-sm mb-1">{label}</label>
    <input id={id} type={type} onChange={onChange} className="w-full border rounded-md px-3 py-2 text-sm shadow-sm" />
  </div>
);

// Reusable Select
const SelectField = ({ id, label, options, onChange }: any) => (
  <div>
    <label htmlFor={id} className="block font-medium text-sm mb-1">{label}</label>
    <select id={id} onChange={onChange} className="w-full border rounded-md px-3 py-2 text-sm shadow-sm">
      {options.map((opt: string) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

// Reusable File Upload
const FileField = ({ label, setFile }: { label: string; setFile: (file: File) => void }) => (
  <div>
    <label className="block font-medium text-sm mb-1">{label}</label>
    <input
      type="file"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) setFile(file);
      }}
      className="w-full border rounded-md px-3 py-2 text-sm shadow-sm"
    />
  </div>
);

// Reusable Textarea
const TextAreaField = ({ id, label, onChange }: any) => (
  <div>
    <label htmlFor={id} className="block font-medium text-sm mb-1">{label}</label>
    <textarea id={id} rows={2} onChange={onChange} className="w-full border rounded-md px-3 py-2 text-sm shadow-sm" />
  </div>
);

export default VehicleDetails;
