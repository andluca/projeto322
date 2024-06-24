package com.unicamp.rottenavocados.adapters.review

import com.unicamp.rottenavocados.datasource.exception.DataAccessException
import com.unicamp.rottenavocados.core.model.review.Review
import com.unicamp.rottenavocados.core.repository.ReviewRepositoryPort
import jakarta.inject.Named

@Named
internal class ReviewRepositoryAdapter(
    private val reader: ReviewReader
): ReviewRepositoryPort {
    companion object {
        val PATH = System.getenv("REVIEW_XML_PATH") ?: throw Exception("Environment Variable REVIEW_XML_PATH is required")
    }
    override fun postReview(review: Review): Review = reader.writeOne(PATH, review)
}