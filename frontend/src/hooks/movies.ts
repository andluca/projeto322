import { useMutation, useQuery } from "react-query";
import { getMovies, getReview, postReview } from "../services/movies";

export const useGetMovies = () => useQuery({
  queryKey: 'get-movies',
  queryFn: getMovies,
})

export const useGetReviews = (id: string) => {
  const endPoint = async () =>{
    const response = await getReview(id)
    return response
  }

  const { data } = useQuery({
    queryKey: ['get-reviews', id],
    queryFn: endPoint,
  })

  return {data}
 
}
export const usePostReview = () => {
  const { mutate } = useMutation({mutationFn: mutateReview})

  async function mutateReview(data: {movieId: string, nota: number}) {
    postReview({idReviewable: data.movieId, rating: data.nota})
  }

  return {mutate}
}

