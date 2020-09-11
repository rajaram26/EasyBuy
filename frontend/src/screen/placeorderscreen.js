import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../action/cartaction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../component/checkoutstep';

function PlaceOrderScreen(props){
    const cart = useSelector(state => state.cart);
    const {cartItems,shipping,payment} = cart; 

    if(!shipping.address)
    {
        props.history.push("/shipping");
    }else if(!payment.paymentMethod){
        props.history.push("/payment");
    }

    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty,0);
    const shippingPrice = itemsPrice >100 ? 0:100;
    const gstPrice = 0.15 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice + gstPrice;
    const dispatch = useDispatch();
    
    useEffect(() =>{
        
    }, []);
 
    const PlaceOrderHandler = () => {

    }
    const checkOutHandler = () =>{
        props.history.push("/signin?redirect=shipping");
    }
    return <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="placeorder">
            <div className="placeorder-info">
                <div>
                    <h3>
                        Shipping
                    </h3>
                    <div>
                        {cart.shipping.address},{cart.shipping.city},
                    </div>
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        Payment Method: {cart.payment.paymentMethod}
                    </div>
                </div>
                <div>
                    <ul className="cart-list-container">
                        <li>
                            <h3>
                                Shopping Cart
                            </h3>
                            <div>
                                Price
                            </div>
                        </li>
                        {
                            cartItems.length ===0?
                            <div>
                                Cart is Empty
                            </div>
                            :
                            cartItems.map( item =>
                                <li>
                                    <div >
                                        <img  src={item.image} alt="no" />
                                    </div>
                                    <div className="cart-name">
                                        <Link className="link" to={"/product/"+item.product}>
                                            {item.name}
                                        </Link>
                                        <div>
                                            Qty:{item.qty}     
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                    Rs {item.price}
                                    </div> 
                                </li>  
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="placeorder-action">
                <ul>
                    <li>
                        <button className="cart-button primary full-width" onClick={PlaceOrderHandler}>Place Order</button>
                    </li>
                    <li>
                        <h3>Order Summary</h3>
                    </li>
                    <li>
                        <div>Items:</div>
                        <div>Rs- {itemsPrice}</div>
                    </li>
                    <li>
                        <div>Shipping:</div>
                        <div>Rs- {shippingPrice}</div>
                    </li>
                    <li>
                        <div>GST:</div>
                        <div>Rs- {gstPrice}</div>
                    </li>
                    <li>
                        <div>Total:</div>
                        <div>Rs- {totalPrice}</div>
                    </li>
                </ul>
                
            </div>

        </div>
    </div>
    
}
export default PlaceOrderScreen;