const initialState = {
    movies: []
};

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.movies
            };
        case 'UPDATE_MOVIE':
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id === action.movie.id) {
                        return action.movie;
                    }

                    return movie;
                })
            }
        case 'CREATE_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    action.movie
                ]
            }
        default:
            return state;
    }
}