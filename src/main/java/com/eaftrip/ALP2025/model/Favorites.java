package com.eaftrip.ALP2025.model;

import jakarta.persistence.*;
import java.io.Serializable;

@SuppressWarnings("unused")
@Entity
@Table(name = "favorites")
@IdClass(FavoritesId.class)
public class Favorites {
    @Id
    @Column(name = "iduser")
    private Integer idUser;

    @Id
    @Column(name = "iddestination")
    private Integer idDestination;

    @Column(name = "timefavoritedat", insertable = false, updatable = false)
    private String timeFavoritedAt; // Just for reading the value

    // Constructors (exclude timestamp from constructor)
    public Favorites() {
    }

    public Favorites(Integer idUser, Integer idDestination) {
        this.idUser = idUser;
        this.idDestination = idDestination;
    }

    // Getters and setters
    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Integer getIdDestination() {
        return idDestination;
    }

    public void setIdDestination(Integer idDestination) {
        this.idDestination = idDestination;
    }
}