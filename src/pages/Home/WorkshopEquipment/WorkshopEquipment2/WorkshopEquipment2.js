import React, { useEffect, useRef, useState } from "react";
import WorkshopEquipment3Image from "../../../../assets/WorkshopEquipment3.jpg";
import WorkshopEquipment4Image from "../../../../assets/WorkshopEquipment4.jpg";
import "./WorkshopEquipment2.css";

const WorkshopEquipment2 = () => {
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
      className={`workshop-equipment-two-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="workshop-equipment-two-content">
        <div className="workshop-equipment-two-left">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-two-left-image"
              src={WorkshopEquipment3Image}
              alt="Workshop Equipment 1"
            />
          </a>
          <div className="workshop-equipment-two-subheading">Snáithe</div>
          <div className="workshop-equipment-two-description">
            4-Ton <br></br>
            Portable Mid-Rise Scissor Lift{" "}
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-two-shop-now">
            Shop Now
          </a>
        </div>
        <div className="workshop-equipment-two-right">
          <a href="/fasepproduct1">
            {" "}
            <img
              className="workshop-equipment-two-right-image"
              src={WorkshopEquipment4Image}
              alt="Workshop Equipment 2"
            />
          </a>
          <div className="workshop-equipment-two-subheading">Snáithe</div>
          <div className="workshop-equipment-two-description">
            4-Ton <br></br>
            Low-Profile Full-Rise Scissor Lift
          </div>
          <a href="/fasepproduct1" className="workshop-equipment-two-shop-now">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkshopEquipment2;
