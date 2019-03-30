package com.skilldistillery.expensejpa.entities;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="transaction")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="income_or_expense")
	private String incomeOrExpense;
	
	@Column(name="date")
	private Date date;
	
	@Column(name="ammount")
	private double amount;
	
	@Column(name="source")
	private String source;
	
	@Column(name="category")
	private String category;
	
	@ManyToOne
	@JoinColumn(name="account_id")
	private Account account;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getIncomeOrExpense() {
		return incomeOrExpense;
	}

	public void setIncomeOrExpense(String incomeOrExpense) {
		this.incomeOrExpense = incomeOrExpense;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(int ammount) {
		this.amount = ammount;
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

	public String getCategory() {
		return category;
	}

	public void setCategory(String cagetory) {
		this.category = cagetory;
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
		long temp;
		temp = Double.doubleToLongBits(amount);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((category == null) ? 0 : category.hashCode());
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
		if (Double.doubleToLongBits(amount) != Double.doubleToLongBits(other.amount))
			return false;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (id != other.id)
			return false;
		if (incomeOrExpense == null) {
			if (other.incomeOrExpense != null)
				return false;
		} else if (!incomeOrExpense.equals(other.incomeOrExpense))
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
		return "Transaction [id=" + id + ", incomeOrExpense=" + incomeOrExpense + ", date=" + date + ", ammount="
				+ amount + ", source=" + source + ", cagetory=" + category + ", account=" + account + "]";
	}

	public Transaction(int id, String incomeOrExpense, Date date, int ammount, String source, String category,
			Account account) {
		super();
		this.id = id;
		this.incomeOrExpense = incomeOrExpense;
		this.date = date;
		this.amount = ammount;
		this.source = source;
		this.category = category;
		this.account = account;
	}

	public Transaction() {
		super();
	}

	
	
	
}
