import React, { useRef, useEffect } from "react";
import Box1DQNImage from "../../../assets/110PFC-1-DQN-DU QUESNE.jpg";
import "./Box1DQN.css";

const Box1DQN = () => {
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
    <div ref={containerRef} className="hevea-grip-DQN-s-hg-container">
      <div className="hevea-grip-DQN-s-hg-left">
        <div className="hevea-grip-DQN-s-hg-title">DQN</div>
        <div className="hevea-grip-DQN-s-hg-big-title">Pro-Fit </div>
        <div className="hevea-grip-DQN-s-hg-text">
          Our tyre changer features a powerful linear bead-breaker equipped with
          the DQN function. This innovative bead-breaker shovel comes with a
          pre-adjustment feature, ensuring the shovel maintains the desired
          position on the tyre throughout the process. The linear motion of the
          bead-breaker provides a clear visualization of its trajectory,
          significantly reducing the risk of contact between the rim and the
          shovel. This design not only enhances safety but also ensures a more
          efficient and precise tyre changing operation.
          <br></br>
          <br></br>
          The bead-breaker’s robust construction and advanced design elements
          make it an essential tool for handling a variety of tyres, including
          runflat and low profile tyres. Its ability to maintain consistent
          pressure and position on the tyre ensures that each bead-breaking
          operation is performed with maximum precision and minimal effort. This
          results in a faster, safer, and more reliable tyre changing process,
          keeping you ahead in any demanding automotive environment.
        </div>
        <a href="/DQN-sproduct1" className="hevea-grip-DQN-s-hg-shop-now">
          Shop Now
        </a>
      </div>
      <div className="hevea-grip-DQN-s-hg-right">
        <img
          src={Box1DQNImage}
          alt="DQN-s Product 1"
          className="hevea-grip-DQN-s-hg-image"
        />
      </div>
    </div>
  );
};

export default Box1DQN;
