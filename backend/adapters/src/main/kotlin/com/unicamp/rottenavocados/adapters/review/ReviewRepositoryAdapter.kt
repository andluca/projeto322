package com.unicamp.rottenavocados.adapters.review

import com.unicamp.rottenavocados.core.model.review.Review
import com.unicamp.rottenavocados.core.model.review.ReviewResponse
import com.unicamp.rottenavocados.core.repository.ReviewRepositoryPort
import jakarta.inject.Named
import java.util.UUID

@Named
internal class ReviewRepositoryAdapter(
    private val reader: ReviewReader
): ReviewRepositoryPort {
    companion object {
        val PATH = System.getenv("REVIEW_XML_PATH") ?: throw Exception("Environment Variable REVIEW_XML_PATH is required")
    }
    override fun postReview(review: Review): Review {
        if(review.rating < 0 || review.rating > 10)
            throw IllegalArgumentException("Rating should be between 0 and 10")
    
        return reader.writeOne(PATH, review)
    }

    override fun getReview(movieId: UUID): ReviewResponse {
        val reviews = reader.read(PATH)
        var ratingCount = 0
        var totalRating= 0.00f

        reviews.filter { it.idReviewable == movieId }.forEach {
            ratingCount++
            totalRating += it.rating
        }

        return ReviewResponse(totalRating / ratingCount, ratingCount)
    }
}