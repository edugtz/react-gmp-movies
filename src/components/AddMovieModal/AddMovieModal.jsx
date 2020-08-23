import React from 'react';

import Modal from '../Common/Modal';

import './AddMovieModal.scss';

const AddModal = props => {
    return (
        <Modal {...props}>
            <div className="add-movie-container">
                <div className="modal-header">
                    <h2 className="modal-title">ADD MOVIE</h2>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="movie-title">TITLE</label>
                        <input id="movie-title" placeholder="Movie Title" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="release-date">RELEASE DATE</label>
                        <div className="release-date-wrapper">
                            <input id="release-date" placeholder="Select Date" type="text" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-url">MOVIE URL</label>
                        <input id="movie-url" placeholder="Movie URL here" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-genre">GENRE</label>
                        <div className="movie-genre-wrapper">
                            <select id="movie-genre" name="movie-overview">
                                <option value="drama">Drama</option>
                                <option value="comedy">Comedy</option>
                                <option value="horror">Horror</option>
                                <option value="action">Action</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-overview">OVERVIEW</label>
                        <input id="movie-overview" placeholder="Overview here" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-runtime">RUNTIME</label>
                        <input id="movie-runtime" placeholder="Runtime here" type="text" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="reset-button">RESET</button>
                    <button className="submit-button">SUBMIT</button>
                </div>
            </div>
        </Modal>
    );
}

export default AddModal;