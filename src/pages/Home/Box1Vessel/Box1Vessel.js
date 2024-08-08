import React, { useRef, useEffect } from "react";
import Box1VesselImage from "../../../assets/Vessel1Image.jpg";
import "./Box1Vessel.css";

const Box1Vessel = () => {
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
    <div ref={containerRef} className="hevea-grip-Vessel-s-hg1-container">
      <div className="hevea-grip-Vessel-s-hg1-right">
        <img
          src={Box1VesselImage}
          alt="DQN-s Product 1"
          className="hevea-grip-Vessel-s-hg1-image"
        />
      </div>
      <div className="hevea-grip-Vessel-s-hg1-left">
        <div className="hevea-grip-Vessel-s-hg1-title">Vessel Europe</div>
        <div className="hevea-grip-Vessel-s-hg1-big-title">
          Air Impact Wrenches
        </div>
        <div className="hevea-grip-Vessel-s-hg1-text">
          Vessel Europe offers a comprehensive range of air impact wrenches
          designed to meet the demands of both the automotive aftermarket and
          industrial applications. These tools are engineered for lightweight
          and high-power output, ensuring efficient and reliable performance.
          Notably, the GT-3800LX model exemplifies Vessel Europe's commitment to
          innovation with its thrust operation capability and well-balanced
          design. This impact wrench eliminates the common issue of air hose
          tangling by featuring a clear, straight air hose alignment from the
          air compressor, enhancing user safety and convenience.
          <br></br>
          <br></br>
          Vessel Europe's lineup in Air Impact Wrenches includes the GT-3800LX
          and GT-3800PX, available in 1" straight and pistol types, ideal for
          garage use. For high-end durability, the GT-1600VPX and GT-1600VPH
          models provide 1/2" impact wrenches designed to withstand rigorous
          use. Additionally, the double hammer series, featuring the GT-S20RW
          and GT-S32RW, delivers exceptional high-power wrenching capabilities.
          Each product in Vessel Europe's air impact wrench lineup is crafted to
          offer superior performance, durability, and user-friendly features,
          making them a trusted choice for professionals in various industries.
        </div>
        <a href="/DQN-sproduct1" className="hevea-grip-Vessel-s-hg1-shop-now">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Box1Vessel;
