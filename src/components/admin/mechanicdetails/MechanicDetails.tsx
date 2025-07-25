import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import baseURL from "../../../BaseUrl";
import Navbar from "../sidebar/Navbar";
import { useParams, useNavigate } from "react-router-dom";

interface MechanicFormData {
  name: string;
  mail: string;
  phone: string;
  designation: string;
  workexperience: string;
  description: string;
  profilepic: File | null;
}

const MechanicDetails: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<MechanicFormData>({
    name: "",
    mail: "",
    phone: "",
    designation: "",
    workexperience: "",
    description: "",
    profilepic: null,
  });

  useEffect(() => {
    if (id) {
      fetch(`${baseURL}/mechanics/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            name: data.name || "",
            mail: data.mail || "",
            phone: data.phone || "",
            designation: data.designation || "",
            workexperience: data.workexperience || "",
            description: data.description || "",
            profilepic: null,
          });
          if (data.profilepic) {
            setPreviewImage(`${baseURL.replace("/api", "")}/uploads/${data.profilepic}`);
          }
        })
        .catch(() => setError("Failed to fetch mechanic details"));
    }
  }, [id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setError("Profile picture must be less than 2MB");
      e.target.value = "";
    } else {
      setError("");
      setFormData({ ...formData, profilepic: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("mail", formData.mail);
    payload.append("phone", formData.phone);
    payload.append("designation", formData.designation);
    payload.append("workexperience", formData.workexperience);
    payload.append("description", formData.description);
    if (formData.profilepic) payload.append("profilepic", formData.profilepic);

    try {
      const response = await fetch(`${baseURL}/mechanics${id ? `/${id}` : ""}`, {
        method: id ? "PUT" : "POST",
        body: payload,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Operation failed");

      setSuccess(id ? "Mechanic updated successfully!" : "Mechanic added successfully!");
      setTimeout(() => navigate("/mechanic-details-table"), 1500);
    } catch (err: any) {
      setError(err.message);
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
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              🧰 {id ? "Edit Mechanic" : "Add Mechanic"}
            </h1>
            <p className="text-lg text-gray-600">
              Fill the form to {id ? "update" : "register"} mechanic details
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  👤 Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  📧 Email
                </label>
                <input
                  id="mail"
                  type="email"
                  value={formData.mail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  📱 Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  🧑‍🔧 Designation
                </label>
                <input
                  id="designation"
                  type="text"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Work Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  🏆 Work Experience
                </label>
                <textarea
                  id="workexperience"
                  
                  value={formData.workexperience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Profile Pic */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  🖼️ Profile Picture
                </label>
                <input
                  id="profilepic"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-24 h-24 mt-3 rounded-full object-cover border"
                  />
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                📝 Description
              </label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md"
              >
                {id ? "✏️ Update Mechanic" : "➕ Add Mechanic"}
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

export default MechanicDetails;
