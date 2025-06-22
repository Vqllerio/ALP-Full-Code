package com.eaftrip.ALP2025.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "destination")
public class Destination {
    @Id
    @Column(name = "iddestination")
    private Integer idDestination;

    private String title;

    private String location;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(length = 512)
    private String image;

    @Column(precision = 10, scale = 9)
    private BigDecimal rating;

    private Integer reviews;

    private String category;

    @Column(name = "history_content", columnDefinition = "TEXT")
    private String historyContent;
}