import React, { useState, useRef, useEffect } from "react";
import "./videoframetwo.css";
import HGVideo1 from "../../../assets/videoframehdone-1.mp4";
import HGVideo2 from "../../../assets/videoframehdone-2.mp4";
import HGVideo3 from "../../../assets/videoframehdone-3.mp4";
import HGVideo4 from "../../../assets/videoframehdone-4.mp4";
import HGVideo5 from "../../../assets/videoframehdone-5.mp4";
import HGVideo6 from "../../../assets/videoframehdone-6.mp4";
import HGVideo7 from "../../../assets/videoframehdone-7.mp4";
import HGVideo8 from "../../../assets/videoframehdone-8.mp4";
import HGVideo9 from "../../../assets/videoframehdone-9.mp4";
import HGVideo10 from "../../../assets/videoframehdone-10.mp4";
import HGVideo11 from "../../../assets/videoframehdone-11.mp4";
import HGVideo12 from "../../../assets/videoframehdone-12.mp4";
import HGVideo13 from "../../../assets/videoframehdone-13.mp4";
import HGVideo14 from "../../../assets/videoframehdone-14.mp4";
import HGVideo15 from "../../../assets/videoframehdone-15.mp4";
import HGVideo16 from "../../../assets/videoframehdone-16.mp4"; // New import
import HGVideo17 from "../../../assets/videoframehdone-17.mp4"; // New import
import HGVideo18 from "../../../assets/videoframehdone-18.mp4"; // New import

const VideoFrametwo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectedVideoRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    if (selectedVideoRef.current) {
      selectedVideoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedVideo]);

  const handleVideoClick = (video) => {
    if (selectedVideo === video) {
      setSelectedVideo(null); // Hide the video if clicked again
    } else {
      setSelectedVideo(video); // Show the selected video
    }
  };

  const handleMouseEnter = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div>
      <div className="video-hg-frame-two">
        <div
          className="video-container"
          ref={videoContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Videos */}
          {[HGVideo1, HGVideo2, HGVideo3, HGVideo18, HGVideo13, HGVideo6, HGVideo17, HGVideo8, HGVideo9, HGVideo10, HGVideo11, HGVideo12, HGVideo5, HGVideo14, HGVideo15, HGVideo16, HGVideo7, HGVideo4].map((video, index) => (
            <video
              key={index}
              src={video}
              className="video-thumbnail"
              onClick={() => handleVideoClick(video)}
            />
          ))}
        </div>
      </div>
      {selectedVideo && (
        <div className="selected-video-container" ref={selectedVideoRef}>
          <div className="selected-video-wrapper">
            <video
              src={selectedVideo}
              controls
              autoPlay
              disablePictureInPicture
              controlsList="nodownload"
              className="selected-video"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFrametwo;
