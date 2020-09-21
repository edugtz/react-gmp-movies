import React from "react";
import PropTypes from "prop-types"
import { connect } from 'react-redux';

import MovieCard from "../../components/MovieCard/MovieCard";
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal";
import EditMovieModal from "../../components/EditMovieModal/EditMovieModal";

import "./Movies.scss";

const Movies = props => {
    const { movies, selectedMovie, isAddMovieModalOpen, isDeleteModalOpen, isEditModalOpen, toggleAddMovieModal,
        toggleDeleteMovieModal, toggleEditMovieModal, updateSelectedMovie } = props;

    return (
        <div className="movies">
            {selectedMovie && Object.keys(selectedMovie).length !== 0 && (
                <>
                    <DeleteMovieModal
                        movie={selectedMovie}
                        isModalOpen={isDeleteModalOpen}
                        toggleModalOpen={toggleDeleteMovieModal}
                    />
                    <EditMovieModal
                        movie={selectedMovie}
                        isModalOpen={isEditModalOpen}
                        toggleModalOpen={toggleEditMovieModal}
                    />
                </>
            )}
            <AddMovieModal
                isModalOpen={isAddMovieModalOpen}
                toggleModalOpen={toggleAddMovieModal}
            />
            {movies.length > 0 &&
                movies.map((movie, index) => (
                    <MovieCard
                        key={`${movie.title}${index}`}
                        movie={movie}
                        updateSelectedMovie={updateSelectedMovie}
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
    selectedMovie: PropTypes.object,
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        poster_path: PropTypes.string,
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
