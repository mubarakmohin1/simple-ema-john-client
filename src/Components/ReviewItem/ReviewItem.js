import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product,removeProduct }) => {
    const { name, price, img, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-detail-container">
                <div className="review-detail">
                    <p>Name: {name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Shipping Charge: {shipping}</small></p>
                    <p> <b>Quantity: {quantity}</b></p>
                </div>
                <div className="review-delete">
                    <button onClick={()=>{removeProduct(product)}} className='btn'><FontAwesomeIcon className='delet-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;