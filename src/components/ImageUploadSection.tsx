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
    <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 py-10 gap-10">
      {/* Left Side: Text + Upload */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">Showcase Your Work</h2>
        <p className="text-gray-600">
          Upload an image to highlight your service quality, previous work, or customer feedback. Visuals speak louder than words!
        </p>
        <label className="inline-block">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <span className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-md cursor-pointer hover:bg-green-700 transition">
            Upload Image
          </span>
        </label>
      </div>

      {/* Right Side: Image Preview */}
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt="Preview"
          className="rounded-lg shadow-lg w-full max-h-[300px] object-cover"
        />
      </div>
    </section>
  );
};

export default ImageUploadSection;
