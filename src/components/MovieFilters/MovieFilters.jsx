import React from 'react';

import './MovieFilters.scss';

const MovieFilters = () => {
    return (
        <div className="movie-filters">
            <div className="left-section">
                <p>ALL</p>
                <p>DOCUMENTARY</p>
                <p>COMEDY</p>
                <p>HORROR</p>
                <p>CRIME</p>
            </div>
            <div className="right-section">
                <p>SORT BY</p>
                <p>RELEASE DATE</p>
            </div>
        </div>
    )
}

export default MovieFilters;