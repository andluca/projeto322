package com.unicamp.rottenavocados.core.model.filme

import java.time.LocalDateTime
import java.util.UUID

data class Filme (
    val id: UUID? = null,
    val titulo: String,
    val sinopse: String,
    val duracao: Int,
    val dataLancamento: LocalDateTime,
)