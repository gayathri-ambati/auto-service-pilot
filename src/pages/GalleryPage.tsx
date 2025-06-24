// import React, { useState, useEffect } from "react";
// import { Modal, Button, Spinner, Alert } from "react-bootstrap";
// import { FiInfo } from "react-icons/fi";
// import baseURL from "../BaseUrl";

// interface GalleryItem {
//   id: number;
//   type: "image" | "video";
//   name: string;
//   description: string;
//   file: string;
//   created_at: string;
// }

// const GalleryPage: React.FC = () => {
//   const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const res = await fetch(`${baseURL}/gallery`);
//         if (!res.ok) throw new Error("Failed to fetch gallery");
//         const data = await res.json();
//         setGalleryItems(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGallery();
//   }, []);

//   const openModal = (index: number) => {
//     setActiveIndex(index);
//     setShowModal(true);
//   };

//   const closeModal = () => setShowModal(false);
//   const nextItem = () => setActiveIndex((prev) => (prev + 1) % galleryItems.length);
//   const prevItem = () => setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

//   const activeItem = galleryItems[activeIndex];

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[80vh]">
//         <Spinner animation="border" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-3xl mx-auto my-10 text-center">
//         <Alert variant="danger">
//           <h4 className="text-lg font-semibold">Error</h4>
//           <p>{error}</p>
//           <Button onClick={() => window.location.reload()}>Retry</Button>
//         </Alert>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold text-center mb-10">Our Gallery</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {galleryItems.map((item, index) => (
//           <div
//             key={item.id}
//             onClick={() => openModal(index)}
//             className="rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer transition group"
//           >
//             <div className="relative w-full h-[170px] bg-gray-100 overflow-hidden">
//               {item.type === "image" ? (
//                 <img
//                   src={`${baseURL.replace("/api", "")}/uploads/${item.file}`}
//                   alt={item.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               ) : (
//                 <video
//                   src={`${baseURL.replace("/api", "")}/uploads/${item.file}`}
//                   muted
//                   className="w-full h-full object-cover"
//                 />
//               )}
//             </div>
//             <div className="p-2 bg-white">
//               <h3 className="text-sm font-semibold truncate">{item.name}</h3>
//               {item.description && (
//                 <p className="text-xs text-gray-500 mt-1 line-clamp-2 flex items-center gap-1">
//                   <FiInfo /> {item.description}
//                 </p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal View */}
//       {activeItem && (
//   <Modal
//     show={showModal}
//     onHide={closeModal}
//     centered
//     dialogClassName="custom-gallery-modal"
//     contentClassName="bg-white rounded-lg shadow-lg overflow-hidden"
//   >
//     <Modal.Header closeButton className="border-b border-gray-200">
//       <Modal.Title className="text-xl font-semibold">{activeItem.name}</Modal.Title>
//     </Modal.Header>

//     <Modal.Body className="bg-black flex justify-center items-center min-h-[50vh] p-0">
//       {activeItem.type === "image" ? (
//         <img
//           src={`${baseURL.replace("/api", "")}/uploads/${activeItem.file}`}
//           alt={activeItem.name}
//           className="max-h-[70vh] w-auto object-contain mx-auto"
//         />
//       ) : (
//         <video
//           src={`${baseURL.replace("/api", "")}/uploads/${activeItem.file}`}
//           controls
//           className="max-h-[70vh] w-full object-contain"
//         />
//       )}
//     </Modal.Body>

//     <Modal.Footer className="flex justify-between items-center border-t border-gray-200 px-4 py-3">
//       <button
//         onClick={prevItem}
//         className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md transition"
//       >
//         ⬅️ Previous
//       </button>
//       {activeItem.description && (
//         <p className="text-sm text-gray-600 text-center flex-1 px-4">
//           {activeItem.description}
//         </p>
//       )}
//       <button
//         onClick={nextItem}
//         className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md transition"
//       >
//         Next ➡️
//       </button>
//     </Modal.Footer>
//   </Modal>
// )}

//     </div>
//   );
// };

// export default GalleryPage;


import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Spinner, Alert, Button } from "react-bootstrap";
import { FiInfo, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import baseURL from "../BaseUrl";
import './Gallery.css';

interface GalleryItem {
  id: number;
  type: "image" | "video";
  name: string;
  description: string;
  file: string;
  created_at: string;
}

const GalleryPage: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${baseURL}/gallery`);
        if (!res.ok) throw new Error("Failed to fetch gallery");
        const data = await res.json();
        setGalleryItems(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
    setIsZoomed(false);
  };

  const closeModal = () => setShowModal(false);
  
  const nextItem = () => {
    setIsZoomed(false);
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };
  
  const prevItem = () => {
    setIsZoomed(false);
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (showModal) {
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
      if (e.key === 'Escape') closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal, activeIndex]);

  const activeItem = galleryItems[activeIndex];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto my-10 text-center">
        <Alert variant="danger" className="rounded-lg shadow">
          <h4 className="text-lg font-semibold">Error</h4>
          <p className="mb-4">{error}</p>
          <Button 
            variant="primary" 
            onClick={() => window.location.reload()}
            className="rounded-md px-4 py-2"
          >
            Retry
          </Button>
        </Alert>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openModal(index)}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 group bg-white"
          >
            <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
              {item.type === "image" ? (
                <img
                  src={`${baseURL.replace("/api", "")}/uploads/${item.file}`}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <>
                  <video
                    src={`${baseURL.replace("/api", "")}/uploads/${item.file}`}
                    muted
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
              {item.description && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 flex items-start gap-1">
                  <FiInfo className="flex-shrink-0 mt-0.5" /> {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal using Portal */}
      {showModal && activeItem && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            {galleryItems.length > 1 && (
              <>
                <button
                  onClick={prevItem}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextItem}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Media content */}
            <div className="flex-grow flex items-center justify-center bg-black p-4">
              {activeItem.type === "image" ? (
                <img
                  src={`${baseURL.replace("/api", "")}/uploads/${activeItem.file}`}
                  alt={activeItem.name}
                  className={`max-h-[70vh] max-w-full object-contain ${isZoomed ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in'}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              ) : (
                <video
                  src={`${baseURL.replace("/api", "")}/uploads/${activeItem.file}`}
                  controls
                  autoPlay
                  className="max-h-[70vh] max-w-full object-contain"
                />
              )}
            </div>

            {/* Footer */}
            <div className="bg-white p-4 border-t">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{activeItem.name}</h3>
                  {activeItem.description && (
                    <p className="text-gray-600 mt-2 flex items-start gap-2">
                      <FiInfo className="flex-shrink-0 mt-0.5 text-gray-400" />
                      {activeItem.description}
                    </p>
                  )}
                </div>
                
                {galleryItems.length > 1 && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{activeIndex + 1} / {galleryItems.length}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('modal-root')!
      )}
    </div>
  );
};

export default GalleryPage;