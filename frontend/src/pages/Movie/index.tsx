import { useNavigate, useParams } from "react-router-dom";

import * as Styled from "./styles";
import { useGetMovies } from "../../hooks/movies";

const formatDate = (date?: string) => {
	const args = date?.split("-");
	return args?.[2] + "/" + args?.[1] + "/" + args?.[0];
};

const MoviePage: React.FC = () => {
	const id = useParams().id;
	const navigate = useNavigate();
	const { data: movies } = useGetMovies();

	const movie = movies?.find((m) => m.id === id);

	if (!movie) {
		navigate("/");
	}

	return (
		<Styled.Container>
			<h1>{movie?.title}</h1>
			<p>Gênero: {movie?.genre}</p>
			<p>{movie?.duration} minutos</p>
			<p>Nota {movie?.rating}</p>
			<p>Lançado em {formatDate(movie?.releaseDate)}</p>

			<Styled.Reviews>
				<h1>Availiações</h1>
			</Styled.Reviews>
		</Styled.Container>
	);
};

export default MoviePage;
