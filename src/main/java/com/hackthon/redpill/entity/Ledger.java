package com.hackthon.redpill.entity;

public class Ledger {
	private String transactionId;
	private String accountId;
	private String entryType;
	private String amount;
	
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public String getAccountId() {
		return accountId;
	}
	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}
	public String getEntryType() {
		return entryType;
	}
	public void setEntryType(String entryType) {
		this.entryType = entryType;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	
	
}
