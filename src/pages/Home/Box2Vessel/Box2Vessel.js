import React, { useRef, useEffect } from "react";
import Box2VesselImage from "../../../assets/Vessel3Image.jpg";
import "./Box2Vessel.css";

const Box2Vessel = () => {
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
      <div className="hevea-grip-Vessel-s-hg1-left">
        <div className="hevea-grip-Vessel-s-hg1-title">Vessel Europe</div>
        <div className="hevea-grip-Vessel-s-hg1-big-title">
          Oil Xtra Air Screwdrivers
        </div>
        <div className="hevea-grip-Vessel-s-hg1-text">
          Vessel Europe proudly presents its Oil Xtra Air Screwdrivers, designed
          to provide smooth and stable torque fastening with significantly
          reduced noise levels. These advanced air screwdrivers feature a unique
          oil-immersed chamber that not only softens the hammering noise typical
          of air tools but also enhances durability by protecting the hammers
          and anvil from overheating and burnout. The rich oiled lubrication
          ensures efficient operation, making these tools ideal for both
          standard and tapping screw applications. The braking effect provided
          by the oil protection minimizes idle screw loosening due to inertia,
          ensuring precise and reliable performance.
          <br></br>
          <br></br>
          In adherence to international standards for noise and vibration
          measurement, Vessel Europe’s Oil Xtra Air Screwdrivers are designed to
          mitigate the impact on users. Complying with ISO 15744, ISO 8662-1,
          and ISO 28927-2, as well as JIS B7762-1 and JIS B7762-7, these tools
          are engineered to meet rigorous noise and vibration guidelines. The
          noise levels are measured and represented following A-weighted sound
          pressure levels, taking into account the human ear’s sensitivity to
          different frequencies. This meticulous approach ensures that the sound
          pressure emitted from these tools is within acceptable limits,
          providing a safer and more comfortable working environment. Vessel
          Europe continues to set the standard in tool manufacturing by
          integrating advanced technology and adhering to stringent
          international guidelines, delivering tools that combine performance,
          durability, and user comfort.
        </div>
        <a href="/DQN-sproduct1" className="hevea-grip-Vessel-s-hg1-shop-now">
          Shop Now
        </a>
      </div>
      <div className="hevea-grip-Vessel-s-hg1-right">
        <img
          src={Box2VesselImage}
          alt="DQN-s Product 1"
          className="hevea-grip-Vessel-s-hg1-image"
        />
      </div>
    </div>
  );
};

export default Box2Vessel;
