import React, { useEffect, useRef, useState } from "react";
import WorkshopEquipment11Image from "../../../../assets/WorkshopEquipment11.jpg";
import WorkshopEquipment12Image from "../../../../assets/WorkshopEquipment12.jpg";
import "./WorkshopEquipment6.css";

const WorkshopEquipment6 = () => {
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
      className={`workshop-equipment-six-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="workshop-equipment-six-content">
        <div className="workshop-equipment-six-left">
          <a href="/fasepproduct1">
            <img
              className="workshop-equipment-six-left-image"
              src={WorkshopEquipment11Image}
              alt="Workshop Equipment 7"
            />
          </a>
          <div className="workshop-equipment-six-subheading">Snáithe</div>
          <div className="workshop-equipment-six-description">
            16A Three Phase Type 2<br></br>
            Charging Station
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-six-shop-now">
            Shop Now
          </a>
        </div>
        <div className="workshop-equipment-six-right">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-six-right-image"
              src={WorkshopEquipment12Image}
              alt="Workshop Equipment 8"
            />
          </a>
          <div className="workshop-equipment-six-subheading">Snáithe</div>
          <div className="workshop-equipment-six-description">
            32A Single Phase Type 2<br></br>
            Charging Station{" "}
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-six-shop-now">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopEquipment6;
