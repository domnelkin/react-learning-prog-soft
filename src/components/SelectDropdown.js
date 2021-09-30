import React from 'react';
import './SelectDropdown.css';
import Select from 'react-select';


const SelectDropdown = (props) => {
    return (
        <div className="select-dropdown">
            <Select
                onChange={props.onChange}
                options={props.options}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default SelectDropdown;