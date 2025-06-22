// DestinationWithHistoryDTO.java
package com.eaftrip.ALP2025.model.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class DestinationWithHistoryDTO {
    private Integer idDestination;
    private String title;
    private String location;
    private String description;
    private String image;
    private BigDecimal rating;
    private Integer reviews;
    private String category;

    // History fields
    private String historyTitle;
    private String historyContent;
    private String historyImage;
}