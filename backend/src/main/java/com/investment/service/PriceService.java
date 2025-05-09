package com.investment.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PriceService {
    private final RestTemplate restTemplate;
    private static final String COINGECKO_API = "https://api.coingecko.com/api/v3";
    private static final String ALPHAVANTAGE_API = "https://www.alphavantage.co/query";

    public BigDecimal getCurrentPrice(String symbol) {
        // Bu örnekte sadece CoinGecko API'sini kullanıyoruz
        String url = COINGECKO_API + "/simple/price?ids=" + symbol + "&vs_currencies=try";
        Map<String, Map<String, Double>> response = restTemplate.getForObject(url, Map.class);
        
        if (response != null && response.containsKey(symbol)) {
            return BigDecimal.valueOf(response.get(symbol).get("try"));
        }
        
        throw new RuntimeException("Fiyat bilgisi alınamadı: " + symbol);
    }

    public Map<String, BigDecimal> getCurrentPrices(List<String> symbols) {
        String symbolsParam = String.join(",", symbols);
        String url = COINGECKO_API + "/simple/price?ids=" + symbolsParam + "&vs_currencies=try";
        Map<String, Map<String, Double>> response = restTemplate.getForObject(url, Map.class);
        
        if (response == null) {
            throw new RuntimeException("Fiyat bilgileri alınamadı");
        }
        
        return response.entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        e -> BigDecimal.valueOf(e.getValue().get("try"))
                ));
    }
} 