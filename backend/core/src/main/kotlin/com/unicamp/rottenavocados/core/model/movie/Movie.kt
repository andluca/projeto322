package com.teste.tutorial.demoartifact.model.movie

import com.unicamp.rottenavocados.core.model.reviewable.Reviewable
import com.unicamp.rottenavocados.core.model.genre.Genre
import java.time.LocalDate
import java.util.UUID

internal data class Movie (
    val duration: Int,
    override val title: String,
    override val id: UUID,
    override val synopsys: String,
    override val rating: Float,
    override val totalRatings: Int,
    override val releaseDate: LocalDate,
    override val genre: Genre
) : Reviewable(id, title, synopsys, rating, totalRatings, releaseDate, genre) {
    override fun receiveRating(rate: Float) {
        TODO("Not yet implemented")
    }
}