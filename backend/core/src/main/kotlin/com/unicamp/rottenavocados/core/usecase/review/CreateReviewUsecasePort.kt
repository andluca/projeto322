package com.unicamp.rottenavocados.core.usecase.review

import com.unicamp.rottenavocados.core.model.review.Review

interface CreateReviewUsecasePort {
    fun execute(review: Review): Review
}