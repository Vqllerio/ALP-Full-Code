package com.eaftrip.ALP2025.repository;

import com.eaftrip.ALP2025.model.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface FavoritesRepository extends JpaRepository<Favorites, FavoritesId> {

    // Find all favorites for a user
    List<Favorites> findByIdUser(Integer userId);

    // Check if a favorite exists
    boolean existsByIdUserAndIdDestination(Integer userId, Integer destinationId);

    // Delete a favorite
    @Modifying
    @Query("DELETE FROM Favorites f WHERE f.idUser = :userId AND f.idDestination = :destinationId")
    void deleteByIdUserAndIdDestination(@Param("userId") Integer userId,
            @Param("destinationId") Integer destinationId);
}