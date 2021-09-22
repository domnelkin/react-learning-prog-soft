import React from "react";
import './Navbar.css';
import HeaderButton from "./HeaderButton";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='nav-container'>
                <Link to='/' className='navbar-logo'>
                    <div class="logo">
                        <div class="logo-text">BestBuy</div>
                        <img src='logo192.png' class='logo-img' />
                    </div>
                </Link>
                <ul className='main-navigation'>
                    <li>
                        <HeaderButton link='/' name='Home' />
                    </li>
                    <li>
                        <HeaderButton link='/catalog' name='Catalog' />
                    </li>
                    <li>
                        <HeaderButton link='/cart' name='Cart' />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;