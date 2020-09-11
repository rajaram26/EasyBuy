import React from 'react';
import './App.css';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import ProductScreen from './screen/productscreen';
import HomeScreen from './screen/homescreen';
import CartScreen from './screen/cartscreen';
import SignInScreen from './screen/signinscreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screen/registerscreen';
import ProductsScreen from './screen/productsscreen';
import ShippingScreen from './screen/shippingscreen';
import PaymentScreen from './screen/paymentscreen';
import PlaceOrderScreen from './screen/placeorderscreen';


function App() {
   const userSignin = useSelector(state =>state.userSignin);
   const {userInfo}=userSignin;

  const OpenMenu = () =>{
        document.querySelector('.sidebar').classList.add('open');
    }
  const CloseSidebar = () =>{
      document.querySelector('.sidebar').classList.remove ('open');
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button className="side-btn" onClick={OpenMenu}>
                    &#9776;
                </button>
                <Link to="/">EasyBuy</Link>
            </div>
            <div className="header-links">
                <a href="carts.html">Carts</a>
                {
                    userInfo ? <Link to="/">{userInfo.name}</Link>:
                    <Link to="/signin">SignIn</Link>
                }
            </div>
        </header>
        <aside className="sidebar">
            <button className="sidebar-x" onClick={CloseSidebar}>
                <img src="https://img.icons8.com/small/16/000000/multiply.png" alt="not used"/>
            </button>
            <h3>Shopping Categories</h3>
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
                <li>
                    <a href="index.html">Mobiles</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
              <Route path="/productss" component={ProductsScreen} />
              <Route path="/signin" component={SignInScreen} /> 
              <Route path="/register" component={RegisterScreen} />
              <Route path="/products/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />  
              <Route path="/cart/:id?" component={CartScreen}/>
              <Route path="/shipping" component={ShippingScreen}/>
              <Route path="/payment" component={PaymentScreen}/>
              <Route path="/placeorder" component={PlaceOrderScreen}/>
            </div>
        </main>
        <footer className="footer">
            All right are resevered
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
