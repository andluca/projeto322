import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import * as Styled from "./styles";
import { useGetMovies } from "../../hooks/movies";


const Home: React.FC = () => {
	const navigate = useNavigate();

	const { data: movies } = useGetMovies();

	return (
		<Styled.Container>
			<p>Filmes</p>
			<Styled.List>
				{movies?.map((movie) => (
					<Card
						key={movie.title}
						item={movie}
						onClick={() => navigate("/movie/:id".replace(":id", movie.id))}
					/>
				))}
			</Styled.List>
			{/* <p>Séries</p>
			<Styled.List>
				{series.map((serie) => (
					<Card
						key={serie.name}
						item={serie}
						onClick={() => navigate("/serie/:id".replace(":id", serie.id))}
					/>
				))}
			</Styled.List> */}
		</Styled.Container>
	);
};

export default Home;
