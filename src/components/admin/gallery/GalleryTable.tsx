import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../BaseUrl";
import Navbar from "../sidebar/Navbar";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  name: string;
  description: string;
  file: string;
  created_at: string;
}

const GalleryTable: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`${baseURL}/gallery`);
        const data = await response.json();

        if (!response.ok) throw new Error(data.error || "Failed to fetch gallery items");

        setGalleryItems(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="mt-[60px] min-h-screen bg-gray-100 text-gray-800">
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "ml-[100px]" : "ml-[220px]"
        } px-4 py-6`}
      >
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              📸 Gallery Items
            </h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
              onClick={() => navigate("/admin-gallery-form")}
            >
              Add New
            </button>
          </div>

          {loading && (
            <div className="text-center py-10">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
              <p className="mt-2 text-sm text-gray-500">Loading gallery items...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-600 text-center p-4 rounded-md mb-4">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm text-left">
                <thead>
                  <tr className="bg-gray-800 text-white text-center">
                    <th className="px-4 py-2 border">S.No</th>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Description</th>
                    <th className="px-4 py-2 border">Preview</th>
                    <th className="px-4 py-2 border">Uploaded On</th>
                  </tr>
                </thead>
                <tbody>
                  {galleryItems.map((item, index) => (
                    <tr
                      key={item.id}
                      className="bg-white hover:bg-gray-50 text-center transition"
                    >
                      <td className="px-4 py-3 border">{index + 1}</td>
                      <td className="px-4 py-3 border capitalize">{item.type}</td>
                      <td className="px-4 py-3 border">{item.name}</td>
                      <td className="px-4 py-3 border text-gray-600">
                        {item.description}
                      </td>
                      <td className="px-4 py-3 border">
                        {item.file ? (
                          item.type === "image" ? (
                            <img
                              src={`${baseURL.replace("/api", "")}/uploads/${item.file}`}
                              alt={item.name}
                              className="w-24 h-auto rounded-md mx-auto"
                            />
                          ) : (
                            <video
                              controls
                              className="w-32 h-20 mx-auto rounded-md"
                            >
                              <source
                                src={`${baseURL.replace("/api", "")}/uploads/${item.file}`}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          )
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </td>
                      <td className="px-4 py-3 border">
                        {new Date(item.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Margin Fix */}
      <style>{`
        @media (max-width: 768px) {
          .ml-[220px] {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryTable;
