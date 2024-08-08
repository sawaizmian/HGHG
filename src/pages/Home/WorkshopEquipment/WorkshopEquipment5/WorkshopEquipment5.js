import React, { useEffect, useRef, useState } from "react";
import WorkshopEquipment9Image from "../../../../assets/WorkshopEquipment9.jpg";
import WorkshopEquipment10Image from "../../../../assets/WorkshopEquipment10.jpg";
import "./WorkshopEquipment5.css";

const WorkshopEquipment5 = () => {
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
      className={`workshop-equipment-five-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="workshop-equipment-five-content">
        <div className="workshop-equipment-five-left">
          <a href="/fasepproduct1">
            <img
              className="workshop-equipment-five-left-image"
              src={WorkshopEquipment9Image}
              alt="Workshop Equipment 7"
            />
          </a>
          <div className="workshop-equipment-five-subheading">OMCN</div>
          <div className="workshop-equipment-five-description">
            Trolley hydraulic cranes{" "}
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-five-shop-now">
            Shop Now
          </a>
        </div>
        <div className="workshop-equipment-five-right">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-five-right-image"
              src={WorkshopEquipment10Image}
              alt="Workshop Equipment 8"
            />
          </a>
          <div className="workshop-equipment-five-subheading">Snáithe</div>
          <div className="workshop-equipment-five-description">
            Hydraulic presses{" "}
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-five-shop-now">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopEquipment5;
