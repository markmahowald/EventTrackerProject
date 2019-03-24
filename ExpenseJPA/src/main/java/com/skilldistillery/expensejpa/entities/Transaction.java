package com.skilldistillery.expensejpa.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="income_or_expense")
	private IncomeOrExpense incomeOrExpense;
	
	@Column(name="date")
	private Date date;
	
	@Column(name="source")
	private String source;
	
	@Column(name="category")
	private Category cagetory;
	
	@ManyToOne
	@JoinColumn(name="account_id")
	private Account account;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public IncomeOrExpense getIncomeOrExpense() {
		return incomeOrExpense;
	}

	public void setIncomeOrExpense(IncomeOrExpense incomeOrExpense) {
		this.incomeOrExpense = incomeOrExpense;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public Category getCagetory() {
		return cagetory;
	}

	public void setCagetory(Category cagetory) {
		this.cagetory = cagetory;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((account == null) ? 0 : account.hashCode());
		result = prime * result + ((cagetory == null) ? 0 : cagetory.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + id;
		result = prime * result + ((incomeOrExpense == null) ? 0 : incomeOrExpense.hashCode());
		result = prime * result + ((source == null) ? 0 : source.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Transaction other = (Transaction) obj;
		if (account == null) {
			if (other.account != null)
				return false;
		} else if (!account.equals(other.account))
			return false;
		if (cagetory != other.cagetory)
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (id != other.id)
			return false;
		if (incomeOrExpense != other.incomeOrExpense)
			return false;
		if (source == null) {
			if (other.source != null)
				return false;
		} else if (!source.equals(other.source))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Transaction [id=" + id + ", incomeOrExpense=" + incomeOrExpense + ", date=" + date + ", source="
				+ source + ", cagetory=" + cagetory + ", account=" + account.getName() + "]";
	}

	public Transaction(int id, IncomeOrExpense incomeOrExpense, Date date, String source, Category cagetory,
			Account account) {
		super();
		this.id = id;
		this.incomeOrExpense = incomeOrExpense;
		this.date = date;
		this.source = source;
		this.cagetory = cagetory;
		this.account = account;
	}

	public Transaction() {
		super();
	}
	
	
	
	
}
