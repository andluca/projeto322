package com.unicamp.rottenavocados.core.usecase.movie

import com.unicamp.rottenavocados.core.model.movie.Movie

interface ListMoviesUsecasePort {
    fun execute(): List<Movie>
}