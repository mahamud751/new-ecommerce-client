import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Countdown from "./Countdown";

const options = {
  margin: 30,
  responsiveClass: true,
  //   nav: true,
  dots: true,
  autoplay: true,
  items: 4,
  loop: true,
  //   navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};
const FlashSales = () => {
  return (
    <div>
      <div className="flash-deal">
        <div className="container">
          <div className="panel">
            <div className="panel-header">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-2 col-6">
                  <h2 className="title">Flash Deal!</h2>
                </div>
                <div className="col-lg-8 col-md-8 countdown-col">
                  <div className="countdown-wrap d-flex">
                    <h3>Ending Soon...</h3>
                    <div
                      className="countdown"
                      style={{
                        fontSize: 28,
                        color: "white",
                        padding: "0px 20px",
                        background: "black",
                      }}
                    >
                      <Countdown />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-6">
                  <div className="text-end">
                    <a href="shop.html" className="explore-section">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="col-12">
                <OwlCarousel className="owl-main  owl-theme" {...options}>
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/flash-deal-1.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-details.html"
                              className="view-product"
                            >
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name">
                        <a href="shop-details.html">Casual Walking Sneaker</a>
                      </h4>
                      <p className="dscr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus aliquid laborum aperiam dolores.
                        Dignissimos at harum corporis qui illo nam fugit
                        recusandae ratione odit neque officia, accusamus ab,
                        assumenda odio.
                      </p>
                      <p className="price">
                        <span>$96.00</span>$75.00
                      </p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                  <div className="single-product-card">
                    <div className="part-img">
                      <span className="off-tag">15%</span>
                      <a href="shop-details.html">
                        <img
                          src="assets/images/flash-deal-2.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-details.html"
                              className="view-product"
                            >
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name">
                        <a href="shop-details.html">Sports Water Bottle</a>
                      </h4>
                      <p className="dscr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus aliquid laborum aperiam dolores.
                        Dignissimos at harum corporis qui illo nam fugit
                        recusandae ratione odit neque officia, accusamus ab,
                        assumenda odio.
                      </p>
                      <p className="price">
                        <span>$96.00</span>$75.00
                      </p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/flash-deal-3.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-details.html"
                              className="view-product"
                            >
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name">
                        <a href="shop-details.html">Mithai Black Forest Cake</a>
                      </h4>
                      <p className="dscr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus aliquid laborum aperiam dolores.
                        Dignissimos at harum corporis qui illo nam fugit
                        recusandae ratione odit neque officia, accusamus ab,
                        assumenda odio.
                      </p>
                      <p className="price">
                        <span>$96.00</span>$75.00
                      </p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                  <div className="single-product-card">
                    <div className="part-img">
                      <span className="off-tag">15%</span>
                      <a href="shop-details.html">
                        <img
                          src="assets/images/flash-deal-4.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-details.html"
                              className="view-product"
                            >
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name">
                        <a href="shop-details.html">Kerayin 55 Momentum</a>
                      </h4>
                      <p className="dscr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus aliquid laborum aperiam dolores.
                        Dignissimos at harum corporis qui illo nam fugit
                        recusandae ratione odit neque officia, accusamus ab,
                        assumenda odio.
                      </p>
                      <p className="price">
                        <span>$96.00</span>$75.00
                      </p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/flash-deal-5.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-details.html"
                              className="view-product"
                            >
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name">
                        <a href="shop-details.html">Gamepad Controller</a>
                      </h4>
                      <p className="dscr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus aliquid laborum aperiam dolores.
                        Dignissimos at harum corporis qui illo nam fugit
                        recusandae ratione odit neque officia, accusamus ab,
                        assumenda odio.
                      </p>
                      <p className="price">
                        <span>$96.00</span>$75.00
                      </p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-1.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-details.html"
                              className="view-product"
                            >
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name">
                        <a href="shop-details.html">Fried Rice Set Menu</a>
                      </h4>
                      <p className="dscr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus aliquid laborum aperiam dolores.
                        Dignissimos at harum corporis qui illo nam fugit
                        recusandae ratione odit neque officia, accusamus ab,
                        assumenda odio.
                      </p>
                      <p className="price">
                        <span>$96.00</span>$75.00
                      </p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
