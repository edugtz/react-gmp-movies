import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MovieList from '../MovieList/MovieList'
import NotFound404 from '../NotFound404/NotFound404'
import MovieFilters from '../../components/MovieFilters/MovieFilters'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMoviesData } from '../../redux/actions/movieActions'

import './Routes.scss'

const Routes = (props) => {
    const { movies } = props

    const [isAddMovieModalOpen, setAddMovieModal] = React.useState(false)
    const [isDeleteModalOpen, setDeleteMovieModal] = React.useState(false)
    const [isEditModalOpen, setEditMovieModal] = React.useState(false)

    const toggleAddMovieModal = () => {
        setAddMovieModal((prevState) => !prevState)
    }

    const toggleDeleteMovieModal = () => {
        setDeleteMovieModal((prevState) => !prevState)
    }

    const toggleEditMovieModal = () => {
        setEditMovieModal((prevState) => !prevState)
    }

    const [selectedMovie, setSelectedMovie] = React.useState({})

    const updateSelectedMovie = (movieData) => {
        const foundMovie = movies.find((movie) => movie.id === movieData.id)

        setSelectedMovie(foundMovie)
    }

    const MoviesWrapper = (props) => {
        return (
            <MovieList
                isAddMovieModalOpen={isAddMovieModalOpen}
                toggleAddMovieModal={toggleAddMovieModal}
                isDeleteModalOpen={isDeleteModalOpen}
                toggleDeleteMovieModal={toggleDeleteMovieModal}
                isEditModalOpen={isEditModalOpen}
                toggleEditMovieModal={toggleEditMovieModal}
                updateSelectedMovie={updateSelectedMovie}
                selectedMovie={selectedMovie}
                {...props}
            />
        )
    }

    return (
        <div id="app">
            <Header
                toggleAddMovieModal={toggleAddMovieModal}
                updateSelectedMovie={updateSelectedMovie}
            />
            <div className="main-content">
                <div className="container">
                    <MovieFilters />
                    <Switch>
                        <Route exact={true} path="/">
                            <MoviesWrapper movies={movies} />
                        </Route>
                        <Route path="/search/">
                            <MoviesWrapper movies={movies} />
                        </Route>
                        <Route component={NotFound404} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMoviesData }, dispatch)
}

const mapStateToProps = (state) => {
    const { movies, sortBy } = state.movies

    return { movies, sortBy }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
