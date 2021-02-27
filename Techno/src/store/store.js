import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {productDetailsReducer, productListReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import {userDetailsReducer, userUpdateProfileReducer, userSigninReducer, userRegisterReducer } from './reducers/userReducers';
import {orderCreateReducer, orderDetailsReducer, orderPayReducer,} from './reducers/orderReducers';

const initialState={
  userSignin:{
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  },
  cart:{
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {},
    paymentMethod: localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : '',
    shippingDetails: localStorage.getItem('shippingDetails') ? JSON.parse(localStorage.getItem('shippingDetails')) : '',
  }
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
})

const store=createStore(reducer,initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;
