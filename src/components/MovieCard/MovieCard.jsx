import React from "react";
import PropTypes from "prop-types"

import "./MovieCard.scss";
import Popover from "../Common/Popover/Popover";

class MovieCard extends React.Component {

    state = {
        isPopoverOpen: false
    }

    onSelectedMovieOptions = () => {
        this.toggleOpenMovieOptions();
        this.props.setSelectedMovie(this.props.movie.id);
    }

    toggleOpenMovieOptions = () => {
        this.setState((prevState) => ({ isPopoverOpen: !prevState.isPopoverOpen }))
    }

    onDeleteMovie = () => {
        this.onSelectedMovieOptions();
        this.props.toggleDeleteMovieModal();
    }

    onEditMovie = () => {
        this.onSelectedMovieOptions();
        this.props.toggleEditMovieModal();
    }

    render() {
        const { id, title, description, img, year } = this.props.movie;

        return (
            <div className="movie-card">
                <div className="movie-options-wrapper">
                    <span onClick={this.onSelectedMovieOptions} className="movie-options"><i className="fa fa-ellipsis-v"></i></span>
                    <Popover
                        toggleOpenMovieOptions={this.toggleOpenMovieOptions}
                        isPopoverOpen={this.state.isPopoverOpen}
                        onDeleteMovie={this.onDeleteMovie}
                        onEditMovie={this.onEditMovie}
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
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    }).isRequired
}

export default MovieCard;
