package com.unicamp.rottenavocados.datasource.exception

class DataAccessException(cause: Throwable) : RuntimeException(cause.message)
