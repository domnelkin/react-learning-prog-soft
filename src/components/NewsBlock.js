import React from "react";
import './NewsBlock.css'
import { Link } from 'react-router-dom';

const NewsBlock = (props) => {
    return (
            <div className='news-block'>
                <Link to={props.link}><img src={props.img} alt='image' /></Link>
                <Link to={props.link}><h4>{props.title}</h4></Link>
                <Link to={props.link}><p>{props.text}</p></Link>
            </div>
    );
}

export default NewsBlock;