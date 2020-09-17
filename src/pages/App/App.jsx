import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movies from "../Movies/Movies";
import MovieFilters from "../../components/MovieFilters/MovieFilters";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMoviesData } from '../../redux/actions/movieActions';

import "./App.scss";

const App = props => {
    const { movies } = props;

    const [isAddMovieModalOpen, setAddMovieModal] = React.useState(false);
    const [isDeleteModalOpen, setDeleteMovieModal] = React.useState(false);
    const [isEditModalOpen, setEditMovieModal] = React.useState(false);
    const [fetchedMovies, setFetchedMovies] = React.useState(false);

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
        const selectedMovieIndex = movieList.findIndex(movie => movie.id === movieId);

        setSelectedMovie(selectedMovieIndex);
    }

    React.useEffect(() => {
        props.getMoviesData()
            .then(() => {
                setFetchedMovies(true);
                if (fetchedMovies) console.log(props.movies);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [])

    return (
        <div id="app">
            <Header
                toggleAddMovieModal={toggleAddMovieModal}
                selectedMovieId={selectedMovieId}
                selectedMovie={movies[selectedMovieId]}
                updateSelectedMovie={updateSelectedMovie}
            />
            <div className="main-content">
                <div className="container">
                    <MovieFilters />
                    <div className="movie-results-container">
                        <span className="movie-results"><b>{movies && movies.length}</b> movies found</span>
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
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMoviesData }, dispatch);
};

const mapStateToProps = (state) => {
    const { movies } = state.movies;

    return {
        movies
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
