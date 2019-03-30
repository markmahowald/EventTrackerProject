package com.skilldistillery.expense;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@EntityScan("com.skilldistillery.expensejpa.entities")
@SpringBootApplication
public class ExpenseRestApplication extends SpringBootServletInitializer{

	 @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(ExpenseRestApplication.class);
	  }
	
	public static void main(String[] args) {
		SpringApplication.run(ExpenseRestApplication.class, args);
	}

}
