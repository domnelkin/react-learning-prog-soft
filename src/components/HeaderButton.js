import React from 'react';
import './HeaderButton.css';
import { Link } from 'react-router-dom';

const HeaderButton = (props) => {
    return (
        <Link to={props.link} className='nav-link'>
            {props.name}
        </Link>
    );
}

export default HeaderButton;