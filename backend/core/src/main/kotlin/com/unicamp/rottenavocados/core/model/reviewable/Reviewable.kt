package com.unicamp.rottenavocados.core.model.reviewable
import com.unicamp.rottenavocados.core.model.genre.Genre

import java.time.LocalDate
import java.util.UUID

internal abstract class Avaliavel(
    open val id: UUID,
    open val title: String,
    open val synopsys: String,
    open val rating: Float,
    open val totalRatings: Int, // quantity of ratings
    open val releaseDate: LocalDate,
    open val genre: Genre
) {
    abstract fun receiveRating(rate: Float)
}