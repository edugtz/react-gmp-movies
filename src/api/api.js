import api from 'axios';

const baseUrl = 'http://localhost:4000';

const ROUTES = {
    movies: 'movies',
};

export const getMovies = () => {
    return api.get(`${baseUrl}/${ROUTES.movies}`, { params: { limit: 4000, offset: 1 } });
};

export const createMovie = (data) => {
    return api.post(`${baseUrl}/${ROUTES.movies}`, data);
};

export const updateMovie = (data) => {
    return api.put(`${baseUrl}/${ROUTES.movies}`, data);
};

export const deleteMovie = (id) => {
    return api.delete(`${baseUrl}/${ROUTES.movies}/${id}`);
};