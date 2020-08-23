import React from 'react';
import PropTypes from "prop-types"

import Modal from '../Common/Modal/Modal';

import './EditMovieModal.scss';

const EditMovieModal = props => {
    const { id, genre, title, year, description } = props.movie;
    return (
        <Modal {...props}>
            <div className="edit-movie-container">
                <div className="modal-header">
                    <h2 className="modal-title">EDIT MOVIE</h2>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="movie-title">MOVIE ID</label>
                        <input id="movie-id" placeholder="Movie id" type="text" value={id} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-title">TITLE</label>
                        <input id="movie-title" placeholder="Movie Title" type="text" value={title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="release-date">RELEASE DATE</label>
                        <div className="release-date-wrapper">
                            <input id="release-date" placeholder="Select Date" type="text" value={year} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-url">MOVIE URL</label>
                        <input id="movie-url" placeholder="Movie URL here" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-genre">GENRE</label>
                        <div className="movie-genre-wrapper">
                            <select id="movie-genre" name="movie-overview" value={genre}>
                                <option value="drama">Drama</option>
                                <option value="comedy">Comedy</option>
                                <option value="horror">Horror</option>
                                <option value="action">Action</option>
                                <option value="crime">Crime</option>
                                <option value="thriller">Thriller</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-overview">OVERVIEW</label>
                        <input id="movie-overview" placeholder="Overview here" type="text" value={description} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-runtime">RUNTIME</label>
                        <input id="movie-runtime" placeholder="Runtime here" type="text" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="reset-button">RESET</button>
                    <button className="submit-button">SAVE</button>
                </div>
            </div>
        </Modal>
    );
}

EditMovieModal.propTypes = {
    toggleModalOpen: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired
}

export default EditMovieModal;