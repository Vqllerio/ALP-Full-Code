package com.eaftrip.ALP2025.Controller;

import com.eaftrip.ALP2025.exception.*;
import com.eaftrip.ALP2025.model.Destination;
import com.eaftrip.ALP2025.model.dto.DestinationWithHistoryDTO;
import com.eaftrip.ALP2025.repository.DestinationRepository;
import com.eaftrip.ALP2025.service.DestinationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/destinations")
public class DestinationController {

    @Autowired
    private DestinationRepository destinationRepository;

    @Autowired
    private DestinationService destinationService;

    // Get all destinations
    @GetMapping
    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    // Get destinations by category
    @GetMapping(params = "category")
    public List<Destination> getByCategory(@RequestParam String category) {
        return destinationRepository.findByCategoryContainingIgnoreCase(category);
    }

    // Search destinations by location
    @GetMapping(params = "location")
    public List<Destination> getByLocation(@RequestParam String location) {
        return destinationRepository.findByLocationContainingIgnoreCase(location);
    }

    // Get single destination by ID
    @GetMapping("/{id}")
    public ResponseEntity<Destination> getDestinationById(@PathVariable Integer id) {
        return destinationRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get destination with full history data
    @GetMapping("/{id}/full")
    public ResponseEntity<DestinationWithHistoryDTO> getDestinationWithHistory(@PathVariable Integer id) {
        return ResponseEntity.ok(destinationService.getDestinationWithHistory(id));
    }

    // Get only history data
    @GetMapping("/{id}/history")
    public ResponseEntity<Map<String, String>> getHistoryData(@PathVariable Integer id) {
        Destination destination = destinationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Destination not found"));

        Map<String, String> history = Map.of(
                "title", destination.getHistoryTitle() != null ? destination.getHistoryTitle() : "",
                "content", destination.getHistoryContent() != null ? destination.getHistoryContent() : "",
                "image", destination.getHistoryImage() != null ? destination.getHistoryImage() : "",
                "location", destination.getLocation());

        return ResponseEntity.ok(history);
    }

    // Update history data
    @PutMapping("/{id}/history")
    public ResponseEntity<Destination> updateHistory(
            @PathVariable Integer id,
            @RequestBody Map<String, String> historyData) {

        Destination destination = destinationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Destination not found"));

        destination.setHistoryTitle(historyData.get("title"));
        destination.setHistoryContent(historyData.get("content"));
        destination.setHistoryImage(historyData.get("image"));

        Destination updated = destinationRepository.save(destination);
        return ResponseEntity.ok(updated);
    }

    // Update comprehensive data
    @PutMapping("/{id}/full")
    public ResponseEntity<DestinationWithHistoryDTO> updateFullDestination(
            @PathVariable Integer id,
            @RequestBody DestinationWithHistoryDTO dto) {

        return ResponseEntity.ok(destinationService.updateDestinationWithHistory(id, dto));
    }
}