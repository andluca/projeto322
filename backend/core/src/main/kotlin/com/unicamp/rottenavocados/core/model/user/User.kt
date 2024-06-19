package com.unicamp.rottenavocados.core.model.user

import java.util.UUID

abstract class User (
    open val id: UUID,
    open val name: String
) {
    abstract fun rate(rating: Int)
}