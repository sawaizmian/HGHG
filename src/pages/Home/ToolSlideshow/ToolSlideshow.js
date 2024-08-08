import React, { useState, useEffect } from "react";
import "./ToolSlideshow.css";
 
 
const ToolSlideshow = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
   const logos = [
    { name: "1", img: require("../../../assets/image20.png"), link: "/fasepproduct1" },
    { name: "2", img: require("../../../assets/image21.png"), link: "/fasepproduct1"},
    { name: "3", img: require("../../../assets/image22.png"), link: "/fasepproduct1"},
    { name: "4", img: require("../../../assets/image23.png"), link: "/fasepproduct1"},
    { name: "5", img: require("../../../assets/image24.png"), link: "/fasepproduct1" },
    { name: "6", img: require("../../../assets/image25.png"), link: "/fasepproduct1" },
    { name: "7", img: require("../../../assets/image26.png"), link: "/fasepproduct1" },
    { name: "8", img: require("../../../assets/image27.png"), link: "/fasepproduct1" },
    { name: "9", img: require("../../../assets/image28.png"), link: "/fasepproduct1" },
    { name: "10", img: require("../../../assets/image29.png"), link: "/fasepproduct1" },
    { name: "11", img: require("../../../assets/image30.png"), link: "/fasepproduct1" },
    { name: "12", img: require("../../../assets/image31.png"), link: "/fasepproduct1" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="logo-slideshows"><div className="logo-slideshows1">Handy-Tools</div>
      <div className="logo-slideshow">
        {logos.map((logo, index) => (
          <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
            <div
              className={`logo ${currentLogoIndex === index ? "active" : ""} position-${index}`}
              style={{ backgroundImage: `url(${logo.img})` }}
            ></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ToolSlideshow;