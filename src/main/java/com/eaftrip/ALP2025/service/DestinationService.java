package com.eaftrip.ALP2025.service;

import org.springframework.stereotype.Service;

import com.eaftrip.ALP2025.model.Destination;
import com.eaftrip.ALP2025.model.dto.DestinationWithHistoryDTO;
import com.eaftrip.ALP2025.repository.DestinationRepository;

@Service
public class DestinationService {

    private final DestinationRepository destinationRepository;

    public DestinationService(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    // Get comprehensive data
    public DestinationWithHistoryDTO getDestinationWithHistory(Integer id) {
        Destination destination = destinationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Destination not found"));

        return convertToDTO(destination);
    }

    // Update comprehensive data
    public DestinationWithHistoryDTO updateDestinationWithHistory(
            Integer id,
            DestinationWithHistoryDTO dto) {

        Destination destination = destinationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Destination not found"));

        // Update main fields
        destination.setTitle(dto.getTitle());
        destination.setLocation(dto.getLocation());
        destination.setDescription(dto.getDescription());
        destination.setImage(dto.getImage());
        destination.setRating(dto.getRating());
        destination.setReviews(dto.getReviews());
        destination.setCategory(dto.getCategory());

        // Update history fields
        destination.setHistoryTitle(dto.getHistoryTitle());
        destination.setHistoryContent(dto.getHistoryContent());
        destination.setHistoryImage(dto.getHistoryImage());

        Destination updated = destinationRepository.save(destination);
        return convertToDTO(updated);
    }

    private DestinationWithHistoryDTO convertToDTO(Destination destination) {
        DestinationWithHistoryDTO dto = new DestinationWithHistoryDTO();
        dto.setIdDestination(destination.getIdDestination());
        dto.setTitle(destination.getTitle());
        dto.setLocation(destination.getLocation());
        dto.setDescription(destination.getDescription());
        dto.setImage(destination.getImage());
        dto.setRating(destination.getRating());
        dto.setReviews(destination.getReviews());
        dto.setCategory(destination.getCategory());
        dto.setHistoryTitle(destination.getHistoryTitle());
        dto.setHistoryContent(destination.getHistoryContent());
        dto.setHistoryImage(destination.getHistoryImage());

        return dto;
    }
}

class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}