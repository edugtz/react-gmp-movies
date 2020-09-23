import { getMovies, updateMovie, createMovie, deleteMovie } from '../../api/api';

const getMoviesAction = movies => ({
    type: 'GET_MOVIES',
    movies
});

const updateMovieAction = movieData => ({
    type: 'UPDATE_MOVIE',
    movie: movieData
});

const createMovieAction = movieData => ({
    type: 'CREATE_MOVIE',
    movie: movieData
});

const deleteMovieAction = movieData => ({
    type: 'DELETE_MOVIE',
    movie: movieData
});

export const setSortBy = (sortBy) => ({
    type: 'SET_SORT_BY',
    sortBy
});

export const getMoviesData = (options) => {
    return dispatch => {
        return getMovies(options)
            .then(response => {
                dispatch(getMoviesAction(response.data.data));

                return response;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const updateMovieData = data => {
    return dispatch => {
        return updateMovie(data)
            .then(response => {
                dispatch(updateMovieAction(response.data));

                return response;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const createMovieData = data => {
    return dispatch => {
        return createMovie(data)
            .then(response => {
                dispatch(createMovieAction(response.data));

                return response;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const deleteMovieData = data => {
    return dispatch => {
        return deleteMovie(data.id)
            .then(response => {
                dispatch(deleteMovieAction(data));

                return response;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const setSortByData = sortBy => {
    return (dispatch, getState) => {
        dispatch(setSortBy(sortBy));
        const updatedState = getState();

        const options = {
            sortBy: updatedState.movies.sortBy
        };

        return getMovies(options)
            .then(response => {
                dispatch(getMoviesAction(response.data.data));

                return response;
            })
            .catch(err => {
                console.log(err);
            });
    }
}