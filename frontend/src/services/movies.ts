import api from "../api";

export const getMovies = () => api.get<Movie[]>('/movies/').then(res => res.data)
export const getReview = (id: string) => api.get<Rating>(`/reviews/${id}`).then(res => res.data)
export const postReview = (review: Review) => api.post('/reviews/', review).then(res => res.data)