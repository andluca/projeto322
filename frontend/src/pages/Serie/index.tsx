import { useNavigate, useParams } from "react-router-dom";
import { series } from "../../mock";

import * as Styled from "./styles";
import { genres } from "../../hooks/translation";

const formatDate = (date?: string) => {
	const args = date?.split("-");
	return args?.reverse().join("/");
};

const SeriePage: React.FC = () => {
	const id = useParams().id;
	const navigate = useNavigate();

	const serie = series.find((m) => m.id === id);

	if (!serie) {
		navigate("/");
		return;
	}

	return (
		<Styled.Container>
			<h1>{serie?.title}</h1>
			<p>Gênero: {genres[serie?.genre as keyof typeof genres]}</p>
			<p>
				{serie?.seasons} temporada{serie?.seasons && serie?.seasons > 1 && "s"}
			</p>
			<p>
				{serie?.episodes} episódio
				{serie?.episodes && serie?.episodes > 1 && "s"}
			</p>
			<p>Nota {serie?.rating}</p>
			<p>Lançado em {formatDate(serie?.releaseDate)}</p>

			<Styled.Reviews>
				<h1>Availiações</h1>
			</Styled.Reviews>
		</Styled.Container>
	);
};

export default SeriePage;
