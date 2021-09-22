import React from "react";
import './MainBlock.css'

const MainBlock = (props) => {
    return (
        <div className='main-content'>
            <div class="main-img">
                <img src={props.img} alt='Image Placeholder' />
                <video src='/videos/Video-1.mp4' autoPlay loop muted />
            </div>
            <div class="main-block-text-content">
                <a href={props.link}><h3>{props.title}</h3></a>
                <div><p class="main-block-small-text">{props.text}</p></div>
            </div>
        </div>
    );
}

export default MainBlock;