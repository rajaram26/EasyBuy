import {createStore,combineReducers, applyMiddleware, compose } from 'redux';
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer} from './reducer/productReducer';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { cartReducer } from './reducer/cartreducer';
import { userSigninReducer, userRegisterReducer } from './reducer/userredcuer';

const cartItems=Cookie.getJSON("cartItems") || [];
const userInfo=Cookie.getJSON("userInfo") || null;


const iniitalState={ cart: { cartItems,shipping: {},payment: {}},userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,iniitalState,composeEnhancer(applyMiddleware(thunk)));

export default store;