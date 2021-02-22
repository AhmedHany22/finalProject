
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {productDetailsReducer, productListReducer} from './reducers/productReducers'

const initialState={};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const store=createStore(reducer,initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;