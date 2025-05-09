package com.investment.controller;

import com.investment.model.Investment;
import com.investment.service.InvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/investments")
@CrossOrigin(origins = "http://localhost:3000")
public class InvestmentController {

    @Autowired
    private InvestmentService investmentService;

    @GetMapping
    public ResponseEntity<List<Investment>> getAllInvestments() {
        return ResponseEntity.ok(investmentService.getAllInvestments());
    }

    @PostMapping
    public ResponseEntity<Investment> createInvestment(@RequestBody Investment investment) {
        return ResponseEntity.ok(investmentService.createInvestment(investment));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Investment> updateInvestment(@PathVariable Long id, @RequestBody Investment investment) {
        investment.setId(id);
        return ResponseEntity.ok(investmentService.updateInvestment(investment));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInvestment(@PathVariable Long id) {
        investmentService.deleteInvestment(id);
        return ResponseEntity.ok().build();
    }
} 