import React, { useState } from "react";
import "./allcompare.css";

// Import product images
import AllProductImage1 from "../../../assets/productimage1.jpg";
import AllProductImage2 from "../../../assets/productimage2.jpg";
import AllProductImage3 from "../../../assets/微信图片_2023071809074866.jpg";
import AllProductImage4 from "../../../assets/productimage3.jpg";

const AllCompare = () => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToWishlist = (productName) => {
    setWishlistItems([...wishlistItems, productName]);
    alert(`Added ${productName} to wishlist`);
  };

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart`);
  };

  return (
    <div className="allcompare-container">
      <div className="Compare-Products-Titles">Compare (4)</div>

      <div className="allcompare-one-page-hg-1">
        <a href={`/fasepproduct1`} className="product-link">
          <div
            className="hg-compare-product-card"
            onMouseEnter={() => setShowWishlist(true)}
            onMouseLeave={() => setShowWishlist(false)}
          >
            <img
              src={AllProductImage1}
              alt="Product1"
              className="product-image"
            />

            {/* This is just a placeholder. Replace with your actual product data */}
            <div className="hg-compare-product-name">Fasep Fiap F1</div>
            <div className="hg-compare-price-container">
            <div className="hg-price-label-1">Contact For Price</div> 
            </div>
            <button
              onClick={() => handleAddToCart(`Product 1`)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        </a>

        <div className="packages-hg-graphic-box packages-hg-graphic-box-3">
          <h2 className="FullPackage-hg-graphic-boxes-title">Fasep Fiap F1</h2>

          <div className="FullPackage-hg-graphic-boxes-title-55">CPU</div>
          <ul>
            <li>Automatic insertion of 3D wheel data via laser</li>
            <li>Point laser for applying adhesive weights</li>
            <li>
              TOP LIGHT system for lighting the work area and line laser for
              applying clip weights
            </li>
            <li>Electro-pneumatic wheel locking</li>
            <li>
              3D.Wall system for measuring the tread profile and the
              eccentricity of the rim and tire (the network connection allows
              you to benefit from the National Industry 4.0 Plan)
            </li>
            <li>FASEP TriSensor 3 Piezo balancing system</li>
            <li>IFS (integrated motor-flange assembly)</li>
            <li>16-bit electronics</li>
            <li>Low-speed motor 98 rpm</li>
            <li>Second Generation 22" 16:9 Touch LCD monitor</li>
          </ul>
          <br></br>
          <div className="FullPackage-hg-graphic-boxes-title-55">Cooling</div>
          <ul>
            <li>Automatic insertion of 3D wheel data via laser</li>
            <li>Point laser for applying adhesive weights</li>
            <li>
              TOP LIGHT system for lighting the work area and line laser for
              applying clip weights
            </li>
            <li>Electro-pneumatic wheel locking</li>
            <li>
              3D.Wall system for measuring the tread profile and the
              eccentricity of the rim and tire (the network connection allows
              you to benefit from the National Industry 4.0 Plan)
            </li>
            <li>FASEP TriSensor 3 Piezo balancing system</li>
            <li>IFS (integrated motor-flange assembly)</li>
            <li>16-bit electronics</li>
            <li>Low-speed motor 98 rpm</li>
            <li>Second Generation 22" 16:9 Touch LCD monitor</li>
          </ul>
        </div>

        <div className="packages-contact-price-3">Contact For Price</div>
      </div>
      <div className="allcompare-one-page-hg-2">
        <a href={`/fasepproduct1`} className="product-link">
          <div
            className="hg-compare-product-card"
            onMouseEnter={() => setShowWishlist(true)}
            onMouseLeave={() => setShowWishlist(false)}
          >
            <img
              src={AllProductImage2}
              alt="Product2"
              className="product-image"
            />

            {/* This is just a placeholder. Replace with your actual product data */}
            <div className="hg-compare-product-name">Fasep Tire Changer</div>
            <div className="hg-compare-price-container">
              <div className="hg-price-label-1">Contact For Price</div>
            </div>
            <button
              onClick={() => handleAddToCart(`Product 2`)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        </a>{" "}
        <div className="packages-hg-graphic-box packages-hg-graphic-box-3">
          <h2 className="FullPackage-hg-graphic-boxes-title">
            Fasep Tire Changer
          </h2>
          <div className="FullPackage-hg-graphic-boxes-title-55">CPU</div>
          <ul>
            <li>Automatic insertion of 3D wheel data via laser</li>
            <li>Point laser for applying adhesive weights</li>
            <li>
              TOP LIGHT system for lighting the work area and line laser for
              applying clip weights
            </li>
            <li>Electro-pneumatic wheel locking</li>
            <li>
              3D.Wall system for measuring the tread profile and the
              eccentricity of the rim and tire (the network connection allows
              you to benefit from the National Industry 4.0 Plan)
            </li>
            <li>FASEP TriSensor 3 Piezo balancing system</li>
            <li>IFS (integrated motor-flange assembly)</li>
            <li>16-bit electronics</li>
            <li>Low-speed motor 98 rpm</li>
            <li>Second Generation 22" 16:9 Touch LCD monitor</li>
          </ul>
          <br></br>
          <div className="FullPackage-hg-graphic-boxes-title-55">Cooling</div>
          <ul>
            <li>Automatic insertion of 3D wheel data via laser</li>
            <li>Point laser for applying adhesive weights</li>
            <li>
              TOP LIGHT system for lighting the work area and line laser for
              applying clip weights
            </li>
            <li>Electro-pneumatic wheel locking</li>
            <li>
              3D.Wall system for measuring the tread profile and the
              eccentricity of the rim and tire (the network connection allows
              you to benefit from the National Industry 4.0 Plan)
            </li>
            <li>FASEP TriSensor 3 Piezo balancing system</li>
            <li>IFS (integrated motor-flange assembly)</li>
            <li>16-bit electronics</li>
            <li>Low-speed motor 98 rpm</li>
            <li>Second Generation 22" 16:9 Touch LCD monitor</li>
          </ul>
          <br></br>
          <div className="FullPackage-hg-graphic-boxes-title-55">Graphic</div>
          <ul>
            <li>Automatic insertion of 3D wheel data via laser</li>
            <li>Point laser for applying adhesive weights</li>
            <li>
              TOP LIGHT system for lighting the work area and line laser for
              applying clip weights
            </li>
            <li>Electro-pneumatic wheel locking</li>
            <li>
              3D.Wall system for measuring the tread profile and the
              eccentricity of the rim and tire (the network connection allows
              you to benefit from the National Industry 4.0 Plan)
            </li>
            <li>FASEP TriSensor 3 Piezo balancing system</li>
            <li>IFS (integrated motor-flange assembly)</li>
            <li>16-bit electronics</li>
            <li>Low-speed motor 98 rpm</li>
            <li>Second Generation 22" 16:9 Touch LCD monitor</li>
          </ul>
        </div>{" "}
        <div className="packages-contact-price-3">Contact For Price</div>
      </div>
      <div className="allcompare-one-page-hg-3">
        <a href={`/fasepproduct1`} className="product-link">
          <div
            className="hg-compare-product-card"
            onMouseEnter={() => setShowWishlist(true)}
            onMouseLeave={() => setShowWishlist(false)}
          >
            <img
              src={AllProductImage3}
              alt="Product3"
              className="product-image"
            />

            {/* This is just a placeholder. Replace with your actual product data */}
            <div className="hg-compare-product-name">Snáithe Charger 3-Fas</div>
            <div className="hg-compare-price-container">
              <div className="hg-price-label-1">Contact For Price</div>
            </div>
            <button
              onClick={() => handleAddToCart(`Product 3`)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        </a>{" "}
        <div className="packages-hg-graphic-box packages-hg-graphic-box-3">
          <h2 className="FullPackage-hg-graphic-boxes-title">
            Snáithe Charger 3-Fas
          </h2>
          <div className="FullPackage-hg-graphic-boxes-title-55">Specs</div>
          <ul>
            <li>Model: ARR-W11C-S</li>
            <li>Max power: 11kW</li>
            <li>Display: 4.3 inch LCD display</li>
            <li>Charging Control: APP(Default)/Plug and Play/RFID Card</li>
            <li>
              Communication: WiFi/Bluetooth/RS 485/4G(Optional)/OCPP(Optional)
            </li>
            <li>Ingress protection: IP 65</li>
            <li>
              Installation: wall-mounted or floor-standing with additional pole
            </li>
            <li>Warranty: 1 year</li>
            <li>CE and RoHS listed</li>
            <li>
              Lead time: 7 days for sample order and 15 days for massive
              production
            </li>
          </ul>
        </div>{" "}
        <div className="packages-contact-price-3">Contact For Price</div>
      </div>
      <div className="allcompare-one-page-hg-4">
        <a href={`/fasepproduct1`} className="product-link">
          <div
            className="hg-compare-product-card"
            onMouseEnter={() => setShowWishlist(true)}
            onMouseLeave={() => setShowWishlist(false)}
          >
            <img
              src={AllProductImage4}
              alt="Product4"
              className="product-image"
            />

            {/* This is just a placeholder. Replace with your actual product data */}
            <div className="hg-compare-product-name">AVL DITEST A210</div>
            <div className="hg-compare-price-container">
              <div className="hg-price-label-1">Contact For Price</div>
            </div>
            <button
              onClick={() => handleAddToCart(`Product 4`)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        </a>{" "}
        <div className="packages-hg-graphic-box packages-hg-graphic-box-3">
          <h2 className="FullPackage-hg-graphic-boxes-title">
            AVL DITEST A210
          </h2>
          <div className="FullPackage-hg-graphic-boxes-title-55">CPU</div>
          <ul>
            <li>Movable metal rig</li>
            <li>15" touch display</li>
            <li>4.5m service hoses</li>
            <li>Thermal printer</li>
            <li>26L tank volume</li>
          </ul>
          <br></br>
          <div className="FullPackage-hg-graphic-boxes-title-55">Cooling</div>
          <ul>
            <li>Fully automatic operation for a quick and easy service</li>
            <li>
              Manual operation for maintenance work on air-conditioning
              technology
            </li>
            <li>Vehicle selection from an extensive database</li>
            <li>Automatic pressure test</li>
            <li>Leak detection using contrast or nitrogen (Optional)</li>
            <li>Flushing functions (optional)</li>
          </ul>{" "}
          <br></br>
          <div className="FullPackage-hg-graphic-boxes-title-55">Graphic</div>
          <ul>
            <li>Automatic insertion of 3D wheel data via laser</li>
            <li>Point laser for applying adhesive weights</li>
            <li>
              TOP LIGHT system for lighting the work area and line laser for
              applying clip weights
            </li>
            <li>Electro-pneumatic wheel locking</li>
            <li>
              3D.Wall system for measuring the tread profile and the
              eccentricity of the rim and tire (the network connection allows
              you to benefit from the National Industry 4.0 Plan)
            </li>
            <li>FASEP TriSensor 3 Piezo balancing system</li>
            <li>IFS (integrated motor-flange assembly)</li>
            <li>16-bit electronics</li>
            <li>Low-speed motor 98 rpm</li>
            <li>Second Generation 22" 16:9 Touch LCD monitor</li>
          </ul>{" "}
          <br></br>
          <div className="FullPackage-hg-graphic-boxes-title-55">Cooling</div>
          <ul>
            <li>Model: ARR-W11C-S</li>
            <li>Max power: 11kW</li>
            <li>Display: 4.3 inch LCD display</li>
            <li>Charging Control: APP(Default)/Plug and Play/RFID Card</li>
            <li>
              Communication: WiFi/Bluetooth/RS 485/4G(Optional)/OCPP(Optional)
            </li>
            <li>Ingress protection: IP 65</li>
            <li>
              Installation: wall-mounted or floor-standing with additional pole
            </li>
            <li>Warranty: 1 year</li>
          </ul>{" "}
        </div>
        <div className="packages-contact-price-3">Contact For Price</div>
      </div>
    </div>
  );
};

export default AllCompare;
