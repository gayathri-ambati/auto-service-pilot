import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import image from "../assets/vsms.jpg";
import { Bolt, Truck } from "lucide-react";
import { 
  Wrench, 
  Shield, 
  Hammer, 
  Calculator, 
  FileText, 
  Droplets, 
  Car, 
  Cog, 
  Battery,
  Disc,
  ArrowRight
} from "lucide-react";
import WhatApp from "@/components/WhatApp";
import MechanicDetailsDashboard from "@/components/MechanicDetailsDashboard";

const Services = () => {
  const mainServices = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: "Routine Maintenance Services",
      description: "Keep your vehicle running smoothly with regular maintenance",
      services: [
        "Oil Changes, Tire Rotations, and Brake Checks",
        "Air Filter Replacements, Fluid Checks, and Tire Balancing", 
        "Full Vehicle Inspections: Ensure your vehicle stays in top condition"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: "Insurance and Renewal Services",
      description: "Comprehensive Renewal solutions for all vehicle types",
      services: [
        "Collision and Accident-Towing facility: Fix any damage quickly and efficiently",
        "Parts Replacement: Get genuine spare parts for engine, brakes, suspension",
        "General Repairs: From electrical systems to engine issues"
      ]
    },
    {
      icon: <Hammer className="h-12 w-12 text-orange-500" />,
      title: "DIY Requests",
      description: "Support for customers who prefer to handle repairs themselves",
      services: [
        "Spare Parts Orders: Get the right spare parts for your vehicle",
        "Self-Service Options: DIY kits and detailed instructions",
        "Expert Guidance: Professional advice for your DIY projects"
      ]
    },
    {
      icon: <Calculator className="h-12 w-12 text-green-500" />,
      title: "Service Estimations",
      description: "Transparent pricing with detailed cost breakdowns",
      services: [
        "Request a Detailed Estimate: Labor and parts costs included",
        "GST & Taxes Breakdown: Transparent pricing structure",
        "Approve or Reject Estimates: Review before service begins"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-purple-500" />,
      title: "Billing and Invoices",
      description: "Professional invoicing and payment processing",
      services: [
        "Invoice Generation: Detailed invoices with all charges",
        "Downloadable PDFs: Access invoices anytime",
        "Payment Tracking: Monitor payment history easily"
      ]
    },
  {
  icon: <Truck className="h-12 w-12 text-indigo-600" />,
  title: "Fleet Management",
  description: "Manage multiple vehicles efficiently with smart tracking tools",
  services: [
    "Vehicle Tracking: Real-time GPS and diagnostics monitoring",
    "Maintenance Schedules: Auto-reminders for each vehicle",
    "Driver Logs & Reports: Monitor performance and fuel usage"
  ]
}


  ];

 const specialtyServices = [
    { icon: <Car className="h-8 w-8" />, name: "Sales", desc: "Selling the vehicles" },
    { icon: <Disc className="h-8 w-8" />, name: "Spares", desc: "Selling vehicles spare parts" },
    { icon: <Bolt className="h-8 w-8" />, name: "Service", desc: "Servicing the vehicles" },
    // { icon: <Cog className="h-8 w-8" />, name: "Transmission", desc: "Automatic and manual transmission service" },
  ];

  return (
    <div className="min-h-screen">
      <WhatApp />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Explore Our Range of <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            We offer a wide range of services to meet all your vehicle maintenance needs
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Whether you're looking for routine maintenance, spare parts, or DIY services, our platform has you covered
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MechanicDetailsDashboard />

      {/* Specialty Services */}
    {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialty Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions for specific vehicle components and systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover-scale text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full w-fit group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Service Process */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Service Process Works
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Simple, transparent, and efficient - from request to completion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Request Service", desc: "Submit your service request online" },
              { step: "2", title: "Get Estimate", desc: "Receive detailed cost breakdown" },
              { step: "3", title: "Approve & Schedule", desc: "Confirm service and book appointment" },
              { step: "4", title: "Complete & Pay", desc: "Service completion and payment" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get started with our professional vehicle service management platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#contact-form">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
              Request Service Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   FaTrash, 
//   FaEdit, 
//   FaEnvelope, 
//   FaPhone, 
//   FaBriefcase, 
//   FaStar 
// } from "react-icons/fa";
// import { 
//   Bolt, 
//   Truck, 
//   Wrench, 
//   Shield, 
//   Hammer, 
//   Calculator, 
//   FileText, 
//   Droplets, 
//   Car, 
//   Cog, 
//   Battery,
//   Disc,
//   ArrowRight
// } from "lucide-react";
// import { GiMechanicGarage } from "react-icons/gi";
// import { motion } from "framer-motion";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import WhatApp from "@/components/WhatApp";

// // Configuration - replace with your actual API base URL
// const baseURL = "http://localhost:3000/api";

// interface Mechanic {
//   id: number;
//   name: string;
//   mail: string;
//   phone: string;
//   designation: string;
//   workexperience: string;
//   profilepic: string | null;
//   skills?: string[];
//   rating?: number;
// }

// const ServicesAndMechanicsPage = () => {
//   // Services data
//   const mainServices = [
//     {
//       icon: <Droplets className="h-12 w-12 text-blue-600" />,
//       title: "Routine Maintenance Services",
//       description: "Keep your vehicle running smoothly with regular maintenance",
//       services: [
//         "Oil Changes, Tire Rotations, and Brake Checks",
//         "Air Filter Replacements, Fluid Checks, and Tire Balancing", 
//         "Full Vehicle Inspections: Ensure your vehicle stays in top condition"
//       ]
//     },
//     {
//       icon: <Shield className="h-12 w-12 text-red-500" />,
//       title: "Insurance and Renewal Services",
//       description: "Comprehensive Renewal solutions for all vehicle types",
//       services: [
//         "Collision and Accident-Towing facility: Fix any damage quickly and efficiently",
//         "Parts Replacement: Get genuine spare parts for engine, brakes, suspension",
//         "General Repairs: From electrical systems to engine issues"
//       ]
//     },
//     {
//       icon: <Hammer className="h-12 w-12 text-orange-500" />,
//       title: "DIY Requests",
//       description: "Support for customers who prefer to handle repairs themselves",
//       services: [
//         "Spare Parts Orders: Get the right spare parts for your vehicle",
//         "Self-Service Options: DIY kits and detailed instructions",
//         "Expert Guidance: Professional advice for your DIY projects"
//       ]
//     },
//     {
//       icon: <Calculator className="h-12 w-12 text-green-500" />,
//       title: "Service Estimations",
//       description: "Transparent pricing with detailed cost breakdowns",
//       services: [
//         "Request a Detailed Estimate: Labor and parts costs included",
//         "GST & Taxes Breakdown: Transparent pricing structure",
//         "Approve or Reject Estimates: Review before service begins"
//       ]
//     },
//     {
//       icon: <FileText className="h-12 w-12 text-purple-500" />,
//       title: "Billing and Invoices",
//       description: "Professional invoicing and payment processing",
//       services: [
//         "Invoice Generation: Detailed invoices with all charges",
//         "Downloadable PDFs: Access invoices anytime",
//         "Payment Tracking: Monitor payment history easily"
//       ]
//     },
//     {
//       icon: <Truck className="h-12 w-12 text-indigo-600" />,
//       title: "Fleet Management",
//       description: "Manage multiple vehicles efficiently with smart tracking tools",
//       services: [
//         "Vehicle Tracking: Real-time GPS and diagnostics monitoring",
//         "Maintenance Schedules: Auto-reminders for each vehicle",
//         "Driver Logs & Reports: Monitor performance and fuel usage"
//       ]
//     }
//   ];

//   const specialtyServices = [
//     { icon: <Car className="h-8 w-8" />, name: "Sales", desc: "Selling the vehicles" },
//     { icon: <Disc className="h-8 w-8" />, name: "Spares", desc: "Selling vehicles spare parts" },
//     { icon: <Bolt className="h-8 w-8" />, name: "Service", desc: "Servicing the vehicles" },
//   ];

//   // Mechanics data and state
//   const [mechanics, setMechanics] = useState<Mechanic[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [activeTab, setActiveTab] = useState<"all" | "senior" | "junior">("all");
//   const navigate = useNavigate();

//   const fetchMechanics = async () => {
//     try {
//       const response = await fetch(`${baseURL}/mechanics`);
//       if (!response.ok) throw new Error("Failed to fetch mechanics");
      
//       const data = await response.json();
//       const enhancedData = data.map((mechanic: Mechanic) => ({
//         ...mechanic,
//         skills: ["Engine Repair", "Brake Systems", "Electrical", "Diagnostics"].slice(
//           0,
//           Math.floor(Math.random() * 3) + 1
//         ),
//         rating: Math.floor(Math.random() * 3) + 3,
//       }));
      
//       setMechanics(enhancedData);
//     } catch (err: any) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMechanics();
//   }, []);

//   const handleDelete = async (id: number) => {
//     if (!window.confirm("Are you sure you want to delete this mechanic?")) return;
//     try {
//       const response = await fetch(`${baseURL}/mechanics/${id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error("Delete failed");
//       setMechanics((prev) => prev.filter((item) => item.id !== id));
//     } catch (err: any) {
//       alert(err.message);
//     }
//   };

//   const filteredMechanics = mechanics.filter((mechanic) => {
//     const experience = parseInt(mechanic.workexperience);
//     if (activeTab === "senior") return experience >= 5;
//     if (activeTab === "junior") return experience < 5;
//     return true;
//   });

//   const stats = {
//     total: mechanics.length,
//     senior: mechanics.filter(m => parseInt(m.workexperience) >= 5).length,
//     junior: mechanics.filter(m => parseInt(m.workexperience) < 5).length,
//     averageRating: (mechanics.reduce((acc, m) => acc + (m.rating || 0), 0) / mechanics.length) || 0
//   };

//   return (
//     <div className="min-h-screen">
//       <WhatApp />
      
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
//             Complete Vehicle <span className="text-orange-400">Services</span> & Expert <span className="text-orange-400">Mechanics</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
//             Comprehensive solutions for all your vehicle maintenance needs with our certified professionals
//           </p>
//         </div>
//       </section>

//       {/* Main Services Grid */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {mainServices.map((service, index) => (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
//                 <CardHeader className="pb-4">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
//                       {service.icon}
//                     </div>
//                     <div>
//                       <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
//                       <CardDescription className="text-gray-600 mt-1">
//                         {service.description}
//                       </CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     {service.services.map((item, itemIndex) => (
//                       <li key={itemIndex} className="flex items-start space-x-3">
//                         <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="text-gray-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Specialty Services */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Specialty Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Expert solutions for specific vehicle components and systems
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {specialtyServices.map((service, index) => (
//               <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
//                 <CardHeader className="pb-4">
//                   <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-full w-fit group-hover:bg-blue-100 transition-colors">
//                     {service.icon}
//                   </div>
//                   <CardTitle className="text-lg">{service.name}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="text-gray-600">
//                     {service.desc}
//                   </CardDescription>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mechanics Dashboard Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-8">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
//                   <GiMechanicGarage className="text-blue-600" />
//                   Our Expert Mechanics
//                 </h2>
//                 <p className="text-gray-600">Meet our certified professionals</p>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md transition-colors flex items-center gap-2"
//                 onClick={() => navigate("/mechanic-details-form")}
//               >
//                 <span>+</span> Add New Mechanic
//               </motion.button>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
//               >
//                 <h3 className="text-gray-500 text-sm">Total Mechanics</h3>
//                 <p className="text-2xl font-bold">{stats.total}</p>
//               </motion.div>
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500"
//               >
//                 <h3 className="text-gray-500 text-sm">Senior Mechanics</h3>
//                 <p className="text-2xl font-bold">{stats.senior}</p>
//               </motion.div>
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500"
//               >
//                 <h3 className="text-gray-500 text-sm">Junior Mechanics</h3>
//                 <p className="text-2xl font-bold">{stats.junior}</p>
//               </motion.div>
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500"
//               >
//                 <h3 className="text-gray-500 text-sm">Avg. Rating</h3>
//                 <p className="text-2xl font-bold flex items-center gap-1">
//                   {stats.averageRating.toFixed(1)} <FaStar className="text-yellow-400" />
//                 </p>
//               </motion.div>
//             </div>
//           </div>

//           {/* Mechanics Filter Tabs */}
//           <div className="flex border-b border-gray-200 mb-6">
//             <button
//               className={`px-4 py-2 font-medium ${activeTab === "all" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
//               onClick={() => setActiveTab("all")}
//             >
//               All Mechanics
//             </button>
//             <button
//               className={`px-4 py-2 font-medium ${activeTab === "senior" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
//               onClick={() => setActiveTab("senior")}
//             >
//               Senior (5+ yrs)
//             </button>
//             <button
//               className={`px-4 py-2 font-medium ${activeTab === "junior" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
//               onClick={() => setActiveTab("junior")}
//             >
//               Junior 
//             </button>
//           </div>

//           {/* Mechanics Cards */}
//           {loading ? (
//             <div className="text-center py-10">
//               <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
//               <p className="mt-3 text-gray-600">Loading mechanic details...</p>
//             </div>
//           ) : error ? (
//             <div className="bg-red-100 text-red-700 p-4 rounded-md text-center mb-6">
//               {error}
//             </div>
//           ) : filteredMechanics.length === 0 ? (
//             <div className="text-center py-10">
//               <GiMechanicGarage className="mx-auto text-5xl text-gray-300 mb-4" />
//               <h3 className="text-xl font-medium text-gray-500">No mechanics found</h3>
//               <p className="text-gray-400">Try adjusting your filters or add a new mechanic</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredMechanics.map((mechanic) => (
//                 <motion.div
//                   key={mechanic.id}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <div className="p-5">
//                     <div className="flex items-start gap-4">
//                       <div className="flex-shrink-0">
//                         {mechanic.profilepic ? (
//                           <img
//                             src={`${baseURL.replace("/api", "")}/uploads/${mechanic.profilepic}`}
//                             alt={mechanic.name}
//                             className="w-16 h-16 object-cover rounded-full border-2 border-blue-100"
//                           />
//                         ) : (
//                           <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
//                             <GiMechanicGarage size={24} />
//                           </div>
//                         )}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="text-lg font-bold text-gray-800">{mechanic.name}</h3>
//                             <p className="text-sm text-blue-600 font-medium">{mechanic.designation}</p>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <FaStar className="text-yellow-400" />
//                             <span className="font-medium">{mechanic.rating}</span>
//                           </div>
//                         </div>
//                         <div className="mt-2 flex flex-wrap gap-1">
//                           {mechanic.skills?.map((skill, index) => (
//                             <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
//                       <div className="flex items-center gap-2 text-gray-600">
//                         <FaBriefcase className="text-gray-400" />
//                         <span>{mechanic.workexperience} yrs exp</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-gray-600">
//                         <FaPhone className="text-gray-400" />
//                         <span>{mechanic.phone}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-gray-600 col-span-2">
//                         <FaEnvelope className="text-gray-400" />
//                         <span className="truncate">{mechanic.mail || "N/A"}</span>
//                       </div>
//                     </div>

//                     <div className="mt-4 flex justify-end gap-2">
//                       <button
//                         onClick={() => navigate(`/mechanic-details-form/${mechanic.id}`)}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
//                         title="Edit"
//                       >
//                         <FaEdit />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(mechanic.id)}
//                         className="p-2 text-red-600 hover:bg-red-50 rounded-full"
//                         title="Delete"
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Service Process */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               How Our Service Process Works
//             </h2>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Simple, transparent, and efficient - from request to completion
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               { step: "1", title: "Request Service", desc: "Submit your service request online" },
//               { step: "2", title: "Get Estimate", desc: "Receive detailed cost breakdown" },
//               { step: "3", title: "Approve & Schedule", desc: "Confirm service and book appointment" },
//               { step: "4", title: "Complete & Pay", desc: "Service completion and payment" }
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                   {item.step}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-blue-200">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Ready to Service Your Vehicle?
//           </h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Get started with our professional vehicle service management platform today
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/contact#contact-form">
//               <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
//                 Request Service Today
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Link to="/mechanic-details-form">
//               <Button size="lg" variant="outline" className="px-8 py-3">
//                 Join Our Mechanics Team
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesAndMechanicsPage;