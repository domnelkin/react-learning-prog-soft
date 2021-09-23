import React from 'react';
import "./SocialIcon.css"
import { Link } from 'react-router-dom';

const SocialIcon = (props) => {
    return (
        <a href={props.link} className='social-btn'>
            <img src={props.img} alt="social" class="social-img" />
        </a>
    );
}

export default SocialIcon;