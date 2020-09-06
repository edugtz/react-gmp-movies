import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movies from "../Movies/Movies";
import movieList from "../../mocks/movieMockData";

import "./App.scss";
import MovieFilters from "../../components/MovieFilters/MovieFilters";

const App = () => {
    const [isAddMovieModalOpen, setAddMovieModal] = React.useState(false);
    const [isDeleteModalOpen, setDeleteMovieModal] = React.useState(false);
    const [isEditModalOpen, setEditMovieModal] = React.useState(false);

    const toggleAddMovieModal = () => {
        setAddMovieModal(prevState => !prevState)
    }

    const toggleDeleteMovieModal = () => {
        setDeleteMovieModal(prevState => !prevState)
    }

    const toggleEditMovieModal = () => {
        setEditMovieModal(prevState => !prevState)
    }

    const [selectedMovieId, setSelectedMovie] = React.useState(-1);

    const updateSelectedMovie = (movieId) => {
        console.log('Movie id: ', movieId);
        const selectedMovieIndex = movieList.findIndex(movie => movie.id === movieId);

        setSelectedMovie(selectedMovieIndex);
    }

    return (
        <div id="app">
            <Header
                toggleAddMovieModal={toggleAddMovieModal}
                selectedMovieId={selectedMovieId}
                selectedMovie={movieList[selectedMovieId]}
                updateSelectedMovie={updateSelectedMovie}
            />
            <div className="main-content">
                <div className="container">
                    <MovieFilters />
                    <div className="movie-results-container">
                        <span className="movie-results"><b>6</b> movies found</span>
                    </div>
                    <Movies
                        isAddMovieModalOpen={isAddMovieModalOpen}
                        toggleAddMovieModal={toggleAddMovieModal}
                        isDeleteModalOpen={isDeleteModalOpen}
                        toggleDeleteMovieModal={toggleDeleteMovieModal}
                        isEditModalOpen={isEditModalOpen}
                        toggleEditMovieModal={toggleEditMovieModal}
                        updateSelectedMovie={updateSelectedMovie}
                        selectedMovieId={selectedMovieId}
                        movies={movieList}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
