package com.unicamp.rottenavocados.core.usecase.review.adapter

import com.unicamp.rottenavocados.core.model.commonUser.CommonUser
import com.unicamp.rottenavocados.core.model.review.Review
import com.unicamp.rottenavocados.core.model.user.User
import com.unicamp.rottenavocados.core.repository.ReviewRepositoryPort
import com.unicamp.rottenavocados.core.usecase.review.CreateReviewUsecasePort
import org.springframework.stereotype.Component
import java.util.UUID

@Component
internal class CreateReviewUsecaseAdapter(
    private val reviewRepository: ReviewRepositoryPort,
): CreateReviewUsecasePort {
    override fun execute(review: Review): Review {
        val user: User = CommonUser(UUID.randomUUID(), "default_user")
        val ratedReview = user.rate(review)
        return reviewRepository.postReview(ratedReview)
    }
}