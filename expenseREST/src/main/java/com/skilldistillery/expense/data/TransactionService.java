package com.skilldistillery.expense.data;

import java.util.ArrayList;
import java.util.List;

import javax.xml.stream.events.Comment;

import com.skilldistillery.expensejpa.entities.Transaction;

public interface TransactionService {
	public List<Transaction> indexTransacion();
	public Transaction showTransacion(int id);
	public Transaction createTransacion(Transaction t);
	public Transaction updateTransacion(Transaction t, int id);
	boolean deleteTransacion(int transacionId);
	public List<Transaction> showTransactionByAccount(int postId);
	public ArrayList<Double> getTotalIncomeAndExpense();
	

}
