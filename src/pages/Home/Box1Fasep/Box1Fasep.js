import React, { useRef, useEffect } from "react";
import Box1FasepImage from "../../../assets/Box1Fasep.jpg";
import "./Box1Fasep.css";

const Box1Fasep = () => {
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
    <div ref={containerRef} className="hevea-grip-Fasep-hg-container">
      <div className="hevea-grip-Fasep-hg-left">
        <div className="hevea-grip-Fasep-hg-title">Fasep</div>
        <div className="hevea-grip-Fasep-hg-big-title">
          True italian style VCO-K2{" "}
        </div>
        <div className="hevea-grip-Fasep-hg-text">
          VCO-K2 is the evolution of the Concept line, which has always been
          characterized by a modern image with a strong personality. The new,
          oversized cabinet has a design of great character and elegance, with
          functional and ergonomic elements designed for maximum
          user-friendliness. A striking, modern and elegant design to dress up
          the technology of a highly professional instrument with unmistakable
          Italian style.
          <br></br>
          <br></br>
          Practical and fast, it can be safely moved and used at any
          workstation, either on a pit or scissor lift and even on a 2-post
          lift, which is already included in the software. It is equipped with
          the legendary FASEP wheel alignment measurement system to make every
          alignment adjustment a simple, effective and accurate job.
        </div>
        <a href="/fasepproduct1" className="hevea-grip-Fasep-hg-shop-now">
          Shop Now
        </a>
      </div>
      <div className="hevea-grip-Fasep-hg-right">
        <img
          src={Box1FasepImage}
          alt="Fasep Product 1"
          className="hevea-grip-Fasep-hg-image"
        />
      </div>
    </div>
  );
};

export default Box1Fasep;
