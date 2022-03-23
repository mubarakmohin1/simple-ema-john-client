import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
              <h5 style={{fontFamily: 'Lato',
                           fontStyle: 'normal',
                           fontWeight: '400',
                           fontSize: '25px',
                           lineHeight: '30px'}}>Order Summary</h5>
             <p>Select Item:{props.cart.length}</p>
        </div>
    );
};

export default Cart;