package com.unicamp.rottenavocados.api.controller.movie

import com.unicamp.rottenavocados.core.model.movie.Movie
import com.unicamp.rottenavocados.core.usecase.movie.ListMoviesUsecasePort
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/movies")
class MovieController(
    private val listMoviesUsecasePort: ListMoviesUsecasePort,
) {
    @GetMapping("/")
    fun listMovies(): List<Movie> = listMoviesUsecasePort.execute()
}