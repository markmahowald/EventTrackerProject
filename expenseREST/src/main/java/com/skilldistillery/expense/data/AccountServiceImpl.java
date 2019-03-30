package com.skilldistillery.expense.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.expense.repositories.AccountRepository;
import com.skilldistillery.expensejpa.entities.Account;
import com.skilldistillery.expensejpa.entities.Transaction;

@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	AccountRepository repo;

	@Override
	public List<Account> indexAccount() {
		List<Account> results = repo.findAll();
		return results;
	}

	@Override
	public Account showAccount(int id) {
		Optional<Account> optacc = repo.findById(id);
		Account a = null;
		if (optacc.isPresent()) {
			a = optacc.get();
		} else {
			return null;
		}
		return a;
	}

	@Override
	public Account createAccount(Account a) {
		repo.saveAndFlush(a);
		return a;
	}

	@Override
	public Account updateAccount(Account a, int id) {
		Optional<Account> optAcc = repo.findById(id);
		if (optAcc.isPresent()) {
			Account managed = optAcc.get();
			managed.setName(a.getName());
			managed.setTotal(a.getTotal());
			managed.setTransactions(a.getTransactions());
			repo.saveAndFlush(managed);
			a = managed;
		}
		return a;
	}

	@Override
	public boolean deleteAccount(int accountId) {
		boolean deleted = false;
		if (repo.existsById(accountId)) {
			repo.deleteById(accountId);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public double accountTotal(Account a) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double getCurrentTotal(Account a) {
		double total = a.getTotal();
		List<Transaction> transactions = a.getTransactions();
		for (Transaction transaction : transactions) {
			if (transaction.getIncomeOrExpense() == "income") {
				total += transaction.getAmount();
			} else {
				total -= transaction.getAmount();
			}

		}
		return total;
	}

}
