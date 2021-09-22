import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = (props) => {
    return (
        <Link to={props.link} className='nav-link'>
            <img src={props.img} alt="social" />
        </Link>
    );
}

export default SocialIcon;