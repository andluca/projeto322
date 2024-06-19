interface Genre {
  name: string;
  description: string;
}

interface Assessable {
  id: string;
  name: string;
  synopsis: string;
  genre: Genre;
  grade: number;
  releaseDate: string;
}

interface Movie extends Assessable {
  duration: number;
}

interface Serie extends Assessable {
  seasons: number;
  episodes: number;
}