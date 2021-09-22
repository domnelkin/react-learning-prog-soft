import React from "react";
import HeaderButton from "./HeaderButton";

const Navbar = () => {
    return(
        <nav>
            <div className='nav-container'>
                <HeaderButton link='/' name='Home' />
                <HeaderButton link='/catalog' name='Catalog' />
                <HeaderButton link='/cart' name='Cart' />
            </div>
        </nav>
    );
}

export default Navbar;