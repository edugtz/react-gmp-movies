import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    setSearchData,
    setInitialMoviesData,
    setSelectedMovieData,
} from '../../redux/actions/movieActions'
import { useHistory, useLocation } from 'react-router'

import './Header.scss'
import SearchBar from '../SearchBar/SearchBar'
import MovieDetails from '../MovieDetails/MovieDetails'

const Header = (props) => {
    const [searchValue, setSearchValue] = React.useState('')
    const history = useHistory()
    const searchCallbackFunction = React.useCallback(() => {
        props.setSearchData(searchValue)
        history.push({ pathname: '/search', search: `?search=${searchValue}` })
    }, [searchValue])

    const location = useLocation()

    React.useEffect(() => {
        if (location.search.indexOf('search') > 0) {
            const urlSearch = location.search.split('=')[1]
            const searchValue = decodeURI(urlSearch)
            props.setSearchData(searchValue)
            setSearchValue(searchValue)
        }
    }, [location])

    const onHomeClick = () => {
        history.push('/')
        props.setInitialMoviesData()
        props.setSelectedMovieData({})
        setSearchValue('')
    }

    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            searchCallbackFunction()
        }
    }

    return (
        <header className="header">
            <div className="overlay"></div>
            <div className="container">
                <div className="top-section">
                    <span onClick={onHomeClick} className="app-title">
                        <b>netflix</b>roulette
                    </span>
                    <div className="search-icon-wrapper">
                        {props.selectedMovie &&
                        Object.keys(props.selectedMovie).length !== 0 ? (
                            <span
                                onClick={() => props.setSelectedMovieData({})}
                                className="search-toggle-icon"
                            >
                                <i className="fa fa-search"></i>
                            </span>
                        ) : (
                            <button
                                onClick={props.toggleAddMovieModal}
                                className="add-movie"
                            >
                                + ADD MOVIE
                            </button>
                        )}
                    </div>
                </div>
                <div className="main-section">
                    {props.selectedMovie &&
                    Object.keys(props.selectedMovie).length !== 0 ? (
                        <MovieDetails movie={props.selectedMovie} />
                    ) : (
                        <>
                            <h2>FIND YOUR MOVIE</h2>
                            <div className="search-section">
                                <SearchBar
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue}
                                    handleKeyPress={handleKeyPress}
                                />
                                <button
                                    onClick={searchCallbackFunction}
                                    className="search-movies-button"
                                >
                                    SEARCH
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    toggleAddMovieModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { setSearchData, setInitialMoviesData, setSelectedMovieData },
        dispatch
    )
}

const mapStateToProps = (state) => {
    const { selectedMovie } = state.movies

    return {
        selectedMovie,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
