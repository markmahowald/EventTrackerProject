package com.skilldistillery.expensejpa.test;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.expensejpa.entities.Transaction;

class TransactionTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Transaction transaction;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("expense");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		transaction = em.find(Transaction.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		transaction = null;
		em.close();
	}
	
	
	@Test
	void test_transaction_mapping() {
		assertEquals("Groceries", transaction.getCategory());
		assertEquals(1, transaction.getId());
		assertEquals("xxx", transaction.getIncomeOrExpense());
	}

}
