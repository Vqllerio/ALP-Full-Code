package com.eaftrip.ALP2025.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eaftrip.ALP2025.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}