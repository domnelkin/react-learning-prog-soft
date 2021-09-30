import React from 'react';
import './ActionButton.css';

const ActionButton = (props) => {
    return(
        <button className="action-button" type="button" onClick={props.onClick}>{props.title}</button>
    );
}

export default ActionButton;