import { getMovies, updateMovie, createMovie } from '../../api/api';

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