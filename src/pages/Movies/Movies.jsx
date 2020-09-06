import React from "react";
import PropTypes from "prop-types"

import MovieCard from "../../components/MovieCard/MovieCard";
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";
import DeleteMovieModal from "../../components/DeleteMovieModal/DeleteMovieModal";

import "./Movies.scss";
import EditMovieModal from "../../components/EditMovieModal/EditMovieModal";

const movies = [
    {
        id: 1,
        title: "Pulp Fiction",
        img: "../../../public/images/pulp-fiction.jpg",
        description: "Action & Adventure",
        genre: "action",
        year: "2004"
    },
    {
        id: 2,
        title: "Bohemian Rhapsody",
        img: "../../../public//images/bohemian-rhapsody.jpg",
        description: "Drama, Biography, Music",
        genre: "drama",
        year: "2018"
    },
    {
        id: 3,
        title: "Kill Bill: Vol 2",
        img: "../../../public//images/kill-bill2.jpg",
        description: "Oscar winning movie",
        genre: "action",
        year: "2004"
    },
    {
        id: 4,
        title: "Avengers: Infinity War",
        img: "../../../public//images/avengers-infinity.jpg",
        description: "Action & Adventure",
        genre: "action",
        year: "2018"
    },
    {
        id: 5,
        title: "Inception",
        img: "../../../public//images/inception.jpg",
        description: "Action & Adventure",
        genre: "thriller",
        year: "2010"
    },
    {
        id: 6,
        title: "Reservoir dogs",
        img: "../../../public//images/reservoir-dogs.jpg",
        description: "Oscar winning movie",
        genre: "crime",
        year: "1992"
    }
];

const Movies = props => {
    const [selectedMovie, setSelectedMovie] = React.useState(-1);

    const updateSelectedMovie = (movieId) => {
        const selectedMovie = movies.findIndex(movie => movie.id === movieId);

        setSelectedMovie(selectedMovie);
    }

    return (
        <div className="movies">
            {selectedMovie !== -1 && (
                <>
                    <DeleteMovieModal
                        movie={movies[selectedMovie]}
                        isModalOpen={props.isDeleteModalOpen}
                        toggleModalOpen={props.toggleDeleteMovieModal}
                    />
                    <EditMovieModal
                        movie={movies[selectedMovie]}
                        isModalOpen={props.isEditModalOpen}
                        toggleModalOpen={props.toggleEditMovieModal}
                    />
                </>
            )}
            <AddMovieModal
                isModalOpen={props.isAddMovieModalOpen}
                toggleModalOpen={props.toggleAddMovieModal}
            />
            {movies.length &&
                movies.map((movie, index) => (
                    <MovieCard
                        key={`${movie.title}${index}`}
                        movie={movie}
                        setSelectedMovie={updateSelectedMovie}
                        toggleDeleteMovieModal={props.toggleDeleteMovieModal}
                        toggleEditMovieModal={props.toggleEditMovieModal}
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
    isEditModalOpen: PropTypes.bool.isRequired
}

export default Movies;
