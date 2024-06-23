package com.unicamp.rottenavocados.core.repository

import com.unicamp.rottenavocados.core.model.movie.Movie

interface MovieRepositoryPort {
    fun fetchMovies(): List<Movie>
}