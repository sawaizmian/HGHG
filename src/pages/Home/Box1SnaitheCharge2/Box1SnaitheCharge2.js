import React, { useRef, useEffect } from "react";
import Box1SnaitheCharge22 from "../../../assets/64657_169173977104014.png";
import "./Box1SnaitheCharge2.css";

const Box1SnaitheCharge2 = () => {
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
      className="hevea-grip-Box1SnaitheCharge2-jm-container"
    >
      <div className="hevea-grip-Box1SnaitheCharge2-jm-right">
        <img
          src={Box1SnaitheCharge22}
          alt="Box1SnaitheCharge2"
          className="hevea-grip-Box1SnaitheCharge2-jm-image"
        />
      </div>
      <div className="hevea-grip-Box1SnaitheCharge2-jm-left">
        <div className="hevea-grip-Box1SnaitheCharge2-jm-title">Snáithe</div>
        <div className="hevea-grip-Box1SnaitheCharge2-jm-big-title">
          32A Three Phase Type 2 Charging Station
        </div>
        <div className="hevea-grip-Box1SnaitheCharge2-jm-text">
          This EV charging station is used for charging electric vehicles with
          type 2(IEC 62196) charging port. The maximum power is 22kW. Except for
          LED indicators showing charging status, a 4.3-inch LCD screen shows
          real-time charging data, such as current, voltage and power. With
          mobile app, users can achieve remote control and management over
          charging session scheduling, power output adjustment, authorization
          settings and delayed-start option. It is suitable for household and
          commercial AC EV charging. Installation is easy: wall-mounted or
          floor-standing with additional pole.
        </div>
        <a
          href="/fasepproduct1"
          className="hevea-grip-Box1SnaitheCharge2-jm-shop-now"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Box1SnaitheCharge2;
