package com.unicamp.rottenavocados.core.model.criticUser

import com.unicamp.rottenavocados.core.model.user.User
import java.util.UUID

internal data class CriticUser(
    override val id: UUID,
    override val name: String
) : User(id, name) {
    override fun rate(rating: Int) {
        TODO("Not yet implemented")
    }
}