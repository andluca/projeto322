package com.unicamp.rottenavocados.core.usecase.review.adapter

import com.unicamp.rottenavocados.core.model.review.ReviewResponse
import com.unicamp.rottenavocados.core.repository.ReviewRepositoryPort
import com.unicamp.rottenavocados.core.usecase.review.QueryReviewUsecasePort
import org.springframework.stereotype.Component
import java.util.UUID

@Component
internal class QueryReviewUsecaseAdapter(
    private val reviewRepository: ReviewRepositoryPort,
): QueryReviewUsecasePort {
    override fun execute(movieId: UUID): ReviewResponse = reviewRepository.getReview(movieId)
}