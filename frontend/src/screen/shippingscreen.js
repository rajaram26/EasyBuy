import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../action/cartaction';
import CheckoutSteps from '../component/checkoutstep';

function ShippingScreen(props){
    const [address, setAddress]=useState('');
    const [city, setCity]=useState('');
    const [pincode,setPincode]=useState('');
    const [country,setCountry]=useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShipping({address,city,pincode,country}));
        props.history.push('payment');
    };
    return <div><CheckoutSteps step1 step2></CheckoutSteps>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Shipping</h2>
                        </li>
                    
                        <li>
                            <label htmlFor="address">
                                Address
                            </label>
                            <input type="address" name="address" id="address" onChange={(e)=>setAddress(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="city">
                                City
                            </label>
                            <input type="city" name="city" id="city" onChange={(e)=>setCity(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="pincode">
                                Pincode
                            </label>
                            <input type="pincode" name="pincode" id="pincode" onChange={(e)=>setPincode(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="country">
                                Country
                            </label>
                            <input type="country" name="country" id="country" onChange={(e)=>setCountry(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button cart-button">Continue</button>
                        </li>
                        {/* <li>
                            Already have an account ?
                            <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="full-width create">Create new Account</Link>
                        </li> */}
                    </ul>
                </form>
            </div>
    </div> 
}
export default ShippingScreen;