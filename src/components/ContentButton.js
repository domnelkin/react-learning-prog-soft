import React from 'react';
import './ContentButton.css';
import { Link } from 'react-router-dom';

const ContentButton = (props) => {
    return(
        <Link to={props.link} className='btn'>
            {props.name}
        </Link>
    );
}

export default ContentButton;