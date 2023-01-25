import React from "react";
import { useDispatch, useSelector } from "react-redux";

import useScript from "../../components/Common/Reload";
import {
  add_item,
  delete_cart,
  remove_item,
} from "../../redux/actions/cartAction";

const Cart = () => {
  useScript("/assets/js/cart.js");
  //cart
  const getState = useSelector((state) => state.cartReducer.cart);

  const [price, setPrice] = React.useState(0);
  const [grandPrice, setGrandPrice] = React.useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let shipping = 40;

  const total = () => {
    let price = 0;
    getState.map((pd) => {
      price = pd.buyPrice * pd.qtn + price;

      setPrice(price);
    });
  };
  const gTotal = () => {
    const grandTotal = price + shipping;
    setGrandPrice(grandTotal);
  };
  React.useEffect(() => {
    gTotal();
  }, [gTotal]);
  React.useEffect(() => {
    total();
  }, [total]);

  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    dispatch(add_item(e));
  };

  const handleRemoveItem = (e) => {
    dispatch(remove_item(e));
  };

  const handleDeleteCart = (_id) => {
    dispatch(delete_cart(_id));
  };

  return (
    <div>
      <div className="tab-section py-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-nav">
                <button className="single-nav active" data-tab="cartTab">
                  <span className="txt">Shopping Cart</span>
                  <span className="sl-no">01</span>
                </button>
                <button className="single-nav" data-tab="checkOutTab" disabled>
                  <span className="txt">Check Out</span>
                  <span className="sl-no">02</span>
                </button>
                <button
                  className="single-nav"
                  data-tab="orderCompletedTab"
                  disabled
                >
                  <span className="txt">Order Completed</span>
                  <span className="sl-no">03</span>
                </button>
              </div>
              <div className="tab-contents">
                <div className="single-tab active" id="cartTab">
                  <div className="table-wrap revel-table">
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getState.length ? (
                            <>
                              {getState.map((pd, index) => {
                                return (
                                  <tr>
                                    <td>
                                      <div className="product-img">
                                        <img src={pd.img[0]} alt="Image" />
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="shop-details.html"
                                        className="product-name"
                                      >
                                        {pd.name}
                                      </a>
                                    </td>
                                    <td>
                                      <span className="price-txt">
                                        ৳
                                        <span className="main-price">
                                          {pd.buyPrice}
                                        </span>
                                      </span>
                                    </td>
                                    <td>
                                      <div className="product-count cart-product-count">
                                        <div className="quantity rapper-quantity">
                                          <input
                                            type="number"
                                            min={1}
                                            max={100}
                                            step={1}
                                            value={pd.qtn}
                                          />

                                          <div className="quantity-nav">
                                            <div
                                              className="quantity-button quantity-down"
                                              onClick={
                                                pd.qtn <= 1
                                                  ? () =>
                                                      handleDeleteCart(pd._id)
                                                  : () => handleRemoveItem(pd)
                                              }
                                            >
                                              <i className="fa-solid fa-minus" />
                                            </div>
                                            <div
                                              className="quantity-button quantity-up"
                                              onClick={() => handleAddItem(pd)}
                                            >
                                              <i className="fa-solid fa-plus" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <span className="price-txt">
                                        $
                                        <span className="total-price">
                                          {" "}
                                          {pd.buyPrice * pd.qtn}
                                        </span>
                                      </span>
                                    </td>
                                    <td>
                                      <button className="cart-delete">
                                        <i
                                          className="fa-light fa-trash-can"
                                          onClick={() =>
                                            handleDeleteCart(pd._id)
                                          }
                                        />
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </>
                          ) : (
                            <div>
                              {" "}
                              <p style={{ fontSize: 22, padding: 10 }}>
                                Your carts is empty
                              </p>
                            </div>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="btn-box">
                    <a href="shop.html" className="def-btn">
                      Continue Shopping
                    </a>
                    {/* <button className="def-btn" id="cartUpdate" disabled>
                      Update Cart
                    </button> */}
                  </div>
                  <div className="cart-total-panel">
                    <h3 className="title">Cart Total</h3>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6">
                          {/* <h4 className="sub-title">Choose Shipping Mode:</h4> */}
                          <div className="shipping-mode">
                            {/* <div className="form-check" >
                              <input
                                className="form-check-input shipping-check"
                                type="radio"
                                name="shippingMode"
                                id="storePickup"
                                defaultChecked
                              />
                              <span className="sub-input">
                                <i className="fa-regular fa-check" />
                              </span>
                              <label
                                className="form-check-label"
                                htmlFor="storePickup"
                              >
                                Delivery inside Dhaka - FREE
                              </label>
                            </div>
                            <div
                              className="form-check"
                        
                            >
                              <input
                                className="form-check-input shipping-check"
                                type="radio"
                                name="shippingMode"
                                id="homeDelivery"
                              />
                              <span className="sub-input">
                                <i className="fa-regular fa-check" />
                              </span>
                              <label
                                className="form-check-label"
                                htmlFor="homeDelivery"
                              >
                                Delivery outside Dhaka
                                <span>- ৳/ 40.00 </span>
                              </label>
                            </div> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="calculate-area">
                            <ul>
                              <li>
                                Sub Total{" "}
                                <span className="price-txt">
                                  ৳<span className="sub-total">{price}</span>
                                </span>
                              </li>
                              <li>
                                Shipping{" "}
                                <span className="price-txt" id="shippingFee">
                                  <span className="text-success">
                                    {shipping}
                                  </span>
                                </span>
                              </li>

                              <li className="total-price-wrap">
                                Total{" "}
                                <span className="price-txt">
                                  ৳<span id="totalPrice">{grandPrice}</span>
                                </span>
                              </li>
                            </ul>
                            <button
                              className="def-btn tab-next-btn"
                              id="proceedToCheckout"
                            >
                              Proceed to checkout{" "}
                              <i className="fa-light fa-cart-circle-check" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-tab" id="orderCompletedTab">
                  <div className="check-icon">
                    <svg
                      className="checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                    >
                      {" "}
                      <circle
                        className="checkmark__circle"
                        cx={26}
                        cy={26}
                        r={25}
                        fill="none"
                      />{" "}
                      <path
                        className="checkmark__check"
                        fill="none"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      />
                    </svg>
                  </div>
                  <div className="order-complete-msg">
                    <h2>Your Order Has Been Completed</h2>
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

export default Cart;
