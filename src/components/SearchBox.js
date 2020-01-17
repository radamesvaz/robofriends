import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className = 'pa2'>
        <input className = 'pa3 b4 ba b--green bg-lightest-blue br4' 
        type = 'search' 
        placeholder='Search Robots' 
        onChange={searchChange}    
        />
        </div>
    );
}
export default SearchBox;