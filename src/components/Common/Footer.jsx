import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="main-footer">
          <div className="container">
            <div className="custom-row">
              <div className="custom-col-2">
                <div className="footer-about">
                  <div className="footer-logo">
                    <img src="assets/images/Logo-2.png" alt="Logo" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <ul>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="flaticon-map" />
                        </span>
                      </div>
                      <div className="txt">
                        <span>
                          4920 Trails End Road Ft United States, FL 33311
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="flaticon-email" />
                        </span>
                      </div>
                      <div className="txt">
                        <a href="mailto:info@example.com">info@example.com</a>
                        <a href="mailto:test@example.com">test@example.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span>
                          <i className="flaticon-telephone" />
                        </span>
                      </div>
                      <div className="txt">
                        <a href="tel:+123456679123">+123 456 679 123</a>
                        <a href="tel:+123456789">+123 456 789</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="custom-col-2">
                <div className="link-wrap">
                  <div className="footer-link">
                    <h3 className="footer-title">Information</h3>
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="blog.html">Blogs</a>
                      </li>
                      <li>
                        <a href="#">Terms Of Use</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-link">
                    <h3 className="footer-title">Information</h3>
                    <ul>
                      <li>
                        <a href="cart.html">My Order</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="account.html">My Credit</a>
                      </li>
                      <li>
                        <a href="register.html">Login</a>
                      </li>
                      <li>
                        <a href="account.html">Personal Info</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="footer-gallery">
                  <h3 className="footer-title">Instagram</h3>
                  <ul>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-1.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-2.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-3.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-4.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-5.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <img src="assets/images/gl-6.png" alt="image" />
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="custom-col">
                <div className="footer-subscribe">
                  <h3 className="footer-title">Subscribe</h3>
                  <p>
                    Lorem ipsum dolor si consectetur adipisicing elit, sed
                    eiusmotempor incididunt ut labore et
                  </p>
                  <form>
                    <input type="email" name="email" placeholder="Your Email" />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                  </form>
                  <div className="btn-box">
                    <a href="#">
                      <img
                        src="assets/images/play-store.png"
                        alt="Play Store"
                      />
                    </a>
                    <a href="#">
                      <img src="assets/images/app-store.png" alt="App Store" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p>© Copyright Revel All Right Reserved</p>
              </div>
              <div className="col-md-6">
                <div className="part-img d-flex justify-content-md-end justify-content-center">
                  <img src="assets/images/payment-gateway.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
