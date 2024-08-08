import React, { useRef, useEffect } from "react";
import Box3FasepImage from "../../../assets/Box2Fasep.jpg";
import "./Box3Fasep.css";

const Box3Fasep = () => {
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
    <div ref={containerRef} className="hevea-grip-three-fasep-hg-container">
      <div className="hevea-grip-three-fasep-hg-left">
        <div className="hevea-grip-three-fasep-hg-title">Fasep</div>
        <div className="hevea-grip-three-fasep-hg-big-title">DIAG L2 </div>
        <div className="hevea-grip-three-fasep-hg-text">
          The new generation of professional compact scanners. This tool has
          simplified and intuitive menus for ease of use. Suitable for emergency
          response or fast-fit, DIAG L2 is always capable of handling the task
          at hand.
          <ul>
      <li>Screen: 8-inch HD high-resolution LCD (touch screen)</li>
      <li>Camera: front and rear cameras</li>
      <li>Operating system: Android 10.0</li>
      <li>Processor: 2.0 GHz Quad Core, with 32 GB of memory integration</li>
      <li>Camera: rear 8.0 megapixels</li>
      <li>Battery: rechargeable lithium polymer battery 3000mAh</li>
      <li>Screen size and resolution: 1280x800, 2.4 and 5 GHz</li>
      <li>Weight: 1.18kg</li>
      <li>28 maintenance functions</li>
      <li>22 Languages</li>
    </ul>

        </div>
        <a href="/fasepproduct1" className="hevea-grip-three-fasep-hg-shop-now">
          Shop Now
        </a>
      </div>
      <div className="hevea-grip-three-fasep-hg-right">
        <img
          src={Box3FasepImage}
          alt="Fasep Product 1"
          className="hevea-grip-three-fasep-hg-image"
        />
      </div>
    </div>
  );
};

export default Box3Fasep;
