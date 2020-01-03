import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className = 'pa2'>
        <h3><input className = 'br4 pa3 ba b--green bg-lightest-blue' 
        type = 'search' 
        placeholder='Search Robots' 
        onChange={searchChange}    
        /></h3>
        </div>
    );
}

export default SearchBox;