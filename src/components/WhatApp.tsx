import React from 'react';
import './WhatApp.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is loaded

const WhatApp: React.FC = () => {
  return (
    <a
      href="https://wa.link/60qsvc"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp_float"
    >
      <i className="fab fa-whatsapp whatsapp-icon"></i>
    </a>
  );
};

export default WhatApp;
