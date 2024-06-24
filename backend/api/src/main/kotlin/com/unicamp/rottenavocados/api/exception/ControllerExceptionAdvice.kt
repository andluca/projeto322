package com.unicamp.rottenavocados.api.exception

import com.unicamp.rottenavocados.datasource.exception.DataAccessException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.context.request.WebRequest

@RestControllerAdvice
class ControllerExceptionAdvice {

    @ExceptionHandler(value = [DataAccessException::class])
    fun handleDataAccessException(ex: DataAccessException, request: WebRequest) =
        handleException(ex.localizedMessage, HttpStatus.INTERNAL_SERVER_ERROR)

    private fun handleException(
        description: String,
        status: HttpStatus,
    ) =
        ResponseEntity.status(status)
            .body(description)
}
