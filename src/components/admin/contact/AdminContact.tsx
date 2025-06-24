import React, { useState, useEffect } from "react";
import Navbar from "../sidebar/Navbar";
import axios from "axios";
import baseURL from "../../../BaseUrl";

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

const ContactPage: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${baseURL}/contacts`);
        const data = Array.isArray(response.data) ? response.data : [];
        setContacts(data);
        setLoading(false);
      } catch (err) {
        setError("❌ Failed to fetch contact messages.");
        setLoading(false);
        console.error("Error fetching contacts:", err);
      }
    };

    fetchContacts();
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              📞 Contact Messages
            </h1>
            <p className="text-lg text-gray-600">
              View all customer inquiries and responses
            </p>
          </div>

          {loading ? (
            <div className="text-center py-6 text-gray-500">
              <p>Loading contact messages...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 font-medium">{error}</div>
          ) : contacts.length === 0 ? (
            <div className="text-center text-gray-500">
              No contact messages found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                  <tr>
                    <th className="px-4 py-3 text-left">SNO</th>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Phone</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Message</th>
                    <th className="px-4 py-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contacts.map((contact, index) => (
                    <tr key={contact.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {contact.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {contact.phone || "-"}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {contact.email}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 max-w-xs break-words">
                        {contact.message}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {new Date(contact.created_at).toLocaleDateString()}
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
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
