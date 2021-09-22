import React from "react";

const MainBlock = (props) => {
    return (
        <div className='main-content'>
            <div>
                <img src={props.img} alt='Image Placeholder' />
            </div>
            <div>
                <a href={props.link}><h3>{props.title}</h3></a>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default MainBlock;