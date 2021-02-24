
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {productDetailsReducer, productListReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import { userSigninReducer ,userRegisterReducer} from './reducers/userReducers';

const initialState={};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer
})

const store=createStore(reducer,initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;