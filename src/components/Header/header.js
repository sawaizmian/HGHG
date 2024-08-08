import React, { Component } from "react";
import BTlogoHeader from "../../assets/heveagriplogo3.png";
import { Link } from "react-router-dom";

import "./header.css";

class YourComponent extends Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  focusSearchInput = () => {
    if (this.searchInputRef.current) {
      this.searchInputRef.current.focus();
    }
  };

  render() {
    const { isSearchBarVisible, handleInputChange, handleKeyDown } = this.props;

    return (
      <>
        {isSearchBarVisible && (
          <div
            className="search-bar"
            onClick={(event) => event.stopPropagation()}
          >
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              ref={this.searchInputRef}
            />
          </div>
        )}
      </>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
    this.flagDropdownRef = React.createRef();
    this.searchRef = React.createRef();
    this.yourComponentRef = React.createRef();
    this.loginDropdownRef = React.createRef();
  }

  state = {
    isDropdownVisible: false,
    isSearchBarVisible: false,
    isFlagDropdownVisible: false,
    isLoginDropdownVisible: false,
    isProductsOpen: false,
    isACServiceOpen: false, // Define isACServiceOpen in the state
    isTyreOpen: false, // Define isACServiceOpen in the state
    isToolOpen: false, // Define isACServiceOpen in the state
    isEVChargerOpen: false, // Define isACServiceOpen in the state
    searchInput: "",
  };

  handleMenuIconClick = () => {
    this.setState((prevState) => ({
      isDropdownVisible: !prevState.isDropdownVisible,
      isFlagDropdownVisible: false,
      isSearchBarVisible: false,
      isLoginDropdownVisible: false,
      isProductsOpen: false, // Reset state for Products submenu
      isACServiceOpen: false, // Reset state for AC Service submenu
      isTyreOpen: false, // Define isACServiceOpen in the state
      isToolOpen: false, // Define isACServiceOpen in the state
      isEVChargerOpen: false, // Define isACServiceOpen in the state

      // Add more submenu states to reset as needed
    }));
  };

  handleSearchIconClick = (event) => {
    event.stopPropagation();

    this.setState(
      (prevState) => ({
        isSearchBarVisible: !prevState.isSearchBarVisible,
        isDropdownVisible: false,
        isFlagDropdownVisible: false,
      }),
      () => {
        if (this.state.isSearchBarVisible && this.yourComponentRef.current) {
          this.yourComponentRef.current.focusSearchInput();
        }
      }
    );
  };

  handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    this.setState({ searchInput: inputValue });
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (this.state.searchInput === "packages") {
        window.location.href = "packages";
      } else if (this.state.searchInput === "brands") {
        window.location.href = "https://snaithe.com/about";
      } else if (this.state.searchInput === "history") {
        window.location.href = "https://snaithe.com/history";
      } else if (this.state.searchInput === "brands") {
        window.location.href = "https://snaithe.com/brands";
      } else if (this.state.searchInput === "home") {
        window.location.href = "home";
      } else if (this.state.searchInput === "products") {
        window.location.href = "packages";
      } else if (this.state.searchInput === "services") {
        window.location.href = "services";
      } else if (this.state.searchInput === "service") {
        window.location.href = "services";
      } else if (this.state.searchInput === "product") {
        window.location.href = "packages";
      } else {
        window.location.href = "404-page";
      }
    }
  };
  handleLoginIconClick = (event) => {
    event.stopPropagation();
    this.setState((prevState) => ({
      isLoginDropdownVisible: !prevState.isLoginDropdownVisible,
      isDropdownVisible: false,
      isFlagDropdownVisible: false,
      isSearchBarVisible: false,
    }));
  };

  handleFlagDropdownClick = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
    this.setState((prevState) => ({
      isFlagDropdownVisible: !prevState.isFlagDropdownVisible,
      isDropdownVisible: false,
      isSearchBarVisible: false,
      isLoginDropdownVisible: false,
    }));
  };

  toggleProducts = () => {
    this.setState((prevState) => ({
      isProductsOpen: !prevState.isProductsOpen,
    }));
  };

  toggleACService = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
    this.setState((prevState) => ({
      isACServiceOpen: !prevState.isACServiceOpen,
    }));
  };

  toggleTyre = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
    this.setState((prevState) => ({
      isTyreOpen: !prevState.isTyreOpen,
    }));
  };

  toggleTools = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
    this.setState((prevState) => ({
      isToolOpen: !prevState.isToolOpen,
    }));
  };

  toggleEVChargers = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
    this.setState((prevState) => ({
      isEVChargerOpen: !prevState.isEVChargerOpen,
    }));
  };

  handleDocumentClick = (event) => {
    const { dropdownRef, flagDropdownRef, searchRef, loginDropdownRef } = this;

    // Check if the click is outside the dropdown menu, flag dropdown, login dropdown, search bar, menu icon, or menu itself
    if (
      (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
      (flagDropdownRef.current &&
        flagDropdownRef.current.contains(event.target)) ||
      (loginDropdownRef.current &&
        loginDropdownRef.current.contains(event.target)) ||
      (searchRef.current && searchRef.current.contains(event.target)) ||
      event.target.closest(".menu") ||
      event.target.closest(".menu-icon")
    ) {
      // If the click is within any of these elements, do nothing
      return;
    }

    // Close all dropdowns and search bar
    this.setState({
      isDropdownVisible: false,
      isFlagDropdownVisible: false,
      isLoginDropdownVisible: false,
      isSearchBarVisible: false,
    });
  };

  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
  }

  render() {
    const {
      isDropdownVisible,
      isSearchBarVisible,
      isFlagDropdownVisible,
      isLoginDropdownVisible,
      isProductsOpen,
      isACServiceOpen,
      isTyreOpen,
      isToolOpen,
      isEVChargerOpen,
    } = this.state;
    return (
      <div>
        <header className="header">
          <a href="/" className="logo-heveagrip">
            <img src={BTlogoHeader} alt="Logo" className="logo-heveagrip1" />
          </a>
          <div
            className={isDropdownVisible ? "menu open" : "menu"}
            ref={this.dropdownRef}
          >
            <nav className="menu-nav">
              <ul>
                <li>
                  <Link to="/" onClick={this.closeMenu}>
                    Home
                  </Link>
                </li>
                <li onClick={this.toggleProducts}>
                  <div className="products-1">Products</div>
                  <ul className={isProductsOpen ? "submenu show" : "submenu"}>
                    <li>
                      <Link to="/allproducts">All Products</Link>
                    </li>
                    <li>
                      <Link to="/evproducts">EV Charging</Link>
                    </li>
                    <li onClick={this.toggleACService}>
                      <div className="vehicle-lifts">Vehicle Lifts</div>
                      <ul
                        className={isACServiceOpen ? "submenu show" : "submenu"}
                      >
                        <li>
                          <Link to="/lift">All Lifts</Link>
                        </li>
                        <li>
                          <Link to="/2postlift">2 Post Lift</Link>
                        </li>
                        <li>
                          <Link to="/4postlift">4 Post Lift</Link>
                        </li>
                        <li>
                          <Link to="/scissorlift">Scissor Lift</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/tirechanger">Tire Changer</Link>
                    </li>
                    <li>
                      <Link to="/wheelbalancer">Wheel Balancer</Link>
                    </li>
                    <li>
                      <Link to="/wheelaligners">Wheel Aligners</Link>
                    </li>

                    <li>
                      <Link to="/professionaltools">Professional Tools</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="https://www.boschcarservice.com/">
                    Bosch Car Service
                  </Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="https://snaithe.com/about/">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <img
              src={require("../../assets/heveagriplogo1.png")}
              alt="HG Logo"
              className="menu-logo"
            />
          </div>

          <div className="icons">
            <div
              className="icon-search-header"
              onClick={this.handleSearchIconClick}
              ref={this.searchRef}
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.04288 0.227295C10.7272 0.22711 12.3767 0.706908 13.7981 1.61048C15.2196 2.51405 16.3541 3.80398 17.0687 5.32915C17.7834 6.85433 18.0487 8.55158 17.8334 10.2221C17.6182 11.8926 16.9313 13.4672 15.8534 14.7613L21.9656 20.8736C22.0717 20.9721 22.1492 21.0973 22.19 21.2362C22.2309 21.375 22.2335 21.5223 22.1976 21.6625C22.1618 21.8027 22.0888 21.9307 21.9863 22.0329C21.8839 22.1351 21.7557 22.2077 21.6154 22.2432C21.4754 22.2791 21.3282 22.2766 21.1895 22.236C21.0507 22.1953 20.9255 22.118 20.827 22.0123L14.7147 15.9C13.621 16.8107 12.324 17.4445 10.9335 17.748C9.54301 18.0514 8.09988 18.0155 6.7262 17.6433C5.35252 17.271 4.08869 16.5734 3.04162 15.6095C1.99455 14.6455 1.19504 13.4436 0.71073 12.1053C0.226416 10.767 0.0715413 9.33175 0.259206 7.92095C0.446871 6.51016 0.971555 5.16531 1.78888 4.00017C2.6062 2.83503 3.69211 1.88387 4.95476 1.22716C6.21741 0.57044 7.61966 0.227483 9.04288 0.227295ZM1.79197 9.08952C1.79197 10.0417 1.97952 10.9846 2.34391 11.8643C2.7083 12.744 3.2424 13.5434 3.91571 14.2167C4.58902 14.89 5.38836 15.4241 6.26808 15.7885C7.1478 16.1529 8.09068 16.3404 9.04288 16.3404C9.99508 16.3404 10.938 16.1529 11.8177 15.7885C12.6974 15.4241 13.4967 14.89 14.17 14.2167C14.8434 13.5434 15.3775 12.744 15.7418 11.8643C16.1062 10.9846 16.2938 10.0417 16.2938 9.08952C16.2938 7.16646 15.5299 5.32216 14.17 3.96235C12.8102 2.60254 10.9659 1.83861 9.04288 1.83861C7.11982 1.83861 5.27552 2.60254 3.91571 3.96235C2.5559 5.32216 1.79197 7.16646 1.79197 9.08952Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className="icon-menu-header"
              onClick={this.handleMenuIconClick}
              ref={this.dropdownRef}
            >
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.181824 18.6705C0.181824 18.3892 0.293589 18.1193 0.492531 17.9204C0.691474 17.7214 0.961298 17.6097 1.24265 17.6097H22.4591C22.7404 17.6097 23.0102 17.7214 23.2092 17.9204C23.4081 18.1193 23.5199 18.3892 23.5199 18.6705C23.5199 18.9518 23.4081 19.2217 23.2092 19.4206C23.0102 19.6196 22.7404 19.7313 22.4591 19.7313H1.24265C0.961298 19.7313 0.691474 19.6196 0.492531 19.4206C0.293589 19.2217 0.181824 18.9518 0.181824 18.6705ZM0.181824 10.1839C0.181824 9.90258 0.293589 9.63276 0.492531 9.43381C0.691474 9.23487 0.961298 9.12311 1.24265 9.12311H22.4591C22.7404 9.12311 23.0102 9.23487 23.2092 9.43381C23.4081 9.63276 23.5199 9.90258 23.5199 10.1839C23.5199 10.4653 23.4081 10.7351 23.2092 10.934C23.0102 11.133 22.7404 11.2447 22.4591 11.2447H1.24265C0.961298 11.2447 0.691474 11.133 0.492531 10.934C0.293589 10.7351 0.181824 10.4653 0.181824 10.1839ZM0.181824 1.69736C0.181824 1.41601 0.293589 1.14619 0.492531 0.947243C0.691474 0.748301 0.961298 0.636536 1.24265 0.636536H22.4591C22.7404 0.636536 23.0102 0.748301 23.2092 0.947243C23.4081 1.14619 23.5199 1.41601 23.5199 1.69736C23.5199 1.9787 23.4081 2.24853 23.2092 2.44747C23.0102 2.64641 22.7404 2.75818 22.4591 2.75818H1.24265C0.961298 2.75818 0.691474 2.64641 0.492531 2.44747C0.293589 2.24853 0.181824 1.9787 0.181824 1.69736Z"
                  fill="white"
                />
              </svg>
            </div>

            <div
              className={`dropdown-header-signup-signin-one ${
                isLoginDropdownVisible ? "active" : ""
              }`}
            >
              <button
                className="login-button"
                onClick={this.handleLoginIconClick}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-sign-in-up"
                >
                  <path
                    d="M12.4545 12.5C13.9961 12.5 15.4745 11.8876 16.5646 10.7976C17.6546 9.7075 18.267 8.22907 18.267 6.6875C18.267 5.14593 17.6546 3.6675 16.5646 2.57744C15.4745 1.48739 13.9961 0.875 12.4545 0.875C10.913 0.875 9.43453 1.48739 8.34447 2.57744C7.25442 3.6675 6.64203 5.14593 6.64203 6.6875C6.64203 8.22907 7.25442 9.7075 8.34447 10.7976C9.43453 11.8876 10.913 12.5 12.4545 12.5ZM16.3295 6.6875C16.3295 7.71521 15.9213 8.70084 15.1946 9.42754C14.4679 10.1542 13.4822 10.5625 12.4545 10.5625C11.4268 10.5625 10.4412 10.1542 9.71449 9.42754C8.98779 8.70084 8.57953 7.71521 8.57953 6.6875C8.57953 5.65979 8.98779 4.67416 9.71449 3.94746C10.4412 3.22076 11.4268 2.8125 12.4545 2.8125C13.4822 2.8125 14.4679 3.22076 15.1946 3.94746C15.9213 4.67416 16.3295 5.65979 16.3295 6.6875ZM24.0795 22.1875C24.0795 24.125 22.142 24.125 22.142 24.125H2.76703C2.76703 24.125 0.829529 24.125 0.829529 22.1875C0.829529 20.25 2.76703 14.4375 12.4545 14.4375C22.142 14.4375 24.0795 20.25 24.0795 22.1875ZM22.142 22.1798C22.1401 21.7031 21.8437 20.2694 20.53 18.9557C19.2668 17.6925 16.8895 16.375 12.4545 16.375C8.01765 16.375 5.64228 17.6925 4.37903 18.9557C3.0654 20.2694 2.7709 21.7031 2.76703 22.1798H22.142Z"
                    fill="white"
                  />
                </svg>
              </button>
              {isLoginDropdownVisible && (
                <div className="login-dropdown-content">
                  <div className="get-login-111">
                    Select Options:
                  </div>
                  <a href="/signin">Sign In</a>
                  <a href="/signup">Sign Up</a>{" "}
                  <img
                    src={require("../../assets/heveagriplogo1.png")}
                    alt="HG Logo"
                    className="menu-logo"
                  />
                </div>
              )}
            </div>

            <div
              className="flag-icon"
              onClick={this.handleFlagDropdownClick}
              ref={this.flagDropdownRef}
            >
              <div className="flag-icon-2">
                <svg
                  width="47"
                  height="30"
                  viewBox="0 0 47 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flag-icon-2"
                >
                  <path
                    d="M0.224976 0.374985H46.8307V29.7193H0.224976V0.374985Z"
                    fill="#012169"
                  />
                  <path
                    d="M5.68658 0.374985L23.455 11.4402L41.1506 0.374985H46.8307V4.16529L29.3535 15.1083L46.8307 25.9901V29.7193H41.005L23.5278 18.7763L6.12351 29.7193H0.224976V26.0513L17.6293 15.1694L0.224976 4.28756V0.374985H5.68658Z"
                    fill="white"
                  />
                  <path
                    d="M31.1012 17.5536L46.8307 27.274V29.7193L27.0961 17.5536H31.1012ZM17.7021 18.7763L18.139 20.916L4.15733 29.7193H0.224976L17.7021 18.7763ZM46.8307 0.374985V0.558387L28.6981 12.0516L28.8438 9.36169L43.1896 0.374985H46.8307ZM0.224976 0.374985L17.6293 11.1346H13.26L0.224976 2.94261V0.374985Z"
                    fill="#C8102E"
                  />
                  <path
                    d="M17.7749 0.374985V29.7193H29.4264V0.374985H17.7749ZM0.224976 10.1564V19.9379H46.8307V10.1564H0.224976Z"
                    fill="white"
                  />
                  <path
                    d="M0.224976 12.1739V18.0427H46.8307V12.1739H0.224976ZM20.1052 0.374985V29.7193H27.0961V0.374985H20.1052Z"
                    fill="#C8102E"
                  />
                </svg>
              </div>
              <div
                className={
                  isFlagDropdownVisible
                    ? "flag-dropdown visible"
                    : "flag-dropdown"
                }
                ref={this.flagDropdownRef}
              >
                <ul class="flag-dropdown visible">
                  <div className="select-language-two-1">
                    Language Preference
                  </div>
                  <a href="en-us">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="18"
                          viewBox="0 0 27 18"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_879)">
                            <path
                              d="M0 0.655273H27V17.6553H0V0.655273Z"
                              fill="#012169"
                            />
                            <path
                              d="M3.16406 0.655273L13.4578 7.06569L23.7094 0.655273H27V2.85111L16.875 9.19069L27 15.4949V17.6553H23.625L13.5 11.3157L3.41719 17.6553H0V15.5303L10.0828 9.22611L0 2.92194V0.655273H3.16406Z"
                              fill="white"
                            />
                            <path
                              d="M17.8875 10.6074L27 16.2386V17.6553L15.5672 10.6074H17.8875ZM10.125 11.3157L10.3781 12.5553L2.27813 17.6553H0L10.125 11.3157ZM27 0.655273V0.761523L16.4953 7.41986L16.5797 5.86152L24.8906 0.655273H27ZM0 0.655273L10.0828 6.88861H7.55156L0 2.14277V0.655273Z"
                              fill="#C8102E"
                            />
                            <path
                              d="M10.1672 0.655273V17.6553H16.9172V0.655273H10.1672ZM0 6.32194V11.9886H27V6.32194H0Z"
                              fill="white"
                            />
                            <path
                              d="M0 7.49069V10.8907H27V7.49069H0ZM11.5172 0.655273V17.6553H15.5672V0.655273H11.5172Z"
                              fill="#C8102E"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_879">
                              <rect
                                width="27"
                                height="17"
                                fill="white"
                                transform="translate(0 0.655273)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">English</span>
                    </li>
                  </a>
                  <a href="sv-se">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="20"
                          viewBox="0 0 27 20"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_161)">
                            <path d="M0 0H27V20H0V0Z" fill="#066AA7" />
                            <path d="M0 8H27V12H0V8Z" fill="#FECC00" />
                            <path
                              d="M7.42505 0H11.475V20H7.42505V0Z"
                              fill="#FECC00"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_161">
                              <rect width="27" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>{" "}
                      </svg>
                      <span class="flag-label">Swedish</span>
                    </li>
                  </a>
                  <a href="de-de">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="21"
                          viewBox="0 0 27 21"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_165)">
                            <path d="M0 14H27V21H0V14Z" fill="#FFCE00" />
                            <path d="M0 0H27V7H0V0Z" fill="black" />
                            <path d="M0 7H27V14H0V7Z" fill="#DD0000" />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_165">
                              <rect width="27" height="21" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">German</span>
                    </li>
                  </a>
                  <a href="fr">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="21"
                          viewBox="0 0 27 21"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_169)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0.655273H27V20.6553H0V0.655273Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0.655273H8.99859V20.6553H0V0.655273Z"
                              fill="#002654"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.0015 0.655273H27.0001V20.6553H18.0015V0.655273Z"
                              fill="#CE1126"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_169">
                              <rect
                                width="27"
                                height="20"
                                fill="white"
                                transform="translate(0 0.655273)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">French</span>
                    </li>
                  </a>
                  <a href="it">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="21"
                          viewBox="0 0 27 21"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_174)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0.655273H27V20.6553H0V0.655273Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0.655273H8.99859V20.6553H0V0.655273Z"
                              fill="#009246"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.0015 0.655273H27.0001V20.6553H18.0015V0.655273Z"
                              fill="#CE2B37"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_174">
                              <rect
                                width="27"
                                height="20"
                                fill="white"
                                transform="translate(0 0.655273)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">Italian</span>
                    </li>
                  </a>
                  <a href="es">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="22"
                          viewBox="0 0 27 22"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_179)">
                            <path
                              d="M0 0.655273H27V21.6553H0V0.655273Z"
                              fill="#AA151B"
                            />
                            <path
                              d="M0 5.90527H27V16.4053H0V5.90527Z"
                              fill="#F1BF00"
                            />
                            <path
                              d="M5.37041 9.98714L5.33666 9.98277L5.29448 9.93902L5.26495 9.92152L5.23963 9.88652C5.23963 9.88652 5.2101 9.83839 5.22276 9.79902C5.23541 9.75964 5.26073 9.74652 5.28182 9.73339C5.30243 9.72467 5.32357 9.71736 5.3451 9.71152L5.38729 9.69402L5.44213 9.68089L5.46323 9.66777C5.47166 9.66777 5.49276 9.66777 5.50541 9.65902L5.5476 9.65027L5.6151 9.65464H5.8176C5.83448 9.65464 5.86823 9.66777 5.87666 9.67214C5.90448 9.68323 5.93262 9.69345 5.96104 9.70277C5.98213 9.70714 6.02854 9.71589 6.05385 9.72902C6.07495 9.74214 6.09182 9.75964 6.10026 9.77277L6.12135 9.81652V9.86464L6.10026 9.89964L6.07495 9.94339L6.04119 9.96964C6.04119 9.96964 6.0201 9.99152 5.99901 9.98714C5.98213 9.98714 5.79651 9.95214 5.67838 9.95214C5.56026 9.95214 5.37041 9.99152 5.37041 9.99152"
                              fill="#AD1519"
                            />
                            <path
                              d="M5.37041 9.98714L5.33666 9.98277L5.29448 9.93902L5.26495 9.92152L5.23963 9.88652C5.23963 9.88652 5.2101 9.83839 5.22276 9.79902C5.23541 9.75964 5.26073 9.74652 5.28182 9.73339C5.30243 9.72467 5.32357 9.71736 5.3451 9.71152L5.38729 9.69402L5.44213 9.68089L5.46323 9.66777C5.47166 9.66777 5.49276 9.66777 5.50541 9.65902L5.5476 9.65027L5.6151 9.65464H5.8176C5.83448 9.65464 5.86823 9.66777 5.87666 9.67214C5.90448 9.68323 5.93262 9.69345 5.96104 9.70277C5.98213 9.70714 6.02854 9.71589 6.05385 9.72902C6.07495 9.74214 6.09182 9.75964 6.10026 9.77277L6.12135 9.81652V9.86464L6.10026 9.89964L6.07495 9.94339L6.04119 9.96964C6.04119 9.96964 6.0201 9.99152 5.99901 9.98714C5.98213 9.98714 5.79651 9.95214 5.67838 9.95214C5.56026 9.95214 5.37041 9.99152 5.37041 9.99152V9.98714Z"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.62354 9.71153C5.62354 9.65465 5.64885 9.6109 5.67838 9.6109C5.71213 9.6109 5.73744 9.65465 5.73744 9.7159C5.73744 9.77278 5.71213 9.8209 5.67838 9.8209C5.64463 9.8209 5.62354 9.77278 5.62354 9.71153Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.62354 9.71153C5.62354 9.65465 5.64885 9.6109 5.67838 9.6109C5.71213 9.6109 5.73744 9.65465 5.73744 9.7159C5.73744 9.77278 5.71213 9.8209 5.67838 9.8209C5.64463 9.8209 5.62354 9.77278 5.62354 9.71153Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.65308 9.7115C5.65308 9.659 5.66573 9.61963 5.68261 9.61963C5.69526 9.61963 5.70792 9.66338 5.70792 9.7115C5.70792 9.76838 5.69526 9.80775 5.68261 9.80775C5.66573 9.80775 5.6573 9.764 5.6573 9.7115"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.65308 9.7115C5.65308 9.659 5.66573 9.61963 5.68261 9.61963C5.69526 9.61963 5.70792 9.66338 5.70792 9.7115C5.70792 9.76838 5.69526 9.80775 5.68261 9.80775C5.66573 9.80775 5.6573 9.764 5.6573 9.7115H5.65308Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.64465 9.60187C5.64465 9.5845 5.6614 9.56714 5.67814 9.56714C5.69489 9.56714 5.72 9.5845 5.72 9.60187C5.72 9.62357 5.69907 9.64094 5.67814 9.64094C5.65721 9.64094 5.64465 9.62357 5.64465 9.60187Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.70748 9.58825V9.6143H5.64888V9.58825H5.66981V9.53616H5.6405V9.51011H5.66981V9.4884H5.69074V9.51011H5.71585V9.53616H5.69074V9.58825H5.70748Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.70748 9.58825V9.6143H5.64888V9.58825H5.66981V9.53616H5.6405V9.51011H5.66981V9.4884H5.69074V9.51011H5.71585V9.53616H5.69074V9.58825H5.70748Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.73246 9.58825V9.6143H5.62781V9.58825H5.66967V9.53616H5.64037V9.51011H5.66967V9.4884H5.6906V9.51011H5.71572V9.53616H5.6906V9.58825H5.73246Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.73246 9.58825V9.6143H5.62781V9.58825H5.66967V9.53616H5.64037V9.51011H5.66967V9.4884H5.6906V9.51011H5.71572V9.53616H5.6906V9.58825H5.73246Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.69074 9.56714C5.70748 9.57148 5.71585 9.5845 5.71585 9.60187C5.71585 9.62357 5.69911 9.64094 5.68236 9.64094C5.66562 9.64094 5.6405 9.62357 5.6405 9.60187C5.6405 9.5845 5.65306 9.57148 5.66981 9.56714"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.68266 9.98275H5.48438V9.93462L5.47172 9.88212L5.46329 9.8165C5.40844 9.74212 5.35782 9.694 5.34094 9.70712C5.34516 9.694 5.34938 9.68087 5.36204 9.6765C5.40844 9.64587 5.50969 9.72025 5.58141 9.834L5.60251 9.86462H5.76282L5.77969 9.834C5.85563 9.71587 5.95266 9.64587 5.99907 9.6765C6.01172 9.68087 6.01594 9.694 6.02016 9.70712C6.00329 9.694 5.95266 9.74212 5.89782 9.8165L5.88938 9.88212L5.88094 9.93462L5.87672 9.98275H5.67844"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.68266 9.98275H5.48438V9.93462L5.47172 9.88212L5.46329 9.8165C5.40844 9.74212 5.35782 9.694 5.34094 9.70712C5.34516 9.694 5.34938 9.68087 5.36204 9.6765C5.40844 9.64587 5.50969 9.72025 5.58141 9.834L5.60251 9.86462H5.76282L5.77969 9.834C5.85563 9.71587 5.95266 9.64587 5.99907 9.6765C6.01172 9.68087 6.01594 9.694 6.02016 9.70712C6.00329 9.694 5.95266 9.74212 5.89782 9.8165L5.88938 9.88212L5.88094 9.93462L5.87672 9.98275H5.67844H5.68266Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.34937 9.70279C5.39155 9.68092 5.47593 9.75092 5.54343 9.86029M6.00749 9.70279C5.97374 9.68092 5.88936 9.75092 5.81765 9.86029"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.39158 10.0747L5.37048 10.0309C5.57331 9.97212 5.78781 9.97212 5.99064 10.0309L5.96955 10.0659C5.96449 10.0772 5.96026 10.0889 5.95689 10.1009C5.86621 10.0753 5.77241 10.0635 5.67845 10.0659C5.56876 10.0659 5.45908 10.079 5.40423 10.1009L5.39158 10.0747Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.39158 10.0747L5.37048 10.0309C5.57331 9.97212 5.78781 9.97212 5.99064 10.0309L5.96955 10.0659C5.96449 10.0772 5.96026 10.0889 5.95689 10.1009C5.86621 10.0753 5.77241 10.0635 5.67845 10.0659C5.56876 10.0659 5.45908 10.079 5.40423 10.1009L5.39158 10.0747Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.67848 10.1797C5.77973 10.1797 5.88941 10.1622 5.92738 10.1534C5.9527 10.1447 5.96957 10.1315 5.96957 10.1184C5.96957 10.1097 5.96113 10.1053 5.9527 10.1009C5.89363 10.079 5.78395 10.0659 5.67848 10.0659C5.57301 10.0659 5.46754 10.079 5.40848 10.1009C5.40004 10.1009 5.39582 10.1097 5.3916 10.114C5.3916 10.1315 5.40426 10.1447 5.43379 10.1534C5.47598 10.1622 5.58145 10.1797 5.67848 10.1797Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.67848 10.1797C5.77973 10.1797 5.88941 10.1622 5.92738 10.1534C5.9527 10.1447 5.96957 10.1315 5.96957 10.1184C5.96957 10.1097 5.96113 10.1053 5.9527 10.1009C5.89363 10.079 5.78395 10.0659 5.67848 10.0659C5.57301 10.0659 5.46754 10.079 5.40848 10.1009C5.40004 10.1009 5.39582 10.1097 5.3916 10.114C5.3916 10.1315 5.40426 10.1447 5.43379 10.1534C5.47598 10.1622 5.58145 10.1797 5.67848 10.1797Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.99481 9.98278L5.97371 9.96091C5.97371 9.96091 5.9484 9.97403 5.91887 9.96966C5.89355 9.96966 5.8809 9.92591 5.8809 9.92591C5.8809 9.92591 5.85137 9.95653 5.82606 9.95653C5.79652 9.95653 5.78387 9.93028 5.78387 9.93028C5.78387 9.93028 5.75434 9.95216 5.72902 9.94778C5.70371 9.94778 5.6784 9.91278 5.6784 9.91278C5.6784 9.91278 5.65309 9.94778 5.62777 9.94778C5.60246 9.95216 5.58559 9.92591 5.58559 9.92591C5.58559 9.92591 5.56871 9.95216 5.53918 9.95653C5.50965 9.96091 5.48012 9.93028 5.48012 9.93028C5.48012 9.93028 5.45902 9.96091 5.43793 9.97403C5.41684 9.97403 5.3873 9.95653 5.3873 9.95653L5.37887 9.97841L5.36621 9.98278L5.37465 10.0047C5.47373 9.97742 5.5759 9.96417 5.6784 9.96528C5.80496 9.96528 5.91043 9.98278 5.99059 10.009L5.99902 9.98278"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.99481 9.98278L5.97371 9.96091C5.97371 9.96091 5.9484 9.97403 5.91887 9.96966C5.89355 9.96966 5.8809 9.92591 5.8809 9.92591C5.8809 9.92591 5.85137 9.95653 5.82606 9.95653C5.79652 9.95653 5.78387 9.93028 5.78387 9.93028C5.78387 9.93028 5.75434 9.95216 5.72902 9.94778C5.70371 9.94778 5.6784 9.91278 5.6784 9.91278C5.6784 9.91278 5.65309 9.94778 5.62777 9.94778C5.60246 9.95216 5.58559 9.92591 5.58559 9.92591C5.58559 9.92591 5.56871 9.95216 5.53918 9.95653C5.50965 9.96091 5.48012 9.93028 5.48012 9.93028C5.48012 9.93028 5.45902 9.96091 5.43793 9.97403C5.41684 9.97403 5.3873 9.95653 5.3873 9.95653L5.37887 9.97841L5.36621 9.98278L5.37465 10.0047C5.47373 9.97742 5.5759 9.96417 5.6784 9.96528C5.80496 9.96528 5.91043 9.98278 5.99059 10.009L5.99902 9.98278H5.99481Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.6827 9.87341H5.69113C5.69 9.87919 5.69 9.88514 5.69113 9.89091C5.69113 9.91716 5.70801 9.93466 5.73332 9.93466C5.74263 9.93511 5.75181 9.93234 5.75944 9.9268C5.76707 9.92126 5.77272 9.91326 5.77551 9.90404L5.78395 9.89091V9.90841C5.78816 9.93029 5.80926 9.94341 5.83035 9.94341C5.85566 9.94341 5.87254 9.92591 5.87254 9.89966V9.89529L5.88941 9.87779L5.89785 9.89966C5.89516 9.90508 5.89371 9.91107 5.89363 9.91716C5.89363 9.92877 5.89808 9.93989 5.90599 9.9481C5.9139 9.9563 5.92463 9.96091 5.93582 9.96091C5.9527 9.96091 5.96535 9.95216 5.97379 9.93904L5.98223 9.93029V9.94341C5.98223 9.95654 5.98645 9.96966 5.9991 9.97404C5.9991 9.97404 6.01598 9.97404 6.04129 9.95654L6.07082 9.92591V9.94341C6.07082 9.94341 6.04973 9.97841 6.02863 9.98716C6.02019 9.99591 6.00754 10.0047 5.99488 10.0003C5.98223 10.0003 5.96957 9.98716 5.96535 9.97404C5.95691 9.98279 5.94848 9.98279 5.93582 9.98279C5.91051 9.98279 5.8852 9.96966 5.87676 9.94779C5.8641 9.96091 5.84723 9.96966 5.83035 9.96966C5.82058 9.96935 5.811 9.96684 5.80226 9.96231C5.79352 9.95777 5.78583 9.95133 5.77973 9.94341C5.76804 9.95413 5.75313 9.96031 5.73754 9.96091C5.72706 9.96126 5.71665 9.95906 5.70713 9.95451C5.69761 9.94995 5.68924 9.94316 5.6827 9.93466C5.67698 9.94269 5.66968 9.94936 5.66128 9.95423C5.65288 9.95909 5.64357 9.96203 5.63398 9.96286C5.6244 9.96369 5.61475 9.96238 5.60569 9.95903C5.59663 9.95568 5.58836 9.95035 5.58145 9.94341C5.57534 9.95133 5.56765 9.95777 5.55891 9.96231C5.55017 9.96684 5.54059 9.96935 5.53082 9.96966C5.52205 9.96955 5.51339 9.96755 5.5054 9.96379C5.49741 9.96002 5.49026 9.95457 5.48441 9.94779C5.47598 9.96966 5.45066 9.98279 5.42535 9.98279C5.41691 9.98279 5.40426 9.98279 5.39582 9.97404C5.3916 9.98716 5.37895 10.0003 5.36629 10.0003C5.35363 10.0003 5.34098 10.0003 5.32832 9.99154L5.28613 9.94779L5.29035 9.92591L5.3241 9.95654C5.3452 9.97404 5.36207 9.97404 5.36207 9.97404C5.37473 9.97404 5.37895 9.95654 5.37895 9.94341V9.93029L5.38738 9.93904C5.39582 9.95216 5.40848 9.96091 5.42535 9.96091C5.43654 9.96091 5.44727 9.9563 5.45518 9.9481C5.46309 9.93989 5.46754 9.92877 5.46754 9.91716C5.46881 9.9114 5.46881 9.90542 5.46754 9.89966V9.87779L5.48441 9.89529C5.48431 9.89674 5.48431 9.89821 5.48441 9.89966C5.48441 9.92591 5.50551 9.94341 5.5266 9.94341C5.55191 9.94341 5.56879 9.93029 5.57301 9.90404V9.89091L5.58145 9.90404C5.58988 9.92154 5.60676 9.93466 5.62363 9.93466C5.65316 9.93466 5.67004 9.91716 5.67004 9.89091C5.67068 9.88656 5.67068 9.88214 5.67004 9.87779H5.6827"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.6827 9.87341H5.69113C5.69 9.87919 5.69 9.88514 5.69113 9.89091C5.69113 9.91716 5.70801 9.93466 5.73332 9.93466C5.74263 9.93511 5.75181 9.93234 5.75944 9.9268C5.76707 9.92126 5.77272 9.91326 5.77551 9.90404L5.78395 9.89091V9.90841C5.78816 9.93029 5.80926 9.94341 5.83035 9.94341C5.85566 9.94341 5.87254 9.92591 5.87254 9.89966V9.89529L5.88941 9.87779L5.89785 9.89966C5.89516 9.90508 5.89371 9.91107 5.89363 9.91716C5.89363 9.92877 5.89808 9.93989 5.90599 9.9481C5.9139 9.9563 5.92463 9.96091 5.93582 9.96091C5.9527 9.96091 5.96535 9.95216 5.97379 9.93904L5.98223 9.93029V9.94341C5.98223 9.95654 5.98645 9.96966 5.9991 9.97404C5.9991 9.97404 6.01598 9.97404 6.04129 9.95654L6.07082 9.92591V9.94341C6.07082 9.94341 6.04973 9.97841 6.02863 9.98716C6.02019 9.99591 6.00754 10.0047 5.99488 10.0003C5.98223 10.0003 5.96957 9.98716 5.96535 9.97404C5.95691 9.98279 5.94848 9.98279 5.93582 9.98279C5.91051 9.98279 5.8852 9.96966 5.87676 9.94779C5.8641 9.96091 5.84723 9.96966 5.83035 9.96966C5.82058 9.96935 5.811 9.96684 5.80226 9.96231C5.79352 9.95777 5.78583 9.95133 5.77973 9.94341C5.76804 9.95413 5.75313 9.96031 5.73754 9.96091C5.72706 9.96126 5.71665 9.95906 5.70713 9.95451C5.69761 9.94995 5.68924 9.94316 5.6827 9.93466C5.67698 9.94269 5.66968 9.94936 5.66128 9.95423C5.65288 9.95909 5.64357 9.96203 5.63398 9.96286C5.6244 9.96369 5.61475 9.96238 5.60569 9.95903C5.59663 9.95568 5.58836 9.95035 5.58145 9.94341C5.57534 9.95133 5.56765 9.95777 5.55891 9.96231C5.55017 9.96684 5.54059 9.96935 5.53082 9.96966C5.52205 9.96955 5.51339 9.96755 5.5054 9.96379C5.49741 9.96002 5.49026 9.95457 5.48441 9.94779C5.47598 9.96966 5.45066 9.98279 5.42535 9.98279C5.41691 9.98279 5.40426 9.98279 5.39582 9.97404C5.3916 9.98716 5.37895 10.0003 5.36629 10.0003C5.35363 10.0003 5.34098 10.0003 5.32832 9.99154L5.28613 9.94779L5.29035 9.92591L5.3241 9.95654C5.3452 9.97404 5.36207 9.97404 5.36207 9.97404C5.37473 9.97404 5.37895 9.95654 5.37895 9.94341V9.93029L5.38738 9.93904C5.39582 9.95216 5.40848 9.96091 5.42535 9.96091C5.43654 9.96091 5.44727 9.9563 5.45518 9.9481C5.46309 9.93989 5.46754 9.92877 5.46754 9.91716C5.46881 9.9114 5.46881 9.90542 5.46754 9.89966V9.87779L5.48441 9.89529C5.48431 9.89674 5.48431 9.89821 5.48441 9.89966C5.48441 9.92591 5.50551 9.94341 5.5266 9.94341C5.55191 9.94341 5.56879 9.93029 5.57301 9.90404V9.89091L5.58145 9.90404C5.58988 9.92154 5.60676 9.93466 5.62363 9.93466C5.65316 9.93466 5.67004 9.91716 5.67004 9.89091C5.67068 9.88656 5.67068 9.88214 5.67004 9.87779H5.6827V9.87341Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.67841 9.98712C5.55607 9.98712 5.44638 10.0046 5.37044 10.0309L5.35779 10.0221L5.36201 10.009C5.46497 9.97909 5.57149 9.96436 5.67841 9.96525C5.80498 9.96525 5.91888 9.98275 5.99904 10.009C5.99904 10.009 6.00748 10.0177 6.00326 10.0221L5.9906 10.0309C5.88896 10.0015 5.78392 9.98681 5.67841 9.98712Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.67841 9.98712C5.55607 9.98712 5.44638 10.0046 5.37044 10.0309L5.35779 10.0221L5.36201 10.009C5.46497 9.97909 5.57149 9.96436 5.67841 9.96525C5.80498 9.96525 5.91888 9.98275 5.99904 10.009C5.99904 10.009 6.00748 10.0177 6.00326 10.0221L5.9906 10.0309C5.88896 10.0015 5.78392 9.98681 5.67841 9.98712Z"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.56031 10.0348C5.56031 10.022 5.56852 10.0178 5.58083 10.0178C5.58519 10.0178 5.58937 10.0196 5.59244 10.0227C5.59552 10.0259 5.59725 10.0303 5.59725 10.0348C5.59725 10.0433 5.58904 10.0518 5.58083 10.0518C5.57837 10.0525 5.57578 10.0525 5.57329 10.052C5.57079 10.0514 5.56846 10.0503 5.56646 10.0486C5.56447 10.047 5.56288 10.0449 5.56181 10.0425C5.56074 10.0401 5.56023 10.0374 5.56031 10.0348Z"
                              fill="white"
                            />
                            <path
                              d="M5.56031 10.0348C5.56031 10.022 5.56852 10.0178 5.58083 10.0178C5.58519 10.0178 5.58937 10.0196 5.59244 10.0227C5.59552 10.0259 5.59725 10.0303 5.59725 10.0348C5.59725 10.0433 5.58904 10.0518 5.58083 10.0518C5.57837 10.0525 5.57578 10.0525 5.57329 10.052C5.57079 10.0514 5.56846 10.0503 5.56646 10.0486C5.56447 10.047 5.56288 10.0449 5.56181 10.0425C5.56074 10.0401 5.56023 10.0374 5.56031 10.0348Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.68223 10.0395H5.64037C5.63618 10.0395 5.62781 10.0395 5.62781 10.0265L5.64037 10.0134H5.72409C5.72666 10.0144 5.72886 10.0161 5.73037 10.0185C5.73188 10.0208 5.73262 10.0236 5.73246 10.0265C5.73246 10.0299 5.73114 10.0332 5.72878 10.0357C5.72643 10.0381 5.72323 10.0395 5.7199 10.0395H5.67804"
                              fill="#AD1519"
                            />
                            <path
                              d="M5.68223 10.0395H5.64037C5.63618 10.0395 5.62781 10.0395 5.62781 10.0265L5.64037 10.0134H5.72409C5.72666 10.0144 5.72886 10.0161 5.73037 10.0185C5.73188 10.0208 5.73262 10.0236 5.73246 10.0265C5.73246 10.0299 5.73114 10.0332 5.72878 10.0357C5.72643 10.0381 5.72323 10.0395 5.7199 10.0395H5.67804"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.48402 10.0569H5.45472C5.45053 10.0569 5.44216 10.0569 5.44216 10.0483C5.442 10.0454 5.44274 10.0426 5.44425 10.0403C5.44576 10.0379 5.44796 10.0362 5.45053 10.0352L5.47983 10.0309L5.50914 10.0266C5.51751 10.0266 5.5217 10.0266 5.52588 10.0352C5.52658 10.0373 5.52678 10.0394 5.52647 10.0416C5.52615 10.0437 5.52534 10.0457 5.5241 10.0474C5.52285 10.0491 5.52122 10.0505 5.51934 10.0514C5.51746 10.0523 5.51539 10.0527 5.51332 10.0526H5.48402"
                              fill="#058E6E"
                            />
                            <path
                              d="M5.48402 10.0569H5.45472C5.45053 10.0569 5.44216 10.0569 5.44216 10.0483C5.442 10.0454 5.44274 10.0426 5.44425 10.0403C5.44576 10.0379 5.44796 10.0362 5.45053 10.0352L5.47983 10.0309L5.50914 10.0266C5.51751 10.0266 5.5217 10.0266 5.52588 10.0352C5.52658 10.0373 5.52678 10.0394 5.52647 10.0416C5.52615 10.0437 5.52534 10.0457 5.5241 10.0474C5.52285 10.0491 5.52122 10.0505 5.51934 10.0514C5.51746 10.0523 5.51539 10.0527 5.51332 10.0526H5.48402"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.37048 10.0746L5.38314 10.0571H5.41267L5.3958 10.0834L5.37048 10.0746Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M5.37048 10.0746L5.38314 10.0571H5.41267L5.3958 10.0834L5.37048 10.0746Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.76282 10.0348C5.76282 10.022 5.77103 10.0178 5.77924 10.0178C5.78171 10.0171 5.78429 10.017 5.78678 10.0176C5.78928 10.0181 5.79161 10.0193 5.79361 10.0209C5.7956 10.0226 5.79719 10.0247 5.79826 10.0271C5.79933 10.0295 5.79984 10.0321 5.79976 10.0348C5.79984 10.0374 5.79933 10.0401 5.79826 10.0425C5.79719 10.0449 5.7956 10.047 5.79361 10.0486C5.79161 10.0503 5.78928 10.0514 5.78678 10.052C5.78429 10.0525 5.78171 10.0525 5.77924 10.0518C5.77488 10.0518 5.77071 10.05 5.76763 10.0468C5.76455 10.0436 5.76282 10.0393 5.76282 10.0348Z"
                              fill="white"
                            />
                            <path
                              d="M5.76282 10.0348C5.76282 10.022 5.77103 10.0178 5.77924 10.0178C5.78171 10.0171 5.78429 10.017 5.78678 10.0176C5.78928 10.0181 5.79161 10.0193 5.79361 10.0209C5.7956 10.0226 5.79719 10.0247 5.79826 10.0271C5.79933 10.0295 5.79984 10.0321 5.79976 10.0348C5.79984 10.0374 5.79933 10.0401 5.79826 10.0425C5.79719 10.0449 5.7956 10.047 5.79361 10.0486C5.79161 10.0503 5.78928 10.0514 5.78678 10.052C5.78429 10.0525 5.78171 10.0525 5.77924 10.0518C5.77488 10.0518 5.77071 10.05 5.76763 10.0468C5.76455 10.0436 5.76282 10.0393 5.76282 10.0348Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.87633 10.0569H5.90145C5.90309 10.0576 5.90486 10.0579 5.90662 10.0578C5.90839 10.0578 5.91012 10.0573 5.9117 10.0565C5.91328 10.0557 5.91467 10.0545 5.91579 10.0531C5.91691 10.0517 5.91773 10.05 5.9182 10.0483C5.9182 10.0465 5.91787 10.0449 5.91724 10.0433C5.91661 10.0417 5.91568 10.0403 5.91452 10.039C5.91335 10.0378 5.91197 10.0369 5.91044 10.0362C5.90892 10.0356 5.90729 10.0352 5.90564 10.0352L5.88052 10.0309L5.85122 10.0266C5.84284 10.0266 5.83866 10.0266 5.83447 10.0352C5.83447 10.0439 5.83866 10.0483 5.84703 10.0526H5.87633"
                              fill="#058E6E"
                            />
                            <path
                              d="M5.87633 10.0569H5.90145C5.90309 10.0576 5.90486 10.0579 5.90662 10.0578C5.90839 10.0578 5.91012 10.0573 5.9117 10.0565C5.91328 10.0557 5.91467 10.0545 5.91579 10.0531C5.91691 10.0517 5.91773 10.05 5.9182 10.0483C5.9182 10.0465 5.91787 10.0449 5.91724 10.0433C5.91661 10.0417 5.91568 10.0403 5.91452 10.039C5.91335 10.0378 5.91197 10.0369 5.91044 10.0362C5.90892 10.0356 5.90729 10.0352 5.90564 10.0352L5.88052 10.0309L5.85122 10.0266C5.84284 10.0266 5.83866 10.0266 5.83447 10.0352C5.83447 10.0439 5.83866 10.0483 5.84703 10.0526H5.87633"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.99067 10.079L5.97802 10.0571H5.94849L5.96114 10.0834L5.98645 10.079"
                              fill="#AD1519"
                            />
                            <path
                              d="M5.99067 10.079L5.97802 10.0571H5.94849L5.96114 10.0834L5.98645 10.079"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.67842 10.1534C5.59333 10.1553 5.50834 10.1464 5.42529 10.1271C5.59298 10.0847 5.76807 10.0847 5.93576 10.1271C5.86826 10.1446 5.77967 10.1534 5.68264 10.1534"
                              fill="#AD1519"
                            />
                            <path
                              d="M5.67842 10.1534C5.59333 10.1553 5.50834 10.1464 5.42529 10.1271C5.59298 10.0847 5.76807 10.0847 5.93576 10.1271C5.86826 10.1446 5.77967 10.1534 5.68264 10.1534H5.67842Z"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.9902 9.92961L5.98606 9.91718C5.97777 9.91718 5.97363 9.91718 5.96948 9.92546C5.96948 9.93375 5.96948 9.94204 5.97777 9.94204C5.97777 9.94204 5.98606 9.94204 5.9902 9.92961Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.9902 9.92961L5.98606 9.91718C5.97777 9.91718 5.97363 9.91718 5.96948 9.92546C5.96948 9.93375 5.96948 9.94204 5.97777 9.94204C5.97777 9.94204 5.98606 9.94204 5.9902 9.92961Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.79254 9.89477C5.79254 9.88626 5.79254 9.87775 5.78403 9.87775C5.78403 9.87775 5.77551 9.882 5.77551 9.89052C5.77551 9.89903 5.77551 9.90754 5.78403 9.90754L5.7968 9.89477"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.79254 9.89477C5.79254 9.88626 5.79254 9.87775 5.78403 9.87775C5.78403 9.87775 5.77551 9.882 5.77551 9.89052C5.77551 9.89903 5.77551 9.90754 5.78403 9.90754L5.7968 9.89477H5.79254Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.56873 9.89477L5.57298 9.87775C5.5815 9.87775 5.58575 9.882 5.58575 9.89052C5.58575 9.89903 5.58575 9.90754 5.57724 9.90754L5.56873 9.89477Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.56873 9.89477L5.57298 9.87775C5.5815 9.87775 5.58575 9.882 5.58575 9.89052C5.58575 9.89903 5.58575 9.90754 5.57724 9.90754L5.56873 9.89477Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.37048 9.92961L5.37463 9.91718C5.38292 9.91718 5.38706 9.91718 5.3912 9.92546C5.3912 9.93375 5.3912 9.94204 5.38291 9.94204C5.38291 9.94204 5.37463 9.94204 5.37048 9.92961Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.37048 9.92961L5.37463 9.91718C5.38292 9.91718 5.38706 9.91718 5.3912 9.92546C5.3912 9.93375 5.3912 9.94204 5.38291 9.94204C5.38291 9.94204 5.37463 9.94204 5.37048 9.92961Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.67814 9.77716L5.64465 9.79887L5.66977 9.8553L5.67814 9.85964L5.68652 9.8553L5.71582 9.79887L5.67814 9.77716Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.67814 9.77716L5.64465 9.79887L5.66977 9.8553L5.67814 9.85964L5.68652 9.8553L5.71582 9.79887L5.67814 9.77716Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.60254 9.86443L5.61928 9.88613L5.6737 9.86877L5.67789 9.86008L5.6737 9.8514L5.61928 9.83838L5.60254 9.86443Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.60254 9.86443L5.61928 9.88613L5.6737 9.86877L5.67789 9.86008L5.6737 9.8514L5.61928 9.83838L5.60254 9.86443Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.75382 9.86443L5.74126 9.88613L5.68684 9.86877L5.67847 9.86008L5.68684 9.8514L5.74126 9.83838L5.75382 9.86443Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.75382 9.86443L5.74126 9.88613L5.68684 9.86877L5.67847 9.86008L5.68684 9.8514L5.74126 9.83838L5.75382 9.86443Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.4546 9.79901L5.42529 9.8294L5.46297 9.87281L5.47134 9.87715L5.47553 9.87281L5.48809 9.81638L5.4546 9.80335"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.4546 9.79901L5.42529 9.8294L5.46297 9.87281L5.47134 9.87715L5.47553 9.87281L5.48809 9.81638L5.4546 9.80335"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.39994 9.89507L5.41668 9.91677L5.46692 9.89072V9.88204L5.46273 9.87336L5.40831 9.86902L5.39575 9.89507"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.39994 9.89507L5.41668 9.91677L5.46692 9.89072V9.88204L5.46273 9.87336L5.40831 9.86902L5.39575 9.89507"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.54712 9.86448L5.53456 9.89053H5.48432L5.47595 9.88184L5.48014 9.86882L5.53037 9.84277L5.5513 9.86448"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.54712 9.86448L5.53456 9.89053H5.48432L5.47595 9.88184L5.48014 9.86882L5.53037 9.84277L5.5513 9.86448"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.34042 9.9039V9.92995L5.28181 9.93863L5.27344 9.93429V9.92561L5.3153 9.88654L5.34042 9.9039Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.34042 9.9039V9.92995L5.28181 9.93863L5.27344 9.93429V9.92561L5.3153 9.88654L5.34042 9.9039Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.45068 9.88217C5.45068 9.86904 5.45912 9.86029 5.47178 9.86029C5.48443 9.86029 5.49287 9.86904 5.49287 9.88217C5.49188 9.88718 5.48923 9.89168 5.48538 9.89488C5.48153 9.89807 5.47671 9.89977 5.47178 9.89967C5.46684 9.89977 5.46203 9.89807 5.45818 9.89488C5.45432 9.89168 5.45167 9.88718 5.45068 9.88217Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.45068 9.88217C5.45068 9.86904 5.45912 9.86029 5.47178 9.86029C5.48443 9.86029 5.49287 9.86904 5.49287 9.88217C5.49188 9.88718 5.48923 9.89168 5.48538 9.89488C5.48153 9.89807 5.47671 9.89977 5.47178 9.89967C5.46684 9.89977 5.46203 9.89807 5.45818 9.89488C5.45432 9.89168 5.45167 9.88718 5.45068 9.88217Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.90605 9.79901L5.93535 9.8294L5.89768 9.87281L5.8893 9.87715L5.88512 9.87281L5.87256 9.81638L5.90605 9.80335"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.90605 9.79901L5.93535 9.8294L5.89768 9.87281L5.8893 9.87715L5.88512 9.87281L5.87256 9.81638L5.90605 9.80335"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.96472 9.89507L5.94379 9.91677L5.89355 9.89072V9.88204L5.89774 9.87336L5.95216 9.86902L5.96472 9.89507Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.96472 9.89507L5.94379 9.91677L5.89355 9.89072V9.88204L5.89774 9.87336L5.95216 9.86902L5.96472 9.89507Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.81348 9.86448L5.82604 9.89053H5.88045L5.88883 9.88184L5.88464 9.86882L5.83441 9.84277L5.81348 9.86448Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.81348 9.86448L5.82604 9.89053H5.88045L5.88883 9.88184L5.88464 9.86882L5.83441 9.84277L5.81348 9.86448Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M6.01172 9.9039L6.01591 9.92995L6.07032 9.93863L6.0787 9.93429V9.92561L6.03684 9.88654L6.01172 9.9039Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M6.01172 9.9039L6.01591 9.92995L6.07032 9.93863L6.0787 9.93429V9.92561L6.03684 9.88654L6.01172 9.9039Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.6615 9.8598C5.66226 9.85557 5.66424 9.85169 5.66717 9.84865C5.6701 9.84561 5.67385 9.84356 5.67792 9.84277C5.69024 9.84277 5.69845 9.85129 5.69845 9.8598C5.69845 9.86545 5.69628 9.87086 5.69243 9.87485C5.68859 9.87884 5.68337 9.88108 5.67792 9.88108C5.67322 9.88009 5.669 9.87741 5.666 9.87353C5.663 9.86964 5.66141 9.86478 5.6615 9.8598Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.6615 9.8598C5.66226 9.85557 5.66424 9.85169 5.66717 9.84865C5.6701 9.84561 5.67385 9.84356 5.67792 9.84277C5.69024 9.84277 5.69845 9.85129 5.69845 9.8598C5.69845 9.86545 5.69628 9.87086 5.69243 9.87485C5.68859 9.87884 5.68337 9.88108 5.67792 9.88108C5.67322 9.88009 5.669 9.87741 5.666 9.87353C5.663 9.86964 5.66141 9.86478 5.6615 9.8598Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.86829 9.88217C5.86829 9.86904 5.88094 9.86029 5.88938 9.86029C5.89497 9.86029 5.90034 9.8626 5.9043 9.8667C5.90825 9.8708 5.91047 9.87636 5.91047 9.88217C5.90949 9.88718 5.90684 9.89168 5.90298 9.89488C5.89913 9.89807 5.89431 9.89977 5.88938 9.89967C5.88445 9.89977 5.87963 9.89807 5.87578 9.89488C5.87192 9.89168 5.86927 9.88718 5.86829 9.88217Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.86829 9.88217C5.86829 9.86904 5.88094 9.86029 5.88938 9.86029C5.89497 9.86029 5.90034 9.8626 5.9043 9.8667C5.90825 9.8708 5.91047 9.87636 5.91047 9.88217C5.90949 9.88718 5.90684 9.89168 5.90298 9.89488C5.89913 9.89807 5.89431 9.89977 5.88938 9.89967C5.88445 9.89977 5.87963 9.89807 5.87578 9.89488C5.87192 9.89168 5.86927 9.88718 5.86829 9.88217Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.26463 9.93858L5.23951 9.90819C5.23114 9.89951 5.21021 9.89516 5.21021 9.89516C5.21021 9.89082 5.22276 9.88214 5.23532 9.88214C5.23857 9.88214 5.24178 9.88293 5.24468 9.88443C5.24759 9.88594 5.25012 9.88813 5.25207 9.89082V9.88214C5.25207 9.88214 5.26463 9.88214 5.26881 9.89516V9.93858"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.26463 9.93858L5.23951 9.90819C5.23114 9.89951 5.21021 9.89516 5.21021 9.89516C5.21021 9.89082 5.22276 9.88214 5.23532 9.88214C5.23857 9.88214 5.24178 9.88293 5.24468 9.88443C5.24759 9.88594 5.25012 9.88813 5.25207 9.89082V9.88214C5.25207 9.88214 5.26463 9.88214 5.26881 9.89516V9.93858H5.26463Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.26492 9.93009C5.26902 9.92158 5.28133 9.92158 5.28544 9.93009C5.29365 9.93435 5.29775 9.94286 5.29365 9.95137L5.27313 9.94712C5.26492 9.94286 5.26081 9.93009 5.26492 9.92583"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.26492 9.93009C5.26902 9.92158 5.28133 9.92158 5.28544 9.93009C5.29365 9.93435 5.29775 9.94286 5.29365 9.95137L5.27313 9.94712C5.26492 9.94286 5.26081 9.93009 5.26492 9.92583V9.93009Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M6.08768 9.93858L6.1128 9.90819C6.12117 9.89951 6.1421 9.89516 6.1421 9.89516C6.1421 9.89082 6.12954 9.88214 6.11699 9.88214C6.11053 9.88269 6.10454 9.8858 6.10024 9.89082V9.88214C6.10024 9.88214 6.08768 9.88214 6.0835 9.89516V9.92555L6.08768 9.93858Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M6.08768 9.93858L6.1128 9.90819C6.12117 9.89951 6.1421 9.89516 6.1421 9.89516C6.1421 9.89082 6.12954 9.88214 6.11699 9.88214C6.11053 9.88269 6.10454 9.8858 6.10024 9.89082V9.88214C6.10024 9.88214 6.08768 9.88214 6.0835 9.89516V9.92555L6.08768 9.93858Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M6.0869 9.93009C6.0869 9.92158 6.07458 9.92158 6.06637 9.93009C6.05816 9.93435 6.05816 9.94286 6.06227 9.95137L6.08279 9.94712C6.091 9.94286 6.091 9.93009 6.0869 9.92583"
                              fill="#C8B100"
                            />
                            <path
                              d="M6.0869 9.93009C6.0869 9.92158 6.07458 9.92158 6.06637 9.93009C6.05816 9.93435 6.05816 9.94286 6.06227 9.95137L6.08279 9.94712C6.091 9.94286 6.091 9.93009 6.0869 9.92583V9.93009Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.2312 10.4115H6.13401V10.1709H5.2312V10.4159V10.4115Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.2312 10.4115H6.13401V10.1709H5.2312V10.4159V10.4115Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M5.3241 10.5778C5.32966 10.5766 5.3354 10.5766 5.34097 10.5778H6.03707C6.0258 10.5743 6.01577 10.5675 6.00826 10.5582C6.00074 10.5488 5.99608 10.5374 5.99488 10.5253C5.99488 10.499 6.01597 10.4771 6.03707 10.4684C6.03146 10.4691 6.0258 10.4691 6.02019 10.4684H5.34519C5.33822 10.4697 5.33107 10.4697 5.3241 10.4684C5.34941 10.4771 5.36628 10.499 5.36628 10.5253C5.36569 10.5376 5.36125 10.5493 5.35364 10.5588C5.34603 10.5683 5.33566 10.5749 5.3241 10.5778Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.3241 10.5778C5.32966 10.5766 5.3354 10.5766 5.34097 10.5778H6.03707C6.0258 10.5743 6.01577 10.5675 6.00826 10.5582C6.00074 10.5488 5.99608 10.5374 5.99488 10.5253C5.99488 10.499 6.01597 10.4771 6.03707 10.4684C6.03146 10.4691 6.0258 10.4691 6.02019 10.4684H5.34519C5.33822 10.4697 5.33107 10.4697 5.3241 10.4684C5.34941 10.4771 5.36628 10.499 5.36628 10.5253C5.36569 10.5376 5.36125 10.5493 5.35364 10.5588C5.34603 10.5683 5.33566 10.5749 5.3241 10.5778Z"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.34089 10.5778H6.01589C6.04121 10.5778 6.05808 10.5909 6.05808 10.6084C6.05808 10.6259 6.04121 10.6434 6.01589 10.6434H5.34089C5.3198 10.6434 5.29871 10.6259 5.29871 10.6084C5.29871 10.5909 5.3198 10.5734 5.34089 10.5734"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.34089 10.5778H6.01589C6.04121 10.5778 6.05808 10.5909 6.05808 10.6084C6.05808 10.6259 6.04121 10.6434 6.01589 10.6434H5.34089C5.3198 10.6434 5.29871 10.6259 5.29871 10.6084C5.29871 10.5909 5.3198 10.5734 5.34089 10.5734V10.5778Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M5.34089 10.4115H6.01589C6.04121 10.4115 6.05808 10.429 6.05808 10.4421C6.05808 10.4596 6.04121 10.4684 6.01589 10.4684H5.34089C5.3198 10.4684 5.29871 10.4596 5.29871 10.4421C5.29871 10.429 5.3198 10.4159 5.34089 10.4159"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.34089 10.4115H6.01589C6.04121 10.4115 6.05808 10.429 6.05808 10.4421C6.05808 10.4596 6.04121 10.4684 6.01589 10.4684H5.34089C5.3198 10.4684 5.29871 10.4596 5.29871 10.4421C5.29871 10.429 5.3198 10.4159 5.34089 10.4159V10.4115Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.31121 14.5415C6.25215 14.5415 6.19309 14.5284 6.15512 14.5065C6.10505 14.482 6.05015 14.47 5.9948 14.4715C5.93574 14.4715 5.8809 14.4846 5.83871 14.5065C5.78869 14.5311 5.73375 14.5431 5.6784 14.5415C5.61512 14.5415 5.56027 14.5284 5.5223 14.5065C5.47352 14.4827 5.42013 14.4707 5.36621 14.4715C5.31223 14.47 5.2587 14.482 5.21012 14.5065C5.1601 14.5311 5.10516 14.5431 5.0498 14.5415V14.6465C5.11309 14.6465 5.16793 14.629 5.21012 14.6071C5.2588 14.583 5.31226 14.571 5.36621 14.5721C5.42527 14.5721 5.48012 14.5852 5.5223 14.6071C5.56449 14.629 5.61512 14.6465 5.6784 14.6465C5.73408 14.6466 5.789 14.6331 5.83871 14.6071C5.8809 14.5852 5.93574 14.5721 5.9948 14.5721C6.05809 14.5721 6.11293 14.5852 6.15512 14.6071C6.1973 14.629 6.24793 14.6465 6.31121 14.6465V14.5415Z"
                              fill="#005BBF"
                            />
                            <path
                              d="M6.31121 14.5415C6.25215 14.5415 6.19309 14.5284 6.15512 14.5065C6.10505 14.482 6.05015 14.47 5.99481 14.4715C5.93574 14.4715 5.8809 14.4846 5.83871 14.5065C5.78869 14.5311 5.73375 14.5431 5.6784 14.5415C5.61512 14.5415 5.56027 14.5284 5.5223 14.5065C5.47352 14.4827 5.42013 14.4707 5.36621 14.4715C5.31223 14.47 5.2587 14.482 5.21012 14.5065C5.1601 14.5311 5.10516 14.5431 5.0498 14.5415V14.6465C5.11309 14.6465 5.16793 14.629 5.21012 14.6071C5.2588 14.583 5.31226 14.571 5.36621 14.5721C5.42527 14.5721 5.48012 14.5852 5.5223 14.6071C5.56449 14.629 5.61512 14.6465 5.6784 14.6465C5.73408 14.6466 5.789 14.6331 5.83871 14.6071C5.8809 14.5852 5.93574 14.5721 5.99481 14.5721C6.05809 14.5721 6.11293 14.5852 6.15512 14.6071C6.1973 14.629 6.24793 14.6465 6.31121 14.6465V14.5415Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.31121 14.6465C6.25688 14.6466 6.20333 14.6331 6.15512 14.6072C6.1051 14.5825 6.05016 14.5705 5.9948 14.5722C5.93574 14.5722 5.8809 14.5853 5.83871 14.6072C5.79652 14.629 5.74168 14.6465 5.6784 14.6465C5.61512 14.6465 5.56027 14.629 5.5223 14.6072C5.47352 14.5833 5.42013 14.5714 5.36621 14.5722C5.31226 14.5711 5.2588 14.583 5.21012 14.6072C5.16793 14.629 5.11309 14.6465 5.0498 14.6465V14.7472C5.11309 14.7472 5.16793 14.7297 5.21012 14.7078C5.25911 14.685 5.31258 14.6745 5.36621 14.6772C5.42527 14.6772 5.48012 14.6859 5.5223 14.7078C5.57134 14.7336 5.62554 14.747 5.68051 14.747C5.73548 14.747 5.78967 14.7336 5.83871 14.7078C5.88826 14.6834 5.94255 14.6711 5.9974 14.6718C6.05226 14.6726 6.10621 14.6864 6.15512 14.7122C6.20375 14.7365 6.25724 14.7485 6.31121 14.7472V14.6465Z"
                              fill="#CCCCCC"
                            />
                            <path
                              d="M6.31121 14.6465C6.25688 14.6466 6.20333 14.6331 6.15512 14.6072C6.1051 14.5825 6.05016 14.5705 5.99481 14.5722C5.93574 14.5722 5.8809 14.5853 5.83871 14.6072C5.79652 14.629 5.74168 14.6465 5.6784 14.6465C5.61512 14.6465 5.56027 14.629 5.5223 14.6072C5.47352 14.5833 5.42013 14.5714 5.36621 14.5722C5.31226 14.5711 5.2588 14.583 5.21012 14.6072C5.16793 14.629 5.11309 14.6465 5.0498 14.6465V14.7472C5.11309 14.7472 5.16793 14.7297 5.21012 14.7078C5.25911 14.685 5.31258 14.6745 5.36621 14.6772C5.42527 14.6772 5.48012 14.6859 5.5223 14.7078C5.57134 14.7336 5.62554 14.747 5.68051 14.747C5.73548 14.747 5.78967 14.7336 5.83871 14.7078C5.88826 14.6834 5.94255 14.6711 5.9974 14.6718C6.05226 14.6726 6.10621 14.6864 6.15512 14.7122C6.20375 14.7365 6.25724 14.7485 6.31121 14.7472V14.6465Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.31121 14.7428C6.25707 14.7462 6.20306 14.7341 6.15512 14.7078C6.10475 14.6846 6.04982 14.6741 5.9948 14.6772C5.93574 14.6772 5.8809 14.6859 5.83871 14.7078C5.79652 14.734 5.74168 14.7472 5.6784 14.7472C5.61512 14.7472 5.56027 14.7297 5.5223 14.7078C5.47352 14.684 5.42013 14.672 5.36621 14.6728C5.31223 14.6713 5.2587 14.6833 5.21012 14.7078C5.16793 14.7297 5.11309 14.7472 5.0498 14.7472V14.8478C5.11309 14.8478 5.16793 14.8347 5.21012 14.8084C5.31051 14.7679 5.42191 14.7679 5.5223 14.8084C5.56983 14.8362 5.62386 14.8499 5.6784 14.8478C5.73374 14.8493 5.78864 14.8373 5.83871 14.8128C5.8809 14.7909 5.93574 14.7778 5.9948 14.7778C6.05809 14.7778 6.11293 14.7909 6.15512 14.8128C6.1973 14.8347 6.24793 14.8478 6.31121 14.8478V14.7428Z"
                              fill="#005BBF"
                            />
                            <path
                              d="M6.31121 14.7428C6.25707 14.7462 6.20306 14.7341 6.15512 14.7078C6.10475 14.6846 6.04982 14.6741 5.99481 14.6772C5.93574 14.6772 5.8809 14.6859 5.83871 14.7078C5.79652 14.734 5.74168 14.7472 5.6784 14.7472C5.61512 14.7472 5.56027 14.7297 5.5223 14.7078C5.47352 14.684 5.42013 14.672 5.36621 14.6728C5.31223 14.6713 5.2587 14.6833 5.21012 14.7078C5.16793 14.7297 5.11309 14.7472 5.0498 14.7472V14.8478C5.11309 14.8478 5.16793 14.8347 5.21012 14.8084C5.31051 14.7679 5.42191 14.7679 5.5223 14.8084C5.56983 14.8362 5.62386 14.8499 5.6784 14.8478C5.73374 14.8493 5.78864 14.8373 5.83871 14.8128C5.8809 14.7909 5.93574 14.7778 5.99481 14.7778C6.05809 14.7778 6.11293 14.7909 6.15512 14.8128C6.1973 14.8347 6.24793 14.8478 6.31121 14.8478V14.7428Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.31121 14.9484C6.25723 14.9498 6.2037 14.9378 6.15512 14.9134C6.11293 14.8915 6.05809 14.8784 5.99902 14.8784C5.94368 14.8769 5.88878 14.8889 5.83871 14.9134C5.79652 14.9353 5.74168 14.9484 5.6784 14.9484C5.62386 14.9505 5.56983 14.9369 5.5223 14.909C5.47318 14.8867 5.41981 14.8762 5.36621 14.8784C5.30715 14.8784 5.2523 14.8915 5.21012 14.9134C5.16793 14.9353 5.11309 14.9484 5.0498 14.9484V14.8478C5.1055 14.8481 5.16046 14.8346 5.21012 14.8084C5.31051 14.7679 5.42191 14.7679 5.5223 14.8084C5.57052 14.8344 5.62407 14.8479 5.6784 14.8478C5.73374 14.8493 5.78864 14.8373 5.83871 14.8128C5.8809 14.7909 5.93574 14.7778 5.99902 14.7778C6.05809 14.7778 6.11293 14.7909 6.15512 14.8128C6.1973 14.8346 6.25215 14.8478 6.31121 14.8478V14.9484Z"
                              fill="#CCCCCC"
                            />
                            <path
                              d="M6.31121 14.9484C6.25723 14.9498 6.2037 14.9378 6.15512 14.9134C6.11293 14.8915 6.05809 14.8784 5.99902 14.8784C5.94368 14.8769 5.88878 14.8889 5.83871 14.9134C5.79652 14.9353 5.74168 14.9484 5.6784 14.9484C5.62386 14.9505 5.56983 14.9369 5.5223 14.909C5.47318 14.8867 5.41981 14.8762 5.36621 14.8784C5.30715 14.8784 5.2523 14.8915 5.21012 14.9134C5.16793 14.9353 5.11309 14.9484 5.0498 14.9484V14.8478C5.1055 14.8481 5.16046 14.8346 5.21012 14.8084C5.31051 14.7679 5.42191 14.7679 5.5223 14.8084C5.57052 14.8344 5.62407 14.8479 5.6784 14.8478C5.73374 14.8493 5.78864 14.8373 5.83871 14.8128C5.8809 14.7909 5.93574 14.7778 5.99902 14.7778C6.05809 14.7778 6.11293 14.7909 6.15512 14.8128C6.1973 14.8346 6.25215 14.8478 6.31121 14.8478V14.9484Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.31121 15.049C6.25724 15.0503 6.20375 15.0383 6.15512 15.014C6.11293 14.9922 6.05809 14.979 5.99902 14.979C5.94368 14.9776 5.88878 14.9896 5.83871 15.014C5.79652 15.0359 5.74168 15.049 5.6784 15.049C5.62386 15.0511 5.56983 15.0375 5.5223 15.0097C5.47318 14.9873 5.41981 14.9769 5.36621 14.979C5.30715 14.979 5.2523 14.9922 5.21012 15.014C5.16793 15.0359 5.11309 15.049 5.0498 15.049V14.9484C5.10516 14.9501 5.1601 14.9381 5.21012 14.9134C5.2523 14.8915 5.30715 14.8784 5.36621 14.8784C5.42527 14.8784 5.48012 14.8915 5.5223 14.909C5.57144 14.9345 5.6256 14.9477 5.68051 14.9477C5.73542 14.9477 5.78958 14.9345 5.83871 14.909C5.8809 14.8915 5.93574 14.8784 5.99902 14.8784C6.05809 14.8784 6.11293 14.8915 6.15512 14.9134C6.1973 14.9353 6.24793 14.9484 6.31121 14.9484V15.049Z"
                              fill="#005BBF"
                            />
                            <path
                              d="M6.31121 15.049C6.25724 15.0503 6.20375 15.0383 6.15512 15.014C6.11293 14.9922 6.05809 14.979 5.99902 14.979C5.94368 14.9776 5.88878 14.9896 5.83871 15.014C5.79652 15.0359 5.74168 15.049 5.6784 15.049C5.62386 15.0511 5.56983 15.0375 5.5223 15.0097C5.47318 14.9873 5.41981 14.9769 5.36621 14.979C5.30715 14.979 5.2523 14.9922 5.21012 15.014C5.16793 15.0359 5.11309 15.049 5.0498 15.049V14.9484C5.10516 14.9501 5.1601 14.9381 5.21012 14.9134C5.2523 14.8915 5.30715 14.8784 5.36621 14.8784C5.42527 14.8784 5.48012 14.8915 5.5223 14.909C5.57144 14.9345 5.6256 14.9477 5.68051 14.9477C5.73542 14.9477 5.78958 14.9345 5.83871 14.909C5.8809 14.8915 5.93574 14.8784 5.99902 14.8784C6.05809 14.8784 6.11293 14.8915 6.15512 14.9134C6.1973 14.9353 6.24793 14.9484 6.31121 14.9484V15.049Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M5.3241 14.1302L5.33253 14.1521C5.33253 14.2177 5.27769 14.2659 5.21863 14.2659H6.14675C6.11726 14.2659 6.08891 14.2541 6.06766 14.2328C6.04642 14.2116 6.03394 14.1827 6.03285 14.1521V14.1302C6.02864 14.1308 6.0244 14.1308 6.02019 14.1302H5.34519C5.33822 14.1316 5.33107 14.1316 5.3241 14.1302Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.3241 14.1302L5.33253 14.1521C5.33253 14.2177 5.27769 14.2659 5.21863 14.2659H6.14675C6.11726 14.2659 6.08891 14.2541 6.06766 14.2328C6.04642 14.2116 6.03394 14.1827 6.03285 14.1521V14.1302C6.02864 14.1308 6.0244 14.1308 6.02019 14.1302H5.34519C5.33822 14.1316 5.33107 14.1316 5.3241 14.1302Z"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.34089 14.0646H6.01589C6.04121 14.0646 6.05808 14.0778 6.05808 14.0996C6.05808 14.1171 6.04121 14.1303 6.01589 14.1303H5.34089C5.3198 14.1303 5.29871 14.1171 5.29871 14.0953C5.29871 14.0778 5.3198 14.0646 5.34089 14.0646Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.34089 14.0646H6.01589C6.04121 14.0646 6.05808 14.0778 6.05808 14.0996C6.05808 14.1171 6.04121 14.1303 6.01589 14.1303H5.34089C5.3198 14.1303 5.29871 14.1171 5.29871 14.0953C5.29871 14.0778 5.3198 14.0646 5.34089 14.0646Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M5.21863 14.5109H6.14675V14.2615H5.21863V14.5065V14.5109Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M5.21863 14.5109H6.14675V14.2615H5.21863V14.5065V14.5109Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M5.14688 13.1984C5.05407 13.2509 4.99078 13.3078 5.00344 13.3384C5.00344 13.3647 5.03719 13.3822 5.07938 13.4084C5.14266 13.4565 5.18485 13.5397 5.1511 13.5834C5.17967 13.5607 5.20275 13.5313 5.21849 13.4977C5.23424 13.4641 5.24222 13.4272 5.24181 13.3898C5.2414 13.3525 5.23261 13.3157 5.21613 13.2825C5.19965 13.2493 5.17594 13.2205 5.14688 13.1984Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M5.14688 13.1984C5.05407 13.2509 4.99078 13.3078 5.00344 13.3384C5.00344 13.3647 5.03719 13.3822 5.07938 13.4084C5.14266 13.4565 5.18485 13.5397 5.1511 13.5834C5.17967 13.5607 5.20275 13.5313 5.21849 13.4977C5.23424 13.4641 5.24222 13.4272 5.24181 13.3898C5.2414 13.3525 5.23261 13.3157 5.21613 13.2825C5.19965 13.2493 5.17594 13.2205 5.14688 13.1984Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M5.34937 14.0253H6.00749V10.674H5.34937V14.0209V14.0253Z"
                              fill="#CCCCCC"
                            />
                            <path
                              d="M5.82187 10.6828V14.0209M5.89358 10.6828V14.0209M5.34937 14.0209H6.00749V10.6784H5.34937V14.0253V14.0209Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.68253 11.9297C6.36629 11.8197 6.02926 11.7897 5.69957 11.8422C5.303 11.9122 5.00347 12.074 5.02878 12.2097V12.2184L4.88113 11.8597C4.85582 11.7153 5.18488 11.5315 5.62363 11.4572C5.75157 11.4325 5.88169 11.4223 6.01175 11.4265C6.29019 11.4265 6.53488 11.4615 6.67832 11.5184V11.9297"
                              fill="#AD1519"
                            />
                            <path
                              d="M6.68253 11.9297C6.36629 11.8197 6.02926 11.7897 5.69957 11.8422C5.303 11.9122 5.00347 12.074 5.02878 12.2097V12.2184L4.88113 11.8597C4.85582 11.7153 5.18488 11.5315 5.62363 11.4572C5.75157 11.4325 5.88169 11.4223 6.01175 11.4265C6.29019 11.4265 6.53488 11.4615 6.67832 11.5184V11.9297"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.34932 12.3496C5.16792 12.3365 5.04136 12.2884 5.0287 12.2096C5.01604 12.144 5.07932 12.0784 5.18901 12.0128C5.23964 12.0171 5.29448 12.0259 5.34932 12.0259V12.3496Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M5.34932 12.3496C5.16792 12.3365 5.04136 12.2884 5.0287 12.2096C5.01604 12.144 5.07932 12.0784 5.18901 12.0128C5.23964 12.0171 5.29448 12.0259 5.34932 12.0259V12.3496Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.01167 12.0959C6.12557 12.1134 6.20995 12.1396 6.25213 12.179L6.25635 12.1878C6.27745 12.2315 6.1762 12.319 6.00745 12.424V12.0959"
                              fill="#AD1519"
                            />
                            <path
                              d="M6.01167 12.0959C6.12557 12.1134 6.20995 12.1396 6.25213 12.179L6.25635 12.1878C6.27745 12.2315 6.1762 12.319 6.00745 12.424V12.0959"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M4.9402 12.9928C4.92332 12.9403 5.10051 12.8353 5.35363 12.739L5.6827 12.599C6.03285 12.4371 6.2902 12.2534 6.25645 12.1878V12.179C6.27332 12.1965 6.29864 12.529 6.29864 12.529C6.33239 12.5859 6.09613 12.7696 5.77551 12.9271C5.67004 12.9796 5.45489 13.0584 5.35363 13.1021C5.16801 13.1634 4.9866 13.2903 5.00348 13.334L4.9402 12.9971"
                              fill="#AD1519"
                            />
                            <path
                              d="M4.9402 12.9928C4.92332 12.9403 5.10051 12.8353 5.35363 12.739L5.6827 12.599C6.03285 12.4371 6.2902 12.2534 6.25645 12.1878V12.179C6.27332 12.1965 6.29864 12.529 6.29864 12.529C6.33239 12.5859 6.09613 12.7696 5.77551 12.9271C5.67004 12.9796 5.45488 13.0584 5.35363 13.1021C5.16801 13.1634 4.9866 13.2903 5.00348 13.334L4.9402 12.9971V12.9928Z"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.30716 11.7678C5.38731 11.7415 5.43794 11.7021 5.41263 11.6365C5.39575 11.5928 5.35356 11.5928 5.2945 11.6103L5.18481 11.654L5.28185 11.9078L5.3156 11.8946L5.34935 11.8815L5.30716 11.7721V11.7678ZM5.25653 11.6496L5.28606 11.6365C5.30716 11.6278 5.33669 11.6409 5.34513 11.6715C5.35356 11.6934 5.35356 11.7153 5.32403 11.7371C5.31593 11.7422 5.30747 11.7466 5.29872 11.7503L5.25653 11.6496ZM5.5645 11.5403L5.52653 11.5534H5.49278L5.54763 11.8203L5.72903 11.7853L5.7206 11.7678V11.7503L5.61513 11.7765L5.5645 11.5446M5.91888 11.7721C5.95263 11.6759 5.9906 11.584 6.03278 11.4921C6.01875 11.4935 6.00463 11.4935 5.9906 11.4921C5.96821 11.5604 5.94287 11.6275 5.91466 11.6934L5.81341 11.5053L5.77122 11.5096H5.72903C5.78047 11.5958 5.82971 11.6833 5.87669 11.7721H5.91888ZM6.29013 11.5665L6.307 11.5271C6.28581 11.5118 6.26103 11.5028 6.23528 11.5009C6.16356 11.4965 6.12138 11.5271 6.11716 11.5753C6.10872 11.6671 6.25216 11.6628 6.24372 11.724C6.24372 11.7503 6.21419 11.7634 6.18466 11.759C6.15091 11.759 6.1256 11.7371 6.1256 11.7065H6.11294C6.10857 11.723 6.10292 11.7391 6.09606 11.7546C6.11898 11.7696 6.14503 11.7786 6.172 11.7809C6.24372 11.7896 6.29856 11.759 6.307 11.7065C6.31544 11.619 6.16778 11.6146 6.17622 11.5578C6.17622 11.5359 6.1931 11.5228 6.23106 11.5271C6.2606 11.5271 6.27325 11.5446 6.28169 11.5665H6.29013Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.724 9.91278C11.724 9.91278 11.6944 9.94778 11.6691 9.95215C11.648 9.95215 11.6227 9.93028 11.6227 9.93028C11.6227 9.93028 11.6016 9.95215 11.5805 9.95653C11.5552 9.9609 11.5215 9.93028 11.5215 9.93028L11.4793 9.97403C11.454 9.97403 11.4329 9.9609 11.4329 9.9609C11.4329 9.9609 11.4202 9.9784 11.4033 9.98715H11.3865L11.3612 9.96965L11.3316 9.93903L11.3105 9.9259L11.2937 9.88215V9.86028C11.2894 9.83403 11.3274 9.79903 11.3865 9.7859C11.4141 9.7783 11.4432 9.7783 11.4708 9.7859C11.4919 9.76403 11.5426 9.7509 11.5974 9.7509C11.6522 9.7509 11.6987 9.76403 11.724 9.78153C11.7612 9.75983 11.8036 9.74923 11.8463 9.7509C11.9012 9.7509 11.9518 9.76403 11.9729 9.7859C11.994 9.77715 12.0235 9.77715 12.0572 9.7859C12.1163 9.79903 12.1543 9.82965 12.1501 9.86028V9.88215L12.1332 9.9259L12.1079 9.93903L12.0826 9.96965L12.0572 9.98278C12.0572 9.98278 12.0446 9.99153 12.0404 9.98278C12.0235 9.9784 12.0108 9.9609 12.0108 9.9609C12.0108 9.9609 11.9855 9.9784 11.9687 9.96965C11.9476 9.9609 11.9265 9.9259 11.9265 9.9259C11.9265 9.9259 11.8885 9.9609 11.8674 9.95653C11.8421 9.95215 11.8252 9.93028 11.8252 9.93028C11.8252 9.93028 11.7957 9.95653 11.7746 9.95215C11.7535 9.94778 11.724 9.91278 11.724 9.91278Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M11.724 9.91278C11.724 9.91278 11.6944 9.94778 11.6691 9.95215C11.648 9.95215 11.6227 9.93028 11.6227 9.93028C11.6227 9.93028 11.6016 9.95215 11.5805 9.95653C11.5552 9.9609 11.5215 9.93028 11.5215 9.93028L11.4793 9.97403C11.454 9.97403 11.4329 9.9609 11.4329 9.9609C11.4329 9.9609 11.4202 9.9784 11.4033 9.98715H11.3865L11.3612 9.96965L11.3316 9.93903L11.3105 9.9259L11.2937 9.88215V9.86028C11.2894 9.83403 11.3274 9.79903 11.3865 9.7859C11.4141 9.7783 11.4432 9.7783 11.4708 9.7859C11.4919 9.76403 11.5426 9.7509 11.5974 9.7509C11.6522 9.7509 11.6987 9.76403 11.724 9.78153C11.7612 9.75983 11.8036 9.74923 11.8463 9.7509C11.9012 9.7509 11.9518 9.76403 11.9729 9.7859C11.994 9.77715 12.0235 9.77715 12.0572 9.7859C12.1163 9.79903 12.1543 9.82965 12.1501 9.86028V9.88215L12.1332 9.9259L12.1079 9.93903L12.0826 9.96965L12.0572 9.98278C12.0572 9.98278 12.0446 9.99153 12.0404 9.98278C12.0235 9.9784 12.0108 9.9609 12.0108 9.9609C12.0108 9.9609 11.9855 9.9784 11.9687 9.96965C11.9476 9.9609 11.9265 9.9259 11.9265 9.9259C11.9265 9.9259 11.8885 9.9609 11.8674 9.95653C11.8421 9.95215 11.8252 9.93028 11.8252 9.93028C11.8252 9.93028 11.7957 9.95653 11.7746 9.95215C11.7535 9.94778 11.724 9.91278 11.724 9.91278Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.6648 9.73777C11.6648 9.69402 11.6901 9.65027 11.7196 9.65027C11.7534 9.65027 11.7745 9.69402 11.7745 9.73777C11.7745 9.78152 11.7534 9.81652 11.7196 9.81652C11.6901 9.81652 11.6648 9.78152 11.6648 9.73339"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.6648 9.73777C11.6648 9.69402 11.6901 9.65027 11.7196 9.65027C11.7534 9.65027 11.7745 9.69402 11.7745 9.73777C11.7745 9.78152 11.7534 9.81652 11.7196 9.81652C11.6901 9.81652 11.6648 9.78152 11.6648 9.73339V9.73777Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.6986 9.73775C11.6986 9.694 11.707 9.659 11.7197 9.659C11.7366 9.659 11.7492 9.694 11.7492 9.73775C11.7492 9.7815 11.7366 9.81212 11.7239 9.81212C11.707 9.81212 11.6986 9.77712 11.6986 9.73337"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.6986 9.73775C11.6986 9.694 11.707 9.659 11.7197 9.659C11.7366 9.659 11.7492 9.694 11.7492 9.73775C11.7492 9.7815 11.7366 9.81212 11.7239 9.81212C11.707 9.81212 11.6986 9.77712 11.6986 9.73337V9.73775Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.4328 10.0746C11.4276 10.0592 11.4205 10.0445 11.4117 10.0309C11.6159 9.97148 11.8319 9.97148 12.0361 10.0309L12.0108 10.0659C12.0057 10.0772 12.0014 10.0889 11.9981 10.1009C11.9075 10.0752 11.8137 10.0634 11.7197 10.0659C11.61 10.0659 11.5003 10.079 11.4413 10.1009L11.4328 10.0746Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.4328 10.0746C11.4276 10.0592 11.4205 10.0445 11.4117 10.0309C11.6159 9.97148 11.8319 9.97148 12.0361 10.0309L12.0108 10.0659C12.0057 10.0772 12.0014 10.0889 11.9981 10.1009C11.9075 10.0752 11.8137 10.0634 11.7197 10.0659C11.61 10.0659 11.5003 10.079 11.4413 10.1009L11.4328 10.0746Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.7197 10.1796C11.821 10.1796 11.9307 10.1621 11.9686 10.1534C11.994 10.1446 12.0108 10.1315 12.0108 10.1184C12.0108 10.1096 12.0024 10.1053 11.994 10.1009C11.9045 10.0763 11.8123 10.0646 11.7197 10.0659C11.6143 10.0659 11.5088 10.079 11.4497 10.1009C11.4413 10.1009 11.4371 10.1096 11.4329 10.114C11.4329 10.1315 11.4455 10.1446 11.475 10.1534C11.5172 10.1621 11.6227 10.1796 11.7197 10.1796Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.7197 10.1796C11.821 10.1796 11.9307 10.1621 11.9686 10.1534C11.994 10.1446 12.0108 10.1315 12.0108 10.1184C12.0108 10.1096 12.0024 10.1053 11.994 10.1009C11.9045 10.0763 11.8123 10.0646 11.7197 10.0659C11.6143 10.0659 11.5088 10.079 11.4497 10.1009C11.4413 10.1009 11.4371 10.1096 11.4329 10.114C11.4329 10.1315 11.4455 10.1446 11.475 10.1534C11.5172 10.1621 11.6227 10.1796 11.7197 10.1796Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.9602 9.77228C11.9602 9.76376 11.9684 9.75525 11.9766 9.75525C11.9848 9.75525 11.9971 9.76376 11.9971 9.77228C11.9971 9.78079 11.9889 9.7893 11.9766 9.7893C11.9723 9.7893 11.9681 9.78751 11.965 9.78432C11.9619 9.78112 11.9602 9.77679 11.9602 9.77228Z"
                              fill="white"
                            />
                            <path
                              d="M11.9602 9.77275C11.9602 9.764 11.9686 9.75525 11.9771 9.75525C11.9855 9.75525 11.9982 9.764 11.9982 9.77275C11.9982 9.7815 11.9897 9.79025 11.9771 9.79025C11.9726 9.79025 11.9683 9.78841 11.9652 9.78513C11.962 9.78184 11.9602 9.77739 11.9602 9.77275ZM11.9518 9.7115C11.9518 9.70686 11.9535 9.70241 11.9567 9.69913C11.9599 9.69585 11.9642 9.694 11.9686 9.694C11.9771 9.694 11.9855 9.69838 11.9855 9.7115C11.9855 9.72463 11.9771 9.729 11.9686 9.729C11.9642 9.729 11.9599 9.72716 11.9567 9.72388C11.9535 9.72059 11.9518 9.71614 11.9518 9.7115ZM11.9054 9.66775C11.9054 9.659 11.9138 9.65463 11.9222 9.65463C11.9307 9.65463 11.9391 9.659 11.9391 9.67213C11.9391 9.68088 11.9307 9.68963 11.9222 9.68963C11.9196 9.68971 11.917 9.68917 11.9146 9.68803C11.9123 9.68689 11.9102 9.68519 11.9085 9.68307C11.9069 9.68094 11.9057 9.67846 11.9052 9.6758C11.9047 9.67314 11.9047 9.67038 11.9054 9.66775ZM11.8463 9.65025C11.8463 9.6415 11.8547 9.63275 11.8632 9.63275C11.8758 9.63275 11.8843 9.6415 11.8843 9.65025C11.8843 9.659 11.8758 9.66775 11.8674 9.66775C11.859 9.66775 11.8463 9.659 11.8463 9.65025ZM11.7872 9.65025C11.7872 9.6415 11.7957 9.63713 11.8083 9.63713C11.821 9.63713 11.8252 9.6415 11.8252 9.65463C11.8252 9.66338 11.8168 9.67213 11.8083 9.67213C11.8058 9.67281 11.8031 9.67287 11.8006 9.6723C11.798 9.67173 11.7956 9.67055 11.7936 9.66885C11.7915 9.66715 11.7899 9.66498 11.7888 9.66251C11.7877 9.66004 11.7872 9.65734 11.7872 9.65463V9.65025Z"
                              stroke="black"
                              stroke-width="0.025"
                            />
                            <path
                              d="M12.1415 9.89525L12.15 9.8515C12.1505 9.83563 12.148 9.8198 12.1425 9.80495C12.1371 9.79011 12.1288 9.77657 12.1181 9.76513C12.1075 9.7537 12.0947 9.7446 12.0806 9.7384C12.0665 9.73219 12.0514 9.72899 12.036 9.729C12.015 9.729 11.9939 9.73338 11.9812 9.74213"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linecap="round"
                            />
                            <path
                              d="M11.9391 9.8078L11.9475 9.7728C11.9475 9.72468 11.9011 9.6853 11.842 9.6853C11.8167 9.6853 11.7914 9.69405 11.7745 9.7028"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M12.1584 9.84276C12.1584 9.82964 12.1669 9.82089 12.1753 9.82089C12.1837 9.82089 12.1922 9.82964 12.1922 9.83839C12.1922 9.85151 12.1837 9.85589 12.1753 9.85589C12.1669 9.85589 12.1584 9.85151 12.1584 9.83839V9.84276ZM12.15 9.77276C12.15 9.76401 12.1584 9.75526 12.1669 9.75526C12.1694 9.75458 12.1721 9.75452 12.1746 9.75509C12.1772 9.75566 12.1796 9.75684 12.1816 9.75854C12.1837 9.76024 12.1853 9.76241 12.1864 9.76488C12.1875 9.76735 12.188 9.77005 12.188 9.77276C12.188 9.78151 12.1795 9.79026 12.1711 9.79026C12.1584 9.79026 12.15 9.78151 12.15 9.77276ZM12.1078 9.72464C12.1077 9.72192 12.1082 9.71922 12.1093 9.71675C12.1104 9.71428 12.1121 9.71211 12.1141 9.71042C12.1162 9.70872 12.1186 9.70754 12.1211 9.70697C12.1237 9.7064 12.1264 9.70646 12.1289 9.70714C12.1373 9.70714 12.1458 9.71151 12.1458 9.72464C12.1458 9.72928 12.144 9.73373 12.1408 9.73701C12.1377 9.74029 12.1334 9.74214 12.1289 9.74214C12.1264 9.74282 12.1237 9.74288 12.1211 9.74231C12.1186 9.74174 12.1162 9.74056 12.1141 9.73886C12.1121 9.73716 12.1104 9.73499 12.1093 9.73252C12.1082 9.73006 12.1077 9.72736 12.1078 9.72464ZM12.053 9.69401C12.053 9.68526 12.0614 9.67651 12.0741 9.67651C12.0867 9.67651 12.0909 9.68526 12.0909 9.69401C12.0909 9.70714 12.0825 9.71589 12.0741 9.71589C12.0711 9.71683 12.068 9.71691 12.065 9.71615C12.062 9.71538 12.0593 9.71379 12.0572 9.71154C12.055 9.70929 12.0534 9.70647 12.0527 9.70338C12.052 9.70029 12.0521 9.69705 12.053 9.69401ZM11.9939 9.69839C11.9939 9.68964 12.0023 9.68089 12.015 9.68089C12.0276 9.68089 12.0319 9.68964 12.0319 9.69839C12.0319 9.70714 12.0234 9.71589 12.015 9.71589C12.0066 9.71589 11.9939 9.70714 11.9939 9.69839Z"
                              stroke="black"
                              stroke-width="0.025"
                            />
                            <path
                              d="M12.0361 9.98278L12.015 9.96091C12.015 9.96091 11.9897 9.97403 11.9602 9.96966C11.9349 9.96966 11.9222 9.92591 11.9222 9.92591C11.9222 9.92591 11.8927 9.95653 11.8674 9.95653C11.8378 9.95653 11.8252 9.93028 11.8252 9.93028C11.8252 9.93028 11.7956 9.95216 11.7703 9.94778C11.745 9.94778 11.7197 9.91278 11.7197 9.91278C11.7197 9.91278 11.6944 9.94778 11.6691 9.94778C11.6438 9.95216 11.6269 9.92591 11.6269 9.92591C11.6269 9.92591 11.6142 9.95216 11.5805 9.95653C11.5467 9.96091 11.5214 9.93028 11.5214 9.93028C11.5214 9.93028 11.5046 9.96091 11.4792 9.97403C11.4581 9.97403 11.4286 9.95653 11.4286 9.95653L11.4244 9.97841L11.4117 9.98278L11.416 10.0047C11.5164 9.97702 11.62 9.96378 11.7239 9.96528C11.8421 9.96528 11.9517 9.98278 12.0319 10.009L12.0403 9.98278"
                              fill="#C8B100"
                            />
                            <path
                              d="M12.0361 9.98278L12.015 9.96091C12.015 9.96091 11.9897 9.97403 11.9602 9.96966C11.9349 9.96966 11.9222 9.92591 11.9222 9.92591C11.9222 9.92591 11.8927 9.95653 11.8674 9.95653C11.8378 9.95653 11.8252 9.93028 11.8252 9.93028C11.8252 9.93028 11.7956 9.95216 11.7703 9.94778C11.745 9.94778 11.7197 9.91278 11.7197 9.91278C11.7197 9.91278 11.6944 9.94778 11.6691 9.94778C11.6438 9.95216 11.6269 9.92591 11.6269 9.92591C11.6269 9.92591 11.6142 9.95216 11.5805 9.95653C11.5467 9.96091 11.5214 9.93028 11.5214 9.93028C11.5214 9.93028 11.5046 9.96091 11.4792 9.97403C11.4581 9.97403 11.4286 9.95653 11.4286 9.95653L11.4244 9.97841L11.4117 9.98278L11.416 10.0047C11.5164 9.97702 11.62 9.96378 11.7239 9.96528C11.8421 9.96528 11.9517 9.98278 12.0319 10.009L12.0403 9.98278H12.0361Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.4454 9.77228C11.4454 9.76376 11.4536 9.75525 11.4619 9.75525C11.4701 9.75525 11.4783 9.76376 11.4783 9.77228C11.4783 9.77679 11.4765 9.78112 11.4735 9.78432C11.4704 9.78751 11.4662 9.7893 11.4619 9.7893C11.4575 9.7893 11.4533 9.78751 11.4502 9.78432C11.4472 9.78112 11.4454 9.77679 11.4454 9.77228Z"
                              fill="white"
                            />
                            <path
                              d="M11.4454 9.77275C11.4454 9.764 11.4539 9.75525 11.4623 9.75525C11.4707 9.75525 11.4792 9.764 11.4792 9.77275C11.4792 9.77739 11.4774 9.78184 11.4742 9.78513C11.4711 9.78841 11.4668 9.79025 11.4623 9.79025C11.4578 9.79025 11.4535 9.78841 11.4504 9.78513C11.4472 9.78184 11.4454 9.77739 11.4454 9.77275ZM11.4539 9.7115C11.4539 9.69838 11.4623 9.694 11.4707 9.694C11.4792 9.694 11.4918 9.69838 11.4918 9.7115C11.4918 9.72463 11.4834 9.729 11.4707 9.729C11.4663 9.729 11.462 9.72716 11.4588 9.72388C11.4557 9.72059 11.4539 9.71614 11.4539 9.7115ZM11.4961 9.66775C11.4961 9.659 11.5087 9.65463 11.5172 9.65463C11.5256 9.65463 11.5382 9.659 11.5382 9.67213C11.5382 9.68088 11.5298 9.68963 11.5172 9.68963C11.5145 9.68971 11.5119 9.68917 11.5095 9.68803C11.5072 9.68689 11.5051 9.68519 11.5034 9.68307C11.5018 9.68094 11.5007 9.67846 11.5001 9.6758C11.4996 9.67314 11.4996 9.67038 11.5003 9.66775H11.4961ZM11.5551 9.65025C11.5551 9.6415 11.5636 9.63275 11.5762 9.63275C11.5889 9.63275 11.5931 9.6415 11.5931 9.65025C11.5931 9.659 11.5847 9.66775 11.5762 9.66775C11.5678 9.66775 11.5551 9.659 11.5551 9.65025ZM11.6142 9.65025C11.6142 9.6415 11.6226 9.63713 11.6353 9.63713C11.6437 9.63713 11.6522 9.6415 11.6522 9.65463C11.6522 9.66338 11.6437 9.67213 11.6353 9.67213C11.6327 9.67281 11.6301 9.67287 11.6275 9.6723C11.625 9.67173 11.6226 9.67055 11.6205 9.66885C11.6185 9.66715 11.6168 9.66498 11.6157 9.66251C11.6146 9.66004 11.6141 9.65734 11.6142 9.65463V9.65025Z"
                              stroke="black"
                              stroke-width="0.025"
                            />
                            <path
                              d="M11.2978 9.89525C11.2925 9.88133 11.2896 9.8665 11.2894 9.8515C11.2888 9.83563 11.2913 9.8198 11.2968 9.80495C11.3023 9.79011 11.3106 9.77657 11.3212 9.76513C11.3319 9.7537 11.3446 9.7446 11.3587 9.7384C11.3728 9.73219 11.388 9.72899 11.4033 9.729C11.4244 9.729 11.4455 9.73338 11.4624 9.74213"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linecap="round"
                            />
                            <path
                              d="M11.5045 9.8078C11.4975 9.79744 11.4931 9.7854 11.4918 9.7728C11.4918 9.72905 11.5424 9.6853 11.6015 9.6853C11.6237 9.68528 11.6455 9.69131 11.6648 9.7028"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.2472 9.84276C11.2472 9.82964 11.2556 9.82089 11.2641 9.82089C11.2767 9.82089 11.2809 9.82964 11.2809 9.83839C11.2809 9.84303 11.2792 9.84748 11.276 9.85076C11.2728 9.85405 11.2685 9.85589 11.2641 9.85589C11.2556 9.85589 11.2472 9.85151 11.2472 9.83839V9.84276ZM11.2514 9.77276C11.2514 9.76401 11.2641 9.75526 11.2725 9.75526C11.2809 9.75526 11.2894 9.76401 11.2894 9.77276C11.2894 9.78151 11.2809 9.79026 11.2725 9.79026C11.2641 9.79026 11.2556 9.78151 11.2556 9.77276H11.2514ZM11.2936 9.72464C11.2936 9.71151 11.302 9.70714 11.3147 9.70714C11.3192 9.70714 11.3235 9.70898 11.3266 9.71226C11.3298 9.71555 11.3316 9.72 11.3316 9.72464C11.3316 9.72928 11.3298 9.73373 11.3266 9.73701C11.3235 9.74029 11.3192 9.74214 11.3147 9.74214C11.3122 9.74282 11.3095 9.74288 11.3069 9.74231C11.3044 9.74174 11.302 9.74056 11.2999 9.73886C11.2979 9.73716 11.2962 9.73499 11.2951 9.73252C11.294 9.73006 11.2935 9.72736 11.2936 9.72464ZM11.3484 9.69401C11.3484 9.68526 11.3569 9.67651 11.3695 9.67651C11.378 9.67651 11.3864 9.68526 11.3864 9.69401C11.3864 9.70714 11.378 9.71589 11.3695 9.71589C11.3666 9.71683 11.3635 9.71691 11.3605 9.71615C11.3575 9.71538 11.3548 9.71379 11.3526 9.71154C11.3505 9.70929 11.3489 9.70647 11.3482 9.70338C11.3475 9.70029 11.3475 9.69705 11.3484 9.69401ZM11.4075 9.69839C11.4075 9.68964 11.4159 9.68089 11.4286 9.68089C11.4331 9.68089 11.4374 9.68273 11.4405 9.68601C11.4437 9.6893 11.4455 9.69375 11.4455 9.69839C11.4455 9.70303 11.4437 9.70748 11.4405 9.71076C11.4374 9.71405 11.4331 9.71589 11.4286 9.71589C11.4159 9.71589 11.4075 9.70714 11.4075 9.69839Z"
                              stroke="black"
                              stroke-width="0.025"
                            />
                            <path
                              d="M11.724 9.87341H11.7324C11.7313 9.87919 11.7313 9.88514 11.7324 9.89091C11.7324 9.91716 11.7535 9.93466 11.7746 9.93466C11.7839 9.93511 11.7931 9.93234 11.8007 9.9268C11.8083 9.92126 11.814 9.91326 11.8168 9.90404L11.8252 9.89091V9.90841C11.8294 9.93029 11.8505 9.94341 11.8716 9.94341C11.8969 9.94341 11.9138 9.92591 11.9138 9.89966C11.9139 9.89821 11.9139 9.89674 11.9138 9.89529L11.9307 9.87779L11.9391 9.89966C11.9365 9.90513 11.9351 9.91109 11.9349 9.91716C11.9349 9.92877 11.9393 9.93989 11.9472 9.9481C11.9552 9.9563 11.9659 9.96091 11.9771 9.96091C11.994 9.96091 12.0066 9.95216 12.015 9.93904L12.0235 9.93029V9.94341C12.0235 9.95654 12.0277 9.96966 12.0404 9.97404C12.0404 9.97404 12.0572 9.97404 12.0825 9.95654C12.1079 9.93904 12.1121 9.92591 12.1121 9.92591V9.94341C12.1121 9.94341 12.091 9.97841 12.0699 9.98716C12.0615 9.99591 12.0488 10.0047 12.0361 10.0003C12.0235 10.0003 12.0108 9.98716 12.0066 9.97404C11.9976 9.97943 11.9875 9.98243 11.9771 9.98279C11.9518 9.98279 11.9265 9.96966 11.918 9.94779C11.9122 9.95457 11.905 9.96002 11.897 9.96379C11.889 9.96755 11.8804 9.96955 11.8716 9.96966C11.8505 9.96966 11.8294 9.96091 11.821 9.94341C11.8095 9.95446 11.7945 9.9607 11.7788 9.96091C11.7535 9.96091 11.7366 9.95216 11.7197 9.93466C11.7113 9.95216 11.6902 9.96091 11.6691 9.96091C11.6522 9.96091 11.6354 9.95654 11.6269 9.94341C11.6204 9.95191 11.612 9.9587 11.6025 9.96325C11.593 9.96781 11.5826 9.97001 11.5721 9.96966C11.5552 9.96966 11.5383 9.96091 11.5257 9.94779C11.5172 9.96966 11.4919 9.98279 11.4666 9.98279C11.4582 9.98279 11.4455 9.98279 11.4371 9.97404C11.4329 9.98716 11.4202 10.0003 11.4075 10.0003C11.3949 10.0003 11.3822 10.0003 11.3696 9.99154C11.3532 9.97953 11.339 9.96474 11.3274 9.94779L11.3316 9.92591L11.3654 9.95654C11.3865 9.97404 11.4033 9.97404 11.4033 9.97404C11.416 9.97404 11.4202 9.95654 11.4202 9.94341V9.93029L11.4286 9.93904C11.4371 9.95216 11.4497 9.96091 11.4666 9.96091C11.4778 9.96091 11.4885 9.9563 11.4964 9.9481C11.5044 9.93989 11.5088 9.92877 11.5088 9.91716C11.5099 9.91139 11.5099 9.90544 11.5088 9.89966V9.87779L11.5257 9.89529V9.89966C11.5257 9.92591 11.5468 9.94341 11.5679 9.94341C11.5932 9.94341 11.61 9.93029 11.6143 9.90404V9.89091L11.6227 9.90404C11.6311 9.92154 11.648 9.93466 11.6649 9.93466C11.6902 9.93466 11.7113 9.91716 11.7113 9.89091C11.7119 9.88656 11.7119 9.88214 11.7113 9.87779H11.7197"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.724 9.87341H11.7324C11.7313 9.87919 11.7313 9.88514 11.7324 9.89091C11.7324 9.91716 11.7535 9.93466 11.7746 9.93466C11.7839 9.93511 11.7931 9.93234 11.8007 9.9268C11.8083 9.92126 11.814 9.91326 11.8168 9.90404L11.8252 9.89091V9.90841C11.8294 9.93029 11.8505 9.94341 11.8716 9.94341C11.8969 9.94341 11.9138 9.92591 11.9138 9.89966C11.9139 9.89821 11.9139 9.89674 11.9138 9.89529L11.9307 9.87779L11.9391 9.89966C11.9365 9.90513 11.9351 9.91109 11.9349 9.91716C11.9349 9.92877 11.9393 9.93989 11.9472 9.9481C11.9552 9.9563 11.9659 9.96091 11.9771 9.96091C11.994 9.96091 12.0066 9.95216 12.015 9.93904L12.0235 9.93029V9.94341C12.0235 9.95654 12.0277 9.96966 12.0404 9.97404C12.0404 9.97404 12.0572 9.97404 12.0825 9.95654C12.1079 9.93904 12.1121 9.92591 12.1121 9.92591V9.94341C12.1121 9.94341 12.091 9.97841 12.0699 9.98716C12.0615 9.99591 12.0488 10.0047 12.0361 10.0003C12.0235 10.0003 12.0108 9.98716 12.0066 9.97404C11.9976 9.97943 11.9875 9.98243 11.9771 9.98279C11.9518 9.98279 11.9265 9.96966 11.918 9.94779C11.9122 9.95457 11.905 9.96002 11.897 9.96379C11.889 9.96755 11.8804 9.96955 11.8716 9.96966C11.8505 9.96966 11.8294 9.96091 11.821 9.94341C11.8095 9.95446 11.7945 9.9607 11.7788 9.96091C11.7535 9.96091 11.7366 9.95216 11.7197 9.93466C11.7113 9.95216 11.6902 9.96091 11.6691 9.96091C11.6522 9.96091 11.6354 9.95654 11.6269 9.94341C11.6204 9.95191 11.612 9.9587 11.6025 9.96325C11.593 9.96781 11.5826 9.97001 11.5721 9.96966C11.5552 9.96966 11.5383 9.96091 11.5257 9.94779C11.5172 9.96966 11.4919 9.98279 11.4666 9.98279C11.4582 9.98279 11.4455 9.98279 11.4371 9.97404C11.4329 9.98716 11.4202 10.0003 11.4075 10.0003C11.3949 10.0003 11.3822 10.0003 11.3696 9.99154C11.3532 9.97953 11.339 9.96474 11.3274 9.94779L11.3316 9.92591L11.3654 9.95654C11.3865 9.97404 11.4033 9.97404 11.4033 9.97404C11.416 9.97404 11.4202 9.95654 11.4202 9.94341V9.93029L11.4286 9.93904C11.4371 9.95216 11.4497 9.96091 11.4666 9.96091C11.4778 9.96091 11.4885 9.9563 11.4964 9.9481C11.5044 9.93989 11.5088 9.92877 11.5088 9.91716C11.5099 9.91139 11.5099 9.90544 11.5088 9.89966V9.87779L11.5257 9.89529V9.89966C11.5257 9.92591 11.5468 9.94341 11.5679 9.94341C11.5932 9.94341 11.61 9.93029 11.6143 9.90404V9.89091L11.6227 9.90404C11.6311 9.92154 11.648 9.93466 11.6649 9.93466C11.6902 9.93466 11.7113 9.91716 11.7113 9.89091C11.7119 9.88656 11.7119 9.88214 11.7113 9.87779H11.7197L11.724 9.87341Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.7197 9.98715C11.5973 9.98715 11.4876 10.0046 11.4117 10.0309L11.399 10.0221L11.4033 10.009C11.4876 9.98277 11.5973 9.96527 11.7197 9.96527C11.8462 9.96527 11.9601 9.98277 12.0403 10.009C12.0403 10.009 12.0487 10.0178 12.0445 10.0221L12.0319 10.0309C11.9303 10.0014 11.8252 9.98666 11.7197 9.98715Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.7197 9.98715C11.5973 9.98715 11.4876 10.0046 11.4117 10.0309L11.399 10.0221L11.4033 10.009C11.4876 9.98277 11.5973 9.96527 11.7197 9.96527C11.8462 9.96527 11.9601 9.98277 12.0403 10.009C12.0403 10.009 12.0487 10.0178 12.0445 10.0221L12.0319 10.0309C11.9303 10.0014 11.8252 9.98666 11.7197 9.98715Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.6016 10.0348C11.6016 10.022 11.6098 10.0178 11.6221 10.0178C11.6264 10.0178 11.6306 10.0196 11.6337 10.0227C11.6368 10.0259 11.6385 10.0303 11.6385 10.0348C11.6385 10.0393 11.6368 10.0436 11.6337 10.0468C11.6306 10.05 11.6264 10.0518 11.6221 10.0518C11.6098 10.0518 11.6016 10.0433 11.6016 10.0348Z"
                              fill="white"
                            />
                            <path
                              d="M11.6016 10.0348C11.6016 10.022 11.6098 10.0178 11.6221 10.0178C11.6264 10.0178 11.6306 10.0196 11.6337 10.0227C11.6368 10.0259 11.6385 10.0303 11.6385 10.0348C11.6385 10.0393 11.6368 10.0436 11.6337 10.0468C11.6306 10.05 11.6264 10.0518 11.6221 10.0518C11.6098 10.0518 11.6016 10.0433 11.6016 10.0348Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.7235 10.0395H11.6816C11.6774 10.0395 11.6691 10.0395 11.6691 10.0265L11.6816 10.0134H11.7653C11.7679 10.0144 11.7701 10.0161 11.7716 10.0185C11.7731 10.0208 11.7739 10.0236 11.7737 10.0265C11.7737 10.0299 11.7724 10.0332 11.77 10.0357C11.7677 10.0381 11.7645 10.0395 11.7612 10.0395H11.7193"
                              fill="#AD1519"
                            />
                            <path
                              d="M11.7235 10.0395H11.6816C11.6774 10.0395 11.6691 10.0395 11.6691 10.0265L11.6816 10.0134H11.7653C11.7679 10.0144 11.7701 10.0161 11.7716 10.0185C11.7731 10.0208 11.7739 10.0236 11.7737 10.0265C11.7737 10.0299 11.7724 10.0332 11.77 10.0357C11.7677 10.0381 11.7645 10.0395 11.7612 10.0395H11.7193"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.5253 10.0569H11.5001C11.4985 10.0576 11.4967 10.0579 11.495 10.0578C11.4932 10.0578 11.4915 10.0573 11.4899 10.0565C11.4883 10.0557 11.4869 10.0545 11.4858 10.0531C11.4847 10.0517 11.4839 10.05 11.4834 10.0483C11.4834 10.0448 11.4847 10.0415 11.4871 10.039C11.4894 10.0366 11.4926 10.0352 11.496 10.0352L11.5211 10.0309L11.5504 10.0266C11.5587 10.0266 11.5629 10.0266 11.5671 10.0352C11.5678 10.0373 11.568 10.0394 11.5677 10.0416C11.5674 10.0437 11.5666 10.0457 11.5653 10.0474C11.5641 10.0491 11.5625 10.0505 11.5606 10.0514C11.5587 10.0523 11.5566 10.0527 11.5546 10.0526H11.5253"
                              fill="#058E6E"
                            />
                            <path
                              d="M11.5253 10.0569H11.5001C11.4985 10.0576 11.4967 10.0579 11.495 10.0578C11.4932 10.0578 11.4915 10.0573 11.4899 10.0565C11.4883 10.0557 11.4869 10.0545 11.4858 10.0531C11.4847 10.0517 11.4839 10.05 11.4834 10.0483C11.4834 10.0448 11.4847 10.0415 11.4871 10.039C11.4894 10.0366 11.4926 10.0352 11.496 10.0352L11.5211 10.0309L11.5504 10.0266C11.5587 10.0266 11.5629 10.0266 11.5671 10.0352C11.5678 10.0373 11.568 10.0394 11.5677 10.0416C11.5674 10.0437 11.5666 10.0457 11.5653 10.0474C11.5641 10.0491 11.5625 10.0505 11.5606 10.0514C11.5587 10.0523 11.5566 10.0527 11.5546 10.0526H11.5253"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.4117 10.0746L11.4244 10.0571H11.4539L11.4371 10.0834L11.4117 10.0746Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M11.4117 10.0746L11.4244 10.0571H11.4539L11.4371 10.0834L11.4117 10.0746Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.8041 10.0348C11.8041 10.022 11.8123 10.0178 11.8205 10.0178C11.8328 10.0178 11.841 10.022 11.841 10.0348C11.841 10.0433 11.8328 10.0518 11.8205 10.0518C11.8161 10.0518 11.812 10.05 11.8089 10.0468C11.8058 10.0436 11.8041 10.0393 11.8041 10.0348Z"
                              fill="white"
                            />
                            <path
                              d="M11.8041 10.0348C11.8041 10.022 11.8123 10.0178 11.8205 10.0178C11.8328 10.0178 11.841 10.022 11.841 10.0348C11.841 10.0433 11.8328 10.0518 11.8205 10.0518C11.8161 10.0518 11.812 10.05 11.8089 10.0468C11.8058 10.0436 11.8041 10.0393 11.8041 10.0348Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.9176 10.0569H11.9469C11.9496 10.0571 11.9523 10.0563 11.9546 10.0548C11.9568 10.0532 11.9586 10.0509 11.9595 10.0483C11.9596 10.0454 11.9589 10.0426 11.9574 10.0403C11.9559 10.0379 11.9537 10.0362 11.9511 10.0352L11.9218 10.0309L11.8925 10.0266C11.8841 10.0266 11.8799 10.0266 11.8757 10.0352C11.8757 10.0439 11.8799 10.0483 11.8883 10.0526H11.9176"
                              fill="#058E6E"
                            />
                            <path
                              d="M11.9176 10.0569H11.9469C11.9496 10.0571 11.9523 10.0563 11.9546 10.0548C11.9568 10.0532 11.9586 10.0509 11.9595 10.0483C11.9596 10.0454 11.9589 10.0426 11.9574 10.0403C11.9559 10.0379 11.9537 10.0362 11.9511 10.0352L11.9218 10.0309L11.8925 10.0266C11.8841 10.0266 11.8799 10.0266 11.8757 10.0352C11.8757 10.0439 11.8799 10.0483 11.8883 10.0526H11.9176"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M12.0267 10.0784L12.0185 10.0571H11.9897L12.0021 10.0827L12.0267 10.0784Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M12.0267 10.0784L12.0185 10.0571H11.9897L12.0021 10.0827L12.0267 10.0784Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.7197 10.1534C11.6346 10.1552 11.5496 10.1464 11.4666 10.1271C11.5495 10.1065 11.6344 10.0962 11.7197 10.0965C11.8209 10.0965 11.9095 10.1096 11.977 10.1271C11.9095 10.1446 11.8209 10.1534 11.7239 10.1534"
                              fill="#AD1519"
                            />
                            <path
                              d="M11.7197 10.1534C11.6346 10.1552 11.5496 10.1464 11.4666 10.1271C11.5495 10.1065 11.6344 10.0962 11.7197 10.0965C11.8209 10.0965 11.9095 10.1096 11.977 10.1271C11.9095 10.1446 11.8209 10.1534 11.7239 10.1534H11.7197Z"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.0315 9.92961L12.0273 9.91718C12.019 9.91718 12.0149 9.91718 12.0107 9.92546L12.0149 9.94204C12.0232 9.94204 12.0273 9.94204 12.0315 9.92961Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M12.0315 9.92961L12.0273 9.91718C12.019 9.91718 12.0149 9.91718 12.0107 9.92546L12.0149 9.94204C12.0232 9.94204 12.0273 9.94204 12.0315 9.92961Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.8381 9.89477C11.8381 9.88626 11.8338 9.87775 11.8253 9.87775C11.8253 9.87775 11.8168 9.882 11.8168 9.89052C11.8168 9.89903 11.8168 9.90754 11.8253 9.90754L11.8381 9.89477Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.8381 9.89477C11.8381 9.88626 11.8338 9.87775 11.8253 9.87775C11.8253 9.87775 11.8168 9.882 11.8168 9.89052C11.8168 9.89903 11.8168 9.90754 11.8253 9.90754L11.8381 9.89477Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.61 9.89477C11.61 9.88626 11.61 9.87775 11.6185 9.87775L11.6313 9.89052L11.6228 9.90754C11.6142 9.90754 11.61 9.89903 11.61 9.89477Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.61 9.89477C11.61 9.88626 11.61 9.87775 11.6185 9.87775L11.6313 9.89052L11.6228 9.90754C11.6142 9.90754 11.61 9.89903 11.61 9.89477Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.4117 9.92961L11.4159 9.91718C11.4242 9.91718 11.4283 9.91718 11.4325 9.92546L11.4283 9.94204C11.42 9.94204 11.4159 9.94204 11.4117 9.92961Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.4117 9.92961L11.4159 9.91718C11.4242 9.91718 11.4283 9.91718 11.4325 9.92546L11.4283 9.94204C11.42 9.94204 11.4159 9.94204 11.4117 9.92961Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.7194 9.77716L11.6859 9.79887L11.711 9.8553L11.7194 9.85964L11.732 9.8553L11.7571 9.79887L11.7194 9.77716Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.7194 9.77716L11.6859 9.79887L11.711 9.8553L11.7194 9.85964L11.732 9.8553L11.7571 9.79887L11.7194 9.77716Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.6438 9.86443L11.6605 9.88613L11.715 9.86877L11.7191 9.86008L11.715 9.8514L11.6605 9.83838L11.6438 9.86443Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.6438 9.86443L11.6605 9.88613L11.715 9.86877L11.7191 9.86008L11.715 9.8514L11.6605 9.83838L11.6438 9.86443Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.795 9.86443L11.7825 9.88613L11.7281 9.86877L11.7239 9.86008V9.8514L11.7825 9.83838L11.7992 9.86443"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.795 9.86443L11.7825 9.88613L11.7281 9.86877L11.7239 9.86008V9.8514L11.7825 9.83838L11.7992 9.86443"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.4959 9.79901L11.4666 9.8294L11.5042 9.87281L11.5126 9.87715L11.521 9.87281L11.5293 9.81638L11.4959 9.80335"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.4959 9.79901L11.4666 9.8294L11.5042 9.87281L11.5126 9.87715L11.521 9.87281L11.5293 9.81638L11.4959 9.80335"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.437 9.89507L11.4579 9.91677L11.5082 9.89072V9.88204L11.504 9.87336L11.4496 9.86902L11.437 9.89507Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.437 9.89507L11.4579 9.91677L11.5082 9.89072V9.88204L11.504 9.87336L11.4496 9.86902L11.437 9.89507Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.5883 9.86448L11.5757 9.89053H11.5213L11.5129 9.88184L11.5171 9.86882L11.5674 9.84277L11.5883 9.86448Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.5883 9.86448L11.5757 9.89053H11.5213L11.5129 9.88184L11.5171 9.86882L11.5674 9.84277L11.5883 9.86448Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.3817 9.9039V9.92995L11.3231 9.93863L11.3147 9.93429V9.92561L11.3566 9.88654L11.3817 9.9039Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.3817 9.9039V9.92995L11.3231 9.93863L11.3147 9.93429V9.92561L11.3566 9.88654L11.3817 9.9039Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.4918 9.88217C11.4918 9.86904 11.5003 9.86029 11.5129 9.86029C11.5185 9.86029 11.5239 9.8626 11.5278 9.8667C11.5318 9.8708 11.534 9.87636 11.534 9.88217C11.533 9.88718 11.5304 9.89168 11.5265 9.89488C11.5227 9.89807 11.5178 9.89977 11.5129 9.89967C11.508 9.89977 11.5032 9.89807 11.4993 9.89488C11.4955 9.89168 11.4928 9.88718 11.4918 9.88217Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.4918 9.88217C11.4918 9.86904 11.5003 9.86029 11.5129 9.86029C11.5185 9.86029 11.5239 9.8626 11.5278 9.8667C11.5318 9.8708 11.534 9.87636 11.534 9.88217C11.533 9.88718 11.5304 9.89168 11.5265 9.89488C11.5227 9.89807 11.5178 9.89977 11.5129 9.89967C11.508 9.89977 11.5032 9.89807 11.4993 9.89488C11.4955 9.89168 11.4928 9.88718 11.4918 9.88217Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.9472 9.79901L11.9765 9.8294L11.9388 9.87281L11.9304 9.87715L11.9263 9.87281L11.9137 9.81638L11.9472 9.80335"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.9472 9.79901L11.9765 9.8294L11.9388 9.87281L11.9304 9.87715L11.9263 9.87281L11.9137 9.81638L11.9472 9.80335"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M12.006 9.89507L11.985 9.91677L11.9348 9.89072V9.88204L11.939 9.87336L11.9934 9.86902L12.006 9.89507Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M12.006 9.89507L11.985 9.91677L11.9348 9.89072V9.88204L11.939 9.87336L11.9934 9.86902L12.006 9.89507Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.8547 9.86448L11.8673 9.89053H11.9217L11.9301 9.88184L11.9259 9.86882L11.8757 9.84277L11.8547 9.86448Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.8547 9.86448L11.8673 9.89053H11.9217L11.9301 9.88184L11.9259 9.86882L11.8757 9.84277L11.8547 9.86448Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M12.053 9.9039V9.92995L12.1116 9.93863L12.12 9.93429V9.92561L12.0781 9.88654L12.053 9.9039Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M12.053 9.9039V9.92995L12.1116 9.93863L12.12 9.93429V9.92561L12.0781 9.88654L12.053 9.9039Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.7028 9.8598C11.7028 9.85129 11.711 9.84277 11.7233 9.84277C11.7315 9.84277 11.7397 9.85129 11.7397 9.8598C11.7397 9.87257 11.7315 9.88108 11.7233 9.88108C11.7178 9.88108 11.7126 9.87884 11.7088 9.87485C11.7049 9.87086 11.7028 9.86545 11.7028 9.8598Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.7028 9.8598C11.7028 9.85129 11.711 9.84277 11.7233 9.84277C11.7315 9.84277 11.7397 9.85129 11.7397 9.8598C11.7397 9.87257 11.7315 9.88108 11.7233 9.88108C11.7178 9.88108 11.7126 9.87884 11.7088 9.87485C11.7049 9.87086 11.7028 9.86545 11.7028 9.8598Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.9095 9.88217C11.9095 9.86904 11.9222 9.86029 11.9306 9.86029C11.9433 9.86029 11.9517 9.86904 11.9517 9.88217C11.9517 9.89529 11.9433 9.89967 11.9306 9.89967C11.9257 9.89977 11.9209 9.89807 11.917 9.89488C11.9132 9.89168 11.9105 9.88718 11.9095 9.88217Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.9095 9.88217C11.9095 9.86904 11.9222 9.86029 11.9306 9.86029C11.9433 9.86029 11.9517 9.86904 11.9517 9.88217C11.9517 9.89529 11.9433 9.89967 11.9306 9.89967C11.9257 9.89977 11.9209 9.89807 11.917 9.89488C11.9132 9.89168 11.9105 9.88718 11.9095 9.88217Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.6859 9.64124C11.6859 9.61953 11.7027 9.60651 11.7194 9.60651C11.7361 9.60651 11.7613 9.61953 11.7613 9.64124C11.7613 9.66294 11.7403 9.67597 11.7194 9.67597C11.7108 9.67502 11.7028 9.67106 11.6967 9.66474C11.6906 9.65842 11.6868 9.65012 11.6859 9.64124Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.7487 9.62757V9.65361H11.6859V9.62757H11.7027V9.57113H11.6818V9.54942H11.7027V9.52338H11.7278V9.54942H11.7529V9.57547H11.7278V9.62757H11.7446"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.7487 9.62757V9.65361H11.6859V9.62757H11.7027V9.57113H11.6818V9.54942H11.7027V9.52338H11.7278V9.54942H11.7529V9.57547H11.7278V9.62757H11.7446H11.7487Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.7695 9.62757V9.65361H11.6691V9.62757H11.7109V9.57113H11.6816V9.54942H11.7067V9.52338H11.7319V9.54942H11.757V9.57547H11.7319V9.62757H11.7737"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.732 9.60651C11.7487 9.60651 11.7571 9.62387 11.7571 9.64124C11.7571 9.66294 11.7403 9.67597 11.7194 9.67597C11.7108 9.67502 11.7028 9.67106 11.6967 9.66474C11.6906 9.65842 11.6868 9.65012 11.6859 9.64124C11.6859 9.62387 11.6943 9.61085 11.711 9.60651"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.3059 9.93858L11.2808 9.90819C11.2718 9.90219 11.2619 9.89779 11.2515 9.89516C11.2515 9.89082 11.264 9.88214 11.2766 9.88214C11.285 9.88214 11.2891 9.88214 11.2933 9.89082V9.88214C11.2933 9.88214 11.3059 9.88214 11.3101 9.89516V9.93858"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.3059 9.93858L11.2808 9.90819C11.2718 9.90219 11.2619 9.89779 11.2515 9.89516C11.2515 9.89082 11.264 9.88214 11.2766 9.88214C11.285 9.88214 11.2891 9.88214 11.2933 9.89082V9.88214C11.2933 9.88214 11.3059 9.88214 11.3101 9.89516V9.93858H11.3059Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.3062 9.93009C11.3103 9.92158 11.3226 9.92158 11.3267 9.93009C11.3349 9.93435 11.339 9.94286 11.3308 9.95137L11.3103 9.94712C11.3062 9.94286 11.3021 9.93009 11.3103 9.92583"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.3062 9.93009C11.3103 9.92158 11.3226 9.92158 11.3267 9.93009C11.3349 9.93435 11.339 9.94286 11.3308 9.95137L11.3103 9.94712C11.3062 9.94286 11.3021 9.93009 11.3103 9.92583L11.3062 9.93009Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M12.1288 9.93858L12.1539 9.90819C12.1623 9.89951 12.1832 9.89516 12.1832 9.89516C12.1832 9.89082 12.1707 9.88214 12.1581 9.88214C12.1517 9.88269 12.1457 9.8858 12.1414 9.89082V9.88214C12.1414 9.88214 12.1288 9.88214 12.1246 9.89516V9.92555L12.1288 9.93858Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M12.1288 9.93858L12.1539 9.90819C12.1623 9.89951 12.1832 9.89516 12.1832 9.89516C12.1832 9.89082 12.1707 9.88214 12.1581 9.88214C12.1517 9.88269 12.1457 9.8858 12.1414 9.89082V9.88214C12.1414 9.88214 12.1288 9.88214 12.1246 9.89516V9.92555L12.1288 9.93858Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M12.1282 9.93009C12.1241 9.92158 12.1158 9.92158 12.1076 9.93009C12.0994 9.93435 12.0994 9.94286 12.1035 9.95137L12.124 9.94712C12.1323 9.94286 12.1323 9.93009 12.1282 9.92583"
                              fill="#C8B100"
                            />
                            <path
                              d="M12.1282 9.93009C12.1241 9.92158 12.1158 9.92158 12.1076 9.93009C12.0994 9.93435 12.0994 9.94286 12.1035 9.95137L12.124 9.94712C12.1323 9.94286 12.1323 9.93009 12.1282 9.92583V9.93009Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M11.2725 10.4115H12.1753V10.1709H11.2725V10.4159V10.4115Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.2725 10.4115H12.1753V10.1709H11.2725V10.4159V10.4115Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M12.0783 10.5778C12.0728 10.5766 12.067 10.5766 12.0615 10.5778H11.3654C11.3907 10.569 11.4075 10.5471 11.4075 10.5253C11.4075 10.499 11.3907 10.4771 11.3654 10.4684H12.0825H12.0783C12.053 10.4771 12.0361 10.499 12.0361 10.5253C12.0361 10.5471 12.053 10.569 12.0783 10.5778Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M12.0783 10.5778C12.0728 10.5766 12.067 10.5766 12.0615 10.5778H11.3654C11.3907 10.569 11.4075 10.5471 11.4075 10.5253C11.4075 10.499 11.3907 10.4771 11.3654 10.4684H12.0825H12.0783C12.053 10.4771 12.0361 10.499 12.0361 10.5253C12.0361 10.5471 12.053 10.569 12.0783 10.5778Z"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.3864 10.5778H12.0614C12.0867 10.5778 12.1036 10.5909 12.1036 10.6084C12.1036 10.6259 12.0867 10.6434 12.0614 10.6434H11.3864C11.3611 10.6434 11.3442 10.6259 11.3442 10.6084C11.3442 10.5909 11.3653 10.5734 11.3864 10.5734"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.3864 10.5778H12.0614C12.0867 10.5778 12.1036 10.5909 12.1036 10.6084C12.1036 10.6259 12.0867 10.6434 12.0614 10.6434H11.3864C11.3611 10.6434 11.3442 10.6259 11.3442 10.6084C11.3442 10.5909 11.3653 10.5734 11.3864 10.5734V10.5778Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.3864 10.4115H12.0614C12.0867 10.4115 12.1036 10.429 12.1036 10.4421C12.1036 10.4596 12.0867 10.4684 12.0614 10.4684H11.3864C11.3611 10.4684 11.3442 10.4596 11.3442 10.4421C11.3442 10.429 11.3611 10.4159 11.3864 10.4159"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.3864 10.4115H12.0614C12.0867 10.4115 12.1036 10.429 12.1036 10.4421C12.1036 10.4596 12.0867 10.4684 12.0614 10.4684H11.3864C11.3611 10.4684 11.3442 10.4596 11.3442 10.4421C11.3442 10.429 11.3611 10.4159 11.3864 10.4159V10.4115Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.0953 14.5416C11.1543 14.5416 11.2092 14.5284 11.2514 14.5066C11.3002 14.4827 11.3535 14.4708 11.4075 14.4716C11.4665 14.4716 11.5256 14.4847 11.5678 14.5066C11.61 14.5284 11.6648 14.5416 11.7239 14.5416C11.7872 14.5416 11.842 14.5284 11.8842 14.5066C11.9317 14.4834 11.9836 14.4714 12.0361 14.4716C12.09 14.4701 12.1436 14.4821 12.1922 14.5066C12.2343 14.5284 12.2934 14.5416 12.3525 14.5416V14.6466C12.2968 14.6468 12.2418 14.6333 12.1922 14.6072C12.1435 14.583 12.09 14.5711 12.0361 14.5722C11.977 14.5722 11.9222 14.5853 11.8842 14.6072C11.842 14.6291 11.7872 14.6466 11.7239 14.6466C11.6695 14.6466 11.616 14.6331 11.5678 14.6072C11.5177 14.5827 11.4628 14.5707 11.4075 14.5722C11.3535 14.5712 11.3001 14.5832 11.2514 14.6072C11.2092 14.6291 11.1543 14.6466 11.0911 14.6466V14.5416"
                              fill="#005BBF"
                            />
                            <path
                              d="M11.0953 14.5416C11.1543 14.5416 11.2092 14.5284 11.2514 14.5066C11.3002 14.4827 11.3535 14.4708 11.4075 14.4716C11.4665 14.4716 11.5256 14.4847 11.5678 14.5066C11.61 14.5284 11.6648 14.5416 11.7239 14.5416C11.7872 14.5416 11.842 14.5284 11.8842 14.5066C11.9317 14.4834 11.9836 14.4714 12.0361 14.4716C12.09 14.4701 12.1436 14.4821 12.1922 14.5066C12.2343 14.5284 12.2934 14.5416 12.3525 14.5416V14.6466C12.2968 14.6468 12.2418 14.6333 12.1922 14.6072C12.1435 14.583 12.09 14.5711 12.0361 14.5722C11.977 14.5722 11.9222 14.5853 11.8842 14.6072C11.842 14.6291 11.7872 14.6466 11.7239 14.6466C11.6695 14.6466 11.616 14.6331 11.5678 14.6072C11.5177 14.5827 11.4628 14.5707 11.4075 14.5722C11.3535 14.5712 11.3001 14.5832 11.2514 14.6072C11.2092 14.6291 11.1543 14.6466 11.0911 14.6466V14.5416H11.0953Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.0953 14.6465C11.1543 14.6465 11.2092 14.629 11.2514 14.6071C11.2936 14.5853 11.3484 14.5721 11.4075 14.5721C11.4665 14.5721 11.5256 14.5853 11.5678 14.6071C11.61 14.629 11.6648 14.6465 11.7239 14.6465C11.7796 14.647 11.8346 14.6335 11.8842 14.6071C11.9317 14.584 11.9836 14.572 12.0361 14.5721C12.0993 14.5721 12.1542 14.5853 12.1922 14.6071C12.2343 14.629 12.2934 14.6465 12.3525 14.6465V14.7471C12.2968 14.7474 12.2418 14.7339 12.1922 14.7078C12.1432 14.685 12.0897 14.6745 12.0361 14.6771C11.977 14.6771 11.9222 14.6859 11.8842 14.7078C11.842 14.7296 11.7872 14.7471 11.7239 14.7471C11.6693 14.7492 11.6153 14.7356 11.5678 14.7078C11.5256 14.6903 11.4708 14.6771 11.4075 14.6771C11.3539 14.6748 11.3005 14.6853 11.2514 14.7078C11.2018 14.7343 11.1468 14.7478 11.0911 14.7471V14.6465"
                              fill="#CCCCCC"
                            />
                            <path
                              d="M11.0953 14.6465C11.1543 14.6465 11.2092 14.629 11.2514 14.6071C11.2936 14.5853 11.3484 14.5721 11.4075 14.5721C11.4665 14.5721 11.5256 14.5853 11.5678 14.6071C11.61 14.629 11.6648 14.6465 11.7239 14.6465C11.7796 14.647 11.8346 14.6335 11.8842 14.6071C11.9317 14.584 11.9836 14.572 12.0361 14.5721C12.0993 14.5721 12.1542 14.5853 12.1922 14.6071C12.2343 14.629 12.2934 14.6465 12.3525 14.6465V14.7471C12.2968 14.7474 12.2418 14.7339 12.1922 14.7078C12.1432 14.685 12.0897 14.6745 12.0361 14.6771C11.977 14.6771 11.9222 14.6859 11.8842 14.7078C11.842 14.7296 11.7872 14.7471 11.7239 14.7471C11.6693 14.7492 11.6153 14.7356 11.5678 14.7078C11.5256 14.6903 11.4708 14.6771 11.4075 14.6771C11.3539 14.6748 11.3005 14.6853 11.2514 14.7078C11.2018 14.7343 11.1468 14.7478 11.0911 14.7471V14.6465"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.0953 14.7428C11.1543 14.7428 11.2092 14.734 11.2514 14.7078C11.2936 14.6903 11.3484 14.6772 11.4075 14.6772C11.4665 14.6772 11.5256 14.6859 11.5678 14.7078C11.61 14.7297 11.6648 14.7472 11.7239 14.7472C11.7796 14.7476 11.8346 14.7341 11.8842 14.7078C11.9317 14.6846 11.9836 14.6726 12.0361 14.6728C12.09 14.6713 12.1436 14.6833 12.1922 14.7078C12.2343 14.7297 12.2934 14.7472 12.3525 14.7472V14.8478C12.2968 14.8481 12.2418 14.8346 12.1922 14.8084C12.1431 14.7858 12.0897 14.7753 12.0361 14.7778C11.977 14.7778 11.9222 14.7909 11.8842 14.8084C11.842 14.8347 11.7872 14.8478 11.7239 14.8478C11.6648 14.8478 11.6058 14.8347 11.5678 14.8128C11.5177 14.7883 11.4628 14.7763 11.4075 14.7778C11.3535 14.7768 11.3001 14.7888 11.2514 14.8128C11.2092 14.8347 11.1543 14.8478 11.0911 14.8478V14.7428"
                              fill="#005BBF"
                            />
                            <path
                              d="M11.0953 14.7428C11.1543 14.7428 11.2092 14.734 11.2514 14.7078C11.2936 14.6903 11.3484 14.6772 11.4075 14.6772C11.4665 14.6772 11.5256 14.6859 11.5678 14.7078C11.61 14.7297 11.6648 14.7472 11.7239 14.7472C11.7796 14.7476 11.8346 14.7341 11.8842 14.7078C11.9317 14.6846 11.9836 14.6726 12.0361 14.6728C12.09 14.6713 12.1436 14.6833 12.1922 14.7078C12.2343 14.7297 12.2934 14.7472 12.3525 14.7472V14.8478C12.2968 14.8481 12.2418 14.8346 12.1922 14.8084C12.1431 14.7858 12.0897 14.7753 12.0361 14.7778C11.977 14.7778 11.9222 14.7909 11.8842 14.8084C11.842 14.8347 11.7872 14.8478 11.7239 14.8478C11.6648 14.8478 11.6058 14.8347 11.5678 14.8128C11.5177 14.7883 11.4628 14.7763 11.4075 14.7778C11.3535 14.7768 11.3001 14.7888 11.2514 14.8128C11.2092 14.8347 11.1543 14.8478 11.0911 14.8478V14.7428"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.0953 14.9484C11.1493 14.9498 11.2028 14.9378 11.2514 14.9134C11.2936 14.8915 11.3484 14.8784 11.4075 14.8784C11.4665 14.8784 11.5256 14.8915 11.5678 14.9134C11.61 14.9353 11.6648 14.9484 11.7239 14.9484C11.7872 14.9484 11.842 14.9353 11.8842 14.909C11.932 14.8873 11.9839 14.8769 12.0361 14.8784C12.0993 14.8784 12.1542 14.8915 12.1922 14.9134C12.2422 14.938 12.2971 14.95 12.3525 14.9484V14.8478C12.2968 14.848 12.2418 14.8345 12.1922 14.8084C12.1431 14.7858 12.0897 14.7753 12.0361 14.7778C11.977 14.7778 11.9222 14.7909 11.8842 14.8084C11.842 14.8303 11.7872 14.8478 11.7239 14.8478C11.6648 14.8478 11.6058 14.8346 11.5678 14.8128C11.5177 14.7883 11.4628 14.7763 11.4075 14.7778C11.3535 14.7768 11.3001 14.7888 11.2514 14.8128C11.2092 14.8346 11.1543 14.8478 11.0911 14.8478V14.9484"
                              fill="#CCCCCC"
                            />
                            <path
                              d="M11.0953 14.9484C11.1493 14.9498 11.2028 14.9378 11.2514 14.9134C11.2936 14.8915 11.3484 14.8784 11.4075 14.8784C11.4665 14.8784 11.5256 14.8915 11.5678 14.9134C11.61 14.9353 11.6648 14.9484 11.7239 14.9484C11.7872 14.9484 11.842 14.9353 11.8842 14.909C11.932 14.8873 11.9839 14.8769 12.0361 14.8784C12.0993 14.8784 12.1542 14.8915 12.1922 14.9134C12.2422 14.938 12.2971 14.95 12.3525 14.9484V14.8478C12.2968 14.848 12.2418 14.8345 12.1922 14.8084C12.1431 14.7858 12.0897 14.7753 12.0361 14.7778C11.977 14.7778 11.9222 14.7909 11.8842 14.8084C11.842 14.8303 11.7872 14.8478 11.7239 14.8478C11.6648 14.8478 11.6058 14.8346 11.5678 14.8128C11.5177 14.7883 11.4628 14.7763 11.4075 14.7778C11.3535 14.7768 11.3001 14.7888 11.2514 14.8128C11.2092 14.8346 11.1543 14.8478 11.0911 14.8478V14.9484"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.0953 15.049C11.1493 15.0503 11.2027 15.0383 11.2514 15.014C11.2936 14.9921 11.3484 14.979 11.4075 14.979C11.4665 14.979 11.5256 14.9921 11.5678 15.014C11.61 15.0359 11.6648 15.049 11.7239 15.049C11.7796 15.0495 11.8346 15.036 11.8842 15.0096C11.932 14.9879 11.9839 14.9775 12.0361 14.979C12.0993 14.979 12.1542 14.9921 12.1922 15.014C12.2343 15.0359 12.2934 15.049 12.3525 15.049V14.9484C12.2971 14.95 12.2422 14.938 12.1922 14.9134C12.1435 14.8892 12.09 14.8773 12.0361 14.8784C11.9839 14.8769 11.932 14.8873 11.8842 14.909C11.8346 14.9353 11.7796 14.9488 11.7239 14.9484C11.6648 14.9484 11.6058 14.9353 11.5678 14.9134C11.5256 14.8915 11.4708 14.8784 11.4075 14.8784C11.3484 14.8784 11.2936 14.8915 11.2514 14.9134C11.2092 14.9353 11.1543 14.9484 11.0911 14.9484V15.049"
                              fill="#005BBF"
                            />
                            <path
                              d="M11.0953 15.049C11.1493 15.0503 11.2027 15.0383 11.2514 15.014C11.2936 14.9921 11.3484 14.979 11.4075 14.979C11.4665 14.979 11.5256 14.9921 11.5678 15.014C11.61 15.0359 11.6648 15.049 11.7239 15.049C11.7796 15.0495 11.8346 15.036 11.8842 15.0096C11.932 14.9879 11.9839 14.9775 12.0361 14.979C12.0993 14.979 12.1542 14.9921 12.1922 15.014C12.2343 15.0359 12.2934 15.049 12.3525 15.049V14.9484C12.2971 14.95 12.2422 14.938 12.1922 14.9134C12.1435 14.8892 12.09 14.8773 12.0361 14.8784C11.9839 14.8769 11.932 14.8873 11.8842 14.909C11.8346 14.9353 11.7796 14.9488 11.7239 14.9484C11.6648 14.9484 11.6058 14.9353 11.5678 14.9134C11.5256 14.8915 11.4708 14.8784 11.4075 14.8784C11.3484 14.8784 11.2936 14.8915 11.2514 14.9134C11.2092 14.9353 11.1543 14.9484 11.0911 14.9484V15.049H11.0953Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M12.0783 14.1302L12.0741 14.1521C12.0741 14.2177 12.1247 14.2659 12.188 14.2659H11.2599C11.3232 14.2659 11.3738 14.2134 11.3738 14.1521L11.3696 14.1302H12.0783Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M12.0783 14.1302L12.0741 14.1521C12.0741 14.2177 12.1247 14.2659 12.188 14.2659H11.2599C11.3232 14.2659 11.3738 14.2134 11.3738 14.1521L11.3696 14.1302H12.0783Z"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.3864 14.0646H12.0614C12.0867 14.0646 12.1036 14.0778 12.1036 14.0996C12.1036 14.1171 12.0867 14.1303 12.0614 14.1303H11.3864C11.3611 14.1303 11.3442 14.1171 11.3442 14.0953C11.3442 14.0778 11.3653 14.0646 11.3864 14.0646Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.3864 14.0646H12.0614C12.0867 14.0646 12.1036 14.0778 12.1036 14.0996C12.1036 14.1171 12.0867 14.1303 12.0614 14.1303H11.3864C11.3611 14.1303 11.3442 14.1171 11.3442 14.0953C11.3442 14.0778 11.3653 14.0646 11.3864 14.0646Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.2599 14.5109H12.188V14.2615H11.2599V14.5065V14.5109Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.2599 14.5109H12.188V14.2615H11.2599V14.5065V14.5109Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M12.2597 13.1984C12.3483 13.2509 12.4116 13.3078 12.4032 13.3384C12.3989 13.3647 12.3694 13.3822 12.3272 13.4084C12.2597 13.4565 12.2218 13.5397 12.2513 13.5834C12.223 13.5603 12.2002 13.5307 12.1848 13.4969C12.1694 13.4631 12.1618 13.4261 12.1627 13.3887C12.1635 13.3514 12.1727 13.3147 12.1895 13.2817C12.2064 13.2487 12.2304 13.2202 12.2597 13.1984Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M12.2597 13.1984C12.3483 13.2509 12.4116 13.3078 12.4032 13.3384C12.3989 13.3647 12.3694 13.3822 12.3272 13.4084C12.2597 13.4565 12.2218 13.5397 12.2513 13.5834C12.223 13.5603 12.2002 13.5307 12.1848 13.4969C12.1694 13.4631 12.1618 13.4261 12.1627 13.3887C12.1635 13.3514 12.1727 13.3147 12.1895 13.2817C12.2064 13.2487 12.2304 13.2202 12.2597 13.1984Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.3949 14.0253H12.053V10.674H11.3949V14.0209V14.0253Z"
                              fill="#CCCCCC"
                            />
                            <path
                              d="M11.8716 10.6784V14.0165M11.9476 10.6784V14.0165M11.3991 14.0253H12.053V10.674H11.3949V14.0209L11.3991 14.0253Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.7241 11.9296C11.0404 11.8196 11.3774 11.7896 11.7071 11.8421C12.0994 11.9121 12.399 12.074 12.3779 12.2096V12.2184L12.5255 11.8596C12.5508 11.7153 12.2176 11.5315 11.783 11.4571C11.6547 11.4354 11.5249 11.4251 11.3949 11.4265C11.1122 11.4265 10.8718 11.4615 10.7241 11.5184V11.9296Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M10.7241 11.9296C11.0404 11.8196 11.3774 11.7896 11.7071 11.8421C12.0994 11.9121 12.399 12.074 12.3779 12.2096V12.2184L12.5255 11.8596C12.5508 11.7153 12.2176 11.5315 11.783 11.4571C11.6547 11.4354 11.5249 11.4251 11.3949 11.4265C11.1122 11.4265 10.8718 11.4615 10.7241 11.5184V11.9296Z"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.053 12.3496C12.2386 12.3365 12.3609 12.2884 12.3778 12.2096C12.3863 12.144 12.3272 12.0784 12.2175 12.0128C12.1669 12.0171 12.112 12.0259 12.053 12.0259V12.3496Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M12.053 12.3496C12.2386 12.3365 12.3609 12.2884 12.3778 12.2096C12.3863 12.144 12.3272 12.0784 12.2175 12.0128C12.1669 12.0171 12.112 12.0259 12.053 12.0259V12.3496Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M11.3907 12.0959C11.3054 12.1037 11.223 12.1322 11.1502 12.179V12.1878C11.1291 12.2315 11.2261 12.319 11.3949 12.424V12.0959"
                              fill="#AD1519"
                            />
                            <path
                              d="M11.3907 12.0959C11.3054 12.1037 11.223 12.1322 11.1502 12.179V12.1878C11.1291 12.2315 11.2261 12.319 11.3949 12.424V12.0959"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M12.4622 12.9928C12.479 12.9403 12.3019 12.8353 12.0529 12.739C11.9348 12.6953 11.842 12.6515 11.7239 12.599C11.3737 12.4371 11.1164 12.2534 11.1501 12.1878V12.179C11.1333 12.1965 11.1079 12.529 11.1079 12.529C11.0742 12.5859 11.3104 12.7696 11.6311 12.9271C11.7323 12.9796 11.9517 13.0584 12.0529 13.1021C12.2344 13.1634 12.42 13.2903 12.4031 13.334L12.4622 12.9971"
                              fill="#AD1519"
                            />
                            <path
                              d="M12.4622 12.9928C12.479 12.9403 12.3019 12.8353 12.0529 12.739C11.9348 12.6953 11.842 12.6515 11.7239 12.599C11.3737 12.4371 11.1164 12.2534 11.1501 12.1878V12.179C11.1333 12.1965 11.1079 12.529 11.1079 12.529C11.0742 12.5859 11.3104 12.7696 11.6311 12.9271C11.7323 12.9796 11.9517 13.0584 12.0529 13.1021C12.2344 13.1634 12.42 13.2903 12.4031 13.334L12.4622 12.9971V12.9928Z"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.1333 11.7853C11.1586 11.6846 11.1924 11.5928 11.2219 11.4965H11.2008C11.1938 11.4983 11.1868 11.4998 11.1797 11.5009C11.1632 11.5718 11.1435 11.6419 11.1206 11.7109C11.0785 11.6496 11.0363 11.5928 11.0067 11.5315L10.9646 11.5403H10.9224C10.9807 11.6218 11.037 11.705 11.0911 11.7896H11.1122L11.1333 11.7853ZM11.3864 11.4965H11.3442C11.333 11.4971 11.3217 11.4971 11.3105 11.4965V11.7678H11.4877V11.7371H11.378L11.3822 11.4965M11.6691 11.5403L11.7535 11.5534V11.5228L11.5088 11.5009V11.5359C11.5369 11.5344 11.565 11.5344 11.5931 11.5359L11.5763 11.7809H11.6438L11.6649 11.5446M11.7661 11.8071C11.7788 11.8071 11.7872 11.8071 11.7999 11.8159L11.8336 11.8246L11.8631 11.6978L11.8885 11.7503L11.9222 11.8421L11.9644 11.8509C11.9813 11.8509 11.9939 11.8596 12.0066 11.864L11.9939 11.8334C11.9771 11.7896 11.9517 11.7503 11.9391 11.7065C11.9813 11.7065 12.0192 11.6934 12.0277 11.654C12.0319 11.6278 12.0277 11.6103 11.9981 11.5884C11.9813 11.5753 11.9475 11.5709 11.9264 11.5665L11.8252 11.5446L11.7661 11.8071ZM11.8927 11.5796C11.9222 11.5884 11.956 11.5928 11.956 11.6234V11.6453C11.9433 11.6846 11.9138 11.6978 11.8716 11.6846L11.8927 11.5796ZM12.2302 11.8859L12.2217 11.9734L12.2555 11.9953L12.2935 12.0171L12.3146 11.7109C12.3043 11.7077 12.2944 11.7033 12.285 11.6978L12.0277 11.864L12.0488 11.8771L12.0656 11.8859L12.1374 11.8334L12.2344 11.8903L12.2302 11.8859ZM12.1585 11.8203L12.2428 11.759L12.2344 11.8596L12.1585 11.8159"
                              fill="#C8B100"
                            />
                            <path
                              d="M7.68652 9.07279C7.68652 9.02904 7.72871 8.98529 7.7709 8.98529C7.81309 8.98529 7.86371 9.02904 7.86371 9.07279C7.86371 9.12092 7.82152 9.16029 7.77512 9.16029C7.76369 9.16088 7.75226 9.15906 7.74153 9.15493C7.7308 9.1508 7.721 9.14445 7.71271 9.13626C7.70442 9.12808 7.69783 9.11823 7.69333 9.10732C7.68882 9.09641 7.68651 9.08466 7.68652 9.07279Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M8.67794 8.32904C8.94372 8.32904 9.18419 8.37279 9.34028 8.43404C9.53508 8.51744 9.74613 8.55192 9.95622 8.53467C10.0701 8.53467 10.2304 8.56967 10.3908 8.63967C10.5048 8.69032 10.6102 8.75976 10.7029 8.84529L10.6397 8.90654L10.6228 9.07279L10.4498 9.27842L10.3654 9.35717L10.1545 9.52779L10.049 9.53654L10.0195 9.62842L8.68638 9.46654L7.34903 9.62842L7.31528 9.53654L7.20981 9.52779L7.0031 9.35279L6.91872 9.27842L6.74575 9.07279L6.72466 8.90654L6.66138 8.84529C6.75549 8.75954 6.86233 8.69011 6.97778 8.63967C7.11286 8.57474 7.25927 8.53902 7.4081 8.53467C7.49247 8.54342 7.58528 8.53904 7.68653 8.52592C7.80238 8.513 7.91595 8.48355 8.02403 8.43842C8.18013 8.37279 8.40372 8.32904 8.67794 8.32904Z"
                              fill="#AD1519"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M8.69909 10.1534C8.20128 10.1534 7.75409 10.0921 7.43769 9.99588C7.42691 9.99282 7.41756 9.98582 7.41136 9.97617C7.40516 9.96652 7.40252 9.95488 7.40394 9.94338C7.40394 9.92151 7.41659 9.89963 7.43769 9.89088C7.8491 9.77811 8.27362 9.7251 8.69909 9.73338C9.19269 9.73338 9.63988 9.79463 9.95628 9.89088C9.96628 9.8952 9.97481 9.90249 9.98082 9.91183C9.98683 9.92118 9.99003 9.93216 9.99003 9.94338C9.99003 9.95461 9.98683 9.96559 9.98082 9.97493C9.97481 9.98427 9.96628 9.99156 9.95628 9.99588C9.63988 10.0921 9.19691 10.1534 8.69909 10.1534Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.69482 10.0878C8.24764 10.0878 7.84264 10.0353 7.53467 9.95213C7.84264 9.86463 8.24764 9.82088 8.69482 9.81651C9.08664 9.81134 9.47761 9.85541 9.8592 9.94776C9.55123 10.0353 9.14201 10.0878 8.69482 10.0878Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M8.72858 10.0922V9.81653M8.65686 10.0922V9.81653"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M8.58935 10.0922V9.81653M8.52185 10.0922V9.81653"
                              stroke="black"
                              stroke-width="0.025"
                            />
                            <path
                              d="M8.46285 10.0922V9.81653M8.34473 10.0747V9.82528M8.39957 10.079V9.81653M8.23926 10.0615V9.83403M8.2941 10.0703V9.82528"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M8.09994 10.0528V9.84277M8.14213 10.0484V9.84277M8.19275 10.0615V9.84277M8.04932 10.0484V9.85152"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.00302 10.0396V9.8559M7.95239 10.0353V9.86027"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M7.84689 10.0178V9.88654M7.90173 10.0265V9.87341M7.79626 10.009V9.88654"
                              stroke="black"
                              stroke-width="0.075"
                            />
                            <path
                              d="M7.74906 9.99951V9.89966M7.69464 9.98648V9.90834M7.64441 9.9778V9.92136"
                              stroke="black"
                              stroke-width="0.0875"
                            />
                            <path
                              d="M7.58533 9.96443V9.93463"
                              stroke="black"
                              stroke-width="0.1125"
                            />
                            <path
                              d="M9.0155 10.0746V9.82088M8.89316 10.0834V9.81651M8.80457 10.0878V9.81213"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M8.69057 9.72902C8.26306 9.72403 7.83701 9.78147 7.42494 9.89964C7.45025 9.88652 7.44603 9.85589 7.41228 9.76839C7.3701 9.65902 7.31104 9.66339 7.31104 9.66339C7.66119 9.55402 8.15479 9.48839 8.69479 9.48839C9.16435 9.48113 9.63268 9.54 10.087 9.66339C10.087 9.66339 10.0237 9.65902 9.9815 9.76402C9.94775 9.85152 9.94775 9.88652 9.97307 9.89527C9.65666 9.79902 9.19682 9.73339 8.69479 9.73339"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.69057 9.72902C8.26306 9.72403 7.83701 9.78147 7.42494 9.89964C7.45025 9.88652 7.44603 9.85589 7.41228 9.76839C7.3701 9.65902 7.31104 9.66339 7.31104 9.66339C7.66119 9.55402 8.15479 9.48839 8.69479 9.48839C9.16435 9.48113 9.63268 9.54 10.087 9.66339C10.087 9.66339 10.0237 9.65902 9.9815 9.76402C9.94775 9.85152 9.94775 9.88652 9.97307 9.89527C9.65666 9.79902 9.19682 9.73339 8.69479 9.73339"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.69487 9.48842C8.15065 9.48842 7.66127 9.55405 7.31112 9.66342C7.30586 9.66551 7.30025 9.66648 7.29463 9.66629C7.289 9.66609 7.28347 9.66473 7.27836 9.66229C7.27325 9.65984 7.26866 9.65636 7.26487 9.65205C7.26108 9.64773 7.25815 9.64268 7.25627 9.63717C7.25434 9.63144 7.25358 9.62535 7.25404 9.61929C7.2545 9.61323 7.25617 9.60734 7.25895 9.60199C7.26173 9.59664 7.26555 9.59194 7.27017 9.58821C7.2748 9.58448 7.28012 9.58178 7.2858 9.5803C7.74494 9.45126 8.21922 9.38941 8.69487 9.39655C9.25174 9.39655 9.75799 9.47092 10.1081 9.5803C10.1335 9.58905 10.1461 9.6153 10.1377 9.63717C10.1292 9.65905 10.1039 9.67217 10.0828 9.66342C9.72846 9.55405 9.23909 9.48842 8.69487 9.48842Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.69482 10.0878C8.24764 10.0878 7.84264 10.0353 7.53467 9.95213C7.84264 9.86463 8.24764 9.82088 8.69482 9.81651C9.08664 9.81134 9.47761 9.85541 9.8592 9.94776C9.55123 10.0353 9.14201 10.0878 8.69482 10.0878Z"
                              stroke="black"
                              stroke-width="0.05"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.31091 9.61495C8.31091 9.59324 8.32766 9.57153 8.35277 9.57153C8.37371 9.57153 8.39464 9.59324 8.39464 9.61495C8.39464 9.63665 8.37789 9.65836 8.35277 9.65836C8.34167 9.65836 8.33102 9.65378 8.32317 9.64564C8.31532 9.6375 8.31091 9.62646 8.31091 9.61495Z"
                              fill="white"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.69482 9.65024H8.56404C8.55285 9.65024 8.54212 9.64563 8.53421 9.63743C8.5263 9.62923 8.52185 9.6181 8.52185 9.60649C8.52185 9.59489 8.5263 9.58376 8.53421 9.57556C8.54212 9.56735 8.55285 9.56274 8.56404 9.56274H8.83404C8.85513 9.56274 8.87623 9.58462 8.87623 9.60649C8.87623 9.62837 8.85513 9.65024 8.83404 9.65024H8.69904"
                              fill="#AD1519"
                            />
                            <path
                              d="M8.69482 9.65024H8.56404C8.55285 9.65024 8.54212 9.64563 8.53421 9.63743C8.5263 9.62923 8.52185 9.6181 8.52185 9.60649C8.52185 9.59489 8.5263 9.58376 8.53421 9.57556C8.54212 9.56735 8.55285 9.56274 8.56404 9.56274H8.83404C8.85513 9.56274 8.87623 9.58462 8.87623 9.60649C8.87623 9.62837 8.85513 9.65024 8.83404 9.65024H8.69904"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.02824 9.68968L7.93121 9.69843C7.90589 9.7028 7.88902 9.6853 7.88058 9.66343C7.87999 9.65732 7.88064 9.65116 7.8825 9.64534C7.88435 9.63951 7.88736 9.63416 7.89134 9.62962C7.89532 9.62508 7.90017 9.62146 7.90559 9.619C7.911 9.61653 7.91686 9.61527 7.92277 9.6153L8.01558 9.60218L8.11683 9.58905C8.13793 9.58905 8.15902 9.60218 8.16324 9.62843C8.16746 9.6503 8.15058 9.67218 8.12527 9.67218L8.02824 9.68968Z"
                              fill="#058E6E"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.63599 9.69808C7.63599 9.67203 7.65692 9.65466 7.68203 9.65466C7.70715 9.65466 7.7239 9.67203 7.7239 9.69808C7.7239 9.71978 7.70715 9.74149 7.68203 9.74149C7.67093 9.74149 7.66028 9.73691 7.65243 9.72877C7.64458 9.72063 7.64017 9.70959 7.64017 9.69808"
                              fill="white"
                            />
                            <path
                              d="M7.63599 9.69808C7.63599 9.67203 7.65692 9.65466 7.68203 9.65466C7.70715 9.65466 7.7239 9.67203 7.7239 9.69808C7.7239 9.71978 7.70715 9.74149 7.68203 9.74149C7.67093 9.74149 7.66028 9.73691 7.65243 9.72877C7.64458 9.72063 7.64017 9.70959 7.64017 9.69808"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.34058 9.77715L7.3912 9.70715L7.53042 9.72465L7.42073 9.81215L7.3448 9.77715"
                              fill="#AD1519"
                            />
                            <path
                              d="M7.34058 9.77715L7.3912 9.70715L7.53042 9.72465L7.42073 9.81215L7.3448 9.77715"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.36563 9.68967L9.46266 9.69842C9.48375 9.7028 9.50484 9.6853 9.50906 9.66342C9.50965 9.65767 9.50912 9.65186 9.50753 9.64632C9.50593 9.64078 9.50329 9.63562 9.49976 9.63115C9.49623 9.62667 9.49188 9.62297 9.48696 9.62025C9.48204 9.61752 9.47665 9.61584 9.4711 9.6153L9.37828 9.60217L9.27703 9.58905C9.27149 9.58844 9.26588 9.58898 9.26054 9.59064C9.2552 9.5923 9.25023 9.59503 9.24591 9.5987C9.24159 9.60236 9.23802 9.60687 9.2354 9.61197C9.23278 9.61707 9.23115 9.62266 9.23063 9.62842C9.22641 9.6503 9.24328 9.67217 9.2686 9.67217L9.36563 9.68967Z"
                              fill="#058E6E"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.99854 9.61528C8.99854 9.59341 9.01541 9.57153 9.04072 9.57153C9.06604 9.57153 9.08291 9.59341 9.08291 9.61528C9.08291 9.63716 9.06604 9.65903 9.04072 9.65903C9.02953 9.65903 9.0188 9.65442 9.01089 9.64622C9.00298 9.63801 8.99854 9.62689 8.99854 9.61528ZM9.6651 9.69841C9.6651 9.67216 9.68619 9.65466 9.70729 9.65466C9.7326 9.65466 9.75369 9.67216 9.75369 9.69841C9.75369 9.72028 9.73682 9.74216 9.7115 9.74216C9.70031 9.74216 9.68958 9.73755 9.68167 9.72934C9.67376 9.72114 9.66932 9.71001 9.66932 9.69841"
                              fill="white"
                            />
                            <path
                              d="M9.6651 9.69841C9.6651 9.67216 9.68619 9.65466 9.70729 9.65466C9.7326 9.65466 9.75369 9.67216 9.75369 9.69841C9.75369 9.72028 9.73682 9.74216 9.7115 9.74216C9.70031 9.74216 9.68958 9.73755 9.68167 9.72934C9.67376 9.72114 9.66932 9.71001 9.66932 9.69841M8.99854 9.61528C8.99854 9.59341 9.01541 9.57153 9.04072 9.57153C9.06604 9.57153 9.08291 9.59341 9.08291 9.61528C9.08291 9.63716 9.06604 9.65903 9.04072 9.65903C9.02953 9.65903 9.0188 9.65442 9.01089 9.64622C9.00298 9.63801 8.99854 9.62689 8.99854 9.61528Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.049 9.77715L10.0026 9.70715L9.8634 9.72465L9.97309 9.81215L10.049 9.77715Z"
                              fill="#AD1519"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.47986 9.96528C7.79205 9.8734 8.22236 9.81653 8.69486 9.81653C9.17158 9.81653 9.59767 9.8734 9.91408 9.96528"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.69078 8.69654L7.74984 8.74029L7.83422 8.60029C7.78229 8.56859 7.74031 8.52198 7.71336 8.46608C7.68641 8.41019 7.67564 8.3474 7.68234 8.28529C7.69078 8.10592 7.90172 7.95279 8.17593 7.95279C8.31515 7.95279 8.44172 7.99654 8.53453 8.05779C8.53453 8.03154 8.53453 8.00529 8.54297 7.97904C8.43044 7.91575 8.30391 7.88408 8.17593 7.88717C7.86375 7.88717 7.61906 8.06654 7.6064 8.28529C7.60036 8.34717 7.6087 8.40965 7.63072 8.4675C7.65274 8.52534 7.6878 8.57688 7.73297 8.61779L7.69078 8.69654Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M7.69078 8.69654L7.74984 8.74029L7.83422 8.60029C7.78229 8.56859 7.74031 8.52198 7.71336 8.46608C7.68641 8.41019 7.67564 8.3474 7.68234 8.28529C7.69078 8.10592 7.90172 7.95279 8.17593 7.95279C8.31515 7.95279 8.44172 7.99654 8.53453 8.05779C8.53453 8.03154 8.53453 8.00529 8.54297 7.97904C8.43044 7.91575 8.30391 7.88408 8.17593 7.88717C7.86375 7.88717 7.61906 8.06654 7.6064 8.28529C7.60036 8.34717 7.6087 8.40965 7.63072 8.4675C7.65274 8.52534 7.6878 8.57688 7.73297 8.61779L7.69078 8.69654Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.695 8.69654C7.64488 8.66055 7.60353 8.61296 7.57424 8.55752C7.54495 8.50208 7.52852 8.44033 7.52625 8.37716C7.52625 8.23716 7.61062 8.11029 7.74984 8.02716C7.7053 8.0618 7.66916 8.10672 7.64426 8.15835C7.61936 8.20999 7.6064 8.26693 7.6064 8.32466C7.60618 8.38004 7.61736 8.43484 7.63918 8.48539C7.66101 8.53593 7.69298 8.58107 7.73296 8.61779L7.695 8.69654Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M7.695 8.69654C7.64488 8.66055 7.60353 8.61296 7.57424 8.55752C7.54495 8.50208 7.52852 8.44033 7.52625 8.37716C7.52625 8.23716 7.61062 8.11029 7.74984 8.02716C7.7053 8.0618 7.66916 8.10672 7.64426 8.15835C7.61936 8.20999 7.6064 8.26693 7.6064 8.32466C7.60618 8.38004 7.61736 8.43484 7.63918 8.48539C7.66101 8.53593 7.69298 8.58107 7.73296 8.61779L7.695 8.69654Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.75426 8.84088C6.69215 8.7703 6.65756 8.6783 6.65723 8.58275C6.65723 8.52588 6.66988 8.469 6.69941 8.4165C6.78379 8.23275 7.05379 8.1015 7.37441 8.1015C7.45879 8.1015 7.54316 8.11025 7.62332 8.12775L7.58113 8.189C7.51293 8.17628 7.4437 8.17042 7.37441 8.1715C7.0791 8.1715 6.83441 8.28963 6.7627 8.44713C6.74295 8.48939 6.73285 8.53579 6.73316 8.58275C6.73359 8.62977 6.74402 8.6761 6.76371 8.71845C6.7834 8.76081 6.81186 8.79813 6.84707 8.82775L6.73738 9.00713L6.68254 8.96338L6.75426 8.84088Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M6.75426 8.84088C6.69215 8.7703 6.65756 8.6783 6.65723 8.58275C6.65723 8.52588 6.66988 8.469 6.69941 8.4165C6.78379 8.23275 7.05379 8.1015 7.37441 8.1015C7.45879 8.1015 7.54316 8.11025 7.62332 8.12775L7.58113 8.189C7.51293 8.17628 7.4437 8.17042 7.37441 8.1715C7.0791 8.1715 6.83441 8.28963 6.7627 8.44713C6.74295 8.48939 6.73285 8.53579 6.73316 8.58275C6.73359 8.62977 6.74402 8.6761 6.76371 8.71845C6.7834 8.76081 6.81186 8.79813 6.84707 8.82775L6.73738 9.00713L6.68254 8.96338L6.75426 8.84088Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.86387 8.23712C6.79268 8.27954 6.73425 8.34164 6.69512 8.4165C6.67034 8.46816 6.65735 8.52504 6.65715 8.58275C6.65715 8.68337 6.69512 8.77087 6.75418 8.84087L6.6909 8.95025C6.62832 8.86965 6.59409 8.76935 6.59387 8.66587C6.59387 8.49087 6.69934 8.33775 6.86387 8.23712Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M6.86387 8.23712C6.79268 8.27954 6.73425 8.34164 6.69512 8.4165C6.67034 8.46816 6.65735 8.52504 6.65715 8.58275C6.65715 8.68337 6.69512 8.77087 6.75418 8.84087L6.6909 8.95025C6.62832 8.86965 6.59409 8.76935 6.59387 8.66587C6.59387 8.49087 6.69934 8.33775 6.86387 8.23712Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.69057 7.84778C8.76229 7.84778 8.82557 7.8959 8.83822 7.96153C8.85088 8.02278 8.8551 8.0884 8.8551 8.1584V8.20653C8.85932 8.3509 8.88041 8.48215 8.90994 8.5609L8.69057 8.77965L8.47119 8.5609C8.50072 8.48215 8.52182 8.3509 8.52604 8.20653V8.1584C8.52604 8.0884 8.53447 8.02278 8.54291 7.96153C8.55557 7.8959 8.61885 7.84778 8.69057 7.84778Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.69057 7.84778C8.76229 7.84778 8.82557 7.8959 8.83822 7.96153C8.85088 8.02278 8.8551 8.0884 8.8551 8.1584V8.20653C8.85932 8.3509 8.88041 8.48215 8.90994 8.5609L8.69057 8.77965L8.47119 8.5609C8.50072 8.48215 8.52182 8.3509 8.52604 8.20653V8.1584C8.52604 8.0884 8.53447 8.02278 8.54291 7.96153C8.55557 7.8959 8.61885 7.84778 8.69057 7.84778Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.69068 7.91779C8.73287 7.91779 8.7624 7.94404 8.76662 7.97904C8.77505 8.03154 8.78349 8.09279 8.78349 8.16279V8.20654C8.78771 8.34654 8.8088 8.46904 8.83412 8.54341L8.69068 8.68341L8.54724 8.54341C8.57677 8.46904 8.59365 8.34654 8.59787 8.20654V8.16279C8.59904 8.10118 8.60468 8.03976 8.61474 7.97904C8.61987 7.96202 8.6299 7.94703 8.64347 7.93609C8.65704 7.92514 8.67351 7.91876 8.69068 7.91779Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.69068 7.91779C8.73287 7.91779 8.7624 7.94404 8.76662 7.97904C8.77505 8.03154 8.78349 8.09279 8.78349 8.16279V8.20654C8.78771 8.34654 8.8088 8.46904 8.83412 8.54341L8.69068 8.68341L8.54724 8.54341C8.57677 8.46904 8.59365 8.34654 8.59787 8.20654V8.16279C8.59904 8.10118 8.60468 8.03976 8.61474 7.97904C8.61987 7.96202 8.6299 7.94703 8.64347 7.93609C8.65704 7.92514 8.67351 7.91876 8.69068 7.91779Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.6905 8.69654L9.63565 8.74029L9.55128 8.60029C9.59729 8.57174 9.63543 8.53139 9.66203 8.48311C9.68863 8.43483 9.70279 8.38027 9.70315 8.32467C9.70397 8.31156 9.70397 8.2984 9.70315 8.28529C9.69472 8.10592 9.47956 7.95279 9.20956 7.95279C9.08258 7.94968 8.95763 7.98626 8.85097 8.05779C8.84915 8.03144 8.84634 8.00517 8.84253 7.97904C8.95506 7.91575 9.08158 7.88408 9.20956 7.88717C9.52175 7.88717 9.76644 8.06654 9.77487 8.28529C9.78092 8.34717 9.77258 8.40965 9.75056 8.4675C9.72854 8.52534 9.69348 8.57688 9.64831 8.61779L9.6905 8.69654Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.6905 8.69654L9.63565 8.74029L9.55128 8.60029C9.59729 8.57174 9.63543 8.53139 9.66203 8.48311C9.68863 8.43483 9.70279 8.38027 9.70315 8.32467C9.70397 8.31156 9.70397 8.2984 9.70315 8.28529C9.69472 8.10592 9.47956 7.95279 9.20956 7.95279C9.08258 7.94968 8.95763 7.98626 8.85097 8.05779C8.84915 8.03144 8.84634 8.00517 8.84253 7.97904C8.95506 7.91575 9.08158 7.88408 9.20956 7.88717C9.52175 7.88717 9.76644 8.06654 9.77487 8.28529C9.78092 8.34717 9.77258 8.40965 9.75056 8.4675C9.72854 8.52534 9.69348 8.57688 9.64831 8.61779L9.6905 8.69654Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.68625 8.69654C9.73762 8.66155 9.78015 8.61428 9.81025 8.5587C9.84035 8.50313 9.85714 8.44087 9.85921 8.37716C9.85921 8.23716 9.77062 8.11029 9.63562 8.02716C9.68016 8.0618 9.7163 8.10672 9.7412 8.15835C9.7661 8.20999 9.77906 8.26693 9.77906 8.32466C9.77823 8.38072 9.76574 8.43593 9.74244 8.48652C9.71914 8.53711 9.68558 8.58189 9.64406 8.61779L9.68625 8.69654Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.68625 8.69654C9.73762 8.66155 9.78015 8.61428 9.81025 8.5587C9.84035 8.50313 9.85714 8.44087 9.85921 8.37716C9.85921 8.23716 9.77062 8.11029 9.63562 8.02716C9.68016 8.0618 9.7163 8.10672 9.7412 8.15835C9.7661 8.20999 9.77906 8.26693 9.77906 8.32466C9.77823 8.38072 9.76574 8.43593 9.74244 8.48652C9.71914 8.53711 9.68558 8.58189 9.64406 8.61779L9.68625 8.69654Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.6312 8.84089C10.6918 8.76966 10.7248 8.67773 10.724 8.58276C10.7237 8.52508 10.7107 8.46823 10.6861 8.41651C10.6017 8.23276 10.3317 8.10151 10.0111 8.10151C9.92603 8.10112 9.8412 8.10992 9.75793 8.12776L9.80012 8.18901C9.86971 8.17598 9.94036 8.17012 10.0111 8.17151C10.3064 8.17151 10.5511 8.28964 10.6186 8.44714C10.6397 8.49089 10.6481 8.53464 10.6481 8.58276C10.6482 8.62943 10.6384 8.67555 10.6195 8.71788C10.6005 8.76021 10.5728 8.79772 10.5384 8.82776L10.6439 9.00714L10.6987 8.96339L10.627 8.84089"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.6312 8.84089C10.6918 8.76966 10.7248 8.67773 10.724 8.58276C10.7237 8.52508 10.7107 8.46823 10.6861 8.41651C10.6017 8.23276 10.3317 8.10151 10.0111 8.10151C9.92603 8.10112 9.8412 8.10992 9.75793 8.12776L9.80012 8.18901C9.86971 8.17598 9.94036 8.17012 10.0111 8.17151C10.3064 8.17151 10.5511 8.28964 10.6186 8.44714C10.6397 8.49089 10.6481 8.53464 10.6481 8.58276C10.6482 8.62943 10.6384 8.67555 10.6195 8.71788C10.6005 8.76021 10.5728 8.79772 10.5384 8.82776L10.6439 9.00714L10.6987 8.96339L10.627 8.84089H10.6312Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.5173 8.23712C10.5884 8.27972 10.6468 8.34178 10.6861 8.4165C10.7107 8.46821 10.7237 8.52506 10.7241 8.58275C10.7237 8.67829 10.6891 8.7703 10.627 8.84087L10.6945 8.95025C10.7571 8.86965 10.7913 8.76935 10.7916 8.66587C10.7916 8.49087 10.6819 8.33775 10.5173 8.23712Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.5173 8.23712C10.5884 8.27972 10.6468 8.34178 10.6861 8.4165C10.7107 8.46821 10.7237 8.52506 10.7241 8.58275C10.7237 8.67829 10.6891 8.7703 10.627 8.84087L10.6945 8.95025C10.7571 8.86965 10.7913 8.76935 10.7916 8.66587C10.7916 8.49087 10.6819 8.33775 10.5173 8.23712Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.61475 8.59151C8.61475 8.54776 8.6485 8.51276 8.69068 8.51276C8.73287 8.51276 8.77084 8.54776 8.77084 8.59151C8.77084 8.63526 8.73287 8.66588 8.69068 8.66588C8.67125 8.66591 8.65255 8.65822 8.63843 8.64438C8.6243 8.63055 8.61583 8.61162 8.61475 8.59151Z"
                              fill="white"
                            />
                            <path
                              d="M8.61475 8.59151C8.61475 8.54776 8.6485 8.51276 8.69068 8.51276C8.73287 8.51276 8.77084 8.54776 8.77084 8.59151C8.77084 8.63526 8.73287 8.66588 8.69068 8.66588C8.67125 8.66591 8.65255 8.65822 8.63843 8.64438C8.6243 8.63055 8.61583 8.61162 8.61475 8.59151Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.61475 8.44275C8.61475 8.399 8.6485 8.364 8.69068 8.364C8.73287 8.364 8.77084 8.399 8.77084 8.44275C8.77084 8.4865 8.73287 8.51713 8.69068 8.51713C8.67125 8.51716 8.65255 8.50947 8.63843 8.49563C8.6243 8.4818 8.61583 8.46287 8.61475 8.44275ZM8.63162 8.28088C8.63162 8.25025 8.65693 8.224 8.69068 8.224C8.72443 8.224 8.75396 8.25025 8.75396 8.28088C8.75396 8.31588 8.72443 8.34213 8.69068 8.34213C8.65693 8.34213 8.63162 8.31588 8.63162 8.28088ZM8.6485 8.1365C8.6485 8.11463 8.66537 8.09275 8.69068 8.09275C8.716 8.09275 8.73287 8.11463 8.73287 8.1365C8.73287 8.15838 8.716 8.18025 8.69068 8.18025C8.67949 8.18025 8.66876 8.17564 8.66085 8.16744C8.65294 8.15924 8.6485 8.14811 8.6485 8.1365ZM8.65693 8.014C8.65693 7.99213 8.67381 7.979 8.69068 7.979C8.71178 7.979 8.72865 7.99213 8.72865 8.014C8.72865 8.0315 8.71178 8.049 8.69068 8.049C8.68173 8.049 8.67315 8.04532 8.66682 8.03875C8.66049 8.03219 8.65693 8.02329 8.65693 8.014Z"
                              fill="white"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.69905 9.04651L8.74967 9.05526C8.74024 9.08585 8.738 9.11834 8.74314 9.15002C8.74829 9.18169 8.76067 9.21163 8.77926 9.23733C8.79784 9.26302 8.82209 9.28373 8.84997 9.29773C8.87785 9.31172 8.90855 9.31859 8.93952 9.31776C8.97963 9.31792 9.01884 9.30546 9.05198 9.28203C9.08512 9.2586 9.11063 9.22529 9.12514 9.18651C9.12936 9.18651 9.14624 9.11213 9.15467 9.11213C9.16311 9.11213 9.15889 9.19088 9.16311 9.18651C9.17577 9.28713 9.26436 9.35276 9.36139 9.35276C9.38871 9.35348 9.41587 9.34821 9.4411 9.3373C9.46632 9.32638 9.48903 9.31006 9.50775 9.28941C9.52647 9.26876 9.54077 9.24424 9.54972 9.21746C9.55867 9.19068 9.56206 9.16224 9.55967 9.13401L9.62295 9.06838L9.65249 9.15588C9.64036 9.18173 9.63457 9.21028 9.63561 9.23901C9.6378 9.2893 9.6589 9.33669 9.69439 9.37104C9.72988 9.40539 9.77693 9.42395 9.82545 9.42276C9.89295 9.42276 9.95202 9.39213 9.98577 9.33963L10.0237 9.28713V9.35276C10.0237 9.41838 10.049 9.47526 10.1081 9.48401C10.1081 9.48401 10.1798 9.48838 10.2769 9.41401C10.3655 9.33963 10.4161 9.27838 10.4161 9.27838L10.4245 9.35276C10.4245 9.35276 10.3486 9.47526 10.2642 9.52776C10.222 9.55401 10.1503 9.58463 10.0955 9.57151C10.0364 9.56276 9.9942 9.51463 9.96889 9.45776C9.92696 9.48469 9.87897 9.49977 9.82967 9.50151C9.77623 9.50349 9.7234 9.48922 9.67767 9.46046C9.63195 9.4317 9.59533 9.3897 9.57233 9.33963C9.54376 9.37069 9.50922 9.39517 9.47094 9.41149C9.43266 9.42781 9.39151 9.4356 9.35014 9.43436C9.30877 9.43313 9.26811 9.42289 9.2308 9.40431C9.1935 9.38572 9.16037 9.35922 9.13358 9.32651C9.08027 9.37634 9.01128 9.40434 8.93952 9.40526C8.89216 9.40531 8.84551 9.39339 8.80361 9.37052C8.7617 9.34765 8.72581 9.31452 8.69905 9.27401C8.67228 9.31452 8.63639 9.34765 8.59449 9.37052C8.55258 9.39339 8.50593 9.40531 8.45858 9.40526C8.38536 9.40541 8.31469 9.37734 8.2603 9.32651C8.2335 9.35922 8.20038 9.38572 8.16307 9.40431C8.12577 9.42289 8.08511 9.43313 8.04374 9.43436C8.00237 9.4356 7.96121 9.42781 7.92294 9.41149C7.88466 9.39517 7.85012 9.37069 7.82155 9.33963C7.79884 9.389 7.76288 9.43053 7.71798 9.45925C7.67309 9.48796 7.62116 9.50263 7.56842 9.50151C7.51769 9.50054 7.46814 9.48543 7.42499 9.45776C7.39967 9.51463 7.3617 9.56276 7.29842 9.57588C7.2478 9.58463 7.17608 9.55401 7.12967 9.52776C7.0453 9.47526 6.96936 9.35276 6.96936 9.35276L6.9778 9.27838C6.9778 9.27838 7.02842 9.33963 7.12124 9.41401C7.21405 9.49276 7.28577 9.48401 7.28577 9.48401C7.34483 9.47526 7.37014 9.41838 7.37014 9.35276V9.28713L7.41233 9.33963C7.42976 9.36604 7.45302 9.38775 7.48017 9.40297C7.50732 9.41819 7.53757 9.42647 7.56842 9.42713C7.67389 9.42713 7.75827 9.33963 7.75827 9.23901C7.76003 9.20882 7.75421 9.17867 7.74139 9.15151L7.77514 9.06838L7.83842 9.13401C7.83785 9.14275 7.83785 9.15152 7.83842 9.16026C7.83842 9.26526 7.9228 9.35276 8.03249 9.35276C8.13374 9.35276 8.21811 9.28713 8.23077 9.18651C8.23077 9.18651 8.23077 9.11651 8.2392 9.11213C8.24764 9.11213 8.26452 9.18651 8.26874 9.18213C8.2828 9.22244 8.30866 9.25718 8.3427 9.2815C8.37674 9.30581 8.41725 9.31849 8.45858 9.31776C8.48954 9.31859 8.52025 9.31172 8.54813 9.29773C8.57601 9.28373 8.60025 9.26302 8.61884 9.23733C8.63742 9.21163 8.6498 9.18169 8.65495 9.15002C8.6601 9.11834 8.65786 9.08585 8.64842 9.05526L8.69905 9.04651Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.066 9.30468C10.0786 9.26968 10.066 9.23468 10.0406 9.22593C10.0196 9.21718 9.99002 9.23905 9.97737 9.27405C9.96471 9.30905 9.97737 9.34405 10.0027 9.3528C10.0238 9.36155 10.0533 9.33968 10.066 9.30468ZM9.20112 9.12968C9.20112 9.09468 9.18846 9.05968 9.15893 9.05968C9.13784 9.0553 9.11674 9.08155 9.10831 9.12093C9.10409 9.15593 9.12096 9.18655 9.14627 9.19093C9.17159 9.19093 9.1969 9.16468 9.20112 9.12968ZM8.19284 9.12968C8.19284 9.09468 8.20971 9.05968 8.23502 9.05968C8.26034 9.0553 8.28143 9.08155 8.28565 9.12093C8.28987 9.15593 8.27299 9.18655 8.24768 9.19093C8.22237 9.19093 8.20127 9.16468 8.19706 9.12968M7.32799 9.30468C7.31956 9.26968 7.32799 9.23468 7.35331 9.22593C7.37862 9.21718 7.40393 9.23905 7.41659 9.27405C7.42924 9.30905 7.41659 9.34405 7.39549 9.3528C7.37018 9.36155 7.34065 9.33968 7.32799 9.30468Z"
                              fill="white"
                            />
                            <path
                              d="M8.19284 9.12968C8.19284 9.09468 8.20971 9.05968 8.23502 9.05968C8.26034 9.0553 8.28143 9.08155 8.28565 9.12093C8.28987 9.15593 8.27299 9.18655 8.24768 9.19093C8.22237 9.19093 8.20127 9.16468 8.19706 9.12968M10.066 9.30468C10.0786 9.26968 10.066 9.23468 10.0406 9.22593C10.0196 9.21718 9.99002 9.23905 9.97737 9.27405C9.96471 9.30905 9.97737 9.34405 10.0027 9.3528C10.0238 9.36155 10.0533 9.33968 10.066 9.30468ZM9.20112 9.12968C9.20112 9.09468 9.18846 9.05968 9.15893 9.05968C9.13784 9.0553 9.11674 9.08155 9.10831 9.12093C9.10409 9.15593 9.12096 9.18655 9.14627 9.19093C9.17159 9.19093 9.1969 9.16468 9.20112 9.12968ZM7.32799 9.30468C7.31956 9.26968 7.32799 9.23468 7.35331 9.22593C7.37862 9.21718 7.40393 9.23905 7.41659 9.27405C7.42924 9.30905 7.41659 9.34405 7.39549 9.3528C7.37018 9.36155 7.34065 9.33968 7.32799 9.30468Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.7077 8.70526C7.75263 8.73427 7.78567 8.77944 7.80051 8.83214C7.80051 8.83214 7.80051 8.81901 7.82582 8.80589C7.85113 8.79276 7.86801 8.79276 7.86801 8.79276L7.86379 8.84964L7.85113 8.94589C7.84399 8.97035 7.83407 8.99384 7.8216 9.01589C7.81284 9.00851 7.80267 9.00314 7.79176 9.00013C7.78086 8.99711 7.76946 8.99652 7.75832 8.99839C7.74765 9.00079 7.7376 9.00555 7.72886 9.01234C7.72013 9.01914 7.71291 9.02781 7.7077 9.03776C7.7077 9.03776 7.67816 9.01151 7.65707 8.98089L7.61066 8.89339L7.58113 8.84526C7.58113 8.84526 7.60223 8.83651 7.62754 8.84526C7.65285 8.84526 7.66129 8.85401 7.66129 8.85401C7.65696 8.80071 7.67201 8.74765 7.70348 8.70526M7.72035 9.13401C7.70747 9.12275 7.69856 9.10735 7.69504 9.09026C7.69504 9.06839 7.69504 9.05089 7.7077 9.03776C7.7077 9.03776 7.66973 9.01589 7.63176 9.00714C7.60223 8.99839 7.54738 8.99839 7.53473 8.99839H7.49254L7.50098 9.02026C7.50941 9.04214 7.52207 9.05089 7.52207 9.05089C7.47086 9.06271 7.42573 9.09391 7.39551 9.13839C7.4382 9.17059 7.49051 9.18609 7.54316 9.18214L7.53473 9.21714V9.24339L7.57691 9.22589C7.58957 9.22151 7.6402 9.20401 7.66129 9.18214C7.69504 9.16464 7.72457 9.13401 7.72457 9.13401M7.83848 9.11214C7.84678 9.09767 7.84977 9.08058 7.84691 9.06401C7.84371 9.04679 7.83475 9.03129 7.8216 9.02026L7.88066 8.96339C7.90731 8.94709 7.93561 8.93389 7.96504 8.92401L8.01144 8.90651V8.93276C8.00945 8.94462 8.00663 8.95632 8.00301 8.96776C8.05437 8.96369 8.10539 8.97926 8.14645 9.01151C8.11725 9.0551 8.07377 9.0862 8.0241 9.09901C8.03208 9.11757 8.04198 9.13517 8.05363 9.15151H8.01144C7.99457 9.15151 7.94395 9.15151 7.91441 9.14276C7.88828 9.13488 7.86287 9.12463 7.83848 9.11214Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M7.7077 8.70526C7.75263 8.73427 7.78567 8.77944 7.80051 8.83214C7.80051 8.83214 7.80051 8.81901 7.82582 8.80589C7.85113 8.79276 7.86801 8.79276 7.86801 8.79276L7.86379 8.84964L7.85113 8.94589C7.84399 8.97035 7.83407 8.99384 7.8216 9.01589C7.81284 9.00851 7.80267 9.00314 7.79176 9.00013C7.78086 8.99711 7.76946 8.99652 7.75832 8.99839C7.74765 9.00079 7.7376 9.00555 7.72886 9.01234C7.72013 9.01914 7.71291 9.02781 7.7077 9.03776M7.7077 9.03776C7.7077 9.03776 7.67816 9.01151 7.65707 8.98089L7.61066 8.89339L7.58113 8.84526C7.58113 8.84526 7.60223 8.83651 7.62754 8.84526C7.65285 8.84526 7.66129 8.85401 7.66129 8.85401C7.65696 8.80071 7.67201 8.74765 7.70348 8.70526M7.7077 9.03776C7.69504 9.05089 7.69504 9.06839 7.69504 9.09026C7.69856 9.10735 7.70747 9.12275 7.72035 9.13401M7.7077 9.03776C7.7077 9.03776 7.66973 9.01589 7.63176 9.00714C7.60223 8.99839 7.54738 8.99839 7.53473 8.99839H7.49254L7.50098 9.02026C7.50941 9.04214 7.52207 9.05089 7.52207 9.05089C7.47086 9.06271 7.42573 9.09391 7.39551 9.13839C7.4382 9.17059 7.49051 9.18609 7.54316 9.18214L7.53473 9.21714V9.24339L7.57691 9.22589C7.58957 9.22151 7.6402 9.20401 7.66129 9.18214C7.69504 9.16464 7.72457 9.13401 7.72457 9.13401M7.83848 9.11214C7.84678 9.09767 7.84977 9.08058 7.84691 9.06401C7.84371 9.04679 7.83475 9.03129 7.8216 9.02026L7.88066 8.96339C7.90731 8.94709 7.93561 8.93389 7.96504 8.92401L8.01144 8.90651V8.93276C8.00945 8.94462 8.00663 8.95632 8.00301 8.96776C8.05437 8.96369 8.10539 8.97926 8.14645 9.01151C8.11725 9.0551 8.07377 9.0862 8.0241 9.09901C8.03208 9.11757 8.04198 9.13517 8.05363 9.15151H8.01144C7.99457 9.15151 7.94395 9.15151 7.91441 9.14276C7.88828 9.13488 7.86287 9.12463 7.83848 9.11214Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.68652 9.07279C7.68652 9.02904 7.72871 8.98529 7.7709 8.98529C7.81309 8.98529 7.86371 9.02904 7.86371 9.07279C7.86371 9.12092 7.82152 9.16029 7.77512 9.16029C7.76369 9.16088 7.75226 9.15906 7.74153 9.15493C7.7308 9.1508 7.721 9.14445 7.71271 9.13626C7.70442 9.12808 7.69783 9.11823 7.69333 9.10732C7.68882 9.09641 7.68651 9.08466 7.68652 9.07279Z"
                              fill="#AD1519"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.69481 8.56525C8.74023 8.60681 8.76886 8.66462 8.77496 8.72712C8.77496 8.72712 8.7834 8.714 8.81293 8.70525C8.84246 8.69212 8.86356 8.6965 8.86356 8.6965L8.84246 8.75775L8.80871 8.86275C8.79759 8.88921 8.78342 8.91418 8.76652 8.93712C8.75759 8.92671 8.74649 8.91854 8.73407 8.91324C8.72164 8.90793 8.70822 8.90563 8.69481 8.9065C8.66949 8.9065 8.64418 8.91962 8.6273 8.93712C8.6273 8.93712 8.60199 8.9065 8.58512 8.86275L8.55137 8.75775L8.53027 8.6965L8.5809 8.70525C8.61043 8.714 8.61887 8.72712 8.61887 8.72712C8.61887 8.66587 8.65262 8.60462 8.69481 8.56525Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.63156 9.04655C8.61909 9.03198 8.61166 9.0135 8.61046 8.99405C8.61046 8.97218 8.61468 8.9503 8.62734 8.93718C8.62734 8.93718 8.59359 8.90655 8.5514 8.89343C8.52187 8.87593 8.46703 8.8628 8.44593 8.8628L8.39531 8.85405L8.40375 8.8803L8.42062 8.91968C8.36173 8.92447 8.3064 8.95084 8.26453 8.99405C8.30671 9.03343 8.36156 9.06405 8.42062 9.06405L8.40375 9.1078L8.39531 9.13405L8.44593 9.1253C8.46281 9.12093 8.52187 9.1078 8.5514 9.09468C8.59359 9.07718 8.63156 9.05093 8.63156 9.05093M8.75812 9.05093C8.77265 9.03608 8.78117 9.01605 8.78195 8.99492C8.78274 8.97379 8.77572 8.95314 8.76234 8.93718C8.76234 8.93718 8.80031 8.90655 8.83828 8.89343C8.87159 8.87733 8.90722 8.86699 8.94375 8.8628L8.99437 8.84968L8.99015 8.8803L8.97328 8.91968C9.03234 8.91968 9.08718 8.95468 9.12515 8.99405C9.08376 9.03474 9.03014 9.05945 8.97328 9.06405C8.97754 9.08819 8.98462 9.1117 8.99437 9.13405L8.94375 9.1253L8.83828 9.09468C8.79609 9.07718 8.76234 9.05093 8.76234 9.05093M9.69046 8.70093C9.64498 8.73131 9.61192 8.77806 9.59765 8.83218L9.56812 8.80593C9.54281 8.7928 9.52593 8.7928 9.52593 8.7928L9.53437 8.84968C9.53437 8.8628 9.53437 8.90655 9.54703 8.94593C9.55546 8.98968 9.57234 9.01593 9.57234 9.01593C9.58123 9.00878 9.59141 9.00356 9.60228 9.00055C9.61314 8.99755 9.62448 8.99682 9.63562 8.99843C9.66093 9.0028 9.67781 9.0203 9.69046 9.0378L9.73687 8.98093C9.76218 8.94593 9.77906 8.90655 9.78328 8.89343L9.81281 8.8453C9.81281 8.8453 9.79593 8.83655 9.77062 8.8453C9.74109 8.8453 9.72843 8.85405 9.72843 8.85405C9.73276 8.80075 9.71771 8.74769 9.68625 8.7053M9.67359 9.13405C9.68625 9.12093 9.69468 9.1078 9.6989 9.0903C9.70286 9.07233 9.69983 9.05347 9.69046 9.0378C9.69046 9.0378 9.72421 9.01593 9.76218 9.00718C9.79171 8.99843 9.84656 8.99843 9.85921 8.99843H9.90562L9.89296 9.0203C9.88799 9.03088 9.88235 9.04111 9.87609 9.05093C9.92576 9.06374 9.96924 9.09484 9.99843 9.13843C9.95574 9.17063 9.90343 9.18613 9.85078 9.18218L9.85921 9.21718V9.24343L9.81703 9.22593C9.80437 9.22155 9.75796 9.20405 9.73265 9.18218C9.6989 9.16468 9.67359 9.13405 9.67359 9.13405ZM9.55546 9.11218C9.5475 9.09758 9.54453 9.08062 9.54703 9.06405C9.54703 9.04218 9.55968 9.02905 9.57234 9.0203C9.57234 9.0203 9.54703 8.9853 9.51328 8.96343C9.48796 8.94593 9.44156 8.92843 9.4289 8.92405C9.41482 8.91827 9.40076 8.91243 9.38671 8.90655V8.9328C9.38671 8.95468 9.39515 8.9678 9.39515 8.9678C9.34246 8.96346 9.29002 8.979 9.2475 9.01155C9.27703 9.05093 9.31921 9.08593 9.37406 9.09905C9.37406 9.09905 9.3614 9.1078 9.35296 9.12968L9.34031 9.15155H9.3825C9.39937 9.15155 9.45421 9.15155 9.47953 9.1428C9.50565 9.1349 9.53106 9.12466 9.55546 9.11218Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.63156 9.04655C8.61909 9.03198 8.61166 9.0135 8.61046 8.99405C8.61046 8.97218 8.61468 8.9503 8.62734 8.93718C8.62734 8.93718 8.59359 8.90655 8.5514 8.89343C8.52187 8.87593 8.46703 8.8628 8.44593 8.8628L8.39531 8.85405L8.40375 8.8803L8.42062 8.91968C8.36173 8.92447 8.3064 8.95084 8.26453 8.99405C8.30671 9.03343 8.36156 9.06405 8.42062 9.06405L8.40375 9.1078L8.39531 9.13405L8.44593 9.1253C8.46281 9.12093 8.52187 9.1078 8.5514 9.09468C8.59359 9.07718 8.63156 9.05093 8.63156 9.05093M8.75812 9.05093C8.77265 9.03608 8.78117 9.01605 8.78195 8.99492C8.78274 8.97379 8.77572 8.95314 8.76234 8.93718C8.76234 8.93718 8.80031 8.90655 8.83828 8.89343C8.87159 8.87733 8.90722 8.86699 8.94375 8.8628L8.99437 8.84968L8.99015 8.8803L8.97328 8.91968C9.03234 8.91968 9.08718 8.95468 9.12515 8.99405C9.08376 9.03474 9.03014 9.05945 8.97328 9.06405C8.97754 9.08819 8.98462 9.1117 8.99437 9.13405L8.94375 9.1253L8.83828 9.09468C8.79609 9.07718 8.76234 9.05093 8.76234 9.05093M9.69046 8.70093C9.64498 8.73131 9.61192 8.77806 9.59765 8.83218L9.56812 8.80593C9.54281 8.7928 9.52593 8.7928 9.52593 8.7928L9.53437 8.84968C9.53437 8.8628 9.53437 8.90655 9.54703 8.94593C9.55546 8.98968 9.57234 9.01593 9.57234 9.01593C9.58123 9.00878 9.59141 9.00356 9.60228 9.00055C9.61314 8.99755 9.62448 8.99682 9.63562 8.99843C9.66093 9.0028 9.67781 9.0203 9.69046 9.0378M9.69046 9.0378L9.73687 8.98093C9.76218 8.94593 9.77906 8.90655 9.78328 8.89343L9.81281 8.8453C9.81281 8.8453 9.79593 8.83655 9.77062 8.8453C9.74109 8.8453 9.72843 8.85405 9.72843 8.85405C9.73276 8.80075 9.71771 8.74769 9.68625 8.7053M9.69046 9.0378C9.69983 9.05347 9.70286 9.07233 9.6989 9.0903C9.69468 9.1078 9.68625 9.12093 9.67359 9.13405C9.67359 9.13405 9.6989 9.16468 9.73265 9.18218C9.75796 9.20405 9.80437 9.22155 9.81703 9.22593L9.85921 9.24343V9.21718L9.85078 9.18218C9.90343 9.18613 9.95574 9.17063 9.99843 9.13843C9.96924 9.09484 9.92576 9.06374 9.87609 9.05093C9.88235 9.04111 9.88799 9.03088 9.89296 9.0203L9.90562 8.99843H9.85921C9.84656 8.99843 9.79171 8.99843 9.76218 9.00718C9.72421 9.01593 9.69046 9.0378 9.69046 9.0378ZM9.55546 9.11218C9.5475 9.09758 9.54453 9.08062 9.54703 9.06405C9.54703 9.04218 9.55968 9.02905 9.57234 9.0203C9.57234 9.0203 9.54703 8.9853 9.51328 8.96343C9.48796 8.94593 9.44156 8.92843 9.4289 8.92405C9.41482 8.91827 9.40076 8.91243 9.38671 8.90655V8.9328C9.38671 8.95468 9.39515 8.9678 9.39515 8.9678C9.34246 8.96346 9.29002 8.979 9.2475 9.01155C9.27703 9.05093 9.31921 9.08593 9.37406 9.09905C9.37406 9.09905 9.3614 9.1078 9.35296 9.12968L9.34031 9.15155H9.3825C9.39937 9.15155 9.45421 9.15155 9.47953 9.1428C9.50565 9.1349 9.53106 9.12466 9.55546 9.11218Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.53442 9.07279C9.53442 9.02904 9.57661 8.98529 9.6188 8.98529C9.66099 8.98529 9.70739 9.02904 9.70739 9.07279C9.70739 9.096 9.6985 9.11825 9.68268 9.13466C9.66686 9.15107 9.6454 9.16029 9.62302 9.16029C9.61159 9.16088 9.60016 9.15906 9.58943 9.15493C9.5787 9.1508 9.5689 9.14445 9.56061 9.13626C9.55232 9.12808 9.54573 9.11823 9.54122 9.10732C9.53672 9.09641 9.53441 9.08466 9.53442 9.07279ZM10.5132 9.26529C10.4963 9.24342 10.4541 9.24779 10.4204 9.27404C10.3866 9.30467 10.3782 9.34404 10.3993 9.37029C10.4204 9.39217 10.4625 9.38779 10.4963 9.35717C10.5258 9.33092 10.5385 9.28717 10.5174 9.26967"
                              fill="#AD1519"
                            />
                            <path
                              d="M10.5132 9.26529C10.4963 9.24342 10.4541 9.24779 10.4204 9.27404C10.3866 9.30467 10.3782 9.34404 10.3993 9.37029C10.4204 9.39217 10.4625 9.38779 10.4963 9.35717C10.5258 9.33092 10.5385 9.28717 10.5174 9.26967M9.53442 9.07279C9.53442 9.02904 9.57661 8.98529 9.6188 8.98529C9.66099 8.98529 9.70739 9.02904 9.70739 9.07279C9.70739 9.096 9.6985 9.11825 9.68268 9.13466C9.66686 9.15107 9.6454 9.16029 9.62302 9.16029C9.61159 9.16088 9.60016 9.15906 9.58943 9.15493C9.5787 9.1508 9.5689 9.14445 9.56061 9.13626C9.55232 9.12808 9.54573 9.11823 9.54122 9.10732C9.53672 9.09641 9.53441 9.08466 9.53442 9.07279Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.3908 9.31775L10.4203 9.274C10.4499 9.24775 10.4963 9.24337 10.5174 9.26525L10.5216 9.274C10.5216 9.274 10.5638 9.1865 10.6186 9.16025C10.6735 9.12962 10.762 9.13837 10.762 9.13837C10.7621 9.12191 10.7589 9.10562 10.7527 9.09046C10.7465 9.07531 10.7374 9.0616 10.726 9.05017C10.7145 9.03873 10.701 9.0298 10.6862 9.02391C10.6714 9.01802 10.6556 9.01529 10.6397 9.01587C10.6207 9.01482 10.6018 9.01821 10.5843 9.02578C10.5667 9.03336 10.5511 9.04492 10.5385 9.05962L10.53 9.01587C10.53 9.01587 10.4752 9.029 10.4499 9.09462C10.4245 9.16025 10.4499 9.25212 10.4499 9.25212C10.4499 9.25212 10.4372 9.21275 10.4203 9.1865C10.3909 9.157 10.3566 9.13328 10.3191 9.1165L10.2642 9.08587L10.26 9.10775C10.2591 9.1194 10.2591 9.1311 10.26 9.14275C10.207 9.137 10.1535 9.1445 10.1039 9.16462C10.1266 9.20898 10.1641 9.24321 10.2094 9.26087L10.1756 9.2915C10.1695 9.29831 10.1638 9.30562 10.1588 9.31337L10.2136 9.32212L10.3191 9.33087C10.3431 9.32942 10.3671 9.3265 10.3908 9.32212M7.00314 9.32212C7.00314 9.30462 6.99048 9.2915 6.97361 9.27837C6.94408 9.24775 6.90189 9.24337 6.8808 9.26525L6.87236 9.27837C6.87236 9.27837 6.83017 9.19087 6.77533 9.16025C6.7247 9.12962 6.63611 9.13837 6.63611 9.13837C6.63611 9.12229 6.63916 9.10636 6.6451 9.09149C6.65104 9.07663 6.65974 9.06313 6.67071 9.05175C6.68168 9.04038 6.6947 9.03135 6.70903 9.0252C6.72336 9.01904 6.73872 9.01587 6.75423 9.01587C6.79642 9.01587 6.83439 9.03337 6.85548 9.05962L6.86392 9.01587C6.86392 9.01587 6.91876 9.029 6.9483 9.09462C6.96939 9.16025 6.94408 9.25212 6.94408 9.25212C6.94408 9.25212 6.95673 9.21275 6.97783 9.1865C7.00721 9.157 7.04152 9.13328 7.07908 9.1165L7.13392 9.08587V9.14275C7.18689 9.137 7.24042 9.1445 7.29001 9.16462C7.26736 9.20898 7.22985 9.24321 7.18455 9.26087L7.2183 9.2915L7.23517 9.31337L7.18455 9.32212L7.07486 9.33087C7.05081 9.3294 7.02686 9.32648 7.00314 9.32212Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.3908 9.31775L10.4203 9.274C10.4499 9.24775 10.4963 9.24337 10.5174 9.26525L10.5216 9.274C10.5216 9.274 10.5638 9.1865 10.6186 9.16025C10.6735 9.12962 10.762 9.13837 10.762 9.13837C10.7621 9.12191 10.7589 9.10562 10.7527 9.09046C10.7465 9.07531 10.7374 9.0616 10.726 9.05017C10.7145 9.03873 10.701 9.0298 10.6862 9.02391C10.6714 9.01802 10.6556 9.01529 10.6397 9.01587C10.6207 9.01482 10.6018 9.01821 10.5843 9.02578C10.5667 9.03336 10.5511 9.04492 10.5385 9.05962L10.53 9.01587C10.53 9.01587 10.4752 9.029 10.4499 9.09462C10.4245 9.16025 10.4499 9.25212 10.4499 9.25212C10.4499 9.25212 10.4372 9.21275 10.4203 9.1865C10.3909 9.157 10.3566 9.13328 10.3191 9.1165L10.2642 9.08587L10.26 9.10775C10.2591 9.1194 10.2591 9.1311 10.26 9.14275C10.207 9.137 10.1535 9.1445 10.1039 9.16462C10.1266 9.20898 10.1641 9.24321 10.2094 9.26087L10.1756 9.2915C10.1695 9.29831 10.1638 9.30562 10.1588 9.31337L10.2136 9.32212L10.3191 9.33087C10.3431 9.32942 10.3671 9.3265 10.3908 9.32212M7.00314 9.32212C7.00314 9.30462 6.99048 9.2915 6.97361 9.27837C6.94408 9.24775 6.90189 9.24337 6.8808 9.26525L6.87236 9.27837C6.87236 9.27837 6.83017 9.19087 6.77533 9.16025C6.7247 9.12962 6.63611 9.13837 6.63611 9.13837C6.63611 9.12229 6.63916 9.10636 6.6451 9.09149C6.65104 9.07663 6.65974 9.06313 6.67071 9.05175C6.68168 9.04038 6.6947 9.03135 6.70903 9.0252C6.72336 9.01904 6.73872 9.01587 6.75423 9.01587C6.79642 9.01587 6.83439 9.03337 6.85548 9.05962L6.86392 9.01587C6.86392 9.01587 6.91876 9.029 6.9483 9.09462C6.96939 9.16025 6.94408 9.25212 6.94408 9.25212C6.94408 9.25212 6.95673 9.21275 6.97783 9.1865C7.00721 9.157 7.04152 9.13328 7.07908 9.1165L7.13392 9.08587V9.14275C7.18689 9.137 7.24042 9.1445 7.29001 9.16462C7.26736 9.20898 7.22985 9.24321 7.18455 9.26087L7.2183 9.2915L7.23517 9.31337L7.18455 9.32212L7.07486 9.33087C7.05081 9.3294 7.02686 9.32648 7.00314 9.32212Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.87654 9.26524C6.90186 9.24337 6.94404 9.24774 6.97779 9.27837C7.00732 9.30462 7.01998 9.34399 6.99467 9.36587C6.97358 9.39212 6.93139 9.38774 6.90186 9.35712C6.86811 9.33087 6.85967 9.28712 6.88076 9.26962M8.61045 8.99399C8.61045 8.94587 8.64842 8.90649 8.69482 8.90649C8.74123 8.90649 8.78342 8.94587 8.78342 8.99399C8.78342 9.03774 8.74123 9.08149 8.69904 9.08149C8.68761 9.08209 8.67619 9.08026 8.66546 9.07613C8.65473 9.072 8.64492 9.06565 8.63663 9.05747C8.62835 9.04928 8.62175 9.03943 8.61725 9.02852C8.61275 9.01761 8.61044 9.00586 8.61045 8.99399Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M6.87654 9.26524C6.90186 9.24337 6.94404 9.24774 6.97779 9.27837C7.00732 9.30462 7.01998 9.34399 6.99467 9.36587C6.97358 9.39212 6.93139 9.38774 6.90186 9.35712C6.86811 9.33087 6.85967 9.28712 6.88076 9.26962M8.61045 8.99399C8.61045 8.94587 8.64842 8.90649 8.69482 8.90649C8.74123 8.90649 8.78342 8.94587 8.78342 8.99399C8.78342 9.03774 8.74123 9.08149 8.69904 9.08149C8.68761 9.08209 8.67619 9.08026 8.66546 9.07613C8.65473 9.072 8.64492 9.06565 8.63664 9.05747C8.62835 9.04928 8.62175 9.03943 8.61725 9.02852C8.61275 9.01761 8.61044 9.00586 8.61045 8.99399Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.51343 7.68153C8.51343 7.58528 8.59358 7.50653 8.69483 7.50653C8.79608 7.50653 8.87202 7.58528 8.87202 7.68153C8.87202 7.77778 8.79187 7.85653 8.69062 7.85653C8.6679 7.85711 8.64529 7.85305 8.62409 7.84457C8.60289 7.83608 8.58351 7.82335 8.56706 7.8071C8.5506 7.79085 8.5374 7.7714 8.52819 7.74985C8.51899 7.7283 8.51398 7.70509 8.51343 7.68153Z"
                              fill="#005BBF"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M8.64843 7.18713V7.28338H8.54718V7.37963H8.64421V7.65526H8.52187L8.51343 7.68151C8.51343 7.70776 8.51765 7.72963 8.52608 7.75151H8.85937C8.8678 7.72963 8.87202 7.70776 8.87202 7.68151L8.86358 7.65526H8.74546V7.37963H8.84249V7.28338H8.74546V7.18713H8.64421H8.64843Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M8.71173 15.119C8.19288 15.1174 7.68103 14.9948 7.21407 14.7603C7.0524 14.679 6.91602 14.5522 6.82053 14.3944C6.72504 14.2366 6.67429 14.0541 6.67407 13.8678V12.4678H10.7409V13.8678C10.7407 14.0541 10.69 14.2366 10.5945 14.3944C10.499 14.5522 10.3626 14.679 10.2009 14.7603C9.73704 14.995 9.22789 15.1176 8.71173 15.119Z"
                              fill="#CCCCCC"
                            />
                            <path
                              d="M8.71173 15.119C8.19288 15.1174 7.68103 14.9948 7.21407 14.7603C7.0524 14.679 6.91602 14.5522 6.82053 14.3944C6.72504 14.2366 6.67429 14.0541 6.67407 13.8678V12.4678H10.7409V13.8678C10.7407 14.0541 10.69 14.2366 10.5945 14.3944C10.499 14.5522 10.3626 14.679 10.2009 14.7603C9.73704 14.995 9.22789 15.1176 8.71173 15.119Z"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M8.70325 12.4678H10.7409V10.1271H8.70325V12.4678Z"
                              fill="#CCCCCC"
                            />
                            <path
                              d="M8.70325 12.4678H10.7409V10.1271H8.70325V12.4678Z"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M8.70324 13.8678C8.70324 14.419 8.25183 14.8696 7.69074 14.8696C7.12964 14.8696 6.6698 14.419 6.6698 13.8634V12.4634H8.70324V13.8634"
                              fill="#AD1519"
                            />
                            <path
                              d="M7.11279 14.6947C7.17607 14.7297 7.26467 14.7822 7.35748 14.8084L7.35326 12.4153H7.11279V14.6903V14.6947Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M6.66565 13.8503C6.66979 14.0898 6.75151 14.321 6.89768 14.5065V12.4284H6.66987V13.8503H6.66565Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.0625"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.56848 14.8609C7.64701 14.8695 7.7262 14.8695 7.80473 14.8609V12.4153H7.56848V14.8653V14.8609Z"
                              fill="#C7B500"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M8.01557 14.8084C8.10245 14.7864 8.18515 14.7494 8.26026 14.699V12.4153H8.01557L8.01135 14.8084H8.01557Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M6.66987 12.4678H8.70331V10.1271H6.66565V12.4678H6.66987Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M6.66987 12.4678H8.70331V10.1271H6.66565V12.4678H6.66987Z"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M8.47974 14.4803C8.58099 14.3928 8.6738 14.1828 8.70755 13.9465L8.71177 12.4153H8.47974L8.48396 14.4847L8.47974 14.4803Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M8.70324 13.8678C8.70324 14.419 8.25183 14.8696 7.69074 14.8696C7.12964 14.8696 6.6698 14.419 6.6698 13.8634V12.4634H8.70324V13.8634"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M10.7409 12.4678V13.8678C10.7409 14.419 10.2853 14.8696 9.72418 14.8696C9.16309 14.8696 8.70325 14.419 8.70325 13.8634V12.4634H10.7409"
                              fill="#AD1519"
                            />
                            <path
                              d="M10.7409 12.4678V13.8678C10.7409 14.419 10.2853 14.8696 9.72418 14.8696C9.16309 14.8696 8.70325 14.419 8.70325 13.8634V12.4634H10.7409"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M9.07455 13.5221L9.07877 13.544C9.07877 13.5703 9.05767 13.5878 9.03236 13.5878C9.02648 13.5884 9.02053 13.5877 9.01492 13.5858C9.0093 13.5839 9.00414 13.5807 8.99976 13.5766C8.99539 13.5725 8.99189 13.5674 8.98952 13.5618C8.98714 13.5562 8.98592 13.5501 8.98595 13.544V13.5221H8.92267C8.91747 13.5493 8.92242 13.5776 8.93651 13.6011C8.95061 13.6247 8.9728 13.6418 8.99861 13.649V13.8196H9.06611V13.649C9.0825 13.6439 9.09752 13.635 9.10997 13.6228C9.12242 13.6107 9.13196 13.5957 9.13783 13.579H9.32345V13.5265H9.07033M9.99002 13.5265V13.579H9.82127C9.8182 13.5883 9.81395 13.5971 9.80861 13.6053L10.0027 13.8328L9.95205 13.8765L9.75798 13.6446L9.74955 13.649V14.0296H9.68205V13.649H9.67361L9.47111 13.8765L9.42048 13.8328L9.61877 13.6009C9.61536 13.5954 9.61253 13.5895 9.61033 13.5834H9.44158V13.5178H9.99002V13.5265ZM10.0997 13.5265V13.579H10.2853C10.298 13.614 10.3233 13.6403 10.357 13.649V13.8196H10.4245V13.649C10.4465 13.6424 10.4657 13.6286 10.4794 13.6096C10.4931 13.5907 10.5005 13.5677 10.5005 13.544C10.5014 13.5367 10.5014 13.5294 10.5005 13.5221H10.433L10.4372 13.544C10.4372 13.5703 10.4161 13.5878 10.395 13.5878C10.3655 13.5878 10.3444 13.5703 10.3444 13.544C10.3439 13.5365 10.3454 13.5289 10.3486 13.5221H10.0997M9.81705 14.489C9.87061 14.4811 9.92304 14.4664 9.97314 14.4453L10.0069 14.5065C9.94882 14.5319 9.88786 14.5496 9.82548 14.559C9.81968 14.5844 9.8056 14.607 9.78563 14.623C9.76565 14.6389 9.74099 14.6472 9.7158 14.6465C9.69132 14.6462 9.66765 14.6374 9.64854 14.6216C9.62942 14.6057 9.61597 14.5837 9.61033 14.559C9.54364 14.5507 9.47835 14.5331 9.41627 14.5065L9.45002 14.4453C9.50486 14.4671 9.5597 14.4846 9.61877 14.489C9.62501 14.4756 9.63385 14.4636 9.64473 14.4538C9.65561 14.444 9.66831 14.4366 9.68205 14.4321V14.139H9.74955V14.4321C9.77908 14.4409 9.80439 14.4628 9.81705 14.4934V14.489ZM9.35298 14.3928L9.31923 14.454C9.2626 14.4166 9.21145 14.3709 9.16736 14.3184C9.12939 14.3271 9.09142 14.3184 9.06189 14.2965C9.05094 14.2876 9.04188 14.2765 9.03526 14.2638C9.02864 14.2511 9.02462 14.2372 9.02343 14.2228C9.02224 14.2084 9.02392 14.194 9.02836 14.1803C9.0328 14.1666 9.03991 14.1541 9.04923 14.1434L9.05345 14.139C9.02425 14.0726 9.00572 14.0016 8.99861 13.929H9.07033C9.07539 13.9893 9.08963 14.0484 9.11252 14.104C9.13361 14.104 9.1547 14.104 9.17158 14.1128L9.34455 13.9159L9.39939 13.9596L9.22642 14.1565C9.24752 14.1959 9.24752 14.244 9.2222 14.279C9.26071 14.3228 9.3047 14.3611 9.35298 14.3928ZM9.09986 14.1828C9.11252 14.1653 9.14205 14.1609 9.16314 14.1828C9.18423 14.2046 9.18423 14.2265 9.16736 14.244C9.15861 14.2532 9.14688 14.2588 9.13442 14.2596C9.12196 14.2604 9.10965 14.2564 9.09986 14.2484C9.09537 14.2443 9.09177 14.2392 9.08931 14.2336C9.08685 14.2279 9.08558 14.2218 9.08558 14.2156C9.08558 14.2094 9.08685 14.2032 9.08931 14.1976C9.09177 14.1919 9.09537 14.1869 9.09986 14.1828ZM9.00705 13.9859L8.93955 13.9728L8.92689 13.7846L8.99861 13.7584V13.8678C8.99861 13.9115 8.99861 13.9465 9.00705 13.9859ZM9.06611 13.754L9.13783 13.7715V13.8678C9.13783 13.8328 9.15048 13.9596 9.15048 13.9596L9.07877 13.9859C9.07086 13.947 9.06662 13.9075 9.06611 13.8678V13.754ZM9.30236 14.3534C9.36294 14.4033 9.43147 14.4418 9.50486 14.4671L9.52173 14.3971C9.46124 14.3778 9.40423 14.3482 9.35298 14.3096L9.30236 14.3534ZM9.26861 14.4146C9.32992 14.4634 9.39826 14.5018 9.47111 14.5284L9.42048 14.5765C9.36106 14.5545 9.30441 14.5251 9.25173 14.489L9.26861 14.4146ZM9.36142 14.0034L9.42892 14.034L9.55548 13.8896L9.5133 13.8284L9.36142 14.0034ZM9.30658 13.9596L9.26439 13.8984L9.39095 13.754L9.45845 13.7846L9.30658 13.9596ZM10.0702 14.3928L10.1039 14.454C10.1605 14.4165 10.2117 14.3709 10.2558 14.3184C10.2938 14.3271 10.3317 14.3184 10.3613 14.2965C10.3722 14.2876 10.3813 14.2765 10.3879 14.2638C10.3945 14.2511 10.3985 14.2372 10.3997 14.2228C10.4009 14.2084 10.3992 14.194 10.3948 14.1803C10.3904 14.1666 10.3832 14.1541 10.3739 14.1434L10.3697 14.139C10.3991 14.0727 10.4177 14.0017 10.4245 13.929H10.3528C10.3476 13.9893 10.3334 14.0483 10.3106 14.104C10.2906 14.102 10.2703 14.105 10.2516 14.1128L10.0786 13.9159L10.0238 13.9596L10.1967 14.1565C10.185 14.1748 10.1791 14.1965 10.1798 14.2185C10.1806 14.2404 10.188 14.2616 10.201 14.279C10.1625 14.3229 10.1185 14.3611 10.0702 14.3928ZM10.3233 14.1828C10.3143 14.1753 10.3032 14.1712 10.2917 14.1712C10.2802 14.1712 10.269 14.1753 10.26 14.1828C10.2517 14.1904 10.2466 14.201 10.2458 14.2125C10.245 14.224 10.2486 14.2353 10.2558 14.244C10.2645 14.2532 10.2763 14.2588 10.2887 14.2596C10.3012 14.2604 10.3135 14.2564 10.3233 14.2484C10.3278 14.2443 10.3314 14.2392 10.3338 14.2336C10.3363 14.2279 10.3376 14.2218 10.3376 14.2156C10.3376 14.2094 10.3363 14.2032 10.3338 14.1976C10.3314 14.1919 10.3278 14.1869 10.3233 14.1828ZM10.4161 13.9859L10.4836 13.9728L10.4963 13.7846L10.4245 13.7584V13.8678C10.4245 13.9115 10.4245 13.9509 10.4161 13.9903V13.9859ZM10.357 13.754L10.2853 13.7715V13.8678C10.2853 13.8328 10.2727 13.9596 10.2727 13.9596L10.3444 13.9859L10.357 13.8678V13.754ZM10.1208 14.3534C10.0602 14.4033 9.99168 14.4418 9.9183 14.4671L9.90142 14.3971C9.96191 14.3778 10.0189 14.3482 10.0702 14.3096L10.1208 14.3534ZM10.1545 14.4146C10.0932 14.4634 10.0249 14.5018 9.95205 14.5284L10.0027 14.5765C10.0621 14.5545 10.1188 14.5251 10.1714 14.489L10.1545 14.4146ZM10.0617 14.0034L9.99423 14.034L9.87189 13.8896L9.91408 13.8284L10.0617 14.0034ZM10.1166 13.9596L10.1588 13.8984L10.0322 13.754L9.9647 13.7846L10.1166 13.9596ZM9.26861 13.579L9.2897 13.649H9.47955L9.50064 13.579H9.26861ZM10.1588 13.579L10.1377 13.649H9.94783L9.92673 13.579H10.1588ZM9.66939 14.5371C9.66939 14.5109 9.69048 14.4934 9.7158 14.4934C9.72168 14.4928 9.72762 14.4934 9.73324 14.4954C9.73885 14.4973 9.74402 14.5004 9.74839 14.5045C9.75277 14.5087 9.75626 14.5137 9.75864 14.5193C9.76102 14.5249 9.76223 14.531 9.7622 14.5371C9.7622 14.5634 9.74111 14.5809 9.72001 14.5809C9.71392 14.5815 9.70776 14.5808 9.70191 14.579C9.69606 14.5771 9.69062 14.574 9.68591 14.5699C9.68121 14.5659 9.67732 14.5609 9.67449 14.5553C9.67165 14.5496 9.66992 14.5435 9.66939 14.5371ZM9.74955 14.1959L9.82127 14.1784V13.9903L9.74955 13.9684V14.1959ZM9.68205 14.1959L9.61033 14.1784V13.9903L9.68205 13.9684V14.1959Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.92261 13.5265C8.93104 13.4828 8.9648 13.4565 8.99855 13.439V13.2115H9.06604V13.4434C9.09979 13.4565 9.12933 13.4828 9.13776 13.5134H9.32339V13.5265H9.07026C9.06596 13.5188 9.05983 13.5123 9.05245 13.5077C9.04507 13.5031 9.03668 13.5006 9.02808 13.5003C9.0112 13.5003 8.99854 13.5134 8.98589 13.5265H8.92261ZM9.43729 13.5265V13.5134H9.61026C9.61276 13.5088 9.61558 13.5044 9.6187 13.5003L9.40776 13.2509L9.45839 13.2072L9.66933 13.4522L9.67776 13.4478V13.124H9.74526V13.4434H9.75792L9.96464 13.2028L10.0153 13.2465L9.80854 13.4872L9.8212 13.5134H9.98995V13.5265H9.44151H9.43729ZM10.3485 13.5265C10.3525 13.5185 10.3585 13.5118 10.366 13.5071C10.3735 13.5025 10.382 13.5001 10.3907 13.5003C10.4118 13.5003 10.4245 13.5134 10.4329 13.5265H10.5004C10.492 13.4828 10.4625 13.4565 10.4245 13.439V13.2115H10.357V13.4434C10.3232 13.4565 10.2979 13.4784 10.2853 13.5134H10.0996V13.5265H10.3528M9.0787 12.8703L9.33183 13.1678L9.38667 13.124L9.12933 12.8309L9.14198 12.8047H9.32761V12.7303H9.14198C9.13407 12.708 9.11965 12.6889 9.10074 12.6756C9.08183 12.6622 9.05938 12.6554 9.03651 12.6559C9.02211 12.6553 9.00773 12.6577 8.99421 12.6629C8.98068 12.6681 8.96827 12.6759 8.95769 12.6861C8.94712 12.6963 8.93857 12.7085 8.93255 12.7221C8.92653 12.7357 8.92315 12.7503 8.92261 12.7653C8.92261 12.789 8.93001 12.812 8.9437 12.8309C8.95739 12.8498 8.97664 12.8637 8.99855 12.8703V13.0978H9.06604V12.8703H9.0787ZM10.4287 12.8703V13.1022H10.357V12.8747C10.3511 12.8723 10.3455 12.8693 10.3401 12.8659L10.087 13.1634L10.0321 13.1197L10.2937 12.8178L10.2895 12.8047H10.0996V12.7303H10.2895C10.2971 12.7087 10.3109 12.6901 10.329 12.6768C10.3471 12.6635 10.3686 12.6563 10.3907 12.6559C10.4051 12.6553 10.4195 12.6577 10.433 12.6629C10.4466 12.6681 10.459 12.6759 10.4696 12.6861C10.4801 12.6963 10.4887 12.7085 10.4947 12.7221C10.5007 12.7357 10.5041 12.7503 10.5046 12.7653C10.5044 12.7895 10.4964 12.813 10.4819 12.832C10.4674 12.851 10.4472 12.8645 10.4245 12.8703H10.4287ZM9.74948 12.8703V13.0147H9.67776V12.8747C9.66137 12.8696 9.64635 12.8606 9.6339 12.8485C9.62145 12.8363 9.61191 12.8213 9.60604 12.8047H9.43729V12.7303H9.60604C9.61395 12.708 9.62837 12.6889 9.64728 12.6756C9.66619 12.6622 9.68865 12.6554 9.71151 12.6559C9.76214 12.6559 9.80433 12.6865 9.81698 12.7303H9.98573V12.8003H9.81698C9.81183 12.8166 9.80303 12.8315 9.79131 12.8437C9.77958 12.8558 9.76525 12.8649 9.74948 12.8703ZM8.99855 13.0453L8.92683 13.0628V13.2509L8.99855 13.2728V13.0453ZM9.06604 13.0453L9.13776 13.0628V13.2509L9.06604 13.2728V13.0453ZM10.357 13.0453L10.2853 13.0628V13.2509L10.357 13.2728V13.0453ZM10.4245 13.0453L10.4962 13.0628V13.2509L10.4245 13.2728V13.0453ZM9.3487 13.0803L9.4162 13.0497L9.53855 13.194L9.49636 13.2553L9.3487 13.0803ZM9.29386 13.124L9.25167 13.1853L9.37823 13.3297L9.44573 13.299L9.29386 13.124ZM10.0743 13.0759L10.0068 13.0453L9.88026 13.1897L9.92245 13.2509L10.0743 13.0759ZM10.125 13.1197L10.1671 13.1809L10.0406 13.3253L9.97729 13.2947L10.125 13.1197ZM9.26854 13.5134L9.28964 13.4434H9.47948L9.50058 13.5134H9.26854ZM8.98589 12.7697C8.98589 12.7434 9.00698 12.7259 9.03651 12.7259C9.0477 12.7259 9.05843 12.7305 9.06634 12.7387C9.07426 12.7469 9.0787 12.7581 9.0787 12.7697C9.0787 12.7959 9.06183 12.8134 9.03651 12.8134C9.03041 12.814 9.02426 12.8134 9.01841 12.8115C9.01256 12.8096 9.00712 12.8065 9.00241 12.8025C8.99771 12.7984 8.99382 12.7934 8.99099 12.7878C8.98815 12.7821 8.98642 12.776 8.98589 12.7697ZM9.49636 12.8047L9.47526 12.8747H9.28542L9.26433 12.8047H9.49636ZM9.49636 12.7347L9.47526 12.6647H9.28542L9.26433 12.7347H9.49636ZM10.1587 13.5134L10.1376 13.4434H9.94776L9.92667 13.5134H10.1587ZM10.3443 12.7697C10.3443 12.7434 10.3654 12.7259 10.3907 12.7259C10.3966 12.7253 10.4026 12.726 10.4082 12.7279C10.4138 12.7298 10.419 12.7329 10.4233 12.7371C10.4277 12.7412 10.4312 12.7462 10.4336 12.7518C10.436 12.7575 10.4372 12.7635 10.4371 12.7697C10.4371 12.7959 10.416 12.8134 10.395 12.8134C10.3889 12.814 10.3827 12.8134 10.3768 12.8115C10.371 12.8096 10.3656 12.8065 10.3608 12.8025C10.3561 12.7984 10.3523 12.7934 10.3494 12.7878C10.3466 12.7821 10.3449 12.776 10.3443 12.7697ZM9.66511 12.7697C9.66511 12.7434 9.6862 12.7259 9.71151 12.7259C9.7174 12.7253 9.72334 12.726 9.72896 12.7279C9.73457 12.7298 9.73974 12.7329 9.74411 12.7371C9.74849 12.7412 9.75198 12.7462 9.75436 12.7518C9.75674 12.7575 9.75795 12.7635 9.75792 12.7697C9.75792 12.7959 9.73683 12.8134 9.71151 12.8134C9.6999 12.8135 9.6887 12.809 9.68011 12.8009C9.67151 12.7928 9.66616 12.7817 9.66511 12.7697ZM9.92667 12.8047L9.94776 12.8747H10.1418L10.1629 12.8047H9.92667ZM9.92667 12.7347L9.94776 12.6647H10.1418L10.1629 12.7347H9.92667ZM9.67776 12.9534L9.60604 12.9753V13.1634L9.67776 13.1853V12.949M9.74948 12.949L9.81698 12.9709V13.159L9.74948 13.1809V12.949Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.81698 14.4934C9.87073 14.4841 9.92317 14.468 9.97308 14.4453L10.0068 14.5065C9.94875 14.532 9.88779 14.5496 9.82542 14.559C9.81961 14.5845 9.80554 14.6071 9.78556 14.623C9.76558 14.6389 9.74093 14.6472 9.71573 14.6465C9.69126 14.6462 9.66758 14.6375 9.64847 14.6216C9.62936 14.6058 9.61591 14.5837 9.61026 14.559C9.54357 14.5508 9.47828 14.5331 9.4162 14.5065L9.44995 14.4453C9.50479 14.4672 9.55964 14.4847 9.6187 14.489C9.62495 14.4756 9.63378 14.4636 9.64467 14.4538C9.65555 14.444 9.66825 14.4367 9.68198 14.4322V14.139H9.74948V14.4322C9.77901 14.4409 9.80433 14.4628 9.81698 14.4934ZM9.6187 13.6009C9.61507 13.594 9.61224 13.5866 9.61026 13.579H9.44151V13.5178H9.61026C9.61259 13.5117 9.61541 13.5059 9.6187 13.5003L9.40776 13.2553L9.45839 13.2115L9.66933 13.4522C9.67214 13.452 9.67495 13.452 9.67776 13.4522V13.124H9.74948V13.4434H9.75792L9.96464 13.2028L10.0153 13.2465L9.80854 13.4872L9.8212 13.5134H9.98995V13.579H9.8212C9.8212 13.5878 9.81276 13.5965 9.80854 13.6009L10.0068 13.8328L9.95198 13.8765L9.75792 13.6447L9.74948 13.649V14.0297H9.68198V13.649L9.67355 13.6447L9.47104 13.8765L9.42042 13.8328L9.6187 13.6009ZM9.0787 12.8703L9.33183 13.1678L9.38667 13.124L9.12933 12.8309L9.14198 12.8047H9.32761V12.7303H9.14198C9.13407 12.708 9.11965 12.6889 9.10074 12.6756C9.08183 12.6622 9.05938 12.6554 9.03651 12.6559C9.00814 12.6559 8.98086 12.6673 8.96041 12.6877C8.93995 12.7081 8.92792 12.7359 8.92683 12.7653C8.92655 12.7884 8.93334 12.811 8.94622 12.8299C8.95911 12.8487 8.97742 12.8629 8.99855 12.8703V13.0978H9.06604V12.8703H9.0787ZM9.35292 14.3928L9.31917 14.454C9.26254 14.4166 9.21139 14.3709 9.1673 14.3184C9.12933 14.3272 9.09136 14.3184 9.06183 14.2965C9.05088 14.2877 9.04181 14.2765 9.0352 14.2638C9.02858 14.2512 9.02455 14.2372 9.02337 14.2228C9.02218 14.2085 9.02386 14.194 9.0283 14.1803C9.03274 14.1667 9.03984 14.1541 9.04917 14.1434L9.05339 14.139C9.02564 14.0724 9.00854 14.0014 9.00276 13.929H9.07026C9.07533 13.9893 9.08957 14.0484 9.11245 14.104C9.13354 14.104 9.15464 14.104 9.17151 14.1128L9.34448 13.9159L9.39933 13.9597L9.22636 14.1565C9.25167 14.1959 9.24745 14.244 9.22214 14.279C9.26065 14.3228 9.30463 14.3611 9.35292 14.3928ZM8.99855 13.8197V13.649C8.97664 13.6424 8.95739 13.6286 8.9437 13.6097C8.93001 13.5907 8.92261 13.5677 8.92261 13.544C8.92261 13.5003 8.95636 13.4565 8.99855 13.439V13.2115H9.06604V13.4434C9.09979 13.4522 9.12933 13.4784 9.13776 13.5134H9.32339V13.579H9.13776C9.13233 13.5952 9.12343 13.6099 9.11174 13.6221C9.10005 13.6342 9.08587 13.6434 9.07026 13.649V13.8197H8.99855ZM9.09558 14.1828C9.11245 14.1653 9.14198 14.1609 9.16308 14.1828C9.18417 14.2047 9.18417 14.2265 9.1673 14.244C9.15854 14.2533 9.14681 14.2588 9.13435 14.2596C9.12189 14.2604 9.10959 14.2564 9.09979 14.2484C9.09531 14.2443 9.09171 14.2393 9.08925 14.2336C9.08679 14.2279 9.08551 14.2218 9.08551 14.2156C9.08551 14.2094 9.08679 14.2033 9.08925 14.1976C9.09171 14.1919 9.09531 14.1869 9.09979 14.1828H9.09558ZM9.0112 13.9859L8.93948 13.9728L8.92683 13.7847L8.99855 13.7584V13.8678C8.99855 13.9115 8.99855 13.9465 9.0112 13.9859ZM9.07026 13.754L9.13776 13.7715V13.8678C9.13776 13.8328 9.15042 13.9597 9.15042 13.9597L9.0787 13.9859L9.06604 13.8678V13.754H9.07026ZM9.30229 14.3534C9.36287 14.4033 9.43141 14.4418 9.5048 14.4672L9.52167 14.3972C9.46118 14.3778 9.40417 14.3482 9.35292 14.3097L9.30229 14.3534ZM9.26854 14.4147C9.32985 14.4634 9.39819 14.5018 9.47104 14.5284L9.42042 14.5765C9.361 14.5545 9.30434 14.5251 9.25167 14.489L9.26854 14.4147Z"
                              stroke="#C8B100"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M8.9986 13.0409L8.92688 13.0628V13.2509L8.9986 13.2728V13.0453M9.07032 13.0453L9.13782 13.0628V13.2509L9.07032 13.2728V13.0365M9.36141 14.0034L9.42891 14.034L9.55547 13.8897L9.51329 13.8284L9.36141 14.0034ZM9.30657 13.9597L9.26438 13.8984L9.39094 13.754L9.45844 13.7847L9.30657 13.9597ZM8.98594 13.544C8.98594 13.5178 9.00704 13.5003 9.02813 13.5003C9.05766 13.5003 9.07875 13.5222 9.07875 13.544C9.07875 13.5703 9.05766 13.5922 9.03235 13.5922C9.02646 13.5928 9.02052 13.5921 9.01491 13.5902C9.00929 13.5883 9.00413 13.5851 8.99975 13.581C8.99537 13.5769 8.99188 13.5718 8.98951 13.5662C8.98713 13.5606 8.98591 13.5545 8.98594 13.5484V13.544ZM10.0702 14.3928L10.1039 14.454C10.1605 14.4166 10.2117 14.3709 10.2558 14.3184C10.2938 14.3272 10.3317 14.3184 10.3655 14.2965C10.3761 14.2873 10.3848 14.276 10.3911 14.2631C10.3973 14.2503 10.4009 14.2362 10.4017 14.2219C10.4025 14.2075 10.4005 14.1931 10.3957 14.1797C10.3909 14.1662 10.3835 14.1538 10.3739 14.1434L10.3697 14.139C10.3991 14.0727 10.4176 14.0017 10.4245 13.929H10.3528C10.3476 13.9893 10.3334 14.0483 10.3106 14.104C10.2906 14.102 10.2703 14.105 10.2516 14.1128L10.0786 13.9159L10.0238 13.9597L10.1967 14.1565C10.185 14.1748 10.179 14.1965 10.1798 14.2185C10.1806 14.2405 10.188 14.2617 10.2009 14.279C10.1638 14.3226 10.1212 14.3609 10.0744 14.3928H10.0702ZM10.4245 13.8197V13.649C10.4464 13.6424 10.4657 13.6286 10.4794 13.6097C10.4931 13.5907 10.5005 13.5677 10.5005 13.544C10.5005 13.5003 10.4709 13.4565 10.4245 13.439V13.2115H10.357V13.4434C10.3233 13.4522 10.298 13.4784 10.2853 13.5134H10.0997V13.579H10.2853C10.298 13.614 10.3233 13.6359 10.357 13.649V13.8197H10.4245ZM10.3275 14.1828C10.3182 14.1742 10.3062 14.1694 10.2938 14.1694C10.2813 14.1694 10.2693 14.1742 10.26 14.1828C10.2517 14.1904 10.2466 14.2011 10.2458 14.2125C10.245 14.224 10.2486 14.2353 10.2558 14.244C10.2645 14.2533 10.2763 14.2588 10.2887 14.2596C10.3012 14.2604 10.3135 14.2564 10.3233 14.2484C10.3278 14.2443 10.3314 14.2393 10.3338 14.2336C10.3363 14.2279 10.3376 14.2218 10.3376 14.2156C10.3376 14.2094 10.3363 14.2033 10.3338 14.1976C10.3314 14.1919 10.3278 14.1869 10.3233 14.1828H10.3275ZM10.4119 13.9859L10.4836 13.9728L10.4963 13.7847L10.4245 13.7584V13.8678C10.4245 13.9115 10.4245 13.9465 10.4161 13.9859H10.4119ZM10.357 13.754L10.2853 13.7715V13.8678C10.2853 13.8328 10.2727 13.9597 10.2727 13.9597L10.3444 13.9859L10.357 13.8678V13.754ZM10.4245 12.8747V13.1022H10.357V12.8747C10.3512 12.8723 10.3455 12.8694 10.3402 12.8659L10.087 13.1634L10.0364 13.1197L10.2895 12.8134V12.8047H10.0997V12.7303H10.2853C10.2932 12.708 10.3076 12.6889 10.3266 12.6756C10.3455 12.6622 10.3679 12.6554 10.3908 12.6559C10.4192 12.6559 10.4464 12.6673 10.4669 12.6877C10.4873 12.7081 10.4994 12.7359 10.5005 12.7653C10.5005 12.789 10.4931 12.812 10.4794 12.8309C10.4657 12.8498 10.4464 12.8637 10.4245 12.8703V12.8747ZM9.74954 12.8747V13.0147H9.67782V12.8747C9.66143 12.8696 9.64641 12.8606 9.63396 12.8485C9.6215 12.8363 9.61196 12.8213 9.6061 12.8047H9.43735V12.7303H9.6061C9.62297 12.6865 9.66094 12.6559 9.71157 12.6559C9.76219 12.6559 9.80438 12.6865 9.81704 12.7303H9.98579V12.8003H9.81704C9.81188 12.8166 9.80309 12.8315 9.79136 12.8437C9.77963 12.8558 9.7653 12.8649 9.74954 12.8703V12.8747ZM10.1208 14.3534C10.0602 14.4033 9.99167 14.4418 9.91829 14.4672L9.90141 14.3972C9.9619 14.3778 10.0189 14.3482 10.0702 14.3097L10.1208 14.3534ZM10.1545 14.4147C10.0932 14.4634 10.0249 14.5018 9.95204 14.5284L10.0027 14.5765C10.0621 14.5545 10.1187 14.5251 10.1714 14.489L10.1545 14.4147ZM10.357 13.0365L10.2853 13.0584V13.2465L10.357 13.2684V13.0365Z"
                              stroke="#C8B100"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.4246 13.0409L10.4963 13.0628V13.2509L10.4246 13.2728V13.0365M9.92675 12.809L9.94785 12.879H10.1419L10.163 12.809H9.93097M9.67785 12.9578L9.61035 12.9796V13.1678L9.67785 13.1896V12.949M10.0618 13.999L9.99425 14.0296L9.87191 13.8853L9.9141 13.824L10.0618 13.999ZM10.1166 13.9553L10.1588 13.894L10.0322 13.7496L9.96472 13.7803L10.1166 13.9553ZM9.34878 13.0803L9.41628 13.0496L9.54285 13.194L9.50066 13.2553L9.34878 13.0803ZM9.29394 13.124L9.25175 13.1853L9.37831 13.3296L9.44581 13.299L9.29394 13.124ZM10.0744 13.0759L10.0069 13.0453L9.88035 13.1896L9.92253 13.2509L10.0744 13.0759ZM10.125 13.1196L10.1672 13.1809L10.0407 13.3209L9.97738 13.2946L10.125 13.1196ZM9.26863 13.5134L9.28972 13.4434H9.47956L9.50066 13.5134H9.26863ZM9.26863 13.579L9.28972 13.649H9.47956L9.50066 13.579H9.26863ZM8.98597 12.774C8.98597 12.7478 9.00706 12.7303 9.0366 12.7303C9.06191 12.7303 9.07878 12.7478 9.07878 12.774C9.07878 12.8003 9.06191 12.8178 9.0366 12.8178C9.03039 12.8191 9.02399 12.8189 9.01785 12.8173C9.01171 12.8157 9.006 12.8127 9.00114 12.8085C8.99628 12.8043 8.99239 12.799 8.98977 12.793C8.98714 12.7871 8.98584 12.7806 8.98597 12.774ZM9.49644 12.809L9.47535 12.879H9.2855L9.26441 12.809H9.49644ZM9.49644 12.739L9.47535 12.669H9.2855L9.26441 12.739H9.49644ZM10.3444 13.5484C10.3444 13.5265 10.3655 13.5046 10.3908 13.5046C10.4161 13.5046 10.4372 13.5265 10.4372 13.5484C10.4372 13.5746 10.4161 13.5965 10.395 13.5965C10.3888 13.5978 10.3824 13.5977 10.3763 13.5961C10.3702 13.5945 10.3644 13.5915 10.3596 13.5873C10.3547 13.5831 10.3508 13.5778 10.3482 13.5718C10.3456 13.5658 10.3443 13.5593 10.3444 13.5528V13.5484ZM10.1588 13.5178L10.1377 13.4478H9.94785L9.92675 13.5178H10.1588ZM10.1588 13.5834L10.1377 13.6534H9.94785L9.92675 13.5834H10.1588ZM9.66941 14.5415C9.66941 14.5153 9.6905 14.4978 9.71581 14.4978C9.74113 14.4978 9.76222 14.5153 9.76222 14.5415C9.76222 14.5678 9.74113 14.5853 9.72003 14.5853C9.71393 14.5859 9.70778 14.5852 9.70193 14.5833C9.69608 14.5814 9.69064 14.5784 9.68593 14.5743C9.68123 14.5703 9.67734 14.5653 9.67451 14.5596C9.67167 14.554 9.66994 14.5478 9.66941 14.5415ZM9.74956 14.2003L9.82128 14.1828V13.9946L9.74956 13.9728V14.2003ZM9.68206 14.2003L9.61035 14.1828V13.9946L9.68206 13.9728V14.2003ZM10.3444 12.774C10.3444 12.7478 10.3655 12.7303 10.3908 12.7303C10.3967 12.7296 10.4026 12.7303 10.4083 12.7322C10.4139 12.7342 10.419 12.7373 10.4234 12.7414C10.4278 12.7455 10.4313 12.7506 10.4337 12.7562C10.436 12.7618 10.4373 12.7679 10.4372 12.774C10.4372 12.8003 10.4161 12.8178 10.395 12.8178C10.3889 12.8184 10.3828 12.8177 10.3769 12.8158C10.3711 12.8139 10.3656 12.8109 10.3609 12.8068C10.3562 12.8027 10.3523 12.7978 10.3495 12.7921C10.3467 12.7865 10.3449 12.7803 10.3444 12.774ZM9.66519 12.774C9.66519 12.7478 9.68628 12.7303 9.7116 12.7303C9.71748 12.7296 9.72342 12.7303 9.72904 12.7322C9.73465 12.7342 9.73982 12.7373 9.74419 12.7414C9.74857 12.7455 9.75206 12.7506 9.75444 12.7562C9.75682 12.7618 9.75803 12.7679 9.758 12.774C9.758 12.8003 9.73691 12.8178 9.71581 12.8178C9.70972 12.8184 9.70356 12.8177 9.69771 12.8158C9.69186 12.8139 9.68642 12.8109 9.68171 12.8068C9.67701 12.8027 9.67312 12.7978 9.67029 12.7921C9.66745 12.7865 9.66572 12.7803 9.66519 12.774ZM9.93097 12.739L9.94785 12.669H10.1419L10.163 12.739H9.93097ZM9.74956 12.949L9.81706 12.9709V13.159L9.74956 13.1809V12.949Z"
                              stroke="#C8B100"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.60608 13.5484C9.60717 13.519 9.61921 13.4912 9.63966 13.4708C9.66011 13.4504 9.68739 13.439 9.71577 13.439C9.74414 13.439 9.77142 13.4504 9.79187 13.4708C9.81233 13.4912 9.82436 13.519 9.82545 13.5484C9.82332 13.577 9.81083 13.6038 9.79049 13.6232C9.77015 13.6427 9.74345 13.6535 9.71577 13.6534C9.6567 13.6534 9.60608 13.6097 9.60608 13.5484Z"
                              fill="#058E6E"
                            />
                            <path
                              d="M9.74109 10.7047V10.6784L9.74531 10.6653L9.64828 10.6609C9.61258 10.6511 9.57944 10.6332 9.55125 10.6084C9.5175 10.5778 9.50484 10.5647 9.48375 10.5559C9.42891 10.5472 9.38672 10.5734 9.38672 10.5734C9.38672 10.5734 9.42891 10.5909 9.45844 10.6303C9.48797 10.6697 9.52172 10.6872 9.53437 10.6915C9.55969 10.7003 9.64406 10.6915 9.66516 10.6959L9.74109 10.7047Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.74109 10.7047V10.6784L9.74531 10.6653L9.64828 10.6609C9.61258 10.6511 9.57944 10.6332 9.55125 10.6084C9.5175 10.5778 9.50484 10.5647 9.48375 10.5559C9.42891 10.5472 9.38672 10.5734 9.38672 10.5734C9.38672 10.5734 9.42891 10.5909 9.45844 10.6303C9.48797 10.6697 9.52172 10.6872 9.53438 10.6915C9.55969 10.7003 9.64406 10.6915 9.66516 10.6959L9.74109 10.7047Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.0449 10.6084V10.6697C10.0533 10.6959 10.0407 10.7222 10.0449 10.7353C10.0449 10.7528 10.0491 10.7615 10.0576 10.7747L10.066 10.814L10.0365 10.7922L10.0112 10.7747V10.8184C10.0154 10.8272 10.0238 10.8534 10.0365 10.8665L10.0787 10.9234C10.0871 10.9453 10.0829 10.9847 10.0829 10.9847C10.0829 10.9847 10.066 10.954 10.0491 10.9497L9.9985 10.919C9.9985 10.919 10.028 10.954 10.028 10.9847C10.028 11.0197 10.0154 11.0547 10.0154 11.0547C10.0154 11.0547 10.0027 11.024 9.98162 11.0065L9.93944 10.9672C9.93944 10.9672 9.95631 11.0197 9.95631 11.0547V11.1553L9.91834 11.1115L9.87616 11.0809C9.87616 11.0722 9.89725 11.1072 9.90147 11.129C9.90147 11.1509 9.91412 11.2297 9.97741 11.3259C10.0196 11.3828 10.0744 11.4834 10.201 11.4528C10.3276 11.4178 10.2812 11.2428 10.2558 11.1597C10.2327 11.095 10.2185 11.0272 10.2137 10.9584C10.2137 10.9234 10.239 10.8315 10.2347 10.814C10.229 10.7687 10.2319 10.7226 10.2432 10.6784C10.2601 10.6215 10.2727 10.5997 10.2812 10.5778C10.2896 10.5515 10.298 10.5384 10.298 10.5209L10.3022 10.464L10.3318 10.5209L10.336 10.5865C10.336 10.5865 10.3402 10.5428 10.3782 10.5165C10.4119 10.4903 10.4541 10.4684 10.4626 10.4553C10.4752 10.4422 10.4752 10.4334 10.4752 10.4334C10.4752 10.4334 10.4752 10.5122 10.4499 10.5472L10.3782 10.6347C10.3782 10.6347 10.4077 10.6215 10.4288 10.6215H10.4668C10.4668 10.6215 10.4415 10.639 10.4077 10.6915C10.374 10.7353 10.3866 10.744 10.3655 10.7834C10.3402 10.8272 10.3233 10.8272 10.2938 10.849C10.2516 10.884 10.2727 11.0328 10.2769 11.0547C10.2854 11.0765 10.3613 11.2515 10.3613 11.2953C10.3613 11.339 10.3697 11.4353 10.298 11.4965C10.2516 11.5403 10.1715 11.5403 10.1546 11.549C10.1377 11.5622 10.104 11.5972 10.104 11.6715C10.104 11.7459 10.1293 11.759 10.1462 11.7765C10.1715 11.7984 10.1968 11.7853 10.201 11.8028C10.2094 11.8159 10.2094 11.8247 10.2221 11.8334C10.2305 11.8422 10.2347 11.8509 10.2305 11.8684C10.2305 11.8815 10.1968 11.9165 10.1841 11.9428L10.1504 12.0478C10.1504 12.0565 10.1462 12.0915 10.1546 12.1047C10.1546 12.1047 10.1926 12.1484 10.1672 12.1572C10.1504 12.1659 10.1335 12.1484 10.1251 12.1484L10.0871 12.1703C10.0744 12.1659 10.0744 12.1572 10.0702 12.1353L10.066 12.1047C10.0576 12.1047 10.0533 12.1134 10.0491 12.1265C10.0491 12.1353 10.0491 12.1615 10.0365 12.1615C10.028 12.1615 10.0154 12.144 10.0027 12.1397C9.99428 12.1397 9.96897 12.1309 9.96897 12.1222C9.96897 12.109 9.98584 12.0828 9.9985 12.0784C10.0154 12.0784 10.0322 12.0653 10.0196 12.0565C10.0069 12.0478 9.9985 12.0478 9.99006 12.0565C9.98162 12.0653 9.95631 12.0565 9.96053 12.0478V12.0128C9.96053 12.004 9.94366 11.9909 9.96475 11.9778C9.99006 11.9647 9.9985 11.9865 10.0238 11.9822C10.0491 11.9822 10.0576 11.969 10.066 11.9559C10.0744 11.9428 10.0744 11.9122 10.0576 11.8947C10.0407 11.8728 10.028 11.8728 10.0196 11.8597L10.0069 11.8203V11.9165L9.97741 11.8815C9.96475 11.8684 9.95209 11.8247 9.95209 11.8247V11.8815C9.95209 11.899 9.96475 11.9122 9.96053 11.9165C9.95631 11.9209 9.92678 11.8859 9.91834 11.8815C9.9017 11.8699 9.88737 11.855 9.87616 11.8378L9.85928 11.7765C9.85548 11.7548 9.85548 11.7326 9.85928 11.7109L9.87616 11.6672H9.81709C9.78756 11.6672 9.76647 11.654 9.75381 11.6759C9.74116 11.6978 9.74537 11.7415 9.76225 11.7984C9.7749 11.8509 9.78334 11.8815 9.77912 11.8903C9.77137 11.9037 9.76137 11.9155 9.74959 11.9253H9.71162C9.69608 11.9166 9.67867 11.9121 9.661 11.9122H9.60615L9.55975 11.899C9.54709 11.9034 9.526 11.9122 9.53444 11.9297C9.54287 11.9559 9.526 11.9603 9.51334 11.9603L9.47537 11.9515C9.4585 11.9472 9.43741 11.9515 9.44162 11.934C9.44162 11.9165 9.45006 11.9165 9.4585 11.9034C9.46694 11.8903 9.46694 11.8815 9.4585 11.8815H9.43319C9.42475 11.8903 9.41209 11.9034 9.39944 11.899C9.391 11.8947 9.38256 11.8815 9.38256 11.8553C9.38256 11.829 9.35303 11.8028 9.38256 11.8072C9.40365 11.8072 9.43741 11.8247 9.44162 11.8072C9.45006 11.794 9.44162 11.7897 9.43319 11.7765C9.42475 11.7634 9.39944 11.759 9.42053 11.7459L9.45006 11.724C9.45428 11.7153 9.46694 11.689 9.47959 11.6978C9.5049 11.7065 9.47959 11.7284 9.50491 11.7547C9.53022 11.7853 9.54709 11.7984 9.58928 11.7897C9.63147 11.7897 9.64412 11.7809 9.64412 11.7678L9.63991 11.724V11.6803C9.63991 11.6803 9.62303 11.6934 9.61881 11.7065L9.60194 11.7415V11.654C9.59971 11.6422 9.59689 11.6305 9.5935 11.619L9.58084 11.6584L9.57662 11.7022C9.57662 11.7022 9.54709 11.6803 9.55553 11.6365C9.55975 11.6059 9.55131 11.5665 9.55975 11.549C9.56819 11.5359 9.58928 11.4834 9.64412 11.479H9.75381L9.83819 11.4659C9.83819 11.4659 9.72006 11.4047 9.69053 11.3828C9.65835 11.3581 9.62991 11.3287 9.60615 11.2953L9.58084 11.2253C9.58084 11.2253 9.55975 11.2253 9.53866 11.2384C9.51967 11.2502 9.50259 11.2649 9.48803 11.2822L9.4585 11.3259L9.46272 11.2734V11.2384C9.46272 11.2384 9.44584 11.2909 9.42053 11.3128L9.36147 11.3565V11.3215L9.36991 11.2778C9.36991 11.2778 9.35303 11.3128 9.3235 11.3215C9.29397 11.3215 9.24756 11.3215 9.24334 11.339C9.24334 11.3609 9.25178 11.3828 9.24334 11.4003C9.24334 11.4134 9.22647 11.4222 9.22647 11.4222L9.19272 11.4047C9.17584 11.4047 9.16319 11.4134 9.16319 11.4134C9.16319 11.4134 9.15053 11.3959 9.15475 11.3828C9.15897 11.374 9.18428 11.3565 9.17584 11.3478L9.14209 11.3565C9.12944 11.3609 9.10834 11.3697 9.10834 11.3478C9.10834 11.3303 9.11678 11.3172 9.10834 11.304C9.10834 11.2909 9.10834 11.2822 9.11678 11.2778L9.16741 11.2734C9.16741 11.2647 9.15897 11.2515 9.13366 11.2472C9.10834 11.2428 9.09991 11.2253 9.11256 11.2122C9.12522 11.2034 9.12522 11.199 9.13366 11.1859C9.13787 11.1772 9.14209 11.1553 9.16319 11.164C9.18428 11.1772 9.18006 11.199 9.20537 11.2078C9.23376 11.2124 9.2628 11.2094 9.28975 11.199L9.35303 11.1553L9.41631 11.1115L9.37412 11.0765C9.36147 11.0634 9.34459 11.0372 9.33194 11.0328C9.30767 11.0211 9.2822 11.0122 9.256 11.0065C9.23146 11.0017 9.20743 10.9944 9.18428 10.9847L9.21803 10.9715C9.22647 10.9628 9.24334 10.9453 9.25178 10.9453H9.26444H9.20537C9.19272 10.9409 9.16319 10.919 9.15053 10.919L9.11678 10.9234C9.11678 10.9234 9.15053 10.9059 9.17584 10.9015L9.21803 10.8972C9.21803 10.8972 9.18006 10.884 9.17162 10.8709L9.14631 10.8272C9.13787 10.8228 9.13365 10.8053 9.121 10.8053L9.07881 10.8184C9.06194 10.8184 9.0535 10.8097 9.0535 10.7922L9.04928 10.7703C9.04084 10.7572 9.02397 10.7353 9.04084 10.7265H9.0999C9.0999 10.7178 9.07881 10.7003 9.06615 10.6915C9.04928 10.6828 9.02397 10.6697 9.03662 10.6565L9.07037 10.6347C9.07881 10.6215 9.08303 10.5909 9.0999 10.604C9.11678 10.6128 9.13366 10.6565 9.14631 10.6522C9.15897 10.6522 9.15897 10.6172 9.15897 10.6084C9.15897 10.5909 9.15897 10.5647 9.16741 10.569C9.18006 10.569 9.1885 10.5865 9.20959 10.5909C9.22647 10.5909 9.25178 10.5865 9.25178 10.5997C9.25178 10.6128 9.23912 10.6303 9.22647 10.6434C9.21381 10.6565 9.20959 10.6872 9.21381 10.7047C9.22225 10.7265 9.24334 10.7572 9.26444 10.7659C9.28131 10.779 9.31506 10.7878 9.33616 10.8053C9.35725 10.8184 9.40787 10.8578 9.42475 10.8622L9.4585 10.8797C9.4585 10.8797 9.47959 10.8709 9.50491 10.8709C9.53444 10.8709 9.5935 10.8709 9.61459 10.8622C9.6399 10.8534 9.66944 10.8359 9.65678 10.8184C9.65256 10.7922 9.60194 10.7747 9.60615 10.7572C9.60615 10.7397 9.62725 10.7397 9.65678 10.7397C9.69053 10.7397 9.73272 10.744 9.74115 10.6959C9.74959 10.6522 9.74959 10.6303 9.70741 10.6172C9.66522 10.6084 9.63147 10.6084 9.62303 10.5734C9.61459 10.5428 9.60615 10.534 9.61459 10.5253C9.62725 10.5165 9.63991 10.5122 9.67366 10.5078C9.70741 10.5078 9.74116 10.5078 9.75381 10.499C9.76225 10.4903 9.76647 10.4684 9.77912 10.4597C9.79178 10.4509 9.83819 10.4422 9.83819 10.4422C9.83819 10.4422 9.89725 10.4728 9.95209 10.5165C9.98595 10.5438 10.017 10.5746 10.0449 10.6084Z"
                              fill="#ED72AA"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.62271 10.5767L9.6145 10.5512V10.5384C9.6145 10.5384 9.64734 10.5384 9.64324 10.5512C9.64324 10.5597 9.63503 10.5597 9.63092 10.5639L9.62271 10.5767Z"
                              fill="black"
                            />
                            <path
                              d="M9.62271 10.5767L9.6145 10.5512V10.5384C9.6145 10.5384 9.64734 10.5384 9.64324 10.5512C9.64324 10.5597 9.63503 10.5597 9.63092 10.5639L9.62271 10.5767Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.78748 10.5164V10.499C9.78748 10.499 9.81678 10.499 9.82934 10.512C9.85027 10.5294 9.86701 10.5555 9.86701 10.5555L9.83352 10.5381H9.81259L9.80003 10.5338V10.5207H9.78748"
                              fill="black"
                            />
                            <path
                              d="M9.78748 10.5164V10.499C9.78748 10.499 9.81678 10.499 9.82934 10.512C9.85027 10.5294 9.86701 10.5555 9.86701 10.5555L9.83352 10.5381H9.81259L9.80003 10.5338V10.5207H9.78748V10.5164Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M10.0111 10.7746L9.99422 10.744C9.98983 10.7383 9.98561 10.7325 9.98157 10.7265"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.17151 10.5684C9.17151 10.5684 9.19244 10.5858 9.205 10.5858H9.23849C9.23849 10.5858 9.24686 10.5641 9.24267 10.5511C9.2343 10.499 9.19244 10.4903 9.19244 10.4903C9.19244 10.4903 9.205 10.5207 9.19663 10.5337C9.19122 10.5473 9.18258 10.5593 9.17151 10.5684Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.17151 10.5684C9.17151 10.5684 9.19244 10.5858 9.205 10.5858H9.23849C9.23849 10.5858 9.24686 10.5641 9.24267 10.5511C9.2343 10.499 9.19244 10.4903 9.19244 10.4903C9.19244 10.4903 9.205 10.5207 9.19663 10.5337C9.19122 10.5473 9.18258 10.5593 9.17151 10.5684Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.07787 10.6126C9.07787 10.6126 9.06113 10.5822 9.02345 10.5865C8.98996 10.5865 8.96484 10.6213 8.96484 10.6213H9.01508C9.02764 10.6343 9.03182 10.6647 9.03182 10.6647L9.06113 10.6386C9.06712 10.6303 9.07271 10.6216 9.07787 10.6126Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.07787 10.6126C9.07787 10.6126 9.06113 10.5822 9.02345 10.5865C8.98996 10.5865 8.96484 10.6213 8.96484 10.6213H9.01508C9.02764 10.6343 9.03182 10.6647 9.03182 10.6647L9.06113 10.6386C9.06712 10.6303 9.07271 10.6216 9.07787 10.6126Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.03604 10.744C9.03604 10.744 9.00255 10.7484 8.9858 10.7701C8.96906 10.7918 8.97324 10.8265 8.97324 10.8265C8.97324 10.8265 8.98999 10.8048 9.01092 10.8048L9.05278 10.8135L9.04859 10.7787L9.03604 10.744Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.03604 10.744C9.03604 10.744 9.00255 10.7484 8.9858 10.7701C8.96906 10.7918 8.97324 10.8265 8.97324 10.8265C8.97324 10.8265 8.98999 10.8048 9.01092 10.8048L9.05278 10.8135L9.04859 10.7787L9.03604 10.744Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.62703 10.7391L9.63934 10.7178L9.65166 10.7391H9.62292"
                              fill="black"
                            />
                            <path
                              d="M9.62703 10.7391L9.63934 10.7178L9.65166 10.7391H9.62292"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.66084 10.7391L9.67316 10.7178L9.68958 10.7391H9.65674"
                              fill="black"
                            />
                            <path
                              d="M9.66084 10.7391L9.67316 10.7178L9.68958 10.7391H9.65674"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.64404 10.5997L9.67688 10.6124L9.64815 10.6295L9.64404 10.6039"
                              fill="black"
                            />
                            <path
                              d="M9.64404 10.5997L9.67688 10.6124L9.64815 10.6295L9.64404 10.6039"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.68201 10.6128L9.71074 10.6213L9.69022 10.6383L9.68201 10.6128Z"
                              fill="black"
                            />
                            <path
                              d="M9.68201 10.6128L9.71074 10.6213L9.69022 10.6383L9.68201 10.6128Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.45839 10.8796C9.45839 10.8796 9.42886 10.8884 9.4162 10.9059C9.39933 10.9278 9.40354 10.9496 9.40354 10.9496C9.40354 10.9496 9.42886 10.9278 9.46683 10.9365L9.51745 10.9496L9.57229 10.9365C9.57229 10.9365 9.54276 10.9715 9.54276 10.9934L9.5512 11.0415C9.5512 11.0721 9.52589 11.1115 9.52589 11.1115L9.56808 11.0984C9.59405 11.092 9.61847 11.08 9.6398 11.0634L9.67776 11.0196C9.67776 11.0196 9.66933 11.0634 9.67776 11.0809L9.6862 11.1509L9.71995 11.1246C9.72839 11.1203 9.74948 11.1071 9.75792 11.094L9.77058 11.0503C9.77058 11.0503 9.77058 11.0853 9.78745 11.1071L9.81276 11.1771C9.81276 11.1771 9.82542 11.1421 9.83808 11.129C9.85073 11.1115 9.86761 11.094 9.86761 11.0853C9.86754 11.072 9.86613 11.0588 9.86339 11.0459L9.88026 11.0809M9.4162 11.1071C9.4162 11.1071 9.4373 11.0721 9.45839 11.0634L9.5048 11.0284L9.54276 11.0109M9.58495 11.2296L9.6398 11.1946C9.65625 11.1828 9.67054 11.168 9.68198 11.1509"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.13705 11.1727C9.13705 11.1727 9.12031 11.151 9.09101 11.1596C9.0617 11.1596 9.04077 11.1987 9.04077 11.1987C9.04077 11.1987 9.06589 11.19 9.08263 11.1944C9.09938 11.1987 9.10775 11.2117 9.10775 11.2117L9.12449 11.1944L9.13705 11.1683"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.13705 11.1727C9.13705 11.1727 9.12031 11.151 9.09101 11.1596C9.0617 11.1596 9.04077 11.1987 9.04077 11.1987C9.04077 11.1987 9.06589 11.19 9.08263 11.1944C9.09938 11.1987 9.10775 11.2117 9.10775 11.2117L9.12449 11.1944L9.13705 11.1683V11.1727Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.1036 11.2953C9.1036 11.2953 9.07848 11.2953 9.05755 11.3083C9.03662 11.3257 9.03662 11.3604 9.03662 11.3604C9.03662 11.3604 9.05337 11.343 9.07011 11.3474L9.10779 11.3561V11.33C9.11616 11.3127 9.1036 11.2953 9.1036 11.2953Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.1036 11.2953C9.1036 11.2953 9.07848 11.2953 9.05755 11.3083C9.03662 11.3257 9.03662 11.3604 9.03662 11.3604C9.03662 11.3604 9.05337 11.343 9.07011 11.3474L9.10779 11.3561V11.33C9.11616 11.3127 9.1036 11.2953 9.1036 11.2953Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.16309 11.409C9.16309 11.409 9.16309 11.4437 9.17564 11.4654C9.19239 11.4871 9.22169 11.4871 9.22169 11.4871L9.20913 11.4567C9.20913 11.4394 9.22169 11.422 9.22169 11.422C9.22169 11.422 9.20913 11.409 9.19239 11.409H9.16309Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.83809 11.4659C9.83809 11.4659 9.92246 11.5184 9.91824 11.5621C9.91824 11.6059 9.87606 11.6627 9.87606 11.6627M9.16309 11.409C9.16309 11.409 9.16309 11.444 9.17574 11.4659C9.19262 11.4877 9.22215 11.4877 9.22215 11.4877L9.20949 11.4571C9.20949 11.4396 9.22215 11.4221 9.22215 11.4221C9.22215 11.4221 9.20949 11.409 9.19262 11.409H9.16309Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.45768 11.7063C9.45768 11.7063 9.44094 11.6803 9.41163 11.6803C9.38233 11.6803 9.35303 11.7107 9.35303 11.7107C9.35303 11.7107 9.38652 11.7063 9.39489 11.7194L9.41582 11.7454L9.43675 11.7324L9.45768 11.7063Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.45768 11.7063C9.45768 11.7063 9.44094 11.6803 9.41163 11.6803C9.38233 11.6803 9.35303 11.7107 9.35303 11.7107C9.35303 11.7107 9.38652 11.7063 9.39489 11.7194L9.41582 11.7454L9.43675 11.7324L9.45768 11.7063Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.37345 11.8246C9.37345 11.8246 9.33159 11.8203 9.31484 11.8377C9.2981 11.8594 9.2981 11.8941 9.2981 11.8941C9.2981 11.8941 9.32321 11.8681 9.33996 11.8724C9.36089 11.8724 9.38182 11.8854 9.38182 11.8854V11.855L9.36926 11.8246"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.37345 11.8246C9.37345 11.8246 9.33159 11.8203 9.31484 11.8377C9.2981 11.8594 9.2981 11.8941 9.2981 11.8941C9.2981 11.8941 9.32321 11.8681 9.33996 11.8724C9.36089 11.8724 9.38182 11.8854 9.38182 11.8854V11.855L9.36926 11.8246H9.37345Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.44992 11.9471C9.44992 11.9471 9.43736 11.9775 9.44992 11.9949C9.46248 12.0166 9.49178 12.0296 9.49178 12.0296C9.49178 12.0296 9.47922 12.0123 9.48341 11.9949C9.48759 11.9819 9.51271 11.9602 9.51271 11.9602L9.4541 11.9515"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.44992 11.9471C9.44992 11.9471 9.43736 11.9775 9.44992 11.9949C9.46248 12.0166 9.49178 12.0296 9.49178 12.0296C9.49178 12.0296 9.47922 12.0123 9.48341 11.9949C9.48759 11.9819 9.51271 11.9602 9.51271 11.9602L9.4541 11.9515L9.44992 11.9471Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.95555 11.9996C9.95555 11.9996 9.92206 11.9909 9.90532 11.9996C9.88438 12.0126 9.87183 12.0604 9.87183 12.0604C9.87183 12.0604 9.90113 12.0343 9.92206 12.0387C9.94299 12.0387 9.96392 12.0517 9.96392 12.0517V12.017L9.95555 11.9996Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.95555 11.9996C9.95555 11.9996 9.92206 11.9909 9.90532 11.9996C9.88438 12.0126 9.87183 12.0604 9.87183 12.0604C9.87183 12.0604 9.90113 12.0343 9.92206 12.0387C9.94299 12.0387 9.96392 12.0517 9.96392 12.0517V12.017L9.95555 11.9996Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.97292 12.1265C9.97292 12.1265 9.9478 12.1526 9.95618 12.1743L9.98129 12.2177C9.98129 12.2177 9.98129 12.1873 9.98967 12.1743L10.0315 12.1613L10.0022 12.1395C9.99236 12.1355 9.98259 12.1311 9.97292 12.1265Z"
                              fill="#DB4446"
                            />
                            <path
                              d="M9.97292 12.1265C9.97292 12.1265 9.9478 12.1526 9.95618 12.1743L9.98129 12.2177C9.98129 12.2177 9.98129 12.1873 9.98967 12.1743L10.0315 12.1613L10.0022 12.1395C9.99236 12.1355 9.98259 12.1311 9.97292 12.1265Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.0997 12.1615C10.0997 12.1615 10.0871 12.1962 10.1081 12.2179C10.1332 12.2396 10.1499 12.2396 10.1499 12.2396C10.1499 12.2396 10.1374 12.2092 10.1415 12.1918C10.1457 12.1701 10.1625 12.1615 10.1625 12.1615L10.129 12.1528L10.0997 12.1658"
                              fill="#DB4446"
                            />
                            <path
                              d="M10.0997 12.1615C10.0997 12.1615 10.0871 12.1962 10.1081 12.2179C10.1332 12.2396 10.1499 12.2396 10.1499 12.2396C10.1499 12.2396 10.1374 12.2092 10.1415 12.1918C10.1457 12.1701 10.1625 12.1615 10.1625 12.1615L10.129 12.1528L10.0997 12.1658V12.1615Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.8087 14.4978C8.89308 14.524 8.93526 14.5853 8.93526 14.664C8.93526 14.7646 8.84245 14.839 8.72433 14.839C8.59776 14.839 8.50073 14.7646 8.50073 14.664C8.50073 14.5896 8.54292 14.5065 8.62729 14.4978L8.61886 14.4803L8.58933 14.4496H8.63995L8.6737 14.4715L8.6948 14.4409C8.70745 14.4234 8.72011 14.419 8.72011 14.419L8.74542 14.4453L8.75808 14.4671L8.78761 14.4496L8.82136 14.4365C8.82136 14.4365 8.82136 14.454 8.81292 14.4671L8.8087 14.4978Z"
                              fill="#FFD691"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M8.70332 14.9484C8.70332 14.9484 8.54301 14.8347 8.47129 14.8172C8.38691 14.7997 8.28145 14.8172 8.23926 14.8172C8.23926 14.8172 8.28988 14.8522 8.3152 14.8784C8.33629 14.9003 8.41223 14.944 8.45441 14.9572C8.58098 14.9922 8.70754 14.9484 8.70754 14.9484M8.74973 14.9572C8.74973 14.9572 8.85098 14.8478 8.96066 14.8303C9.08723 14.8128 9.1716 14.8434 9.22223 14.8565L9.15895 14.8915C9.13785 14.9047 9.07457 14.9572 8.9902 14.9615C8.90582 14.9615 8.80457 14.9484 8.7877 14.9528L8.74973 14.9572Z"
                              fill="#058E6E"
                            />
                            <path
                              d="M8.70332 14.9484C8.70332 14.9484 8.54301 14.8347 8.47129 14.8172C8.38691 14.7997 8.28145 14.8172 8.23926 14.8172C8.23926 14.8172 8.28988 14.8522 8.3152 14.8784C8.33629 14.9003 8.41223 14.944 8.45441 14.9572C8.58098 14.9922 8.70754 14.9484 8.70754 14.9484M8.74973 14.9572C8.74973 14.9572 8.85098 14.8478 8.96066 14.8303C9.08723 14.8128 9.1716 14.8434 9.22223 14.8565L9.15895 14.8915C9.13785 14.9047 9.07457 14.9572 8.9902 14.9615C8.90582 14.9615 8.80457 14.9484 8.7877 14.9528L8.74973 14.9572Z"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M8.72014 14.8215C8.69928 14.8019 8.68262 14.7779 8.67122 14.7511C8.65982 14.7244 8.65393 14.6955 8.65393 14.6662C8.65393 14.637 8.65982 14.6081 8.67122 14.5813C8.68262 14.5546 8.69928 14.5306 8.72014 14.5109C8.7402 14.5306 8.75616 14.5544 8.76704 14.5807C8.77793 14.607 8.7835 14.6354 8.78342 14.6641C8.78383 14.6934 8.77842 14.7225 8.76754 14.7496C8.75665 14.7767 8.74052 14.8012 8.72014 14.8215Z"
                              fill="#AD1519"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M8.67798 15.049C8.67798 15.049 8.70329 14.9834 8.70329 14.9309L8.69907 14.8391H8.73282C8.73282 14.8391 8.74548 14.8872 8.74548 14.9266L8.74126 15.0316L8.71173 15.0359L8.67798 15.049Z"
                              fill="#058E6E"
                              stroke="black"
                              stroke-width="0.0625"
                            />
                            <path
                              d="M10.7156 8.99806C10.7156 8.97636 10.7365 8.95465 10.7574 8.95465C10.7826 8.95465 10.8035 8.97636 10.8035 8.99806C10.8035 9.02411 10.7826 9.04148 10.7616 9.04148C10.7505 9.04148 10.7399 9.0369 10.732 9.02876C10.7242 9.02062 10.7198 9.00958 10.7198 8.99806"
                              fill="white"
                            />
                            <path
                              d="M10.7156 8.99806C10.7156 8.97636 10.7365 8.95465 10.7574 8.95465C10.7826 8.95465 10.8035 8.97636 10.8035 8.99806C10.8035 9.02411 10.7826 9.04148 10.7616 9.04148C10.7505 9.04148 10.7399 9.0369 10.732 9.02876C10.7242 9.02062 10.7198 9.00958 10.7198 8.99806H10.7156Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.7747 8.88869C10.7747 8.86264 10.7956 8.84528 10.8207 8.84528C10.8458 8.84528 10.8626 8.86264 10.8626 8.88869C10.8626 8.91474 10.8458 8.9321 10.8207 8.9321C10.8096 8.9321 10.799 8.92753 10.7911 8.91939C10.7833 8.91124 10.7788 8.9002 10.7788 8.88869"
                              fill="white"
                            />
                            <path
                              d="M10.7747 8.88869C10.7747 8.86264 10.7956 8.84528 10.8207 8.84528C10.8458 8.84528 10.8626 8.86264 10.8626 8.88869C10.8626 8.91474 10.8458 8.9321 10.8207 8.9321C10.8096 8.9321 10.799 8.92753 10.7911 8.91939C10.7833 8.91124 10.7788 8.9002 10.7788 8.88869H10.7747Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.8169 8.75746C10.8169 8.73576 10.8378 8.71405 10.8588 8.71405C10.8839 8.71405 10.9048 8.73576 10.9048 8.75746C10.9048 8.77917 10.8839 8.80087 10.8629 8.80087C10.8571 8.80148 10.8512 8.80081 10.8456 8.7989C10.8401 8.797 10.8349 8.7939 10.8306 8.7898C10.8263 8.78571 10.8228 8.78071 10.8204 8.77514C10.8181 8.76957 10.8169 8.76355 10.8169 8.75746Z"
                              fill="white"
                            />
                            <path
                              d="M10.8169 8.75746C10.8169 8.73576 10.8378 8.71405 10.8588 8.71405C10.8839 8.71405 10.9048 8.73576 10.9048 8.75746C10.9048 8.77917 10.8839 8.80087 10.8629 8.80087C10.8571 8.80148 10.8512 8.80081 10.8456 8.7989C10.8401 8.797 10.8349 8.7939 10.8306 8.7898C10.8263 8.78571 10.8228 8.78071 10.8204 8.77514C10.8181 8.76957 10.8169 8.76355 10.8169 8.75746Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.821 8.61745C10.821 8.59574 10.842 8.57404 10.8629 8.57404C10.888 8.57404 10.909 8.59574 10.909 8.61745C10.909 8.6435 10.888 8.66086 10.8671 8.66086C10.856 8.66086 10.8453 8.65629 10.8375 8.64814C10.8296 8.64 10.8252 8.62896 10.8252 8.61745"
                              fill="white"
                            />
                            <path
                              d="M10.821 8.61745C10.821 8.59574 10.842 8.57404 10.8629 8.57404C10.888 8.57404 10.909 8.59574 10.909 8.61745C10.909 8.6435 10.888 8.66086 10.8671 8.66086C10.856 8.66086 10.8453 8.65629 10.8375 8.64814C10.8296 8.64 10.8252 8.62896 10.8252 8.61745H10.821Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.7874 8.48616C10.7874 8.46011 10.8083 8.44275 10.8292 8.44275C10.8585 8.44275 10.8794 8.46011 10.8794 8.48616C10.8794 8.51221 10.8585 8.52957 10.8334 8.52957C10.8223 8.52957 10.8117 8.525 10.8038 8.51686C10.796 8.50872 10.7915 8.49767 10.7915 8.48616"
                              fill="white"
                            />
                            <path
                              d="M10.7874 8.48616C10.7874 8.46011 10.8083 8.44275 10.8292 8.44275C10.8585 8.44275 10.8794 8.46011 10.8794 8.48616C10.8794 8.51221 10.8585 8.52957 10.8334 8.52957C10.8223 8.52957 10.8117 8.525 10.8038 8.51686C10.796 8.50872 10.7915 8.49767 10.7915 8.48616H10.7874Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.7198 8.35933C10.7198 8.33762 10.7408 8.31592 10.7617 8.31592C10.791 8.31592 10.8078 8.33762 10.8078 8.35933C10.8078 8.38104 10.791 8.40274 10.7659 8.40274C10.7548 8.40274 10.7441 8.39817 10.7363 8.39003C10.7284 8.38189 10.724 8.37084 10.724 8.35933"
                              fill="white"
                            />
                            <path
                              d="M10.7198 8.35933C10.7198 8.33762 10.7408 8.31592 10.7617 8.31592C10.791 8.31592 10.8078 8.33762 10.8078 8.35933C10.8078 8.38104 10.791 8.40274 10.7659 8.40274C10.7548 8.40274 10.7441 8.39817 10.7363 8.39003C10.7284 8.38189 10.724 8.37084 10.724 8.35933H10.7198Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.6312 8.25868C10.6312 8.23264 10.648 8.21527 10.6731 8.21527C10.6982 8.21527 10.7149 8.23264 10.7149 8.25868C10.7149 8.28473 10.6982 8.3021 10.6731 8.3021C10.662 8.3021 10.6513 8.29752 10.6435 8.28938C10.6356 8.28124 10.6312 8.2702 10.6312 8.25868Z"
                              fill="white"
                            />
                            <path
                              d="M10.6312 8.25868C10.6312 8.23264 10.648 8.21527 10.6731 8.21527C10.6982 8.21527 10.7149 8.23264 10.7149 8.25868C10.7149 8.28473 10.6982 8.3021 10.6731 8.3021C10.662 8.3021 10.6513 8.29752 10.6435 8.28938C10.6356 8.28124 10.6312 8.2702 10.6312 8.25868Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.5216 8.17116C10.5216 8.14945 10.5425 8.12775 10.5677 8.12775C10.5788 8.12775 10.5894 8.13232 10.5973 8.14046C10.6051 8.1486 10.6095 8.15965 10.6095 8.17116C10.6095 8.18267 10.6051 8.19371 10.5973 8.20186C10.5894 8.21 10.5788 8.21457 10.5677 8.21457C10.5425 8.21457 10.5258 8.19721 10.5258 8.17116"
                              fill="white"
                            />
                            <path
                              d="M10.5216 8.17116C10.5216 8.14945 10.5425 8.12775 10.5677 8.12775C10.5788 8.12775 10.5894 8.13232 10.5973 8.14046C10.6051 8.1486 10.6095 8.15965 10.6095 8.17116C10.6095 8.18267 10.6051 8.19371 10.5973 8.20186C10.5894 8.21 10.5788 8.21457 10.5677 8.21457C10.5425 8.21457 10.5258 8.19721 10.5258 8.17116H10.5216Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.3992 8.10555C10.3992 8.0795 10.4159 8.06213 10.441 8.06213C10.4661 8.06213 10.4829 8.0795 10.4829 8.10555C10.4829 8.13159 10.4661 8.14896 10.441 8.14896C10.4299 8.14896 10.4193 8.14438 10.4114 8.13624C10.4036 8.1281 10.3992 8.11706 10.3992 8.10555Z"
                              fill="white"
                            />
                            <path
                              d="M10.3992 8.10555C10.3992 8.0795 10.4159 8.06213 10.441 8.06213C10.4661 8.06213 10.4829 8.0795 10.4829 8.10555C10.4829 8.13159 10.4661 8.14896 10.441 8.14896C10.4299 8.14896 10.4193 8.14438 10.4114 8.13624C10.4036 8.1281 10.3992 8.11706 10.3992 8.10555Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.2642 8.05306C10.2642 8.03135 10.2851 8.00964 10.3102 8.00964C10.3213 8.00964 10.332 8.01422 10.3398 8.02236C10.3477 8.0305 10.3521 8.04154 10.3521 8.05306C10.3521 8.06457 10.3477 8.07561 10.3398 8.08375C10.332 8.09189 10.3213 8.09647 10.3102 8.09647C10.2991 8.09647 10.2885 8.09189 10.2806 8.08375C10.2728 8.07561 10.2683 8.06457 10.2683 8.05306"
                              fill="white"
                            />
                            <path
                              d="M10.2642 8.05306C10.2642 8.03135 10.2851 8.00964 10.3102 8.00964C10.3213 8.00964 10.332 8.01422 10.3398 8.02236C10.3477 8.0305 10.3521 8.04154 10.3521 8.05306C10.3521 8.06457 10.3477 8.07561 10.3398 8.08375C10.332 8.09189 10.3213 8.09647 10.3102 8.09647C10.2991 8.09647 10.2885 8.09189 10.2806 8.08375C10.2728 8.07561 10.2683 8.06457 10.2683 8.05306H10.2642Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M10.1207 8.02681C10.1207 8.0051 10.1375 7.9834 10.1626 7.9834C10.1877 7.9834 10.2045 8.0051 10.2045 8.02681C10.2045 8.04852 10.1877 8.07022 10.1626 8.07022C10.1515 8.07022 10.1408 8.06565 10.133 8.05751C10.1251 8.04937 10.1207 8.03832 10.1207 8.02681Z"
                              fill="white"
                            />
                            <path
                              d="M10.1207 8.02681C10.1207 8.0051 10.1375 7.9834 10.1626 7.9834C10.1877 7.9834 10.2045 8.0051 10.2045 8.02681C10.2045 8.04852 10.1877 8.07022 10.1626 8.07022C10.1515 8.07022 10.1408 8.06565 10.133 8.05751C10.1251 8.04937 10.1207 8.03832 10.1207 8.02681Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.98157 8.01808C9.98157 7.99638 9.99831 7.97467 10.0234 7.97467C10.0485 7.97467 10.0653 7.99638 10.0653 8.01808C10.0653 8.03979 10.0485 8.06149 10.0234 8.06149C10.0123 8.06149 10.0017 8.05692 9.99383 8.04878C9.98598 8.04064 9.98157 8.0296 9.98157 8.01808Z"
                              fill="white"
                            />
                            <path
                              d="M9.98157 8.01808C9.98157 7.99638 9.99831 7.97467 10.0234 7.97467C10.0485 7.97467 10.0653 7.99638 10.0653 8.01808C10.0653 8.03979 10.0485 8.06149 10.0234 8.06149C10.0123 8.06149 10.0017 8.05692 9.99383 8.04878C9.98598 8.04064 9.98157 8.0296 9.98157 8.01808Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.84229 8.02681C9.84229 8.00076 9.86322 7.9834 9.88415 7.9834C9.91345 7.9834 9.93019 8.00076 9.93019 8.02681C9.93019 8.05286 9.91345 8.07022 9.88833 8.07022C9.87723 8.07022 9.86658 8.06565 9.85873 8.05751C9.85088 8.04937 9.84647 8.03832 9.84647 8.02681"
                              fill="white"
                            />
                            <path
                              d="M9.84229 8.02681C9.84229 8.00076 9.86322 7.9834 9.88415 7.9834C9.91345 7.9834 9.93019 8.00076 9.93019 8.02681C9.93019 8.05286 9.91345 8.07022 9.88833 8.07022C9.87723 8.07022 9.86658 8.06565 9.85873 8.05751C9.85088 8.04937 9.84647 8.03832 9.84647 8.02681H9.84229Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.7074 8.02681C9.7074 8.00076 9.72833 7.9834 9.74926 7.9834C9.77438 7.9834 9.79531 8.00076 9.79531 8.02681C9.79531 8.05286 9.77438 8.07022 9.75345 8.07022C9.74761 8.07083 9.74171 8.07016 9.73614 8.06825C9.73057 8.06635 9.72544 8.06324 9.7211 8.05915C9.71676 8.05506 9.71329 8.05006 9.71093 8.04449C9.70857 8.03892 9.70737 8.0329 9.7074 8.02681Z"
                              fill="white"
                            />
                            <path
                              d="M9.7074 8.02681C9.7074 8.00076 9.72833 7.9834 9.74926 7.9834C9.77438 7.9834 9.79531 8.00076 9.79531 8.02681C9.79531 8.05286 9.77438 8.07022 9.75345 8.07022C9.74761 8.07083 9.74171 8.07016 9.73614 8.06825C9.73057 8.06635 9.72544 8.06324 9.7211 8.05915C9.71676 8.05506 9.71329 8.05006 9.71093 8.04449C9.70857 8.03892 9.70737 8.0329 9.7074 8.02681Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.7748 8.14525C9.7748 8.12338 9.7959 8.1015 9.81699 8.1015C9.84652 8.1015 9.8634 8.12338 9.8634 8.14525C9.8634 8.16713 9.84652 8.189 9.82121 8.189C9.81002 8.189 9.79929 8.18439 9.79138 8.17619C9.78347 8.16798 9.77902 8.15685 9.77902 8.14525M9.80434 8.28088C9.80434 8.25463 9.82121 8.23713 9.84652 8.23713C9.87184 8.23713 9.88871 8.25463 9.88871 8.28088C9.88871 8.30275 9.87184 8.32463 9.84652 8.32463C9.83533 8.32463 9.8246 8.32002 9.81669 8.31181C9.80878 8.30361 9.80434 8.29248 9.80434 8.28088ZM9.80434 8.41213C9.80434 8.39025 9.82965 8.36838 9.85074 8.36838C9.86193 8.36838 9.87266 8.37299 9.88057 8.38119C9.88849 8.3894 9.89293 8.40052 9.89293 8.41213C9.89293 8.42373 9.88849 8.43486 9.88057 8.44306C9.87266 8.45127 9.86193 8.45588 9.85074 8.45588C9.83955 8.45588 9.82882 8.45127 9.82091 8.44306C9.813 8.43486 9.80855 8.42373 9.80855 8.41213M9.76637 8.53463C9.76637 8.51275 9.78746 8.49088 9.80855 8.49088C9.83809 8.49088 9.85496 8.51275 9.85496 8.53463C9.85496 8.56088 9.83809 8.57838 9.81277 8.57838C9.80158 8.57838 9.79085 8.57377 9.78294 8.56556C9.77503 8.55736 9.77059 8.54623 9.77059 8.53463M9.69043 8.64838C9.69043 8.6265 9.71152 8.60463 9.73262 8.60463C9.76215 8.60463 9.78324 8.6265 9.78324 8.64838C9.78324 8.67025 9.76215 8.69213 9.73684 8.69213C9.71152 8.69213 9.69465 8.67463 9.69465 8.64838"
                              fill="white"
                            />
                            <path
                              d="M9.7748 8.14525C9.7748 8.12338 9.7959 8.1015 9.81699 8.1015C9.84652 8.1015 9.8634 8.12338 9.8634 8.14525C9.8634 8.16713 9.84652 8.189 9.82121 8.189C9.81002 8.189 9.79929 8.18439 9.79138 8.17619C9.78347 8.16798 9.77902 8.15685 9.77902 8.14525M9.80434 8.41213C9.80434 8.39025 9.82965 8.36838 9.85074 8.36838C9.86193 8.36838 9.87266 8.37299 9.88057 8.38119C9.88849 8.3894 9.89293 8.40052 9.89293 8.41213C9.89293 8.42373 9.88849 8.43486 9.88057 8.44306C9.87266 8.45127 9.86193 8.45588 9.85074 8.45588C9.83955 8.45588 9.82882 8.45127 9.82091 8.44306C9.813 8.43486 9.80855 8.42373 9.80855 8.41213M9.76637 8.53463C9.76637 8.51275 9.78746 8.49088 9.80855 8.49088C9.83809 8.49088 9.85496 8.51275 9.85496 8.53463C9.85496 8.56088 9.83809 8.57838 9.81277 8.57838C9.80158 8.57838 9.79085 8.57377 9.78294 8.56556C9.77503 8.55736 9.77059 8.54623 9.77059 8.53463M9.69043 8.64838C9.69043 8.6265 9.71152 8.60463 9.73262 8.60463C9.76215 8.60463 9.78324 8.6265 9.78324 8.64838C9.78324 8.67025 9.76215 8.69213 9.73684 8.69213C9.71152 8.69213 9.69465 8.67463 9.69465 8.64838M9.80434 8.28088C9.80434 8.25463 9.82121 8.23713 9.84652 8.23713C9.87184 8.23713 9.88871 8.25463 9.88871 8.28088C9.88871 8.30275 9.87184 8.32463 9.84652 8.32463C9.83533 8.32463 9.8246 8.32002 9.81669 8.31181C9.80878 8.30361 9.80434 8.29248 9.80434 8.28088Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.60193 7.93929C9.60193 7.91758 9.62286 7.89587 9.64798 7.89587C9.65908 7.89587 9.66973 7.90045 9.67758 7.90859C9.68543 7.91673 9.68984 7.92777 9.68984 7.93929C9.68984 7.9508 9.68543 7.96184 9.67758 7.96998C9.66973 7.97812 9.65908 7.9827 9.64798 7.9827C9.63687 7.9827 9.62623 7.97812 9.61838 7.96998C9.61052 7.96184 9.60611 7.9508 9.60611 7.93929"
                              fill="white"
                            />
                            <path
                              d="M9.60193 7.93929C9.60193 7.91758 9.62286 7.89587 9.64798 7.89587C9.65908 7.89587 9.66973 7.90045 9.67758 7.90859C9.68543 7.91673 9.68984 7.92777 9.68984 7.93929C9.68984 7.9508 9.68543 7.96184 9.67758 7.96998C9.66973 7.97812 9.65908 7.9827 9.64798 7.9827C9.63687 7.9827 9.62623 7.97812 9.61838 7.96998C9.61052 7.96184 9.60611 7.9508 9.60611 7.93929H9.60193Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.48376 7.87367C9.48376 7.84763 9.50051 7.83026 9.52563 7.83026C9.55074 7.83026 9.56749 7.84763 9.56749 7.87367C9.56749 7.89972 9.55074 7.91709 9.52563 7.91709C9.51452 7.91709 9.50388 7.91251 9.49603 7.90437C9.48818 7.89623 9.48376 7.88519 9.48376 7.87367Z"
                              fill="white"
                            />
                            <path
                              d="M9.48376 7.87367C9.48376 7.84763 9.50051 7.83026 9.52563 7.83026C9.55074 7.83026 9.56749 7.84763 9.56749 7.87367C9.56749 7.89972 9.55074 7.91709 9.52563 7.91709C9.51452 7.91709 9.50388 7.91251 9.49603 7.90437C9.48818 7.89623 9.48376 7.88519 9.48376 7.87367Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.34875 7.82991C9.34875 7.80386 9.36969 7.7865 9.39062 7.7865C9.41573 7.7865 9.43666 7.80386 9.43666 7.82991C9.43666 7.85162 9.41573 7.87332 9.3948 7.87332C9.36969 7.87332 9.34875 7.85162 9.34875 7.82991Z"
                              fill="white"
                            />
                            <path
                              d="M9.34875 7.82991C9.34875 7.80386 9.36969 7.7865 9.39062 7.7865C9.41573 7.7865 9.43666 7.80386 9.43666 7.82991C9.43666 7.85162 9.41573 7.87332 9.3948 7.87332C9.36969 7.87332 9.34875 7.85162 9.34875 7.82991Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.20947 7.80367C9.20947 7.78196 9.2304 7.76025 9.25133 7.76025C9.27645 7.76025 9.29738 7.78196 9.29738 7.80367C9.29738 7.82537 9.27645 7.84708 9.25552 7.84708C9.24968 7.84769 9.24379 7.84702 9.23821 7.84511C9.23264 7.8432 9.22752 7.8401 9.22318 7.83601C9.21883 7.83191 9.21537 7.82692 9.21301 7.82135C9.21065 7.81578 9.20944 7.80975 9.20947 7.80367Z"
                              fill="white"
                            />
                            <path
                              d="M9.20947 7.80367C9.20947 7.78196 9.2304 7.76025 9.25133 7.76025C9.27645 7.76025 9.29738 7.78196 9.29738 7.80367C9.29738 7.82537 9.27645 7.84708 9.25552 7.84708C9.24968 7.84769 9.24379 7.84702 9.23821 7.84511C9.23264 7.8432 9.22752 7.8401 9.22318 7.83601C9.21883 7.83191 9.21537 7.82692 9.21301 7.82135C9.21065 7.81578 9.20944 7.80975 9.20947 7.80367Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M9.07031 7.80806C9.07031 7.78201 9.09124 7.76465 9.11636 7.76465C9.14148 7.76465 9.15822 7.78201 9.15822 7.80806C9.15822 7.82977 9.14148 7.85147 9.11636 7.85147C9.10526 7.85147 9.09461 7.8469 9.08676 7.83876C9.07891 7.83062 9.0745 7.81957 9.0745 7.80806"
                              fill="white"
                            />
                            <path
                              d="M9.07031 7.80806C9.07031 7.78201 9.09124 7.76465 9.11636 7.76465C9.14148 7.76465 9.15822 7.78201 9.15822 7.80806C9.15822 7.82977 9.14148 7.85147 9.11636 7.85147C9.10526 7.85147 9.09461 7.8469 9.08676 7.83876C9.07891 7.83062 9.0745 7.81957 9.0745 7.80806H9.07031Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.93115 7.82991C8.93115 7.80821 8.95208 7.7865 8.97301 7.7865C9.00232 7.7865 9.01906 7.80821 9.01906 7.82991C9.01906 7.85162 9.00232 7.87332 8.9772 7.87332C8.9661 7.87332 8.95545 7.86875 8.9476 7.86061C8.93975 7.85247 8.93534 7.84142 8.93534 7.82991"
                              fill="white"
                            />
                            <path
                              d="M8.93115 7.82991C8.93115 7.80821 8.95208 7.7865 8.97301 7.7865C9.00232 7.7865 9.01906 7.80821 9.01906 7.82991C9.01906 7.85162 9.00232 7.87332 8.9772 7.87332C8.9661 7.87332 8.95545 7.86875 8.9476 7.86061C8.93975 7.85247 8.93534 7.84142 8.93534 7.82991H8.93115Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.80029 7.87807C8.80029 7.85636 8.82122 7.83466 8.84216 7.83466C8.86727 7.83466 8.8882 7.85636 8.8882 7.87807C8.8882 7.89977 8.86727 7.92148 8.84634 7.92148C8.8405 7.92209 8.83461 7.92142 8.82903 7.91951C8.82346 7.9176 8.81834 7.9145 8.81399 7.91041C8.80965 7.90631 8.80619 7.90132 8.80383 7.89575C8.80147 7.89018 8.80026 7.88415 8.80029 7.87807Z"
                              fill="white"
                            />
                            <path
                              d="M8.80029 7.87807C8.80029 7.85636 8.82122 7.83466 8.84216 7.83466C8.86727 7.83466 8.8882 7.85636 8.8882 7.87807C8.8882 7.89977 8.86727 7.92148 8.84634 7.92148C8.8405 7.92209 8.83461 7.92142 8.82903 7.91951C8.82346 7.9176 8.81834 7.9145 8.81399 7.91041C8.80965 7.90631 8.80619 7.90132 8.80383 7.89575C8.80147 7.89018 8.80026 7.88415 8.80029 7.87807Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.5813 8.99806C6.5813 8.97636 6.59804 8.95465 6.62316 8.95465C6.64828 8.95465 6.66502 8.97636 6.66502 8.99806C6.66502 9.02411 6.64828 9.04148 6.62316 9.04148C6.61206 9.04148 6.60141 9.0369 6.59356 9.02876C6.58571 9.02062 6.5813 9.00958 6.5813 8.99806Z"
                              fill="white"
                            />
                            <path
                              d="M6.5813 8.99806C6.5813 8.97636 6.59804 8.95465 6.62316 8.95465C6.64828 8.95465 6.66502 8.97636 6.66502 8.99806C6.66502 9.02411 6.64828 9.04148 6.62316 9.04148C6.61206 9.04148 6.60141 9.0369 6.59356 9.02876C6.58571 9.02062 6.5813 9.00958 6.5813 8.99806Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.51794 8.88869C6.51794 8.86264 6.53888 8.84528 6.55981 8.84528C6.58492 8.84528 6.60167 8.86264 6.60167 8.88869C6.60167 8.91474 6.58492 8.9321 6.55981 8.9321C6.5487 8.9321 6.53806 8.92753 6.53021 8.91939C6.52235 8.91124 6.51794 8.9002 6.51794 8.88869Z"
                              fill="white"
                            />
                            <path
                              d="M6.51794 8.88869C6.51794 8.86264 6.53888 8.84528 6.55981 8.84528C6.58492 8.84528 6.60167 8.86264 6.60167 8.88869C6.60167 8.91474 6.58492 8.9321 6.55981 8.9321C6.5487 8.9321 6.53806 8.92753 6.53021 8.91939C6.52235 8.91124 6.51794 8.9002 6.51794 8.88869Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.47583 8.75746C6.47583 8.73576 6.49676 8.71405 6.51769 8.71405C6.547 8.71405 6.56374 8.73576 6.56374 8.75746C6.56374 8.77917 6.547 8.80087 6.52188 8.80087C6.51078 8.80087 6.50013 8.7963 6.49228 8.78816C6.48443 8.78002 6.48002 8.76898 6.48002 8.75746"
                              fill="white"
                            />
                            <path
                              d="M6.47583 8.75746C6.47583 8.73576 6.49676 8.71405 6.51769 8.71405C6.547 8.71405 6.56374 8.73576 6.56374 8.75746C6.56374 8.77917 6.547 8.80087 6.52188 8.80087C6.51078 8.80087 6.50013 8.7963 6.49228 8.78816C6.48443 8.78002 6.48002 8.76898 6.48002 8.75746H6.47583Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.47156 8.61745C6.47156 8.59574 6.49249 8.57404 6.51342 8.57404C6.53854 8.57404 6.55947 8.59574 6.55947 8.61745C6.55947 8.6435 6.53854 8.66086 6.51761 8.66086C6.5065 8.66086 6.49586 8.65629 6.48801 8.64814C6.48015 8.64 6.47574 8.62896 6.47574 8.61745"
                              fill="white"
                            />
                            <path
                              d="M6.47156 8.61745C6.47156 8.59574 6.49249 8.57404 6.51342 8.57404C6.53854 8.57404 6.55947 8.59574 6.55947 8.61745C6.55947 8.6435 6.53854 8.66086 6.51761 8.66086C6.5065 8.66086 6.49586 8.65629 6.48801 8.64814C6.48015 8.64 6.47574 8.62896 6.47574 8.61745H6.47156Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.50537 8.48616C6.50537 8.46011 6.5263 8.44275 6.54723 8.44275C6.57235 8.44275 6.58909 8.46011 6.58909 8.48616C6.58909 8.51221 6.57235 8.52957 6.54723 8.52957C6.53613 8.52957 6.52548 8.525 6.51763 8.51686C6.50978 8.50872 6.50537 8.49767 6.50537 8.48616Z"
                              fill="white"
                            />
                            <path
                              d="M6.50537 8.48616C6.50537 8.46011 6.5263 8.44275 6.54723 8.44275C6.57235 8.44275 6.58909 8.46011 6.58909 8.48616C6.58909 8.51221 6.57235 8.52957 6.54723 8.52957C6.53613 8.52957 6.52548 8.525 6.51763 8.51686C6.50978 8.50872 6.50537 8.49767 6.50537 8.48616Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.57275 8.35933C6.57275 8.33762 6.59368 8.31592 6.61462 8.31592C6.63973 8.31592 6.66066 8.33762 6.66066 8.35933C6.66066 8.38104 6.63973 8.40274 6.6188 8.40274C6.6077 8.40274 6.59705 8.39817 6.5892 8.39003C6.58135 8.38189 6.57694 8.37084 6.57694 8.35933"
                              fill="white"
                            />
                            <path
                              d="M6.57275 8.35933C6.57275 8.33762 6.59368 8.31592 6.61462 8.31592C6.63973 8.31592 6.66066 8.33762 6.66066 8.35933C6.66066 8.38104 6.63973 8.40274 6.6188 8.40274C6.6077 8.40274 6.59705 8.39817 6.5892 8.39003C6.58135 8.38189 6.57694 8.37084 6.57694 8.35933H6.57275Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.66565 8.25868C6.66565 8.23264 6.68239 8.21527 6.70751 8.21527C6.73263 8.21527 6.74937 8.23264 6.74937 8.25868C6.74937 8.28473 6.73263 8.3021 6.70751 8.3021C6.69641 8.3021 6.68576 8.29752 6.67791 8.28938C6.67006 8.28124 6.66565 8.2702 6.66565 8.25868Z"
                              fill="white"
                            />
                            <path
                              d="M6.66565 8.25868C6.66565 8.23264 6.68239 8.21527 6.70751 8.21527C6.73263 8.21527 6.74937 8.23264 6.74937 8.25868C6.74937 8.28473 6.73263 8.3021 6.70751 8.3021C6.69641 8.3021 6.68576 8.29752 6.67791 8.28938C6.67006 8.28124 6.66565 8.2702 6.66565 8.25868Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.77112 8.17116C6.77112 8.14945 6.78786 8.12775 6.81298 8.12775C6.8381 8.12775 6.85484 8.14945 6.85484 8.17116C6.85484 8.19286 6.8381 8.21457 6.81298 8.21457C6.80188 8.21457 6.79123 8.21 6.78338 8.20186C6.77553 8.19371 6.77112 8.18267 6.77112 8.17116Z"
                              fill="white"
                            />
                            <path
                              d="M6.77112 8.17116C6.77112 8.14945 6.78786 8.12775 6.81298 8.12775C6.8381 8.12775 6.85484 8.14945 6.85484 8.17116C6.85484 8.19286 6.8381 8.21457 6.81298 8.21457C6.80188 8.21457 6.79123 8.21 6.78338 8.20186C6.77553 8.19371 6.77112 8.18267 6.77112 8.17116Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M6.89771 8.10555C6.89771 8.0795 6.91445 8.06213 6.93957 8.06213C6.96468 8.06213 6.98143 8.0795 6.98143 8.10555C6.98143 8.13159 6.96468 8.14896 6.93957 8.14896C6.92846 8.14896 6.91782 8.14438 6.90997 8.13624C6.90212 8.1281 6.89771 8.11706 6.89771 8.10555Z"
                              fill="white"
                            />
                            <path
                              d="M6.89771 8.10555C6.89771 8.0795 6.91445 8.06213 6.93957 8.06213C6.96468 8.06213 6.98143 8.0795 6.98143 8.10555C6.98143 8.13159 6.96468 8.14896 6.93957 8.14896C6.92846 8.14896 6.91782 8.14438 6.90997 8.13624C6.90212 8.1281 6.89771 8.11706 6.89771 8.10555Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.02844 8.05306C7.02844 8.03135 7.04937 8.00964 7.0703 8.00964C7.08141 8.00964 7.09205 8.01422 7.0999 8.02236C7.10776 8.0305 7.11217 8.04154 7.11217 8.05306C7.11217 8.06457 7.10776 8.07561 7.0999 8.08375C7.09205 8.09189 7.08141 8.09647 7.0703 8.09647C7.0592 8.09647 7.04855 8.09189 7.0407 8.08375C7.03285 8.07561 7.02844 8.06457 7.02844 8.05306Z"
                              fill="white"
                            />
                            <path
                              d="M7.02844 8.05306C7.02844 8.03135 7.04937 8.00964 7.0703 8.00964C7.08141 8.00964 7.09205 8.01422 7.0999 8.02236C7.10776 8.0305 7.11217 8.04154 7.11217 8.05306C7.11217 8.06457 7.10776 8.07561 7.0999 8.08375C7.09205 8.09189 7.08141 8.09647 7.0703 8.09647C7.0592 8.09647 7.04855 8.09189 7.0407 8.08375C7.03285 8.07561 7.02844 8.06457 7.02844 8.05306Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.17188 8.02681C7.17188 8.0051 7.19281 7.9834 7.21792 7.9834C7.22903 7.9834 7.23967 7.98797 7.24752 7.99611C7.25537 8.00425 7.25978 8.0153 7.25978 8.02681C7.25978 8.03832 7.25537 8.04937 7.24752 8.05751C7.23967 8.06565 7.22903 8.07022 7.21792 8.07022C7.19281 8.07022 7.17606 8.05286 7.17606 8.02681"
                              fill="white"
                            />
                            <path
                              d="M7.17188 8.02681C7.17188 8.0051 7.19281 7.9834 7.21792 7.9834C7.22903 7.9834 7.23967 7.98797 7.24752 7.99611C7.25537 8.00425 7.25978 8.0153 7.25978 8.02681C7.25978 8.03832 7.25537 8.04937 7.24752 8.05751C7.23967 8.06565 7.22903 8.07022 7.21792 8.07022C7.19281 8.07022 7.17606 8.05286 7.17606 8.02681H7.17188Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.31531 8.01808C7.31531 7.99638 7.33205 7.97467 7.35717 7.97467C7.38229 7.97467 7.39903 7.99638 7.39903 8.01808C7.39903 8.03979 7.38229 8.06149 7.35717 8.06149C7.34607 8.06149 7.33542 8.05692 7.32757 8.04878C7.31972 8.04064 7.31531 8.0296 7.31531 8.01808Z"
                              fill="white"
                            />
                            <path
                              d="M7.31531 8.01808C7.31531 7.99638 7.33205 7.97467 7.35717 7.97467C7.38229 7.97467 7.39903 7.99638 7.39903 8.01808C7.39903 8.03979 7.38229 8.06149 7.35717 8.06149C7.34607 8.06149 7.33542 8.05692 7.32757 8.04878C7.31972 8.04064 7.31531 8.0296 7.31531 8.01808Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.45032 8.02681C7.45032 8.00076 7.47125 7.9834 7.49218 7.9834C7.5173 7.9834 7.53823 8.00076 7.53823 8.02681C7.53823 8.05286 7.5173 8.07022 7.49637 8.07022C7.49053 8.07083 7.48463 8.07016 7.47906 8.06825C7.47349 8.06635 7.46836 8.06324 7.46402 8.05915C7.45968 8.05506 7.45621 8.05006 7.45385 8.04449C7.45149 8.03892 7.45029 8.0329 7.45032 8.02681Z"
                              fill="white"
                            />
                            <path
                              d="M7.45032 8.02681C7.45032 8.00076 7.47125 7.9834 7.49218 7.9834C7.5173 7.9834 7.53823 8.00076 7.53823 8.02681C7.53823 8.05286 7.5173 8.07022 7.49637 8.07022C7.49053 8.07083 7.48463 8.07016 7.47906 8.06825C7.47349 8.06635 7.46836 8.06324 7.46402 8.05915C7.45968 8.05506 7.45621 8.05006 7.45385 8.04449C7.45149 8.03892 7.45029 8.0329 7.45032 8.02681Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.58533 8.02681C7.58533 8.00076 7.60626 7.9834 7.62719 7.9834C7.65649 7.9834 7.67742 8.00076 7.67742 8.02681C7.67742 8.05286 7.65649 8.07022 7.63137 8.07022C7.62027 8.07022 7.60962 8.06565 7.60177 8.05751C7.59392 8.04937 7.58951 8.03832 7.58951 8.02681"
                              fill="white"
                            />
                            <path
                              d="M7.58533 8.02681C7.58533 8.00076 7.60626 7.9834 7.62719 7.9834C7.65649 7.9834 7.67742 8.00076 7.67742 8.02681C7.67742 8.05286 7.65649 8.07022 7.63137 8.07022C7.62027 8.07022 7.60962 8.06565 7.60177 8.05751C7.59392 8.04937 7.58951 8.03832 7.58951 8.02681H7.58533Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.51776 8.14525C7.51776 8.12338 7.53885 8.1015 7.55995 8.1015C7.58948 8.1015 7.60635 8.12338 7.60635 8.14525C7.60635 8.16713 7.58948 8.189 7.56417 8.189C7.55298 8.189 7.54225 8.18439 7.53433 8.17619C7.52642 8.16798 7.52198 8.15685 7.52198 8.14525M7.49245 8.28088C7.49245 8.25463 7.50932 8.23713 7.53463 8.23713C7.55995 8.23713 7.57682 8.25463 7.57682 8.28088C7.57682 8.30275 7.55995 8.32463 7.53463 8.32463C7.52345 8.32463 7.51271 8.32002 7.5048 8.31181C7.49689 8.30361 7.49245 8.29248 7.49245 8.28088ZM7.48401 8.41213C7.48401 8.39025 7.5051 8.36838 7.5262 8.36838C7.55573 8.36838 7.5726 8.39025 7.5726 8.41213C7.5726 8.434 7.55573 8.45588 7.53042 8.45588C7.51923 8.45588 7.5085 8.45127 7.50058 8.44306C7.49267 8.43486 7.48823 8.42373 7.48823 8.41213M7.5262 8.53463C7.5262 8.51275 7.54729 8.49088 7.56838 8.49088C7.5937 8.49088 7.61479 8.51275 7.61479 8.53463C7.61479 8.56088 7.5937 8.57838 7.5726 8.57838C7.56672 8.57899 7.56078 8.57831 7.55516 8.57639C7.54954 8.57447 7.54438 8.57134 7.54 8.56722C7.53563 8.56309 7.53214 8.55806 7.52976 8.55245C7.52738 8.54683 7.52617 8.54076 7.5262 8.53463ZM7.60213 8.64838C7.60213 8.6265 7.62323 8.60463 7.64432 8.60463C7.65551 8.60463 7.66624 8.60924 7.67415 8.61744C7.68206 8.62565 7.68651 8.63677 7.68651 8.64838C7.68651 8.65998 7.68206 8.67111 7.67415 8.67931C7.66624 8.68752 7.65551 8.69213 7.64432 8.69213C7.63313 8.69213 7.6224 8.68752 7.61449 8.67931C7.60658 8.67111 7.60213 8.65998 7.60213 8.64838Z"
                              fill="white"
                            />
                            <path
                              d="M7.51776 8.14525C7.51776 8.12338 7.53885 8.1015 7.55995 8.1015C7.58948 8.1015 7.60635 8.12338 7.60635 8.14525C7.60635 8.16713 7.58948 8.189 7.56417 8.189C7.55298 8.189 7.54225 8.18439 7.53433 8.17619C7.52642 8.16798 7.52198 8.15685 7.52198 8.14525M7.48401 8.41213C7.48401 8.39025 7.5051 8.36838 7.5262 8.36838C7.55573 8.36838 7.5726 8.39025 7.5726 8.41213C7.5726 8.434 7.55573 8.45588 7.53042 8.45588C7.51923 8.45588 7.5085 8.45127 7.50058 8.44306C7.49267 8.43486 7.48823 8.42373 7.48823 8.41213M7.49245 8.28088C7.49245 8.25463 7.50932 8.23713 7.53463 8.23713C7.55995 8.23713 7.57682 8.25463 7.57682 8.28088C7.57682 8.30275 7.55995 8.32463 7.53463 8.32463C7.52345 8.32463 7.51271 8.32002 7.5048 8.31181C7.49689 8.30361 7.49245 8.29248 7.49245 8.28088ZM7.5262 8.53463C7.5262 8.51275 7.54729 8.49088 7.56838 8.49088C7.5937 8.49088 7.61479 8.51275 7.61479 8.53463C7.61479 8.56088 7.5937 8.57838 7.5726 8.57838C7.56672 8.57899 7.56078 8.57831 7.55516 8.57639C7.54954 8.57447 7.54438 8.57134 7.54 8.56722C7.53563 8.56309 7.53214 8.55806 7.52976 8.55245C7.52738 8.54683 7.52617 8.54076 7.5262 8.53463ZM7.60213 8.64838C7.60213 8.6265 7.62323 8.60463 7.64432 8.60463C7.65551 8.60463 7.66624 8.60924 7.67415 8.61744C7.68206 8.62565 7.68651 8.63677 7.68651 8.64838C7.68651 8.65998 7.68206 8.67111 7.67415 8.67931C7.66624 8.68752 7.65551 8.69213 7.64432 8.69213C7.63313 8.69213 7.6224 8.68752 7.61449 8.67931C7.60658 8.67111 7.60213 8.65998 7.60213 8.64838Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.6908 7.93929C7.6908 7.91758 7.71173 7.89587 7.73266 7.89587C7.74376 7.89587 7.75441 7.90045 7.76226 7.90859C7.77011 7.91673 7.77452 7.92777 7.77452 7.93929C7.77452 7.9508 7.77011 7.96184 7.76226 7.96998C7.75441 7.97812 7.74376 7.9827 7.73266 7.9827C7.72156 7.9827 7.71091 7.97812 7.70306 7.96998C7.69521 7.96184 7.6908 7.9508 7.6908 7.93929Z"
                              fill="white"
                            />
                            <path
                              d="M7.6908 7.93929C7.6908 7.91758 7.71173 7.89587 7.73266 7.89587C7.74376 7.89587 7.75441 7.90045 7.76226 7.90859C7.77011 7.91673 7.77452 7.92777 7.77452 7.93929C7.77452 7.9508 7.77011 7.96184 7.76226 7.96998C7.75441 7.97812 7.74376 7.9827 7.73266 7.9827C7.72156 7.9827 7.71091 7.97812 7.70306 7.96998C7.69521 7.96184 7.6908 7.9508 7.6908 7.93929Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.81311 7.87367C7.81311 7.84763 7.82986 7.83026 7.85497 7.83026C7.88009 7.83026 7.89683 7.84763 7.89683 7.87367C7.89683 7.89972 7.88009 7.91709 7.85497 7.91709C7.84387 7.91709 7.83322 7.91251 7.82537 7.90437C7.81752 7.89623 7.81311 7.88519 7.81311 7.87367Z"
                              fill="white"
                            />
                            <path
                              d="M7.81311 7.87367C7.81311 7.84763 7.82986 7.83026 7.85497 7.83026C7.88009 7.83026 7.89683 7.84763 7.89683 7.87367C7.89683 7.89972 7.88009 7.91709 7.85497 7.91709C7.84387 7.91709 7.83322 7.91251 7.82537 7.90437C7.81752 7.89623 7.81311 7.88519 7.81311 7.87367Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.94385 7.82991C7.94385 7.80386 7.96478 7.7865 7.98571 7.7865C8.01501 7.7865 8.03176 7.80386 8.03176 7.82991C8.03176 7.85162 8.01501 7.87332 7.9899 7.87332C7.96478 7.87332 7.94803 7.85162 7.94803 7.82991"
                              fill="white"
                            />
                            <path
                              d="M7.94385 7.82991C7.94385 7.80386 7.96478 7.7865 7.98571 7.7865C8.01501 7.7865 8.03176 7.80386 8.03176 7.82991C8.03176 7.85162 8.01501 7.87332 7.9899 7.87332C7.96478 7.87332 7.94803 7.85162 7.94803 7.82991H7.94385Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.08313 7.80367C8.08313 7.78196 8.10406 7.76025 8.12499 7.76025C8.15429 7.76025 8.17104 7.78196 8.17104 7.80367C8.17104 7.82537 8.15429 7.84708 8.12918 7.84708C8.11807 7.84708 8.10743 7.8425 8.09958 7.83436C8.09173 7.82622 8.08732 7.81518 8.08732 7.80367"
                              fill="white"
                            />
                            <path
                              d="M8.08313 7.80367C8.08313 7.78196 8.10406 7.76025 8.12499 7.76025C8.15429 7.76025 8.17104 7.78196 8.17104 7.80367C8.17104 7.82537 8.15429 7.84708 8.12918 7.84708C8.11807 7.84708 8.10743 7.8425 8.09958 7.83436C8.09173 7.82622 8.08732 7.81518 8.08732 7.80367H8.08313Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.22229 7.80806C8.22229 7.78201 8.23903 7.76465 8.26415 7.76465C8.28927 7.76465 8.30601 7.78201 8.30601 7.80806C8.30601 7.82977 8.28927 7.85147 8.26415 7.85147C8.25305 7.85147 8.2424 7.8469 8.23455 7.83876C8.2267 7.83062 8.22229 7.81957 8.22229 7.80806Z"
                              fill="white"
                            />
                            <path
                              d="M8.22229 7.80806C8.22229 7.78201 8.23903 7.76465 8.26415 7.76465C8.28927 7.76465 8.30601 7.78201 8.30601 7.80806C8.30601 7.82977 8.28927 7.85147 8.26415 7.85147C8.25305 7.85147 8.2424 7.8469 8.23455 7.83876C8.2267 7.83062 8.22229 7.81957 8.22229 7.80806Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.36157 7.82991C8.36157 7.80821 8.3825 7.7865 8.40343 7.7865C8.43274 7.7865 8.44948 7.80821 8.44948 7.82991C8.44948 7.85162 8.43274 7.87332 8.40762 7.87332C8.39652 7.87332 8.38587 7.86875 8.37802 7.86061C8.37017 7.85247 8.36576 7.84142 8.36576 7.82991"
                              fill="white"
                            />
                            <path
                              d="M8.36157 7.82991C8.36157 7.80821 8.3825 7.7865 8.40343 7.7865C8.43274 7.7865 8.44948 7.80821 8.44948 7.82991C8.44948 7.85162 8.43274 7.87332 8.40762 7.87332C8.39652 7.87332 8.38587 7.86875 8.37802 7.86061C8.37017 7.85247 8.36576 7.84142 8.36576 7.82991H8.36157Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M8.49231 7.87807C8.49231 7.85636 8.51324 7.83466 8.53417 7.83466C8.56347 7.83466 8.58022 7.85636 8.58022 7.87807C8.58022 7.89977 8.56347 7.92148 8.53836 7.92148C8.52725 7.92148 8.51661 7.91691 8.50876 7.90876C8.50091 7.90062 8.4965 7.88958 8.4965 7.87807"
                              fill="white"
                            />
                            <path
                              d="M8.49231 7.87807C8.49231 7.85636 8.51324 7.83466 8.53417 7.83466C8.56347 7.83466 8.58022 7.85636 8.58022 7.87807C8.58022 7.89977 8.56347 7.92148 8.53836 7.92148C8.52725 7.92148 8.51661 7.91691 8.50876 7.90876C8.50091 7.90062 8.4965 7.88958 8.4965 7.87807H8.49231Z"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.37019 10.6697H7.328V10.6259H7.26472V10.7834H7.33222V10.8928H7.18878V11.199H7.26472V11.8247H7.11707V12.144H8.26457V11.8247H8.11691V11.199H8.19285V10.8928H8.04941V10.7834H8.11691V10.6303H8.04941V10.6697H8.01566V10.6259H7.94816V10.6697H7.90175V10.6259H7.83425V10.7834H7.90175V10.8928H7.76253V10.5515H7.83425V10.3984H7.76253V10.4378H7.72035V10.394H7.65707V10.4378H7.6191V10.394H7.5516V10.5515H7.62332V10.8928H7.4841V10.7834H7.5516V10.6303H7.4841V10.6697H7.44613V10.6259H7.37019V10.6697ZM7.11707 12.144H8.26878H7.11707ZM7.11707 12.0653H8.26878H7.11707ZM7.11707 11.9865H8.26878H7.11707ZM7.11707 11.9122H8.26878H7.11707ZM7.11707 11.8247H8.26878H7.11707ZM7.26472 11.7547H8.11691H7.26472ZM7.26472 11.6759H8.11691H7.26472ZM7.26472 11.5884H8.11691H7.26472ZM7.26472 11.514H8.11691H7.26472ZM7.26472 11.4353H8.11691H7.26472ZM7.26472 11.3565H8.11691H7.26472ZM7.26472 11.2822H8.11691H7.26472ZM7.18878 11.2034H8.19285H7.18878ZM7.18878 11.1247H8.19285H7.18878ZM7.18878 11.0459H8.19285H7.18878ZM7.18878 10.9672H8.19285H7.18878ZM7.33222 10.8928H8.04941H7.33222ZM7.6191 10.814H7.76253H7.6191ZM7.6191 10.7353H7.76253H7.6191ZM7.6191 10.6565H7.76253H7.6191ZM7.6191 10.5822H7.76253H7.6191ZM7.54738 10.4859H7.83425H7.54738ZM7.328 10.814H7.47988H7.328ZM7.26894 10.7178H7.54738H7.26894ZM7.26472 12.144V12.0653V12.144ZM7.26472 11.9865V11.9122V11.9865ZM7.18878 11.9865V12.0653V11.9865ZM7.33222 12.0653V11.9865V12.0653ZM7.40394 12.144V12.0653V12.144ZM7.40394 11.9865V11.9122V11.9865ZM7.40394 11.8247V11.7547V11.8247ZM7.40394 11.6759V11.5884V11.6759ZM7.33222 11.9122V11.8247V11.9122ZM7.18878 11.9122V11.8247V11.9122ZM7.4841 11.8247V11.9122V11.8247ZM7.54738 11.8247V11.7547V11.8247ZM7.33222 11.6759V11.7547V11.6759ZM7.47988 11.6759V11.7547V11.6759ZM7.6191 11.6759V11.7547V11.6759ZM7.5516 11.6803V11.5928V11.6803ZM7.62332 11.5184V11.5928V11.5184ZM7.62332 11.3609V11.4397V11.3609ZM7.5516 11.2822V11.3609V11.2822ZM7.62332 11.2078V11.2822V11.2078ZM7.4841 11.2078V11.2822V11.2078ZM7.33644 11.2078V11.2822V11.2078ZM7.26894 11.129V11.2078V11.129ZM7.40816 11.129V11.2078V11.129ZM7.5516 11.129V11.2078V11.129ZM7.62332 11.0503V11.129V11.0503ZM7.4841 11.0503V11.129V11.0503ZM7.33644 11.0503V11.129V11.0503ZM7.26894 10.9715V11.0503V10.9715ZM7.5516 10.9715V11.0503V10.9715ZM7.40816 10.8184V10.8972V10.8184ZM8.05363 10.8184H7.90597H8.05363ZM8.11691 10.7222H7.83847H8.11691ZM8.12113 12.1484V12.0697V12.1484ZM8.12113 11.9909V11.9165V11.9909ZM8.19707 11.9909V12.0697V11.9909ZM8.05363 12.0697V11.9865V12.0697ZM7.98191 12.144V12.0653V12.144ZM7.98191 11.9865V11.9122V11.9865ZM7.98191 11.8247V11.7547V11.8247ZM7.98191 11.6759V11.5884V11.6759ZM8.05363 11.9122V11.8247V11.9122ZM8.19707 11.9122V11.8247V11.9122ZM7.90175 11.8247V11.9122V11.8247ZM7.83847 11.8247V11.7547V11.8247ZM8.05363 11.6759V11.7547V11.6759ZM7.90597 11.6759V11.7547V11.6759ZM7.76675 11.6759V11.7547V11.6759ZM7.83847 11.6759V11.5884V11.6759ZM7.76675 11.514V11.5884V11.514ZM7.76675 11.3565V11.4353V11.3565ZM7.83847 11.2778V11.3565V11.2778ZM7.76675 11.2034V11.2778V11.2034ZM7.90597 11.2034V11.2778V11.2034ZM8.05363 11.2034V11.2778V11.2034ZM8.12113 11.1247V11.2034V11.1247ZM7.98191 11.1247V11.2034V11.1247ZM7.83847 11.1247V11.2034V11.1247ZM7.76675 11.0459V11.1247V11.0459ZM7.90597 11.0459V11.1247V11.0459ZM8.05363 11.0459V11.1247V11.0459ZM8.12113 10.9672V11.0459V10.9672ZM7.83847 10.9672V11.0459V10.9672ZM7.98191 10.814V10.8928V10.814ZM7.6866 11.6803V11.5928V11.6803ZM7.6866 11.3565V11.2778V11.3565ZM7.6866 11.514V11.4353V11.514ZM7.6866 11.2034V11.1247V11.2034ZM7.6866 11.0459V10.9715V11.0459ZM7.6866 10.814V10.7353V10.814ZM7.6866 10.6609V10.5822V10.6609ZM7.33644 10.7834H7.4841H7.33644ZM7.62332 10.5515H7.76675H7.62332ZM7.90597 10.7834H8.05363H7.90597Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M7.33222 10.8928V10.7834H7.26472V10.6259H7.328V10.6697H7.37019V10.6259H7.44613V10.6697H7.4841V10.6303H7.5516V10.7834H7.4841M7.33222 10.8928H7.18878V11.199H7.26472V11.8247H7.11707M7.33222 10.8928H8.04941M7.11707 11.8247V12.144M7.11707 11.8247H8.26878M7.11707 12.144H8.26457V11.8247H8.11691V11.199H8.19285V10.8928H8.04941M7.11707 12.144H8.26878M8.04941 10.8928V10.7834H8.11691V10.6303H8.04941V10.6697H8.01566V10.6259H7.94816V10.6697H7.90175V10.6259H7.83425V10.7834H7.90175V10.8928H7.76253V10.5515H7.83425V10.3984H7.76253V10.4378H7.72035V10.394H7.65707V10.4378H7.6191V10.394H7.5516V10.5515H7.62332M7.62332 10.5515V10.8928H7.4841V10.7834M7.62332 10.5515H7.76675M7.4841 10.7834H7.33644M7.11707 12.0653H8.26878M7.11707 11.9865H8.26878M7.11707 11.9122H8.26878M7.26472 11.7547H8.11691M7.26472 11.6759H8.11691M7.26472 11.5884H8.11691M7.26472 11.514H8.11691M7.26472 11.4353H8.11691M7.26472 11.3565H8.11691M7.26472 11.2822H8.11691M7.18878 11.2034H8.19285M7.18878 11.1247H8.19285M7.18878 11.0459H8.19285M7.18878 10.9672H8.19285M7.6191 10.814H7.76253M7.6191 10.7353H7.76253M7.6191 10.6565H7.76253M7.6191 10.5822H7.76253M7.54738 10.4859H7.83425M7.328 10.814H7.47988M7.26894 10.7178H7.54738M7.26472 12.144V12.0653M7.26472 11.9865V11.9122M7.18878 11.9865V12.0653M7.33222 12.0653V11.9865M7.40394 12.144V12.0653M7.40394 11.9865V11.9122M7.40394 11.8247V11.7547M7.40394 11.6759V11.5884M7.33222 11.9122V11.8247M7.18878 11.9122V11.8247M7.4841 11.8247V11.9122M7.54738 11.8247V11.7547M7.33222 11.6759V11.7547M7.47988 11.6759V11.7547M7.6191 11.6759V11.7547M7.5516 11.6803V11.5928M7.62332 11.5184V11.5928M7.62332 11.3609V11.4397M7.5516 11.2822V11.3609M7.62332 11.2078V11.2822M7.4841 11.2078V11.2822M7.33644 11.2078V11.2822M7.26894 11.129V11.2078M7.40816 11.129V11.2078M7.5516 11.129V11.2078M7.62332 11.0503V11.129M7.4841 11.0503V11.129M7.33644 11.0503V11.129M7.26894 10.9715V11.0503M7.5516 10.9715V11.0503M7.40816 10.8184V10.8972M8.05363 10.8184H7.90597M8.11691 10.7222H7.83847M8.12113 12.1484V12.0697M8.12113 11.9909V11.9165M8.19707 11.9909V12.0697M8.05363 12.0697V11.9865M7.98191 12.144V12.0653M7.98191 11.9865V11.9122M7.98191 11.8247V11.7547M7.98191 11.6759V11.5884M8.05363 11.9122V11.8247M8.19707 11.9122V11.8247M7.90175 11.8247V11.9122M7.83847 11.8247V11.7547M8.05363 11.6759V11.7547M7.90597 11.6759V11.7547M7.76675 11.6759V11.7547M7.83847 11.6759V11.5884M7.76675 11.514V11.5884M7.76675 11.3565V11.4353M7.83847 11.2778V11.3565M7.76675 11.2034V11.2778M7.90597 11.2034V11.2778M8.05363 11.2034V11.2778M8.12113 11.1247V11.2034M7.98191 11.1247V11.2034M7.83847 11.1247V11.2034M7.76675 11.0459V11.1247M7.90597 11.0459V11.1247M8.05363 11.0459V11.1247M8.12113 10.9672V11.0459M7.83847 10.9672V11.0459M7.98191 10.814V10.8928M7.6866 11.6803V11.5928M7.6866 11.3565V11.2778M7.6866 11.514V11.4353M7.6866 11.2034V11.1247M7.6866 11.0459V10.9715M7.6866 10.814V10.7353M7.6866 10.6609V10.5822M7.90597 10.7834H8.05363"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.88066 12.144V11.9384C7.88066 11.9034 7.86379 11.7853 7.6866 11.7853C7.51785 11.7853 7.50098 11.9034 7.50098 11.9384V12.144H7.88066Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.56416 11.9515L7.47135 11.9384C7.47135 11.899 7.47979 11.8421 7.50932 11.8246L7.59369 11.8903C7.58104 11.899 7.56416 11.934 7.56416 11.9515ZM7.81729 11.9515L7.9101 11.9384C7.9101 11.899 7.90166 11.8421 7.87213 11.8246L7.78775 11.8903C7.80041 11.899 7.81729 11.934 7.81729 11.9515ZM7.72447 11.8509L7.76666 11.7634C7.73989 11.7519 7.71124 11.746 7.68229 11.7459L7.61057 11.7634L7.65697 11.8509H7.72447ZM7.54728 11.6103V11.3959C7.54728 11.339 7.5051 11.2909 7.44182 11.2909C7.37853 11.2909 7.34057 11.3346 7.34057 11.3959V11.6103H7.54728ZM7.83416 11.6103V11.3959C7.83416 11.339 7.87635 11.2909 7.93963 11.2909C8.00291 11.2909 8.04088 11.3346 8.04088 11.3959V11.6103H7.83416ZM7.76244 11.0853L7.77932 10.8928H7.60213L7.61057 11.0853H7.76244ZM7.90166 11.0853L7.88478 10.8928H8.07041L8.04932 11.0853H7.90166ZM7.47979 11.0853L7.48822 10.8928H7.31104L7.33213 11.0853H7.47979Z"
                              fill="#C8B100"
                              stroke="black"
                              stroke-width="0.05"
                            />
                            <path
                              d="M7.81739 12.144V11.969C7.81739 11.9384 7.79629 11.8509 7.68661 11.8509C7.58536 11.8509 7.56426 11.9384 7.56426 11.969V12.144H7.81739ZM7.52629 11.5884V11.4047C7.52629 11.3609 7.50098 11.3084 7.44192 11.3084C7.38286 11.3084 7.35754 11.3565 7.35754 11.4047V11.5928H7.52629V11.5884ZM7.85536 11.5884V11.4047C7.85536 11.3609 7.88489 11.3084 7.93973 11.3084C7.99458 11.3084 8.02411 11.3565 8.02411 11.4047V11.5928H7.85536V11.5884Z"
                              fill="#0039F0"
                            />
                            <path
                              d="M8.04932 12.459C8.04932 12.0347 8.34463 11.689 8.70744 11.689C9.07025 11.689 9.36557 12.0347 9.36557 12.459C9.36557 12.8834 9.07025 13.2247 8.70744 13.2247C8.34463 13.2247 8.04932 12.8834 8.04932 12.459Z"
                              fill="#AD1519"
                            />
                            <path
                              d="M8.04932 12.459C8.04932 12.0347 8.34463 11.689 8.70744 11.689C9.07025 11.689 9.36557 12.0347 9.36557 12.459C9.36557 12.8834 9.07025 13.2247 8.70744 13.2247C8.34463 13.2247 8.04932 12.8834 8.04932 12.459Z"
                              stroke="black"
                              stroke-width="0.075"
                            />
                            <path
                              d="M8.24341 12.4547C8.24341 12.1484 8.45435 11.8947 8.70747 11.8947C8.9606 11.8947 9.17153 12.144 9.17153 12.4547C9.17153 12.7697 8.9606 13.0234 8.70747 13.0234C8.45435 13.0234 8.24341 12.7697 8.24341 12.4547Z"
                              fill="#005BBF"
                            />
                            <path
                              d="M8.24341 12.4547C8.24341 12.1484 8.45435 11.8947 8.70747 11.8947C8.9606 11.8947 9.17153 12.144 9.17153 12.4547C9.17153 12.7697 8.9606 13.0234 8.70747 13.0234C8.45435 13.0234 8.24341 12.7697 8.24341 12.4547Z"
                              stroke="black"
                              stroke-width="0.075"
                            />
                            <path
                              d="M8.48811 12.0696C8.48811 12.0696 8.43327 12.1309 8.43327 12.1878C8.43458 12.2242 8.4432 12.26 8.45858 12.2928C8.45014 12.2709 8.42483 12.2578 8.39952 12.2578C8.36577 12.2578 8.34045 12.284 8.34045 12.3146L8.34889 12.3496L8.36999 12.389C8.3742 12.3759 8.39108 12.3671 8.41217 12.3671C8.43327 12.3671 8.45436 12.3846 8.45436 12.4109C8.45467 12.4138 8.45467 12.4167 8.45436 12.4196H8.40374V12.4634H8.44592L8.41217 12.529L8.45436 12.5115L8.48811 12.5509L8.52186 12.5115L8.56405 12.529L8.53452 12.4634H8.5767V12.4196H8.5303C8.52959 12.4153 8.52959 12.4109 8.5303 12.4065C8.5303 12.3949 8.53474 12.3838 8.54265 12.3756C8.55057 12.3674 8.5613 12.3628 8.57249 12.3628C8.58936 12.3628 8.60202 12.3759 8.61467 12.389L8.63155 12.3453L8.63999 12.3146C8.63892 12.2992 8.63223 12.2847 8.62126 12.2741C8.6103 12.2636 8.59588 12.2577 8.58092 12.2578C8.55139 12.2578 8.5303 12.2709 8.52186 12.2971C8.52186 12.2971 8.54717 12.2446 8.54717 12.1878C8.54717 12.1309 8.48811 12.0696 8.48811 12.0696Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.48811 12.0696C8.48811 12.0696 8.43327 12.1309 8.43327 12.1878C8.43458 12.2242 8.4432 12.26 8.45858 12.2928C8.45014 12.2709 8.42483 12.2578 8.39952 12.2578C8.36577 12.2578 8.34045 12.284 8.34045 12.3146L8.34889 12.3496L8.36999 12.389C8.3742 12.3759 8.39108 12.3671 8.41217 12.3671C8.43327 12.3671 8.45436 12.3846 8.45436 12.4109C8.45467 12.4138 8.45467 12.4167 8.45436 12.4196H8.40374V12.4634H8.44592L8.41217 12.529L8.45436 12.5115L8.48811 12.5509L8.52186 12.5115L8.56405 12.529L8.53452 12.4634H8.5767V12.4196H8.5303C8.52959 12.4153 8.52959 12.4109 8.5303 12.4065C8.5303 12.3949 8.53474 12.3838 8.54265 12.3756C8.55057 12.3674 8.5613 12.3628 8.57249 12.3628C8.58936 12.3628 8.60202 12.3759 8.61467 12.389L8.63155 12.3453L8.63999 12.3146C8.63892 12.2992 8.63223 12.2847 8.62126 12.2741C8.6103 12.2636 8.59588 12.2577 8.58092 12.2578C8.55139 12.2578 8.5303 12.2709 8.52186 12.2971C8.52186 12.2971 8.54717 12.2446 8.54717 12.1878C8.54717 12.1309 8.48811 12.0696 8.48811 12.0696Z"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.40381 12.4634H8.57678V12.4197H8.40381V12.4634Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.40381 12.4634H8.57678V12.4197H8.40381V12.4634Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M8.91841 12.0696C8.91841 12.0696 8.86356 12.1309 8.86356 12.1878C8.86356 12.2446 8.88888 12.2928 8.88888 12.2928C8.88044 12.2709 8.85935 12.2578 8.82981 12.2578C8.79606 12.2578 8.77075 12.284 8.77075 12.3146L8.77919 12.3496L8.80028 12.389C8.80872 12.3759 8.82138 12.3671 8.84247 12.3671C8.85366 12.3671 8.86439 12.3718 8.8723 12.38C8.88021 12.3882 8.88466 12.3993 8.88466 12.4109C8.88497 12.4138 8.88497 12.4167 8.88466 12.4196H8.83403V12.4634H8.87622L8.84247 12.529L8.88466 12.5115L8.91841 12.5509L8.95216 12.5115L8.99435 12.529L8.96481 12.4634H9.007V12.4196H8.9606C8.9598 12.4153 8.9598 12.4109 8.9606 12.4065C8.9606 12.3949 8.96504 12.3838 8.97295 12.3756C8.98086 12.3674 8.99159 12.3628 9.00278 12.3628C9.01966 12.3628 9.03653 12.3759 9.04497 12.389L9.06185 12.3453L9.07028 12.3146C9.06921 12.2992 9.06252 12.2847 9.05156 12.2741C9.0406 12.2636 9.02618 12.2577 9.01122 12.2578C8.98591 12.2578 8.9606 12.2709 8.95216 12.2971C8.95216 12.2971 8.97747 12.2446 8.97747 12.1878C8.97747 12.1309 8.91841 12.0696 8.91841 12.0696Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.91841 12.0696C8.91841 12.0696 8.86356 12.1309 8.86356 12.1878C8.86356 12.2446 8.88888 12.2928 8.88888 12.2928C8.88044 12.2709 8.85935 12.2578 8.82981 12.2578C8.79606 12.2578 8.77075 12.284 8.77075 12.3146L8.77919 12.3496L8.80028 12.389C8.80872 12.3759 8.82138 12.3671 8.84247 12.3671C8.85366 12.3671 8.86439 12.3718 8.8723 12.38C8.88021 12.3882 8.88466 12.3993 8.88466 12.4109C8.88497 12.4138 8.88497 12.4167 8.88466 12.4196H8.83403V12.4634H8.87622L8.84247 12.529L8.88466 12.5115L8.91841 12.5509L8.95216 12.5115L8.99435 12.529L8.96481 12.4634H9.007V12.4196H8.9606C8.9598 12.4153 8.9598 12.4109 8.9606 12.4065C8.9606 12.3949 8.96504 12.3838 8.97295 12.3756C8.98086 12.3674 8.99159 12.3628 9.00278 12.3628C9.01966 12.3628 9.03653 12.3759 9.04497 12.389L9.06185 12.3453L9.07028 12.3146C9.06921 12.2992 9.06252 12.2847 9.05156 12.2741C9.0406 12.2636 9.02618 12.2577 9.01122 12.2578C8.98591 12.2578 8.9606 12.2709 8.95216 12.2971C8.95216 12.2971 8.97747 12.2446 8.97747 12.1878C8.97747 12.1309 8.91841 12.0696 8.91841 12.0696Z"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.83411 12.4634H9.00708V12.4197H8.83411V12.4634Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.83411 12.4634H9.00708V12.4197H8.83411V12.4634Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M8.70332 12.4503C8.70332 12.4503 8.64848 12.5159 8.64848 12.5728C8.64848 12.6296 8.67379 12.6778 8.67379 12.6778C8.66535 12.6559 8.64426 12.6384 8.61473 12.6384C8.58098 12.6384 8.55566 12.6646 8.55566 12.6996L8.5641 12.7303L8.5852 12.774C8.58941 12.7565 8.60629 12.7478 8.62738 12.7478C8.63857 12.7478 8.6493 12.7524 8.65721 12.7606C8.66513 12.7688 8.66957 12.7799 8.66957 12.7915C8.67028 12.7959 8.67028 12.8003 8.66957 12.8046H8.61895V12.8484H8.66113L8.62738 12.914L8.66957 12.8965L8.70332 12.9359L8.73707 12.8921L8.77926 12.914L8.74973 12.8484H8.79191V12.8046H8.74551C8.7448 12.8003 8.7448 12.7959 8.74551 12.7915C8.74551 12.7799 8.74995 12.7688 8.75786 12.7606C8.76578 12.7524 8.77651 12.7478 8.7877 12.7478C8.80457 12.7478 8.81723 12.7565 8.82566 12.774L8.84676 12.7303L8.85519 12.6996C8.85519 12.6834 8.84897 12.6678 8.8379 12.6563C8.82682 12.6448 8.8118 12.6384 8.79613 12.6384C8.7666 12.6384 8.74551 12.6559 8.73707 12.6821C8.73707 12.6821 8.76238 12.6296 8.76238 12.5728C8.76238 12.5159 8.70332 12.4546 8.70332 12.4546"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.70332 12.4503C8.70332 12.4503 8.64848 12.5159 8.64848 12.5728C8.64848 12.6296 8.67379 12.6778 8.67379 12.6778C8.66535 12.6559 8.64426 12.6384 8.61473 12.6384C8.58098 12.6384 8.55566 12.6646 8.55566 12.6996L8.5641 12.7303L8.5852 12.774C8.58941 12.7565 8.60629 12.7478 8.62738 12.7478C8.63857 12.7478 8.6493 12.7524 8.65721 12.7606C8.66513 12.7688 8.66957 12.7799 8.66957 12.7915C8.67028 12.7958 8.67028 12.8003 8.66957 12.8046H8.61895V12.8484H8.66113L8.62738 12.914L8.66957 12.8965L8.70332 12.9359L8.73707 12.8921L8.77926 12.914L8.74973 12.8484H8.79191V12.8046H8.74551C8.7448 12.8003 8.7448 12.7958 8.74551 12.7915C8.74551 12.7799 8.74995 12.7688 8.75786 12.7606C8.76578 12.7524 8.77651 12.7478 8.7877 12.7478C8.80457 12.7478 8.81723 12.7565 8.82566 12.774L8.84676 12.7303L8.85519 12.6996C8.85519 12.6834 8.84897 12.6678 8.8379 12.6563C8.82682 12.6448 8.8118 12.6384 8.79613 12.6384C8.7666 12.6384 8.74551 12.6559 8.73707 12.6821C8.73707 12.6821 8.76238 12.6296 8.76238 12.5728C8.76238 12.5159 8.70332 12.4546 8.70332 12.4546V12.4503Z"
                              stroke="black"
                              stroke-width="0.0375"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.6189 12.844H8.79186V12.8003H8.6189V12.844Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M8.6189 12.844H8.79186V12.8003H8.6189V12.844Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.0238 10.429H10.0111C10.0079 10.4355 10.0036 10.4415 9.99846 10.4465C9.99002 10.4553 9.97315 10.4553 9.96471 10.4465C9.96285 10.4441 9.96151 10.4413 9.96078 10.4382C9.96005 10.4352 9.95996 10.4321 9.96049 10.429C9.95729 10.4309 9.95365 10.4319 9.94995 10.4319C9.94624 10.4319 9.94261 10.4309 9.9394 10.429C9.92674 10.4246 9.92674 10.4071 9.93518 10.3984V10.3765H9.92252L9.91831 10.3853C9.90987 10.3984 9.89721 10.3984 9.88877 10.394C9.8883 10.3911 9.8883 10.3882 9.88877 10.3853H9.87612C9.85502 10.394 9.84659 10.3415 9.84659 10.3328L9.83815 10.3415C9.83815 10.3415 9.84659 10.3721 9.84237 10.394C9.84237 10.4203 9.82971 10.4465 9.82971 10.4465C9.87432 10.4618 9.9158 10.4855 9.95206 10.5165C9.98851 10.5441 10.0199 10.5781 10.0449 10.6171L10.0955 10.5953C10.1208 10.5865 10.1503 10.5865 10.1503 10.5865L10.1588 10.5778C10.1461 10.5778 10.0955 10.5821 10.0955 10.5603V10.5515C10.0927 10.5519 10.0899 10.5519 10.0871 10.5515C10.0786 10.5428 10.0786 10.534 10.0871 10.5209L10.0955 10.5165V10.5034H10.0828L10.0744 10.5078C10.066 10.5209 10.0491 10.5209 10.0406 10.5078C10.0385 10.5055 10.0369 10.5027 10.0362 10.4996C10.0355 10.4965 10.0355 10.4933 10.0364 10.4903C10.0331 10.4918 10.0295 10.4927 10.0259 10.4927C10.0222 10.4927 10.0186 10.4918 10.0153 10.4903C10.0069 10.4815 10.0027 10.4684 10.0153 10.4553L10.0238 10.4421V10.429Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.0238 10.429H10.0111C10.0079 10.4355 10.0036 10.4415 9.99846 10.4465C9.99002 10.4553 9.97315 10.4553 9.96471 10.4465C9.96285 10.4441 9.96151 10.4413 9.96078 10.4382C9.96005 10.4352 9.95996 10.4321 9.96049 10.429C9.95729 10.4309 9.95365 10.4319 9.94995 10.4319C9.94624 10.4319 9.94261 10.4309 9.9394 10.429C9.92674 10.4246 9.92674 10.4071 9.93518 10.3984V10.3765H9.92252L9.91831 10.3853C9.90987 10.3984 9.89721 10.3984 9.88877 10.394C9.8883 10.3911 9.8883 10.3882 9.88877 10.3853H9.87612C9.85502 10.394 9.84659 10.3415 9.84659 10.3328L9.83815 10.3415C9.83815 10.3415 9.84659 10.3721 9.84237 10.394C9.84237 10.4203 9.82971 10.4465 9.82971 10.4465C9.87432 10.4618 9.9158 10.4855 9.95206 10.5165C9.98851 10.5441 10.0199 10.5781 10.0449 10.6171L10.0955 10.5953C10.1208 10.5865 10.1503 10.5865 10.1503 10.5865L10.1588 10.5778C10.1461 10.5778 10.0955 10.5821 10.0955 10.5603V10.5515C10.0927 10.5519 10.0899 10.5519 10.0871 10.5515C10.0786 10.5428 10.0786 10.534 10.0871 10.5209L10.0955 10.5165V10.5034H10.0828L10.0744 10.5078C10.066 10.5209 10.0491 10.5209 10.0406 10.5078C10.0385 10.5055 10.0369 10.5027 10.0362 10.4996C10.0355 10.4965 10.0355 10.4933 10.0364 10.4903C10.0331 10.4918 10.0295 10.4927 10.0259 10.4927C10.0222 10.4927 10.0186 10.4918 10.0153 10.4903C10.0069 10.4815 10.0027 10.4684 10.0153 10.4553L10.0238 10.4421V10.429Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.93091 10.4553H9.93949V10.4681H9.9352C9.93091 10.4681 9.93091 10.4596 9.9352 10.4596"
                              fill="black"
                            />
                            <path
                              d="M9.93091 10.4553H9.93949V10.4681H9.9352C9.93091 10.4681 9.93091 10.4596 9.9352 10.4596L9.93091 10.4553Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M9.96861 10.4898L9.9563 10.4813V10.4728H9.9604L9.97682 10.4855L9.98914 10.4941V10.5026H9.98093L9.96861 10.4898Z"
                              fill="black"
                            />
                            <path
                              d="M9.96861 10.4898L9.9563 10.4813V10.4728H9.9604L9.97682 10.4855L9.98914 10.4941V10.5026H9.98093L9.96861 10.4898Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M9.89697 10.4414L9.88868 10.4332C9.88868 10.4332 9.88454 10.4332 9.88868 10.429L9.90111 10.4332L9.91355 10.4373V10.4456H9.9094L9.89697 10.4414Z"
                              fill="black"
                            />
                            <path
                              d="M9.89697 10.4414L9.88868 10.4332C9.88868 10.4332 9.88454 10.4332 9.88868 10.429L9.90111 10.4332L9.91355 10.4373V10.4456H9.9094L9.89697 10.4414Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M9.85914 10.4115H9.86742V10.4201H9.85914C9.85914 10.4201 9.855 10.4158 9.85914 10.4115Z"
                              fill="black"
                            />
                            <path
                              d="M9.85914 10.4115H9.86742V10.4201H9.85914C9.85914 10.4201 9.855 10.4158 9.85914 10.4115Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M10.0108 10.5207V10.5121H9.99841L10.0026 10.5207H10.0108Z"
                              fill="black"
                            />
                            <path
                              d="M10.0108 10.5207V10.5121H9.99841L10.0026 10.5207H10.0108Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M10.0362 10.5506L10.0445 10.5589H10.0487C10.0528 10.5589 10.0487 10.5547 10.0487 10.5506L10.0404 10.5423L10.0321 10.534H10.028V10.5423L10.0362 10.5506Z"
                              fill="black"
                            />
                            <path
                              d="M10.0362 10.5506L10.0445 10.5589H10.0487C10.0528 10.5589 10.0487 10.5547 10.0487 10.5506L10.0404 10.5423L10.0321 10.534H10.028V10.5423L10.0362 10.5506Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M10.0746 10.5863V10.5734H10.0618V10.582H10.0746"
                              fill="black"
                            />
                            <path
                              d="M10.0746 10.5863V10.5734H10.0618V10.582H10.0746V10.5863Z"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M9.96471 10.3284H9.9394L9.93518 10.3677V10.3721H9.94362L9.97315 10.3502L9.96049 10.3284"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.96471 10.3284H9.9394L9.93518 10.3677V10.3721H9.94362L9.97315 10.3502L9.96049 10.3284"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.89722 10.3503V10.3722L9.93519 10.3765H9.9394V10.3678L9.91831 10.3372L9.89722 10.3503Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.89722 10.3503V10.3722L9.93519 10.3765H9.9394V10.3678L9.91831 10.3372L9.89722 10.3503Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.9731 10.394L9.95622 10.4071L9.93091 10.3765V10.3721H9.97731V10.394"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.9731 10.394L9.95622 10.4071L9.93091 10.3765V10.3721H9.97731V10.394"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.92673 10.3676C9.92901 10.3656 9.93196 10.3644 9.93502 10.3644C9.93807 10.3644 9.94102 10.3656 9.9433 10.3676C9.9444 10.3695 9.94497 10.3716 9.94497 10.3738C9.94497 10.376 9.9444 10.3781 9.9433 10.38C9.94141 10.3811 9.93927 10.3817 9.93709 10.3817C9.93491 10.3817 9.93276 10.3811 9.93087 10.38C9.92909 10.3786 9.92776 10.3766 9.92703 10.3744C9.9263 10.3722 9.92619 10.3699 9.92673 10.3676Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.92673 10.3676C9.92901 10.3656 9.93196 10.3644 9.93502 10.3644C9.93807 10.3644 9.94102 10.3656 9.9433 10.3676C9.9444 10.3695 9.94497 10.3716 9.94497 10.3738C9.94497 10.376 9.9444 10.3781 9.9433 10.38C9.94141 10.3811 9.93927 10.3817 9.93709 10.3817C9.93491 10.3817 9.93276 10.3811 9.93087 10.38C9.92909 10.3786 9.92776 10.3766 9.92703 10.3744C9.9263 10.3722 9.92619 10.3699 9.92673 10.3676Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.83818 10.3284L9.82974 10.2978L9.81287 10.2803C9.81287 10.2803 9.82974 10.2715 9.84662 10.2846C9.86349 10.2978 9.84662 10.324 9.84662 10.324L9.83818 10.3284Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.83818 10.3284L9.82974 10.2978L9.81287 10.2803C9.81287 10.2803 9.82974 10.2715 9.84662 10.2846C9.86349 10.2978 9.84662 10.324 9.84662 10.324L9.83818 10.3284Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.88032 10.3415L9.86345 10.359L9.83813 10.3328V10.324H9.88032V10.3415Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.88032 10.3415L9.86345 10.359L9.83813 10.3328V10.324H9.88032V10.3415Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.83386 10.3238L9.84629 10.3196V10.3321C9.84629 10.3404 9.84215 10.3404 9.83801 10.3404L9.83386 10.3279"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.83386 10.3238L9.84629 10.3196V10.3321C9.84629 10.3404 9.84215 10.3404 9.83801 10.3404L9.83386 10.3279V10.3238Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.0533 10.3896H10.0322L10.0195 10.4203V10.429H10.028L10.0617 10.4115L10.0533 10.3896Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.0533 10.3896H10.0322L10.0195 10.4203V10.429H10.028L10.0617 10.4115L10.0533 10.3896Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M9.98584 10.4026V10.4238L10.0187 10.4324H10.0228V10.4238L10.0064 10.394L9.98584 10.4026Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M9.98584 10.4026V10.4238L10.0187 10.4324H10.0228V10.4238L10.0064 10.394L9.98584 10.4026Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.0575 10.4552L10.0364 10.464L10.0195 10.4334V10.4246H10.0238L10.0617 10.4334L10.0575 10.4552Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.0575 10.4552L10.0364 10.464L10.0195 10.4334V10.4246H10.0238L10.0617 10.4334L10.0575 10.4552Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.0111 10.4203H10.0277C10.0297 10.4226 10.0308 10.4255 10.0308 10.4286C10.0308 10.4316 10.0297 10.4346 10.0277 10.4369C10.0258 10.438 10.0237 10.4385 10.0215 10.4385C10.0193 10.4385 10.0171 10.438 10.0153 10.4369C10.0132 10.4346 10.0121 10.4316 10.0121 10.4286C10.0121 10.4255 10.0132 10.4226 10.0153 10.4203"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.0111 10.4203H10.0277C10.0297 10.4226 10.0308 10.4255 10.0308 10.4286C10.0308 10.4316 10.0297 10.4346 10.0277 10.4369C10.0258 10.438 10.0237 10.4385 10.0215 10.4385C10.0193 10.4385 10.0171 10.438 10.0153 10.4369C10.0132 10.4346 10.0121 10.4316 10.0121 10.4286C10.0121 10.4255 10.0132 10.4226 10.0153 10.4203H10.0111Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.1334 10.4684L10.1376 10.4903L10.1039 10.5034H10.0955V10.4947L10.1123 10.4597L10.1334 10.4684Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.1334 10.4684L10.1376 10.4903L10.1039 10.5034H10.0955V10.4947L10.1123 10.4597L10.1334 10.4684Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.1251 10.534L10.104 10.5384L10.0913 10.5034V10.499H10.0997L10.1335 10.5121L10.1293 10.534"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.1251 10.534L10.104 10.5384L10.0913 10.5034V10.499H10.0997L10.1335 10.5121L10.1293 10.534"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.0659 10.4684L10.0575 10.4903L10.0955 10.5034H10.0997V10.4991L10.087 10.4641L10.0659 10.4684Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.0659 10.4684L10.0575 10.4903L10.0955 10.5034H10.0997V10.4991L10.087 10.4641L10.0659 10.4684Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.1036 10.5069C10.1047 10.505 10.1052 10.5029 10.1052 10.5007C10.1052 10.4985 10.1047 10.4964 10.1036 10.4945C10.1013 10.4925 10.0983 10.4913 10.0953 10.4913C10.0922 10.4913 10.0893 10.4925 10.087 10.4945C10.0859 10.4964 10.0853 10.4985 10.0853 10.5007C10.0853 10.5029 10.0859 10.505 10.087 10.5069C10.0893 10.509 10.0922 10.5101 10.0953 10.5101C10.0983 10.5101 10.1013 10.509 10.1036 10.5069Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.1036 10.5069C10.1047 10.505 10.1052 10.5029 10.1052 10.5007C10.1052 10.4985 10.1047 10.4964 10.1036 10.4945C10.1013 10.4925 10.0983 10.4913 10.0953 10.4913C10.0922 10.4913 10.0893 10.4925 10.087 10.4945C10.0859 10.4964 10.0853 10.4985 10.0853 10.5007C10.0853 10.5029 10.0859 10.505 10.087 10.5069C10.0893 10.509 10.0922 10.5101 10.0953 10.5101C10.0983 10.5101 10.1013 10.509 10.1036 10.5069Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.1587 10.5865H10.1924L10.2135 10.5996C10.2135 10.5996 10.2178 10.5821 10.2009 10.569C10.1882 10.5559 10.1671 10.5778 10.1671 10.5778L10.1587 10.5865Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.1587 10.5865H10.1924L10.2135 10.5996C10.2135 10.5996 10.2178 10.5821 10.2009 10.569C10.1882 10.5559 10.1671 10.5778 10.1671 10.5778L10.1587 10.5865Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.1377 10.5472L10.125 10.569L10.1588 10.5909V10.5865H10.1672L10.163 10.5428L10.1377 10.5472Z"
                              fill="#C8B100"
                            />
                            <path
                              d="M10.1377 10.5472L10.125 10.569L10.1588 10.5909V10.5865H10.1672L10.163 10.5428L10.1377 10.5472Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M10.1669 10.586C10.1669 10.586 10.171 10.5819 10.1669 10.5778H10.1544C10.1462 10.5778 10.1462 10.5819 10.1503 10.586H10.1627"
                              fill="#C8B100"
                            />
                            <path
                              d="M11.7704 9.62838V9.65463H11.6691V9.62838H11.7113V9.5715H11.6818V9.54963H11.7071V9.52338H11.7324V9.54963H11.7577V9.57588H11.7324V9.62838H11.7746M10.1672 10.5865C10.1672 10.5865 10.1714 10.5821 10.1672 10.5778H10.1546C10.1461 10.5778 10.1461 10.5821 10.1504 10.5865H10.163H10.1672Z"
                              stroke="black"
                              stroke-width="0.0375"
                            />
                            <path
                              d="M5.61942 10.1534V10.1009M5.59833 10.149V10.1053M5.60676 10.149V10.1053M5.57723 10.149V10.1053M5.58567 10.149V10.1053M5.5477 10.149V10.1053M5.55614 10.149V10.1053M5.56879 10.149V10.1053M5.53926 10.149V10.1053M5.52661 10.1446V10.1096M5.52239 10.1446V10.1096M5.50129 10.1403V10.114M5.50973 10.1403V10.114M5.49286 10.1359V10.114M5.48442 10.1359V10.1184M5.47176 10.1315V10.1184M5.45911 10.1315V10.1228"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M5.45068 10.1319V10.1228"
                              stroke="black"
                              stroke-width="0.025"
                            />
                            <path
                              d="M11.6691 10.1534V10.1053M11.6438 10.149V10.1053M11.6564 10.149V10.1053M11.6227 10.149V10.1053M11.6354 10.149V10.1053M11.5974 10.149V10.1053M11.6058 10.149V10.1053M11.6143 10.149V10.1053M11.5889 10.149V10.1053M11.5763 10.1447V10.1097M11.5679 10.1447V10.1097M11.551 10.1403V10.114M11.5594 10.1403V10.114M11.5383 10.1403V10.114M11.5299 10.1359V10.1184M11.5172 10.1359V10.1184M11.5088 10.1315V10.1228"
                              stroke="black"
                              stroke-width="0.0125"
                            />
                            <path
                              d="M11.5004 10.1319V10.1228"
                              stroke="black"
                              stroke-width="0.025"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_179">
                              <rect
                                width="27"
                                height="21"
                                fill="white"
                                transform="translate(0 0.655273)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">Spanish</span>
                    </li>
                  </a>
                  <a href="ru">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="21"
                          viewBox="0 0 27 21"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_722)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0.655273H27V20.6553H0V0.655273Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 7.32196H27V20.6553H0V7.32196Z"
                              fill="#0039A6"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 13.9886H27V20.6553H0V13.9886Z"
                              fill="#D52B1E"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_722">
                              <rect
                                width="27"
                                height="20"
                                fill="white"
                                transform="translate(0 0.655273)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">Russian</span>
                    </li>
                  </a>
                  <a href="pl">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="21"
                          viewBox="0 0 27 21"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_727)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M27 20.6553H0V0.655273H27V20.6553Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M27 20.6553H0V10.6553H27V20.6553Z"
                              fill="#DC143C"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_727">
                              <rect
                                width="27"
                                height="20"
                                fill="white"
                                transform="translate(0 0.655273)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">Polish</span>
                    </li>
                  </a>
                  <a href="tr">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="21"
                          viewBox="0 0 27 21"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_731)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0.655273H27V20.6553H0V0.655273Z"
                              fill="#E30A17"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M17.1703 10.9678C17.1703 13.7261 14.8669 15.9636 12.0235 15.9636C9.18002 15.9636 6.87659 13.7261 6.87659 10.9636C6.87659 8.20109 9.18002 5.97192 12.0235 5.97192C14.8669 5.97192 17.1703 8.20942 17.1703 10.9678Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M17.4234 10.9678C17.4234 13.1761 15.584 14.9636 13.3101 14.9636C11.0362 14.9636 9.19263 13.1719 9.19263 10.9636C9.19263 8.75526 11.0362 6.97192 13.3101 6.97192C15.584 6.97192 17.4276 8.75942 17.4276 10.9678H17.4234Z"
                              fill="#E30A17"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M18.1702 8.63442L18.128 10.4802L16.3856 10.9469L18.1069 11.5511L18.0647 13.2469L19.1827 11.9219L20.8786 12.5052L19.8998 11.0844L21.0937 9.67192L19.2586 10.1719L18.1702 8.63025V8.63442Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_731">
                              <rect
                                width="27"
                                height="20"
                                fill="white"
                                transform="translate(0 0.655273)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">Turkish</span>
                    </li>
                  </a>
                  <a href="pt">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="20"
                          viewBox="0 0 27 20"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_737)">
                            <path d="M10.8 0H27V20H10.8V0Z" fill="#FF0000" />
                            <path d="M0 0H10.8V20H0V0Z" fill="#006600" />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.3226 12.7583C12.9599 12.7166 6.72883 8.87497 6.68665 8.2583L7.02836 7.6958C7.64852 8.5833 14.0188 12.3208 14.6474 12.1875L14.3226 12.7583Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.95671 7.61668C6.83437 7.94168 8.58515 9.00835 10.6861 10.275C12.7912 11.5375 14.6053 12.3167 14.7361 12.2083L14.7994 12.0917C14.7741 12.1333 14.715 12.1458 14.618 12.1167C14.0484 11.9542 12.5676 11.2833 10.7325 10.1833C8.89312 9.08335 7.29843 8.07085 7.04952 7.64168C7.03012 7.60144 7.02141 7.55699 7.02421 7.51251H7.01577L6.96515 7.60418L6.95671 7.61668ZM14.3522 12.775C14.3311 12.8167 14.2847 12.8167 14.2045 12.8083C13.6983 12.7542 12.1542 12.0125 10.3275 10.9333C8.20124 9.67501 6.44624 8.53335 6.6403 8.23335L6.69093 8.14168L6.69937 8.14585C6.53062 8.65418 10.163 10.7042 10.3781 10.8375C12.4791 12.1208 14.2509 12.875 14.407 12.6792L14.3522 12.775Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8084 8.63335C12.1669 8.62085 13.8459 8.45002 14.8162 8.06669L14.6053 7.73335C14.0358 8.04585 12.3483 8.25419 10.7958 8.28335C8.96483 8.26669 7.66968 8.09585 7.01999 7.66669L6.82593 8.02502C8.01562 8.52502 9.23905 8.62919 10.8084 8.63335Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.8711 8.07498C14.8373 8.12915 14.2045 8.34165 13.2764 8.49998C12.4582 8.62244 11.6317 8.68234 10.8042 8.67915C10.0114 8.68209 9.21924 8.63197 8.43327 8.52915C7.45874 8.37915 6.9567 8.17082 6.76686 8.09582L6.81327 8.00415C7.34905 8.21248 7.8553 8.33748 8.44592 8.42915C9.22616 8.5332 10.0127 8.58471 10.8 8.58332C11.6232 8.58417 12.4453 8.52428 13.2595 8.40415C14.2087 8.24998 14.7276 8.05415 14.8036 7.96665L14.8711 8.07915V8.07498ZM14.6855 7.73748C14.5842 7.82082 14.0695 7.99998 13.1667 8.14165C12.3871 8.25305 11.6004 8.30875 10.8126 8.30832C9.88452 8.30832 9.12092 8.24165 8.54295 8.15832C7.62327 8.04165 7.13389 7.82498 6.9567 7.76665L7.01155 7.67498C7.15077 7.74582 7.61905 7.93332 8.55139 8.06248C9.30088 8.16164 10.0565 8.20897 10.8126 8.20415C11.5948 8.20439 12.3759 8.14869 13.1498 8.03748C14.0569 7.91248 14.5462 7.68748 14.6222 7.62915L14.6855 7.73748ZM6.34077 10.25C7.17608 10.6958 9.03655 10.9167 10.7958 10.9333C12.3989 10.9375 14.483 10.6917 15.2634 10.2833L15.2423 9.83748C14.9976 10.2125 12.7617 10.575 10.7789 10.5625C8.79608 10.5458 6.95249 10.2458 6.33655 9.85415V10.25"
                              fill="#FFFF00"
                            />
                            <path
                              d="M6.34077 10.25C7.17608 10.6958 9.03655 10.9166 10.7958 10.9333C12.3989 10.9375 14.483 10.6917 15.2634 10.2833L15.2423 9.83748C14.9976 10.2125 12.7617 10.575 10.7789 10.5625C8.79608 10.5458 6.95249 10.2458 6.33655 9.85415V10.25M14.8711 8.07498C14.8373 8.12915 14.2045 8.34165 13.2764 8.49998C12.4582 8.62244 11.6317 8.68234 10.8042 8.67915C10.0114 8.68209 9.21924 8.63197 8.43327 8.52915C7.45874 8.37915 6.9567 8.17082 6.76686 8.09582L6.81327 8.00415C7.34905 8.21248 7.8553 8.33748 8.44592 8.42915C9.22616 8.5332 10.0127 8.58471 10.8 8.58332C11.6232 8.58417 12.4453 8.52428 13.2595 8.40415C14.2087 8.24998 14.7276 8.05415 14.8036 7.96665L14.8711 8.07915V8.07498ZM14.6855 7.73748C14.5842 7.82082 14.0695 7.99998 13.1667 8.14165C12.3871 8.25305 11.6004 8.30875 10.8126 8.30832C9.88452 8.30832 9.12092 8.24165 8.54295 8.15832C7.62327 8.04165 7.13389 7.82498 6.9567 7.76665L7.01155 7.67498C7.15077 7.74582 7.61905 7.93332 8.55139 8.06248C9.30088 8.16164 10.0565 8.20897 10.8126 8.20415C11.5948 8.20439 12.3759 8.14869 13.1498 8.03748C14.0569 7.91248 14.5462 7.68748 14.6222 7.62915L14.6855 7.73748Z"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.3056 10.1875V10.2917C15.1875 10.4333 14.4534 10.6417 13.5337 10.7917C12.62 10.9214 11.6977 10.9827 10.7746 10.975C9.89938 10.9824 9.02486 10.9225 8.15901 10.7958C7.51294 10.7221 6.88161 10.5536 6.28589 10.2958V10.175C6.69511 10.4417 7.80042 10.6417 8.17167 10.7C8.83823 10.8 9.69464 10.875 10.7746 10.875C11.9095 10.875 12.8165 10.7958 13.5168 10.6917C14.1792 10.5958 15.12 10.35 15.3056 10.1875ZM15.3056 9.8125V9.91667C15.1875 10.0542 14.4534 10.2625 13.5337 10.4125C12.6201 10.5436 11.6978 10.6063 10.7746 10.6C9.89945 10.6051 9.02511 10.5452 8.15901 10.4208C7.51294 10.3471 6.88161 10.1786 6.28589 9.92084V9.79584C6.69511 10.0667 7.80464 10.2625 8.17167 10.3208C9.03349 10.4455 9.90364 10.5054 10.7746 10.5C11.9095 10.5 12.8207 10.4167 13.5168 10.3125C14.1792 10.2208 15.12 9.975 15.3056 9.8125ZM10.7915 12.6792C8.86776 12.6708 7.21823 12.1625 6.86808 12.0792L7.1212 12.4708C8.30452 12.8848 9.5532 13.0865 10.8084 13.0667C12.2723 13.025 13.5506 12.9125 14.4492 12.4792L14.7107 12.0708C14.099 12.3583 12.0107 12.6792 10.7873 12.6792"
                              fill="#FFFF00"
                            />
                            <path
                              d="M10.7915 12.6792C8.86776 12.6708 7.21823 12.1625 6.86808 12.0792L7.1212 12.4708C8.30452 12.8848 9.5532 13.0865 10.8084 13.0667C12.2723 13.025 13.5506 12.9125 14.4492 12.4792L14.7107 12.0708C14.099 12.3583 12.0107 12.6792 10.7873 12.6792M15.3056 10.1875V10.2917C15.1875 10.4333 14.4534 10.6417 13.5337 10.7917C12.62 10.9214 11.6977 10.9827 10.7746 10.975C9.89938 10.9824 9.02486 10.9225 8.15901 10.7958C7.51294 10.7221 6.88161 10.5536 6.28589 10.2958V10.175C6.69511 10.4417 7.80042 10.6417 8.17167 10.7C8.83823 10.8 9.69464 10.875 10.7746 10.875C11.9095 10.875 12.8165 10.7958 13.5168 10.6917C14.1792 10.5958 15.12 10.35 15.3056 10.1875ZM15.3056 9.8125V9.91667C15.1875 10.0542 14.4534 10.2625 13.5337 10.4125C12.6201 10.5436 11.6978 10.6063 10.7746 10.6C9.89945 10.6051 9.02511 10.5452 8.15901 10.4208C7.51294 10.3471 6.88161 10.1786 6.28589 9.92084V9.79584C6.69511 10.0667 7.80464 10.2625 8.17167 10.3208C9.03349 10.4455 9.90364 10.5054 10.7746 10.5C11.9095 10.5 12.8207 10.4167 13.5168 10.3125C14.1792 10.2208 15.12 9.975 15.3056 9.8125Z"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5504 12.3875C14.512 12.4437 14.4726 12.4993 14.4323 12.5542C14.0104 12.7042 13.3354 12.8625 13.057 12.9042C12.3098 13.0417 11.5515 13.1114 10.7915 13.1125C9.08711 13.0875 7.69071 12.7583 7.0368 12.475L6.98196 12.3875L6.9904 12.3708L7.07899 12.4083C8.27966 12.8007 9.53525 13.0046 10.7999 13.0125C11.5931 13.0125 12.382 12.925 13.019 12.8125C13.9977 12.6167 14.3943 12.4708 14.5166 12.4042L14.5462 12.3875H14.5504ZM14.774 12.0208C14.7462 12.0696 14.7181 12.1182 14.6896 12.1667C14.4618 12.25 13.8459 12.425 12.9473 12.55C12.3566 12.6292 11.9896 12.7083 10.8126 12.7292C9.46706 12.7158 8.12981 12.5195 6.83852 12.1458L6.79211 12.0417C8.10408 12.3998 9.45597 12.5957 10.8168 12.625C11.8926 12.6042 12.3524 12.525 12.9388 12.4458C13.9851 12.2875 14.5124 12.1125 14.6685 12.0667C14.6686 12.0639 14.6686 12.0611 14.6685 12.0583L14.7782 12.0167L14.774 12.0208Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.7994 9.9C14.8036 11.15 14.1539 12.275 13.635 12.7667C12.8686 13.5049 11.8451 13.9254 10.7747 13.9417C9.4964 13.9625 8.29405 13.1417 7.96921 12.7792C7.2425 12.018 6.8289 11.0168 6.80905 9.97083C6.88499 8.60417 7.42921 7.65417 8.2139 7C8.97616 6.38024 9.93505 6.04538 10.9223 6.05417C11.4987 6.08176 12.0628 6.22796 12.5786 6.4834C13.0944 6.73883 13.5505 7.09787 13.9176 7.5375C14.445 8.17083 14.677 8.85833 14.7994 9.9ZM10.7831 5.625C11.9633 5.62497 13.0957 6.08571 13.9333 6.9068C14.771 7.72789 15.2461 8.84275 15.255 10.0083C15.255 10.5867 15.1397 11.1594 14.9156 11.6937C14.6915 12.2281 14.363 12.7136 13.9489 13.1226C13.5348 13.5315 13.0433 13.8559 12.5022 14.0773C11.9612 14.2986 11.3814 14.4125 10.7958 14.4125C10.2102 14.4125 9.63032 14.2986 9.0893 14.0773C8.54829 13.8559 8.05671 13.5315 7.64263 13.1226C7.22855 12.7136 6.90009 12.2281 6.67599 11.6937C6.4519 11.1594 6.33655 10.5867 6.33655 10.0083C6.33234 7.59167 8.33202 5.625 10.7831 5.625Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.7958 5.60419C13.2511 5.60419 15.2508 7.57919 15.2508 10.0042C15.2508 12.4292 13.2511 14.4042 10.8 14.4042C8.34888 14.4042 6.34497 12.4292 6.34497 10.0042C6.34497 7.57919 8.34466 5.60419 10.8 5.60419H10.7958ZM6.43778 10C6.43778 12.3667 8.40794 14.3042 10.7958 14.3042C13.1836 14.3042 15.1537 12.3667 15.1537 10C15.1537 7.63335 13.1836 5.69585 10.7958 5.69585C8.40794 5.69585 6.43778 7.63335 6.43778 10Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8 5.97083C11.8809 5.97412 12.9166 6.39968 13.681 7.15458C14.4453 7.90948 14.8762 8.9324 14.8795 9.99999C14.8762 11.068 14.4454 12.0913 13.6812 12.8469C12.917 13.6024 11.8813 14.0289 10.8 14.0333C8.56405 14.0333 6.72046 12.2167 6.72046 9.99999C6.7249 8.93274 7.15613 7.91045 7.92023 7.15579C8.68433 6.40112 9.7194 5.97521 10.8 5.97083ZM6.81749 9.99999C6.81749 12.1667 8.61468 13.9333 10.8 13.9333C12.9853 13.9333 14.7825 12.1625 14.7825 9.99999C14.7825 7.83332 12.9853 6.06666 10.8 6.06666C9.74513 6.07105 8.73475 6.48686 7.98884 7.22355C7.24294 7.96025 6.82193 8.95816 6.81749 9.99999Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.9813 5.58331H10.5974V14.4291H10.9771L10.9813 5.58331Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.9391 5.53333H11.0362V14.4792H10.9434V5.53333H10.9391ZM10.5594 5.53333H10.6607V14.4792H10.5637V5.53333H10.5594Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.2549 10.175V9.85002L14.9849 9.60002L13.4535 9.20002L11.2514 8.97919L8.59354 9.11252L6.70354 9.55419L6.32385 9.83335V10.1625L7.28995 9.73335L9.58495 9.37919H11.7914L13.4114 9.55419L14.5335 9.82085L15.2549 10.175Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8 9.32501C11.8504 9.32501 12.8671 9.42084 13.6814 9.57501C14.5167 9.74168 15.1031 9.95001 15.3056 10.1792V10.2958C15.0609 10.0042 14.272 9.79584 13.6603 9.67084C12.8587 9.52084 11.8462 9.42084 10.7957 9.42084C9.69464 9.42084 8.66526 9.52918 7.87214 9.67918C7.23933 9.80418 6.39136 10.0542 6.28589 10.2958V10.175C6.34073 10.0083 6.97355 9.75834 7.85948 9.57918C8.65683 9.42501 9.6862 9.32501 10.7957 9.32501H10.8ZM10.8 8.94584C11.7661 8.94393 12.7304 9.0276 13.6814 9.19584C14.5167 9.36251 15.1031 9.57084 15.3056 9.80418V9.91668C15.0609 9.62918 14.272 9.41668 13.6603 9.29584C12.8587 9.14168 11.8462 9.04584 10.7957 9.04584C9.81662 9.04278 8.83932 9.12926 7.87636 9.30418C7.26464 9.41668 6.38292 9.67501 6.28589 9.91668V9.80001C6.34495 9.63334 6.9862 9.37084 7.85948 9.20418C8.66104 9.05001 9.6862 8.94584 10.8 8.94584ZM10.7746 7.02084C12.4326 7.01251 13.8796 7.25001 14.542 7.58334L14.7825 8.00001C14.2087 7.69168 12.6478 7.37501 10.7789 7.41668C9.25589 7.42918 7.62745 7.58334 6.81323 8.01668L7.10011 7.54168C7.77089 7.19584 9.3487 7.02084 10.7746 7.02084Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.7999 7.36247C11.6656 7.34804 12.5309 7.40799 13.386 7.54164C14.061 7.66664 14.7065 7.84997 14.7993 7.94997L14.871 8.07497C14.6474 7.9333 14.0863 7.7708 13.3692 7.63747C12.652 7.50414 11.7365 7.4583 10.7957 7.46247C9.72838 7.4583 8.89729 7.51247 8.18854 7.63747C7.69996 7.7051 7.2256 7.85001 6.78369 8.06664L6.85541 7.93747C7.10854 7.81247 7.50088 7.6583 8.16744 7.53747C8.90572 7.40414 9.74525 7.36664 10.7999 7.36247ZM10.7999 6.98747C11.7028 6.97914 12.5971 7.02914 13.2932 7.15414C13.7442 7.22027 14.1807 7.36114 14.5842 7.5708L14.6896 7.73747C14.5124 7.54164 13.8459 7.35414 13.251 7.25414C12.5592 7.1333 11.7028 7.08747 10.7999 7.07914C9.95953 7.07174 9.11995 7.13306 8.28979 7.26247C7.85571 7.32221 7.43412 7.45022 7.04103 7.64164L7.13385 7.50414C7.37854 7.37914 7.7751 7.26247 8.27291 7.16664C9.10854 7.03553 9.95388 6.9742 10.7999 6.9833V6.98747ZM13.0106 11.8333C12.2793 11.7083 11.5377 11.6525 10.7957 11.6666C8.03244 11.7 7.14228 12.2291 7.0326 12.3875L6.82166 12.0541C7.53041 11.5541 9.03228 11.2708 10.8126 11.2958C11.7365 11.3125 12.5338 11.375 13.2004 11.5041L13.0106 11.8375"
                              fill="#FFFF00"
                            />
                            <path
                              d="M13.0106 11.8333C12.2793 11.7083 11.5377 11.6525 10.7957 11.6666C8.03244 11.7 7.14228 12.2291 7.0326 12.3875L6.82166 12.0541C7.53041 11.5541 9.03228 11.2708 10.8126 11.2958C11.7365 11.3125 12.5338 11.375 13.2004 11.5041L13.0106 11.8375M10.7999 7.36247C11.6656 7.34804 12.5309 7.40799 13.386 7.54164C14.061 7.66664 14.7065 7.84997 14.7993 7.94997L14.871 8.07497C14.6474 7.9333 14.0863 7.7708 13.3692 7.63747C12.652 7.50414 11.7365 7.4583 10.7957 7.46247C9.72838 7.4583 8.89729 7.51247 8.18854 7.63747C7.69996 7.7051 7.2256 7.85001 6.78369 8.06664L6.85541 7.93747C7.10854 7.81247 7.50088 7.6583 8.16744 7.53747C8.90572 7.40414 9.74525 7.36664 10.7999 7.36247ZM10.7999 6.98747C11.7028 6.97914 12.5971 7.02914 13.2932 7.15414C13.7442 7.22027 14.1807 7.36114 14.5842 7.5708L14.6896 7.73747C14.5124 7.54164 13.8459 7.35414 13.251 7.25414C12.5592 7.1333 11.7028 7.08747 10.7999 7.07914C9.95953 7.07174 9.11995 7.13306 8.28979 7.26247C7.85571 7.32221 7.43412 7.45022 7.04103 7.64164L7.13385 7.50414C7.37854 7.37914 7.7751 7.26247 8.27291 7.16664C9.10854 7.03553 9.95388 6.9742 10.7999 6.9833V6.98747Z"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.7831 11.6208C11.5509 11.6333 12.3019 11.6625 13.0317 11.7958L12.9811 11.8875C12.3061 11.7625 11.5805 11.7208 10.7873 11.7208C9.76218 11.7125 8.73281 11.8083 7.83421 12.0625C7.55156 12.1417 7.08328 12.3208 7.03265 12.4708L6.98203 12.3875C6.9989 12.2958 7.27734 12.1125 7.8089 11.9708C8.83828 11.6792 9.80015 11.625 10.7831 11.6208ZM10.8169 11.2375C11.6273 11.2367 12.4362 11.3064 13.2342 11.4458L13.1794 11.5417C12.4001 11.4005 11.6091 11.3321 10.8169 11.3375C9.79593 11.3375 8.71171 11.4125 7.72453 11.6958C7.40812 11.7875 6.85546 11.9875 6.83859 12.1417L6.78796 12.05C6.7964 11.9083 7.27312 11.7208 7.70343 11.6C8.69484 11.3125 9.78328 11.2417 10.8169 11.2375Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.7402 12.1042L14.4111 12.6167L13.4535 11.7792L10.9813 10.1333L8.18849 8.62085L6.74146 8.13335L7.04942 7.56668L7.15489 7.51251L8.05349 7.73335L11.0235 9.24585L12.7363 10.3125L14.1749 11.3333L14.7613 12L14.7402 12.1042Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.69083 8.14581C6.94396 7.97915 8.80864 8.79581 10.7661 9.96248C12.711 11.1291 14.5757 12.4458 14.4069 12.6916L14.3521 12.7791L14.3268 12.8C14.331 12.7958 14.3605 12.7583 14.3268 12.6708C14.2424 12.4 12.9177 11.3583 10.7282 10.05C8.58927 8.79581 6.80896 8.03748 6.63599 8.25415L6.69083 8.14581ZM14.8077 12.1C14.968 11.7833 13.2383 10.4958 11.091 9.24165C8.89724 8.01248 7.31099 7.28748 7.01989 7.50415L6.96083 7.62498C6.96083 7.62915 6.96083 7.61665 6.9777 7.60415C7.02833 7.56248 7.11692 7.56248 7.15489 7.56248C7.65271 7.57081 9.07442 8.21665 11.0699 9.34581C11.9474 9.84581 14.7655 11.6375 14.7529 12.1375C14.7529 12.1791 14.7571 12.1875 14.7402 12.2125L14.8119 12.1041L14.8077 12.1Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.075"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.12708 10.4903C8.12774 10.8353 8.19769 11.1768 8.33286 11.4949C8.46804 11.813 8.66576 12.1015 8.91458 12.3437C9.16036 12.5902 9.45311 12.7862 9.77594 12.9204C10.0988 13.0547 10.4453 13.1245 10.7956 13.1259C11.5045 13.1258 12.1843 12.8477 12.6856 12.3526C12.9335 12.1091 13.1303 11.8196 13.2647 11.5008C13.3991 11.182 13.4684 10.8401 13.4686 10.4948V6.97477L8.12708 6.96588V10.4903Z"
                              fill="white"
                              stroke="black"
                              stroke-width="0.0933336"
                            />
                            <path
                              d="M8.22607 10.4948C8.22702 10.8257 8.29432 11.1532 8.42407 11.4583C8.55383 11.7635 8.74348 12.0402 8.98208 12.2725C9.46118 12.7482 10.1118 13.0167 10.7911 13.0192C11.4692 13.0196 12.1198 12.7543 12.6001 12.2814C12.8379 12.0487 13.0267 11.7718 13.1557 11.4667C13.2846 11.1616 13.3512 10.8343 13.3516 10.5037V7.08142H8.23507V10.4948M12.3301 8.10809V10.2814L12.3256 10.5081C12.3271 10.7067 12.288 10.9035 12.2107 11.0868C12.1334 11.27 12.0194 11.436 11.8756 11.5748C11.5894 11.8584 11.201 12.0182 10.7956 12.0192C10.3726 12.0192 9.99908 11.8414 9.72008 11.5659C9.43292 11.2832 9.27107 10.8996 9.27008 10.4992V8.0992L12.3301 8.10809Z"
                              fill="#FF0000"
                            />
                            <path
                              d="M8.22607 10.4948C8.22702 10.8257 8.29432 11.1532 8.42407 11.4583C8.55383 11.7635 8.74348 12.0402 8.98208 12.2725C9.46118 12.7482 10.1118 13.0167 10.7911 13.0192C11.4692 13.0196 12.1198 12.7543 12.6001 12.2814C12.8379 12.0487 13.0267 11.7718 13.1557 11.4667C13.2846 11.1616 13.3512 10.8343 13.3516 10.5037V7.08142H8.23507V10.4948M12.3301 8.10809V10.2814L12.3256 10.5081C12.3271 10.7067 12.288 10.9035 12.2107 11.0867C12.1334 11.27 12.0194 11.436 11.8756 11.5748C11.5894 11.8584 11.201 12.0182 10.7956 12.0192C10.3726 12.0192 9.99908 11.8414 9.72008 11.5659C9.43292 11.2832 9.27107 10.8996 9.27008 10.4992V8.0992L12.3301 8.10809Z"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.55908 7.97483C8.56358 7.73038 8.73908 7.67261 8.73908 7.67261C8.74358 7.67261 8.93258 7.73483 8.93258 7.97927H8.55908"
                              fill="#FFFF00"
                            />
                            <path
                              d="M8.40611 7.67705L8.37461 7.95705H8.56361C8.56361 7.72594 8.74361 7.69038 8.74361 7.69038C8.74811 7.69038 8.92361 7.73927 8.92811 7.95705H9.11711L9.08111 7.67261H8.40611V7.67705ZM8.36111 7.9615H9.12611C9.13961 7.9615 9.15311 7.97483 9.15311 7.99261C9.15311 8.01483 9.13961 8.02816 9.12611 8.02816H8.36111C8.34761 8.02816 8.33411 8.01483 8.33411 7.99261C8.33411 7.97483 8.34761 7.9615 8.36561 7.9615H8.36111Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.64005 7.95702C8.64005 7.81036 8.74355 7.77036 8.74355 7.77036C8.74355 7.77036 8.84705 7.8148 8.84705 7.95702H8.64005ZM8.37905 7.55702H9.11255C9.12605 7.55702 9.13955 7.5748 9.13955 7.59258C9.13955 7.60591 9.12605 7.61924 9.11255 7.61924H8.37905C8.36555 7.61924 8.35205 7.60591 8.35205 7.58813C8.35205 7.5748 8.36555 7.56147 8.37905 7.56147V7.55702ZM8.39705 7.62369H9.09005C9.10355 7.62369 9.11705 7.63702 9.11705 7.6548C9.11705 7.67258 9.10355 7.68591 9.09005 7.68591H8.39255C8.37455 7.68591 8.36555 7.67258 8.36555 7.6548C8.36555 7.63702 8.37455 7.62369 8.39255 7.62369H8.39705ZM8.62205 7.15258H8.67605V7.18813H8.71655V7.15258H8.77505V7.19258H8.81555V7.14813H8.86955V7.23702C8.86955 7.2548 8.86055 7.26369 8.84705 7.26369H8.64905C8.63555 7.26369 8.62205 7.2548 8.62205 7.24147V7.15258ZM8.82905 7.27258L8.84255 7.55702H8.64905L8.66255 7.26813H8.82905"
                              fill="#FFFF00"
                            />
                            <path
                              d="M8.82905 7.27258L8.84255 7.55702H8.64905L8.66255 7.26813H8.82905M8.64005 7.95702C8.64005 7.81036 8.74355 7.77036 8.74355 7.77036C8.74355 7.77036 8.84705 7.8148 8.84705 7.95702H8.64005ZM8.37905 7.55702H9.11255C9.12605 7.55702 9.13955 7.5748 9.13955 7.59258C9.13955 7.60591 9.12605 7.61924 9.11255 7.61924H8.37905C8.36555 7.61924 8.35205 7.60591 8.35205 7.58813C8.35205 7.5748 8.36555 7.56147 8.37905 7.56147V7.55702ZM8.39705 7.62369H9.09005C9.10355 7.62369 9.11705 7.63702 9.11705 7.6548C9.11705 7.67258 9.10355 7.68591 9.09005 7.68591H8.39255C8.37455 7.68591 8.36555 7.67258 8.36555 7.6548C8.36555 7.63702 8.37455 7.62369 8.39255 7.62369H8.39705ZM8.62205 7.15258H8.67605V7.18813H8.71655V7.15258H8.77505V7.19258H8.81555V7.14813H8.86955V7.23702C8.86955 7.2548 8.86055 7.26369 8.84705 7.26369H8.64905C8.63555 7.26369 8.62205 7.2548 8.62205 7.24147V7.15258Z"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.59516 7.40588V7.557H8.41516V7.40588H8.59516Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.59516 7.40588V7.557H8.41516V7.40588H8.59516Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.38367 7.29034H8.43767V7.33479H8.47817V7.29034H8.53217V7.33479H8.57267V7.29034H8.62667V7.37923C8.62667 7.39701 8.61767 7.4059 8.60417 7.4059H8.41067C8.40351 7.4059 8.39664 7.40309 8.39158 7.39809C8.38651 7.39309 8.38367 7.38631 8.38367 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.38367 7.29034H8.43767V7.33479H8.47817V7.29034H8.53217V7.33479H8.57267V7.29034H8.62667V7.37923C8.62667 7.39701 8.61767 7.4059 8.60417 7.4059H8.41067C8.40351 7.4059 8.39664 7.40309 8.39158 7.39809C8.38651 7.39309 8.38367 7.38631 8.38367 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.72559 7.36149C8.72559 7.33483 8.76609 7.33483 8.76609 7.36149V7.4326H8.72559V7.36149Z"
                              fill="black"
                            />
                            <path
                              d="M8.48706 7.45927C8.48706 7.4326 8.52306 7.4326 8.52306 7.45927V7.5126H8.48706V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M8.48706 7.45927C8.48706 7.4326 8.52306 7.4326 8.52306 7.45927V7.5126H8.48706V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M8.55908 7.97483C8.56358 7.73038 8.73908 7.67261 8.73908 7.67261C8.74358 7.67261 8.93258 7.73483 8.93258 7.97927H8.55908"
                              fill="#FFFF00"
                            />
                            <path
                              d="M8.40611 7.67705L8.37461 7.95705H8.56361C8.56361 7.72594 8.74361 7.69038 8.74361 7.69038C8.74811 7.69038 8.92361 7.73927 8.92811 7.95705H9.11711L9.08111 7.67261H8.40611V7.67705ZM8.36111 7.9615H9.12611C9.13961 7.9615 9.15311 7.97483 9.15311 7.99261C9.15311 8.01483 9.13961 8.02816 9.12611 8.02816H8.36111C8.34761 8.02816 8.33411 8.01483 8.33411 7.99261C8.33411 7.97483 8.34761 7.9615 8.36561 7.9615H8.36111Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.64005 7.95702C8.64005 7.81036 8.74355 7.77036 8.74355 7.77036C8.74355 7.77036 8.84705 7.8148 8.84705 7.95702H8.64005ZM8.37905 7.55702H9.11255C9.12605 7.55702 9.13955 7.5748 9.13955 7.59258C9.13955 7.60591 9.12605 7.61924 9.11255 7.61924H8.37905C8.36555 7.61924 8.35205 7.60591 8.35205 7.58813C8.35205 7.5748 8.36555 7.56147 8.37905 7.56147V7.55702ZM8.39705 7.62369H9.09005C9.10355 7.62369 9.11705 7.63702 9.11705 7.6548C9.11705 7.67258 9.10355 7.68591 9.09005 7.68591H8.39255C8.37455 7.68591 8.36555 7.67258 8.36555 7.6548C8.36555 7.63702 8.37455 7.62369 8.39255 7.62369H8.39705ZM8.62205 7.15258H8.67605V7.18813H8.71655V7.15258H8.77505V7.19258H8.81555V7.14813H8.86955V7.23702C8.86955 7.2548 8.86055 7.26369 8.84705 7.26369H8.64905C8.63555 7.26369 8.62205 7.2548 8.62205 7.24147V7.15258ZM8.82905 7.27258L8.84255 7.55702H8.64905L8.66255 7.26813H8.82905"
                              fill="#FFFF00"
                            />
                            <path
                              d="M8.82905 7.27258L8.84255 7.55702H8.64905L8.66255 7.26813H8.82905M8.64005 7.95702C8.64005 7.81036 8.74355 7.77036 8.74355 7.77036C8.74355 7.77036 8.84705 7.8148 8.84705 7.95702H8.64005ZM8.37905 7.55702H9.11255C9.12605 7.55702 9.13955 7.5748 9.13955 7.59258C9.13955 7.60591 9.12605 7.61924 9.11255 7.61924H8.37905C8.36555 7.61924 8.35205 7.60591 8.35205 7.58813C8.35205 7.5748 8.36555 7.56147 8.37905 7.56147V7.55702ZM8.39705 7.62369H9.09005C9.10355 7.62369 9.11705 7.63702 9.11705 7.6548C9.11705 7.67258 9.10355 7.68591 9.09005 7.68591H8.39255C8.37455 7.68591 8.36555 7.67258 8.36555 7.6548C8.36555 7.63702 8.37455 7.62369 8.39255 7.62369H8.39705ZM8.62205 7.15258H8.67605V7.18813H8.71655V7.15258H8.77505V7.19258H8.81555V7.14813H8.86955V7.23702C8.86955 7.2548 8.86055 7.26369 8.84705 7.26369H8.64905C8.63555 7.26369 8.62205 7.2548 8.62205 7.24147V7.15258Z"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.59516 7.40588V7.557H8.41516V7.40588H8.59516Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.59516 7.40588V7.557H8.41516V7.40588H8.59516Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.38367 7.29034H8.43767V7.33479H8.47817V7.29034H8.53217V7.33479H8.57267V7.29034H8.62667V7.37923C8.62667 7.39701 8.61767 7.4059 8.60417 7.4059H8.41067C8.40351 7.4059 8.39664 7.40309 8.39158 7.39809C8.38651 7.39309 8.38367 7.38631 8.38367 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.38367 7.29034H8.43767V7.33479H8.47817V7.29034H8.53217V7.33479H8.57267V7.29034H8.62667V7.37923C8.62667 7.39701 8.61767 7.4059 8.60417 7.4059H8.41067C8.40351 7.4059 8.39664 7.40309 8.39158 7.39809C8.38651 7.39309 8.38367 7.38631 8.38367 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.72559 7.36149C8.72559 7.33483 8.76609 7.33483 8.76609 7.36149V7.4326H8.72559V7.36149Z"
                              fill="black"
                            />
                            <path
                              d="M8.48706 7.45927C8.48706 7.4326 8.52306 7.4326 8.52306 7.45927V7.5126H8.48706V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M8.48706 7.45927C8.48706 7.4326 8.52306 7.4326 8.52306 7.45927V7.5126H8.48706V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M9.37117 12.1772C9.19873 12.0019 9.28089 11.8381 9.28089 11.8381C9.28406 11.835 9.46195 11.7464 9.63756 11.9186L9.37436 12.1804"
                              fill="#FFFF00"
                            />
                            <path
                              d="M9.04953 12.0747L9.22849 12.294L9.36167 12.1616C9.19564 11.9987 9.29693 11.8475 9.29693 11.8475C9.3001 11.8444 9.45889 11.7558 9.61852 11.9061L9.7517 11.7737L9.52198 11.5985L9.04634 12.0715L9.04953 12.0747ZM9.22217 12.3066L9.76123 11.7705C9.77074 11.761 9.78983 11.761 9.80261 11.7735C9.81857 11.7892 9.81864 11.808 9.80912 11.8175L9.27006 12.3536C9.26055 12.3631 9.24146 12.3631 9.22549 12.3475C9.21272 12.335 9.21266 12.3161 9.22534 12.3035L9.22217 12.3066Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M9.41553 12.108C9.31016 12.0046 9.35436 11.9039 9.35436 11.9039C9.35436 11.9039 9.45922 11.8627 9.5614 11.9629L9.41553 12.108ZM8.94425 12.0091L9.46112 11.495C9.47063 11.4855 9.49292 11.4886 9.50569 11.5011C9.51527 11.5105 9.51533 11.5294 9.50582 11.5388L8.98895 12.0529C8.97943 12.0624 8.96034 12.0624 8.94757 12.0499C8.93799 12.0405 8.93793 12.0216 8.94744 12.0122L8.94425 12.0091ZM9.00482 12.0434L9.49316 11.5577C9.50267 11.5483 9.52176 11.5482 9.53454 11.5607C9.54731 11.5732 9.54737 11.5921 9.53786 11.6016L9.04635 12.0904C9.03367 12.103 9.01775 12.0999 9.00498 12.0874C8.99221 12.0749 8.98897 12.0592 9.00165 12.0466L9.00482 12.0434ZM8.82492 11.5538L8.86297 11.5159L8.88852 11.541L8.91706 11.5126L8.89151 11.4875L8.93274 11.4465L8.96147 11.4747L8.99001 11.4463L8.95808 11.415L8.99614 11.3772L9.05999 11.4398C9.07277 11.4523 9.07281 11.4649 9.0633 11.4744L8.92377 11.6131C8.91426 11.6226 8.89836 11.6258 8.88878 11.6164L8.82492 11.5538ZM9.057 11.4933L9.27086 11.6842L9.13451 11.8198L8.93648 11.6068L9.05381 11.4901"
                              fill="#FFFF00"
                            />
                            <path
                              d="M9.057 11.4933L9.27086 11.6842L9.13451 11.8198L8.93648 11.6068L9.05381 11.4901M9.41553 12.108C9.31016 12.0046 9.35436 11.9039 9.35436 11.9039C9.35436 11.9039 9.45922 11.8627 9.5614 11.9629L9.41553 12.108ZM8.94425 12.0091L9.46112 11.495C9.47063 11.4855 9.49292 11.4886 9.50569 11.5011C9.51527 11.5105 9.51533 11.5294 9.50582 11.5388L8.98895 12.0529C8.97943 12.0624 8.96034 12.0624 8.94757 12.0499C8.93799 12.0405 8.93793 12.0216 8.94744 12.0122L8.94425 12.0091ZM9.00482 12.0434L9.49316 11.5577C9.50267 11.5483 9.52176 11.5482 9.53454 11.5607C9.54731 11.5732 9.54737 11.5921 9.53786 11.6016L9.04635 12.0904C9.03367 12.103 9.01775 12.0999 9.00498 12.0874C8.99221 12.0749 8.98897 12.0592 9.00165 12.0466L9.00482 12.0434ZM8.82492 11.5538L8.86297 11.5159L8.88852 11.541L8.91706 11.5126L8.89151 11.4875L8.93274 11.4465L8.96147 11.4747L8.99001 11.4463L8.95808 11.415L8.99614 11.3772L9.05999 11.4398C9.07277 11.4523 9.07281 11.4649 9.0633 11.4744L8.92377 11.6131C8.91426 11.6226 8.89836 11.6258 8.88878 11.6164L8.82492 11.5538Z"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.98792 11.7512L9.09648 11.8576L8.96964 11.9838L8.86108 11.8773L8.98792 11.7512Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.98792 11.7512L9.09648 11.8576L8.96964 11.9838L8.86108 11.8773L8.98792 11.7512Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.75586 11.818L8.79391 11.7801L8.82584 11.8115L8.85438 11.7831L8.82245 11.7518L8.8605 11.7139L8.89243 11.7452L8.92097 11.7169L8.88904 11.6855L8.92709 11.6477L8.99095 11.7103C9.00372 11.7228 9.00376 11.7354 8.99425 11.7449L8.8579 11.8805C8.85285 11.8855 8.846 11.8883 8.83884 11.8884C8.83168 11.8884 8.8248 11.8856 8.81972 11.8806L8.75586 11.818Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.75586 11.818L8.79391 11.7801L8.82584 11.8115L8.85438 11.7831L8.82245 11.7518L8.8605 11.7139L8.89243 11.7452L8.92097 11.7169L8.88904 11.6855L8.92709 11.6477L8.99095 11.7103C9.00372 11.7228 9.00376 11.7354 8.99425 11.7449L8.8579 11.8805C8.85285 11.8855 8.846 11.8883 8.83884 11.8884C8.83168 11.8884 8.8248 11.8856 8.81972 11.8806L8.75586 11.818Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M9.04794 11.6284C9.02878 11.6096 9.05732 11.5812 9.07648 11.6L9.12757 11.6501L9.09903 11.6785L9.04794 11.6284Z"
                              fill="black"
                            />
                            <path
                              d="M8.95016 11.8644C8.931 11.8456 8.95637 11.8204 8.97553 11.8392L9.01384 11.8768L8.98848 11.902L8.95016 11.8644Z"
                              fill="black"
                            />
                            <path
                              d="M8.95016 11.8644C8.931 11.8456 8.95637 11.8204 8.97553 11.8392L9.01384 11.8768L8.98848 11.902L8.95016 11.8644Z"
                              fill="black"
                            />
                            <path
                              d="M8.55908 7.97483C8.56358 7.73038 8.73908 7.67261 8.73908 7.67261C8.74358 7.67261 8.93258 7.73483 8.93258 7.97927H8.55908"
                              fill="#FFFF00"
                            />
                            <path
                              d="M8.40611 7.67705L8.37461 7.95705H8.56361C8.56361 7.72594 8.74361 7.69038 8.74361 7.69038C8.74811 7.69038 8.92361 7.73927 8.92811 7.95705H9.11711L9.08111 7.67261H8.40611V7.67705ZM8.36111 7.9615H9.12611C9.13961 7.9615 9.15311 7.97483 9.15311 7.99261C9.15311 8.01483 9.13961 8.02816 9.12611 8.02816H8.36111C8.34761 8.02816 8.33411 8.01483 8.33411 7.99261C8.33411 7.97483 8.34761 7.9615 8.36561 7.9615H8.36111Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.64005 7.95702C8.64005 7.81036 8.74355 7.77036 8.74355 7.77036C8.74355 7.77036 8.84705 7.8148 8.84705 7.95702H8.64005ZM8.37905 7.55702H9.11255C9.12605 7.55702 9.13955 7.5748 9.13955 7.59258C9.13955 7.60591 9.12605 7.61924 9.11255 7.61924H8.37905C8.36555 7.61924 8.35205 7.60591 8.35205 7.58813C8.35205 7.5748 8.36555 7.56147 8.37905 7.56147V7.55702ZM8.39705 7.62369H9.09005C9.10355 7.62369 9.11705 7.63702 9.11705 7.6548C9.11705 7.67258 9.10355 7.68591 9.09005 7.68591H8.39255C8.37455 7.68591 8.36555 7.67258 8.36555 7.6548C8.36555 7.63702 8.37455 7.62369 8.39255 7.62369H8.39705ZM8.62205 7.15258H8.67605V7.18813H8.71655V7.15258H8.77505V7.19258H8.81555V7.14813H8.86955V7.23702C8.86955 7.2548 8.86055 7.26369 8.84705 7.26369H8.64905C8.63555 7.26369 8.62205 7.2548 8.62205 7.24147V7.15258ZM8.82905 7.27258L8.84255 7.55702H8.64905L8.66255 7.26813H8.82905"
                              fill="#FFFF00"
                            />
                            <path
                              d="M8.82905 7.27258L8.84255 7.55702H8.64905L8.66255 7.26813H8.82905M8.64005 7.95702C8.64005 7.81036 8.74355 7.77036 8.74355 7.77036C8.74355 7.77036 8.84705 7.8148 8.84705 7.95702H8.64005ZM8.37905 7.55702H9.11255C9.12605 7.55702 9.13955 7.5748 9.13955 7.59258C9.13955 7.60591 9.12605 7.61924 9.11255 7.61924H8.37905C8.36555 7.61924 8.35205 7.60591 8.35205 7.58813C8.35205 7.5748 8.36555 7.56147 8.37905 7.56147V7.55702ZM8.39705 7.62369H9.09005C9.10355 7.62369 9.11705 7.63702 9.11705 7.6548C9.11705 7.67258 9.10355 7.68591 9.09005 7.68591H8.39255C8.37455 7.68591 8.36555 7.67258 8.36555 7.6548C8.36555 7.63702 8.37455 7.62369 8.39255 7.62369H8.39705ZM8.62205 7.15258H8.67605V7.18813H8.71655V7.15258H8.77505V7.19258H8.81555V7.14813H8.86955V7.23702C8.86955 7.2548 8.86055 7.26369 8.84705 7.26369H8.64905C8.63555 7.26369 8.62205 7.2548 8.62205 7.24147V7.15258Z"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.59516 7.40588V7.557H8.41516V7.40588H8.59516Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.59516 7.40588V7.557H8.41516V7.40588H8.59516Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.38367 7.29034H8.43767V7.33479H8.47817V7.29034H8.53217V7.33479H8.57267V7.29034H8.62667V7.37923C8.62667 7.39701 8.61767 7.4059 8.60417 7.4059H8.41067C8.40351 7.4059 8.39664 7.40309 8.39158 7.39809C8.38651 7.39309 8.38367 7.38631 8.38367 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.38367 7.29034H8.43767V7.33479H8.47817V7.29034H8.53217V7.33479H8.57267V7.29034H8.62667V7.37923C8.62667 7.39701 8.61767 7.4059 8.60417 7.4059H8.41067C8.40351 7.4059 8.39664 7.40309 8.39158 7.39809C8.38651 7.39309 8.38367 7.38631 8.38367 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M8.72559 7.36149C8.72559 7.33483 8.76609 7.33483 8.76609 7.36149V7.4326H8.72559V7.36149Z"
                              fill="black"
                            />
                            <path
                              d="M8.48706 7.45927C8.48706 7.4326 8.52306 7.4326 8.52306 7.45927V7.5126H8.48706V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M8.48706 7.45927C8.48706 7.4326 8.52306 7.4326 8.52306 7.45927V7.5126H8.48706V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M13.0321 7.97483C13.0276 7.73038 12.8521 7.67261 12.8521 7.67261C12.8476 7.67261 12.6586 7.73483 12.6586 7.97927H13.0321"
                              fill="#FFFF00"
                            />
                            <path
                              d="M13.1851 7.67705L13.2166 7.95705H13.0276C13.0276 7.72594 12.8476 7.69038 12.8476 7.69038C12.8431 7.69038 12.6676 7.73927 12.6631 7.95705H12.4741L12.5101 7.67261H13.1851V7.67705ZM13.2301 7.9615H12.4651C12.4516 7.9615 12.4381 7.97483 12.4381 7.99261C12.4381 8.01483 12.4516 8.02816 12.4651 8.02816H13.2301C13.2436 8.02816 13.2571 8.01483 13.2571 7.99261C13.2571 7.97483 13.2436 7.9615 13.2256 7.9615H13.2301Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.9511 7.95702C12.9511 7.81036 12.8476 7.77036 12.8476 7.77036C12.8476 7.77036 12.7441 7.8148 12.7441 7.95702H12.9511ZM13.2121 7.55702H12.4786C12.4651 7.55702 12.4516 7.5748 12.4516 7.59258C12.4516 7.60591 12.4651 7.61924 12.4786 7.61924H13.2121C13.2256 7.61924 13.2391 7.60591 13.2391 7.58813C13.2391 7.5748 13.2256 7.56147 13.2121 7.56147V7.55702ZM13.1941 7.62369H12.5011C12.4876 7.62369 12.4741 7.63702 12.4741 7.6548C12.4741 7.67258 12.4876 7.68591 12.5011 7.68591H13.1986C13.2166 7.68591 13.2256 7.67258 13.2256 7.6548C13.2256 7.63702 13.2166 7.62369 13.1986 7.62369H13.1941ZM12.9691 7.15258H12.9151V7.18813H12.8746V7.15258H12.8161V7.19258H12.7756V7.14813H12.7216V7.23702C12.7216 7.2548 12.7306 7.26369 12.7441 7.26369H12.9421C12.9556 7.26369 12.9691 7.2548 12.9691 7.24147V7.15258ZM12.7621 7.27258L12.7486 7.55702H12.9421L12.9286 7.26813H12.7621"
                              fill="#FFFF00"
                            />
                            <path
                              d="M12.7621 7.27258L12.7486 7.55702H12.9421L12.9286 7.26813H12.7621M12.9511 7.95702C12.9511 7.81036 12.8476 7.77036 12.8476 7.77036C12.8476 7.77036 12.7441 7.8148 12.7441 7.95702H12.9511ZM13.2121 7.55702H12.4786C12.4651 7.55702 12.4516 7.5748 12.4516 7.59258C12.4516 7.60591 12.4651 7.61924 12.4786 7.61924H13.2121C13.2256 7.61924 13.2391 7.60591 13.2391 7.58813C13.2391 7.5748 13.2256 7.56147 13.2121 7.56147V7.55702ZM13.1941 7.62369H12.5011C12.4876 7.62369 12.4741 7.63702 12.4741 7.6548C12.4741 7.67258 12.4876 7.68591 12.5011 7.68591H13.1986C13.2166 7.68591 13.2256 7.67258 13.2256 7.6548C13.2256 7.63702 13.2166 7.62369 13.1986 7.62369H13.1941ZM12.9691 7.15258H12.9151V7.18813H12.8746V7.15258H12.8161V7.19258H12.7756V7.14813H12.7216V7.23702C12.7216 7.2548 12.7306 7.26369 12.7441 7.26369H12.9421C12.9556 7.26369 12.9691 7.2548 12.9691 7.24147V7.15258Z"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.996 7.40588V7.557H13.176V7.40588H12.996Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.996 7.40588V7.557H13.176V7.40588H12.996Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M13.2076 7.29034H13.1536V7.33479H13.1131V7.29034H13.0591V7.33479H13.0186V7.29034H12.9646V7.37923C12.9646 7.39701 12.9736 7.4059 12.9871 7.4059H13.1806C13.1878 7.4059 13.1947 7.40309 13.1997 7.39809C13.2048 7.39309 13.2076 7.38631 13.2076 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M13.2076 7.29034H13.1536V7.33479H13.1131V7.29034H13.0591V7.33479H13.0186V7.29034H12.9646V7.37923C12.9646 7.39701 12.9736 7.4059 12.9871 7.4059H13.1806C13.1878 7.4059 13.1947 7.40309 13.1997 7.39809C13.2048 7.39309 13.2076 7.38631 13.2076 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.8656 7.36149C12.8656 7.33483 12.8251 7.33483 12.8251 7.36149V7.4326H12.8656V7.36149Z"
                              fill="black"
                            />
                            <path
                              d="M13.1041 7.45927C13.1041 7.4326 13.0681 7.4326 13.0681 7.45927V7.5126H13.1041V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M13.1041 7.45927C13.1041 7.4326 13.0681 7.4326 13.0681 7.45927V7.5126H13.1041V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M13.0321 7.97483C13.0276 7.73038 12.8521 7.67261 12.8521 7.67261C12.8476 7.67261 12.6586 7.73483 12.6586 7.97927H13.0321"
                              fill="#FFFF00"
                            />
                            <path
                              d="M13.1851 7.67705L13.2166 7.95705H13.0276C13.0276 7.72594 12.8476 7.69038 12.8476 7.69038C12.8431 7.69038 12.6676 7.73927 12.6631 7.95705H12.4741L12.5101 7.67261H13.1851V7.67705ZM13.2301 7.9615H12.4651C12.4516 7.9615 12.4381 7.97483 12.4381 7.99261C12.4381 8.01483 12.4516 8.02816 12.4651 8.02816H13.2301C13.2436 8.02816 13.2571 8.01483 13.2571 7.99261C13.2571 7.97483 13.2436 7.9615 13.2256 7.9615H13.2301Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.9511 7.95702C12.9511 7.81036 12.8476 7.77036 12.8476 7.77036C12.8476 7.77036 12.7441 7.8148 12.7441 7.95702H12.9511ZM13.2121 7.55702H12.4786C12.4651 7.55702 12.4516 7.5748 12.4516 7.59258C12.4516 7.60591 12.4651 7.61924 12.4786 7.61924H13.2121C13.2256 7.61924 13.2391 7.60591 13.2391 7.58813C13.2391 7.5748 13.2256 7.56147 13.2121 7.56147V7.55702ZM13.1941 7.62369H12.5011C12.4876 7.62369 12.4741 7.63702 12.4741 7.6548C12.4741 7.67258 12.4876 7.68591 12.5011 7.68591H13.1986C13.2166 7.68591 13.2256 7.67258 13.2256 7.6548C13.2256 7.63702 13.2166 7.62369 13.1986 7.62369H13.1941ZM12.9691 7.15258H12.9151V7.18813H12.8746V7.15258H12.8161V7.19258H12.7756V7.14813H12.7216V7.23702C12.7216 7.2548 12.7306 7.26369 12.7441 7.26369H12.9421C12.9556 7.26369 12.9691 7.2548 12.9691 7.24147V7.15258ZM12.7621 7.27258L12.7486 7.55702H12.9421L12.9286 7.26813H12.7621"
                              fill="#FFFF00"
                            />
                            <path
                              d="M12.7621 7.27258L12.7486 7.55702H12.9421L12.9286 7.26813H12.7621M12.9511 7.95702C12.9511 7.81036 12.8476 7.77036 12.8476 7.77036C12.8476 7.77036 12.7441 7.8148 12.7441 7.95702H12.9511ZM13.2121 7.55702H12.4786C12.4651 7.55702 12.4516 7.5748 12.4516 7.59258C12.4516 7.60591 12.4651 7.61924 12.4786 7.61924H13.2121C13.2256 7.61924 13.2391 7.60591 13.2391 7.58813C13.2391 7.5748 13.2256 7.56147 13.2121 7.56147V7.55702ZM13.1941 7.62369H12.5011C12.4876 7.62369 12.4741 7.63702 12.4741 7.6548C12.4741 7.67258 12.4876 7.68591 12.5011 7.68591H13.1986C13.2166 7.68591 13.2256 7.67258 13.2256 7.6548C13.2256 7.63702 13.2166 7.62369 13.1986 7.62369H13.1941ZM12.9691 7.15258H12.9151V7.18813H12.8746V7.15258H12.8161V7.19258H12.7756V7.14813H12.7216V7.23702C12.7216 7.2548 12.7306 7.26369 12.7441 7.26369H12.9421C12.9556 7.26369 12.9691 7.2548 12.9691 7.24147V7.15258Z"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.996 7.40588V7.557H13.176V7.40588H12.996Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.996 7.40588V7.557H13.176V7.40588H12.996Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M13.2076 7.29034H13.1536V7.33479H13.1131V7.29034H13.0591V7.33479H13.0186V7.29034H12.9646V7.37923C12.9646 7.39701 12.9736 7.4059 12.9871 7.4059H13.1806C13.1878 7.4059 13.1947 7.40309 13.1997 7.39809C13.2048 7.39309 13.2076 7.38631 13.2076 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M13.2076 7.29034H13.1536V7.33479H13.1131V7.29034H13.0591V7.33479H13.0186V7.29034H12.9646V7.37923C12.9646 7.39701 12.9736 7.4059 12.9871 7.4059H13.1806C13.1878 7.4059 13.1947 7.40309 13.1997 7.39809C13.2048 7.39309 13.2076 7.38631 13.2076 7.37923V7.29034Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.8656 7.36149C12.8656 7.33483 12.8251 7.33483 12.8251 7.36149V7.4326H12.8656V7.36149Z"
                              fill="black"
                            />
                            <path
                              d="M13.1041 7.45927C13.1041 7.4326 13.0681 7.4326 13.0681 7.45927V7.5126H13.1041V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M13.1041 7.45927C13.1041 7.4326 13.0681 7.4326 13.0681 7.45927V7.5126H13.1041V7.45927Z"
                              fill="black"
                            />
                            <path
                              d="M12.22 12.1772C12.3925 12.0019 12.3103 11.8381 12.3103 11.8381C12.3071 11.835 12.1292 11.7464 11.9536 11.9186L12.2168 12.1804"
                              fill="#FFFF00"
                            />
                            <path
                              d="M12.5417 12.0747L12.3627 12.294L12.2295 12.1616C12.3955 11.9987 12.2943 11.8475 12.2943 11.8475C12.2911 11.8444 12.1323 11.7558 11.9727 11.9061L11.8395 11.7737L12.0692 11.5985L12.5448 12.0715L12.5417 12.0747ZM12.369 12.3066L11.83 11.7705C11.8204 11.761 11.8014 11.761 11.7886 11.7735C11.7726 11.7892 11.7726 11.808 11.7821 11.8175L12.3211 12.3536C12.3306 12.3631 12.3497 12.3631 12.3657 12.3475C12.3785 12.335 12.3785 12.3161 12.3658 12.3035L12.369 12.3066Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.1757 12.108C12.281 12.0046 12.2368 11.9039 12.2368 11.9039C12.2368 11.9039 12.132 11.8627 12.0298 11.9629L12.1757 12.108ZM12.6469 12.0091L12.1301 11.495C12.1206 11.4855 12.0983 11.4886 12.0855 11.5011C12.0759 11.5105 12.0759 11.5294 12.0854 11.5388L12.6022 12.0529C12.6118 12.0624 12.6308 12.0624 12.6436 12.0499C12.6532 12.0405 12.6533 12.0216 12.6437 12.0122L12.6469 12.0091ZM12.5864 12.0434L12.098 11.5577C12.0885 11.5483 12.0694 11.5482 12.0567 11.5607C12.0439 11.5732 12.0438 11.5921 12.0533 11.6016L12.5448 12.0904C12.5575 12.103 12.5734 12.0999 12.5862 12.0874C12.599 12.0749 12.6022 12.0592 12.5895 12.0466L12.5864 12.0434ZM12.7663 11.5538L12.7282 11.5159L12.7027 11.541L12.6741 11.5126L12.6997 11.4875L12.6584 11.4465L12.6297 11.4747L12.6012 11.4463L12.6331 11.415L12.5951 11.3772L12.5312 11.4398C12.5184 11.4523 12.5184 11.4649 12.5279 11.4744L12.6674 11.6131C12.6769 11.6226 12.6928 11.6258 12.7024 11.6164L12.7663 11.5538ZM12.5342 11.4933L12.3203 11.6842L12.4567 11.8198L12.6547 11.6068L12.5374 11.4901"
                              fill="#FFFF00"
                            />
                            <path
                              d="M12.5342 11.4933L12.3203 11.6842L12.4567 11.8198L12.6547 11.6068L12.5374 11.4901M12.1757 12.108C12.281 12.0046 12.2368 11.9039 12.2368 11.9039C12.2368 11.9039 12.132 11.8627 12.0298 11.9629L12.1757 12.108ZM12.6469 12.0091L12.1301 11.495C12.1206 11.4855 12.0983 11.4886 12.0855 11.5011C12.0759 11.5105 12.0759 11.5294 12.0854 11.5388L12.6022 12.0529C12.6118 12.0624 12.6308 12.0624 12.6436 12.0499C12.6532 12.0405 12.6533 12.0216 12.6437 12.0122L12.6469 12.0091ZM12.5864 12.0434L12.098 11.5577C12.0885 11.5483 12.0694 11.5482 12.0567 11.5607C12.0439 11.5732 12.0438 11.5921 12.0533 11.6016L12.5448 12.0904C12.5575 12.103 12.5734 12.0999 12.5862 12.0874C12.599 12.0749 12.6022 12.0592 12.5895 12.0466L12.5864 12.0434ZM12.7663 11.5538L12.7282 11.5159L12.7027 11.541L12.6741 11.5126L12.6997 11.4875L12.6584 11.4465L12.6297 11.4747L12.6012 11.4463L12.6331 11.415L12.5951 11.3772L12.5312 11.4398C12.5184 11.4523 12.5184 11.4649 12.5279 11.4744L12.6674 11.6131C12.6769 11.6226 12.6928 11.6258 12.7024 11.6164L12.7663 11.5538Z"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.6033 11.7512L12.4947 11.8576L12.6215 11.9838L12.7301 11.8773L12.6033 11.7512Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.6033 11.7512L12.4947 11.8576L12.6215 11.9838L12.7301 11.8773L12.6033 11.7512Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.8353 11.818L12.7973 11.7801L12.7653 11.8115L12.7368 11.7831L12.7687 11.7518L12.7307 11.7139L12.6988 11.7452L12.6702 11.7169L12.7021 11.6855L12.6641 11.6477L12.6002 11.7103C12.5875 11.7228 12.5874 11.7354 12.5969 11.7449L12.7333 11.8805C12.7383 11.8855 12.7452 11.8883 12.7524 11.8884C12.7595 11.8884 12.7664 11.8856 12.7715 11.8806L12.8353 11.818Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.8353 11.818L12.7973 11.7801L12.7653 11.8115L12.7368 11.7831L12.7687 11.7518L12.7307 11.7139L12.6988 11.7452L12.6702 11.7169L12.7021 11.6855L12.6641 11.6477L12.6002 11.7103C12.5875 11.7228 12.5874 11.7354 12.5969 11.7449L12.7333 11.8805C12.7383 11.8855 12.7452 11.8883 12.7524 11.8884C12.7595 11.8884 12.7664 11.8856 12.7715 11.8806L12.8353 11.818Z"
                              fill="#FFFF00"
                              stroke="black"
                              stroke-width="0.0666669"
                            />
                            <path
                              d="M12.5432 11.6284C12.5624 11.6096 12.5339 11.5812 12.5147 11.6L12.4636 11.6501L12.4922 11.6785L12.5432 11.6284Z"
                              fill="black"
                            />
                            <path
                              d="M12.641 11.8644C12.6602 11.8456 12.6348 11.8204 12.6157 11.8392L12.5773 11.8768L12.6027 11.902L12.641 11.8644Z"
                              fill="black"
                            />
                            <path
                              d="M12.641 11.8644C12.6602 11.8456 12.6348 11.8204 12.6157 11.8392L12.5773 11.8768L12.6027 11.902L12.641 11.8644Z"
                              fill="black"
                            />
                            <path
                              d="M10.4671 10.1081C10.4662 10.2019 10.5016 10.2925 10.5661 10.3614C10.5961 10.3946 10.6328 10.4213 10.6739 10.4396C10.715 10.458 10.7595 10.4677 10.8046 10.4681C10.8991 10.4681 10.9846 10.4237 11.0431 10.3614C11.1075 10.2925 11.1429 10.2019 11.1421 10.1081V9.62811H10.4671V10.1081Z"
                              fill="#003399"
                            />
                            <path
                              d="M10.6245 9.87699C10.6618 9.87699 10.692 9.84714 10.692 9.81032C10.692 9.7735 10.6618 9.74365 10.6245 9.74365C10.5872 9.74365 10.557 9.7735 10.557 9.81032C10.557 9.84714 10.5872 9.87699 10.6245 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 9.87699C11.0353 9.87699 11.0655 9.84714 11.0655 9.81032C11.0655 9.7735 11.0353 9.74365 10.998 9.74365C10.9608 9.74365 10.9305 9.7735 10.9305 9.81032C10.9305 9.84714 10.9608 9.87699 10.998 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.8091 10.0548C10.8464 10.0548 10.8766 10.0249 10.8766 9.98811C10.8766 9.9513 10.8464 9.92145 10.8091 9.92145C10.7718 9.92145 10.7416 9.9513 10.7416 9.98811C10.7416 10.0249 10.7718 10.0548 10.8091 10.0548Z"
                              fill="white"
                            />
                            <path
                              d="M10.6245 10.2414C10.6618 10.2414 10.692 10.2116 10.692 10.1748C10.692 10.1379 10.6618 10.1081 10.6245 10.1081C10.5872 10.1081 10.557 10.1379 10.557 10.1748C10.557 10.2116 10.5872 10.2414 10.6245 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 10.2414C11.0353 10.2414 11.0655 10.2116 11.0655 10.1748C11.0655 10.1379 11.0353 10.1081 10.998 10.1081C10.9608 10.1081 10.9305 10.1379 10.9305 10.1748C10.9305 10.2116 10.9608 10.2414 10.998 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.4671 10.1081C10.4662 10.2019 10.5016 10.2925 10.5661 10.3614C10.5961 10.3946 10.6328 10.4213 10.6739 10.4396C10.715 10.458 10.7595 10.4677 10.8046 10.4681C10.8991 10.4681 10.9846 10.4237 11.0431 10.3614C11.1075 10.2925 11.1429 10.2019 11.1421 10.1081V9.62811H10.4671V10.1081Z"
                              fill="#003399"
                            />
                            <path
                              d="M10.6245 9.87699C10.6618 9.87699 10.692 9.84714 10.692 9.81032C10.692 9.7735 10.6618 9.74365 10.6245 9.74365C10.5872 9.74365 10.557 9.7735 10.557 9.81032C10.557 9.84714 10.5872 9.87699 10.6245 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 9.87699C11.0353 9.87699 11.0655 9.84714 11.0655 9.81032C11.0655 9.7735 11.0353 9.74365 10.998 9.74365C10.9608 9.74365 10.9305 9.7735 10.9305 9.81032C10.9305 9.84714 10.9608 9.87699 10.998 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.8091 10.0548C10.8464 10.0548 10.8766 10.0249 10.8766 9.98811C10.8766 9.9513 10.8464 9.92145 10.8091 9.92145C10.7718 9.92145 10.7416 9.9513 10.7416 9.98811C10.7416 10.0249 10.7718 10.0548 10.8091 10.0548Z"
                              fill="white"
                            />
                            <path
                              d="M10.6245 10.2414C10.6618 10.2414 10.692 10.2116 10.692 10.1748C10.692 10.1379 10.6618 10.1081 10.6245 10.1081C10.5872 10.1081 10.557 10.1379 10.557 10.1748C10.557 10.2116 10.5872 10.2414 10.6245 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 10.2414C11.0353 10.2414 11.0655 10.2116 11.0655 10.1748C11.0655 10.1379 11.0353 10.1081 10.998 10.1081C10.9608 10.1081 10.9305 10.1379 10.9305 10.1748C10.9305 10.2116 10.9608 10.2414 10.998 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.4671 10.1081C10.4662 10.2019 10.5016 10.2925 10.5661 10.3614C10.5961 10.3946 10.6328 10.4213 10.6739 10.4396C10.715 10.458 10.7595 10.4677 10.8046 10.4681C10.8991 10.4681 10.9846 10.4237 11.0431 10.3614C11.1075 10.2925 11.1429 10.2019 11.1421 10.1081V9.62811H10.4671V10.1081Z"
                              fill="#003399"
                            />
                            <path
                              d="M10.6245 9.87699C10.6618 9.87699 10.692 9.84714 10.692 9.81032C10.692 9.7735 10.6618 9.74365 10.6245 9.74365C10.5872 9.74365 10.557 9.7735 10.557 9.81032C10.557 9.84714 10.5872 9.87699 10.6245 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 9.87699C11.0353 9.87699 11.0655 9.84714 11.0655 9.81032C11.0655 9.7735 11.0353 9.74365 10.998 9.74365C10.9608 9.74365 10.9305 9.7735 10.9305 9.81032C10.9305 9.84714 10.9608 9.87699 10.998 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.8091 10.0548C10.8464 10.0548 10.8766 10.0249 10.8766 9.98811C10.8766 9.9513 10.8464 9.92145 10.8091 9.92145C10.7718 9.92145 10.7416 9.9513 10.7416 9.98811C10.7416 10.0249 10.7718 10.0548 10.8091 10.0548Z"
                              fill="white"
                            />
                            <path
                              d="M10.6245 10.2414C10.6618 10.2414 10.692 10.2116 10.692 10.1748C10.692 10.1379 10.6618 10.1081 10.6245 10.1081C10.5872 10.1081 10.557 10.1379 10.557 10.1748C10.557 10.2116 10.5872 10.2414 10.6245 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 10.2414C11.0353 10.2414 11.0655 10.2116 11.0655 10.1748C11.0655 10.1379 11.0353 10.1081 10.998 10.1081C10.9608 10.1081 10.9305 10.1379 10.9305 10.1748C10.9305 10.2116 10.9608 10.2414 10.998 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.4671 10.1081C10.4662 10.2019 10.5016 10.2925 10.5661 10.3614C10.5961 10.3946 10.6328 10.4213 10.6739 10.4396C10.715 10.458 10.7595 10.4677 10.8046 10.4681C10.8991 10.4681 10.9846 10.4237 11.0431 10.3614C11.1075 10.2925 11.1429 10.2019 11.1421 10.1081V9.62811H10.4671V10.1081Z"
                              fill="#003399"
                            />
                            <path
                              d="M10.6245 9.87699C10.6618 9.87699 10.692 9.84714 10.692 9.81032C10.692 9.7735 10.6618 9.74365 10.6245 9.74365C10.5872 9.74365 10.557 9.7735 10.557 9.81032C10.557 9.84714 10.5872 9.87699 10.6245 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 9.87699C11.0353 9.87699 11.0655 9.84714 11.0655 9.81032C11.0655 9.7735 11.0353 9.74365 10.998 9.74365C10.9608 9.74365 10.9305 9.7735 10.9305 9.81032C10.9305 9.84714 10.9608 9.87699 10.998 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.8091 10.0548C10.8464 10.0548 10.8766 10.0249 10.8766 9.98811C10.8766 9.9513 10.8464 9.92145 10.8091 9.92145C10.7718 9.92145 10.7416 9.9513 10.7416 9.98811C10.7416 10.0249 10.7718 10.0548 10.8091 10.0548Z"
                              fill="white"
                            />
                            <path
                              d="M10.6245 10.2414C10.6618 10.2414 10.692 10.2116 10.692 10.1748C10.692 10.1379 10.6618 10.1081 10.6245 10.1081C10.5872 10.1081 10.557 10.1379 10.557 10.1748C10.557 10.2116 10.5872 10.2414 10.6245 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 10.2414C11.0353 10.2414 11.0655 10.2116 11.0655 10.1748C11.0655 10.1379 11.0353 10.1081 10.998 10.1081C10.9608 10.1081 10.9305 10.1379 10.9305 10.1748C10.9305 10.2116 10.9608 10.2414 10.998 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.4671 10.1081C10.4662 10.2019 10.5016 10.2925 10.5661 10.3614C10.5961 10.3946 10.6328 10.4213 10.6739 10.4396C10.715 10.458 10.7595 10.4677 10.8046 10.4681C10.8991 10.4681 10.9846 10.4237 11.0431 10.3614C11.1075 10.2925 11.1429 10.2019 11.1421 10.1081V9.62811H10.4671V10.1081Z"
                              fill="#003399"
                            />
                            <path
                              d="M10.6245 9.87699C10.6618 9.87699 10.692 9.84714 10.692 9.81032C10.692 9.7735 10.6618 9.74365 10.6245 9.74365C10.5872 9.74365 10.557 9.7735 10.557 9.81032C10.557 9.84714 10.5872 9.87699 10.6245 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 9.87699C11.0353 9.87699 11.0655 9.84714 11.0655 9.81032C11.0655 9.7735 11.0353 9.74365 10.998 9.74365C10.9608 9.74365 10.9305 9.7735 10.9305 9.81032C10.9305 9.84714 10.9608 9.87699 10.998 9.87699Z"
                              fill="white"
                            />
                            <path
                              d="M10.8091 10.0548C10.8464 10.0548 10.8766 10.0249 10.8766 9.98811C10.8766 9.9513 10.8464 9.92145 10.8091 9.92145C10.7718 9.92145 10.7416 9.9513 10.7416 9.98811C10.7416 10.0249 10.7718 10.0548 10.8091 10.0548Z"
                              fill="white"
                            />
                            <path
                              d="M10.6245 10.2414C10.6618 10.2414 10.692 10.2116 10.692 10.1748C10.692 10.1379 10.6618 10.1081 10.6245 10.1081C10.5872 10.1081 10.557 10.1379 10.557 10.1748C10.557 10.2116 10.5872 10.2414 10.6245 10.2414Z"
                              fill="white"
                            />
                            <path
                              d="M10.998 10.2414C11.0353 10.2414 11.0655 10.2116 11.0655 10.1748C11.0655 10.1379 11.0353 10.1081 10.998 10.1081C10.9608 10.1081 10.9305 10.1379 10.9305 10.1748C10.9305 10.2116 10.9608 10.2414 10.998 10.2414Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_737">
                              <rect width="27" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">Portuguese</span>
                    </li>
                  </a>
                  <a href="nl">
                    <li class="flag-option">
                      <svg
                        class="flag-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="21"
                          viewBox="0 0 27 21"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_245_875)">
                            <path
                              d="M0 0.655273H27V20.6553H0V0.655273Z"
                              fill="#21468B"
                            />
                            <path
                              d="M0 0.655273H27V13.9886H0V0.655273Z"
                              fill="white"
                            />
                            <path
                              d="M0 0.655273H27V7.32194H0V0.655273Z"
                              fill="#AE1C28"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_245_875">
                              <rect
                                width="27"
                                height="20"
                                fill="white"
                                transform="translate(0 0.655273)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </svg>
                      <span class="flag-label">Dutch</span>
                    </li>
                  </a>{" "}
                  <img
                    src={require("../../assets/heveagriplogo1.png")}
                    alt="HG Logo"
                    className="menu-logo"
                  />
                </ul>
              </div>
            </div>

            <YourComponent
              isSearchBarVisible={isSearchBarVisible}
              handleInputChange={this.handleInputChange}
              handleKeyDown={this.handleKeyDown}
              isProductsOpen={isProductsOpen} // Pass isProductsOpen as a prop
            />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
