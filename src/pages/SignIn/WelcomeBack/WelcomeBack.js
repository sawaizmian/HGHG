import React, { useEffect, useState } from "react";
import "./WelcomeBack.css";

const WelcomeBackPage = () => {
  const [isFadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500); // Wait for the fade-out transition to complete before redirecting
    }, 1000); // 1 second in milliseconds

    return () => clearTimeout(redirectTimeout); // Clear the timeout when the component unmounts
  }, []);

  return (
    <div className={`sign-in-page-container ${isFadingOut ? "fade-out" : ""}`}>
      <div className={`sign-in-page-border ${isFadingOut ? "fade-out" : ""}`}>
        <img
          src={require("../../../assets/heveagriplogo1.png")}
          alt="Logo"
          className={`sign-in-page-logo ${isFadingOut ? "fade-out" : ""}`}
        />

        <div className={`sign-in-page-form ${isFadingOut ? "fade-out" : ""}`}>
          <h1 className={`welcome-back-page-title ${isFadingOut ? "fade-out" : ""}`}>
            Welcome back to MC Type!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBackPage;
