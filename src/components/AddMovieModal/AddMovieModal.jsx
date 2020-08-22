import React from 'react';

import './AddMovieModal.scss';

const AddModal = props => {
    return (
        <div className="add-movie-modal">
            <h3>ADD MOVIE</h3>
            <>
                <label htmlFor="movie-title">TITLE</label>
                <input id="movie-title" placeholder="Movie Title" type="text" />
                <label htmlFor="release-date">RELEASE DATE</label>
                <input id="release-date" placeholder="Select Date" type="text" />
                <label htmlFor="movie-url">MOVIE URL</label>
                <input id="movie-url" placeholder="Movie URL here" type="text" />
                <label htmlFor="movie-genre"></label>
                <select id="movie-genre" name="movie-overview">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <label htmlFor="movie-overview"></label>
                <input id="movie-overview" placeholder="Overview here" type="text" />
                <label htmlFor="movie-runtime"></label>
                <input id="movie-runtime" placeholder="Runtime here" type="text" />
            </>
        </div>
    );
}

export default AddModal;