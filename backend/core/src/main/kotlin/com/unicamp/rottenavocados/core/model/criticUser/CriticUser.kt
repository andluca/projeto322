package com.unicamp.rottenavocados.core.model.criticUser

import com.unicamp.rottenavocados.core.model.user.User
import com.unicamp.rottenavocados.core.model.review.Review
import java.util.UUID

data class CriticUser(
    override val id: UUID? = null,
    override val name: String
) : User(id, name) {
    override fun rate(review: Review): Review {
        val rating = review.rating * 2
        return Review(UUID.randomUUID(), id, review.idReviewable, rating)
    }
}