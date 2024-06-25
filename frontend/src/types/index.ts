interface Assessable {
  id: string,
  title: string,
  synopsys: string,
  rating: number,
  totalRatings: number,
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