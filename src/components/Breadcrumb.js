import React from "react";
import './Breadcrumb.css'

const Breadcrumb = (props) => {
    return(
        <div className='breadcrumb'>
            <p className='breadcrumb-text'>{props.text}</p>
        </div>
    );
}

export default Breadcrumb;