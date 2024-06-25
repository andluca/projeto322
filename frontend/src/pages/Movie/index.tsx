import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./styles";
import { useGetMovies, useGetReviews, usePostReview } from "../../hooks/movies";
import { useState } from "react";
import Modal from "react-modal";
import { useForm, SubmitHandler } from "react-hook-form";
import StarRatingComponent from "react-star-rating-component";
import { genres } from "../../hooks/translation";

type Inputs = {
	rating: number;
};

const formatDate = (date?: string) => {
	const args = date?.split("-");
	return args?.reverse().join("/");
};

const MoviePage: React.FC = () => {
	const { data: movies } = useGetMovies();
	const id = useParams().id;
	const movie = movies?.find((m) => m.id === id);

	const { mutate } = usePostReview(id!);
	const { register, handleSubmit, setValue } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = ({ rating }) => {
		mutate({ movieId: id!, rating: rating });
		handleCloseModal();
	};

	const { data: review } = useGetReviews(id!);

	const navigate = useNavigate();
	const [rating, setRating] = useState(0);

	const handleStarClick = (nextValue: number) => {
		setRating(nextValue);
		setValue("rating", nextValue);
	};

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleOpenModal = () => {
		setValue("rating", 0);
		setModalIsOpen(true);
	};

	const handleCloseModal = () => {
		setModalIsOpen(false);
	};

	console.log(review);

	if (!movie) {
		navigate("/");
		return;
	}

	return (
		<>
			<Styled.Container>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={handleCloseModal}
					contentLabel="Avaliação Modal"
					appElement={document.getElementById("root") || undefined}
					overlayClassName={"modal-overlay"}
					className={"modal-content"}
					style={{
						content: {
							maxWidth: "360px",
							minWidth: "360px",
							width: "40%",
							height: "240px",
							background: "#000",
							padding: "18px",
							boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
							color: "#fff",
						},
						overlay: {
							background: "rgba(0,0,0, 0.7)",
							position: "fixed",
							top: "0",
							left: "0",
							bottom: "0",
							right: "0",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						},
					}}
				>
					<h1>Avalie o filme</h1>
					<p>
						Deixe aqui sua avaliação do filme em questão. Escolha uma nota de 0
						a 10:
					</p>
					<form style={{ display: "block" }} onSubmit={handleSubmit(onSubmit)}>
						<StarRatingComponent
							name="nota"
							starCount={10}
							value={rating}
							onStarClick={handleStarClick}
							starColor="#FFD700"
							emptyStarColor="#333"
						/>
						<input
							type="hidden"
							{...register("rating", { required: true })}
							value={rating}
						/>
						<button
							style={{
								display: "flex",
								justifyContent: "flex-start",
								background: "#000",
								color: "#fff",
								border: "none",
								padding: "5px",
								boxShadow: "5px 5px 5px rgba(255, 255, 255, 0.5)",
								cursor: "pointer",
							}}
							type="submit"
						>
							Confirmar
						</button>
					</form>
				</Modal>
				<div className="main">
					<div className="picture">
						<figure>
							<img src="https://uauposters.com.br/media/catalog/product/2/5/258820220222-uau-posters-the-batman-filmes-1.jpg" />
						</figure>
					</div>
					<div className="column">
						<h1>{movie?.title}</h1>
						<p>Gênero: {genres[movie?.genre as keyof typeof genres]}</p>
						<p>{movie?.duration} minutos</p>
						<p>Nota: {Number(review?.rating) || "---"}</p>
						<p>Quantidade de avaliações: {review?.totalRatings}</p>
						<p>Lançado em {formatDate(movie?.releaseDate)}</p>
					</div>
				</div>
				<Styled.Reviews>
					<h1>Avaliações</h1>
					<div onClick={handleOpenModal}>
						<p>Avalie o filme</p>
					</div>
				</Styled.Reviews>
			</Styled.Container>
		</>
	);
};

export default MoviePage;
