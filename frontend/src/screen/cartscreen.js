import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../action/cartaction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartScreen(props){
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart; 

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, []);

    const checkOutHandler = () =>{
        props.history.push("/signin?redirect=shipping");
    }
    return <div className="cart">
        <div className="cart-list">
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
                                      Qty:
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product,e.target.value))}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                    </select>
                                    <button type="button" className="cart-btn cart-delete" onClick={()=> removeFromCartHandler(item.product)}>
                                        Delete
                                    </button>
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
        <div className="cart-action">
                <h3>
                    Subtotal ({cartItems.reduce((a,c)=> a + c.qty ,0) } items)
                    :
                    Rs {cartItems.reduce((a,c)=> a + c.price * c.qty , 0)}
                </h3>
                <button onClick={checkOutHandler} className="cart-button primary full-width" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
        </div>

    </div>
}
export default CartScreen;