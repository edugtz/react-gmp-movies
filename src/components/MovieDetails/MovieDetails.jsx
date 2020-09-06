import React from 'react';

import './MovieDetails.scss';

const MovieDetails = props => {
    const { title, img, description, genre, year, awards, duration, rating } = props.movie;
    return (
        <div className="movie-details">
            <div className="left-section">
                <div className="movie-image">
                    <img src={img} alt={title} />
                </div>
            </div>
            <div className="right-section">
                <div className="inner-top-section-wrapper">
                    <p className="movie-title">{title}</p>
                    <div className="movie-rating-container">
                        <p className="movie-rating">{rating}</p>
                    </div>
                </div>
                {awards ? (
                    <div style={{ color: '#ffffff', fontSize: '0.75em' }}>
                        <span className="movie-awards">{awards}</span> - <span className="movie-genre">{genre}</span>
                    </ div>
                ) : (
                        <div style={{ color: '#ffffff', fontSize: '0.75em' }}>
                            <span className="movie-genre">{genre}</span>
                        </ div>
                    )}
                <div className="inner-middle-section-wrapper">
                    <span className="movie-year">{year}</span><span className="movie-duration">{duration}</span>
                </div>
                <div className="inner-bottom-section-wrapper">
                    <p className="movie-description">{description}</p>
                </div>
            </div>
        </div>
    )
};

export default MovieDetails;