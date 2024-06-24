import * as Styled from './styles';

const Footer: React.FC = () => {
	return (
		<Styled.Container>
				<h1>Sobre nós</h1>
				<p>
					Esse projeto é de cunho unicamente educacional, sem fins lucrativos. O nome é apenas uma paródia do site Rotten Tomatoes.
				</p>
				<div>
					<p>Desenvolvido por:</p>
					<p>André Lucas</p>
					<p>Lucas Peixoto</p>
					<p>Felipe Pires</p>
					<p>Artur Dias</p>
				</div>
		</Styled.Container>
	);
};

export default Footer;
