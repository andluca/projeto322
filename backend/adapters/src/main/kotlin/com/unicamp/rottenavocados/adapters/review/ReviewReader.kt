package com.unicamp.rottenavocados.adapters.review

import com.unicamp.rottenavocados.configuration.xml.FileReader
import com.unicamp.rottenavocados.core.model.review.Review
import org.springframework.core.io.ClassPathResource
import org.springframework.stereotype.Service
import org.w3c.dom.Element
import org.w3c.dom.NodeList
import java.time.LocalDate
import java.util.UUID
import javax.xml.parsers.DocumentBuilderFactory
import java.io.File

@Service
class ReviewReader(): FileReader {
    override fun read(path: String): String {
        return ""
    }

    // TODO: implement real post functionality
    fun writeOne(path: String, review: Review): Review {
        try {
            val resource = ClassPathResource(path)
            val dbFactory = DocumentBuilderFactory.newInstance()
            val dBuilder = dbFactory.newDocumentBuilder()
            val doc = dBuilder.parse(resource.inputStream)
            doc.documentElement.normalize()

            val reviewList = doc.getElementsByTagName("Reviews").item(0)

            val reviewElement = doc.createElement("Review")
            val idElement = doc.createElement("Id")
            idElement.textContent = review.id.toString()
            val idAuthorElement = doc.createElement("IdAuthor")
            idAuthorElement.textContent = review.idAuthor.toString()
            val idReviewableElement = doc.createElement("IdReviewable")
            idReviewableElement.textContent = review.idReviewable.toString()
            val ratingElement = doc.createElement("Rating")
            ratingElement.textContent = review.rating.toString()

            reviewElement.appendChild(idElement)
            reviewElement.appendChild(idAuthorElement)
            reviewElement.appendChild(idReviewableElement)
            reviewElement.appendChild(ratingElement)

            reviewList.appendChild(reviewElement)
            resource.getFile().writeText(reviewList.toString())
        } catch (e: Exception) {
            println("Error writing review file: ${e.message}")
            e.printStackTrace()
        }

        return review
    }
}