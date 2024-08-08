import React, { useState } from "react";
import "./Contact.css";
import CodeHidelogo from "../../assets/heveagriplogo1.png";
 
export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    subject: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    businessName: false,
    email: false,
    subject: false,
    phoneNumber: false,
    message: false,
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation logic
    const formErrors = {
      firstName: formData.firstName.trim() === "",
      lastName: formData.lastName.trim() === "",
      businessName: false, // No validation for businessName
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      subject: formData.subject.trim().length < 3,
      phoneNumber: false, // No validation for phoneNumber
      message: formData.message.trim().length < 3,
    };
    setErrors(formErrors);

    // Check if there are any validation errors
    if (Object.values(formErrors).some((error) => error)) {
      console.log("Please fill out the required fields");
      return;
    }

    try {
      const response = await fetch("http://176.10.229.252:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      setMessageSent(true);

      // Reset form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        businessName: "",
        email: "",
        subject: "",
        phoneNumber: "",
        message: "",
      });

      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container-contact">
      <a href="https://heveagrip.com">
        <div className="BidType24Logo-logo-container">
          <img
            src={CodeHidelogo}
            alt="CodeHidelogo"
            className="CodeHidelogo-logo"
          />
        </div>
      </a>

      <div className="container-text">
        <h1 id="contactus">Contact Us</h1>
        <p className="description">
          We welcome your inquiries. Please don't hesitate to reach out, and
          we'll be happy to assist you.
        </p>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-input-half" id="form-input-half-1">
                <input
                  type="text"
                  className={`form-input ${errors.firstName ? "error" : ""}`}
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-input-half" id="form-input-half-2">
                <input
                  type="text"
                  className={`form-input ${errors.lastName ? "error" : ""}`}
                  id="lastname"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <input
                type="text"
                className="form-input-long"
                placeholder="Business Name"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                className={`form-input-long ${errors.email ? "error" : ""}`}
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
            <div className="form-input-half" id="form-input-half-3">
                <input
                  type="number"
                  className="form-input"
                  id="phonenumber"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-input-half" id="form-input-half-4">
                <input
                  type="text"
                  className={`form-input ${errors.subject ? "error" : ""}`}
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="message-container">
              <textarea
                id="form-input-message"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={() => {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    message: formData.message.trim().length < 3,
                  }));
                }}
                className={`${
                  errors.message ? "form-input error" : "form-input"
                }`}
              ></textarea>
            </div>
            <button
              className="form-submit sent-icon"
              id="sent"
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </button>
            {Object.values(errors).some((error) => error) && (
              <p className="error-message">
                Please fill out the red-marked fields with correct information.
              </p>
            )}
            {messageSent && (
              <p className="message-sent">
                Your message has been sent to Code Hide. They will contact you
                within 24-48 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
