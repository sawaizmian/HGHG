import React, { useEffect, useRef, useState } from "react";
import WorkshopEquipment7Image from "../../../../assets/WorkshopEquipment7.jpg";
import WorkshopEquipment8Image from "../../../../assets/WorkshopEquipment8.jpg";
import "./WorkshopEquipment4.css";

const WorkshopEquipment4 = () => {
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
      className={`workshop-equipment-four-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="workshop-equipment-four-content">
        <div className="workshop-equipment-four-left">
          <a href="/fasepproduct1">
            <img
              className="workshop-equipment-four-left-image"
              src={WorkshopEquipment7Image}
              alt="Workshop Equipment 7"
            />
          </a>
          <div className="workshop-equipment-four-subheading">Frank</div>
          <div className="workshop-equipment-four-description">
            Dry steam cleaner bSteam<br></br>
            Vehicle Wash Steamer{" "}
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-four-shop-now">
            Shop Now
          </a>
        </div>
        <div className="workshop-equipment-four-right">
          <a href="/fasepproduct1">
            <img
              className="workshop-equipment-four-right-image"
              src={WorkshopEquipment8Image}
              alt="Workshop Equipment 8"
            />
          </a>
          <div className="workshop-equipment-four-subheading">Snáithe</div>
          <div className="workshop-equipment-four-description">
            (100L)<br></br>
            Oil Drain Tank{" "}
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-four-shop-now">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopEquipment4;
