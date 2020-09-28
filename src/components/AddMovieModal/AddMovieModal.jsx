import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, Formik, Field } from 'formik'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createMovieData } from '../../redux/actions/movieActions'

import Modal from '../Common/Modal/Modal'
import MovieSchema from '../../validationSchemas/movieSchema'

import './AddMovieModal.scss'

const AddMovieForm = ({ handleSubmit, resetForm }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="movie-title">TITLE</label>
                <Field
                    id="movie-title"
                    name="title"
                    placeholder="Movie Title"
                    type="text"
                />
                <ErrorMessage name="title">
                    {(msg) => <div className="field-error">{msg}</div>}
                </ErrorMessage>
            </div>
            <div className="form-group">
                <label htmlFor="release-date">RELEASE DATE</label>
                <div className="release-date-wrapper">
                    <Field
                        id="release-date"
                        name="releaseDate"
                        placeholder="Select Date"
                        type="text"
                    />
                    <ErrorMessage name="releaseDate">
                        {(msg) => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="movie-url">MOVIE URL</label>
                <Field
                    id="movie-url"
                    name="movieUrl"
                    placeholder="Movie URL here"
                    type="text"
                />
                <ErrorMessage name="movieUrl">
                    {(msg) => <div className="field-error">{msg}</div>}
                </ErrorMessage>
            </div>
            <div className="form-group">
                <label htmlFor="movie-genre">GENRE</label>
                <Field as="select" name="genres" id="movie-genre">
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Horror">Horror</option>
                    <option value="Action">Action</option>
                    <option value="Crime">Crime</option>
                    <option value="Thriller">Thriller</option>
                </Field>
                <ErrorMessage name="genres">
                    {(msg) => <div className="field-error">{msg}</div>}
                </ErrorMessage>
            </div>
            <div className="form-group">
                <label htmlFor="movie-overview">OVERVIEW</label>
                <Field
                    id="movie-overview"
                    name="overview"
                    placeholder="Overview here"
                    type="text"
                />
                <ErrorMessage name="overview">
                    {(msg) => <div className="field-error">{msg}</div>}
                </ErrorMessage>
            </div>
            <div className="form-group">
                <label htmlFor="movie-runtime">RUNTIME</label>
                <Field
                    id="movie-runtime"
                    name="runtime"
                    placeholder="Runtime here"
                    type="text"
                />
                <ErrorMessage name="runtime">
                    {(msg) => <div className="field-error">{msg}</div>}
                </ErrorMessage>
            </div>
            <div className="form-footer">
                <button
                    className="reset-button"
                    type="button"
                    onClick={resetForm}
                >
                    RESET
                </button>
                <button className="submit-button" type="submit">
                    SUBMIT
                </button>
            </div>
        </form>
    )
}

const AddModal = (props) => {
    return (
        <Modal {...props}>
            <div className="add-movie-container">
                <div className="modal-header">
                    <h2 className="modal-title">ADD MOVIE</h2>
                </div>
                <div className="modal-body">
                    <Formik
                        initialValues={{
                            title: '',
                            releaseDate: '',
                            movieUrl: '',
                            overview: '',
                            genres: '',
                            runtime: '',
                        }}
                        validationSchema={MovieSchema}
                        onSubmit={async (values, actions) => {
                            const {
                                title,
                                releaseDate,
                                movieUrl,
                                overview,
                                genres,
                                runtime,
                            } = values

                            const payload = {
                                title,
                                release_date: releaseDate,
                                poster_path: movieUrl,
                                overview,
                                genres: [genres],
                                runtime: Number(runtime),
                            }

                            props
                                .createMovieData(payload)
                                .then(() => {
                                    actions.resetForm()
                                    props.toggleModalOpen()
                                })
                                .catch((err) => console.log(err))
                        }}
                    >
                        {AddMovieForm}
                    </Formik>
                </div>
            </div>
        </Modal>
    )
}

AddModal.propTypes = {
    toggleModalOpen: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createMovieData }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddModal)
