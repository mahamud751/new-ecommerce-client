import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { delete_cart } from "../../redux/actions/cartAction";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/category");
      setCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  //cart
  const getState = useSelector((state) => state.cartReducer.cart);
  const [price, setPrice] = React.useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = () => {
    let price = 0;
    getState.map((pd) => {
      price = pd.buyPrice * pd.qtn + price;
      setPrice(price);
    });
  };

  React.useEffect(() => {
    total();
  }, [total]);

  const dispatch = useDispatch();

  const handleCart = (_id) => {
    dispatch(delete_cart(_id));
  };
  return (
    <div>
      {/*------------------------------- PRODUCT QUICK VIEW PANEL START -------------------------------*/}
      <div className="product-quick-view-panel">
        <div className="img">
          <img
            className="quick-view-image"
            src="/assets/images/index.html"
            alt="image"
          />
        </div>
      </div>
      {/*------------------------------- PRODUCT QUICK VIEW PANEL END -------------------------------*/}
      {/*--------------------------- revel sidebar information area start ----------------------------*/}
      <div className="revel-header-mobile-sidebar side-info">
        <div className="revel-header-mobile-sidebar-inner">
          <div className="revel-header-mobile-sidebar-top text-center pb-35">
            <div className="revel-header-mobile-sidebar-close-btn side-info-close">
              <button>
                <span>CLOSE</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                >
                  <path
                    id="close"
                    d="M4.216,23.784a.714.714,0,0,0,1.011,0l8.779-8.778,8.782,8.778A.715.715,0,0,0,23.8,22.774L15.017,14,23.8,5.214A.715.715,0,0,0,22.785,4.2l-8.779,8.782L5.223,4.207A.714.714,0,0,0,4.216,5.214L13,14,4.216,22.777a.714.714,0,0,0,0,1.007Z"
                    transform="translate(-4.008 -3.994)"
                    fill="#777"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="revel-header-mobile-sidebar-logo pb-50">
            <a href="https://revelwp.codebasket.net/">
              <img
                src="../../revelwp.codebasket.net/wp-content/themes/revel/assets/images/logo.png"
                alt
              />
            </a>
          </div>
          <div className="revel-header-mobile-sidebar-menu-nav">
            <div className="revel-mobile-menu" />
          </div>
        </div>
      </div>
      <div className="overlay" />

      {/*------------------------------- PRODUCT QUICK VIEW PANEL END -------------------------------*/}
      {/*------------------------------- HEADER CART LIST START -------------------------------*/}
      <div className="header-cart-wrap header-cart-wrap-2" id="headerCartWrap">
        <div className="cart-list">
          <div className="title">
            <h3>Shopping Cart</h3>
            <button className="cart-close">
              <i className="fa-regular fa-xmark" />
            </button>
          </div>
          {getState.length ? (
            <>
              <ul>
                {getState.map((pd, index) => {
                  return (
                    <li key={index}>
                      <a href="shop-details.html">
                        <div className="part-img">
                          <img src={pd.img[0]} alt="Image" />
                        </div>
                        <div className="part-txt">
                          <span className="name">{pd.name}</span>
                          <span>
                            {pd.qtn} <i className="fa-regular fa-xmark" />{" "}
                            {pd.buyPrice}
                          </span>
                        </div>
                      </a>
                      <button className="delete-btn">
                        <i
                          className="fa-regular fa-trash-can"
                          onClick={() => handleCart(pd._id)}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="total">
                <p>
                  Subtotal: <span>{price}</span>
                </p>
              </div>
              <div className="btn-box">
                <Link to={"/cart"}>
                  <a className="def-btn">View Cart</a>
                </Link>

                <a href="#" className="def-btn">
                  Checkout
                </a>
              </div>
            </>
          ) : (
            <div>
              {" "}
              <p style={{ fontSize: 22, padding: 10 }}>Your cart is empty</p>
            </div>
          )}
        </div>
      </div>

      {/*------------------------------- HEADER CART LIST END -------------------------------*/}

      {/*--------------------------- revel sidebar information area end ----------------------------*/}
      {/*------------------------------- HEADER WISH LIST START -------------------------------*/}
      <div className="header-cart-wrap header-cart-wrap-2" id="headerWishWrap">
        <div className="cart-list">
          <div className="title">
            <h3>Wish List</h3>
            <button className="wish-close">
              <i className="fa-regular fa-xmark" />
            </button>
          </div>
          <ul>
            <li>
              <a href="shop-details.html">
                <div className="part-img">
                  <img src="assets/images/feat-product-3.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <span className="name">Diamond wedding ring</span>
                  <span>
                    1 <i className="fa-regular fa-xmark" /> $5.00
                  </span>
                </div>
              </a>
              <button className="delete-btn">
                <i className="fa-regular fa-trash-can" />
              </button>
            </li>
            <li>
              <a href="shop-details.html">
                <div className="part-img">
                  <img src="assets/images/feat-product-2.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <span className="name">Living Summer Chair</span>
                  <span>
                    1 <i className="fa-regular fa-xmark" /> $5.00
                  </span>
                </div>
              </a>
              <button className="delete-btn">
                <i className="fa-regular fa-trash-can" />
              </button>
            </li>
            <li>
              <a href="shop-details.html">
                <div className="part-img">
                  <img src="assets/images/feat-product-10.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <span className="name">Wireless Headphone</span>
                  <span>
                    1 <i className="fa-regular fa-xmark" /> $5.00
                  </span>
                </div>
              </a>
              <button className="delete-btn">
                <i className="fa-regular fa-trash-can" />
              </button>
            </li>
          </ul>
          <div className="total">
            <p>
              Subtotal: <span>$15:00</span>
            </p>
          </div>
          <div className="btn-box">
            <a href="#" className="def-btn">
              View Wish List
            </a>
            <a href="#" className="def-btn">
              Add All To Cart
            </a>
          </div>
        </div>
      </div>
      {/*------------------------------- HEADER WISH LIST END -------------------------------*/}
      {/*------------------------------- HEADER SECTION START -------------------------------*/}
      <div className="header header-2">
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-7">
                <ul className="top-header-link d-lg-flex d-none">
                  <li>
                    <span>SHOP EVENTS &amp; SAVE UP TO 65% OFF!</span>
                  </li>
                  <li>
                    <span className="mr-5px">Call Us:</span>
                    <a href="tel:001-1234-88888"> +880178999751</a>
                  </li>
                  <li>
                    <a href="#">Sell On Korbojoy </a>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-5">
                <ul className="top-header-link justify-content-lg-end justify-content-center">
                  <li>
                    <a href="#">Track my order</a>
                  </li>
                  <li>
                    <select name="currency" id="currency" className="select">
                      <option value="USD">Dollar (USD)</option>
                      <option value="BDT">Taka (BDT)</option>
                    </select>
                  </li>
                  <li>
                    <div className="select-language">
                      <div className="language">
                        <div className="select-lang">
                          <div
                            id="aw"
                            data-input-name="country"
                            data-selected-country="UK"
                            data-scrollable-height="250px"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="row justify-content-between align-items-center g-md-4 g-sm-0">
              <div className="col-xxl-3 col-xl-2 col-lg-2 col-sm-3 col-6">
                <div className="logo">
                  <Link to={"/"}>
                    <a>
                      <img src="assets/images/logo1.png" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-8 col-sm-6 col-12 search-col">
                <div className="header-search">
                  <form>
                    <div className="wrap">
                      <select name="category" id="inputState" className="p-3">
                        <option selected>All Categories</option>
                        {category.map((pd) => (
                          <option key={pd._id} value={pd._id}>
                            {pd.name}
                          </option>
                        ))}
                      </select>

                      <span className="devider" />
                      <input
                        type="search"
                        name="search"
                        placeholder="What do you need?"
                      />
                    </div>
                    <button type="submit">
                      <span>
                        <i className="fa-light fa-magnifying-glass" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-xl-3 col-lg-2 col-sm-2 col-6">
                <ul className="bottom-header-right d-flex align-items-center justify-content-end">
                  <li className="live-chat d-xl-flex d-none align-items-center">
                    <div className="icon">
                      <img src="assets/images/call-icon.png" alt="call" />
                    </div>

                    <div className="txt">
                      <span className="d-block">Live Chat or :</span>
                      <a className="d-block" href="tel:+997509153">
                        +8801789999751
                      </a>
                    </div>
                  </li>
                  <li className="header-cart-options">
                    <a role="button" className="search-open d-sm-none">
                      <i className="fa-light fa-magnifying-glass" />
                    </a>
                    <a href="compare.html" className="compare-list-btn">
                      <i className="fa-light fa-shuffle" />
                    </a>
                    <a href="#" className="wish-list-btn">
                      <i className="fa-light fa-heart" />
                      <span className="quantity">02</span>
                    </a>
                    <a href="#" className="cart-list-btn">
                      <i className="fa-light fa-cart-shopping" />
                      <span className="quantity">{getState.length}</span>
                    </a>
                    <a href="#" className="side-toggle d-lg-none">
                      <i className="fal fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4">
                <div className="all-department">
                  <span>all Departments</span>
                  <button className="category-list-close">
                    <i className="fa-light fa-bars" />
                  </button>
                  <div className="banner">
                    <div className="category-list">
                      <ul>
                        <li className="category-item has-sub">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-user-tie-hair-long" />
                              </span>
                            </div>
                            <span>Women's Fashion</span>
                          </a>
                          <div className="category-sub-menu bg-1">
                            <div className="row g-4">
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-wedding-dress" />
                                  </span>
                                  Clothing
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Dresses</a>
                                  </li>
                                  <li>
                                    <a href="#">Jeggings</a>
                                  </li>
                                  <li>
                                    <a href="#">Kurtis</a>
                                  </li>
                                  <li>
                                    <a href="#">Palazzo Pants &amp; Culottes</a>
                                  </li>
                                  <li>
                                    <a href="#">Pants</a>
                                  </li>
                                  <li>
                                    <a href="#">Shapewear</a>
                                  </li>
                                  <li>
                                    <a href="#">Skirts</a>
                                  </li>
                                  <li>
                                    <a href="#">Tops</a>
                                  </li>
                                  <li>
                                    <a href="#">T-Shirts</a>
                                  </li>
                                  <li>
                                    <a href="#">Tunics</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-heels" />
                                  </span>
                                  Shoes
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Ballet Flats</a>
                                  </li>
                                  <li>
                                    <a href="#">Pumps</a>
                                  </li>
                                  <li>
                                    <a href="#">Closed-Toe Wedges</a>
                                  </li>
                                  <li>
                                    <a href="#">Fashion Boots</a>
                                  </li>
                                  <li>
                                    <a href="#">Flat Sandals</a>
                                  </li>
                                  <li>
                                    <a href="#">Flip Flops</a>
                                  </li>
                                  <li>
                                    <a href="#">Heeled Sandals</a>
                                  </li>
                                  <li>
                                    <a href="#">House Slippers</a>
                                  </li>
                                  <li>
                                    <a href="#">Slip-Ons</a>
                                  </li>
                                  <li>
                                    <a href="#">Sneakers</a>
                                  </li>
                                  <li>
                                    <a href="#">Wedge Sandals</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-watch" />
                                  </span>
                                  Watches
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Fashion</a>
                                  </li>
                                  <li>
                                    <a href="#">Casual</a>
                                  </li>
                                  <li>
                                    <a href="#">Business</a>
                                  </li>
                                  <li>
                                    <a href="#">Sports</a>
                                  </li>
                                  <li>
                                    <a href="#">Accessories</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="category-item">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-user-tie-hair" />
                              </span>
                            </div>
                            <span>Men's Fashion</span>
                          </a>
                        </li>
                        <li className="category-item">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-camera" />
                              </span>
                            </div>
                            <span>Photography</span>
                          </a>
                        </li>
                        <li className="category-item">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-watch-smart" />
                              </span>
                            </div>
                            <span>Watches &amp; Accessories</span>
                          </a>
                        </li>
                        <li className="category-item has-sub">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-tv-retro" />
                              </span>
                            </div>
                            <span>TV &amp; Home Appliances</span>
                          </a>
                          <div className="category-sub-menu">
                            <div className="row g-4">
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-television" />
                                  </span>
                                  Televisions
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Smart Televisions</a>
                                  </li>
                                  <li>
                                    <a href="#">LED Televisions</a>
                                  </li>
                                  <li>
                                    <a href="#">OLED Televisions</a>
                                  </li>
                                  <li>
                                    <a href="#">Other Televisions</a>
                                  </li>
                                  <li>
                                    <a href="#">Mini Televisions</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-speaker" />
                                  </span>
                                  Home Audio
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Sondbars</a>
                                  </li>
                                  <li>
                                    <a href="#">Home Entertainment</a>
                                  </li>
                                  <li>
                                    <a href="#">Portable Players</a>
                                  </li>
                                  <li>
                                    <a href="#">Fashion Boots</a>
                                  </li>
                                  <li>
                                    <a href="#">Live Sound</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-refrigerator" />
                                  </span>
                                  Large Appliances
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Refrigerators</a>
                                  </li>
                                  <li>
                                    <a href="#">Freezers</a>
                                  </li>
                                  <li>
                                    <a href="#">Washing Machines</a>
                                  </li>
                                  <li>
                                    <a href="#">Microwave Oven</a>
                                  </li>
                                  <li>
                                    <a href="#">Electric Oven</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-cooking" />
                                  </span>
                                  Kitchen Appliances
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Rice Cooker</a>
                                  </li>
                                  <li>
                                    <a href="#">Blender, Mixer &amp; Grinder</a>
                                  </li>
                                  <li>
                                    <a href="#">Electric Kettle</a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Juicer &amp; Fruit Extraction
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">Fryer</a>
                                  </li>
                                  <li>
                                    <a href="#">Coffee Machine</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-air-conditioner" />
                                  </span>
                                  Cooling &amp; Heating
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Air Conditioner</a>
                                  </li>
                                  <li>
                                    <a href="#">Air Coolers</a>
                                  </li>
                                  <li>
                                    <a href="#">Air Purifiers</a>
                                  </li>
                                  <li>
                                    <a href="#">Dehumidifiers</a>
                                  </li>
                                  <li>
                                    <a href="#">Water Heater</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-season" />
                                  </span>
                                  Season Sale
                                </h4>
                                <a href="#">
                                  <img
                                    src="assets/images/mega-menu-bg-2.jpg"
                                    alt="Image"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="category-item">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-backpack" />
                              </span>
                            </div>
                            <span>Bags &amp; Shoes</span>
                          </a>
                        </li>
                        <li className="category-item has-sub">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-teddy-bear" />
                              </span>
                            </div>
                            <span>Toys , Kids &amp; Babies</span>
                          </a>
                          <div className="category-sub-menu">
                            <div className="row g-4">
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-baby-boy" />
                                  </span>
                                  Mother &amp; Baby
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Baby &amp; Toddler Foods</a>
                                  </li>
                                  <li>
                                    <a href="#">Milk Formula</a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Cloth Diapers &amp; Accessories
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">Diaper Bags</a>
                                  </li>
                                  <li>
                                    <a href="#">Wipes &amp; Holders</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-rocking-horse" />
                                  </span>
                                  Baby Gear
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Baby Walkers</a>
                                  </li>
                                  <li>
                                    <a href="#">Backpacks &amp; Carriers</a>
                                  </li>
                                  <li>
                                    <a href="#">Strollers</a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Swings, Jumpers &amp; Bouncers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">Activity Gym &amp; Playmats</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <h4>
                                  <span>
                                    <i className="flaticon-baby-dress" />
                                  </span>
                                  Clothing &amp; Accessories
                                </h4>
                                <ul>
                                  <li>
                                    <a href="#">Girls Clothing</a>
                                  </li>
                                  <li>
                                    <a href="#">Girls Shoes</a>
                                  </li>
                                  <li>
                                    <a href="#">Boys Clothing</a>
                                  </li>
                                  <li>
                                    <a href="#">Maternity Wear</a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      New Born Unisex (0 - 6 months)
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-12">
                                <h4>
                                  <span>
                                    <i className="flaticon-season" />
                                  </span>
                                  Season Sale
                                </h4>
                                <a href="#">
                                  <img
                                    src="assets/images/mega-menu-bg-3.jpg"
                                    alt="Image"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="category-item">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-headphones-simple" />
                              </span>
                            </div>
                            <span>Headphone</span>
                          </a>
                        </li>
                        <li className="category-item">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-baseball-bat-ball" />
                              </span>
                            </div>
                            <span>Sports &amp; Outdoor</span>
                          </a>
                        </li>
                        <li className="category-item">
                          <a href="#">
                            <div className="icon">
                              <span>
                                <i className="fa-thin fa-shuffle" />
                              </span>
                            </div>
                            <span>Other</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-6">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <nav id="revel-mobile-menu" className="revel-mobile-menu">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                              Home
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="about.html">
                              About
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="shopDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Shop
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="shopDropdown"
                            >
                              <li>
                                <a className="dropdown-item" href="shop.html">
                                  Shop Left Bar
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="shop-right-bar.html"
                                >
                                  Shop Right Bar
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="shop-details.html"
                                >
                                  Shop Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="pageDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              PAGES
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="pageDropdown"
                            >
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="account.html"
                                >
                                  Account Page
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="cart.html">
                                  Cart Page
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="compare.html"
                                >
                                  Compare Page
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="faq.html">
                                  FAQ Page
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="wishlist.html"
                                >
                                  Wishlist
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="register.html"
                                >
                                  Register Page
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="blogDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Blog
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="blogDropdown"
                            >
                              <li>
                                <a className="dropdown-item" href="blog.html">
                                  Blog Page
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="blog-details.html"
                                >
                                  Blog Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="contact.html">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-lg-2">
                <div className="account-link">
                  <NavLink to="/signup">Register</NavLink>

                  <span>/</span>
                  <a href="register.html">Sign in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------- HEADER SECTION END -------------------------------*/}
      {/*------------------------------- MOBILE MENU START -------------------------------*/}
      <div className="mobile-menu d-lg-none d-block">
        <div className="mobile-category-list">
          <button className="mobile-menu-close-btn">
            <i className="fa-solid fa-xmark-large" />
          </button>
          <ul className="category-nav">
            <li className="title">All Categories</li>
            <li className="category-item has-sub">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-user-tie-hair-long" />
                  </span>
                </div>
                <span>Women's Fashion</span>
              </a>
              <div className="category-sub-menu">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-wedding-dress" />
                      </span>{" "}
                      Clothing
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Jeggings</a>
                      </li>
                      <li>
                        <a href="#">Kurtis</a>
                      </li>
                      <li>
                        <a href="#">Palazzo Pants &amp; Culottes</a>
                      </li>
                      <li>
                        <a href="#">Pants</a>
                      </li>
                      <li>
                        <a href="#">Shapewear</a>
                      </li>
                      <li>
                        <a href="#">Skirts</a>
                      </li>
                      <li>
                        <a href="#">Tops</a>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Tunics</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-heels" />
                      </span>{" "}
                      Shoes
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Ballet Flats</a>
                      </li>
                      <li>
                        <a href="#">Pumps</a>
                      </li>
                      <li>
                        <a href="#">Closed-Toe Wedges</a>
                      </li>
                      <li>
                        <a href="#">Fashion Boots</a>
                      </li>
                      <li>
                        <a href="#">Flat Sandals</a>
                      </li>
                      <li>
                        <a href="#">Flip Flops</a>
                      </li>
                      <li>
                        <a href="#">Heeled Sandals</a>
                      </li>
                      <li>
                        <a href="#">House Slippers</a>
                      </li>
                      <li>
                        <a href="#">Slip-Ons</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Wedge Sandals</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-watch" />
                      </span>{" "}
                      Watches
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Casual</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-user-tie-hair" />
                  </span>
                </div>
                <span>Men's Fashion</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-camera" />
                  </span>
                </div>
                <span>Photography</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-watch-smart" />
                  </span>
                </div>
                <span>Watches &amp; Accessories</span>
              </a>
            </li>
            <li className="category-item has-sub">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-tv-retro" />
                  </span>
                </div>
                <span>TV &amp; Home Appliances</span>
              </a>
              <div className="category-sub-menu">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-television" />
                      </span>{" "}
                      Televisions
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Smart Televisions</a>
                      </li>
                      <li>
                        <a href="#">LED Televisions</a>
                      </li>
                      <li>
                        <a href="#">OLED Televisions</a>
                      </li>
                      <li>
                        <a href="#">Other Televisions</a>
                      </li>
                      <li>
                        <a href="#">Mini Televisions</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-speaker" />
                      </span>{" "}
                      Home Audio
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Sondbars</a>
                      </li>
                      <li>
                        <a href="#">Home Entertainment</a>
                      </li>
                      <li>
                        <a href="#">Portable Players</a>
                      </li>
                      <li>
                        <a href="#">Fashion Boots</a>
                      </li>
                      <li>
                        <a href="#">Live Sound</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-refrigerator" />
                      </span>{" "}
                      Large Appliances
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Refrigerators</a>
                      </li>
                      <li>
                        <a href="#">Freezers</a>
                      </li>
                      <li>
                        <a href="#">Washing Machines</a>
                      </li>
                      <li>
                        <a href="#">Microwave Oven</a>
                      </li>
                      <li>
                        <a href="#">Electric Oven</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-cooking" />
                      </span>{" "}
                      Kitchen Appliances
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Rice Cooker</a>
                      </li>
                      <li>
                        <a href="#">Blender, Mixer &amp; Grinder</a>
                      </li>
                      <li>
                        <a href="#">Electric Kettle</a>
                      </li>
                      <li>
                        <a href="#">Juicer &amp; Fruit Extraction</a>
                      </li>
                      <li>
                        <a href="#">Fryer</a>
                      </li>
                      <li>
                        <a href="#">Coffee Machine</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-air-conditioner" />
                      </span>
                      Cooling &amp; Heating
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Air Conditioner</a>
                      </li>
                      <li>
                        <a href="#">Air Coolers</a>
                      </li>
                      <li>
                        <a href="#">Air Purifiers</a>
                      </li>
                      <li>
                        <a href="#">Dehumidifiers</a>
                      </li>
                      <li>
                        <a href="#">Water Heater</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-season" />
                      </span>{" "}
                      Season Sale
                    </h4>
                    <a href="#">
                      <img src="assets/images/mega-menu-bg-2.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-backpack" />
                  </span>
                </div>
                <span>Bags &amp; Shoes</span>
              </a>
            </li>
            <li className="category-item has-sub">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-teddy-bear" />
                  </span>
                </div>
                <span>Toys , Kids &amp; Babies</span>
              </a>
              <div className="category-sub-menu">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-baby-boy" />
                      </span>{" "}
                      Mother &amp; Baby
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Baby &amp; Toddler Foods</a>
                      </li>
                      <li>
                        <a href="#">Milk Formula</a>
                      </li>
                      <li>
                        <a href="#">Cloth Diapers &amp; Accessories</a>
                      </li>
                      <li>
                        <a href="#">Diaper Bags</a>
                      </li>
                      <li>
                        <a href="#">Wipes &amp; Holders</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-rocking-horse" />
                      </span>{" "}
                      Baby Gear
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Baby Walkers</a>
                      </li>
                      <li>
                        <a href="#">Backpacks &amp; Carriers</a>
                      </li>
                      <li>
                        <a href="#">Strollers</a>
                      </li>
                      <li>
                        <a href="#">Swings, Jumpers &amp; Bouncers</a>
                      </li>
                      <li>
                        <a href="#">Activity Gym &amp; Playmats</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h4>
                      <span>
                        <i className="flaticon-baby-dress" />
                      </span>{" "}
                      Clothing &amp; Accessories
                    </h4>
                    <ul>
                      <li>
                        <a href="#">Girls Clothing</a>
                      </li>
                      <li>
                        <a href="#">Girls Shoes</a>
                      </li>
                      <li>
                        <a href="#">Boys Clothing</a>
                      </li>
                      <li>
                        <a href="#">Maternity Wear</a>
                      </li>
                      <li>
                        <a href="#">New Born Unisex (0 - 6 months)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <h4>
                      <span>
                        <i className="flaticon-season" />
                      </span>{" "}
                      Season Sale
                    </h4>
                    <a href="#">
                      <img src="assets/images/mega-menu-bg-3.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-headphones-simple" />
                  </span>
                </div>
                <span>Headphone</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-baseball-bat-ball" />
                  </span>
                </div>
                <span>Sports &amp; Outdoor</span>
              </a>
            </li>
            <li className="category-item">
              <a href="#">
                <div className="icon">
                  <span>
                    <i className="fa-thin fa-shuffle" />
                  </span>
                </div>
                <span>Other</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="m-main-menu">
          <button className="mobile-menu-close-btn">
            <i className="fa-solid fa-xmark-large" />
          </button>
          <ul className="menu-bar">
            <li className="logo">
              <img src="assets/images/Logo.html" alt="Logo" />
            </li>

            <li className="nav-item">
              <Link to={"/"}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <a href="account.html" className="nav-link">
                Account
              </a>
            </li>

            <li className="nav-item">
              <a href="register.html" className="nav-link">
                Login / Register
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="shop.html" className="dropdown-item">
                    Shop Left Bar
                  </a>
                </li>
                <li>
                  <a href="shop-right-bar.html" className="dropdown-item">
                    Shop Right Bar
                  </a>
                </li>
                <li>
                  <a href="shop-details.html" className="dropdown-item">
                    Shop Details Page
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="faq.html" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="blog.html" className="dropdown-item">
                    Blog Page
                  </a>
                </li>
                <li>
                  <a href="blog-details.html" className="dropdown-item">
                    Blog Details Page
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="cart.html" className="dropdown-item">
                    Cart Page
                  </a>
                </li>
                <li>
                  <a href="compare.html" className="dropdown-item">
                    Compare Page
                  </a>
                </li>
                <li>
                  <a href="wishlist.html" className="dropdown-item">
                    Wishlist Page
                  </a>
                </li>
                <li>
                  <a href="register.html" className="dropdown-item">
                    Register Page
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="mobile-nav">
          <li>
            <a
              role="button"
              data-target="mobile-category-list"
              className="m-nav-link"
            >
              <i className="fa-light fa-grid-2" />
            </a>
          </li>
          <li>
            <a href="cart.html" className="m-nav-link">
              <i className="fa-light fa-cart-shopping" />
            </a>
          </li>
          <li>
            <a href="index.html" className="center">
              <i className="fa-light fa-house" />
            </a>
          </li>
          <li>
            <a href="account.html" className="m-nav-link">
              <i className="fa-light fa-user-large" />
            </a>
          </li>
          <li>
            <a role="button" data-target="m-main-menu" className="m-nav-link">
              <i className="fa-light fa-ellipsis-stroke" />
            </a>
          </li>
        </ul>
      </div>
      {/*------------------------------- MOBILE MENU END -------------------------------*/}
    </div>
  );
};

export default Navbar;
