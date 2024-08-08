import React, { useState, useRef } from 'react';
import './Verify6Digit.css'; // Make sure to import your main CSS file

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [isContinueClicked, setIsContinueClicked] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const isVerifyButtonEnabled = verificationCode.every(code => code.length === 1);

  const handleVerificationCodeChange = (e, index) => {
    const inputCode = e.target.value.replace(/\D/g, ''); // Allow only digits
    setVerificationCode((prevCodes) => {
      const newCodes = [...prevCodes];
      newCodes[index] = inputCode;
      return newCodes;
    });
  };

  const handleInputFocus = (index) => {
    if (index === 0 || verificationCode[index - 1].length === 1) {
      inputRefs[index].current.focus();
    } else {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.key === 'Backspace' || e.keyCode === 37) {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else if (e.key !== 'Backspace' && e.key.length === 1 && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Update isCodeCorrect when all digits are entered
  React.useEffect(() => {
    setIsCodeCorrect(verificationCode.join('') === '786786');
  }, [verificationCode]);

  return (
    <div className="forgot-password-page-container">
      <div className="forgot-password-page-border">
        <img
          src={require("../../../assets/heveagriplogo1.png")}
          alt="Logo"
          className="forgot-password-page-logo"
        />
          <div className="verification-container">
            <p className="verification-text">
              Please enter the 6-digit verification code sent to your email
            </p>
            <div className="code-input-container">
              <div className="code-lines">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="code-line"></div>
                ))}
              </div>
              <div className="code-numbers">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="code-number"
                    ref={inputRefs[index]}
                    value={verificationCode[index] || '_'}
                    onChange={(e) => handleVerificationCodeChange(e, index)}
                    onFocus={() => handleInputFocus(index)}
                    onKeyUp={(e) => handleKeyUp(e, index)}
                  />
                ))}
              </div>
            </div>
            {isCodeCorrect && (
              <div className="forgot-password-verification-lines">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div className="forgot-password-verification-line-none" key={index}></div>
                ))}
              </div>
            )}
            <a href="/signup/welcome-new">
              <button
                className={
                  isVerifyButtonEnabled
                    ? "verify-password-verify-button-1"
                    : "verify-password-verify-disabled-button"
                }
                disabled={!isVerifyButtonEnabled}
                onClick={() => setIsContinueClicked(true)}
              >
                Verify
              </button>
            </a>
            <a href="/signup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="35"
              viewBox="0 0 41 35"
              fill="none"
              className="back-icon-for-sign-3"
            >
              <path
                d="M30.8594 12.7188V19.0938C30.8594 19.3051 30.7754 19.5078 30.626 19.6572C30.4765 19.8067 30.2738 19.8906 30.0625 19.8906H12.862L16.2825 23.3112C16.4321 23.4607 16.5161 23.6635 16.5161 23.875C16.5161 24.0865 16.4321 24.2893 16.2825 24.4388C16.133 24.5883 15.9302 24.6723 15.7188 24.6723C15.5073 24.6723 15.3045 24.5883 15.155 24.4388L10.3737 19.6575C10.2996 19.5835 10.2408 19.4956 10.2007 19.3989C10.1606 19.3022 10.14 19.1985 10.14 19.0938C10.14 18.989 10.1606 18.8853 10.2007 18.7886C10.2408 18.6919 10.2996 18.604 10.3737 18.53L15.155 13.7487C15.229 13.6747 15.3169 13.6159 15.4136 13.5759C15.5104 13.5358 15.614 13.5152 15.7188 13.5152C15.8235 13.5152 15.9271 13.5358 16.0239 13.5759C16.1206 13.6159 16.2085 13.6747 16.2825 13.7487C16.3566 13.8227 16.4153 13.9106 16.4554 14.0074C16.4954 14.1041 16.5161 14.2078 16.5161 14.3125C16.5161 14.4172 16.4954 14.5209 16.4554 14.6176C16.4153 14.7144 16.3566 14.8023 16.2825 14.8763L12.862 18.2969H29.2656V12.7188C29.2656 12.5074 29.3496 12.3047 29.499 12.1553C29.6485 12.0058 29.8512 11.9219 30.0625 11.9219C30.2738 11.9219 30.4765 12.0058 30.626 12.1553C30.7754 12.3047 30.8594 12.5074 30.8594 12.7188ZM40.4219 3.15625V31.8438C40.4219 32.4778 40.17 33.0858 39.7217 33.5342C39.2733 33.9825 38.6653 34.2344 38.0312 34.2344H2.96875C2.33472 34.2344 1.72665 33.9825 1.27832 33.5342C0.829994 33.0858 0.578125 32.4778 0.578125 31.8438V3.15625C0.578125 2.52222 0.829994 1.91415 1.27832 1.46582C1.72665 1.01749 2.33472 0.765625 2.96875 0.765625H38.0312C38.6653 0.765625 39.2733 1.01749 39.7217 1.46582C40.17 1.91415 40.4219 2.52222 40.4219 3.15625ZM38.8281 3.15625C38.8281 2.94491 38.7442 2.74222 38.5947 2.59277C38.4453 2.44333 38.2426 2.35938 38.0312 2.35938H2.96875C2.75741 2.35938 2.55472 2.44333 2.40527 2.59277C2.25583 2.74222 2.17188 2.94491 2.17188 3.15625V31.8438C2.17188 32.0551 2.25583 32.2578 2.40527 32.4072C2.55472 32.5567 2.75741 32.6406 2.96875 32.6406H38.0312C38.2426 32.6406 38.4453 32.5567 38.5947 32.4072C38.7442 32.2578 38.8281 32.0551 38.8281 31.8438V3.15625Z"
                fill="#010F1E"
              />
            </svg>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Verification;
