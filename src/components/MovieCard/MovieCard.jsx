import React from "react";
import PropTypes from "prop-types"
import * as moment from 'moment';

import "./MovieCard.scss";
import Popover from "../Common/Popover/Popover";

const MovieCard = props => {
    const [isPopoverOpen, setPopoverOpen] = React.useState(false);
    const { id, title, genres, poster_path, release_date } = props.movie;
    const movieYear = moment(release_date).format('Y');
    const genresToBeDisplayed = genres.join(", ");

    const toggleOpenMovieOptions = () => {
        setPopoverOpen(prevState => !prevState)
    }

    const onSelectedMovieOptions = () => {
        toggleOpenMovieOptions();
        props.setSelectedMovie(id);
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
        <div className="movie-card" onClick={() => props.setSelectedMovie(id)}>
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
                <img src={poster_path} alt={title} />
            </div>
            <div className="movie-info">
                <div className="left-section">
                    <p className="movie-title">{title}</p>
                    <p className="movie-genre">{genresToBeDisplayed}</p>
                </div>
                <div className="right-section">
                    <span className="movie-year">{movieYear}</span>
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
    }).isRequired
}

export default MovieCard;
