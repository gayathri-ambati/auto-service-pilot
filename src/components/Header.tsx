
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Wrench } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "../assets/vsms.jpg"; // adjust the path based on your folder structure

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//     { name: "FAQ", href: "/faq" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <header className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           {/* <Link to="/" className="flex items-center space-x-2 group">
//             <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
//               <Wrench className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <span className="text-xl font-bold text-gray-900">Mechanic since1999</span>
//               <p className="text-xs text-gray-600">Vehicle Service Management</p>
//             </div>
//           </Link> */}
//           <Link to="/" className="flex items-center space-x-3 group">
//   <img
//     src={logo}
//     alt="Mechanicsince1999 Logo"
//     className="h-10 w-auto rounded-md shadow-md transition-transform group-hover:scale-105"
//   />
//   <div>
//     <span className="text-lg font-bold">Mechanic since 1999</span>
//     <p className="text-xs text-gray-400">Vehicle Service Management</p>
//   </div>
// </Link>


//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
//                   isActive(item.href)
//                     ? "text-blue-600"
//                     : "text-gray-700 hover:text-blue-600"
//                 }`}
//               >
//                 {item.name}
//                 <span
//                   className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform ${
//                     isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//                   }`}
//                 />
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden md:flex">
//            <Link to="/login">
//   <Button className="bg-orange-500 hover:bg-orange-600 text-white">
//     Get Started Today
//   </Button>
// </Link>

//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4 animate-fade-in">
//             <nav className="flex flex-col space-y-2">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`px-3 py-2 text-sm font-medium transition-colors ${
//                     isActive(item.href)
//                       ? "text-blue-600 bg-blue-50"
//                       : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="pt-2">
//                 <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//   <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
//     Get Started Today
//   </Button>
// </Link>



//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/vsms.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownSelect = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto rounded-lg shadow-md transition-transform group-hover:scale-105"
            />
            <div className="leading-tight">
              <span className="text-lg font-bold">Mechanic since 1999</span>
              <p className="text-xs bg-green-200 text-black-400 italic">Purchase by EMI, Maintenance by EMI</p>
            </div>
          </Link>

          {/* Desktop navigation - All items in single row */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Main navigation links */}
            <nav className="flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 py-2 text-sm font-medium transition-colors relative group ${
                    isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform ${
                      isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Vehicle Sales Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-2 py-2 text-sm font-medium transition-colors flex items-center ${
                  location.pathname.includes('/vehiclesales') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Vehicle Sales <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute bg-white text-black mt-2 rounded shadow-lg w-48 z-50">
                  <button onClick={() => handleDropdownSelect('/vehiclesales/below1000cc')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Below 1000cc</button>
                  <button onClick={() => handleDropdownSelect('/vehiclesales/below2000cc')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Below 2000cc</button>
                  <button onClick={() => handleDropdownSelect('/vehiclesales/above2000cc')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Above 2000cc</button>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-3">
              <Link to="/contact#contact-form" className="whitespace-nowrap">
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Get Started
                </button>
              </Link>
              <a
                href="/downloads/app.apk"
                className="whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                download
              >
                Download App
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile dropdown */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-sm font-medium text-gray-700 w-full"
                >
                  Vehicle Sales <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <button onClick={() => handleDropdownSelect('/vehiclesales/below1000cc')} className="block w-full text-left py-1 hover:text-blue-600">Below 1000cc</button>
                    <button onClick={() => handleDropdownSelect('/vehiclesales/below2000cc')} className="block w-full text-left py-1 hover:text-blue-600">Below 2000cc</button>
                    <button onClick={() => handleDropdownSelect('/vehiclesales/above2000cc')} className="block w-full text-left py-1 hover:text-blue-600">Above 2000cc</button>
                  </div>
                )}
              </div>
              <Link to="/contact#contact-form" className="mt-2">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-colors">
                  Get Started Today
                </button>
              </Link>
              <a
                href="/downloads/app.apk"
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-center transition-colors"
                download
              >
                Download App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;