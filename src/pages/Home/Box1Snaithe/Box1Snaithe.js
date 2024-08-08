import React, { useRef, useEffect } from "react";
import Box1SnaitheImage from "../../../assets/box1snaithehg.jpg";
import "./Box1Snaithe.css";

const Box1Snaithe = () => {
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
    <div ref={containerRef} className="hevea-grip-snaithe-hg-container">
      <div className="hevea-grip-snaithe-hg-left">
        <div className="hevea-grip-snaithe-hg-title">Snáithe</div>
        <div className="hevea-grip-snaithe-hg-big-title">
          Flush-mount alignment scissor lift
        </div>
        <div className="hevea-grip-snaithe-hg-text">
          <ul>
            <li>
              Dual synchronous cylinders are applied to assure the lifting level
              on both runways.
            </li>
            <li>Electro-air control system, mechanical safety locks.</li>
            <li>Integrated rear slip-plates.</li>
            <li>
              Heavy duty design, the X serial scissors lifts use large steel
              tube to make it strong and assure the runways remain level during
              working.
            </li>
            <li>Optional Turnplate.</li>
            <li>Lifting capacity 5 Ton.</li>
          </ul>
        </div>
        <a href="/fasepproduct1" className="hevea-grip-snaithe-hg-shop-now">
          Shop Now
        </a>
      </div>
      <div className="hevea-grip-snaithe-hg-right">
        <img
          src={Box1SnaitheImage}
          alt="Snaithe Product 1"
          className="hevea-grip-snaithe-hg-image"
        />
      </div>
    </div>
  );
};

export default Box1Snaithe;
