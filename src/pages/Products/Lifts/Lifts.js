import React, { useState } from "react";
import "../allproducts.css";
import { useNavigate } from "react-router-dom"; // If using React Router

// Import product images
import AllProductImage6 from "../../../assets/productimage6.jpg";
import AllProductImage7 from "../../../assets/productimage7.jpg";
import AllProductImage50 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage51 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage52 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage53 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage54 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage55 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage56 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage57 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage58 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage59 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage60 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage61 from "../../../assets/WorldLiftsProduct1Image1.jpg";
import AllProductImage94 from "../../../assets/IMG_3073.jpg";
import AllProductImage95 from "../../../assets/IMG_3073.jpg";
import AllProductImage96 from "../../../assets/IMG_3073.jpg";
import AllProductImage127 from "../../../assets/kroftoolsproduct37image1.jpg";
import AllProductImage97 from "../../../assets/IMG_3073.jpg";
import AllProductImage98 from "../../../assets/IMG_3073.jpg";
import AllProductImage99 from "../../../assets/IMG_3073.jpg";
import AllProductImage100 from "../../../assets/IMG_3073.jpg";
import AllProductImage101 from "../../../assets/IMG_3073.jpg";
import AllProductImage102 from "../../../assets/IMG_3073.jpg";
import AllProductImage103 from "../../../assets/IMG_3073.jpg";
import AllProductImage104 from "../../../assets/IMG_3073.jpg";
import AllProductImage105 from "../../../assets/IMG_3073.jpg";
import AllProductImage108 from "../../../assets/kroftoolsproduct20image1.jpg";
import AllProductImage109 from "../../../assets/kroftoolsproduct21image1.jpg";
import AllProductImage110 from "../../../assets/kroftoolsproduct22image1.jpg";
import AllProductImage111 from "../../../assets/kroftoolsproduct23image1.jpg";
import AllProductImage112 from "../../../assets/kroftoolsproduct24image1.jpg";
import AllProductImage113 from "../../../assets/kroftoolsproduct25image1.jpg";
import AllProductImage114 from "../../../assets/kroftoolsproduct26image1.jpg";
import AllProductImage115 from "../../../assets/kroftoolsproduct27image1.jpg";
import AllProductImage116 from "../../../assets/kroftoolsproduct28image1.jpg";
import AllProductImage117 from "../../../assets/kroftoolsproduct29image1.jpg";
import AllProductImage128 from "../../../assets/Sirius3,5t-1.jpg";
import AllProductImage129 from "../../../assets/WorldLiftsProduct4Image1.jpg";
import AllProductImage130 from "../../../assets/WorldLiftsProduct5Image1.jpg";

