package com.eaftrip.ALP2025.repository;

import com.eaftrip.ALP2025.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    // Find all reviews for a destination
    List<Review> findByDestinationId(Integer destinationId);

    // Find all reviews by a user
    List<Review> findByUserId(Integer userId);

    // Calculate average rating for a destination
    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.destinationId = :destinationId")
    Double findAverageRatingByDestinationId(@Param("destinationId") Integer destinationId);

    // Check if user has already reviewed a destination
    boolean existsByUserIdAndDestinationId(Integer userId, Integer destinationId);
}