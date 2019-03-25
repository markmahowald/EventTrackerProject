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

import com.skilldistillery.expense.data.AccountService;
import com.skilldistillery.expensejpa.entities.Account;

@RestController
@RequestMapping("api")
public class AccountController {

	@Autowired
	AccountService service;

	@GetMapping(path = "accounts")
	public List<Account> index() {
		List<Account> allAccounts = service.indexAccount();
		return allAccounts;
	}

	@GetMapping(path = "accounts/{id}")
	public Account getCategorytById(@PathVariable int id, HttpServletResponse response) {
		Account account = service.showAccount(id);
		if (!(account == null)) {
			response.setStatus(200);
		} else {
			response.setStatus(404);
		}
		return account;
	}

	@PostMapping(path = "accounts")
	public Account postAComment(@RequestBody Account account, HttpServletResponse response,
			HttpServletRequest request) {

		try {
			account = service.createAccount(account);
			response.setStatus(201);

			StringBuffer url = request.getRequestURL();
			url.append("/");
			url.append(account.getId());
			response.setHeader("Location", url.toString());
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}
		return account;
	}

	@PutMapping(path = "accounts/{id}")
	public Account replaceAccountById(@PathVariable("id") int id, @RequestBody Account category) {
		category = service.updateAccount(category, id);
		return category;
	}

	@DeleteMapping(path = "accounts/{id}")
	public void deleteComment(@PathVariable("id") int id, HttpServletResponse response) {
		try {
			service.deleteAccount(id);
			response.setStatus(204);
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(404);
		}
	}
}
