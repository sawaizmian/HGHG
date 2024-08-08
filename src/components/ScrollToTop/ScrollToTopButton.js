import React, { useState, useEffect, useRef } from "react";
import "./scrollToTopButton.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset > 300 && window.innerHeight + window.pageYOffset < document.body.offsetHeight - 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={buttonRef}
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.31599 25.8939L18.828 11.4079C18.9526 11.2775 19.1026 11.174 19.2687 11.1039C19.4349 11.0337 19.6136 10.9983 19.794 10.9999C20.1662 10.9994 20.5235 11.146 20.788 11.4079C25.9 16.6479 30.834 21.6979 35.59 26.5579C35.824 26.8079 36.406 27.8079 35.542 28.5799C34.676 29.3519 33.922 28.8839 33.61 28.5799L19.794 14.4439L6.27599 27.9379C5.59799 28.4299 4.97199 28.3899 4.39799 27.8179C3.82399 27.2459 3.79599 26.6039 4.31599 25.8939Z"
          fill="#ffff"
        />
      </svg>
    </div>
  );
}

export default ScrollToTopButton;
