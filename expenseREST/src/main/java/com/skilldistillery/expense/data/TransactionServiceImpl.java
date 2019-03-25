package com.skilldistillery.expense.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.expense.repositories.AccountRepository;
import com.skilldistillery.expense.repositories.TransactionRepository;
import com.skilldistillery.expensejpa.entities.Transaction;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	TransactionRepository repo;

	@Autowired
	AccountRepository accRepo;

	@Override
	public List<Transaction> indexTransacion() {
		List<Transaction> results = repo.findAll();
		return results;
	}

	@Override
	public Transaction showTransacion(int id) {
		Optional<Transaction> opttran = repo.findById(id);
		Transaction t = null;
		if (opttran.isPresent()) {
			t = opttran.get();
		} else {
			return null;
		}
		return t;
	}

	@Override
	public Transaction createTransacion(Transaction t) {
		repo.saveAndFlush(t);
		return t;
	}

	@Override
	public Transaction updateTransacion(Transaction t, int id) {
		Optional<Transaction> optAcc = repo.findById(id);
		if(optAcc.isPresent()) {
			Transaction managed = optAcc.get();
			managed.setAccount(t.getAccount());
			managed.setCagetory(t.getCagetory());
			managed.setDate(t.getDate());
			managed.setIncomeOrExpense(t.getIncomeOrExpense());
			managed.setSource(t.getSource());
			repo.saveAndFlush(managed);
			t=managed;
		}
		return t;
	}

	@Override
	public boolean deleteTransacion(int transacionId) {
		boolean deleted = false;
		if(repo.existsById(transacionId)) {
			repo.deleteById(transacionId);
			deleted=true;
		}
		return deleted;
	}

	@Override
	public List<Transaction> showTransactionByAccount(int postId) {
		
		return null;
	}

}
