import React, { useRef, useEffect } from "react";
import BoxSnaitheCharge2 from "../../../assets/BoxSnaitheCharge1.jpg";
import "./BoxSnaitheCharge.css";

const BoxSnaitheCharge = () => {
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
    <div
      ref={containerRef}
      className="hevea-grip-three-BoxSnaitheCharge-hg-container"
    >
      <div className="hevea-grip-three-BoxSnaitheCharge-hg-left">
        <div className="hevea-grip-three-BoxSnaitheCharge-hg-title">
          Snáithe
        </div>
        <div className="hevea-grip-three-BoxSnaitheCharge-hg-big-title">
          16A Single Phase Type 2 Charging Station
        </div>
        <div className="hevea-grip-three-BoxSnaitheCharge-hg-text">
          This EV charging station is used for charging electric vehicles with
          type 2(IEC 62196) charging port. The maximum power is 3.7kW. Except
          for LED indicators showing charging status, a 4.3-inch LCD screen
          shows real-time charging data, such as current, voltage and power.
          With mobile app, users can achieve remote control and management over
          charging session scheduling, power output adjustment, authorization
          settings and delayed-start option. It is suitable for household and
          commercial AC EV charging. Installation is easy: wall-mounted or
          floor-standing with additional pole.
        </div>
        <a
          href="/hg-shop"
          className="hevea-grip-three-BoxSnaitheCharge-hg-shop-now"
        >
          Shop Now
        </a>
      </div>
      <div className="hevea-grip-three-BoxSnaitheCharge-hg-right">
        <img
          src={BoxSnaitheCharge2}
          alt="BoxSnaitheCharge Product 1"
          className="hevea-grip-three-BoxSnaitheCharge1-hg-image"
        />
      </div>
    </div>
  );
};

export default BoxSnaitheCharge;
