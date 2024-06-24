import { useNavigate, useParams } from "react-router-dom";

import * as Styled from "./styles";
import { useGetMovies } from "../../hooks/movies";
import { genres } from "../../hooks/translation";

const formatDate = (date?: string) => {
	const args = date?.split("-");
	return args?.reverse().join("/");
};

const MoviePage: React.FC = () => {
	const id = useParams().id;
	const navigate = useNavigate();
	const { data: movies } = useGetMovies();

	const movie = movies?.find((m) => m.id === id);

	if (!movie) {
		navigate("/");
		return;
	}

	return (
		<Styled.Container>
			<div className="main">
				<div className="picture">
					<figure>
						<img src="https://uauposters.com.br/media/catalog/product/2/5/258820220222-uau-posters-the-batman-filmes-1.jpg"/>
					</figure>
				</div>
				<div className="column">
					<h1>{movie?.title}</h1>
					<p>Gênero: {movie?.genre}</p>
					<p>{movie?.duration} minutos</p>
					<p>Nota {movie?.rating}</p>
					<p>Lançado em {formatDate(movie?.releaseDate)}</p>
				</div>
			</div>
			<Styled.Reviews>
				<h1>Avaliações</h1>
			</Styled.Reviews>
		</Styled.Container>
	);
};

export default MoviePage;
