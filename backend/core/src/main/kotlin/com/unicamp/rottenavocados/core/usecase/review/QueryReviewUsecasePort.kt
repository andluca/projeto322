package com.unicamp.rottenavocados.core.usecase.review

import com.unicamp.rottenavocados.core.model.review.ReviewResponse
import java.util.UUID

interface QueryReviewUsecasePort {
    fun execute(movieId: UUID): ReviewResponse
}