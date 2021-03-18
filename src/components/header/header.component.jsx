import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.css'
import  Logo  from '../../assets/seafood_Ex-removebg-preview.png'

const Header = () => (
    <div className='nav'>
        <div>
       <Link className='logo-container' to='/'>
            <img src={Logo} alt="" width='200' height='200'/>
       </Link>
       </div>
       <div className="options">
            <Link className='option' to='/stallion'>
                STALLION
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
       </div>
    </div>
)
export default Header