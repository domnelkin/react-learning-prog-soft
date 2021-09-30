import React from 'react';
import "./SocialIcon.css"

const SocialIcon = (props) => {
    return (
        <a href={props.link} className='social-btn'>
            <img src={`/${props.img}`} alt="social" className="social-img" />
        </a>
    );
}

export default SocialIcon;