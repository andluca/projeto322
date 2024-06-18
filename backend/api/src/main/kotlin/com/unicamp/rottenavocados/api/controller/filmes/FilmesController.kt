package com.unicamp.rottenavocados.api.controller.filmes

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/filmes")
class FilmesController {
    @GetMapping("/")
    fun index(): String {
        return "Greetings from Spring Boot!"
    }
}