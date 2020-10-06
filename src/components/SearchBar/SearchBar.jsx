import React from 'react'

import './SearchBar.scss'

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <input
                value={props.searchValue}
                onKeyDown={props.handleKeyPress}
                onChange={(event) => props.setSearchValue(event.target.value)}
                type="text"
                placeholder="What do you want to watch?"
            />
        </div>
    )
}

export default SearchBar
