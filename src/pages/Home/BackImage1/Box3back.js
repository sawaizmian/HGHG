import React from "react";
import { Parallax } from "react-parallax";
import Box3BackImg from '../../../assets/box1back1.jpg';

const Box2Back2 = () => {
  const getStrength = () => {
    if (window.innerWidth <= 430) {
      return 80;
    }
    return 900;
  };

  const getHeight = () => {
    if (window.innerWidth <= 430) {
      return "220px";
    }
    return "50vh";
  };

  const handleResize = () => {
    // Update the component when window is resized
    // Adjusting the height and strength dynamically based on window width
    const height = getHeight();
    const strength = getStrength();
    document.getElementById("parallax-container").style.height = height;
    // If you want to change the strength dynamically, you'll need to use state and update the Parallax component directly.
    // For this example, I'll just set it in the initial render.
    // You might need to use state and useEffect for this if it needs to be dynamic on resize.
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const initialStrength = getStrength();
  const initialHeight = getHeight();

  return (
    <Parallax bgImage={Box3BackImg} strength={initialStrength}>
      <div id="parallax-container" style={{ height: initialHeight }}></div>
    </Parallax>
  );
};

export default Box2Back2;
