import React from "react";
import { Parallax } from "react-parallax";
import BackImage3HG from '../../../assets/box3back.jpg';

const BackImage3 = () => {
  const getStrength = () => {
    if (window.innerWidth <= 430) {
      return 80;
    }
    return 600;
  };

  const getHeight = () => {
    if (window.innerWidth <= 430) {
      return "200px";
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
    <Parallax bgImage={BackImage3HG} strength={initialStrength}>
      <div id="parallax-container" style={{ height: initialHeight }}></div>
    </Parallax>
  );
};

export default BackImage3;
