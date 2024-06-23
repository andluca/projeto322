package com.unicamp.rottenavocados.core.model.commonUser

import com.unicamp.rottenavocados.core.model.user.User
import java.util.UUID

data class CommonUser(
    override val id: UUID? = null,
    override val name: String
) : User(id, name) {
    override fun rate(rating: Int) {
        TODO("Not yet implemented")
    }
}