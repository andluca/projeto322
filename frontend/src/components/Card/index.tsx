import * as Styled from "./styles";

interface Props {
	item: Assessable;
	onClick: () => void;
}

const Card: React.FC<Props> = ({ item, onClick }) => {
	return (
		<Styled.Container posterUrl={item.posterUrl}>
				<p>{item.title}</p>
				<div>
					<p>{item.synopsys}</p>	
					<button onClick={onClick}>Detalhes</button>
				</div>
		</Styled.Container>
	);
};

export default Card;
