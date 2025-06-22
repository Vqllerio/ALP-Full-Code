package com.eaftrip.ALP2025.Controller;

import com.eaftrip.ALP2025.model.Review;
import com.eaftrip.ALP2025.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    // Submit a new review
    @PostMapping
    public ResponseEntity<?> submitReview(@RequestBody Review review) {
        // Check if user already reviewed this destination
        if (reviewRepository.existsByUserIdAndDestinationId(
                review.getUserId(),
                review.getDestinationId())) {
            return ResponseEntity.badRequest().body(
                    Map.of("message", "You've already reviewed this destination"));
        }

        Review savedReview = reviewRepository.save(review);
        return ResponseEntity.ok(savedReview);
    }

    // Get reviews for a destination
    @GetMapping("/destination/{destinationId}")
    public List<Review> getDestinationReviews(@PathVariable Integer destinationId) {
        return reviewRepository.findByDestinationId(destinationId);
    }

    // Get average rating for a destination
    @GetMapping("/average-rating/{destinationId}")
    public ResponseEntity<Map<String, Double>> getAverageRating(
            @PathVariable Integer destinationId) {
        Double average = reviewRepository.findAverageRatingByDestinationId(destinationId);
        return ResponseEntity.ok(Map.of("averageRating", average != null ? average : 0.0));
    }
}