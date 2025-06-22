package com.eaftrip.ALP2025.repository;

import com.eaftrip.ALP2025.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface DestinationRepository extends JpaRepository<Destination, Integer> {

    // Custom query to find by category (automatically implemented by Spring)
    List<Destination> findByCategoryContainingIgnoreCase(String category);

    // Custom query to find by location
    List<Destination> findByLocationContainingIgnoreCase(String location);

    // Example of a custom JPQL query
    @Query("SELECT d FROM Destination d WHERE d.rating >= :minRating")
    List<Destination> findByMinRating(@Param("minRating") Double minRating);

    List<Destination> findByCategory(String category);

    List<Destination> findAllByOrderByRatingDesc();
}