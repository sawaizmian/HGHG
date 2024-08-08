import React, { useEffect, useRef, useState } from "react";
import WorkshopEquipment5Image from "../../../../assets/WorkshopEquipment5.jpg";
import WorkshopEquipment6Image from "../../../../assets/WorkshopEquipment6.jpg";
import "./WorkshopEquipment3.css";

const WorkshopEquipment3 = () => {
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
      className={`workshop-equipment-three-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="workshop-equipment-three-content">
        <div className="workshop-equipment-three-left">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-three-left-image"
              src={WorkshopEquipment5Image}
              alt="Workshop Equipment 5"
            />{" "}
          </a>

          <div className="workshop-equipment-three-subheading">Capelec</div>
          <div className="workshop-equipment-three-description">
            LV+ brake, suspensions & side slip tester<br></br>CAP9020
          </div>
          <a
            href="/fasepproduct1"
            className="workshop-equipment-three-shop-now"
          >
            Shop Now
          </a>
        </div>
        <div className="workshop-equipment-three-right">
          <a href="/fasepproduct1">
            <img
              className="workshop-equipment-three-right-image"
              src={WorkshopEquipment6Image}
              alt="Workshop Equipment 6"
            />{" "}
          </a>

          <div className="workshop-equipment-three-subheading">Capelec</div>
          <div className="workshop-equipment-three-description">
            Expert electronic headlamp system<br></br>CAP2600
          </div>
          <a
            href="/fasepproduct1"
            className="workshop-equipment-three-shop-now"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopEquipment3;
