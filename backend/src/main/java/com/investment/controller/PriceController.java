package com.investment.controller;

import com.investment.service.PriceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/prices")
@RequiredArgsConstructor
public class PriceController {
    private final PriceService priceService;

    @GetMapping("/current")
    public ResponseEntity<Map<String, BigDecimal>> getCurrentPrices(@RequestParam List<String> symbols) {
        return ResponseEntity.ok(priceService.getCurrentPrices(symbols));
    }
} 