import React from 'react';

import "./SearchBar.scss";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="What do you want to watch?" />
        </div>
    )
}

export default SearchBar;