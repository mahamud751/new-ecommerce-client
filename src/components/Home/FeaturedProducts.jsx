import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_item } from "../../redux/actions/cartAction";
import { setProducts } from "../../redux/actions/productAction";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Countdown from "./Countdown";
import Rating from "react-rating";

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
const FeaturedProducts = () => {
  const products = useSelector((state) => state.allProducts.products);
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`http://localhost:5000/api/products`)
      .catch((err) => {});
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //flashsale
  const flashSale = products.filter(
    (product) => product.productType === "flashsale"
  );
  //cart

  const handleAddItem = (e) => {
    dispatch(add_item(e));
    MySwal.fire("Good job!", "successfully added", "success");
  };

  return (
    <div>
      {/* flashsale */}
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
                        color: "black",
                        padding: "0px 20px",

                        wordSpacing: 4,
                        letterSpacing: 3,
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
                  {flashSale.map((product) => (
                    <div className="single-product-card">
                      <div className="part-img">
                        <a href="shop-details.html">
                          <img
                            src={product.img[0]}
                            alt="Product"
                            style={{
                              height: 250,
                              width: 300,
                              objectFit: "contain",
                            }}
                            className="img-fluid"
                          />
                        </a>
                        <div className="cart-option cart-option-bottom">
                          <ul>
                            <li>
                              <a
                                role="button"
                                className="add-to-cart"
                                onClick={() => handleAddItem(product)}
                              >
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
                            <Link to={`/product/${product._id}`}>
                              <li>
                                <a className="view-product">
                                  <i className="fa-light fa-eye" />
                                </a>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                      <div className="part-txt">
                        <h4 className="product-name" style={{ height: 70 }}>
                          <a href="shop-details.html">
                            {product.name.slice(0, 70)}
                          </a>
                        </h4>
                        {/* <p className="dscr">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus aliquid laborum aperiam dolores.
                            Dignissimos at harum corporis qui illo nam fugit
                            recusandae ratione odit neque officia, accusamus ab,
                            assumenda odio.
                          </p> */}
                        <p className="price">
                          <span>${product.realPrice}</span>${product.offerPrice}
                        </p>

                        <Rating
                          initialRating={product.rating}
                          emptySymbol="far fa-star icon-color"
                          fullSymbol="fas fa-star icon-color"
                          readonly
                        ></Rating>

                        <button className="add-to-cart-btn">Add to Cart</button>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature products*/}

      <div className="featured-product featured-product py-25">
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
                {products.map((product) => (
                  <div className="custom-col">
                    <div className="single-product-card">
                      <div className="part-img">
                        <a href="shop-details.html">
                          <img
                            src={product.img[0]}
                            alt="Product"
                            style={{
                              height: 250,
                              width: 300,
                              objectFit: "contain",
                            }}
                            className="img-fluid"
                          />
                        </a>
                        <div className="cart-option cart-option-bottom">
                          <ul>
                            <li>
                              <a
                                role="button"
                                className="add-to-cart"
                                onClick={() => handleAddItem(product)}
                              >
                                <i className="fa-light fa-cart-shopping" />
                              </a>
                            </li>
                            <li>
                              <a role="button" className="add-to-wish">
                                <i className="fa-light fa-heart" />
                              </a>
                            </li>
                            <Link to={`/product/${product._id}`}>
                              <li>
                                <a role="button" className="quick-view">
                                  <i className="fa-light fa-image" />
                                </a>
                              </li>
                            </Link>
                            <Link to={`/product/${product._id}`}>
                              <li>
                                <a className="view-product">
                                  <i className="fa-light fa-eye" />
                                </a>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                      <div className="part-txt">
                        <h4 className="product-name">
                          <a href="shop-details.html">
                            {product.name.slice(0, 70)}
                          </a>
                        </h4>
                        {/* <p className="dscr">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus aliquid laborum aperiam dolores.
                            Dignissimos at harum corporis qui illo nam fugit
                            recusandae ratione odit neque officia, accusamus ab,
                            assumenda odio.
                          </p> */}
                        <p className="price">
                          <span>${product.realPrice}</span>${product.offerPrice}
                        </p>

                        <Rating
                          initialRating={product.rating}
                          emptySymbol="far fa-star icon-color"
                          fullSymbol="fas fa-star icon-color"
                          readonly
                          //   style={{ color: "red" }}
                        ></Rating>
                        <button className="add-to-cart-btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
