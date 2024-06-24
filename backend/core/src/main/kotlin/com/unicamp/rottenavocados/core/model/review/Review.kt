package com.unicamp.rottenavocados.core.model.review

import java.time.LocalDate
import java.util.UUID

data class Review (
    val id: UUID? = null,
    val idAuthor: UUID? = null,
    val idReviewable: UUID? = null,
    val rating: Int = 0
)