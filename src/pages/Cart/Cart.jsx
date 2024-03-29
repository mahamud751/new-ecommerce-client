import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import useScript from "../../components/Common/Reload";
import {
  add_item,
  delete_cart,
  remove_item,
} from "../../redux/actions/cartAction";
import { AuthContext } from "../../contexts/AuthProvider";

const Cart = () => {
  useScript("/assets/js/cart.js");
  const { user } = useContext(AuthContext);
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

  const navigate = useNavigate();
  const initialInfo = {
    firstname: user ? user.displayName : "",
    email: user ? user.email : "",
    phone: "",
    address: "",
  };

  console.log(getState);

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...bookingInfo };

    newValue[field] = value;
    setBookingInfo(newValue);
  };
  const MySwal = withReactContent(Swal);
  // Handle Product submit
  const handleModal = (e) => {
    const orders = {
      ...bookingInfo,
      getState,
      grandPrice,
    };
    console.log("orders", orders);
    fetch("https://korbojoy-server.onrender.com/api/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        MySwal.fire({
          icon: "success",
          title: "Order successfully done",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    e.preventDefault();
    navigate("/");
  };
  console.log("final", bookingInfo);

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
                                              className="quantity-button"
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
                                        <span className="">
                                          {" "}
                                          {pd.buyPrice * pd.qtn}
                                        </span>
                                      </span>
                                    </td>
                                    <td>
                                      <button className="">
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
                            {user ? (
                              <button
                                className="def-btn tab-next-btn"
                                id="proceedToCheckout"
                              >
                                Proceed to checkout{" "}
                                <i className="fa-light fa-cart-circle-check" />
                              </button>
                            ) : (
                              <Link to={"/login"}>
                                <button className="def-btn btn-border w-100">
                                  To Continue Please Login first
                                </button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-tab" id="checkOutTab">
                  <div className="row">
                    <div className="col-xl-8 col-lg-7 col-md-6">
                      <div className="billing-details">
                        <h3 className="title">Billing Details</h3>
                        <form className="form-row">
                          <div className="form-col-5">
                            <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              onBlur={handleOnBlur}
                              defaultValue={user ? user.displayName : ""}
                              required
                            />
                          </div>

                          <div className="form-col-5">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email Address"
                              name="email"
                              onBlur={handleOnBlur}
                              defaultValue={user ? user.email : ""}
                              required
                            />
                          </div>
                          <div className="form-col-5">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Phone"
                              name="phone"
                              onBlur={handleOnBlur}
                              required
                            />
                          </div>
                          {/* <div className="form-col-5">
                            <select
                              name="country"
                              required
                              className="form-control select wide"
                            >
                              <option value disabled selected hidden>
                                Select country
                              </option>
                              <option value="AF">Afghanistan</option>
                              <option value="AX">Aland Islands</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BQ">
                                Bonaire, Sint Eustatius and Saba
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvet Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo</option>
                              <option value="CD">
                                Congo, Democratic Republic of the Congo
                              </option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="CI">Cote D'Ivoire</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">Curacao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                Heard Island and Mcdonald Islands
                              </option>
                              <option value="VA">
                                Holy See (Vatican City State)
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">
                                Iran, Islamic Republic of
                              </option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KP">
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="KR">Korea, Republic of</option>
                              <option value="XK">Kosovo</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">
                                Lao People's Democratic Republic
                              </option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libyan Arab Jamahiriya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao</option>
                              <option value="MK">
                                Macedonia, the Former Yugoslav Republic of
                              </option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">
                                Micronesia, Federated States of
                              </option>
                              <option value="MD">Moldova, Republic of</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="AN">Netherlands Antilles</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">
                                Palestinian Territory, Occupied
                              </option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RE">Reunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russian Federation</option>
                              <option value="RW">Rwanda</option>
                              <option value="BL">Saint Barthelemy</option>
                              <option value="SH">Saint Helena</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="MF">Saint Martin</option>
                              <option value="PM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="CS">Serbia and Montenegro</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">Sint Maarten</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="GS">
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syrian Arab Republic</option>
                              <option value="TW">
                                Taiwan, Province of China
                              </option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">
                                Tanzania, United Republic of
                              </option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UM">
                                United States Minor Outlying Islands
                              </option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Viet Nam</option>
                              <option value="VG">
                                Virgin Islands, British
                              </option>
                              <option value="VI">Virgin Islands, U.s.</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                          </div>
                          <div className="form-col-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Town/City"
                              required
                            />
                          </div> */}
                          <div className="form-col-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address"
                              name="address"
                              onBlur={handleOnBlur}
                              required
                            />
                          </div>
                          {/* <div className="form-col-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Appartments"
                              required
                            />
                          </div>
                          <div className="form-col-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Post Code"
                              required
                            />
                          </div>
                          <div className="form-col-10">
                            <div className="check-wrap">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  id="shipDifferentAddress"
                                />
                                <span className="sub-input">
                                  <i className="fa-regular fa-check" />
                                </span>
                                <label
                                  className="form-check-label"
                                  htmlFor="shipDifferentAddress"
                                >
                                  Ship To Different Address
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  id="saveInformation"
                                />
                                <span className="sub-input">
                                  <i className="fa-regular fa-check" />
                                </span>
                                <label
                                  className="form-check-label"
                                  htmlFor="saveInformation"
                                >
                                  Save This Information For Next Time
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-col-10" id="shippingAddress">
                            <h3 className="title">Shipping Address</h3>
                            <div className="form-row">
                              <div className="form-col-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First Name"
                                  required
                                />
                              </div>
                              <div className="form-col-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last Name"
                                  required
                                />
                              </div>
                              <div className="form-col-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                  required
                                />
                              </div>
                              <div className="form-col-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Appartments"
                                  required
                                />
                              </div>
                              <div className="form-col-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Town/City"
                                  required
                                />
                              </div>
                              <div className="form-col-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Post Code"
                                  required
                                />
                              </div>
                              <div className="form-col-5">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Phone"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-col-10">
                            <textarea
                              className="form-control textarea"
                              placeholder="Notes about your order, e.g. special notes for delivery"
                              defaultValue={""}
                            />
                          </div> */}
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6">
                      <div className="payment-method">
                        <div className="total-clone">
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
                                <span className="text-success">{shipping}</span>
                              </span>
                            </li>

                            <li className="total-price-wrap">
                              Total{" "}
                              <span className="price-txt">
                                ৳<span id="totalPrice">{grandPrice}</span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="payment-option">
                          <div className="single-payment-card">
                            <div className="panel-header">
                              <div className="left-wrap">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    name="credit-card"
                                    type="checkbox"
                                    disabled
                                  />
                                  <span className="sub-input">
                                    <i className="fa-regular fa-check" />
                                  </span>
                                </div>
                                <span className="type">Credit Card</span>
                              </div>
                              <span className="icon">
                                <img
                                  src="assets/images/credit-card.png"
                                  alt="credit-card"
                                />
                              </span>
                            </div>
                            <div className="panel-body">
                              <form className="credit-card-form">
                                <div className="row g-lg-4 g-3">
                                  <div className="col-12">
                                    <div className="input-box card-number">
                                      <span className="symbol">
                                        <img
                                          src="assets/images/visa.png"
                                          alt="Card Type"
                                        />
                                      </span>
                                      <label>Card Number</label>
                                      <input
                                        type="text"
                                        id="creditCardNumber"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="input-box">
                                      <label>Expiry date</label>
                                      <input
                                        type="text"
                                        id="datepicker"
                                        placeholder="MM/YYYY"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="input-box">
                                      <label>Security code</label>
                                      <input
                                        type="number"
                                        id="securityCode"
                                        placeholder="e.g. 123"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="input-box">
                                      <label>Enter card holder name</label>
                                      <input
                                        type="text"
                                        id="cardHolderName"
                                        placeholder="Card holder"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="single-payment-card">
                            <div className="panel-header">
                              <div className="left-wrap">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    name="paypal"
                                    type="checkbox"
                                    disabled
                                  />
                                  <span className="sub-input">
                                    <i className="fa-regular fa-check" />
                                  </span>
                                </div>
                                <span className="type">PayPal</span>
                              </div>
                              <span className="icon">
                                <img
                                  src="assets/images/paypal.png"
                                  alt="paypal"
                                />
                              </span>
                            </div>
                            <div className="panel-body">
                              <form className="paypal-form">
                                <div className="row g-lg-4 g-3">
                                  <div className="col-12">
                                    <label>
                                      Email or phone no. that used in paypal
                                    </label>
                                    <input
                                      type="email"
                                      name="paypal-id"
                                      id="paypalId"
                                      placeholder="Email or mobile number"
                                      required
                                    />
                                  </div>
                                  <div className="col-12">
                                    <button
                                      type="submit"
                                      id="confirmPaypal"
                                      className="def-btn"
                                    >
                                      Confirm Paypal
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="single-payment-card">
                            <div className="panel-header">
                              <div className="left-wrap">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    name="google-pay"
                                    type="checkbox"
                                    disabled
                                  />
                                  <span className="sub-input">
                                    <i className="fa-regular fa-check" />
                                  </span>
                                </div>
                                <span className="type">Google Pay</span>
                              </div>
                              <span className="icon">
                                <img
                                  src="assets/images/google-pay.png"
                                  alt="google-pay"
                                />
                              </span>
                            </div>
                            <div className="panel-body">
                              <form className="google-pay-form">
                                <div className="row g-lg-4 g-3">
                                  <div className="col-12">
                                    <label>
                                      Email or phone no. that used in google pay
                                    </label>
                                    <input
                                      type="email"
                                      name="google-Pay-id"
                                      id="googlePayId"
                                      placeholder="Email or mobile number"
                                      required
                                    />
                                  </div>
                                  <div className="col-12">
                                    <button
                                      type="submit"
                                      id="confirmGooglePay"
                                      className="def-btn"
                                    >
                                      Confirm Google Pay
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="single-payment-card">
                            <div className="panel-header">
                              <div className="left-wrap">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    name="cash"
                                    type="checkbox"
                                    disabled
                                  />
                                  <span className="sub-input">
                                    <i className="fa-regular fa-check" />
                                  </span>
                                </div>
                                <span className="type">Cash on delivery</span>
                              </div>
                              <span className="icon">
                                <img
                                  src="assets/images/dollar.png"
                                  alt="cash"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          className="def-btn palce-order tab-next-btn btn-success"
                          id="palceOrder"
                          onClick={handleModal}
                        >
                          Place Order{" "}
                          <i className="fa-light fa-truck-arrow-right" />
                        </button>
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
