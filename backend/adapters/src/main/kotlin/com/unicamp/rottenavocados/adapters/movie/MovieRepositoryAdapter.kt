package com.unicamp.rottenavocados.adapters.movie

import com.unicamp.rottenavocados.datasource.exception.DataAccessException
import com.unicamp.rottenavocados.core.model.movie.Movie
import com.unicamp.rottenavocados.core.repository.MovieRepositoryPort
import jakarta.inject.Named

@Named
internal class MovieRepositoryAdapter(
    private val reader: MovieReader
): MovieRepositoryPort {
    companion object {
        const val PATH = "adapters/src/main/resources/xml/movies.xml"
    }
    override fun fetchMovies(): List<Movie> = runCatching {
        reader.read(PATH)
    }.getOrElse {
        throw DataAccessException(it)
    }
}