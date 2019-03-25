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
	private int ammount;
	
	@Column(name="source")
	private String source;
	
	@Column(name="category")
	private String cagetory;
	
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

	public int getAmmount() {
		return ammount;
	}

	public void setAmmount(int ammount) {
		this.ammount = ammount;
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

	public String getCagetory() {
		return cagetory;
	}

	public void setCagetory(String cagetory) {
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
		result = prime * result + ammount;
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
		if (ammount != other.ammount)
			return false;
		if (cagetory == null) {
			if (other.cagetory != null)
				return false;
		} else if (!cagetory.equals(other.cagetory))
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
				+ ammount + ", source=" + source + ", cagetory=" + cagetory + ", account=" + account + "]";
	}

	public Transaction(int id, String incomeOrExpense, Date date, int ammount, String source, String cagetory,
			Account account) {
		super();
		this.id = id;
		this.incomeOrExpense = incomeOrExpense;
		this.date = date;
		this.ammount = ammount;
		this.source = source;
		this.cagetory = cagetory;
		this.account = account;
	}

	public Transaction() {
		super();
	}

	
	
	
}
