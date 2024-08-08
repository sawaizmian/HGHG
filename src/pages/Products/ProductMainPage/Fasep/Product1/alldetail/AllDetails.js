import React, { useState } from "react";
import "./DetailInside.css";

const DetailInside = () => {
  const [activeTab, setActiveTab] = useState("Detail");

  const pdfFiles = [
    {
      name: "1. Hybrid-Manual-2Fas-wi32ghyrbi4.pdf",
      svgId: "svg1",
    },
    {
      name: "2. Cable-Manual2-3Fas-wi3dsad32ghyrbi4.pdf",
      svgId: "svg2",
    },
    {
      name: "3. Wallbox-Manual3-5Fas-wia2wa32ghyrbi4.pdf",
      svgId: "svg3",
    },
  ];

  const handleDownload = (pdfName) => {
    // Construct the path to the PDF file in the "pdf" folder
    const pdfPath = `/pdf/${pdfName}`;

    // Open the PDF file in a new tab or window
    window.open(pdfPath, "_blank");
  };

  const tabContent = {
    Serial: (
      <div className="bid-detail-registration-id-one">
        <div className="bid-main-detail-box-one">
          <div className="bid-main-detail-box-content">
            Article ID: PT-0000000001
          </div>
          {/* Manufactur Number: 54565WDAHDKA */}
        </div>
        <div className="bid-main-detail-box-two">
          <div className="box-content">EAN: WDA2WBAKA81090CY31205</div>
        </div>
      </div>
    ),
    Detail: (
      <div className="bid-detail-info-one-page-three">
        <div className="bid-detail-info-one-box-page-three">
          Introducing the Pneumatic Machine 1112/1756Nm Set—a powerhouse of
          precision and reliability. Crafted with a durable composite housing
          and equipped with a Twin Hammer mechanism, this tool ensures robust
          performance in every application. Seamlessly switch between forward
          and reverse operations with the Thumb Operated switches, while the
          Variable Speed Trigger provides precise control over the tool's
          output. Whether you're tightening bolts or releasing maximum force,
          this machine delivers consistent results with ease.
          <br />
          <br /> Engineered for versatility, the Pneumatic Machine 1112/1756Nm
          Set is designed to tackle a wide range of tasks. With a speed of
          8,000rpm and a tightening force of 1112Nm, it offers exceptional power
          and torque for demanding applications. Its 1/2" square drive
          accommodates various sockets, providing flexibility in fastening and
          loosening tasks. Plus, with a comprehensive set of accessories
          included, such as Hex wrench keys and impact sockets, you have
          everything you need to get the job done efficiently.
          <br />
          <br /> Experience superior performance and efficiency with the
          Pneumatic Machine 1112/1756Nm Set. Designed for professionals who
          demand the best, this tool combines power, precision, and durability
          in one compact package. Whether you're working in automotive,
          construction, or industrial settings, this versatile machine delivers
          consistent results, time after time. Elevate your projects and
          streamline your workflow with the Pneumatic Machine 1112/1756Nm
          Set—your ultimate companion for precision workmanship.
        </div>
      </div>
    ),

    Specifications: (
      <div>
        <div className="bid-detail-info-one-page-three-specs">
          <div className="bid-detail-info-one-box-page-three-bulleted">
          <ul>
              <li>Composite housing</li>
              <li>Twin Hammer</li>
              <li>Thumb Operated Forward and Reverse switches</li>
              <li>Variable Speed Trigger</li>
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
      </div>
    ),

    Documents: (
      <div className="bid-detail-download-pdf">
        {pdfFiles.map((pdf, index) => (
          <div key={index} className="bid-detail-download-pdf-item">
            <div className="pdf-svg-container">
              <svg
                id={pdf.svgId}
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                className="bid-detail-download-pdf-svg"
                onClick={() => handleDownload(pdf.name)}
              >
                <path
                  d="M22.3138 17.6955L16.1927 23.8504M16.1927 23.8504L10.0039 17.6955M16.1927 23.8504V5.41785"
                  stroke="black"
                  strokeWidth="1.53874"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.38672 18.4648V25.3892C5.38672 26.2054 5.71095 26.9881 6.28809 27.5653C6.86523 28.1424 7.648 28.4667 8.4642 28.4667H23.8516C24.6678 28.4667 25.4506 28.1424 26.0277 27.5653C26.6049 26.9881 26.9291 26.2054 26.9291 25.3892V18.4648"
                  stroke="black"
                  strokeWidth="1.53874"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className="bid-detail-download-pdf-text"
              onClick={() => handleDownload(pdf.name)}
            >
              {pdf.name}
            </p>
          </div>
        ))}
      </div>
    ),

    Accessories: (
      <div className="bid-detail-download-pdf-text-125">
        <a href="/allproducts" className="bid-detail-download-pdf-text-1">
          Wire 3 Fas Connect Type 2 to Type 2
        </a>
        <br></br>
        <a href="/allproducts" className="bid-detail-download-pdf-text-1">
          Cable 3 Fas Connect Type 2
        </a>
        <br></br>

        <a href="/allproducts" className="bid-detail-download-pdf-text-1">
          Wallbox Type 2 to Type 2
        </a>
        <br></br>

        <a href="/allproducts" className="bid-detail-download-pdf-text-1">
          Wire 3 Fas Connect Type 2 to Type 2
        </a>
      </div>
    ),
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bid-detail-inside-page">
      <div className="bid-all-detail-box-main-section">
        <div className="bid-main-detail-title">KrofTools</div>
        <div className="bid-main-detail-subtitle">Pneumatic Tool</div>
        <div className="bid-main-detail-subtext">
        Pneumatic Machine 1112/1756nm Set        </div>
        <div className="bid-main-detail-tabs">
          {Object.keys(tabContent).map((tab, index) => (
            <div
              key={index}
              className={`bid-main-detail-tab ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </div>
          ))}
          {/* Add the provided code snippet here at the end */}
          <div className="bid-main-detail-tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              className="bid-main-detail-tab-svg"
            >
              <path
                d="M2.44434 9.50012C2.44434 10.7355 3.41205 11.7409 4.6012 11.7409C5.17205 11.7409 5.68826 11.5056 6.07434 11.1284L10.3816 13.6858C10.3686 13.7829 10.3528 13.88 10.3528 13.9816C10.3528 15.217 11.3205 16.2223 12.5097 16.2223C13.6988 16.2223 14.6666 15.217 14.6666 13.9816C14.6666 12.7462 13.6988 11.7409 12.5097 11.7409C11.9388 11.7409 11.4226 11.9761 11.0366 12.3533L6.7293 9.79665C6.74224 9.6988 6.75806 9.6017 6.75806 9.50012C6.75806 9.39854 6.74224 9.30144 6.7293 9.2036L11.0366 6.64691C11.4226 7.0241 11.9388 7.25938 12.5097 7.25938C13.6988 7.25938 14.6666 6.25404 14.6666 5.01864C14.6666 3.78325 13.6988 2.7779 12.5097 2.7779C11.3205 2.7779 10.3528 3.78325 10.3528 5.01864C10.3528 5.12022 10.3686 5.21732 10.3816 5.31517L6.07434 7.87185C5.67676 7.47948 5.14957 7.2603 4.6012 7.25938C3.41205 7.25938 2.44434 8.26473 2.44434 9.50012Z"
                fill="#010F1E"
              />
            </svg>
            Share
          </div>
        </div>
        <div className="bid-main-detail-tab-content">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default DetailInside;
