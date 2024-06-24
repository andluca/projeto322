package com.unicamp.rottenavocados.core.model.blockbuster

import com.unicamp.rottenavocados.core.model.genre.Genre
import com.unicamp.rottenavocados.core.model.movie.Movie
import java.time.LocalDate
import java.util.UUID

data class Blockbuster(
    override val id: UUID? = null,
    override val duration: Int,
    override val title: String,
    override val synopsys: String,
    override val rating: Float? = null,
    override val totalRatings: Int = 0,
    override val releaseDate: LocalDate,
    override val genre: Genre
) : Movie(duration, id, title, synopsys, rating, totalRatings, releaseDate, genre) {

    override fun receiveRating(rate: Float) {
        TODO("Not yet implemented")
    }
}