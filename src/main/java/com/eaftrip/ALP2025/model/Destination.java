package com.eaftrip.ALP2025.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Entity
public class Destination {
    @Id
    @Column(name = "iddestination")

    private Integer idDestination;
    private String title;
    private String Location;
    private String description;
    private String image;

    @Column(precision = 10, scale = 9)
    private BigDecimal rating;
    private Integer reviews;
    private String category;
}
