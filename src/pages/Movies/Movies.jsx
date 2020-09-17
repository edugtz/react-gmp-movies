import React from "react";
import PropTypes from "prop-types"
import { connect } from 'react-redux';

import MovieCard from "../../components/MovieCard/MovieCard";
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal";
import EditMovieModal from "../../components/EditMovieModal/EditMovieModal";

import "./Movies.scss";

const Movies = props => {
    const { movies, selectedMovieId, isAddMovieModalOpen, isDeleteModalOpen, isEditModalOpen, toggleAddMovieModal,
        toggleDeleteMovieModal, toggleEditMovieModal, updateSelectedMovie } = props;

    return (
        <div className="movies">
            {selectedMovieId !== -1 && (
                <>
                    <DeleteMovieModal
                        movie={movies[selectedMovieId]}
                        isModalOpen={isDeleteModalOpen}
                        toggleModalOpen={toggleDeleteMovieModal}
                    />
                    <EditMovieModal
                        movie={movies[selectedMovieId]}
                        isModalOpen={isEditModalOpen}
                        toggleModalOpen={toggleEditMovieModal}
                    />
                </>
            )}
            <AddMovieModal
                isModalOpen={isAddMovieModalOpen}
                toggleModalOpen={toggleAddMovieModal}
            />
            {movies.length &&
                movies.map((movie, index) => (
                    <MovieCard
                        key={`${movie.title}${index}`}
                        movie={movie}
                        setSelectedMovie={updateSelectedMovie}
                        toggleDeleteMovieModal={toggleDeleteMovieModal}
                        toggleEditMovieModal={toggleEditMovieModal}
                    />
                ))}
        </div>
    );
}

Movies.propTypes = {
    toggleAddMovieModal: PropTypes.func.isRequired,
    isAddMovieModalOpen: PropTypes.bool.isRequired,
    toggleDeleteMovieModal: PropTypes.func.isRequired,
    isDeleteModalOpen: PropTypes.bool.isRequired,
    toggleEditMovieModal: PropTypes.func.isRequired,
    isEditModalOpen: PropTypes.bool.isRequired,
    updateSelectedMovie: PropTypes.func.isRequired,
    selectedMovieId: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
    })).isRequired
}


const mapStateToProps = (state) => {
    const { movies, totalMovies } = state.movies;

    return {
        movies,
        totalMovies
    };
};

export default connect(
    mapStateToProps,
    null
)(Movies);
