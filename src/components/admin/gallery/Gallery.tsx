import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import baseURL from "../../../BaseUrl";
import Navbar from "../sidebar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

interface FormDataState {
  id?: number;
  name: string;
  description: string;
  file: File | null;
  existingFile?: string;
}

const GalleryForm: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [uploadType, setUploadType] = useState<"image" | "video">("image");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    description: "",
    file: null,
  });

  useEffect(() => {
    if (location.state?.item) {
      const item = location.state.item;
      setIsEditMode(true);
      setUploadType(item.type);
      setFormData({
        id: item.id,
        name: item.name,
        description: item.description,
        file: null,
        existingFile: item.file,
      });
    }
  }, [location.state]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = uploadType === "image" ? 2 * 1024 * 1024 : 10 * 1024 * 1024;
    if (file.size > maxSize) {
      const typeText = uploadType === "image" ? "2MB" : "10MB";
      setError(`File must be less than ${typeText}`);
      e.target.value = "";
    } else {
      setError("");
      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name) {
      setError("Name is required.");
      return;
    }

    if (!isEditMode && !formData.file) {
      setError("File is required.");
      return;
    }

    try {
      let response;
      const payload = new FormData();
      payload.append("type", uploadType);
      payload.append("name", formData.name);
      payload.append("description", formData.description);
      
      if (formData.file) {
        payload.append("file", formData.file);
      } else if (isEditMode) {
        payload.append("file", formData.existingFile || "");
      }

      if (isEditMode && formData.id) {
        response = await fetch(`${baseURL}/gallery/${formData.id}`, {
          method: "PUT",
          body: payload,
        });
      } else {
        response = await fetch(`${baseURL}/gallery`, {
          method: "POST",
          body: payload,
        });
      }

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Operation failed");

      const successMessage = isEditMode 
        ? "Gallery item updated successfully!" 
        : `${uploadType === "image" ? "Image" : "Video"} uploaded successfully!`;
      
      alert(successMessage);
      navigate("/admin-gallery-table");
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
              {isEditMode ? "✏️ Edit Gallery Item" : "🎨 Gallery Upload"}
            </h1>
            <p className="text-lg text-gray-600">
              {isEditMode ? "Update this gallery item" : "Upload new content to your gallery"}
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
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                📁 Upload Type
              </h2>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-blue-600"
                    value="image"
                    checked={uploadType === "image"}
                    onChange={() => setUploadType("image")}
                    disabled={isEditMode}
                  />
                  <span className="ml-2">Image</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-blue-600"
                    value="video"
                    checked={uploadType === "video"}
                    onChange={() => setUploadType("video")}
                    disabled={isEditMode}
                  />
                  <span className="ml-2">Video</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  🖼️ {uploadType === "image" ? "Image Name" : "Video Name"}
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  📄 {isEditMode ? "Replace File" : "Upload"} {uploadType === "image" ? "Image" : "Video"}
                  {isEditMode && formData.existingFile && (
                    <span className="text-xs text-gray-500 block mt-1">
                      Current file: {formData.existingFile}
                    </span>
                  )}
                </label>
                <input
                  id="file"
                  type="file"
                  accept={uploadType === "image" ? "image/*" : "video/*"}
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  required={!isEditMode}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                📝 Description
              </label>
              <textarea
                id="description"
                rows={3}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {isEditMode && formData.existingFile && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  🔍 Current Preview
                </label>
                {uploadType === "image" ? (
                  <img
                    src={`${baseURL.replace("/api", "")}/uploads/${formData.existingFile}`}
                    alt={formData.name}
                    className="w-40 h-auto rounded-md"
                  />
                ) : (
                  <video controls className="w-64 h-auto rounded-md">
                    <source
                      src={`${baseURL.replace("/api", "")}/uploads/${formData.existingFile}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}

            <div className="flex justify-center pt-4 space-x-4">
              <button
                type="button"
                onClick={() => navigate("/admin-gallery")}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-md"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-md"
              >
                {isEditMode ? "💾 Save Changes" : "🚀 Upload"}
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

export default GalleryForm;