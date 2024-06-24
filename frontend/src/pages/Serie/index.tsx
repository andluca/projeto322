import { useNavigate, useParams } from "react-router-dom";
import { series } from "../../mock";

import * as Styled from "./styles";

const formatDate = (date?: string) => {
	const args = date?.split("-");
	return args?.[2] + "/" + args?.[1] + "/" + args?.[0];
};

const SeriePage: React.FC = () => {
	const id = useParams().id;
	const navigate = useNavigate();

	const serie = series.find((m) => m.id === id);

	if (!serie) {
		navigate("/");
	}

	return (
		<Styled.Container>
			<h1>{serie?.title}</h1>
			<p>Gênero: {serie?.genre}</p>
			<p>
				{serie?.seasons} temporada{serie?.seasons && serie?.seasons > 1 && "s"}
			</p>
			<p>{serie?.episodes} episódio{serie?.episodes && serie?.episodes > 1 && "s"}</p>
			<p>Nota {serie?.rating}</p>
			<p>Lançado em {formatDate(serie?.releaseDate)}</p>

			<Styled.Reviews>
				<h1>Availiações</h1>
			</Styled.Reviews>
		</Styled.Container>
	);
};

export default SeriePage;
