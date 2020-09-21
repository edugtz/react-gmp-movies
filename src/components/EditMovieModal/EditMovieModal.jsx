import React from 'react';
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMovieData } from '../../redux/actions/movieActions';

import Modal from '../Common/Modal/Modal';

import './EditMovieModal.scss';

const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}

const EditMovieModal = props => {
    const initialState = {
        id: props.movie.id,
        title: props.movie.title,
        releaseDate: props.movie.release_date,
        movieUrl: props.movie.poster_path,
        overview: props.movie.overview,
        genres: props.movie.genres,
        runtime: props.movie.runtime
    };

    const [state, dispatch] = React.useReducer(reducer, initialState);
    const { id, title, releaseDate, movieUrl, overview, genres, runtime } = state;

    const onChange = (e) => {
        let value = e.target.name === 'genres' ? [e.target.value] : e.target.value;

        dispatch({ field: e.target.name, value })
    }

    const onUpdateMovie = () => {
        const payload = {
            id,
            title,
            release_date: releaseDate,
            poster_path: movieUrl,
            overview,
            genres,
            runtime: Number(runtime)
        };

        props.updateMovieData(payload)
            .then(() => {
                props.toggleModalOpen()
            })
            .catch(err => {
                console.log(err.message);
            });
    }


    return (
        <Modal {...props}>
            <div className="edit-movie-container">
                <div className="modal-header">
                    <h2 className="modal-title">EDIT MOVIE</h2>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="movie-title">MOVIE ID</label>
                        <input readOnly id="movie-id" placeholder="Movie id" type="text" value={id} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-title">TITLE</label>
                        <input id="movie-title" placeholder="Movie Title" name="title" type="text" value={title} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="release-date">RELEASE DATE</label>
                        <div className="release-date-wrapper">
                            <input id="release-date" placeholder="Select Date" name="releaseDate" type="text" value={releaseDate} onChange={onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-url">MOVIE URL</label>
                        <input id="movie-url" placeholder="Movie URL here" name="movieUrl" value={movieUrl} type="text" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-genre">GENRE</label>
                        <div className="movie-genre-wrapper">
                            <select id="movie-genre" name="genres" value={genres[0]} onChange={onChange}>
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
                        <input id="movie-overview" placeholder="Overview here" name="overview" type="text" value={overview} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie-runtime">RUNTIME</label>
                        <input id="movie-runtime" placeholder="Runtime here" name="runtime" type="text" value={runtime} onChange={onChange} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="reset-button">RESET</button>
                    <button className="submit-button" onClick={onUpdateMovie}>SAVE</button>
                </div>
            </div>
        </Modal>
    );
}

EditMovieModal.propTypes = {
    toggleModalOpen: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateMovieData }, dispatch);
};

export default connect(
    null,
    mapDispatchToProps
)(EditMovieModal);
