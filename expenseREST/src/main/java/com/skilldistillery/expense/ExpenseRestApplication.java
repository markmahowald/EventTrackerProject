package com.skilldistillery.expense;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan("com.skilldistillery.expensejpa.entities")
@SpringBootApplication
public class ExpenseRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExpenseRestApplication.class, args);
	}

}
