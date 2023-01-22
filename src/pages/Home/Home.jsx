import React from "react";
import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import FlashSales from "../../components/Home/FlashSales";

const Home = () => {
  return (
    <div>
      <Banner />
      {/*------------------------------- POPULAR CATEGORIES SECTION START -------------------------------*/}

      {/*------------------------------- POPULAR CATEGORIES SECTION END -------------------------------*/}
      <Category />
      <FlashSales />

      {/*------------------------------- FEATURED PRODUCT SECTION START -------------------------------*/}
      <div className="featured-product py-25">
        <div className="container">
          <div className="panel">
            <div className="panel-header">
              <div className="row">
                <div className="col-8">
                  <h2 className="title">products</h2>
                </div>
                <div className="col-4">
                  <div className="text-end">
                    <a href="shop.html" className="explore-section">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="product-custom-row">
                <div className="custom-col">
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
                        <a href="shop-details.html">Chicken Rice Bowl</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-2.jpg"
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
                        <a href="shop-details.html">Living Summer Chair</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-3.jpg"
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
                        <a href="shop-details.html">Diamond wedding ring</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-4.jpg"
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
                        <a href="shop-details.html">Travel handle totte bags</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-5.jpg"
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
                        <a href="shop-details.html">Short-Sleeve T-Shirt</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-6.jpg"
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
                        <a href="shop-details.html">Monster Bootle</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-7.jpg"
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
                        <a href="shop-details.html">Wireless Speaker</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-8.jpg"
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
                        <a href="shop-details.html">Blood Pressure Indicator</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-9.jpg"
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
                        <a href="shop-details.html">Hand Sanitizer</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-10.jpg"
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
                        <a href="shop-details.html">Wireless Headphone</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-6.jpg"
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
                        <a href="shop-details.html">Monster Bootle</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-7.jpg"
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
                        <a href="shop-details.html">Wireless Speaker</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-8.jpg"
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
                        <a href="shop-details.html">Blood Pressure Indicator</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-9.jpg"
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
                        <a href="shop-details.html">Hand Sanitizer</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="shop-details.html">
                        <img
                          src="assets/images/feat-product-10.jpg"
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
                        <a href="shop-details.html">Wireless Headphone</a>
                      </h4>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------- FEATURED PRODUCT SECTION END -------------------------------*/}
      {/*------------------------------- SUBSCRIBE SECTION START -------------------------------*/}
      <div className="subscribe py-25">
        <div className="container">
          <div className="bg">
            <div className="heading text-center">
              <h2>Subscribe Our Newsletter</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <form className="form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Here..."
                  />
                  <button type="submit" className="def-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------- SUBSCRIBE SECTION END -------------------------------*/}
      {/*------------------------------- BLOG SECTION START -------------------------------*/}
      <div className="blog pt-25 pb-50">
        <div className="container">
          <div className="panel panel-2">
            <div className="heading text-center">
              <h2>Latest Blog</h2>
            </div>
            <div className="blog-slider">
              <div className="single-blog">
                <div className="part-img">
                  <img src="assets/images/blog-img-1.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <div className="tag-n-date">
                    <span>Shoping</span> <span>/</span>{" "}
                    <span>May 23, 2021</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Commodo Sociosqu Venenatis Cras Dolor Sagittis Teger
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis
                  </p>
                  <a href="blog-details.html" className="continue">
                    <span>
                      <i className="fa-light fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="single-blog">
                <div className="part-img">
                  <img src="assets/images/blog-img-2.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <div className="tag-n-date">
                    <span>Shoping</span> <span>/</span>{" "}
                    <span>May 23, 2021</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Commodo Sociosqu Venenatis Cras Dolor Sagittis Teger
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis
                  </p>
                  <a href="blog-details.html" className="continue">
                    <span>
                      <i className="fa-light fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="single-blog">
                <div className="part-img">
                  <img src="assets/images/blog-img-3.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <div className="tag-n-date">
                    <span>Shoping</span> <span>/</span>{" "}
                    <span>May 23, 2021</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Commodo Sociosqu Venenatis Cras Dolor Sagittis Teger
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis
                  </p>
                  <a href="blog-details.html" className="continue">
                    <span>
                      <i className="fa-light fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="single-blog">
                <div className="part-img">
                  <img src="assets/images/blog-img-4.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <div className="tag-n-date">
                    <span>Shoping</span> <span>/</span>{" "}
                    <span>May 23, 2021</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Commodo Sociosqu Venenatis Cras Dolor Sagittis Teger
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis
                  </p>
                  <a href="blog-details.html" className="continue">
                    <span>
                      <i className="fa-light fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------- BLOG SECTION END -------------------------------*/}
      {/*------------------------------- FEATURES SECTION START -------------------------------*/}
      <div className="features" id="feature">
        <div className="container">
          <div className="panel px-0">
            <div className="custom-row">
              <div className="custom-col">
                <div className="single-feature">
                  <div className="part-icon">
                    <span>
                      <i className="flaticon-money-saving" />
                    </span>
                  </div>
                  <div className="part-txt">
                    <h4>Free Delivery</h4>
                    <p>For all order over $99</p>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="single-feature">
                  <div className="part-icon">
                    <span>
                      <i className="flaticon-dollar" />
                    </span>
                  </div>
                  <div className="part-txt">
                    <h4>30 Days Return</h4>
                    <p>If goods have Problems</p>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="single-feature">
                  <div className="part-icon">
                    <span>
                      <i className="flaticon-credit-card" />
                    </span>
                  </div>
                  <div className="part-txt">
                    <h4>Secure Payment</h4>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="single-feature">
                  <div className="part-icon">
                    <span>
                      <i className="flaticon-call-center" />
                    </span>
                  </div>
                  <div className="part-txt">
                    <h4>24/7 Support</h4>
                    <p>Dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------- FEATURES SECTION END -------------------------------*/}
    </div>
  );
};

export default Home;
