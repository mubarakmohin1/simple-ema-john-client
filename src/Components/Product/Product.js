import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {img,name,price,ratings,seller} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <p className='product-name'>{name}</p>
            <p className='product-price'>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings} stars</small></p>
           </div>
       
           <button onClick={() =>props.addTocart(props.product)} className='add-cart'><p>Add to cart<FontAwesomeIcon style={{paddingLeft:'4px'}} icon={faShoppingCart}></FontAwesomeIcon></p></button>
           
        </div>
        
    );
};

export default Product;