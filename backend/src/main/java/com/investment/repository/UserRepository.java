package com.investment.repository;

import com.investment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    Optional<User> findByVerificationToken(String token);
    
    @Query("SELECT u FROM User u WHERE u.verificationToken = ?1")
    Optional<User> findByVerificationTokenQuery(String token);
} 