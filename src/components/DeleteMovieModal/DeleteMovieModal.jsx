import React from 'react';
import PropTypes from "prop-types"

import Modal from '../Common/Modal/Modal';

import './DeleteMovieModal.scss';

const DeleteMovieModal = props => {
    return (
        <Modal {...props}>
            <div className="delete-movie-container">
                <div className="modal-header">
                    <h2 className="modal-title">DELETE MOVIE</h2>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this movie?</p>
                </div>
                <div className="modal-footer">
                    <button className="submit-button">CONFIRM</button>
                </div>
            </div>
        </Modal>
    );
}

DeleteMovieModal.propTypes = {
    toggleModalOpen: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired
}

export default DeleteMovieModal;