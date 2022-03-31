import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
       <nav className='Header'>
           <img src={logo} alt="" />
           <div>
               <Link to="/shop">Shop</Link>
               <Link to="/orders">Order</Link>
               <Link to="/Inventory">Inventory</Link>
               <Link to="/About">About</Link>
           </div>
       </nav>
    );
};

export default Header;