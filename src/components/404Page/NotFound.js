import React from "react";
import "./404.css";

const NotFound = () => {
  return (
    <div className="error-1-page-container">
      <div className="error-1-page-content">
        <h1 className="error-1-page-title">404</h1>
        <p className="error-1-page-text">
          We apologize for the inconvenience. The page you are trying to access
          cannot be found. It appears that the URL may be misspelled or the page
          has been removed. Please double-check the URL or return to our
          homepage to explore more. Thank you for your understanding.
        </p>
        <button
          className="error-1-page-button"
          onClick={() => (window.location.href = "/bid-type/frontend")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
