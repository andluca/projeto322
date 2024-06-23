import api from "../api";

export const getMovies =() => api.get<Movie[]>('/movies/').then(res => res.data)