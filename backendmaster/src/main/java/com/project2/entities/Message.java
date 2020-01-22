package com.project2.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Message {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String message;
	private String status;
	private String time;
	private int read;
	
	@ManyToOne
	private Hospital_User sender;
	
	@ManyToOne
	private Hospital_User receiver;
	
	
	public Message() {
		super();
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public Hospital_User getSender() {
		return sender;
	}


	public void setSender(Hospital_User sender) {
		this.sender = sender;
	}


	public Hospital_User getReceiver() {
		return receiver;
	}

	

	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}


	public void setReceiver(Hospital_User receiver) {
		this.receiver = receiver;
	}


	public int isRead() {
		return read;
	}


	public void setRead(int read) {
		this.read = read;
	}


}
