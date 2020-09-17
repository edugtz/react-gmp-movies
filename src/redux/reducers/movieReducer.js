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
                ...state
            }
        default:
            return state;
    }
}