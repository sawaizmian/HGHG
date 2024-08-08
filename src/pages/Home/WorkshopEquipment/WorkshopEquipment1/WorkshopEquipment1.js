import React, { useEffect, useRef, useState } from "react";
import WorkshopEquipment1Image from "../../../../assets/workshopequipment1.jpg";
import WorkshopEquipment2Image from "../../../../assets/workshopequipment2.jpg";
import "./WorkshopEquipment1.css";

const WorkshopEquipment1 = () => {
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
      className={`workshop-equipment-one-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="workshop-equipment-one-heading">Workshop Equipment's</div>
      <div className="workshop-equipment-one-content">
        <div className="workshop-equipment-one-left">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-one-left-image"
              src={WorkshopEquipment1Image}
              alt="Workshop Equipment 1"
            />
          </a>
          <div className="workshop-equipment-one-subheading">Snáithe</div>
          <div className="workshop-equipment-one-description">
            Fully equipped automatic 3D car <br></br> wheel alignment system
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-one-shop-now">
            Shop Now
          </a>
        </div>
        <div className="workshop-equipment-one-right">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-one-right-image"
              src={WorkshopEquipment2Image}
              alt="Workshop Equipment 2"
            />
          </a>
          <div className="workshop-equipment-one-subheading">AVL Ditest</div>
          <div className="workshop-equipment-one-description">
            ADS 310 <br></br>CO2 air conditioning system
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-one-shop-now">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopEquipment1;
