import React, { Component } from "react";
import HomeSlider1Image from "../../../assets/homeslider1.jpg";
import HomeSlider2Image from "../../../assets/homeslider2.jpg";
 import HomeSlider3Image from "../../../assets/homeslider3.jpg";
import HomeSlider4Image from "../../../assets/homeslider4.jpg";
import HomeSlider5Image from "../../../assets/homeslider5.jpg";
import HomeSlider6Image from "../../../assets/homeslider6.jpg";
import HomeSlider7Image from "../../../assets/homeslider7.jpg";

import "./HomeSlider1.css";

class HomeSlider1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.imageUrls = [
      HomeSlider2Image,
      HomeSlider6Image,
      HomeSlider1Image,
      HomeSlider7Image,
      HomeSlider4Image,
      HomeSlider3Image,
      HomeSlider5Image,
    ];
  }

  componentDidMount() {
    this.slideInterval = setInterval(this.slideNext, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  slideNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.imageUrls.length,
    }));
  };

  goToSlide = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { currentIndex } = this.state;
    const translateX = `translateX(-${currentIndex * 100}%)`;

    return (
      <div className="slider-container">
        <div
          className="slider-images"
          style={{
            transform: translateX,
          }}
        >
          {this.imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className={`slider-image ${
                currentIndex === index ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div className="slider-navigation">
          {this.imageUrls.map((_, index) => (
            <div
              key={index}
              className={`slider-circle ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => this.goToSlide(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                stroke="#c9181e"
                strokeWidth="0.99"
              >
                <circle cx="6" cy="5.5" r="5" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeSlider1;
