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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                📸 Gallery Items
              </h1>
              <p className="text-lg text-gray-600">
                View and manage your gallery content
              </p>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition-colors w-full md:w-auto"
              onClick={() => navigate("/admin-gallery-form")}
            >
              Add New Item
            </button>
          </div>

          {loading ? (
            <div className="text-center py-10">
              <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
              <p className="mt-3 text-gray-600">Loading gallery items...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-4 rounded-md text-center mb-6">
              {error}
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No gallery items found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                  <tr>
                    <th className="px-4 py-3 text-left">S.No</th>
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Description</th>
                    <th className="px-4 py-3 text-left">Preview</th>
                    <th className="px-4 py-3 text-left">Uploaded On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {galleryItems.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 capitalize">
                        {item.type}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 max-w-xs break-words">
                        {item.description || "N/A"}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {item.file ? (
                          item.type === "image" ? (
                            <img
                              src={`${baseURL.replace("/api", "")}/uploads/${item.file}`}
                              alt={item.name}
                              className="w-20 h-auto rounded-md mx-auto"
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
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .transition-all {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
          table th, table td {
            padding: 8px !important;
            font-size: 0.85rem;
          }
          .text-3xl {
            font-size: 1.5rem !important;
          }
          .text-lg {
            font-size: 1rem !important;
          }
          video {
            width: 100px !important;
            height: 60px !important;
          }
          img {
            width: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryTable;