import React, { useEffect, useRef, useState } from "react";
import WorkshopEquipment13Image from "../../../../assets/WorkshopEquipment13.jpg";
import WorkshopEquipment14Image from "../../../../assets/WorkshopEquipment14.jpg";
import "./WorkshopEquipment7.css";

const WorkshopEquipment7 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          setIsVisible(true);
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
    <div
      ref={containerRef}
      className={`workshop-equipment-seven-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="workshop-equipment-seven-content">
        <div className="workshop-equipment-seven-left">
          <a href="/fasepproduct1">
            <img
              className="workshop-equipment-seven-left-image"
              src={WorkshopEquipment13Image}
              alt="Workshop Equipment 7"
            />
          </a>
          <div className="workshop-equipment-seven-subheading">Ourest</div>
          <div className="workshop-equipment-seven-description">
            High Pressure and High Flow Nitrogen Generator <br></br>and
            Conversion System
          </div>
          <a
            href="/fasepproduct1"
            className="workshop-equipment-seven-shop-now"
          >
            Shop Now
          </a>
        </div>
        <div className="workshop-equipment-seven-right">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-seven-right-image"
              src={WorkshopEquipment14Image}
              alt="Workshop Equipment 8"
            />
          </a>
          <div className="workshop-equipment-seven-subheading">Ourest</div>
          <div className="workshop-equipment-seven-description">
            High Pressure Nitrogen Generator and Conversion<br></br> System for
            6 Tyres
          </div>
          <a
            href="/fasepproduct1"
            className="workshop-equipment-seven-shop-now"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopEquipment7;
