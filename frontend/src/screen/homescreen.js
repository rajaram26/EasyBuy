import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../action/productActions';

function HomeScreen(pros){

    const productList = useSelector(state => state.productList);
    const {products,loading,error}=productList;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts());
      return ()=>{
        //  
      };
    }, [])
    
    return( loading ? <div>loading....</div> :
      error ? <div>{error}</div>:
        <ul className="products">
                  {
                    products.map(product =>
                      <li key={product._id}>
                        <div className="product">
                            <Link to={'/products/'+product._id}>
                                <img className="product-image" src={product.image} alt="Load page again"/>
                            </Link> 
                            {/* <img className="product-image" src={product.img} alt="Load page again"/> */}
                            <div className="product-name">
                              <Link to={'/products/'+product._id}>{product.name}</Link> 
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">Rs-{product.price}</div>
                            <div className="product-review">{product.rating} Stars ({product.reveiw})</div>
                        </div>
                      </li> 
                    )
                  }
        </ul>
    )
}
export default HomeScreen;