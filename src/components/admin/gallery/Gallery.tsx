import React, { useState, ChangeEvent, FormEvent } from "react";
import baseURL from "../../../BaseUrl";
import Navbar from "../sidebar/Navbar";

interface FormDataState {
  name: string;
  description: string;
  file: File | null;
}

const Gallery: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [uploadType, setUploadType] = useState<"image" | "video">("image");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    description: "",
    file: null,
  });

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
      setError(`❌ File must be less than ${typeText}`);
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

    if (!formData.file || !formData.name) {
      setError("Name and File are required.");
      return;
    }

    const payload = new FormData();
    payload.append("type", uploadType);
    payload.append("name", formData.name);
    payload.append("description", formData.description);
    payload.append("file", formData.file);

    try {
      const response = await fetch(`${baseURL}/gallery`, {
        method: "POST",
        body: payload,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Upload failed");

      setSuccess(`${uploadType === "image" ? "Image" : "Video"} uploaded successfully!`);
      setFormData({ name: "", description: "", file: null });
    } catch (err: any) {
      setError(`❌ ${err.message}`);
    }
  };

  return (
    <div className="pt-16">
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className={`transition-all duration-300 px-4 md:px-10 ${sidebarCollapsed ? "ml-24" : "ml-56"}`}>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            🎨 Gallery Upload
          </h2>

          {error && <div className="bg-red-100 text-red-700 p-3 mb-4 rounded text-center">{error}</div>}
          {success && <div className="bg-green-100 text-green-700 p-3 mb-4 rounded text-center">{success}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-semibold block mb-2">
                📁 Select Upload Type
              </label>
              <div className="flex gap-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    value="image"
                    checked={uploadType === "image"}
                    onChange={() => setUploadType("image")}
                  />
                  <span className="ml-2">Image</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    value="video"
                    checked={uploadType === "video"}
                    onChange={() => setUploadType("video")}
                  />
                  <span className="ml-2">Video</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-1">
                  🖼️ {uploadType === "image" ? "Image Name" : "Video Name"}
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={`Enter ${uploadType} name`}
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  📄 Upload {uploadType === "image" ? "Image" : "Video"}
                </label>
                <input
                  id="file"
                  type="file"
                  accept={uploadType === "image" ? "image/*" : "video/*"}
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-blue-50 file:text-blue-700
                             hover:file:bg-blue-100"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">
                📝 Description
              </label>
              <textarea
                id="description"
                rows={3}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write a description..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
              >
                🚀 Upload {uploadType === "image" ? "Image" : "Video"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Gallery;