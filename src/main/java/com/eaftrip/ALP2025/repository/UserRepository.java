package com.eaftrip.ALP2025.repository;

import com.eaftrip.ALP2025.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    // Find user by email
    Optional<User> findByEmail(String email);

    // Login validation
    User findByEmailAndPassword(String email, String password);
}