package com.unicamp.rottenavocados.core.model.review

import java.time.LocalDate
import java.util.UUID

data class ReviewResponse (
    val rating: Float = 0.00f,
    val totalRatings: Int = 0
)