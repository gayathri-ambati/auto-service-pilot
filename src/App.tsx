
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import FAQ from "./pages/FAQ";
// import Terms from "./pages/Terms";
// import Privacy from "./pages/Privacy";
// import NotFound from "./pages/NotFound";
// import LoginPage from "./components/Authentication/LoginPage";
// import ScrollToTop from "./components/ScrollToTop";
// import Dashboard from "./components/admin/dashboard/Dashboard";
// import Login from "./components/admin/login/Login";
// import Gallery from "./components/admin/gallery/Gallery";
// import VehicleDetails from "./components/admin/vehicleDetails/VehicleDetails";
// import GalleryTable from "./components/admin/gallery/GalleryTable";
// import VehicleTable from "./components/admin/vehicleDetails/VehicleTable";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <div className="min-h-screen flex flex-col">
//           <ScrollToTop />
//           <Header />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/terms" element={<Terms />} />
//               <Route path="/privacy" element={<Privacy />} />
//                <Route path="/login" element={<LoginPage />} />
         
//               <Route path="*" element={<NotFound />} />
//                {/* adminpanel */}
//               <Route path="/dashboard" element={<Dashboard />} />
//          <Route path="/admin" element={<Login/>} />
//           <Route path="/admin-gallery" element={<Gallery />} />
//           <Route path="/admin-contact" element={<Contact />} />
//           <Route path="/admin-details" element={<VehicleDetails />} />
//           <Route path="/admin-gallery-table" element={<GalleryTable />} />
//            <Route path="/admin-details-table" element={<VehicleTable />} />

//             </Routes>
//           </main>
//           <Footer />
//         </div>

        
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;



import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// Pages & Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";

import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import LoginPage from "./components/Authentication/LoginPage";

// Admin Panel
import Dashboard from "./components/admin/dashboard/Dashboard";
import Login from "./components/admin/login/Login";
import Gallery from "./components/admin/gallery/Gallery";
import VehicleDetails from "./components/admin/vehicleDetails/VehicleDetails";
import GalleryTable from "./components/admin/gallery/GalleryTable";
import VehicleTable from "./components/admin/vehicleDetails/VehicleTable";
import ContactPage from "./components/admin/contact/AdminContact";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import ChangePassword from "./components/admin/login/ChangePassword";

// Create query client
const queryClient = new QueryClient();

// Define admin paths for layout exclusion
const adminPaths = [
  "/dashboard",
  "/admin",
  "/admin-gallery-form",
  "/admin-details-form",
  "/admin-gallery-table",
  "/admin-details-table",
  "/Contactdetails",
  "/change-password"

];

// Component to conditionally render layout
const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = adminPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
           <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/gallery" element={<GalleryPage />} />
         
          {/* Admin Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin-gallery-form" element={<Gallery />} />
          <Route path="/admin-details-form" element={<VehicleDetails />} />
          <Route path="/admin-gallery-table" element={<GalleryTable />} />
          <Route path="/admin-details-table" element={<VehicleTable />} />
          <Route path="/Contactdetails" element={<ContactPage />} />
           <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

// Main App
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
