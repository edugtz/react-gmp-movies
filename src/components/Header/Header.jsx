import React from "react";
import PropTypes from "prop-types"

import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";
import MovieDetails from "../MovieDetails/MovieDetails";

const Header = props => {
    const { selectedMovie } = props;

    return (
        <header className="header">
            <div className="overlay"></div>
            <div className="container">
                <div className="top-section">
                    <span className="app-title"><b>netflix</b>roulette</span>
                    <div className="search-icon-wrapper">
                        {selectedMovie && Object.keys(selectedMovie).length !== 0 ? (
                            <span onClick={() => props.updateSelectedMovie(-1)} className="search-toggle-icon">
                                <i className="fa fa-search"></i>
                            </span>
                        ) : (
                                <button onClick={props.toggleAddMovieModal} className="add-movie">+ ADD MOVIE</button>
                            )}
                    </div>
                </div>
                <div className="main-section">
                    {selectedMovie && Object.keys(selectedMovie).length !== 0 ? (
                        <MovieDetails movie={selectedMovie} />
                    ) : (
                            <>
                                <h2>FIND YOUR MOVIE</h2>
                                <div className="search-section">
                                    <SearchBar />
                                    <button className="search-movies-button">SEARCH</button>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    toggleAddMovieModal: PropTypes.func.isRequired
}

export default Header;
