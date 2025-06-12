import React, { useState } from 'react';
import sampleVideo from '../assets/VSMS video.mp4'; // Replace with your actual file path

const VideoUploadSection: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>(sampleVideo);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 py-10 gap-10">
      {/* Left Side: Video */}
      <div className="w-full md:w-1/2">
        {/* <video
          src={videoSrc}
          controls
          className="rounded-lg shadow-lg w-full"
        /> */}
        <video
  src={videoSrc}
  controls
  className="rounded-lg shadow-lg w-full max-h-[300px] object-cover"
/>

      </div>

      {/* Right Side: Content + Upload Button */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">Our Service Highlights</h2>
        <p className="text-gray-600">
          Watch our sample video or upload your own to demonstrate your services, success stories, or testimonials.
        </p>
        <label className="inline-block">
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="hidden"
          />
          <span className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition">
            Upload Another Video
          </span>
        </label>
      </div>
    </section>
  );
};

export default VideoUploadSection;
