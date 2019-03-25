package com.skilldistillery.expense.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.expensejpa.entities.Account;

public interface AccountRepository extends JpaRepository<Account, Integer>{

}
