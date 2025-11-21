import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { useRef, useState } from "react";
import "./why.css";
export const WhyVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div
      className="video-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        width="300"
        poster="/profile.jpg"
        onClick={togglePlayPause}
        onEnded={() => {
          const video = videoRef.current;
          video.pause();
          video.currentTime = 0;
          video.load();
          setIsPlaying(false);
        }}
      >
        <source src="/111.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {(!isPlaying || isHovered) && (
        <button
          className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-white bg-opacity-70 rounded-full p-4 transition-opacity duration-300"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <FaPause size={30} color="#ffffff" />
          ) : (
            <FaPlay size={30} color="#ffffff" />
          )}
        </button>
      )}
    </div>
  );
};
