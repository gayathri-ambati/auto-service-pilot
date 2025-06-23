
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
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";

import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import LoginPage from "./components/Authentication/LoginPage";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Login from "./components/admin/login/Login";
import Gallery from "./components/admin/gallery/Gallery";
import VehicleDetails from "./components/admin/vehicleDetails/VehicleDetails";
import GalleryTable from "./components/admin/gallery/GalleryTable";
import VehicleTable from "./components/admin/vehicleDetails/VehicleTable";
import Contacts from "./pages/Contact";
import Contact from "./components/admin/contact/Contact";


const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin") || location.pathname === "/dashboard";

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />

          {/* Admin panel routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin-gallery-form" element={<Gallery />} />
          {/* <Route path="/admin-contact" element={<Contact />} /> */}
          <Route path="/admin-details-form" element={<VehicleDetails />} />
          <Route path="/admin-gallery-table" element={<GalleryTable />} />
          <Route path="/admin-details-table" element={<VehicleTable />} />
           <Route path="/admin-contact-table" element={<Contact />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

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
