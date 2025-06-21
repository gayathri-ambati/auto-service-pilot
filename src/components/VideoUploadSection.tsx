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
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Video */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
            <video
              src={videoSrc}
              controls
              className="w-full max-h-[300px] object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content + Upload Button */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
            🚘 Our Service <span className="text-blue-600">Highlights</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Watch our featured service video or upload your own to showcase customer experiences, repair expertise, or behind-the-scenes efforts.
          </p>
          <label className="inline-block group cursor-pointer">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />
            {/* <span className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 group-hover:bg-blue-700 text-white text-base font-medium rounded-md shadow-md transition">
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
              Upload Another Video
            </span> */}
          </label>
        </div>
      </div>
    </section>
  );
};

export default VideoUploadSection;
