import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaBriefcase, FaStar } from 'react-icons/fa';
import { GiMechanicGarage } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import baseURL from '@/BaseUrl';

interface Mechanic {
  id: number;
  name: string;
  mail: string;
  phone: string;
  designation: string;
  workexperience: string;
  profilepic: string | null;
  skills?: string[];
  rating?: number;
}

const MechanicsDashboard: React.FC = () => {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "senior" | "junior">("all");

  const fetchMechanics = async () => {
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(`${baseURL}/mechanics`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Add default values for missing fields
      const mechanicsWithDefaults = data.map((mechanic: Mechanic) => ({
        ...mechanic,
        rating: mechanic.rating || Math.floor(Math.random() * 3) + 3, // Default rating between 3-5
        skills: mechanic.skills || getDefaultSkills(mechanic.designation),
        workexperience: mechanic.workexperience || "0" // Ensure workexperience exists
      }));
      
      setMechanics(mechanicsWithDefaults);
    } catch (err: any) {
      setError(err.message || "Failed to fetch mechanics. Please try again later.");
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getDefaultSkills = (designation: string = ""): string[] => {
    const skillsMap: Record<string, string[]> = {
      "Engine Specialist": ["Engine Repair", "Diagnostics", "Rebuilding"],
      "Transmission Expert": ["Transmission Repair", "Clutch Systems"],
      "General Mechanic": ["Brakes", "Suspension", "Electrical Systems"],
      "Electrical Specialist": ["Wiring", "ECU Programming", "Diagnostics"]
    };

    return skillsMap[designation] || ["General Repairs", "Maintenance", "Diagnostics"];
  };

  useEffect(() => {
    fetchMechanics();
  }, []);

  const filteredMechanics = mechanics.filter((mechanic) => {
    const experience = parseInt(mechanic.workexperience) || 0;
    if (activeTab === "senior") return experience >= 5;
    if (activeTab === "junior") return experience < 5;
    return true;
  });

  const stats = {
    total: mechanics.length,
    senior: mechanics.filter(m => (parseInt(m.workexperience) || 0) >= 5).length,
    junior: mechanics.filter(m => (parseInt(m.workexperience) || 0) < 5).length,
    averageRating: (mechanics.reduce((acc, m) => acc + (m.rating || 0), 0) / (mechanics.length || 1)).toFixed(1)
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <GiMechanicGarage className="text-blue-600" />
              Mechanics Dashboard
            </h1>
            <p className="text-gray-600">View all mechanic profiles</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
          >
            <h3 className="text-gray-500 text-sm">Total Mechanics</h3>
            <p className="text-2xl font-bold">{stats.total}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500"
          >
            <h3 className="text-gray-500 text-sm">Senior Mechanics</h3>
            <p className="text-2xl font-bold">{stats.senior}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500"
          >
            <h3 className="text-gray-500 text-sm">Junior Mechanics</h3>
            <p className="text-2xl font-bold">{stats.junior}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500"
          >
            <h3 className="text-gray-500 text-sm">Avg. Rating</h3>
            <p className="text-2xl font-bold flex items-center gap-1">
              {stats.averageRating} <FaStar className="text-yellow-400" />
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === "all" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("all")}
        >
          All Mechanics
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "senior" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("senior")}
        >
          Senior (5+ yrs)
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "junior" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("junior")}
        >
          Junior (&lt;5 yrs)
        </button>
      </div>

      {/* Mechanics Cards */}
      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
          <p className="mt-3 text-gray-600">Loading mechanic details...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded-md text-center mb-6">
          {error}
        </div>
      ) : filteredMechanics.length === 0 ? (
        <div className="text-center py-10">
          <GiMechanicGarage className="mx-auto text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-500">No mechanics found</h3>
          <p className="text-gray-400">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMechanics.map((mechanic) => (
            <motion.div
              key={mechanic.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {mechanic.profilepic ? (
                        <img
                          src={`${baseURL.replace("/api", "")}/uploads/${mechanic.profilepic}`}
                          alt={mechanic.name}
                          className="w-16 h-16 object-cover rounded-full border-2 border-blue-100"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <GiMechanicGarage size={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{mechanic.name}</CardTitle>
                          <p className="text-sm text-blue-600 font-medium">{mechanic.designation || "Mechanic"}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400" />
                          <span className="font-medium">{mechanic.rating?.toFixed(1) || "0.0"}</span>
                        </div>
                      </div>
                      {mechanic.skills && mechanic.skills.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {mechanic.skills.slice(0, 3).map((skill, index) => (
                            <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                          {mechanic.skills.length > 3 && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              +{mechanic.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaBriefcase className="text-gray-400" />
                      <span>{mechanic.workexperience} yrs exp</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaPhone className="text-gray-400" />
                      <span>{mechanic.phone || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 col-span-2">
                      <FaEnvelope className="text-gray-400" />
                      <span className="truncate">{mechanic.mail || "N/A"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MechanicsDashboard;