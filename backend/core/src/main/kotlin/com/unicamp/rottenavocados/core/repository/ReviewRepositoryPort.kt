package com.unicamp.rottenavocados.core.repository

import com.unicamp.rottenavocados.core.model.review.Review

interface ReviewRepositoryPort {
    fun postReview(review: Review): Review
}