import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../action/productActions';

function ProductScreen(props){
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product ,loading ,error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [])

    const handleAddToCart= () =>{
        props.history.push("/cart/" + props.match.params.id+ "?qty=" +qty)
    }

    return(
        <div>
            <div className="back-to-result">
                <Link to="/" className="back-to-result-btn">Back to result</Link>
            </div>
            {loading? <div>loading...</div>:
             error? <div>{error}</div>:
             (
                <div className="product-details">
                    <div className="details-img">
                        <img src={product.image} alt="Load page again" />
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                <h2>{product.name}</h2>
                            </li>
                            <li>
                                {product.rating} Stars ({product.reveiw})
                            </li>
                            <li>
                                Price : Rs-<b>{product.price}</b>  
                            </li>
                            <li>
                                Description:
                                <div>
                                    {product.description}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>
                                Price : Rs-{product.price}
                            </li>
                            <li>
                                Status:{product.countInStock > 0 ? " In Stock" : " Unavailable"}
                            </li>
                            <li>
                                Quantity: <select value={qty} onChange={(e)=> { setQty(e.target.value)}}>
                                    {[...Array(product.countInStock).keys()].map(x=>
                                        <option key={x+1} value={x + 1}>{ x + 1}</option>
                                    )}
                                </select>
                            </li>
                            <li>
                                {product.countInStock > 0 && <button onClick={handleAddToCart} className="cart-button">Add to Cart</button>                                
                                }
                            </li>
                        </ul>
                    </div>
                </div>
             )}
            
        </div>
    )
}
export default ProductScreen;