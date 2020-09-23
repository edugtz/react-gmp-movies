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

    const toggleAddMovieModal = () => {
        setAddMovieModal(prevState => !prevState)
    }

    const toggleDeleteMovieModal = () => {
        setDeleteMovieModal(prevState => !prevState)
    }

    const toggleEditMovieModal = () => {
        setEditMovieModal(prevState => !prevState)
    }

    const [selectedMovie, setSelectedMovie] = React.useState({});

    const updateSelectedMovie = (movieData) => {
        const foundMovie = movies.find(movie => movie.id === movieData.id);

        setSelectedMovie(foundMovie);
    }

    React.useEffect(() => {
        const options = {
            sortBy: props.sortBy
        }

        props.getMoviesData(options)
            .then(() => {
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [])

    return (
        <div id="app">
            <Header
                toggleAddMovieModal={toggleAddMovieModal}
                selectedMovie={selectedMovie}
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
                        selectedMovie={selectedMovie}
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
    const { movies, sortBy } = state.movies;

    return { movies, sortBy };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
