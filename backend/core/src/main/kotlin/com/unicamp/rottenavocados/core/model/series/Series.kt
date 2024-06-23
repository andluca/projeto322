package com.unicamp.rottenavocados.core.model.series

import com.unicamp.rottenavocados.core.model.reviewable.Reviewable
import com.unicamp.rottenavocados.core.model.genre.Genre
import java.time.LocalDate
import java.util.UUID

data class Series (
    val totalSeasons: Int,
    val totalEpisodes: Int,
    override val id: UUID? = null,
    override val title: String,
    override val synopsys: String,
    override val rating: Float? = null,
    override val totalRatings: Int = 0, // quantity of ratings
    override val releaseDate: LocalDate,
    override val genre: Genre
) : Reviewable(id, title, synopsys, rating, totalRatings, releaseDate, genre) {
    override fun receiveRating(rate: Float) {
        TODO("Not yet implemented")
    }
}