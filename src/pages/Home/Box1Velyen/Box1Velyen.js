import React, { useRef, useEffect } from "react";
import Box1velyenImage from "../../../assets/box1velyen.jpg";
import "./Box1Velyen.css";

const Box1Velyen = () => {
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
    <div ref={containerRef} className="hevea-grip-velyen-jm-container">
      <div className="hevea-grip-velyen-jm-right">
        <img
          src={Box1velyenImage}
          alt="Velyen Product 1"
          className="hevea-grip-velyen-jm-image"
        />
      </div>
      <div className="hevea-grip-velyen-jm-left">
        <div className="hevea-grip-velyen-jm-title">Velyen</div>
        <div className="hevea-grip-velyen-jm-big-title">
          2 Post Lift Baseless 5500 Kg Automatic Hydraulic
        </div>
        <div className="hevea-grip-velyen-jm-text">
          The New Velyen 4EC1400 will be supplied from the factory with a standard 4 lifting arm configurations giving 5.5 ton lifting capacity. The arms fitted as standard will all be three stage. These arms will extend from 900mm closed to 1750mm open. (symmetrical)
          <br></br>
          <br></br>
          <ul>
            <li>Supplied in the delivery box will be 2 more arm length extensions.</li>
            <li>These can be fitted quickly to the rear arms for some extra-long wheelbase vans.</li>
            <li>With this arm configuration fitted the lift will become asymmetrical.</li>
            <li>2 x Rear Arms 900-2050mm</li>
            <li>2 x Front Arms 900-1750mm</li>
            <li>In this configuration this lifting capacity is reduced to 4.000kgs</li>
          </ul>
        </div>
        <a href="/fasepproduct1" className="hevea-grip-velyen-jm-shop-now">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Box1Velyen;