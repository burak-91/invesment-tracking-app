package com.investment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class InvestmentTrackerApplication {
    public static void main(String[] args) {
        SpringApplication.run(InvestmentTrackerApplication.class, args);
    }
} 