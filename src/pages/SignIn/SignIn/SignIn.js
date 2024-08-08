import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for holding the error message
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError(""); // Clear error when typing username
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(""); // Clear error when typing password
  };

  const isEmailValid = /^\S+@\S+\.\S+$/.test(username);
  const isFormValid = username.length >= 3 && password.length >= 3 && isEmailValid;

  const handleSignIn = async () => {
    try {
      if (!isFormValid) {
        setError("Please enter a valid email address and password.");
        return;
      }
  
      const response = await axios.post("http://176.10.229.252:3000/contact", {
        email: username,
        password: password,
      });
  
      const token = response.data.token;
      signIn(token);
      navigate("/my-account-detail");
    } catch (error) {
      setError("Invalid email address or password.");
      console.error("Error signing in:", error);
    }
  };
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const passwordHiddenIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M1.70076 8.46538L1.68687 8.4998L1.70076 8.53421C2.76864 11.1791 5.71026 13.2281 8.5026 13.2281C11.2949 13.2281 14.2366 11.1791 15.3044 8.53421L15.3183 8.4998L15.3044 8.46538C14.2366 5.82045 11.2949 3.77152 8.5026 3.77152C5.71026 3.77152 2.76864 5.82045 1.70076 8.46538ZM13.1593 4.50106C14.5237 5.46647 15.5728 6.80704 16.1773 8.35705C16.2107 8.44934 16.2107 8.55025 16.1773 8.64254C15.5728 10.1926 14.5237 11.5331 13.1593 12.4985C11.7956 13.4635 10.1768 14.0114 8.5026 14.0745C6.82844 14.0114 5.20958 13.4635 3.84587 12.4985C2.48152 11.5331 1.43237 10.1926 0.82791 8.64255C0.794503 8.55025 0.794503 8.44933 0.827912 8.35704C1.43237 6.80703 2.48152 5.46647 3.84587 4.50106C5.20958 3.53608 6.82844 2.98821 8.5026 2.92511C10.1768 2.98821 11.7956 3.53608 13.1593 4.50106Z"
        fill="#010F1E"
        stroke="#010F1E"
        stroke-width="0.183835"
      />
      <path
        d="M6.97825 6.22068C7.42908 5.91945 7.9591 5.75867 8.5013 5.75867C9.22837 5.75867 9.92566 6.04749 10.4398 6.56161C10.9539 7.07572 11.2427 7.77301 11.2427 8.50008C11.2427 9.04228 11.0819 9.57231 10.7807 10.0231C10.4795 10.474 10.0513 10.8253 9.5504 11.0328C9.04947 11.2403 8.49826 11.2946 7.96648 11.1888C7.4347 11.083 6.94622 10.8219 6.56283 10.4386C6.17944 10.0552 5.91834 9.56669 5.81256 9.0349C5.70678 8.50312 5.76107 7.95191 5.96857 7.45099C6.17606 6.95006 6.52743 6.52191 6.97825 6.22068ZM7.40083 10.1471C7.72657 10.3647 8.10954 10.4809 8.5013 10.4809C9.02665 10.4809 9.53047 10.2722 9.90194 9.90072C10.2734 9.52925 10.4821 9.02542 10.4821 8.50008C10.4821 8.10831 10.3659 7.72535 10.1483 7.3996C9.93063 7.07386 9.62127 6.81998 9.25932 6.67005C8.89738 6.52013 8.49911 6.48091 8.11487 6.55734C7.73063 6.63377 7.37768 6.82242 7.10066 7.09944C6.82364 7.37646 6.63499 7.72941 6.55856 8.11364C6.48213 8.49788 6.52135 8.89616 6.67128 9.2581C6.8212 9.62005 7.07508 9.92941 7.40083 10.1471Z"
        fill="#010F1E"
        stroke="#010F1E"
        stroke-width="0.183835"
      />
    </svg>
  );

  const passwordVisibleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M1.41536 3.73296L2.32203 2.83337L14.1654 14.6767L13.2658 15.5834L11.0841 13.4017C10.2695 13.6709 9.40536 13.8125 8.4987 13.8125C4.95703 13.8125 1.93245 11.6096 0.707031 8.50004C1.19578 7.25337 1.97495 6.15546 2.96661 5.28421L1.41536 3.73296ZM8.4987 6.37504C9.06228 6.37504 9.60279 6.59892 10.0013 6.99744C10.3998 7.39595 10.6237 7.93646 10.6237 8.50004C10.6241 8.74128 10.5833 8.98081 10.5033 9.20837L7.79036 6.49546C8.01793 6.4154 8.25746 6.37468 8.4987 6.37504ZM8.4987 3.18754C12.0404 3.18754 15.0649 5.39046 16.2904 8.50004C15.7123 9.96856 14.7299 11.2432 13.457 12.1763L12.4512 11.1634C13.4307 10.4858 14.2208 9.56895 14.7462 8.50004C14.1736 7.33125 13.2845 6.34654 12.1801 5.65786C11.0757 4.96917 9.80023 4.60412 8.4987 4.60421C7.72661 4.60421 6.9687 4.73171 6.26036 4.95837L5.16953 3.87462C6.18953 3.43546 7.31578 3.18754 8.4987 3.18754ZM2.2512 8.50004C2.82384 9.66883 3.71289 10.6535 4.8173 11.3422C5.9217 12.0309 7.19716 12.396 8.4987 12.3959C8.98745 12.3959 9.46911 12.3463 9.91536 12.2471L8.30036 10.625C7.80748 10.5722 7.34753 10.3522 6.99701 10.0017C6.64649 9.65121 6.42653 9.19126 6.3737 8.69837L3.96536 6.28296C3.26411 6.88504 2.6762 7.63587 2.2512 8.50004Z"
        fill="#010F1E"
      />
    </svg>
  );
  return (

  <div className="sign-in-page-container">
  <div className="sign-in-page-border">
    <img
      src={require("../../../assets/heveagriplogo1.png")}
      alt="Logo"
      className="sign-in-page-logo"
    />

    <div className="sign-in-page-form">
      <h1 className="sign-in-page-title">Sign In</h1>

      {error && <div className="error-message">{error}</div>} {/* Display error message if present */}

      <div className="sign-in-page-input">
        <input
          type="text"
          placeholder="Enter Your Email Address"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div className="sign-in-page-input-1">
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter Your Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="password-toggle" onClick={togglePasswordVisibility}>
          {passwordVisible ? passwordVisibleIcon : passwordHiddenIcon}
        </div>
      </div>

      <div className="sign-in-page-button">
        <button
          className={isFormValid ? "" : "disabled-button"}
          disabled={!isFormValid}
          onClick={handleSignIn}
        > 
             <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="Svg-Continue-C"
          >
            <path
              d="M22 12L18 8V11H10V13H18V16M20 18C18.7407 19.6791 16.985 20.9193 14.9817 21.5451C12.9783 22.1709 10.8288 22.1505 8.83772 21.4868C6.8466 20.8231 5.11478 19.5498 3.88758 17.8471C2.66037 16.1444 2 14.0988 2 12C2 9.90118 2.66037 7.85555 3.88758 6.1529C5.11478 4.45024 6.8466 3.17687 8.83772 2.51317C10.8288 1.84946 12.9783 1.82906 14.9817 2.45486C16.985 3.08067 18.7407 4.32094 20 6H17.27C16.1153 4.98166 14.6913 4.31814 13.1689 4.08906C11.6464 3.85997 10.0902 4.07506 8.68699 4.7085C7.28376 5.34194 6.09312 6.36683 5.25793 7.66019C4.42274 8.95354 3.9785 10.4604 3.9785 12C3.9785 13.5396 4.42274 15.0465 5.25793 16.3398C6.09312 17.6332 7.28376 18.6581 8.68699 19.2915C10.0902 19.9249 11.6464 20.14 13.1689 19.9109C14.6913 19.6819 16.1153 19.0183 17.27 18H20Z"
              fill="#010F1E"
            />
                        </svg>
          ontinue
          </button>
          </div>

          <div className="sign-in-page-forgot-1">
            <Link to="/signin/forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SignInPage;