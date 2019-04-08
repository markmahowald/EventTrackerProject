package com.skilldistillery.expense.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.expense.data.TransactionService;
import com.skilldistillery.expensejpa.entities.Transaction;

@RestController
@RequestMapping("api")
public class TransactionController {

	@Autowired
	TransactionService service;

	@GetMapping(path = "transactions")
	public List<Transaction> index() {
		List<Transaction> allTransactions = service.indexTransacion();
		return allTransactions;
	}

	@GetMapping(path = "transactions/{id}")
	public Transaction getTransactionById(@PathVariable int id, HttpServletResponse response) {
		Transaction transaction = service.showTransacion(id);
		if (!(transaction == null)) {
			response.setStatus(200);
		} else {
			response.setStatus(404);
		}
		return transaction;
	}

	@PostMapping(path = "transactions")
	public Transaction postATransaction(@RequestBody Transaction transaction, HttpServletResponse response,
			HttpServletRequest request) {

		try {
			transaction = service.createTransacion(transaction);
			response.setStatus(201);

			StringBuffer url = request.getRequestURL();
			url.append("/");
			url.append(transaction.getId());
			response.setHeader("Location", url.toString());
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}
		return transaction;
	}
	@PutMapping(path = "transactions/{id}")
	public Transaction replaceTransactionById(@PathVariable("id") int id, @RequestBody Transaction transaction) {
		transaction = service.updateTransacion(transaction, id);
		return transaction;
	}

	@DeleteMapping(path = "transactions/{id}")
	public void deleteTransaction(@PathVariable("id") int id, HttpServletResponse response) {
		try {
			service.deleteTransacion(id);
			response.setStatus(204);
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(404);
		}
	}
	@GetMapping(path="transactions/totals")
	public List<Double> getAllIncomeAndExpense() {
		List<Double> results= service.getTotalIncomeAndExpense();
//		System.out.println(""+results.get(1) + results.get(2));
		return results;
	}
}
