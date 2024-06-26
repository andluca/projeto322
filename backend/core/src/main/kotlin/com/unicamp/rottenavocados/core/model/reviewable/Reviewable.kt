package com.unicamp.rottenavocados.core.model.reviewable
import com.unicamp.rottenavocados.core.model.genre.Genre

import java.time.LocalDate
import java.util.UUID

abstract class Reviewable(
    open val id: UUID? = null,
    open val title: String,
    open val synopsys: String,
    open val posterUrl: String,
    open val releaseDate: LocalDate,
    open val genre: Genre
) {
    abstract fun receiveRating(rate: Float)
}