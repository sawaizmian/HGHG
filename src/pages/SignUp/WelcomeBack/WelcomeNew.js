import React, { useEffect, useState } from "react";
import "./WelcomeNew.css";

const WelcomePage = () => {
  const [isFadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000); // Wait for the fade-out transition to complete before redirecting
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
          <h1 className={`welcome-back-new-page-title ${isFadingOut ? "fade-out" : ""}`}>
          Welcome to MC Type!          </h1>
          <h1 className={`welcome-back-new-page-sub ${isFadingOut ? "fade-out" : ""}`}>
          Check your email for your Username ID
Use it to sign in to your account          </h1>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
