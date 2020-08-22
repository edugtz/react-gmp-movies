import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movies from "../Movies/Movies";

import "./App.scss";
import MovieFilters from "../../components/MovieFilters/MovieFilters";

class App extends React.Component {
    constructor() {
        this.state = {
            isAddMovieModalOpen: false
        }
    }

    toggleAddMovieModal = () => {
        this.setState((prevState) => ({ isAddMovieModalOpen: !prevState.isAddMovieModalOpen }))
    }

    render() {
        return (
            <div id="app">
                <Header
                    toggleAddMovieModal={this.toggleAddMovieModal}
                />
                <div className="main-content">
                    <div className="container">
                        <MovieFilters />
                        <div className="movie-results-container">
                            <span className="movie-results"><b>6</b> movies found</span>
                        </div>
                        <Movies />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
