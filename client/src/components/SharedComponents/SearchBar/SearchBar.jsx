import React from 'react';

import './SearchBar.scss';

const SearchBar = ({ placeholder }) => {

  return (
    <div className="searchBar" >
      <input 
        type="text" 
        className="input-box" 
        placeholder={placeholder}
      />
    </div>
  )
};

export default SearchBar;
