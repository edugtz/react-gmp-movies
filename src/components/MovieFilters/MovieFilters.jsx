import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSortByData, getMoviesData } from '../../redux/actions/movieActions';

import './MovieFilters.scss';

const MovieFilters = props => {
    // let sortBy = React.useRef('');

    // React.useEffect(() => {
    //     sortBy.current = props.sortBy;
    // })

    // React.useEffect(() => {
    //     if (props.sortBy) {
    //         sortBy.current = props.sortBy;
    //     }
    // }, [props.sortBy]);

    const onFilterChange = (e) => {
        const updatedSortBy = e.target.value;
        props.setSortByData(updatedSortBy)
        // console.log('Sort by: ', sortBy.current);
        // props.getMoviesData(props.sortBy)
        //     .then(() => {
        //     })
        //     .catch(err => {
        //         console.log(err.message);
        //     });
    }

    return (
        <div className="movie-filters">
            <div className="left-section">
                <p>ALL</p>
                <p>DOCUMENTARY</p>
                <p>COMEDY</p>
                <p>HORROR</p>
                <p>CRIME</p>
            </div>
            <div className="right-section">
                <div>
                    <p>SORT BY</p>
                </div>
                <div>
                    <select id="sortMovieBy" name="sortBy" onChange={onFilterChange}>
                        <option value="release_date">RELEASE DATE</option>
                        <option value="vote_average">RATING</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sortBy: state.movies.sortBy
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setSortByData, getMoviesData }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieFilters);
