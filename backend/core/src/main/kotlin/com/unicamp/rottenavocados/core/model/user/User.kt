package com.unicamp.rottenavocados.core.model.user

import java.util.UUID

abstract class User (
    open val id: UUID? = null,
    open val name: String
) {
    abstract fun rate(rating: Int)
}