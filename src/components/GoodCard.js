import React from 'react';
import { Link } from 'react-router-dom';
import ContentButton from './ContentButton';

const GoodCard = (props) => {
    return(
        <div className='good-card'>
            <div className='good-card-top'>
                <p className='card-number'>{props.good_code}</p>  
            </div>
            <div className='good-image-container'>
                <Link to={props.link}><img src={props.img} /></Link>
            </div>
            <div className='good-description'>
                <Link to={props.link}><h4>{props.title}</h4></Link>
                <Link to={props.link}><p>{props.text}</p></Link>
            </div>
            <div className='price'>
                <div>
                    <p>Price:</p>
                </div>
                <div>
                    $ {props.price}
                </div>
            </div>
            <div className='good-card-bottom'>
                <ContentButton
                    link={props.link}
                    name="Viev more"
                />
            </div>
        </div>
    );
}

export default GoodCard;