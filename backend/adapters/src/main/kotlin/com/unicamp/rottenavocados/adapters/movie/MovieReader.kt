package com.unicamp.rottenavocados.adapters.movie

import com.unicamp.rottenavocados.configuration.xml.FileReader
import com.unicamp.rottenavocados.core.model.genre.Genre
import com.unicamp.rottenavocados.core.model.movie.Movie
import org.springframework.stereotype.Service
import org.w3c.dom.Element
import org.w3c.dom.NodeList
import java.io.File
import java.time.LocalDate
import java.util.UUID
import javax.xml.parsers.DocumentBuilderFactory

@Service
class MovieReader(): FileReader {
    override fun read(path: String): List<Movie> {
        val movies = mutableListOf<Movie>()

        try {
            val file = File(path)
            val dbFactory = DocumentBuilderFactory.newInstance()
            val dBuilder = dbFactory.newDocumentBuilder()
            val doc = dBuilder.parse(file)
            doc.documentElement.normalize()

            val nodeList: NodeList = doc.getElementsByTagName("Movie")

            for (i in 0 until nodeList.length) {
                val node = nodeList.item(i)
                if (node.nodeType == Element.ELEMENT_NODE) {
                    val movieElement = node as Element

                    val id = UUID.fromString(movieElement.getElementsByTagName("Id").item(0).textContent)
                    val title = movieElement.getElementsByTagName("Title").item(0).textContent
                    val duration = movieElement.getElementsByTagName("Duration").item(0).textContent.toInt()
                    val synopsis = movieElement.getElementsByTagName("Synopsis").item(0).textContent
                    val rating = movieElement.getElementsByTagName("Rating").item(0).textContent.toFloatOrNull()
                    val totalRatings = movieElement.getElementsByTagName("TotalRatings").item(0).textContent.toInt()
                    val releaseDate = LocalDate.parse(movieElement.getElementsByTagName("ReleaseDate").item(0).textContent)
                    val genre = Genre.valueOf(movieElement.getElementsByTagName("Genre").item(0).textContent.toUpperCase())

                    val movie = Movie(duration, id, title, synopsis, rating, totalRatings, releaseDate, genre)
                    movies.add(movie)
                }
            }
        } catch (e: Exception) {
            println("Error reading movie file: ${e.message}")
            e.printStackTrace()
        }

        return movies
    }
}