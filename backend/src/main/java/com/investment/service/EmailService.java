package com.investment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    @Autowired
    private JavaMailSender mailSender;

    public void sendVerificationEmail(String to, String token) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("burakeroksuz@gmail.com"); // Gönderen e-posta adresi
            message.setTo(to);
            message.setSubject("E-posta Doğrulama");
            message.setText("Hesabınızı doğrulamak için aşağıdaki linke tıklayın:\n\n" +
                    "http://localhost:3000/verify-email?token=" + token);
            
            mailSender.send(message);
            logger.info("Doğrulama e-postası başarıyla gönderildi: {}", to);
        } catch (Exception e) {
            logger.error("E-posta gönderimi sırasında hata oluştu: {}", e.getMessage(), e);
            throw new RuntimeException("E-posta gönderilemedi: " + e.getMessage());
        }
    }
} 