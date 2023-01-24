import React from "react";
import Banner from "../../components/Home/Banner";
import Blog from "../../components/Home/Blog";
import Category from "../../components/Home/Category";
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import FlashSales from "../../components/Home/FlashSales";

const Home = () => {
  return (
    <div>
      <Banner />
      {/*------------------------------- POPULAR CATEGORIES SECTION START -------------------------------*/}

      {/*------------------------------- POPULAR CATEGORIES SECTION END -------------------------------*/}
      <Category />

      {/*------------------------------- FEATURED PRODUCT SECTION START -------------------------------*/}
      <FeaturedProducts />
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

      <Blog />

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
