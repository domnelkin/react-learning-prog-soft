import React from "react";
import { Link } from 'react-router-dom';

const NewsBlock = (props) => {
    return (
            <div className='news-block'>
                <Link to={props.link}><img src={props.img} /></Link>
                <Link to={props.link}><h3>{props.title}</h3></Link>
                <Link to={props.link}><p>{props.text}</p></Link>
            </div>
    );
}

export default NewsBlock;