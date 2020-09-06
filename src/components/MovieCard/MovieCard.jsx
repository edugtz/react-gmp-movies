import React from "react";
import PropTypes from "prop-types"

import "./MovieCard.scss";
import Popover from "../Common/Popover/Popover";

const MovieCard = props => {
    const [isPopoverOpen, setPopoverOpen] = React.useState(false);
    const { title, description, img, year } = props.movie;

    const toggleOpenMovieOptions = () => {
        setPopoverOpen(prevState => !prevState)
    }

    const onSelectedMovieOptions = () => {
        toggleOpenMovieOptions();
        props.setSelectedMovie(props.movie.id);
    }

    const onDeleteMovie = () => {
        onSelectedMovieOptions();
        props.toggleDeleteMovieModal();
    }

    const onEditMovie = () => {
        onSelectedMovieOptions();
        props.toggleEditMovieModal();
    }

    return (
        <div className="movie-card">
            <div className="movie-options-wrapper">
                <span onClick={onSelectedMovieOptions} className="movie-options"><i className="fa fa-ellipsis-v"></i></span>
                <Popover
                    toggleOpenMovieOptions={toggleOpenMovieOptions}
                    isPopoverOpen={isPopoverOpen}
                    onDeleteMovie={onDeleteMovie}
                    onEditMovie={onEditMovie}
                />
            </div>
            <div className="movie-image">
                <img src={img} alt={title} />
            </div>
            <div className="movie-info">
                <div className="left-section">
                    <p className="movie-title">{title}</p>
                    <p className="movie-description">{description}</p>
                </div>
                <div className="right-section">
                    <span className="movie-year">{year}</span>
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    }).isRequired
}

export default MovieCard;
