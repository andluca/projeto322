import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";

interface Props {
	item: Assessable;
}

const Card: React.FC<Props> = ({ item }) => {
	const navigate = useNavigate();

	return (
		<Styled.Container>
			<p>{item.name}</p>
			<div>
				<p>{item.synopsis}</p>
			</div>
			<button
				onClick={() =>
					navigate({
						pathname: "/movie/:id".replace(":id", item.id),
					})
				}
			>
				Detalhes
			</button>
		</Styled.Container>
	);
};

export default Card;
