package com.eaftrip.ALP2025.repository;

import com.eaftrip.ALP2025.model.Favorites;
import com.eaftrip.ALP2025.model.FavoritesId;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FavoritesRepository extends JpaRepository<Favorites, FavoritesId> {
    List<Favorites> findByIdUser(Integer idUser);

    // You might also want these methods:
    List<Favorites> findByIdDestination(Integer idDestination);

    boolean existsByIdUserAndIdDestination(Integer idUser, Integer idDestination);

    void deleteByIdUserAndIdDestination(Integer idUser, Integer idDestination);
}