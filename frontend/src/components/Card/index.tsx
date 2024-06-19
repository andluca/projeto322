import * as Styled from "./styles";

interface Props {
	item: Assessable;
	onClick: () => void;
}

const Card: React.FC<Props> = ({ item, onClick }) => {
	return (
		<Styled.Container>
			<p>{item.name}</p>
			<div>
				<p>{item.synopsis}</p>
			</div>
			<button onClick={onClick}>Detalhes</button>
		</Styled.Container>
	);
};

export default Card;
