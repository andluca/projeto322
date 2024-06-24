import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./styles";
import { useGetMovies, useGetReviews, usePostReview } from "../../hooks/movies";
import { useState } from "react";
import Modal from "react-modal";
import {useForm, SubmitHandler} from 'react-hook-form';
import StarRatingComponent from 'react-star-rating-component';

type Inputs = {
	nota: number
  }

const formatDate = (date?: string) => {
	const args = date?.split("-");
	return args?.reverse().join("/");
};

const MoviePage: React.FC = () => {
	const {mutate} = usePostReview();
	const {
		register,
		handleSubmit,
		setValue,
	  } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		mutate({movieId: id!, nota: data.nota})
		handleCloseModal()
	}
	const id = useParams().id;
	const {data: review} = useGetReviews(id!)
	console.log(review)
	const navigate = useNavigate();
	const { data: movies } = useGetMovies();
	const [nota, setNota] = useState(0);

	const movie = movies?.find((m) => m.id === id);

	if (!movie) {
		navigate("/");
		return;
	}

	const handleStarClick = (nextValue: number) => {
		setNota(nextValue);
		setValue("nota", nextValue);
	  };

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleOpenModal = () => {
		setValue("nota", 0)
		setModalIsOpen(true);
	}

	const handleCloseModal = () => {
		setModalIsOpen(false);
	}

	return (
		<>
		<Styled.Container>
			<Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Avaliação Modal"
  				appElement={document.getElementById('root') || undefined}
                overlayClassName={"modal-overlay"}
                className={"modal-content"}
				style={{
					content: {
						maxWidth: '360px',
						minWidth: '360px',
						width: '40%',
						height: '240px',
						background: '#000',
						padding: '18px',
						boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)',
						color: '#fff',
					},
					overlay:{	
						background: 'rgba(0,0,0, 0.7)',
						position: 'fixed',
						top: '0',
						left: '0',
						bottom: '0',
						right: '0',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',	
					}
					}}
            >
                <h1>Avalie o filme</h1>
                <p>
                    Deixe aqui sua avaliação do filme em questão. Escolha uma nota de 0 a 10:
                </p>
				<form style={{display: 'block'}} onSubmit={handleSubmit(onSubmit)}>
					<StarRatingComponent
						name="nota"
						starCount={10} 
						value={nota}
						onStarClick={handleStarClick}
						starColor="#FFD700" 
						emptyStarColor="#333"
					/>
					<input type="hidden" {...register("nota", { required: true })} value={nota} />
					<button style={{display: 'flex', justifyContent: 'flex-start', background: "#000", color: "#fff", border: 'none', padding: '5px', boxShadow: '5px 5px 5px rgba(255, 255, 255, 0.5)', cursor: 'pointer'}} type="submit">Confirmar</button>
				</form>

            </Modal>
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
					<p>Nota: {review?.rating}</p>
					<p>Quantidade de avaliações: {review?.totalRatings}</p>
					<p>Lançado em {formatDate(movie?.releaseDate)}</p>
				</div>
			</div>
			<Styled.Reviews>
				<h1>Avaliações</h1>
				<div onClick={handleOpenModal}>
					<p>
						Avalie o filme
					</p>
				</div>
			</Styled.Reviews>
		</Styled.Container>
		</>
	);
};

export default MoviePage;
