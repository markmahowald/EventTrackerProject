package com.skilldistillery.expense.repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.skilldistillery.expensejpa.entities.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

	@Query(value="select t.amount from Transaction t where t.incomeOrExpense = income" )
	ArrayList<Integer> querytoSumAllIncome();
}


//Final Query sumQuery = entityManager
//.createQuery("SELECT SUM(p.price), SUM(p.sale) FROM Product p WHERE p.item=:ITEM AND ....");
//sumQuery.setParameter("ITEM","t1");