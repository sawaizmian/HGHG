import React, { useRef, useEffect, useState } from "react";
import Box1sunwatchImage from "../../../../../../assets/kroftoolsproduct1image2.jpg";
import "./DescriptionProduct1.css";

const DescriptionProduct1 = () => {
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(30); // Default discount percentage

 

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add logic to add 'quantity' number of items to cart
    console.log("Adding", quantity, "items to cart");
  };

  // Calculate discounted price
  const originalPrice = 2195; // Original price in SEK
  const formattedOriginalPrice = originalPrice.toLocaleString("se-SE");
  const discountedPrice = originalPrice - (originalPrice * discount) / 0; //Add the discount here if it 50
  const formattedDiscountedPrice = discountedPrice.toLocaleString("se-SE");

  return (
    <div ref={containerRef} className="hevea-grip-sunwatch-hg-container">
      <div className="hevea-grip-sunwatch-hg-left">
        <div className="hevea-grip-sunwatch-hg-title">KrofTools</div>
        <div className="hevea-grip-sunwatch-hg-big-title">
          Pneumatic Machine 1112/1756nm Set
        </div>
        <div className="hevea-grip-sunwatch-hg-text">
          Introducing the Pneumatic Machine 1112/1756Nm Set, engineered for
          precision and power. Crafted with a durable composite housing, it
          boasts a Twin Hammer mechanism for optimal performance. Featuring
          intuitive Thumb Operated Forward and Reverse switches and a Variable
          Speed Trigger, this tool ensures effortless operation and versatility
          in any task. With a speed of 8,000rpm and a tightening force of
          1112Nm, it delivers exceptional torque for various applications. Its
          robust design and ergonomic features make it suitable for heavy-duty
          tasks. Equipped with a comprehensive set of accessories, including Hex
          wrench keys and impact sockets, it offers convenience and efficiency.
          Plus, with low sound emissions and efficient air consumption, it
          guarantees a quieter and more environmentally friendly working
          environment. Elevate your projects with the Pneumatic Machine
          1112/1756Nm Set—where power meets precision.
          <br />
          <br />
          <div className="hevea-grip-sunwatch-hg-text-2">
            <ul>
              <li>Composite housing</li>
              <li>Twin Hammer</li>
              <li>Thumb Operated Forward and Reverse switches</li>
              <li>Variable Speed Trigger</li>
            </ul>
            <ul>
              <li>Speed: 8,000rpm</li>
              <li>Tightening force: 1112nm</li>
              <li>Force (max) release: 1756nm</li>
              <li>Square: 1/2 “(13mm)</li>
              <li>Air consumption: 113l / m</li>
              <li>Air intake: 1/4 “</li>
              <li>Sound Pressure: 92.4dB(A)</li>
              <li>Sound Power: 103.4dB(A)</li>
            </ul>
          </div>
        </div>
        <div className="price-tag-113">
          <div className="original-price-113">
            Price Excl. VAT: 
            <span className="original-price-value-113">
              {formattedOriginalPrice} SEK
            </span>
          </div>
          {/* <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sale-original-price-value-113"
          >
            <path
              d="M13.101 2.07273C13.4032 1.73521 13.7732 1.46522 14.1868 1.28038C14.6004 1.09554 15.0484 1 15.5014 1C15.9545 1 16.4024 1.09554 16.816 1.28038C17.2296 1.46522 17.5996 1.73521 17.9018 2.07273L19.0295 3.33254C19.3519 3.6926 19.751 3.97554 20.1975 4.16043C20.644 4.34532 21.1263 4.42742 21.6088 4.40064L23.3003 4.3072C23.7528 4.28226 24.2054 4.35304 24.6286 4.5149C25.0519 4.67677 25.4362 4.92608 25.7566 5.24657C26.0769 5.56706 26.326 5.95151 26.4877 6.37482C26.6494 6.79814 26.7199 7.25079 26.6948 7.70322L26.6013 9.39317C26.5748 9.8754 26.657 10.3574 26.8419 10.8036C27.0268 11.2498 27.3096 11.6487 27.6694 11.9708L28.9292 13.0985C29.267 13.4007 29.5372 13.7708 29.7222 14.1846C29.9072 14.5983 30.0029 15.0465 30.0029 15.4997C30.0029 15.953 29.9072 16.4011 29.7222 16.8149C29.5372 17.2286 29.267 17.5987 28.9292 17.9009L27.6694 19.0286C27.3094 19.351 27.0264 19.7501 26.8415 20.1966C26.6566 20.6431 26.5745 21.1254 26.6013 21.6079L26.6948 23.2994C26.7197 23.7519 26.6489 24.2045 26.4871 24.6277C26.3252 25.051 26.0759 25.4353 25.7554 25.7557C25.4349 26.076 25.0504 26.3251 24.6271 26.4868C24.2038 26.6485 23.7512 26.719 23.2987 26.6939L21.6088 26.6004C21.1266 26.5739 20.6445 26.6561 20.1984 26.841C19.7522 27.0259 19.3533 27.3087 19.0312 27.6685L17.9035 28.9283C17.6012 29.2661 17.2312 29.5363 16.8174 29.7213C16.4036 29.9063 15.9555 30.002 15.5022 30.002C15.049 30.002 14.6008 29.9063 14.1871 29.7213C13.7733 29.5363 13.4032 29.2661 13.101 28.9283L11.9733 27.6685C11.651 27.3085 11.2518 27.0255 10.8054 26.8406C10.3589 26.6557 9.87657 26.5736 9.39407 26.6004L7.70251 26.6939C7.25007 26.7188 6.79745 26.648 6.37421 26.4862C5.95098 26.3243 5.56664 26.075 5.2463 25.7545C4.92597 25.434 4.67683 25.0495 4.51517 24.6262C4.35351 24.2029 4.28295 23.7503 4.3081 23.2978L4.40154 21.6079C4.42807 21.1257 4.34586 20.6436 4.16098 20.1975C3.97609 19.7513 3.69328 19.3524 3.33344 19.0303L2.07363 17.9026C1.73585 17.6003 1.46563 17.2303 1.28063 16.8165C1.09563 16.4027 1 15.9546 1 15.5013C1 15.0481 1.09563 14.5999 1.28063 14.1862C1.46563 13.7724 1.73585 13.4023 2.07363 13.1001L3.33344 11.9724C3.6935 11.6501 3.97644 11.2509 4.16133 10.8045C4.34622 10.358 4.42832 9.87567 4.40154 9.39317L4.3081 7.70161C4.2834 7.2493 4.35434 6.79686 4.51631 6.37381C4.67828 5.95077 4.92764 5.56664 5.2481 5.24648C5.56856 4.92632 5.95293 4.67733 6.37613 4.51577C6.79932 4.3542 7.25183 4.28368 7.70412 4.30882L9.39407 4.40225C9.8763 4.42878 10.3583 4.34657 10.8045 4.16169C11.2507 3.97681 11.6496 3.69399 11.9717 3.33415L13.101 2.07273Z"
              stroke="black"
            />
            <path
              d="M11.4746 11.4731H11.4907V11.4893H11.4746V11.4731ZM19.5297 19.5282H19.5458V19.5443H19.5297V19.5282Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M20.336 10.6677L10.6699 20.3338"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> */}

          {/* {discount > 0 && (
            <div className="discounted-price-113">
              <span className="discounted-price-value-113">
                {formattedDiscountedPrice} SEK
              </span>
            </div>
          )} */}
        </div>
        <div className="add-to-cart-quanity-11">
          <div className="quantity-control-12">
            <div onClick={decrementQuantity}>-</div>
            <span>{quantity}</span>
            <div onClick={incrementQuantity}>+</div>
          </div>
          <button
            className="add-to-cart-button-product-5"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="hevea-grip-sunwatch-hg-right">
        <img
          src={Box1sunwatchImage}
          alt="sunwatc Product 1"
          className="hevea-grip-sunwatch-hg-image"
        />
      </div>
    </div>
  );
};

export default DescriptionProduct1;
