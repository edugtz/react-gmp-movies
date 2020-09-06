import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movies from "../Movies/Movies";

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

    return (
        <div id="app">
            <Header
                toggleAddMovieModal={toggleAddMovieModal}
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
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
