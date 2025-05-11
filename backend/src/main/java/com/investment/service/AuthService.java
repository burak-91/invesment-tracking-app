package com.investment.service;

import com.investment.model.User;
import com.investment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.UUID;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    public Map<String, Object> register(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Bu e-posta adresi zaten kullanılıyor");
        }

        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Bu kullanıcı adı zaten kullanılıyor");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        String token = UUID.randomUUID().toString();
        logger.info("Oluşturulan token: {}", token);
        
        user.setVerificationToken(token);
        user.setEnabled(false);
        
        logger.info("Token ayarlandı, user.verificationToken: {}", user.getVerificationToken());
        
        User savedUser = userRepository.save(user);
        
        logger.info("Kullanıcı kaydedildi. Email: {}, Token: {}, SavedToken: {}", 
            savedUser.getEmail(), token, savedUser.getVerificationToken());
        
        // Doğrulama e-postası gönder
        emailService.sendVerificationEmail(savedUser.getEmail(), token);
        
        Map<String, Object> response = new HashMap<>();
        response.put("id", savedUser.getId());
        response.put("name", savedUser.getName());
        response.put("email", savedUser.getEmail());
        response.put("username", savedUser.getUsername());
        response.put("message", "Kayıt başarılı. Lütfen e-posta adresinizi doğrulayın.");
        return response;
    }

    public Map<String, Object> verifyEmail(String token) {
        logger.info("E-posta doğrulama isteği alındı. Token: {}", token);
        
        // Önce token ile kullanıcıyı bul
        Optional<User> userOpt = userRepository.findByVerificationToken(token);
        
        if (userOpt.isEmpty()) {
            logger.error("Geçersiz doğrulama token'ı: {}", token);
            throw new RuntimeException("Geçersiz doğrulama token'ı");
        }
        
        User user = userOpt.get();
        logger.info("Token bulundu, kullanıcı: {}, Enabled: {}", user.getEmail(), user.isEnabled());

        Map<String, Object> response = new HashMap<>();
        
        // Eğer kullanıcı zaten doğrulanmışsa
        if (user.isEnabled()) {
            response.put("message", "E-posta adresiniz zaten doğrulanmış. Giriş yapabilirsiniz.");
            return response;
        }

        // Kullanıcıyı doğrula
        user.setEnabled(true);
        // Token'ı silmiyoruz
        User savedUser = userRepository.save(user);

        logger.info("Kullanıcı e-postası doğrulandı: {}, Enabled: {}", savedUser.getEmail(), savedUser.isEnabled());

        response.put("message", "E-posta adresiniz başarıyla doğrulandı. Şimdi giriş yapabilirsiniz.");
        return response;
    }

    public Map<String, Object> login(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Geçersiz şifre");
        }

        if (!user.isEnabled()) {
            throw new RuntimeException("Lütfen önce e-posta adresinizi doğrulayın");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("id", user.getId());
        response.put("name", user.getName());
        response.put("email", user.getEmail());
        response.put("username", user.getUsername());
        return response;
    }
} 