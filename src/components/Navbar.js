import React from "react";
import './Navbar.css';
import HeaderButton from "./HeaderButton";
import { Link } from 'react-router-dom';
import SearchField from "./SearchField";

const Navbar = () => {
    return (
        <nav>
            <div className='nav-container'>
                <Link to='/' className='navbar-logo'>
                    <div className="logo">
                        <div className="logo-text">BestBuy</div>
                        <img src='/logo200.png' className='logo-img' alt='Logo' />
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

function searchInCatalog(e) {
    const inputValue = e.target.value.toUpperCase();
    const catalogItems = document.querySelectorAll(".catalog-items > div");

    catalogItems.forEach(item => {
        let title = item.querySelector(".good-description h4");
        let titleText = title.textContent.toUpperCase();
        if(titleText.includes(inputValue)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

export default Navbar;