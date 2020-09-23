import React from 'react';
import * as moment from 'moment';

import './MovieDetails.scss';

const MovieDetails = props => {
    const { title, poster_path, overview, tagline, release_date, runtime, vote_average } = props.movie;
    const displayedRuntime = runtime ? `${runtime} min` : '';

    return (
        <div className="movie-details">
            <div className="left-section">
                <div className="movie-image">
                    <img src={poster_path} alt={title} />
                </div>
            </div>
            <div className="right-section">
                <div className="inner-top-section-wrapper">
                    <p className="movie-title">{title}</p>
                    <div className="movie-rating-container">
                        <p className="movie-rating">{vote_average ? vote_average : 0}</p>
                    </div>
                </div>
                <div style={{ color: '#ffffff', fontSize: '0.75em' }}>
                    <span className="movie-tagline">{tagline}</span>
                </ div>
                <div className="inner-middle-section-wrapper">
                    <span className="movie-year">{`${moment(release_date).format('Y')}`}</span>
                    <span className="movie-duration">{displayedRuntime}</span>
                </div>
                <div className="inner-bottom-section-wrapper">
                    <p className="movie-description">{overview}</p>
                </div>
            </div>
        </div>
    )
};

export default MovieDetails;