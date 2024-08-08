import React, { useRef, useEffect } from "react";
import Box2VelyenImage from "../../../assets/Box2Velyen.jpg";
import "./Box2Velyen.css";

const Box2Velyen = () => {
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
    <div ref={containerRef} className="hevea-grip-Velyen-two-jm-container">
      <div className="hevea-grip-Velyen-two-jm-right">
        <img
          src={Box2VelyenImage}
          alt="Velyen Product 2"
          className="hevea-grip-Velyen-two-jm-image"
        />
      </div>
      <div className="hevea-grip-Velyen-two-jm-left">
        <div className="hevea-grip-Velyen-two-jm-title">Velyen</div>
        <div className="hevea-grip-Velyen-two-jm-big-title">
        Four Post Lift 5500 Kg 5,7 M PLATFORM        </div>
        <div className="hevea-grip-Velyen-two-jm-text">
        <ul>
        <li>Innovative design of columns without longitudinal welds</li>
        <li>Electro-hydraulic lifting system operated over a simple effect cylinder.</li>
        <li>Platform locking system operated automatically by electromagnets</li>
        <li>Safety system against obstacles, cable breakdown or looseness.</li>
        <li>Hidraulic cylinder with control valve of lowering speed.</li>
        <li>Safety valve against overpressure of the hydraulic system</li>
        <li>Pushbuttons at 24V, type “dead man”, separated UP & DOWN buttons and ON/OFF switch locable by a padlock.</li>
        <li>Special protection on pulleys zone</li>
        <li>Smooth platforms</li>
        <li>Upper height limit switch.</li>
      </ul>
        </div>
        <a href="/fasepproduct1" className="hevea-grip-Velyen-two-jm-shop-now">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Box2Velyen;
