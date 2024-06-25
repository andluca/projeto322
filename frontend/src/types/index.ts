interface Assessable {
  id: string,
  title: string,
  posterUrl: string,
  synopsys: string,
  releaseDate: string,
  genre: string,
}

interface Movie extends Assessable {
  duration: number;
}

interface Review{
  idReviewable: string,
  rating: number,
}

interface Rating{
  rating: number,
  totalRatings: number,

}

interface Serie extends Assessable {
  seasons: number;
  episodes: number;
}