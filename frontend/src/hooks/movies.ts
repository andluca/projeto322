import { useMutation, useQuery } from "react-query";
import { getMovies, getReview, postReview } from "../services/movies";
import { queryClient } from "../providers/query-client";

export const useGetMovies = () => useQuery({
  queryKey: 'get-movies',
  queryFn: getMovies,
})

export const useGetReviews = (id: string) => useQuery({
  queryKey: ['get-reviews', id],
  queryFn: () => getReview(id),
})

export const usePostReview = (id: string) => useMutation({
  mutationFn: ({ movieId, rating }: { movieId: string; rating: number }) => postReview({ idReviewable: movieId, rating }),
  onSuccess:  () => queryClient.refetchQueries({ queryKey: ['get-reviews', id] })
})