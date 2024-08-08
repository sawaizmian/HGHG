import React, { useRef, useEffect } from "react";
import Box1KrofTools22 from "../../../assets/kroftoolsproduct1image2.jpg";
import "./Box1KrofTools.css";

const Box1KrofTools = () => {
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
      className="hevea-grip-Box1SnaitheKrofTools22-jm-container"
    >
      <div className="hevea-grip-Box1SnaitheKrofTools22-jm-right">
        <img
          src={Box1KrofTools22}
          alt="Box1Image"
          className="hevea-grip-Box1SnaitheKrofTools22-jm-image"
        />
      </div>
      <div className="hevea-grip-Box1SnaitheKrofTools22-jm-left">
        <div className="hevea-grip-Box1SnaitheKrofTools22-jm-title">
          KrofTools
        </div>
        <div className="hevea-grip-Box1SnaitheKrofTools22-jm-big-title">
          Pneumatic Machine 1112/1756NM{" "}
        </div>
        <div className="hevea-grip-Box1SnaitheKrofTools22-jm-text">
          Introducing the Pneumatic Machine 1112/1756NM Set, a powerhouse of
          efficiency and precision engineered for professional use. Boasting a
          composite housing for durability, this tool features a Twin Hammer
          mechanism for optimal performance. With thumb-operated forward and
          reverse switches and a variable speed trigger, it offers unparalleled
          control. Operating at 8,000rpm, it delivers a tightening force of
          1112nm and a maximum release force of 1756nm, ensuring secure and
          reliable fastening. Equipped with a 1/2” square drive and consuming
          113l/m of air, it handles tasks with ease. Its 1/4” air intake
          minimizes air loss, while sound pressure levels of 92.4dB(A) and sound
          power levels of 103.4dB(A) maintain a comfortable working environment.
          The set includes a comprehensive array of accessories, including 10
          hex wrench keys ranging from 9mm to 27mm, an impact extension, and an
          Umbrako L socket, catering to diverse needs with efficiency and
          precision.
        </div>
        <a
          href="/fasepproduct1"
          className="hevea-grip-Box1SnaitheKrofTools22-jm-shop-now"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Box1KrofTools;
