package com.unicamp.rottenavocados.core.usecase.review.adapter

import com.unicamp.rottenavocados.core.model.review.Review
import com.unicamp.rottenavocados.core.repository.ReviewRepositoryPort
import com.unicamp.rottenavocados.core.usecase.review.CreateReviewUsecasePort
import org.springframework.stereotype.Component

@Component
internal class CreateReviewUsecaseAdapter(
    private val reviewRepository: ReviewRepositoryPort,
): CreateReviewUsecasePort {
    override fun execute(review: Review): Review = reviewRepository.postReview(review)
}