const Lifts = () => {
  const initialProducts = [
    {
      image: AllProductImage6,
      name: "Flush-Mount Alignment Scissor Lift",
      price: 0,
      stock: "Instock (180 st)",
      link: "product6",
    },
    {
      image: AllProductImage7,
      name: "4-Post Lift",
      price: 0,
      stock: "Instock (280)",
      link: "product7",
    },
    {
      image: AllProductImage50,
      name: "Two Post Lift Floor Connection F40 MR2/2 ALCOR 4.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage51,
      name: "Two Post Lift Floor Connection F40 MR3/2 ALCOR 4.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage127,
      name: "KroftTools 3.5-Ton Hydraulic Scissor Lift",
      price: 0,
      newproduct: "New",
      stock: "Instock (100)",
      link: "product8",
    },
    {
      image: AllProductImage52,
      name: "Two Post Lift Floor Connection F40 MR3/3 ALCOR 4.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage108,
      name: "KrofTools 4-Column Lift, 6.5 Ton, 5.5 m",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage109,
      name: "KrofTools 4-Column Lift, 5 Ton, 5.19 m",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage110,
      name: "KrofTools 4-Column Lift, 4.5 Ton, 4.65 m",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage111,
      name: "KrofTools 4-Ton Lift, Two Columns, 220V - Basic Line",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage112,
      name: "KrofTools 4-Ton Two-Post Baseless Lift, 380V",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage113,
      name: "KrofTools Electro-Hydraulic Two-Column Lift, 4 Ton, 220V",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage114,
      name: "KrofTools 5 Ton Two-Column Lift, 380V",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage115,
      name: "KrofTools 3.2 Ton Screw Two-Post Lift, H-Type, Single Motor",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage116,
      name: "KrofTools 3 Ton Movable Floor Hydraulic Scissor Lift",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage117,
      name: "KrofTools 3.5 Ton Double Scissor Lift for Alignment with LED",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage53,
      name: "World Lifts Two Post Lift Floor Connection F40 FA2/2 ALCOR 4.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage128,
      name: "World Lifts Sirius DL-3.5-Ton Scissor Lift",
      price: 0,
      newproduct: "New",
      stock: "Instock (100)",
      link: "product8",
    },
    {
      image: AllProductImage129,
      name: "World Lifts Galaxy DL-GA30d 3-Ton Scissor Lift",
      price: 0,
      newproduct: "New",
      stock: "Instock (100)",
      link: "product8",
    },
    {
      image: AllProductImage130,
      name: "World Lifts Single Mobile Scissor Lift - 3,000 kg Capacity",
      price: 0,
      newproduct: "New",
      stock: "Instock (100)",
      link: "product8",
    },
    {
      image: AllProductImage54,
      name: "World Lifts Two Post Lift Floor Connection F40 FA3/2 ALCOR 4.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage55,
      name: "World Lifts Two Post Lift Floor Connection F40 FA3/3 ALCOR 4.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },

    {
      image: AllProductImage56,
      name: "World Lifts Two Post Lift Floor Connection F50 MR2/2 ALCOR 5.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage57,
      name: "World Lifts Two Post Lift Floor Connection F50 MR3/2 ALCOR 5.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage58,
      name: "World Lifts Two Post Lift Floor Connection F50 MR3/3 ALCOR 5.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },

    {
      image: AllProductImage59,
      name: "World Lifts Two Post Lift Floor Connection F50 FA2/2 ALCOR 5.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage60,
      name: "World Lifts Two Post Lift Floor Connection F50 FA3/2 ALCOR 5.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage61,
      name: "World Lifts Two Post Lift Floor Connection F50 FA3/3 ALCOR 5.0 Ton",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage94,
      name: "World Lifts Atlas T40 MR2/2 Two-Post Lift, 4 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage95,
      name: "World Lifts Atlas T40 MR3/2 Two-Post Lift, 4 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage96,
      name: "World Lifts Atlas T40 MR3/3 Two-Post Lift, 4 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage97,
      name: "World Lifts Atlas T40 FA2/2 Two-Post Lift, 4 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage98,
      name: "World Lifts Atlas T40 FA3/2 Two-Post Lift, 4 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage99,
      name: "World Lifts Atlas T40 FA3/3 Two-Post Lift, 4 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage100,
      name: "World Lifts Atlas T50 MR2/2 Two-Post Lift, 5 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage101,
      name: "World Lifts Atlas T50 MR3/2 Two-Post Lift, 5 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage102,
      name: "World Lifts Atlas T50 MR3/3 Two-Post Lift, 5 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage103,
      name: "World Lifts Atlas T50 FA2/2 Two-Post Lift, 5 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage104,
      name: "World Lifts Atlas T50 FA3/2 Two-Post Lift, 5 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
    {
      image: AllProductImage105,
      name: "World Lifts Atlas T50 FA3/3 Two-Post Lift, 5 Ton Capacity",
      price: 0,
      stock: "Instock (100)",
      link: "product49",
    },
  ];

  const [displayedProducts, setDisplayedProducts] = useState(initialProducts);
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(""); // State to track selected filter
  const [showDropdown, setShowDropdown] = useState(false);
  const filterOptions = ["Price Low to High", "Price High to Low", "Alphabetical A-Z", "Alphabetical Z-A", "Newest Arrivals", "Popular Products"];
  const navigate = useNavigate(); // If using React Router

  const handleFilterSelection = (filter) => {
    // Create a copy of the initialProducts array
    let sortedProducts = [...initialProducts];
  
    if (filter === "Price Low to High") {
      sortedProducts.sort((a, b) => {
        // Handle "Contact For Price" and zero-priced products
        if (a.price === "Contact For Price") return -1;
        if (a.price === 0) return -1;
        if (b.price === "Contact For Price") return 1;
        if (b.price === 0) return 1;
  
        return a.price - b.price;
      });
    } else if (filter === "Price High to Low") {
      sortedProducts.sort((a, b) => {
        // Handle "Contact For Price" and zero-priced products
        if (a.price === "Contact For Price") return 1;
        if (a.price === 0) return 1;
        if (b.price === "Contact For Price") return -1;
        if (b.price === 0) return -1;
  
        return b.price - a.price;
      });
    } else if (filter === "Alphabetical A-Z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === "Alphabetical Z-A") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filter === "Newest Arrivals") {
      sortedProducts.sort((a, b) => {
        if (a.newproduct === "New" && b.newproduct !== "New") return -1;
        if (a.newproduct !== "New" && b.newproduct === "New") return 1;
        return new Date(b.date) - new Date(a.date);
      });
    } else if (filter === "Popular Products") {
      // Add your logic to sort by popularity
      // Example: You can sort by the number of sales or views
    }
  
    // Update the displayedProducts state with the sorted copy
    setDisplayedProducts(sortedProducts);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleAddToWishlist = (productName) => {
    setWishlistItems([...wishlistItems, productName]);
    alert(`Added ${productName} to wishlist`);
  };
  const navigateToDetailPage = (product) => {
    // Navigate to the detail page and pass the product data
    // If using React Router:
    // Or, if passing the data as props:
    // <BidImageDetail productData={product} />
  };

  const handleProductClick = (product) => {
    navigateToDetailPage(product);
  };
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart`);
  };

  const renderProductGrid = () => {
    return displayedProducts.map((product, index) => (
      <div
        key={index}
        className={`all-products-one-page-hg-${index + 1}`}
        onClick={() => handleProductClick(product)}
      >
        <div key={index} className={`all-products-one-page-hg-${index + 1}`}>
          {/* <a href={`/fasepproduct/${index + 1}`} className="product-link">  */}
          <a href={`/fasepproduct1`} className="product-link">
            <div
              className="product-card"
              onMouseEnter={() => setShowWishlist(true)}
              onMouseLeave={() => setShowWishlist(false)}
            >
              <img
                src={product.image}
                alt={`Product ${index + 1}`}
                className="product-image"
              />
              {product.discount && (
                <div className="discount-label">{product.discount}</div>
              )}
              {product.newproduct && (
                <div className="newproduct-label">{product.newproduct}</div>
              )}
              <div
                className={`stock-label ${
                  product.stock.includes("Instock")
                    ? "instock-label"
                    : "outofstock-label"
                }`}
              >
                {product.stock}
              </div>
              <div className="product-name">{product.name}</div>
              <div className="price-container">
                <div className="price-label">Price:</div>
                {product.link === "product1" ||
                product.link === "product2" ||
                product.link === "product22" ||
                product.link === "product23" ||
                product.link === "product5" ||
                product.link === "product6" ||
                product.link === "product7" ||
                product.link === "product8" ||
                product.link === "product9" ||
                product.link === "product10" ||
                product.link === "product11" ||
                product.link === "product12" ||
                product.link === "product13" ||
                product.link === "product14" ||
                product.link === "product17" ||
                product.link === "product15" ||
                product.link === "product16" ||
                product.link === "product1" ||
                product.link === "product18" ||
                product.link === "product19" ||
                product.link === "product20" ||
                product.link === "product30" ||
                product.link === "product47" ||
                product.link === "product48" ||
                product.link === "product49" ||
                product.link === "product21" ? (
                  <span
                    className="contact-for-price"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Contact For Price
                  </span>
                ) : product.discount ? (
                  <>
                    <span className="original-price discount">
                      {product.price} SEK
                    </span>
                    <span className="discounted-price">
                      {Math.round(product.price * 0.7)} SEK
                    </span>
                  </>
                ) : (
                  <span className="original-price">{product.price} SEK</span>
                )}
              </div>
              <button
                onClick={() => handleAddToCart(product.name)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
              <div className="wishlist-container">
                <a
                  href="https://twitter.com/SnaitheAB"
                  className="wishlist-link"
                >
                  <div className="wishlist-socials">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_35_4820)">
                        <path
                          d="M8.34863 6.236L7.51051 4.447C7.30238 4.004 6.94145 3.367 6.43051 2.852C5.92801 2.345 5.32613 2 4.59863 2C3.02738 2 1.78613 3.326 1.78613 4.92C1.78613 6.131 2.30551 6.986 3.53738 8.29C3.85332 8.624 4.21332 8.985 4.61176 9.383C5.65051 10.423 6.94238 11.717 8.34863 13.447C9.75488 11.717 11.0468 10.423 12.0855 9.383C12.4839 8.985 12.8449 8.623 13.1599 8.29C14.3918 6.986 14.9111 6.131 14.9111 4.92C14.9111 3.326 13.6699 2 12.0986 2C11.3702 2 10.7693 2.345 10.2668 2.852C9.75582 3.367 9.39488 4.004 9.18676 4.447L8.34863 6.236ZM8.71613 14.528C8.67099 14.585 8.61471 14.6309 8.55124 14.6623C8.48776 14.6938 8.41862 14.7101 8.34863 14.7101C8.27865 14.7101 8.2095 14.6938 8.14603 14.6623C8.08255 14.6309 8.02628 14.585 7.98113 14.528C6.4802 12.626 5.12176 11.266 4.00332 10.147C2.06738 8.208 0.848633 6.989 0.848633 4.92C0.848633 2.755 2.52676 1 4.59863 1C6.09863 1 7.1477 2.05 7.78988 3.008C8.03363 3.373 8.21926 3.724 8.34863 4C8.51081 3.65457 8.69761 3.32293 8.90738 3.008C9.54957 2.049 10.5986 1 12.0986 1C14.1705 1 15.8486 2.755 15.8486 4.92C15.8486 6.989 14.6299 8.208 12.6939 10.147C11.5755 11.267 10.2171 12.628 8.71613 14.528Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_35_4820">
                          <rect
                            width="15"
                            height="16"
                            fill="white"
                            transform="translate(0.848633)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="wishlist-name">Wishlist</p>
                  </div>
                </a>
              </div>{" "}
              <div className="compare-container">
                <a href="/compare" className="compare-link">
                  <div className="compare-socials">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_35_4824)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.925293 3.50055C0.925293 3.36794 0.974679 3.24076 1.06259 3.147C1.15049 3.05323 1.26972 3.00055 1.39404 3.00055H1.86279C3.92717 3.00055 5.45061 4.24055 6.43217 5.41855C6.89154 5.97055 7.24311 6.52055 7.48779 6.95055C7.73154 6.52055 8.08404 5.97055 8.54342 5.41855C9.52498 4.24055 11.0484 3.00055 13.1128 3.00055V4.00055C11.4272 4.00055 10.1381 5.01055 9.24467 6.08255C8.76157 6.66621 8.34667 7.31026 8.00904 8.00055C8.34637 8.69079 8.76097 9.33483 9.24373 9.91855C10.139 10.9905 11.429 12.0005 13.1128 12.0005V13.0005C11.0484 13.0005 9.52498 11.7605 8.54342 10.5825C8.14921 10.1067 7.79591 9.59393 7.48779 9.05055C7.24404 9.48055 6.89154 10.0305 6.43217 10.5825C5.45061 11.7605 3.92717 13.0005 1.86279 13.0005H1.39404C1.26972 13.0005 1.15049 12.9479 1.06259 12.8541C0.974679 12.7603 0.925293 12.6332 0.925293 12.5005C0.925293 12.3679 0.974679 12.2408 1.06259 12.147C1.15049 12.0532 1.26972 12.0005 1.39404 12.0005H1.86279C3.54842 12.0005 4.83748 10.9905 5.73092 9.91855C6.21401 9.33488 6.62892 8.69084 6.96654 8.00055C6.62921 7.31031 6.21462 6.66627 5.73186 6.08255C4.83654 5.01055 3.54654 4.00055 1.86279 4.00055H1.39404C1.26972 4.00055 1.15049 3.94787 1.06259 3.8541C0.974679 3.76033 0.925293 3.63316 0.925293 3.50055Z"
                          fill="black"
                        />
                        <path
                          d="M13.1128 5.46641V1.53441C13.1128 1.4869 13.1255 1.44039 13.1494 1.40031C13.1733 1.36023 13.2074 1.32824 13.2478 1.3081C13.2881 1.28795 13.333 1.28048 13.3771 1.28655C13.4213 1.29263 13.4629 1.312 13.4972 1.34241L15.7097 3.30841C15.8222 3.40841 15.8222 3.59241 15.7097 3.69241L13.4972 5.65841C13.4629 5.68881 13.4213 5.70818 13.3771 5.71426C13.333 5.72034 13.2881 5.71286 13.2478 5.69272C13.2074 5.67257 13.1733 5.64059 13.1494 5.60051C13.1255 5.56043 13.1128 5.51391 13.1128 5.46641ZM13.1128 14.4664V10.5344C13.1128 10.4869 13.1255 10.4404 13.1494 10.4003C13.1733 10.3602 13.2074 10.3282 13.2478 10.3081C13.2881 10.2879 13.333 10.2805 13.3771 10.2866C13.4213 10.2926 13.4629 10.312 13.4972 10.3424L15.7097 12.3084C15.8222 12.4084 15.8222 12.5924 15.7097 12.6924L13.4972 14.6584C13.4629 14.6888 13.4213 14.7082 13.3771 14.7143C13.333 14.7203 13.2881 14.7129 13.2478 14.6927C13.2074 14.6726 13.1733 14.6406 13.1494 14.6005C13.1255 14.5604 13.1128 14.5139 13.1128 14.4664Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_35_4824">
                          <rect
                            width="15"
                            height="16"
                            fill="white"
                            transform="translate(0.925293)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="compare-name">Compare</p>
                  </div>
                </a>
              </div>{" "}
              <div className="share-container">
                <a href="https://twitter.com/SnaitheAB" className="share-link">
                  <div className="share-socials">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_35_4829)">
                        <path
                          d="M9.89175 2.87725C9.89169 2.36516 10.0717 1.86934 10.4003 1.47656C10.7288 1.08378 11.1851 0.819032 11.6891 0.72865C12.1932 0.638267 12.713 0.728 13.1576 0.98215C13.6021 1.2363 13.9432 1.63868 14.1211 2.1189C14.2989 2.59911 14.3023 3.12658 14.1305 3.60901C13.9588 4.09145 13.6229 4.49813 13.1815 4.75791C12.7402 5.01768 12.2216 5.11401 11.7165 5.03004C11.2113 4.94607 10.7517 4.68714 10.4182 4.29856L4.55311 7.02245C4.68795 7.44975 4.68795 7.9082 4.55311 8.3355L10.4182 11.0594C10.7708 10.6493 11.263 10.3848 11.7995 10.317C12.336 10.2492 12.8786 10.383 13.3221 10.6924C13.7656 11.0019 14.0784 11.465 14.1999 11.9919C14.3214 12.5188 14.243 13.0721 13.9798 13.5446C13.7167 14.017 13.2875 14.3749 12.7755 14.5489C12.2635 14.7229 11.7051 14.7006 11.2085 14.4864C10.712 14.2722 10.3127 13.8813 10.0879 13.3894C9.8632 12.8975 9.82907 12.3398 9.99215 11.8242L4.12707 9.10028C3.83673 9.43864 3.44972 9.67997 3.01812 9.7918C2.58651 9.90363 2.13101 9.88059 1.71289 9.72579C1.29477 9.57099 0.934083 9.29185 0.679358 8.92592C0.424633 8.55999 0.288086 8.12483 0.288086 7.67897C0.288086 7.23311 0.424633 6.79795 0.679358 6.43202C0.934083 6.06609 1.29477 5.78695 1.71289 5.63215C2.13101 5.47735 2.58651 5.45431 3.01812 5.56614C3.44972 5.67797 3.83673 5.9193 4.12707 6.25766L9.99215 3.53378C9.92539 3.32134 9.89153 3.09994 9.89175 2.87725Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_35_4829">
                          <rect
                            width="13.9686"
                            height="13.9686"
                            fill="white"
                            transform="translate(0.288574 0.694382)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="share-name">Share</p>
                  </div>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    ));
  };

  return (
    <div className="all-products-container">
      <div className="filter-mode-allproducts-22" onClick={toggleDropdown}>
        {" "}
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6426 0H0.69815C0.512989 0 0.335412 0.0710188 0.204483 0.197433C0.0735548 0.323847 0 0.495301 0 0.674078V1.79979C0.000130541 1.959 0.0328926 2.1166 0.0963982 2.26353C0.159904 2.41046 0.252897 2.5438 0.370019 2.65587L8.37779 10.5021V17.3777L9.77409 17.89V10.1112C9.77463 10.0225 9.75701 9.93451 9.72227 9.85238C9.68753 9.77025 9.63634 9.69556 9.57163 9.63257L1.3963 1.74586V1.34816H20.9445V1.75934L12.7971 9.63257C12.7273 9.69328 12.6709 9.76696 12.6314 9.84919C12.5918 9.93143 12.5698 10.0205 12.5667 10.1112V19.0157L13.963 19.5483V10.4482L21.9708 2.69631C22.0898 2.5814 22.1838 2.44469 22.2474 2.29421C22.3109 2.14373 22.3427 1.98251 22.3408 1.82001V0.674078C22.3408 0.495301 22.2672 0.323847 22.1363 0.197433C22.0054 0.0710188 21.8278 0 21.6426 0Z"
            fill="#828282"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      {/* Dropdown menu */}
      {showDropdown && (
        <div className="hg--product-11-dropdown-menu">
          {filterOptions.map((option, index) => (
            <div key={index} onClick={() => handleFilterSelection(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
      {/* <a href="/compare" className="compare-mode-allproducts-22">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_35_5214)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5.68838C0 5.4729 0.0856024 5.26623 0.237976 5.11386C0.390349 4.96149 0.597012 4.87589 0.8125 4.87589H1.625C5.20325 4.87589 7.84387 6.89088 9.54525 8.80513C10.3415 9.70213 10.9509 10.5959 11.375 11.2946C11.7975 10.5959 12.4085 9.70213 13.2048 8.80513C14.9061 6.89088 17.5467 4.87589 21.125 4.87589V6.50088C18.2032 6.50088 15.9689 8.14213 14.4202 9.88413C13.5829 10.8326 12.8637 11.8792 12.2785 13.0009C12.8632 14.1225 13.5818 15.1691 14.4186 16.1176C15.9705 17.8596 18.2065 19.5009 21.125 19.5009V21.1259C17.5467 21.1259 14.9061 19.1109 13.2048 17.1966C12.5215 16.4233 11.9091 15.5901 11.375 14.7071C10.9525 15.4059 10.3415 16.2996 9.54525 17.1966C7.84387 19.1109 5.20325 21.1259 1.625 21.1259H0.8125C0.597012 21.1259 0.390349 21.0403 0.237976 20.8879C0.0856024 20.7355 0 20.5289 0 20.3134C0 20.0979 0.0856024 19.8912 0.237976 19.7389C0.390349 19.5865 0.597012 19.5009 0.8125 19.5009H1.625C4.54675 19.5009 6.78112 17.8596 8.32975 16.1176C9.16711 15.1692 9.88628 14.1226 10.4715 13.0009C9.88679 11.8792 9.16817 10.8327 8.33137 9.88413C6.7795 8.14213 4.5435 6.50088 1.625 6.50088H0.8125C0.597012 6.50088 0.390349 6.41528 0.237976 6.26291C0.0856024 6.11054 0 5.90387 0 5.68838Z"
              fill="#828282"
            />
            <path
              d="M21.126 8.88294V2.49344C21.126 2.41625 21.148 2.34066 21.1895 2.27553C21.2309 2.2104 21.29 2.15842 21.3599 2.12568C21.4298 2.09295 21.5076 2.0808 21.5842 2.09068C21.6608 2.10055 21.7329 2.13204 21.7922 2.18144L25.6272 5.37619C25.8222 5.53869 25.8222 5.83769 25.6272 6.00019L21.7922 9.19494C21.7329 9.24434 21.6608 9.27583 21.5842 9.2857C21.5076 9.29557 21.4298 9.28343 21.3599 9.25069C21.29 9.21796 21.2309 9.16598 21.1895 9.10085C21.148 9.03572 21.126 8.96013 21.126 8.88294ZM21.126 23.5079V17.1184C21.126 17.0412 21.148 16.9657 21.1895 16.9005C21.2309 16.8354 21.29 16.7834 21.3599 16.7507C21.4298 16.7179 21.5076 16.7058 21.5842 16.7157C21.6608 16.7256 21.7329 16.757 21.7922 16.8064L25.6272 20.0012C25.8222 20.1637 25.8222 20.4627 25.6272 20.6252L21.7922 23.8199C21.7329 23.8693 21.6608 23.9008 21.5842 23.9107C21.5076 23.9206 21.4298 23.9084 21.3599 23.8757C21.29 23.843 21.2309 23.791 21.1895 23.7258C21.148 23.6607 21.126 23.5851 21.126 23.5079Z"
              fill="#828282"
            />
          </g>
          <defs>
            <clipPath id="clip0_35_5214">
              <rect width="26" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div class="compare-mode-allproducts-33">Compare (3)</div>
      </a> */}
      <a href="/listviewproducts" className="list-button-view1">
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.2787 11.9997H10.1787M26.2787 21.1997H10.1787M26.2787 2.79971H10.1787"
            stroke="#828282"
            stroke-width="2.09524"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.27622 5.1C4.42622 5.1 5.57622 3.95 5.57622 2.8C5.57622 1.65 4.42622 0.5 3.27622 0.5C2.12622 0.5 0.978516 1.65 0.978516 2.8C0.978516 3.95 2.12622 5.1 3.27622 5.1ZM3.27622 14.3C4.42622 14.3 5.57622 13.15 5.57622 12C5.57622 10.85 4.42622 9.7 3.27622 9.7C2.12622 9.7 0.978516 10.85 0.978516 12C0.978516 13.15 2.12622 14.3 3.27622 14.3ZM3.27622 23.5C4.42622 23.5 5.57622 22.35 5.57622 21.2C5.57622 20.05 4.42622 18.9 3.27622 18.9C2.12622 18.9 0.978516 20.05 0.978516 21.2C0.978516 22.35 2.12622 23.5 3.27622 23.5Z"
            fill="#828282"
          />
        </svg>{" "}
      </a>

      <div className="All-Products-Titles">All Lifts</div>
      {renderProductGrid()}
      <div className="show-more-container"></div>
    </div>
  );
};

export default Lifts;
