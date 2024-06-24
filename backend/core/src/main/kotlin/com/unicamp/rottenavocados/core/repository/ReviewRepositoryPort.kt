package com.unicamp.rottenavocados.core.repository

import com.unicamp.rottenavocados.core.model.review.Review
import com.unicamp.rottenavocados.core.model.review.ReviewResponse
import java.util.UUID

interface ReviewRepositoryPort {
    fun postReview(review: Review): Review
    fun getReview(movieId: UUID): ReviewResponse
}