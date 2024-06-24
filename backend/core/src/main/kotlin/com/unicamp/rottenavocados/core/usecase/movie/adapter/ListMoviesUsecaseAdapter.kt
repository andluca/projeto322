package com.unicamp.rottenavocados.core.usecase.movie.adapter

import com.unicamp.rottenavocados.core.model.movie.Movie
import com.unicamp.rottenavocados.core.repository.MovieRepositoryPort
import com.unicamp.rottenavocados.core.usecase.movie.ListMoviesUsecasePort
import org.springframework.stereotype.Component

@Component
internal class ListMoviesUsecaseAdapter(
    private val movieRepository: MovieRepositoryPort,
): ListMoviesUsecasePort {
    override fun execute(): List<Movie> = movieRepository.fetchMovies()
}