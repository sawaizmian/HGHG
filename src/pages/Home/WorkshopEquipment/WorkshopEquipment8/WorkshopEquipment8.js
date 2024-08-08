import React, { useEffect, useRef, useState } from "react";
import WorkshopEquipment15Image from "../../../../assets/kroftoolsproduct4image1.jpg";
import WorkshopEquipment16Image from "../../../../assets/kroftoolsproduct7image1.jpg";
import "./WorkshopEquipment8.css";

const WorkshopEquipment8 = () => {
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
      className={`workshop-equipment-eight-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="workshop-equipment-eight-content">
        <div className="workshop-equipment-eight-left">
          <a href="/fasepproduct1">
            <img
              className="workshop-equipment-eight-left-image"
              src={WorkshopEquipment15Image}
              alt="Workshop Equipment 7"
            />
          </a>
          <div className="workshop-equipment-eight-subheading">KrofTools</div>
          <div className="workshop-equipment-eight-description">
            Pneumatic Impact Wrench <br></br>1/2" 1112/1756nm{" "}
          </div>
          <a
            href="/fasepproduct1"
            className="workshop-equipment-eight-shop-now"
          >
            Shop Now
          </a>
        </div>
        <div className="workshop-equipment-eight-right">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-eight-right-image"
              src={WorkshopEquipment16Image}
              alt="Workshop Equipment 8"
            />
          </a>
          <div className="workshop-equipment-eight-subheading">KrofTools</div>
          <div className="workshop-equipment-eight-description">
            Pneumatic Impact Wrench <br></br>1/2" 624/1302nm
          </div>
          <a
            href="/fasepproduct1"
            className="workshop-equipment-eight-shop-now"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopEquipment8;
