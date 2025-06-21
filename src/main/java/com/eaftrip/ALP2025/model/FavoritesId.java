package com.eaftrip.ALP2025.model;

import java.io.Serializable;
import java.util.Objects;

public class FavoritesId implements Serializable {
    private Integer idUser;
    private Integer idDestination;

    // Default constructor
    public FavoritesId() {
    }

    // Constructor
    public FavoritesId(Integer idUser, Integer idDestination) {
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

    // equals() and hashCode()
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        FavoritesId that = (FavoritesId) o;
        return Objects.equals(idUser, that.idUser) &&
                Objects.equals(idDestination, that.idDestination);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUser, idDestination);
    }
}