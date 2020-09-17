import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import moviesReducer from './redux/reducers/movieReducer';

// Only enable redux dev tools if environment is not production
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
);

const rootReducer = combineReducers({
    movies: moviesReducer
});


const store = createStore(
    rootReducer,
    enhancer
);

export default store;