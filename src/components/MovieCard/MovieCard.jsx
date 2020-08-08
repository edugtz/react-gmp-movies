import React from "react";
import PropTypes from "prop-types"

import "./MovieCard.scss";

const MovieCard = (props) => {
  const { title, description, img, year } = props.movie;
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={img} alt="" />
      </div>
      <div className="movie-info">
        <div className="left-section">
          <p className="movie-title">{title}</p>
          <p className="movie-description">{description}</p>
        </div>
        <div className="right-section">
          <span className="movie-year">{year}</span>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired
}

export default MovieCard;
