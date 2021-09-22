import React from "react";
import { Link } from 'react-router-dom';

const NewsBlock = (props) => {
    return (
        <Link to={props.link} className='news-block'>
            <div>
                <img src={props.img} />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </Link>
    );
}

export default NewsBlock;