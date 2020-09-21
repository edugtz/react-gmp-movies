import React from 'react';
import PropTypes from "prop-types"

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMovieData } from '../../redux/actions/movieActions';

import Modal from '../Common/Modal/Modal';

import './AddMovieModal.scss';

const initialState = {
    title: '',
    releaseDate: '',
    movieUrl: '',
    overview: '',
    genres: [],
    runtime: ''
};

const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}

const AddModal = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const { title, releaseDate, movieUrl, overview, genres, runtime } = state;

    const onChange = (e) => {
        let value = e.target.name === 'genres' ? [e.target.value] : e.target.value;

        dispatch({ field: e.target.name, value })
    }

    const onAddMovie = () => {
        const payload = {
            title,
            release_date: releaseDate,
            poster_path: movieUrl,
            overview,
            genres,
            runtime: Number(runtime)
        };

        props.createMovieData(payload)
            .then(() => {
                props.toggleModalOpen()
            })
            .catch(err => console.log(err))
    }

    return (
        <Modal {...props}>
            <div className="add-movie-container">
                <div className="modal-header">
                    <h2 className="modal-title">ADD MOVIE</h2>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="movie-title">TITLE</label>
                        <input id="movie-title" name="title" value={title} placeholder="Movie Title" type="text" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="release-date">RELEASE DATE</label>
                        <div className="release-date-wrapper">
                            <input id="release-date" name="releaseDate" value={releaseDate} placeholder="Select Date" type="text" onChange={onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-url">MOVIE URL</label>
                        <input id="movie-url" name="movieUrl" value={movieUrl} placeholder="Movie URL here" type="text" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-genre">GENRE</label>
                        <div className="movie-genre-wrapper">
                            <select id="movie-genre" name="genres" value={genres[0]} onChange={onChange}>
                                <option value="Drama">Drama</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Horror">Horror</option>
                                <option value="Action">Action</option>
                                <option value="Crime">Crime</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-overview">OVERVIEW</label>
                        <input id="movie-overview" name="overview" value={overview} placeholder="Overview here" type="text" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-runtime">RUNTIME</label>
                        <input id="movie-runtime" name="runtime" value={runtime} placeholder="Runtime here" type="text" onChange={onChange} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="reset-button">RESET</button>
                    <button className="submit-button" onClick={onAddMovie}>SUBMIT</button>
                </div>
            </div>
        </Modal>
    );
}

AddModal.propTypes = {
    toggleModalOpen: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createMovieData }, dispatch);
};

export default connect(
    null,
    mapDispatchToProps
)(AddModal);
