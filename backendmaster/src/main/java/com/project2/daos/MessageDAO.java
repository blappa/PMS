package com.project2.daos;

import java.util.List;

import com.project2.entities.Message;

public interface MessageDAO {
	
	public boolean addMessage(Message msg);
	
	public Message getMessage();
	
	public List<Message> getAllMessage(int id);
	
	public boolean updateMessage(Message change);
	
	public boolean deleteMessage(int id);
	

}
