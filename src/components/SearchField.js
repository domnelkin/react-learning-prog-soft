import React from "react";

const SearchField = (props) => {
    return(
        <div className='search-field'>
            <input className='search-input' type='text' onChange={props.onChange} placeholder='Search...' />
        </div>
    );
}

export default SearchField;