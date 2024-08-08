import React, { useRef, useEffect } from "react";
import Box1cascosImage from "../../../assets/box1cascos.jpg";
import "./Box1Cascos.css";

const Box1Cascos = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="hevea-grip-cascos-jm-container">
      <div className="hevea-grip-cascos-jm-right">
        <img
          src={Box1cascosImage}
          alt="Cascos Product 1"
          className="hevea-grip-cascos-jm-image"
        />
      </div>
      <div className="hevea-grip-cascos-jm-left">
        <div className="hevea-grip-cascos-jm-title">Cascos</div>
        <div className="hevea-grip-cascos-jm-big-title">
          2 post lifts: 3,5 Tn. C3.5 with solid base (4 triple arms)
        </div>
        <div className="hevea-grip-cascos-jm-text">
          With the advantages of the robustness and durability of 3.5 Ton, this
          model has 4 triple extension arms, which make it possible to retract
          the arms to lift very short cars (e.g. Smart) or extend the 4 arms
          further than other models, so even small and medium vans can be
          lifted. For people who want an almost all-purpose lift
          <br></br>
          <br></br>
          <ul>
            <li>Solidity, reliability, and durability.</li>
            <li>Versatility for mechanical and bodywork tasks.</li>
            <li>Ample working space between posts.</li>
            <li>
              Reversibility: Cascos lifts make it possible to lift the vehicle
              in both directions, facilitating use in garages with less space.
            </li>
            <li>Minimum maintenance.</li>
            <li>
              Spare parts: extensive availability of low-cost spare parts that
              are supplied quickly.
            </li>
            <li>
              Accessories: wide variety of accessories for greater user comfort
              and work with special vehicles.
            </li>
          </ul>
        </div>
        <a href="/fasepproduct1" className="hevea-grip-cascos-jm-shop-now">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Box1Cascos;
