import Card from "../../components/Card";
import { movies, series } from "../../mock";
import * as Styled from "./styles";

const Home: React.FC = () => {
	return (
		<Styled.Container>
			<p>Filmes</p>
			<Styled.List>
				{movies.map((movie) => (
					<Card key={movie.name} item={movie} />
				))}
			</Styled.List>
			<p>Séries</p>
			<Styled.List>
				{series.map((serie) => (
					<Card key={serie.name} item={serie} />
				))}
			</Styled.List>
		</Styled.Container>
	);
};

export default Home;
