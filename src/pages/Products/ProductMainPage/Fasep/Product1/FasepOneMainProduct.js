import React, { useState, useRef, useEffect } from "react";
import "./FasepOneMainProduct.css";

const BidImageDetail = ({currentProduct}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0); // State to track active image
  const [isFullscreen, setIsFullscreen] = useState(false); //State to track fullscreen mode

  const imageContainerRef = useRef(null);

  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    // Load product images when component mounts or when product changes
    console.log(currentProduct);
    loadProductImages();
  }, []);

  const loadProductImages = () => {
    const productID = 1;
    const images = [
      require(`../../../../../assets/kroftoolsproduct${productID}image1.jpg`),
      require(`../../../../../assets/kroftoolsproduct${productID}image7.jpg`),
      require(`../../../../../assets/kroftoolsproduct${productID}image4.jpg`),
      require(`../../../../../assets/kroftoolsproduct${productID}image5.jpg`),
      require(`../../../../../assets/kroftoolsproduct${productID}image6.jpg`),
      // Add more images here if needed
    ];
    setProductImages(images);
    setActiveIndex(0); // Reset active index when product changes
  };

  useEffect(() => {
    if (imageContainerRef.current) {
      // Calculate the new startIndex to keep the active image in the visible range
      const newStartIndex = Math.max(
        0,
        Math.min(activeIndex, productImages.length - 4)
      );
      setStartIndex(newStartIndex);
    }
  }, [activeIndex, productImages.length]);

  const handleImageClick = (index) => {
    setActiveIndex(index); // Set clicked image as active
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageFullscreen = (index) => {
    setIsFullscreen(true);
    setActiveIndex(index); // Set the active index to the clicked image
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleMouseMove = (e) => {
    const magnifier = document.querySelector(".magnifier");
    if (magnifier) {
      const image = e.target.closest(".center-image");
      if (image) {
        const { left, top, width, height } = image.getBoundingClientRect();
        const x = e.pageX - left;
        const y = e.pageY - top;

        const magnifierWidth = magnifier.offsetWidth;
        const magnifierHeight = magnifier.offsetHeight;

        const backgroundX = (x / width) * 100;
        const backgroundY = (y / height) * 100;

        magnifier.style.left = `${x - magnifierWidth / 2}px`;
        magnifier.style.top = `${y - magnifierHeight / 2}px`;
        magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
      }
    }
  };

  const old =  (
    <div
      className={`bid-type-image-detail-container${
        isFullscreen ? " fullscreen" : ""
      }`}
    >
      <div className="Product-page-name-left-two">
        KrofTools
        <br></br>
        Pneumatic Machine 1112/1756nm Set
      </div>
      <div class="discounted-price-1134">
        <div class="discounted-price-113412">
          <span class="discounted-price-value-113412">2195</span>
        </div>
        <span class="discounted-price-value-1134">
          Price Excl. VAT: 2 195 SEK
        </span>
      </div>
      <div className="image-boxes" ref={imageContainerRef}>
        <div className="arrow-container">
          <svg
            width="73"
            height="73"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow left-arrow"
            onClick={handlePrevClick}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.31053 47.2563L33.7949 20.8194C34.0223 20.5814 34.2961 20.3926 34.5993 20.2645C34.9025 20.1365 35.2288 20.0719 35.5579 20.0748C36.2371 20.0738 36.8892 20.3415 37.3719 20.8194C46.7013 30.3824 55.7059 39.5986 64.3856 48.4681C64.8126 48.9244 65.8748 50.7494 64.298 52.1583C62.7175 53.5672 61.3415 52.7131 60.7721 52.1583L35.5579 26.3601L10.8875 50.9866C9.65018 51.8845 8.50773 51.8115 7.46018 50.7676C6.41263 49.7237 6.36153 48.5521 7.31053 47.2563Z"
              fill="#C9181E"
            />
          </svg>

          {productImages
            .slice(startIndex, startIndex + 4)
            .map((image, index) => (
              <div
                key={startIndex + index}
                className={`image-box${
                  activeIndex === startIndex + index ? " active" : ""
                }`}
                onClick={() => handleImageClick(startIndex + index)}
              >
                <img
                  src={image}
                  alt="Image"
                  className="images-in-box"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            ))}

          <svg
            width="73"
            height="73"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow right-arrow"
            onClick={handleNextClick}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M65.6895 25.7434L39.2051 52.1804C38.9777 52.4183 38.7039 52.6072 38.4007 52.7352C38.0975 52.8633 37.7712 52.9279 37.4421 52.925C36.7629 52.9259 36.1108 52.6583 35.6281 52.1804C26.2987 42.6174 17.2941 33.4011 8.61441 24.5316C8.18736 24.0754 7.12521 22.2504 8.70201 20.8415C10.2825 19.4326 11.6585 20.2867 12.2279 20.8415L37.4421 46.6397L62.1125 22.0131C63.3498 21.1152 64.4923 21.1882 65.5398 22.2321C66.5874 23.276 66.6385 24.4477 65.6895 25.7434Z"
              fill="#C9181E"
            />
          </svg>
        </div>{" "}
      </div>

      <div className="center-image-container" onMouseMove={handleMouseMove}>
        {productImages.length > 0 && (
          <img
            src={productImages[activeIndex]}
            alt="Image"
            className="center-image"
            onClick={() => handleImageFullscreen(activeIndex)}
          />
        )}

        <div
          className="magnifier"
          style={{ backgroundImage: `url(${productImages[activeIndex]})` }}
        ></div>
      </div>
      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img
            src={productImages[activeIndex]}
            alt="Fullscreen Image"
            className="fullscreen-image"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fullscreen-svg-121"
          >
            <path
              d="M23.8149 22.9213C23.9334 23.0398 24 23.2005 24 23.3681C24 23.5357 23.9334 23.6964 23.8149 23.8149C23.6964 23.9334 23.5357 24 23.3681 24C23.2005 24 23.0398 23.9334 22.9213 23.8149L12 12.8937L1.07874 23.8149C0.960234 23.9334 0.799505 24 0.631912 24C0.464318 24 0.303589 23.9334 0.185083 23.8149C0.0665765 23.6964 3.30366e-09 23.5357 0 23.3681C-3.30367e-09 23.2005 0.0665759 23.0398 0.185082 22.9213L11.1063 12L0.185082 1.07874C0.0665759 0.960234 0 0.799505 0 0.631912C0 0.464318 0.0665759 0.303589 0.185082 0.185082C0.303589 0.0665759 0.464318 0 0.631912 0C0.799505 0 0.960234 0.0665759 1.07874 0.185082L12 11.1063L22.9213 0.185082C22.9799 0.126404 23.0496 0.0798577 23.1263 0.0481011C23.2029 0.0163446 23.2851 1.63581e-09 23.3681 0C23.4511 -1.63581e-09 23.5332 0.0163446 23.6099 0.0481011C23.6866 0.0798577 23.7562 0.126404 23.8149 0.185082C23.8736 0.243761 23.9201 0.313422 23.9519 0.390089C23.9837 0.466756 24 0.548928 24 0.631912C24 0.714895 23.9837 0.797067 23.9519 0.873734C23.9201 0.950401 23.8736 1.02006 23.8149 1.07874L12.8937 12L23.8149 22.9213Z"
              fill="#828282"
            />
          </svg>{" "}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
};

export default BidImageDetail;
