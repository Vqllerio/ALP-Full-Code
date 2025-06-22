package com.eaftrip.ALP2025.Controller;

import com.eaftrip.ALP2025.model.Favorites;
import com.eaftrip.ALP2025.repository.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/favorites")
public class FavoritesController {

    @Autowired
    private FavoritesRepository favoritesRepository;

    // Get all favorites for a user
    @GetMapping
    public List<Favorites> getUserFavorites(@RequestParam Integer userId) {
        return favoritesRepository.findByIdUser(userId);
    }

    // Check if a destination is favorited by user
    @GetMapping("/check")
    public ResponseEntity<Boolean> checkFavorite(
            @RequestParam Integer userId,
            @RequestParam Integer destinationId) {
        boolean exists = favoritesRepository.existsByIdUserAndIdDestination(userId, destinationId);
        return ResponseEntity.ok(exists);
    }

    // Toggle favorite status
    @PostMapping
    public ResponseEntity<?> toggleFavorite(
            @RequestParam Integer userId,
            @RequestParam Integer destinationId) {

        // Check if already favorited
        if (favoritesRepository.existsByIdUserAndIdDestination(userId, destinationId)) {
            favoritesRepository.deleteByIdUserAndIdDestination(userId, destinationId);
            return ResponseEntity.ok().body(Map.of("isFavorite", false));
        } else {
            Favorites newFavorite = new Favorites();
            newFavorite.setIdUser(userId);
            newFavorite.setIdDestination(destinationId);
            favoritesRepository.save(newFavorite);
            return ResponseEntity.ok().body(Map.of("isFavorite", true));
        }
    }
}