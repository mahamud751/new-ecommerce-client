import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { add_item } from "../../redux/actions/cartAction";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setProducts } from "../../redux/actions/productAction";

const ProductDetails = () => {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  let { id } = useParams();
  const products = useSelector((state) => state.allProducts.products);

  const fetchProducts = async () => {
    const response = await axios
      .get(`http://localhost:5000/api/products`)
      .catch((err) => {});
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const mainProduct = products.find((product) => product._id === id);

  console.log(products);
  console.log(mainProduct);
  const handleAddItem = (e) => {
    dispatch(add_item(e));
    MySwal.fire("Good job!", "successfully added", "success");
  };
  return (
    <div>
      <div className="shop-details py-120">
        <div className="container">
          <div className="product-view-area">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-6">
                <div className="part-img mr-30">
                  <div className="img-box" id="bigPreview">
                    <a href="shop-details.html">
                      <img
                        src={mainProduct.img[0]}
                        alt="Product"
                        style={{
                          height: 450,
                          width: 400,
                          objectFit: "contain",
                        }}
                        className="img-fluid"
                      />
                    </a>
                    <button className="quick-view">
                      <i className="fa-thin fa-arrows-maximize" />
                    </button>
                  </div>
                  <div className="btn-box">
                    <button className="small-thumb active">
                      <img
                        src={mainProduct.img[0]}
                        alt="Image"
                        style={{
                          height: 250,
                          width: 300,
                          objectFit: "contain",
                        }}
                        className="img-fluid"
                      />
                    </button>
                    <button className="small-thumb">
                      <img
                        src={mainProduct.img[1]}
                        alt="Image"
                        style={{
                          height: 250,
                          width: 300,
                          objectFit: "contain",
                        }}
                        className="img-fluid"
                      />
                    </button>
                    <button className="small-thumb">
                      <img
                        src={mainProduct.img[2]}
                        alt="Image"
                        style={{
                          height: 250,
                          width: 300,
                          objectFit: "contain",
                        }}
                        className="img-fluid"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-6">
                <div className="part-txt">
                  <h2 className="main-product-title">{mainProduct.name}</h2>
                  <div className="review">
                    <span className="star">
                      <i className="fa-solid fa-star-sharp rated" />
                      <i className="fa-solid fa-star-sharp rated" />
                      <i className="fa-solid fa-star-sharp rated" />
                      <i className="fa-solid fa-star-sharp rated" />
                      <i className="fa-solid fa-star-sharp" />
                    </span>
                    <span className="rating-amount">3 Reviews</span>
                  </div>
                  <p className="price">
                    <span>$96.00</span> $75.00
                  </p>
                  <ul className="short-details">
                    <li>
                      Availability: <span>In stock</span>
                    </li>
                    <li>
                      Product Code: <span>#4657</span>
                    </li>
                    <li>
                      Tags: <span>Fashion, Hood, Classic</span>
                    </li>
                  </ul>
                  <p className="dscr">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae rerum eveniet esse modi nemo mollitia. Vitae adipisci
                    ab nulla sequi fuga saepe harum placeat voluptatibus ea
                    quam, assumenda illum natus.
                  </p>
                  <form>
                    <div className="row g-xl-4 g-3">
                      <div className="col-lg-4 col-md-6 col-sm-4 col-6">
                        <div className="color-select-wrap">
                          <label>Color</label>
                          <select
                            name="color"
                            className="select wide color-select"
                          >
                            <option value="*" selected disabled>
                              Select Color
                            </option>
                            <option value={1}>Green</option>
                            <option value={2}>Red</option>
                            <option value={3}>Yellow</option>
                            <option value={4}>Blue</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-4 col-6">
                        <label>Size</label>
                        <select name="size" className="select wide">
                          <option value="*" selected disabled>
                            Select Size
                          </option>
                          <option value={1}>SM</option>
                          <option value={2}>M</option>
                          <option value={3}>L</option>
                          <option value={4}>XL</option>
                        </select>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-4">
                        <div className="quantity-wrap">
                          <label>QTY</label>
                          <div className="product-count">
                            <div className="quantity rapper-quantity">
                              <input
                                type="number"
                                min={1}
                                max={100}
                                step={1}
                                defaultValue={1}
                                readOnly
                              />
                              <div className="quantity-nav">
                                <div className="quantity-button quantity-down">
                                  <i className="fa-solid fa-minus" />
                                </div>
                                <div className="quantity-button quantity-up">
                                  <i className="fa-solid fa-plus" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="btn-box">
                    <button id="addToCart">
                      <span>
                        <i className="fa-light fa-cart-shopping" />
                      </span>{" "}
                      add to cart
                    </button>
                    <button id="addToWishList">
                      <span>
                        <i className="fa-light fa-heart" />
                      </span>{" "}
                      add to wishlist
                    </button>
                  </div>
                  <div className="product-share">
                    <span>Share Link:</span>
                    <div className="social">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-google-plus-g" />
                      </a>
                      <a href="#">
                        <i className="fa-solid fa-rss" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details-area">
            <nav>
              <div className="nav" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-dscr-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-dscr"
                  type="button"
                  role="tab"
                  aria-controls="nav-dscr"
                  aria-selected="true"
                >
                  Description
                </button>
                <button
                  className="nav-link"
                  id="nav-info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-info"
                  type="button"
                  role="tab"
                  aria-controls="nav-info"
                  aria-selected="false"
                >
                  Information
                </button>
                <button
                  className="nav-link"
                  id="nav-review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-review"
                  type="button"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-dscr"
                role="tabpanel"
                aria-labelledby="nav-dscr-tab"
                tabIndex={0}
              >
                <div className="product-dscr">
                  <p>
                    Shank porchetta anim ham in esse. Duis swine mollit
                    incididunt, quis pork belly rump ut ball tip venison strip
                    steak pancetta proident. Ground roun duis beef, eu sunt non
                    dolor esse capicola shoulder strip steak. Ut fatback chuck
                    minim exercitation kielbasa. Cupidatat nostrud prosciutto
                    corned beefdgf meatball sausage lorem.Ground round jowl pig,
                    short ribs turducken cillum labore aliqua bacon ea doner
                    anim esse. Jerky laboris id, fatback ut gfjb Filet mignon
                    corned beef laboris ipsum porchetta beef irure dolor
                    fatback. Pariatur cupim occaecat short ribs
                  </p>
                  <p>
                    consectetur, venison ipsum flank hamburger bacon tri-tip. Eu
                    duis est cupidatat prosciutto alcatra, consectetur aute
                    velit shoulder shankle ham ho Cillum deserunt velit dolor,
                    beef ribs excepteur hamburger flank occaecat. Qui dolor
                    flank picanha t-bone lorem
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="part-img">
                        <img
                          src="assets/images/product-dscr-img.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <p className="mt-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodt tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum vcdisse ultrices gravida. Risus
                        commodo viverra maecenas accumsan lacus Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit,
                      </p>
                      <p>
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </div>
                  </div>
                  <p>
                    Shank porchetta anim ham in esse. Duis swine mollit
                    incididunt, quis pork belly rump ut ball tip venison strip
                    steak pancetta proident. Ground roun duis beef, eu sunt non
                    dolor esse capicola shoulder strip steak. Ut fatback chuck
                    minim exercitation kielbasa. Cupidatat nostrud prosciutto
                    corned beefdgf meatball sausage lorem.Ground round jowl pig,
                    short ribs turducken cillum labore aliqua bacon ea doner
                    anim esse. Jerky laboris id, fatback ut gfjb Filet mignon
                    corned beef laboris ipsum porchetta beef irure dolor
                    fatback. Pariatur cupim occaecat short ribs
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-info"
                role="tabpanel"
                aria-labelledby="nav-info-tab"
                tabIndex={0}
              >
                <div className="product-information">
                  <ul>
                    <li>
                      <span>Brand Name:</span>KLGH
                    </li>
                    <li>
                      <span>Vocalism Principle:</span>Dynamic
                    </li>
                    <li>
                      <span>Style:</span>Over the Ear
                    </li>
                    <li>
                      <span>Origin:</span>Mainland China
                    </li>
                    <li>
                      <span>Control Button:</span>Yes
                    </li>
                    <li>
                      <span>Volume Control:</span>Yes
                    </li>
                    <li>
                      <span>Certification:</span>CE
                    </li>
                    <li>
                      <span>Number Of Drivers:</span>2
                    </li>
                    <li>
                      <span>Plug Type:</span>Line Type
                    </li>
                    <li>
                      <span>Range:</span>up to 32 Ω
                    </li>
                    <li>
                      <span>Material:</span>Fabric
                    </li>
                    <li>
                      <span>Memory Card:</span>Yes
                    </li>
                    <li>
                      <span>Waterproof:</span>No
                    </li>
                    <li>
                      <span>Magnet Type:</span>Other
                    </li>
                    <li>
                      <span>Wireless Type:</span>Bluetooth
                    </li>
                    <li>
                      <span>Codecs:</span>AAC
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-review"
                role="tabpanel"
                aria-labelledby="nav-review-tab"
                tabIndex={0}
              >
                <div className="product-review">
                  <div className="review-overview">
                    <div className="left">
                      <h2>
                        4.2 <span>/5</span>
                      </h2>
                      <p>251 Ratings</p>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "41%" }}
                                aria-valuenow={41}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>103</span>
                          </div>
                        </li>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "29%" }}
                                aria-valuenow={29}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>73</span>
                          </div>
                        </li>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "16%" }}
                                aria-valuenow={16}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>39</span>
                          </div>
                        </li>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "11%" }}
                                aria-valuenow={11}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>27</span>
                          </div>
                        </li>
                        <li>
                          <div className="stars">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                            <i className="fa-solid fa-star-sharp" />
                          </div>
                          <div className="review-line">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{ width: "3%" }}
                                aria-valuenow={3}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="percentage">
                            <span>09</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="review-title">
                    <h3>Reviews</h3>
                  </div>
                  <div className="review-wrap">
                    <div className="single-review">
                      <div className="user">
                        <div className="part-img">
                          <img src="assets/images/avatar.png" alt="User" />
                        </div>
                        <div className="txt">
                          <span className="name">Shaikh Dardah</span>
                          <span className="date">17/08/2022</span>
                          <span className="star">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                          </span>
                        </div>
                      </div>
                      <div className="comment-area">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur eos veniam aperiam autem sint beatae
                          eveniet minima impedit, deserunt magni harum aut
                          ducimus explicabo, consectetur natus nulla repellendus
                          quos provident deserunt magni harum aut ducimus
                          explicabo, consectetur natus nulla repellendus quos
                          provident deserunt magni harum aut ducimus explicabo,
                          consectetur natus nulla repellendus quos provident.
                        </p>
                        <div className="bottom-wrap">
                          <div className="gallery-wrap">
                            <div className="img-gallery">
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-1.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-2.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-3.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-4.jpg"
                                  alt="image"
                                />
                              </button>
                            </div>
                            <div className="view-panel">
                              <img
                                className="client-product"
                                src="assets/images/index.html"
                                alt="image"
                              />
                              <button className="clt-view-panel-close">
                                <i className="fa-light fa-circle-xmark" />
                              </button>
                            </div>
                          </div>
                          <div className="reaction">
                            <div className="like">
                              <button>
                                <i className="fa-duotone fa-thumbs-up" />
                              </button>
                              <span>(2)</span>
                            </div>
                            <div className="dislike">
                              <button>
                                <i className="fa-duotone fa-thumbs-down" />
                              </button>
                              <span>(0)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-review">
                      <div className="user">
                        <div className="part-img">
                          <img src="assets/images/avatar.png" alt="User" />
                        </div>
                        <div className="txt">
                          <span className="name">Shaikh Dardah</span>
                          <span className="date">17/08/2022</span>
                          <span className="star">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                          </span>
                        </div>
                      </div>
                      <div className="comment-area">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur eos veniam aperiam autem sint beatae
                          eveniet minima impedit, deserunt magni harum aut
                          ducimus explicabo, consectetur natus nulla repellendus
                          quos provident deserunt magni harum aut ducimus
                          explicabo, consectetur natus nulla repellendus quos
                          provident deserunt magni harum aut ducimus explicabo,
                          consectetur natus nulla repellendus quos provident.
                        </p>
                        <div className="bottom-wrap">
                          <div className="gallery-wrap">
                            <div className="img-gallery">
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-1.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-2.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-3.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-4.jpg"
                                  alt="image"
                                />
                              </button>
                            </div>
                            <div className="view-panel">
                              <img
                                className="client-product"
                                src="assets/images/index.html"
                                alt="image"
                              />
                              <button className="clt-view-panel-close">
                                <i className="fa-light fa-circle-xmark" />
                              </button>
                            </div>
                          </div>
                          <div className="reaction">
                            <div className="like">
                              <button>
                                <i className="fa-duotone fa-thumbs-up" />
                              </button>
                              <span>(2)</span>
                            </div>
                            <div className="dislike">
                              <button>
                                <i className="fa-duotone fa-thumbs-down" />
                              </button>
                              <span>(0)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-review">
                      <div className="user">
                        <div className="part-img">
                          <img src="assets/images/avatar.png" alt="User" />
                        </div>
                        <div className="txt">
                          <span className="name">Shaikh Dardah</span>
                          <span className="date">17/08/2022</span>
                          <span className="star">
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp rated" />
                            <i className="fa-solid fa-star-sharp" />
                          </span>
                        </div>
                      </div>
                      <div className="comment-area">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur eos veniam aperiam autem sint beatae
                          eveniet minima impedit, deserunt magni harum aut
                          ducimus explicabo, consectetur natus nulla repellendus
                          quos provident deserunt magni harum aut ducimus
                          explicabo, consectetur natus nulla repellendus quos
                          provident deserunt magni harum aut ducimus explicabo,
                          consectetur natus nulla repellendus quos provident.
                        </p>
                        <div className="bottom-wrap">
                          <div className="gallery-wrap">
                            <div className="img-gallery">
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-1.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-2.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-3.jpg"
                                  alt="image"
                                />
                              </button>
                              <button className="client-img">
                                <img
                                  src="assets/images/review-img-4.jpg"
                                  alt="image"
                                />
                              </button>
                            </div>
                            <div className="view-panel">
                              <img
                                className="client-product"
                                src="assets/images/index.html"
                                alt="image"
                              />
                              <button className="clt-view-panel-close">
                                <i className="fa-light fa-circle-xmark" />
                              </button>
                            </div>
                          </div>
                          <div className="reaction">
                            <div className="like">
                              <button>
                                <i className="fa-duotone fa-thumbs-up" />
                              </button>
                              <span>(2)</span>
                            </div>
                            <div className="dislike">
                              <button>
                                <i className="fa-duotone fa-thumbs-down" />
                              </button>
                              <span>(0)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
