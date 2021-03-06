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

import com.skilldistillery.expensejpa.entities.Account;

class AccountTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Account account;
	
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
		account = em.find(Account.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		account = null;
		em.close();
	}
	
	@Test
	void test_account_mapping() {
		assertEquals(1, account.getId());
		assertEquals("checking", account.getName());
		assertEquals(3000, account.getTotal());
	}

}
