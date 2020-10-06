import React from 'react'
import PropTypes from 'prop-types'
import * as moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSelectedMovieData } from '../../redux/actions/movieActions'

import './MovieCard.scss'
import Popover from '../Common/Popover/Popover'

const MovieCard = (props) => {
    const [isPopoverOpen, setPopoverOpen] = React.useState(false)
    const { title, genres, poster_path, release_date } = props.movie
    const movieYear = moment(release_date).format('Y')
    const genresToBeDisplayed = genres.join(', ')

    const toggleOpenMovieOptions = () => {
        setPopoverOpen((prevState) => !prevState)
    }

    const onDeleteMovie = () => {
        toggleOpenMovieOptions()
        props.setSelectedMovieData(props.movie)
        props.toggleDeleteMovieModal()
    }

    const onEditMovie = () => {
        toggleOpenMovieOptions()
        props.setSelectedMovieData(props.movie)
        props.toggleEditMovieModal()
    }

    const onMovieClick = () => {
        props.setSelectedMovieData(props.movie)
    }

    return (
        <div className="movie-card" onClick={onMovieClick}>
            <div className="movie-options-wrapper">
                <span
                    onClick={toggleOpenMovieOptions}
                    className="movie-options"
                >
                    <i className="fa fa-ellipsis-v"></i>
                </span>
                <Popover
                    toggleOpenMovieOptions={toggleOpenMovieOptions}
                    isPopoverOpen={isPopoverOpen}
                    onDeleteMovie={onDeleteMovie}
                    onEditMovie={onEditMovie}
                />
            </div>
            <div className="movie-image">
                <img src={poster_path} alt={title} />
            </div>
            <div className="movie-info">
                <div className="left-section">
                    <p className="movie-title">{title}</p>
                    <p className="movie-genre">{genresToBeDisplayed}</p>
                </div>
                <div className="right-section">
                    <span className="movie-year">{movieYear}</span>
                </div>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string.isRequired,
    }).isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setSelectedMovieData }, dispatch)
}

export default connect(null, mapDispatchToProps)(MovieCard)
