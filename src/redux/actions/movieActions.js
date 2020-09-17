import { getMovies } from '../../api/api';

const getMoviesAction = movies => ({
    type: 'GET_MOVIES',
    movies
});

const updateMovieAction = movieId => ({
    type: 'UPDATE_MOVIE',
    movieId
});

export const getMoviesData = () => {
    return dispatch => {
        return getMovies()
            .then(response => {
                dispatch(getMoviesAction(response.data.data));

                return response;
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const updateMovie = id => {
    return dispatch => {
        return updateMovie(id)
            .then(response => {
                dispatch(updateMovieAction(response.data.data));

                return response;
            })
            .catch(err => {
                console.log(err);
            });
    }
}