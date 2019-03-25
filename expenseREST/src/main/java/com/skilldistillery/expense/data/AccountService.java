package com.skilldistillery.expense.data;

import java.util.List;

import com.skilldistillery.expensejpa.entities.Account;

public interface AccountService {
	public List<Account> indexAccount();
	public Account showAccount(int id);
	public Account createAccount(Account a);
	public Account updateAccount(Account a, int id);
	public boolean deleteAccount(int accountId);
	public double accountTotal(Account a);
	public double getCurrentTotal(Account a);

}
