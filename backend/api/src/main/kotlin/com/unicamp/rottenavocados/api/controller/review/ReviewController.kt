package com.unicamp.rottenavocados.api.controller.review

import com.unicamp.rottenavocados.core.model.review.Review
import com.unicamp.rottenavocados.core.model.user.User
import com.unicamp.rottenavocados.core.model.commonUser.CommonUser
import com.unicamp.rottenavocados.core.usecase.review.CreateReviewUsecasePort
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.http.HttpStatus
import java.util.UUID

@RestController
@RequestMapping("/reviews")
class ReviewController(
    private val createReviewUsecasePort: CreateReviewUsecasePort,
) {
    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    fun reviewMovie(@RequestBody review: Review): Review {
        // if authentication was implemented here we should validate the user in some way
        // then we could create a common user or a critic user based on the authentication
        // this is just a mock user, every review will be made like a common user
        val user: User = CommonUser(UUID.randomUUID(), "default_user")
        
        val ratedReview = user.rate(review)

        return createReviewUsecasePort.execute(ratedReview)
    }
}