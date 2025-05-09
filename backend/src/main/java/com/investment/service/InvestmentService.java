package com.investment.service;

import com.investment.model.Investment;
import com.investment.repository.InvestmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvestmentService {

    @Autowired
    private InvestmentRepository investmentRepository;

    public List<Investment> getAllInvestments() {
        return investmentRepository.findAll();
    }

    public Investment createInvestment(Investment investment) {
        return investmentRepository.save(investment);
    }

    public Investment updateInvestment(Investment investment) {
        if (!investmentRepository.existsById(investment.getId())) {
            throw new RuntimeException("Yatırım bulunamadı");
        }
        return investmentRepository.save(investment);
    }

    public void deleteInvestment(Long id) {
        if (!investmentRepository.existsById(id)) {
            throw new RuntimeException("Yatırım bulunamadı");
        }
        investmentRepository.deleteById(id);
    }
} 