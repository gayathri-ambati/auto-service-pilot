import React, { useState } from 'react';
import sampleImage from '../assets/service.jpg'; // Replace with your image path

const ImageUploadSection: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>(sampleImage);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  };

  return (
    <section className="bg-gradient-to-bl from-green-50 via-white to-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Side: Content + Upload */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
            🛠 Showcase <span className="text-green-600">Your Work</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Upload an image to highlight your service quality, past projects, or customer experiences. A picture is worth a thousand words!
          </p>
          <label className="inline-block group cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            {/* <span className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 group-hover:bg-green-700 text-white text-base font-medium rounded-md shadow-md transition">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v9m0-9l-3 3m3-3l3 3m-3-3V3"
                />
              </svg>
              Upload Image
            </span> */}
          </label>
        </div>

        {/* Right Side: Image Preview */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
            <img
              src={imageSrc}
              alt="Uploaded Preview"
              className="w-full max-h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUploadSection;
