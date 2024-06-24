package com.unicamp.rottenavocados.core.model.user

import com.unicamp.rottenavocados.core.model.review.Review
import java.util.UUID

abstract class User (
    open val id: UUID? = null,
    open val name: String
) {
    abstract fun rate(review: Review): Review
}