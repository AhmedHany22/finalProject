import "bootstrap/dist/css/bootstrap.min.css";
import "./Order.css";
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../../store/actions/orderActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../../store/types/orderConstants';

export default function Order(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  console.log(order);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo);
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, error: errorPay, success: successPay, } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, error: errorDeliver, success: successDeliver, } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || successDeliver || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady, successPay, successDeliver]);

  const successPaymentHandler = (paymentResult) => { };
  const deliverHandler = () => { dispatch(deliverOrder(order._id)); };
  console.log(order);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <>
        <div className="container mt-5 text-left">
          <div className="container pt-5 shadow p-3 my-5 bg-white rounded">
            <div>
              <h2 className="text-center mb-5">We've recieved your order<i class="ml-3 text-success text-center far fa-check-circle"></i></h2>
              <h5 className="text-center">Order num# {(order._id).substring(0,20)}</h5>
            </div>
            <hr className="my-5 mx-5"/>
            <div className="container">
              <h3 className="ml-4 mt-5"><strong>Delivery Details</strong><i class="ml-3 text-success fas fa-map-marker-alt"></i></h3>
              <div className="ml-2 row ml-3 mr-4">
                <div className="col-sm-6">
                  <h4 className="mt-4 mb-3"><strong>Delivery for</strong></h4>
                  <h6><strong>Name: </strong>{order.shippingAddress.firstName}{' '}{order.shippingAddress.lastName}</h6>
                  <h6><strong>Phone no: </strong>{order.shippingAddress.phoneNum}</h6>
                </div>
                <div className="col-sm-6">
                  <h4 className="mt-4 mb-2"><strong>Address</strong></h4>
                  <h6>
                    {order.shippingAddress.city},{' '}{order.shippingAddress.postalCode},{' '}{order.shippingAddress.address}
                    ,{' '}{order.shippingAddress.region},{' '}{order.shippingAddress.country}
                  </h6>
                  <h4 className="mt-4 mb-2"><strong>Email</strong></h4>
                  <h6>{order.shippingAddress.fax}</h6>
                </div>
              </div>
              <hr className="my-4 mx-5"/>
              <h3 className="ml-4 mt-5"><strong>Payment Information</strong><i class="ml-3 text-success fas fa-money-check-alt"></i></h3>
              <div className="row ml-3 mr-4">
                <div className="col-sm-6">
                  <h4 className="my-4"><strong>Payment Details</strong></h4>
                  <h6><strong>{order.paymentMethod}{' '}</strong> - Please <a href="#">read</a> to see how Taxes are calculated</h6>
                    {order.isPaid ? ( <MessageBox variant="success"> Paid at {order.paidAt} </MessageBox>
                    ) : ( <MessageBox variant="danger">Not Paid</MessageBox> )}
                  <h4 className="my-4"><strong>Shipping Details</strong></h4>
                  <h6><strong>{order.shippingDetails}{' '}</strong> - Please <a href="#">read</a> to see when items will arrive</h6>
                    {order.isDelivered ? ( <MessageBox variant="success"> Delivered at {order.deliveredAt} </MessageBox>
                    ) : ( <MessageBox variant="danger">Not Delivered</MessageBox> )}
                </div>
                <div className="col-sm-6 mt-2">
                  <h4 className="mt-3 ml-4 pl-3"><strong>Pill Details</strong></h4>
                  <ul className="my-3">
                    <li><div className="mb-2"><span>Quantity: {order.itemsQty}</span></div></li>
                    <li><div className="mb-2"><span>Shipping Cost: ${order.shippingCost}</span></div></li>
                    <li><div className="mb-2"><span>Payment Cost: ${order.paymentCost}</span></div></li>
                    <li><div className="mb-2"><span><strong>Order Total: ${order.grandPrice}</strong></span></div></li>
                    { !order.isPaid && (
                      <li className="mt-4">{!sdkReady ? (<LoadingBox></LoadingBox>) : (
                        <>
                          {errorPay && (<MessageBox variant="danger">{errorPay}</MessageBox>)}
                          {loadingPay && <LoadingBox></LoadingBox>}
                          <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} ></PayPalButton>
                        </>
                      )}</li>
                    )}
                    { userInfo.isAdmin && (
                      <li>
                        {loadingDeliver && <LoadingBox></LoadingBox>}
                        {errorDeliver && (<MessageBox variant="danger">{errorDeliver}</MessageBox>)}
                        <button type="button" className="btn btn-warning w-100" onClick={deliverHandler}>
                          <strong>Deliver Order</strong>
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <hr className="my-4 mx-5"/>
              <h3 className="mx-5 mt-5 mb-5"><strong>Order Summary</strong><i class="ml-3 text-success fas fa-cart-plus"></i></h3>
              <div className="mx-4">
                <ul className="w-100 mr-5 row d-flex justify-content-center">
                    {order.orderItems.map((item) => (
                      <li key={item.product} className="col-sm-8 col-md-5 col-lg-3 text-center mb-5 mx-2 shadow p-3 mb-5 bg-white rounded">
                        <div className="mt-4"><img src={item.image} alt={item.name} className="w-100"></img></div>
                        <div className="my-4">
                          <h6>{item.name}</h6>
                          <h6>Quantity : {item.qty}</h6>
                          <strong>Total Price = ${item.qty * (item.price - item.discount)}</strong>
                        </div>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
