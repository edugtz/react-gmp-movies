import React from "react";
import PropTypes from "prop-types"

import MovieCard from "../../components/MovieCard/MovieCard";
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal";

import "./Movies.scss";
import EditMovieModal from "../../components/EditMovieModal/EditMovieModal";

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
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    })).isRequired
}

export default Movies;
