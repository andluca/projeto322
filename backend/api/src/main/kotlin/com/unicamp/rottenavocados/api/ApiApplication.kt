package com.unicamp.rottenavocados.api

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@ConfigurationPropertiesScan(basePackages = ["com.unicamp.rottenavocados"])
@SpringBootApplication
@ComponentScan(basePackages = ["com.unicamp.rottenavocados"])
class ApiApplication

fun main(args: Array<String>) {
	runApplication<ApiApplication>(*args)
}
