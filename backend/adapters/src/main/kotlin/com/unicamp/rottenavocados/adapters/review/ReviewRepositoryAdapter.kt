package com.unicamp.rottenavocados.adapters.review

import com.unicamp.rottenavocados.datasource.exception.DataAccessException
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
    override fun postReview(review: Review): Review = reader.writeOne(PATH, review)

    override fun getReview(movieId: UUID): ReviewResponse {
        val reviews = reader.read(PATH)
        var ratingCount: Int = 0
        var totalRating: Float = 0.00f
        
        reviews.forEach { it ->
            if(it.idReviewable == movieId) {
                ratingCount++
                totalRating += it.rating
            }
        }

        return ReviewResponse(totalRating / ratingCount, ratingCount)
    }
}