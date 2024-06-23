import { useQuery } from "react-query";
import { getMovies } from "../services/movies";

export const useGetMovies = () => useQuery({
  queryKey: 'get-movies',
  queryFn: getMovies,
})