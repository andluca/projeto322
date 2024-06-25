package com.unicamp.rottenavocados.core.model.criticUser

import com.unicamp.rottenavocados.core.model.user.User
import com.unicamp.rottenavocados.core.model.review.Review
import java.util.UUID

data class CriticUser(
    override val id: UUID? = null,
    override val name: String
) : User(id, name) {
    override fun rate(review: Review): Review =
        Review(UUID.randomUUID(), id, review.idReviewable, review.rating * 2)
}