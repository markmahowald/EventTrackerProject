package com.skilldistillery.expense.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.expensejpa.entities.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
