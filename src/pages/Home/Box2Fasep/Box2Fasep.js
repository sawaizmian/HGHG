import React, { useRef, useEffect } from "react";
import Box2FasepImage from "../../../assets/Box2FasepImage.jpg";
import "./Box2Fasep.css";

const Box2Fasep = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          element.classList.add("animate");
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="hevea-grip-fasep-two-jm-container">
      <div className="hevea-grip-fasep-two-jm-right">
        <img
          src={Box2FasepImage}
          alt="fasep-two Product 1"
          className="hevea-grip-fasep-two-jm-image"
        />
      </div>
      <div className="hevea-grip-fasep-two-jm-left">
        <div className="hevea-grip-fasep-two-jm-title">Fasep</div>
        <div className="hevea-grip-fasep-two-jm-big-title">
          TP8000 F/PROFIL
        </div>
        <div className="hevea-grip-fasep-two-jm-text">
          TP8000 is the best solution for a complete diagnosis for car and light truck tires. Laser diagnosis provides an objective and detailed report showing the true state of tyre wear, recommending replacement where necessary.         
        </div>
        <a href="/fasepproduct1" className="hevea-grip-fasep-two-jm-shop-now">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Box2Fasep;
