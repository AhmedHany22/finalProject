import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../store/actions/orderActions';
import { ORDER_CREATE_RESET } from '../../store/types/orderConstants';
import { saveShippingAddress, savePaymentMethod, saveShippingDetails, } from '../../store/actions/cartActions';
import { useTranslation } from "react-i18next";

const Checkout = (props) => {
  const cart = useSelector((state) => state.cart);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) { props.history.push('/signin'); }

  const { shippingAddress, paymentMethod, shippingDetails } = cart;

  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [firstName, setFirstName] = useState(shippingAddress.firstName);
  const [lastName, setLastName] = useState(shippingAddress.lastName);
  const [phoneNum, setPhoneNum] = useState(shippingAddress.phoneNum);
  const [address, setAddress] = useState(shippingAddress.address);
  const [country, setCountry] = useState(shippingAddress.country);
  const [region, setRegion] = useState(shippingAddress.region);
  const [city, setCity] = useState(shippingAddress.city);
  const [fax, setFax] = useState(shippingAddress.fax);

  const dispatch = useDispatch();

  const submitShipping = (e)=>{
    e.preventDefault();
    dispatch( saveShippingAddress({ firstName, lastName, phoneNum, address, city, region, country, postalCode, fax }) );
  }

  const [paymentCost, setPaymentCost] = useState(0);
  const [paymentType, setPaymentType] = useState(paymentMethod);
  const submitPaymentType = (e) => {
    if ( paymentType === "PayPal"){ setPaymentCost(0.05) }
    else if ( paymentType === "VisaCard"){ setPaymentCost(0.03) }
    else if( paymentType === "Stripe" ){ setPaymentCost(0.07) }
    e.preventDefault();
    dispatch(savePaymentMethod(paymentType));
  };

  const [shippingCost, setShippingCost] = useState(0);
  const [shippingType, setShippingType] = useState(shippingDetails);
  const submitShippingType = (e) => {
    if ( shippingType == "Free"){ setShippingCost(0) }
    else if ( shippingType == "Standard"){ setShippingCost(15) }
    else if( shippingType == "Speed" ){ setShippingCost(35) }
    e.preventDefault();
    dispatch(saveShippingDetails(shippingType));
  };

  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = ( cart.cartItems.reduce((a, c) => a + c.qty * (c.price - c.discount), 0) );
  cart.itemsQty = ( cart.cartItems.reduce((a, c) => a + c.qty , 0) );
  cart.grandPrice = ( toPrice(cart.itemsPrice + shippingCost + (cart.itemsPrice * paymentCost)) );
  cart.shippingCost = shippingCost;
  cart.paymentCost = paymentCost * cart.itemsPrice;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const placeOrderHandler = () => { dispatch(createOrder({...cart, orderItems: cart.cartItems})) };

  useEffect(() => { if (success) {
    props.history.push(`/order/${order._id}`);
    dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="jumbotron text-white text-center header-section">
        <div className="container col-lg-5 col-md-6 col-sm-8 col-9 py-4 bg-white text-center myBorder">
          <h1 className="mb-3 text-dark">{t("Checkout")}</h1>
          <div className="msg text-dark">
          {t("Missed something ?")}<a href="/shop" className="text-secondary"> {t("Continue shopping")}</a>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="row adjustRow">
          <div className="col-lg-8 col-md-12 mt-4 bg-white">
            <nav className="text-secondary text-uppercase">
              <ul className="nav nav-tabs nav-justified h5">
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Billing"className="nav-link custmizeAnchor titles active">
                     {t(" Billing Address")}
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Shipping" className="nav-link custmizeAnchor titles">
                  {t("Shipping Method")}
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Payment" className="nav-link custmizeAnchor titles">
                    {t("Payment Method ")}
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Orders" className="nav-link custmizeAnchor titles">
                    {t("Orders Review")}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="tab-content text-left text-secondary">
              {/*---------------------------BillingAddress---------------------------*/}
              <div className="tab-pane active" id="Billing">
                <h4 dir="auto" style={{textAlign: 'start'}}>  {t("Billing Details")}</h4><hr />
                <form role="form">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 cust-billing">
                      <div className="form-group">
                        <label for="inputFirstName" className="control-label">
                          First Name:<span className="text-error">*</span>
                        </label>
                        <div>
                          <input
                            type="text"
                            value={firstName}
                            id="inputFirstName"
                            className="form-control"
                            placeholder="Enter First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputLastName" className="control-label">
                          Last Name:<span className="text-error">*</span>
                          </label>
                        <div>
                        <input
                          type="text"
                          value={lastName}
                          id="inputLastName"
                          className="form-control"
                          placeholder="Enter Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputFax" className="control-label">Fax:</label>
                        <div>
                        <input
                          type="text"
                          value={fax}
                          id="inputFax"
                          className="form-control"
                          placeholder="Enter Fax"
                          onChange={(e) => setFax(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">
                              Contury:<span className="text-error">*</span>
                            </label>
                            <div>
                              <select name="inputContury" className="form-control" onChange={(e) => setCountry(e.target.value)} value={country}>
                                <option>-Conturies-</option>
                                <option>Contury1</option>
                                <option>Contury2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Region:
                          <span className="text-error">*</span></label>
                            <div>
                              <select name="inputRegion" className="form-control" onChange={(e) => setRegion(e.target.value)} value={region}>
                                <option>-Regions-</option>
                                <option>Region1</option>
                                <option>Region2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 cust-billing">
                      <div className="form-group">
                        <label for="inputPhone" className="control-label">Phone:</label>
                        <div>
                          <input
                            type="text"
                            value={phoneNum}
                            id="inputPhone"
                            className="form-control"
                            placeholder="Enter phone Number"
                            onChange={(e) => setPhoneNum(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputAddress1" className="control-label">
                          Address /1:<span className="text-error">*</span>
                        </label>
                        <div>
                        <input
                          type="text"
                          value={address}
                          id="inputAddress1"
                          className="form-control"
                          placeholder="Enter Address"
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputCity"className="control-label">
                          City:<span className="text-error">*</span>
                        </label>
                        <div>
                        <input
                          type="text"
                          value={city}
                          id="inputCity"
                          className="form-control"
                          placeholder="Enter City"
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputPostCode" className="control-label">
                          Post Code:<span className="text-error">*</span>
                        </label>
                        <div>
                        <input
                          type="text"
                          value={postalCode}
                          id="inputPostCode"
                          className="form-control"
                          placeholder="Enter Postal Code"
                          onChange={(e) => setPostalCode(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark mr-2">Back</a>
                <button type="Submit" className="btn rounded-0 btn-outline-dark active" onClick={submitShipping}>Submit</button>
                <br /><br />
              </div>
              {/*---------------------------ShippingDetails---------------------------*/}
              <div className="tab-pane" id="Shipping">
                <div className="row">
                  {/*--------------------------- Free ---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>Free</h4><hr className="my-3"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label>
                        <input
                          required
                          type="radio"
                          name="shippingType"
                          id="Free"
                          value="Free"
                          onChange={(e)=> setShippingType(e.target.value)}
                        />
                        <span className="ml-2">Free</span>
                      </label>
                    </div>
                  </div>
                  {/*---------------------------Standart---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>Standart</h4><hr className="my-3"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <input
                        required
                        type="radio"
                        name="shippingType"
                        id="Standard"
                        value="Standard"
                        onChange={(e)=> setShippingType(e.target.value)}
                      />
                    <span className="ml-2">Standard $15</span>
                    </div>
                  </div>
                  {/*--------------------------- Speed ---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-3">
                    <h4>Speed</h4><hr className="my-3"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label>
                        <input
                          required
                          type="radio"
                          name="shippingType"
                          id="Speed"
                          value="Speed"
                          onChange={(e)=> setShippingType(e.target.value)}
                        />
                      <span className="ml-2">Speed $35</span>
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark">Back</a>
                <button type="Submit" className="btn rounded-0 btn-outline-dark active ml-2" onClick={submitShippingType}>Submit</button>
                <br /><br />
              </div>
              {/*---------------------------PaymentMethod---------------------------*/}
              <div className="tab-pane" id="Payment">
                <div className="row">
                  {/*--------------------------- PayPal ---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>Pay Pal</h4><hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label className="color-active">
                        <input
                        required
                        type="radio"
                        name="paymentType"
                        id="PayPal"
                        value="PayPal"
                        onChange={(e)=> setPaymentType(e.target.value)}
                        />
                        <span className="ml-2">Pay Pal</span>
                      </label>
                    </div>
                  </div>
                  {/*---------------------------VisaCard---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>Visa Card</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label className="color-active">
                        <input
                          required
                          type="radio"
                          name="paymentType"
                          id="VisaCard"
                          value="VisaCard"
                          onChange={(e)=> setPaymentType(e.target.value)}
                        />
                        <span className="ml-2">Visa Card</span>
                      </label>
                    </div>
                  </div>
                  {/*--------------------------- Stripe ---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>Stripe</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label className="color-active">
                        <input
                          required
                          type="radio"
                          name="paymentType"
                          id="Stripe"
                          value="Stripe"
                          onChange={(e)=> setPaymentType(e.target.value)}
                        />
                        <span className="ml-2">Stripe</span>
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark mr-2">Back</a>
                <button type="Submit" className="btn rounded-0 btn-outline-dark active" onClick={submitPaymentType}>Submit</button>
                <br /><br />
              </div>
              {/*---------------------------OrderReviews---------------------------*/}
              <div className="tab-pane" id="Orders">
                <h4 className="reviewTitle">Review</h4>
                <div className="col-md-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="hide">Image</th>
                        <th className="hide">Product Name</th>
                        <th className="hide">Quantity</th>
                        <th className="hide nowrap">Unit Price</th>
                        <th className="hide">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.cartItems.map((item) => (
                        <tr>
                        <td>
                          <span><img alt="Product Name" src={item.image} /></span>
                        </td>
                        <td>
                          <Link to="/shop">{item.name}</Link>
                        </td>
                        <td>
                          <div className="h5 text-center text-success">{item.qty}</div>
                        </td>
                        <td>
                          <p>${item.price - item.discount}</p>
                          <s className="text-danger">${item.price}</s>
                        </td>
                        <td>${(item.price - item.discount)*item.qty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark mr-2">Back</a>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mt-4 pt-4 bg-white text-left text-uppercase bill">
            <div className="block-form block-order-total visible" data-wow-duration="1s" >
              <h3 className="">Total</h3><hr />
              <ul className="list-unstyled">
                <li>
                  Sub Total :<strong className="float-right">$ {cart.itemsPrice}</strong>
                </li>
                <li>Shipping Sharge :
                  <strong className="float-right">$ {shippingCost}</strong>
                </li>
                <li>
                  Payment Charge :<strong className="float-right">$ {toPrice(cart.itemsPrice * paymentCost)}</strong>
                </li>
                <li>
                  Promotion Discound :<strong className="float-right">$ 00.00</strong>
                </li>
                <li><hr /></li>
                <li className="color-active">
                  <b>Total :</b>
                  <strong className="float-right">$ {cart.grandPrice}</strong>
                </li>
              </ul>
              <button type="Submit" className="btn rounded-0 btn-outline-dark active w-100 mt-3" onClick={placeOrderHandler}>Place Order</button>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Checkout;
