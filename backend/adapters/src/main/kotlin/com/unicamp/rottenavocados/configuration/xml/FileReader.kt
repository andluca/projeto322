package com.unicamp.rottenavocados.configuration.xml

interface FileReader {
    fun read(path: String): Any
}